import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { supabase } from '../utils/supabaseClient';
import { t } from '../utils/translate';
import { 
  BarChart3, ShoppingCart, Users, RefreshCw, Edit2, Check, 
  Trash2, Image, Plus, FolderCheck, Wrench, Settings, Copy, 
  Archive, FileText, Eye, Search, AlertTriangle, EyeOff, Activity, Home
} from 'lucide-react';

export default function AdminDashboard() {
  const store = useConfiguratorStore();

  const uploadImageToSupabase = async (file, folder = 'images') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;

      const { error } = await supabase.storage
        .from('media')
        .upload(filePath, file, {
          contentType: file.type,
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('Supabase upload error:', err);
      store.addToast(`File upload failed: ${err.message}`, 'error');
      return null;
    }
  };
  
  // Navigation tabs
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pim' | 'builder' | 'orders' | 'customers' | 'settings'

  // Data states
  const [analytics, setAnalytics] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rules, setRules] = useState([]);
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [webSettings, setWebSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Form states
  const [editingProduct, setEditingProduct] = useState(null);
  const [previewingProduct, setPreviewingProduct] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showRuleForm, setShowRuleForm] = useState(false);

  // New product payload template
  const defaultProduct = {
    name: '', sku: '', category: 'Solar Cameras', brand: 'Surya Drishti', modelNumber: '',
    shortDescription: '', description: '', keyFeatures: '', technicalSpecs: '',
    highlights: '', applications: '', warrantyDetails: '5 Years Warranty', installationInfo: '',
    price: 499, discountPrice: 459, offerPrice: 439, gstPercentage: 18,
    installationCharges: 99, deliveryCharges: 15, image: '/images/cam1.jpg',
    status: 'Active', stockQuantity: 20, availableStock: 20, lowStockThreshold: 5,
    lensCount: 1, type: 'solar-camera'
  };
  const [productForm, setProductForm] = useState({ ...defaultProduct });

  // New category payload template
  const defaultCategory = { name: '', nameKn: '', image: '/images/cam1.jpg', displayOrder: 1, enabled: true };
  const [categoryForm, setCategoryForm] = useState({ ...defaultCategory });

  // New compatibility rule payload template
  const defaultRule = { type: 'camera-battery', cameraLens: 1, batteryId: 'bat-12', panelId: 'panel-20', description: '' };
  const [ruleForm, setRuleForm] = useState({ ...defaultRule });

  // Load all dashboard records
  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes, ruleRes, orderRes, serviceRes, settingsRes, analyticsRes] = await Promise.all([
        apiService.getProducts(),
        apiService.getCategories(),
        apiService.getRules(),
        apiService.getOrders(),
        apiService.getServices(),
        apiService.getWebSettings(),
        apiService.getAnalytics()
      ]);
      setProducts(prodRes);
      setCategories(catRes);
      setRules(ruleRes);
      setOrders(orderRes);
      setServices(serviceRes);
      setWebSettings(settingsRes);
      setAnalytics(analyticsRes);
    } catch (e) {
      store.addToast('Error loading administrator records', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [activeTab]);

  // Product mutations
  const handleSaveProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.saveProduct(productForm);
      store.addToast(`Saved product: ${productForm.name}`, 'success');
      setShowProductForm(false);
      setProductForm({ ...defaultProduct });
      setEditingProduct(null);
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to save product details', 'error');
    }
  };

  const handleEditProductClick = (prod) => {
    setEditingProduct(prod);
    setProductForm({ ...prod });
    setShowProductForm(true);
  };

  const handleDuplicateProduct = async (id) => {
    try {
      await apiService.duplicateProduct(id);
      store.addToast('Product duplicated successfully', 'success');
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to duplicate product', 'error');
    }
  };

  const handleDeleteProductClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await apiService.deleteProduct(id);
        store.addToast('Product deleted from inventory', 'info');
        loadDashboardData();
      } catch (err) {
        store.addToast('Failed to delete product', 'error');
      }
    }
  };

  const handleArchiveProduct = async (prod) => {
    try {
      const updated = { ...prod, status: prod.status === 'Archived' ? 'Active' : 'Archived' };
      await apiService.saveProduct(updated);
      store.addToast(`Product status toggled to: ${updated.status}`, 'info');
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to archive product', 'error');
    }
  };

  const handlePublishToggle = async (prod) => {
    try {
      const updated = { ...prod, status: prod.status === 'Active' ? 'Draft' : 'Active' };
      await apiService.saveProduct(updated);
      store.addToast(`Published toggle: ${updated.status}`, 'success');
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to toggle publish status', 'error');
    }
  };

  // Category mutations
  const handleSaveCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.saveCategory(categoryForm);
      store.addToast(`Saved category: ${categoryForm.name}`, 'success');
      setShowCategoryForm(false);
      setCategoryForm({ ...defaultCategory });
      setEditingCategory(null);
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to save category', 'error');
    }
  };

  const handleEditCategoryClick = (cat) => {
    setEditingCategory(cat);
    setCategoryForm({ ...cat });
    setShowCategoryForm(true);
  };

  const handleDeleteCategoryClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await apiService.deleteCategory(id);
        store.addToast('Category deleted successfully', 'info');
        loadDashboardData();
      } catch (err) {
        store.addToast('Failed to delete category', 'error');
      }
    }
  };

  // Compatibility Rule mutations
  const handleSaveRuleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...ruleForm,
        description: ruleForm.description || (
          ruleForm.type === 'camera-battery' 
            ? `${ruleForm.cameraLens} Lens Camera requires battery ID: ${ruleForm.batteryId}`
            : `Panel ID: ${ruleForm.panelId} restricts battery selection to ID: ${ruleForm.batteryId}`
        )
      };
      await apiService.saveRule(payload);
      store.addToast('New compatibility rule saved', 'success');
      setShowRuleForm(false);
      setRuleForm({ ...defaultRule });
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to create compatibility rule', 'error');
    }
  };

  const handleDeleteRuleClick = async (id) => {
    try {
      await apiService.deleteRule(id);
      store.addToast('Compatibility rule deleted', 'info');
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to delete rule', 'error');
    }
  };

  // Order status mutations
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const target = orders.find(o => o.id === orderId);
      if (target) {
        const updated = { ...target, status: newStatus };
        await apiService.saveOrder(updated);
        store.addToast(`Updated order status to ${newStatus}`, 'success');
        loadDashboardData();
      }
    } catch (err) {
      store.addToast('Failed to update status', 'error');
    }
  };

  const handleSaveWebSettingsSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.saveWebSettings(webSettings);
      store.addToast('System website settings updated successfully', 'success');
      loadDashboardData();
    } catch (err) {
      store.addToast('Failed to update settings', 'error');
    }
  };

  // Filter products by search terms
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Admin Nav */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        
        {/* Dedicated Return to Home Page button */}
        <button
          onClick={() => store.setActiveTab('home')}
          className="w-full mb-4 p-3.5 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all cursor-pointer flex items-center justify-center gap-2 font-space uppercase tracking-wider"
        >
          <Home className="w-4 h-4 animate-pulse" /> {t("ಮುಖ್ಯ ಪುಟ / Home Page", store.language)}
        </button>

        <div className="p-4 rounded-2xl border border-white/5 bg-zinc-950/40 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan">
            <Settings className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide">Administrator Panel</h4>
            <span className="text-[10px] text-zinc-500 font-space">Centralized Control Desk</span>
          </div>
        </div>

        {[
          { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
          { id: 'pim', label: 'Product Catalog (PIM)', icon: FolderCheck },
          { id: 'builder', label: 'Rules & Options', icon: Wrench },
          { id: 'orders', label: 'Orders & Quotes', icon: ShoppingCart },
          { id: 'customers', label: 'Customers Manager', icon: Users },
          { id: 'settings', label: 'Settings & Content', icon: Settings }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full p-3.5 rounded-xl border flex items-center gap-3 text-xs font-semibold tracking-wide font-space transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-electric-cyan/10 border-electric-cyan text-electric-cyan'
                : 'bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}

        <button
          onClick={() => {
            if (window.confirm('Reset all databases to default seed records?')) {
              db.resetSeed();
              loadDashboardData();
              store.addToast('Database configurations seeded back to default!', 'success');
            }
          }}
          className="w-full mt-6 p-3.5 rounded-xl border border-red-500/20 bg-red-950/10 text-red-400 text-xs font-semibold hover:bg-red-950/20 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Reset DB Seed
        </button>
      </aside>

      {/* Main Admin Content Desk */}
      <main className="flex-grow min-w-0">
        
        {loading ? (
          <div className="h-[400px] rounded-3xl glass-panel border border-white/5 flex items-center justify-center text-zinc-400 text-sm gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-electric-cyan" /> Retrieving Admin Records...
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* 1. OVERVIEW & ANALYTICS TAB */}
            {activeTab === 'overview' && analytics && (
              <div className="space-y-6">
                
                {/* Stats Counters Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Products', val: analytics.totalProducts, desc: `${analytics.activeProducts} Active / ${analytics.draftProducts} Draft` },
                    { label: 'Orders & Quotes', val: analytics.ordersCount, desc: 'Pending user quotes' },
                    { label: 'Category Count', val: analytics.categoryCount, desc: 'Active groupings' },
                    { label: 'Unique Customers', val: analytics.customersCount, desc: 'Verified phone profiles' }
                  ].map((stat, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-space">{stat.label}</span>
                      <h3 className="text-3xl font-semibold text-white my-2">{stat.val}</h3>
                      <span className="text-[10px] text-zinc-400">{stat.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Revenue Summary and Stock Warnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20">
                    <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-electric-cyan" /> Revenue Summary
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-white/5">
                        <span className="text-xs text-zinc-400">Total Approved Sales</span>
                        <span className="text-xs font-semibold text-white font-space">{analytics.revenueSummary.totalSales} Orders</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/5">
                        <span className="text-xs text-zinc-400">Mock Generated Revenue</span>
                        <span className="text-sm font-semibold text-electric-emerald font-space">${analytics.revenueSummary.totalRevenue}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-xs text-zinc-400">Average Order Value</span>
                        <span className="text-xs font-semibold text-white font-space">${analytics.revenueSummary.avgTicketValue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20">
                    <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4" /> Low Stock Alarms
                    </h4>
                    {analytics.lowStockAlerts.length > 0 ? (
                      <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                        {analytics.lowStockAlerts.map(p => (
                          <div key={p.id} className="flex justify-between items-center p-2 rounded-xl bg-zinc-950/60 border border-amber-500/10">
                            <span className="text-xs text-zinc-300 truncate max-w-[200px]">{p.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold font-space">
                              Qty: {p.stockQuantity} (Low)
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500 text-center py-6">All products have healthy stock levels.</p>
                    )}
                  </div>
                </div>

                {/* System Audit logs */}
                <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20">
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-electric-sky" /> System Audit Trail Logs
                  </h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {analytics.recentActivities.map(log => (
                      <div key={log.id} className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-950/40 border border-white/5 hover:bg-zinc-950/60 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-widest ${
                            log.type === 'Product' ? 'bg-electric-cyan/10 text-electric-cyan' :
                            log.type === 'Order' ? 'bg-electric-emerald/10 text-electric-emerald' :
                            log.type === 'Login' ? 'bg-electric-sky/10 text-electric-sky' : 'bg-zinc-800 text-zinc-400'
                          }`}>
                            {log.type}
                          </span>
                          <span className="text-zinc-300 font-medium">{log.message}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-space">{new Date(log.timestamp).toLocaleTimeString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 2. PRODUCT INFORMATION MANAGEMENT (PIM) TAB */}
            {activeTab === 'pim' && (
              <div className="space-y-6">
                
                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search SKU, name, group..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-electric-cyan"
                    />
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="bg-zinc-950/80 border border-zinc-800 text-xs text-white rounded-xl px-4 py-2.5 focus:outline-none"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>

                    <button
                      onClick={() => {
                        setEditingProduct(null);
                        setProductForm({ ...defaultProduct });
                        setShowProductForm(true);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase font-space tracking-wide flex items-center gap-1.5 ml-auto cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Add Product
                    </button>
                  </div>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto rounded-3xl border border-white/5 bg-zinc-950/20">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-space bg-zinc-950/40">
                        <th className="p-4">SKU / Model</th>
                        <th className="p-4">Product Name</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Price / Stock</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                      {filteredProducts.map(prod => (
                        <tr key={prod.id} className="hover:bg-zinc-950/30 transition-colors">
                          <td className="p-4">
                            <div className="font-space font-medium text-white">{prod.sku || 'N/A'}</div>
                            <div className="text-[10px] text-zinc-500">{prod.modelNumber || 'N/A'}</div>
                          </td>
                          <td className="p-4 font-semibold text-white">{prod.name}</td>
                          <td className="p-4">{prod.category}</td>
                          <td className="p-4">
                            <div className="font-semibold text-white font-space">${prod.price}</div>
                            <div className={`text-[10px] font-space ${prod.stockQuantity <= prod.lowStockThreshold ? 'text-amber-400' : 'text-zinc-500'}`}>
                              Stock: {prod.stockQuantity}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase ${
                              prod.status === 'Active' ? 'bg-electric-emerald/10 text-electric-emerald' :
                              prod.status === 'Draft' ? 'bg-zinc-800 text-zinc-400' : 'bg-red-950/30 text-red-400'
                            }`}>
                              {prod.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setPreviewingProduct(prod)}
                                title="Preview Card"
                                className="p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handlePublishToggle(prod)}
                                title={prod.status === 'Active' ? 'Set as Draft' : 'Publish Product'}
                                className="p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
                              >
                                {prod.status === 'Active' ? <EyeOff className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                              </button>
                              <button
                                onClick={() => handleEditProductClick(prod)}
                                title="Edit Specifications"
                                className="p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDuplicateProduct(prod.id)}
                                title="Duplicate PIM"
                                className="p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleArchiveProduct(prod)}
                                title={prod.status === 'Archived' ? 'Activate Product' : 'Archive Product'}
                                className="p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors"
                              >
                                <Archive className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProductClick(prod.id)}
                                title="Delete"
                                className="p-2 rounded bg-red-950/20 text-red-400 hover:text-red-300 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 2b. CATEGORIES MANAGER SECTION */}
                <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <FolderCheck className="w-4 h-4 text-electric-cyan" /> Category Display Configuration
                    </h4>
                    <button
                      onClick={() => {
                        setEditingCategory(null);
                        setCategoryForm({ ...defaultCategory });
                        setShowCategoryForm(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-[10px] font-semibold uppercase tracking-wider font-space text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Category
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map(cat => (
                      <div key={cat.id} className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={cat.image} className="w-10 h-10 rounded-lg object-cover border border-white/10" alt="" />
                          <div>
                            <div className="font-semibold text-white text-xs">{cat.name}</div>
                            <div className="text-[10px] text-zinc-500 font-space font-kannada">KN: {cat.nameKn} &bull; Order: {cat.displayOrder}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditCategoryClick(cat)}
                            className="p-2 rounded bg-zinc-900 text-zinc-400 hover:text-white"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCategoryClick(cat.id)}
                            className="p-2 rounded bg-red-950/10 text-red-400 hover:bg-red-950/20"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 3. RULES & OPTIONS MANAGER TAB */}
            {activeTab === 'builder' && (
              <div className="space-y-6">
                
                {/* Compatibility Rules Overview */}
                <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-electric-cyan" /> Configuration Compatibility Rules
                      </h4>
                      <p className="text-[10px] text-zinc-500 mt-1">Configure constraints that restrict camera models to compatible batteries or battery systems to matching panel inputs.</p>
                    </div>

                    <button
                      onClick={() => {
                        setRuleForm({ ...defaultRule });
                        setShowRuleForm(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider font-space flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Add Rule
                    </button>
                  </div>

                  <div className="space-y-3">
                    {rules.map(rule => (
                      <div key={rule.id} className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="px-2 py-0.5 rounded bg-electric-cyan/10 text-electric-cyan font-bold tracking-widest text-[9px] uppercase font-space">
                            {rule.type}
                          </div>
                          <span className="text-xs text-zinc-300 font-medium">{rule.description}</span>
                        </div>

                        <button
                          onClick={() => handleDeleteRuleClick(rule.id)}
                          className="p-2 rounded bg-red-950/20 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 4. ORDERS & QUOTATIONS TAB */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                
                {/* Orders Registry */}
                <div className="overflow-x-auto rounded-3xl border border-white/5 bg-zinc-950/20">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-space bg-zinc-950/40">
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Customer Name</th>
                        <th className="p-4">Contact Phone</th>
                        <th className="p-4">Camera / Battery</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                      {orders.map(order => (
                        <tr key={order.id} className="hover:bg-zinc-950/30 transition-colors">
                          <td className="p-4 font-semibold text-white font-space">{order.id}</td>
                          <td className="p-4 font-semibold text-white">{order.customerName}</td>
                          <td className="p-4 font-space">{order.customerPhone}</td>
                          <td className="p-4">
                            <div>{order.camera?.name || 'WiFi Camera Configuration'}</div>
                            <div className="text-[10px] text-zinc-500">Bat: {order.battery?.name || 'N/A'}</div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                              order.status === 'Accepted' ? 'bg-electric-emerald/10 text-electric-emerald' :
                              order.status === 'Rejected' ? 'bg-red-950/30 text-red-400' : 'bg-amber-950/30 text-amber-400'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleUpdateOrderStatus(order.id, 'Accepted')}
                                className="px-2.5 py-1 rounded bg-electric-emerald/10 text-electric-emerald hover:bg-electric-emerald/20 text-[10px] font-semibold font-space uppercase"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() => handleUpdateOrderStatus(order.id, 'Rejected')}
                                className="px-2.5 py-1 rounded bg-red-950/20 text-red-400 hover:bg-red-950/30 text-[10px] font-semibold font-space uppercase"
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* 5. CUSTOMER DIRECTORY TAB */}
            {activeTab === 'customers' && (
              <div className="space-y-6">
                
                {/* Search / Filter */}
                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 max-w-sm flex items-center gap-2">
                  <Search className="w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search customer names, phone numbers..."
                    className="w-full bg-transparent text-xs text-white focus:outline-none border-none placeholder-zinc-500"
                  />
                </div>

                {/* Customers List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orders.map(order => (
                    <div key={order.id} className="p-5 rounded-2xl bg-zinc-950/20 border border-white/5 flex flex-col justify-between space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-white text-sm">{order.customerName}</h4>
                          <span className="text-[10px] text-zinc-500 font-space">{order.customerEmail || 'No Email Recorded'}</span>
                        </div>
                        <span className="text-[10px] px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-space uppercase">
                          Active Account
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Phone:</span>
                          <span className="text-zinc-300 font-space">{order.customerPhone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Saved Config:</span>
                          <span className="text-zinc-300 font-semibold">{order.camera?.name || 'Electric System'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Address:</span>
                          <span className="text-zinc-300 truncate max-w-[200px]">{order.customerAddress || 'No Address'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* 6. SETTINGS & CONTENT TAB */}
            {activeTab === 'settings' && webSettings && (
              <form onSubmit={handleSaveWebSettingsSubmit} className="p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-electric-cyan" /> Corporate Website Settings
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Company Name</label>
                    <input
                      type="text"
                      value={webSettings.companyName}
                      onChange={(e) => setWebSettings({ ...webSettings, companyName: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">GST Registration Number</label>
                    <input
                      type="text"
                      value={webSettings.gstNumber}
                      onChange={(e) => setWebSettings({ ...webSettings, gstNumber: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Corporate Logo Image (Supabase Storage)</label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            store.addToast('Uploading logo to Supabase...', 'info');
                            const url = await uploadImageToSupabase(file, 'images');
                            if (url) {
                              setWebSettings({ ...webSettings, logo: url });
                              store.addToast('Logo uploaded successfully!', 'success');
                            }
                          }
                        }}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 text-xs text-white focus:outline-none flex-grow"
                      />
                      {webSettings.logo && (
                        <div className="shrink-0 w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-1">
                          <img src={webSettings.logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Favicon Path</label>
                    <input
                      type="text"
                      value={webSettings.favicon}
                      onChange={(e) => setWebSettings({ ...webSettings, favicon: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Contact Number</label>
                    <input
                      type="text"
                      value={webSettings.contactNumber}
                      onChange={(e) => setWebSettings({ ...webSettings, contactNumber: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Office Email Address</label>
                    <input
                      type="text"
                      value={webSettings.emailAddress}
                      onChange={(e) => setWebSettings({ ...webSettings, emailAddress: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2">Physical Office Address</label>
                    <textarea
                      value={webSettings.officeAddress}
                      onChange={(e) => setWebSettings({ ...webSettings, officeAddress: e.target.value })}
                      rows="2"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-white/5">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider font-space cursor-pointer"
                  >
                    Save Corporate Settings
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </main>

      {/* PRODUCT ADD/EDIT MODAL FORM */}
      {showProductForm && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto">
          <div className="max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <h3 className="text-lg font-semibold text-white">
                {editingProduct ? 'Edit Product Specifications (PIM)' : 'Add New Product to Inventory'}
              </h3>
              <button onClick={() => setShowProductForm(false)} className="text-zinc-500 hover:text-white cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveProductSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Product Name</label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Product SKU Code</label>
                  <input
                    type="text"
                    value={productForm.sku}
                    onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Category Group</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  >
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={productForm.brand}
                    onChange={(e) => setProductForm({ ...productForm, brand: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Stock Quantity</label>
                  <input
                    type="number"
                    value={productForm.stockQuantity}
                    onChange={(e) => setProductForm({ ...productForm, stockQuantity: parseInt(e.target.value) || 0 })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Price ($)</label>
                  <input
                    type="number"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: parseFloat(e.target.value) || 0 })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Short Description</label>
                  <input
                    type="text"
                    value={productForm.shortDescription}
                    onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Detailed PIM Description</label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    rows="3"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Product Image (Supabase Storage)</label>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        if (file) {
                          store.addToast('Uploading image to Supabase...', 'info');
                          const url = await uploadImageToSupabase(file, 'images');
                          if (url) {
                            setProductForm({ ...productForm, image: url });
                            store.addToast('Image uploaded successfully!', 'success');
                          }
                        }
                      }}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none flex-grow"
                    />
                    {productForm.image && (
                      <div className="shrink-0 w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-1">
                        <img src={productForm.image} alt="Preview" className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setShowProductForm(false)}
                  className="px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-xs font-semibold uppercase tracking-wider font-space text-zinc-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider font-space cursor-pointer"
                >
                  Save Product specifications
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* CATEGORY FORM MODAL */}
      {showCategoryForm && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <h3 className="text-lg font-semibold text-white">
                {editingCategory ? 'Edit Category' : 'Create New Category'}
              </h3>
              <button onClick={() => setShowCategoryForm(false)} className="text-zinc-500 hover:text-white cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveCategorySubmit} className="space-y-4">
              <div>
                <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">English Category Name</label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Kannada Category Name</label>
                <input
                  type="text"
                  value={categoryForm.nameKn}
                  onChange={(e) => setCategoryForm({ ...categoryForm, nameKn: e.target.value })}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none font-kannada"
                />
              </div>

              <div>
                <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Sort/Display Order</label>
                <input
                  type="number"
                  value={categoryForm.displayOrder}
                  onChange={(e) => setCategoryForm({ ...categoryForm, displayOrder: parseInt(e.target.value) || 1 })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setShowCategoryForm(false)}
                  className="px-4 py-2 rounded-xl border border-zinc-800 text-xs font-semibold text-zinc-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold cursor-pointer"
                >
                  Save Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* COMPATIBILITY RULE MODAL */}
      {showRuleForm && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <h3 className="text-lg font-semibold text-white">Configure Compatibility Rule</h3>
              <button onClick={() => setShowRuleForm(false)} className="text-zinc-500 hover:text-white cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleSaveRuleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Rule Dependency Type</label>
                <select
                  value={ruleForm.type}
                  onChange={(e) => setRuleForm({ ...ruleForm, type: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                >
                  <option value="camera-battery">Camera Lenses ↔ Battery Compatibility</option>
                  <option value="panel-battery">Solar Panel ↔ Battery Restriction</option>
                </select>
              </div>

              {ruleForm.type === 'camera-battery' ? (
                <>
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Lens Count trigger</label>
                    <select
                      value={ruleForm.cameraLens}
                      onChange={(e) => setRuleForm({ ...ruleForm, cameraLens: parseInt(e.target.value) || 1 })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    >
                      <option value="1">1 Lens (Single)</option>
                      <option value="2">2 Lenses (Dual)</option>
                      <option value="3">3 Lenses (Triple)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Required Battery Pack</label>
                    <select
                      value={ruleForm.batteryId}
                      onChange={(e) => setRuleForm({ ...ruleForm, batteryId: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    >
                      {products.filter(p => p.type === 'battery').map(p => (
                        <option key={p.id} value={p.id}>{p.name} ({p.capacity})</option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Solar Panel trigger</label>
                    <select
                      value={ruleForm.panelId}
                      onChange={(e) => setRuleForm({ ...ruleForm, panelId: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    >
                      {products.filter(p => p.type === 'panel').map(p => (
                        <option key={p.id} value={p.id}>{p.name} ({p.wattage})</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase font-space block mb-1">Locked Battery Pack</label>
                    <select
                      value={ruleForm.batteryId}
                      onChange={(e) => setRuleForm({ ...ruleForm, batteryId: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    >
                      {products.filter(p => p.type === 'battery').map(p => (
                        <option key={p.id} value={p.id}>{p.name} ({p.capacity})</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setShowRuleForm(false)}
                  className="px-4 py-2 rounded-xl border border-zinc-800 text-xs text-zinc-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-white text-black text-xs font-semibold cursor-pointer"
                >
                  Build Rule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PRODUCT CARD SPECIFICATIONS PREVIEW MODAL */}
      {previewingProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative space-y-4">
            <button
              onClick={() => setPreviewingProduct(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white cursor-pointer"
            >
              ✕
            </button>
            <img src={previewingProduct.image} alt="" className="w-full h-48 object-contain bg-zinc-900 rounded-2xl p-4 border border-white/5" />
            
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest font-space text-electric-cyan">
                  {previewingProduct.brand} &bull; {previewingProduct.modelNumber}
                </span>
                <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                  previewingProduct.status === 'Active' ? 'bg-electric-emerald/10 text-electric-emerald' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {previewingProduct.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-white mt-1">{previewingProduct.name}</h4>
              <span className="text-[10px] text-zinc-500 font-space">SKU: {previewingProduct.sku}</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {previewingProduct.description || previewingProduct.shortDescription}
            </p>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase font-space">Hardware Price</span>
                <span className="text-lg font-semibold text-white font-space">${previewingProduct.price}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase font-space text-right">In-Stock</span>
                <span className="text-xs font-semibold text-white font-space text-right block">
                  {previewingProduct.stockQuantity} Units
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
