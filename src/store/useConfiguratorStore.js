import { create } from 'zustand';
import { db } from '../utils/dbMock';

export const useConfiguratorStore = create((set, get) => {
  const products = db.getProducts();

  // Helper variables for initial seeding in Zustand
  const solarCameras = products.filter(p => p.type === 'solar-camera');
  const batteries = products.filter(p => p.type === 'battery');
  const panels = products.filter(p => p.type === 'panel');

  return {
    // Nav Routing Tab
    activeTab: 'home', // 'home' | 'configurator' | 'admin' | 'technician' | 'service'
    setActiveTab: (tab) => set({ activeTab: tab }),

    // Language setting: 'kn' (Bilingual Kannada + English), 'en' (English only)
    language: 'en',
    setLanguage: (lang) => set({ language: lang }),

    // Toasts alert array
    toasts: [],
    addToast: (message, type = 'success') => {
      const id = Date.now();
      set((state) => ({
        toasts: [...state.toasts, { id, message, type }]
      }));
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter(t => t.id !== id)
        }));
      }, 4000);
    },
    removeToast: (id) => set((state) => ({
      toasts: state.toasts.filter(t => t.id !== id)
    })),

    // Active Configurator Type ('solar' | 'electric')
    configType: 'solar',
    setConfigType: (type) => set({ configType: type }),

    // SOLAR SELECTIONS
    solarLensCount: 1, // 1 | 2 | 3
    solarCamera: solarCameras.find(c => c.lensCount === 1) || solarCameras[0] || null,
    solarBattery: batteries.find(b => b.capacity === '12Ah') || batteries[0] || null,
    solarPanel: panels.find(p => p.wattage === '20W') || panels[0] || null,
    solarMemoryCard: products.find(p => p.id === 'acc-sd64') || null,
    solarAccessories: [], // Array of accessory items

    checkCompatibility: (typeChanged, selectedItem) => {
      const products = db.getProducts();
      const rules = db.getRules();
      
      let cam = get().solarCamera;
      let bat = get().solarBattery;
      let pan = get().solarPanel;

      if (typeChanged === 'camera') cam = selectedItem;
      if (typeChanged === 'battery') bat = selectedItem;
      if (typeChanged === 'panel') pan = selectedItem;

      let toastMsg = null;

      // Evaluate active rules from database
      rules.forEach(rule => {
        // Rule: Camera (lensCount) -> Battery requirement
        if (rule.cameraLens && cam && cam.lensCount === rule.cameraLens) {
          if (bat && bat.id !== rule.batteryId) {
            const requiredBat = products.find(p => p.id === rule.batteryId);
            if (requiredBat) {
              bat = requiredBat;
              toastMsg = `Auto-adjusted: ${rule.description}`;
            }
          }
        }
        
        // Rule: Solar Panel -> Battery restriction
        if (rule.panelId && pan && pan.id === rule.panelId) {
          if (bat && bat.id !== rule.batteryId) {
            const allowedBat = products.find(p => p.id === rule.batteryId);
            if (allowedBat) {
              bat = allowedBat;
              toastMsg = `Auto-adjusted: ${rule.description}`;
            }
          }
        }
      });

      // Special check: if battery is 18Ah, it requires 40W panel (inverse of panel capacity restriction)
      if (bat && bat.id === 'bat-18' && pan && pan.id === 'panel-20') {
        const requiredPanel = products.find(p => p.id === 'panel-40');
        if (requiredPanel) {
          pan = requiredPanel;
          toastMsg = 'Auto-adjusted: 18Ah battery requires 40W Solar Panel';
        }
      }

      set({
        solarCamera: cam,
        solarBattery: bat,
        solarPanel: pan
      });

      if (toastMsg) {
        get().addToast(toastMsg, 'info');
      }
    },

    setSolarLensCount: (count) => {
      const filteredCams = solarCameras.filter(c => c.lensCount === count);
      const cam = filteredCams[0] || null;
      set({ 
        solarLensCount: count, 
        solarCamera: cam
      });
      get().checkCompatibility('camera', cam);
    },
    setSolarCamera: (cam) => {
      set({ solarCamera: cam });
      get().checkCompatibility('camera', cam);
    },
    setSolarBattery: (bat) => {
      set({ solarBattery: bat });
      get().checkCompatibility('battery', bat);
    },
    setSolarPanel: (pan) => {
      set({ solarPanel: pan });
      get().checkCompatibility('panel', pan);
    },
    setSolarMemoryCard: (card) => set({ solarMemoryCard: card }),
    toggleSolarAccessory: (acc) => {
      const current = get().solarAccessories;
      const exists = current.some(a => a.id === acc.id);
      if (exists) {
        set({ solarAccessories: current.filter(a => a.id !== acc.id) });
        get().addToast(`Removed ${acc.name}`, 'info');
      } else {
        set({ solarAccessories: [...current, acc] });
        get().addToast(`Added ${acc.name}`, 'success');
      }
    },

    // ELECTRIC SELECTIONS
    electricClass: 'WiFi Camera', // 'WiFi Camera' | 'IP Camera' | 'IR Camera'
    electricLens: 'Single Lens',  // 'Single Lens' | 'Dual Lens' | 'Triple Lens' (For WiFi)
    electricRes: '2MP',          // '2MP' | '5MP' (For IP and IR)
    electricQty: 4,              // 1, 2, 4, 6, 8, 16, 32
    electricStorage: '1TB',      // '500GB' | '1TB' | '2TB' | '4TB'
    electricInstallation: 'Outdoor', // 'Indoor' | 'Outdoor' | 'Mixed'

    setElectricClass: (cls) => set({ electricClass: cls }),
    setElectricLens: (lens) => set({ electricLens: lens }),
    setElectricRes: (res) => set({ electricRes: res }),
    setElectricQty: (qty) => set({ electricQty: qty }),
    setElectricStorage: (st) => set({ electricStorage: st }),
    setElectricInstallation: (inst) => set({ electricInstallation: inst }),

    // CUSTOMER FORM DATA
    customerName: '',
    customerPhone: '',
    customerWhatsapp: '',
    customerEmail: '',
    customerAddress: '',
    customerVillage: '',
    customerTaluk: '',
    customerDistrict: '',
    customerState: 'Karnataka', // Default
    customerPin: '',
    customerMaps: 'https://maps.google.com/?q=12.9716,77.5946', // Bangalore default
    customerPrefDate: '',
    customerNotes: '',

    setCustomerInfo: (info) => set((state) => ({ ...state, ...info })),

    // Order Success Ref State
    completedOrder: null,
    isSubmitting: false,

    // Pricing breakdowns math for Solar System
    getSolarBreakdown: () => {
      const { solarCamera, solarBattery, solarPanel, solarMemoryCard, solarAccessories } = get();
      
      const cameraPrice = solarCamera?.price || 0;
      const batteryPrice = solarBattery?.price || 0;
      const panelPrice = solarPanel?.price || 0;
      const memoryCardPrice = solarMemoryCard?.price || 0;
      
      // Check if "Professional Site Installation" is in accessories
      const installationToggled = solarAccessories.some(a => a.id === 'acc-inst');
      const installationFee = installationToggled ? 99 : 0;
      
      // Sum other accessories (excluding installation and AMC to keep calculations transparent)
      const hardwareAccessories = solarAccessories.filter(a => a.id !== 'acc-inst');
      const accessoriesSum = hardwareAccessories.reduce((sum, a) => sum + a.price, 0);

      const subtotal = cameraPrice + batteryPrice + panelPrice + memoryCardPrice + accessoriesSum;
      const discount = subtotal * 0.10; // Flat 10% hardware discount
      const taxableAmount = subtotal - discount + installationFee;
      const gst = taxableAmount * 0.18; // 18% GST rate
      const grandTotal = taxableAmount + gst;

      return {
        subtotal,
        discount,
        installationFee,
        gst,
        grandTotal
      };
    },

    // Pricing breakdowns math for Electric System
    getElectricBreakdown: () => {
      const { electricClass, electricLens, electricRes, electricQty, electricStorage, electricInstallation } = get();

      // Find matching base camera node price
      let baseCamPrice = 120; // default ColorVu 2MP
      if (electricClass === 'WiFi Camera') {
        baseCamPrice = electricLens === 'Triple Lens' ? 160 : electricLens === 'Dual Lens' ? 110 : 70;
      } else if (electricClass === 'IP Camera') {
        baseCamPrice = electricRes === '5MP' ? 180 : 120;
      } else if (electricClass === 'IR Camera') {
        baseCamPrice = electricRes === '5MP' ? 150 : 90;
      }

      const cameraSubtotal = baseCamPrice * electricQty;

      // Storage pricing
      const storagePrice = electricStorage === '4TB' ? 220 : electricStorage === '2TB' ? 120 : electricStorage === '1TB' ? 70 : 40;

      // DVR/NVR pricing based on nodes capacity
      let dvrModel = '';
      let dvrPrice = 0;
      if (electricClass !== 'WiFi Camera') {
        const typeSuffix = electricClass === 'IR Camera' ? 'DVR' : 'NVR';
        if (electricQty > 16) {
          dvrModel = `32-Channel ${typeSuffix}`;
          dvrPrice = 480;
        } else if (electricQty > 8) {
          dvrModel = `16-Channel ${typeSuffix}`;
          dvrPrice = 280;
        } else if (electricQty > 4) {
          dvrModel = `8-Channel ${typeSuffix}`;
          dvrPrice = 150;
        } else {
          dvrModel = `4-Channel ${typeSuffix}`;
          dvrPrice = 100;
        }
      }

      // Installation pricing base
      const perNodeInstallFee = electricInstallation === 'Outdoor' ? 80 : electricInstallation === 'Indoor' ? 50 : 65;
      const installationFee = perNodeInstallFee * electricQty;

      const subtotal = cameraSubtotal + storagePrice + dvrPrice;
      const discount = subtotal * 0.10; // 10% promo discount
      const taxableAmount = subtotal - discount + installationFee;
      const gst = taxableAmount * 0.18; // 18% GST
      const grandTotal = taxableAmount + gst;

      return {
        cameraSubtotal,
        dvrModel,
        dvrPrice,
        storagePrice,
        installationFee,
        discount,
        gst,
        grandTotal
      };
    },

    // Submit CCTV Configuration (Solar or Electric)
    submitConfigurator: async () => {
      set({ isSubmitting: true });
      const { 
        configType, 
        customerName, 
        customerEmail, 
        customerPhone, 
        customerWhatsapp, 
        customerAddress, 
        customerVillage, 
        customerTaluk, 
        customerDistrict, 
        customerState, 
        customerPin,
        customerMaps,
        customerPrefDate,
        customerNotes
      } = get();

      if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
        get().addToast('Please fill in the core contact inputs', 'error');
        set({ isSubmitting: false });
        return false;
      }

      // Network delay mock
      await new Promise(resolve => setTimeout(resolve, 2000));

      let orderSummary = {};
      if (configType === 'solar') {
        const { solarCamera, solarBattery, solarPanel, solarMemoryCard, solarAccessories } = get();
        const breakdown = get().getSolarBreakdown();
        orderSummary = {
          camera: solarCamera.name,
          cameraImage: solarCamera.image,
          battery: solarBattery.name,
          panel: solarPanel.name,
          storage: solarMemoryCard.name,
          accessories: solarAccessories.map(a => a.name),
          gst: breakdown.gst,
          discount: breakdown.discount,
          installation: breakdown.installationFee,
          total: breakdown.grandTotal
        };
      } else {
        const { electricClass, electricQty, electricStorage, electricInstallation, electricLens, electricRes } = get();
        const breakdown = get().getElectricBreakdown();
        
        // Match camera image
        let cameraImage = '/images/cam2.jpg';
        if (electricClass === 'WiFi Camera') {
          cameraImage = get().solarCamera?.image || '/images/cam1.jpg';
        } else if (electricClass === 'IP Camera') {
          cameraImage = electricRes === '5MP' ? '/images/ip2.jpg' : '/images/ip1.jpg';
        } else {
          cameraImage = electricRes === '5MP' ? '/images/elec3.jpg' : '/images/elec2.jpg';
        }

        orderSummary = {
          camera: `${electricClass === 'WiFi Camera' ? (get().solarCamera?.name || 'WiFi Camera') : electricClass} x${electricQty}`,
          cameraImage,
          dvr: breakdown.dvrModel || undefined,
          storage: `${electricStorage} Storage`,
          accessories: [`Installation Area: ${electricInstallation}`],
          gst: breakdown.gst,
          discount: breakdown.discount,
          installation: breakdown.installationFee,
          total: breakdown.grandTotal
        };
      }

      const orderData = {
        configType,
        customer: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          whatsapp: customerWhatsapp || customerPhone,
          address: `${customerAddress}, ${customerVillage}, ${customerTaluk}, ${customerDistrict}, ${customerState} - ${customerPin}`,
          prefDate: customerPrefDate || 'As soon as possible',
          googleMaps: customerMaps,
          notes: customerNotes || ''
        },
        summary: orderSummary,
        status: 'Pending Review',
        assignedTech: 'Unassigned'
      };

      try {
        const saved = db.saveOrder(orderData);
        set({ completedOrder: saved, isSubmitting: false });
        get().addToast('Quotation successfully stored in database!', 'success');
        
        // Simulating transactional messages
        console.log(`[Email Dispatch] To Client: ${customerEmail} - Quotation Attached.`);
        console.log(`[Email Dispatch] To Admin: sales@suryadrishti.com - New order ${saved.id} submitted.`);
        console.log(`[WhatsApp Dispatch] To Admin: Marcus Wright (assigned) - New order alert for customer ${customerName}.`);
        
        get().addToast('Transactional Emails & WhatsApp alerts dispatched!', 'info');
        return saved;
      } catch (err) {
        get().addToast('Supabase write failure. Please check network logs.', 'error');
        set({ isSubmitting: false });
        return false;
      }
    },

    // SERVICE REQUEST SUBMISSION
    serviceIssue: 'Camera',
    serviceDescription: '',
    serviceFiles: [],
    
    setServiceIssue: (issue) => set({ serviceIssue: issue }),
    setServiceDescription: (desc) => set({ serviceDescription: desc }),
    setServiceFiles: (files) => set({ serviceFiles: files }),
    
    submitServiceRequest: async () => {
      set({ isSubmitting: true });
      const { 
        serviceIssue, 
        serviceDescription, 
        serviceFiles, 
        customerName, 
        customerPhone, 
        customerEmail 
      } = get();

      if (!customerName || !customerPhone || !serviceDescription) {
        get().addToast('Core customer profile and details required', 'error');
        set({ isSubmitting: false });
        return false;
      }

      // Simulate loading network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const requestData = {
        customerName,
        phone: customerPhone,
        email: customerEmail || 'no-email@suryadrishti.com',
        issueType: serviceIssue,
        description: serviceDescription,
        attachments: serviceFiles.map(f => f.preview || '/images/cam1.jpg'),
        status: 'Submitted',
        assignedTech: 'Unassigned'
      };

      try {
        const saved = db.saveServiceRequest(requestData);
        set({ isSubmitting: false, serviceDescription: '', serviceFiles: [] });
        get().addToast('Service ticket registered! Tracking ID: ' + saved.id, 'success');
        return saved;
      } catch (err) {
        get().addToast('Supabase registration failed.', 'error');
        set({ isSubmitting: false });
        return false;
      }
    },

    // Reset wizard
    resetConfigurator: () => {
      set({
        solarCamera: solarCameras[0] || null,
        solarBattery: batteries[0] || null,
        solarPanel: panels[0] || null,
        solarAccessories: [],
        electricClass: 'WiFi Camera',
        electricLens: 'Single Lens',
        electricRes: '2MP',
        electricQty: 4,
        electricStorage: '1TB',
        electricInstallation: 'Outdoor',
        customerName: '',
        customerPhone: '',
        customerWhatsapp: '',
        customerEmail: '',
        customerAddress: '',
        customerVillage: '',
        customerTaluk: '',
        customerDistrict: '',
        customerPin: '',
        customerPrefDate: '',
        customerNotes: '',
        completedOrder: null
      });
    }
  };
});
