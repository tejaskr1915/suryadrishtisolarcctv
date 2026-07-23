import { db, getCameraFeatures } from '../utils/dbMock';
import { supabase } from '../utils/supabaseClient';

const isBrowser = typeof window !== 'undefined';

// Safe query runner that automatically falls back to client local storage if Supabase is unconfigured or tables are missing.
const safeQuery = async (queryFn, fallbackFn) => {
  try {
    const { data, error } = await queryFn();
    if (error) {
      console.warn('Supabase query returned error, falling back to local DB:', error.message);
      return fallbackFn();
    }
    return data;
  } catch (err) {
    console.warn('Supabase connection exception, falling back to local DB:', err.message);
    return fallbackFn();
  }
};

export const apiService = {
  // PRODUCTS (PIM)
  getProducts: async () => {
    const data = await safeQuery(
      () => supabase.from('products').select('*').order('name'),
      () => db.getProducts()
    );
    return (data || []).map(p => {
      if (p.type === 'solar-camera' && !p.features) {
        return {
          ...p,
          features: getCameraFeatures(p)
        };
      }
      return p;
    });
  },

  saveProduct: async (product) => {
    try {
      const { data, error } = await supabase.from('products').upsert(product).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase save product failed, saving to local DB:', err.message);
      return db.saveProduct(product);
    }
  },

  deleteProduct: async (id) => {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase delete product failed, deleting from local DB:', err.message);
      return db.deleteProduct(id);
    }
  },

  duplicateProduct: async (id) => {
    try {
      const products = await apiService.getProducts();
      const target = products.find(p => p.id === id);
      if (!target) throw new Error('Product not found');
      
      const duplicate = {
        ...target,
        id: 'prod-' + Date.now(),
        sku: `${target.sku}-DUP`,
        name: `${target.name} (Copy)`,
        status: 'Draft'
      };
      return apiService.saveProduct(duplicate);
    } catch (err) {
      console.warn('Supabase duplicate failed, using local DB:', err.message);
      return db.duplicateProduct(id);
    }
  },

  // CATEGORIES
  getCategories: async () => {
    return safeQuery(
      () => supabase.from('categories').select('*').order('displayOrder'),
      () => db.getCategories()
    );
  },

  saveCategory: async (category) => {
    try {
      const { data, error } = await supabase.from('categories').upsert(category).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase save category failed, saving to local DB:', err.message);
      return db.saveCategory(category);
    }
  },

  deleteCategory: async (id) => {
    try {
      const { error } = await supabase.from('categories').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase delete category failed, deleting from local DB:', err.message);
      return db.deleteCategory(id);
    }
  },

  // COMPATIBILITY RULES
  getRules: async () => {
    return safeQuery(
      () => supabase.from('rules').select('*'),
      () => db.getRules()
    );
  },

  saveRule: async (rule) => {
    try {
      const { data, error } = await supabase.from('rules').upsert(rule).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase save rule failed, saving to local DB:', err.message);
      return db.saveRule(rule);
    }
  },

  deleteRule: async (id) => {
    try {
      const { error } = await supabase.from('rules').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase delete rule failed, deleting from local DB:', err.message);
      return db.deleteRule(id);
    }
  },

  // AUDIT LOGS
  getLogs: async () => {
    return safeQuery(
      () => supabase.from('logs').select('*').order('timestamp', { ascending: false }).limit(50),
      () => db.getLogs()
    );
  },

  writeLog: async (type, message) => {
    const payload = {
      id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      timestamp: new Date().toISOString(),
      type,
      message
    };
    try {
      const { data, error } = await supabase.from('logs').insert([payload]).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase log failed, writing to local DB:', err.message);
      return db.writeLog(type, message);
    }
  },

  // WEBSITE SETTINGS
  getWebSettings: async () => {
    try {
      const { data, error } = await supabase.from('settings').select('*').eq('id', 'global_settings');
      if (error || !data || data.length === 0) {
        return db.getWebSettings();
      }
      return data[0];
    } catch (err) {
      return db.getWebSettings();
    }
  },

  saveWebSettings: async (settings) => {
    try {
      const payload = { ...settings, id: 'global_settings' };
      const { data, error } = await supabase.from('settings').upsert(payload).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase settings update failed, saving to local DB:', err.message);
      return db.saveWebSettings(settings);
    }
  },

  // ORDERS & QUOTATIONS
  getOrders: async () => {
    return safeQuery(
      () => supabase.from('orders').select('*').order('date', { ascending: false }),
      () => db.getOrders()
    );
  },

  saveOrder: async (order) => {
    try {
      const orderId = order.id || 'SD-' + Math.floor(1000 + Math.random() * 9000);
      const payload = {
        ...order,
        id: orderId,
        date: order.date || new Date().toISOString().split('T')[0]
      };
      const { data, error } = await supabase.from('orders').upsert(payload).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase order creation failed, saving to local DB:', err.message);
      return db.saveOrder(order);
    }
  },

  deleteOrder: async (id) => {
    try {
      const { error } = await supabase.from('orders').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase delete order failed, deleting from local DB:', err.message);
      return db.deleteOrder(id);
    }
  },

  // SERVICE REQUESTS
  getServices: async () => {
    return safeQuery(
      () => supabase.from('services').select('*').order('dateCreated', { ascending: false }),
      () => db.getServices()
    );
  },

  saveServiceRequest: async (request) => {
    try {
      const reqId = request.id || 'SR-' + Math.floor(100 + Math.random() * 900);
      const payload = {
        ...request,
        id: reqId,
        dateCreated: request.dateCreated || new Date().toISOString().split('T')[0],
        status: request.status || 'Submitted',
        assignedTech: request.assignedTech || 'Unassigned'
      };
      const { data, error } = await supabase.from('services').upsert(payload).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase service request failed, saving to local DB:', err.message);
      return db.saveServiceRequest(request);
    }
  },

  // GALLERY
  getGallery: async () => {
    return safeQuery(
      () => supabase.from('gallery').select('*'),
      () => db.getGallery()
    );
  },

  saveGalleryItem: async (item) => {
    try {
      const { data, error } = await supabase.from('gallery').upsert(item).select();
      if (error) throw error;
      return data[0];
    } catch (err) {
      console.warn('Supabase gallery item upload failed, saving to local DB:', err.message);
      return db.saveGalleryItem(item);
    }
  },

  deleteGalleryItem: async (id) => {
    try {
      const { error } = await supabase.from('gallery').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('Supabase delete gallery item failed, deleting from local DB:', err.message);
      return db.deleteGalleryItem(id);
    }
  },

  // ANALYTICS & REPORTS
  getAnalytics: async () => {
    try {
      const products = await apiService.getProducts();
      const orders = await apiService.getOrders();
      const categories = await apiService.getCategories();
      const logs = await apiService.getLogs();

      const totalProducts = products.length;
      const activeProducts = products.filter(p => p.status === 'Active').length;
      const draftProducts = products.filter(p => p.status === 'Draft').length;
      const featuredProducts = products.filter(p => p.sku && p.sku.includes('PTZ')).length;

      const lowStockAlerts = products.filter(p => (p.stockQuantity || 0) <= (p.lowStockThreshold || 5));
      const outOfStockCount = products.filter(p => (p.stockQuantity || 0) === 0).length;

      const approvedOrders = orders.filter(o => o.status === 'Accepted');
      const totalSales = approvedOrders.length;
      
      const revenue = approvedOrders.reduce((sum, order) => {
        const cam = products.find(p => p.id === order.camera?.id) || { price: 500 };
        const bat = products.find(p => p.id === order.battery?.id) || { price: 150 };
        const pan = products.find(p => p.id === order.panel?.id) || { price: 100 };
        const card = products.find(p => p.id === order.memoryCard?.id) || { price: 20 };
        const accSum = (order.accessories || []).reduce((s, a) => s + (a.price || 0), 0);
        return sum + (Number(cam.price || 0) + Number(bat.price || 0) + Number(pan.price || 0) + Number(card.price || 0) + accSum);
      }, 0);

      return {
        totalProducts,
        activeProducts,
        draftProducts,
        featuredProducts,
        categoryCount: categories.length,
        ordersCount: orders.length,
        customersCount: [...new Set(orders.map(o => o.customer?.phone).filter(Boolean))].length,
        quotationsCount: orders.length,
        inventorySummary: {
          totalStock: products.reduce((sum, p) => sum + (p.stockQuantity || 0), 0),
          lowStockCount: lowStockAlerts.length,
          outOfStockCount
        },
        lowStockAlerts,
        revenueSummary: {
          totalSales,
          totalRevenue: revenue,
          avgTicketValue: totalSales > 0 ? parseFloat((revenue / totalSales).toFixed(2)) : 0
        },
        recentActivities: logs.slice(0, 10)
      };
    } catch (err) {
      return db.getAnalytics();
    }
  }
};
