// Local Database simulation using LocalStorage with expanded datasets for enterprise PIM and ERP.
// Integrates PIM details, categories, custom compatibility rules, order pipelines, service requests, and website settings.

const SEED_PRODUCTS = [
  // SOLAR CAMERAS
  {
    id: 'sol-cam-1',
    type: 'solar-camera',
    sku: 'SD-CAM-PTZ01',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-PTZ-S1',
    name: 'Strobe Siren Warning Dome',
    shortDescription: 'White dome camera with integrated red strobe siren, dual antennas, and target tracking.',
    description: 'A professional grade solar outdoor dome camera featuring dual optical lenses for smart object tracking, warning siren strobe lights, and zero-lag remote surveillance feeds.',
    keyFeatures: 'Dual Lens Tracking, Red Strobe Warning Light, 120° Radar Sweep, Two-way Intercom',
    technicalSpecs: 'Resolution: 2K QHD, Night Vision: 50m Color, Audio: Two-way Speaker, Compression: H.265',
    highlights: 'PIR Heat Motion Sensor, Dynamic Target Classification, Long Range Antennas',
    applications: 'Farms, Private Estates, Construction Yards, Toll Plazas',
    warrantyDetails: '5 Years Replacement Warranty',
    installationInfo: 'Requires outdoor pole mount or wall mount arm adapter.',
    price: 649,
    discountPrice: 599,
    offerPrice: 579,
    gstPercentage: 18,
    installationCharges: 99,
    deliveryCharges: 15,
    image: '/images/cam1.jpg',
    videoUrl: '/videos/demo1.mp4',
    status: 'Active', // 'Active' | 'Draft' | 'Archived'
    stockQuantity: 42,
    availableStock: 39,
    lowStockThreshold: 5,
    lensCount: 1
  },
  {
    id: 'sol-cam-2',
    type: 'solar-camera',
    sku: 'SD-CAM-PTZ02',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-PTZ-S2',
    name: 'THINKWILL Dual-Lens PTZ Dome',
    shortDescription: 'Compact wireless THINKWILL dome camera with wide-angle tracking and dual antennas.',
    description: 'High efficiency panoramic dome camera equipped with a custom integrated weather-proof bracket, wide field sensors, and laser starlight night vision sweep.',
    keyFeatures: 'Pan-Tilt-Zoom, Dual Band WiFi, PIR Temperature Sensor, Remote Preset Angles',
    technicalSpecs: 'Resolution: 4MP, Night Vision: 40m Laser Starlight, Zoom: 4x Digital, Audio: Integrated Mic',
    highlights: 'Wide Field of View, Compact Low-profile Enclosure, Heavy Duty Casing',
    applications: 'Agriculture Estates, Parking Lots, Warehouses, Security Gates',
    warrantyDetails: '5 Years Replacement Warranty',
    installationInfo: 'Dual clamp set for secure mount on cylindrical poles.',
    price: 499,
    discountPrice: 459,
    offerPrice: 439,
    gstPercentage: 18,
    installationCharges: 99,
    deliveryCharges: 15,
    image: '/images/cam2.jpg',
    videoUrl: '/videos/demo2.mp4',
    status: 'Active',
    stockQuantity: 18,
    availableStock: 16,
    lowStockThreshold: 4,
    lensCount: 2
  },
  {
    id: 'sol-cam-3',
    type: 'solar-camera',
    sku: 'SD-CAM-DOM03',
    category: 'Solar Cameras',
    brand: 'Consistent',
    modelNumber: 'C-DOM-S3',
    name: 'Consistent Smart Telemetry PTZ Dome',
    shortDescription: 'Consistent dome camera with starlight infrared night sweep sensors.',
    description: 'Cost effective starlight dome camera optimized for lower power draw, featuring dual high gain antennas and smart telemetry diagnostic overlays.',
    keyFeatures: 'Telemetry Feed HUD, Low Power Idle, Smart IR LEDs, Automatic Day/Night Filter',
    technicalSpecs: 'Resolution: 1080p Full HD, Night Vision: 30m IR, Audio: Built-in Mic, Weight: 850g',
    highlights: 'Advanced Power Saving Processor, Starlight Sensitivity, Cloud Backup Capable',
    applications: 'Orchards, Country Roads, Perimeter Fences, Cattle Sheds',
    warrantyDetails: '3 Years Warranty',
    installationInfo: 'Direct surface mounting screws included.',
    price: 399,
    discountPrice: 369,
    offerPrice: 349,
    gstPercentage: 18,
    installationCharges: 99,
    deliveryCharges: 15,
    image: '/images/cam3.jpg',
    videoUrl: '/videos/demo1.mp4',
    status: 'Active',
    stockQuantity: 3, // Low stock simulation
    availableStock: 2,
    lowStockThreshold: 5,
    lensCount: 1
  },
  {
    id: 'sol-cam-4',
    type: 'solar-camera',
    sku: 'SD-CAM-DOM04',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-DOM-S4',
    name: 'THINKWILL Single-Lens Classic Dome',
    shortDescription: 'White dome camera with zero-lag WiFi and robust weather proof casing.',
    description: 'Standard security camera featuring outdoor range booster antennas, dual light sources for optional night-color recording, and durable anti-corrosion casing.',
    keyFeatures: 'Weather-proof IP67 Rating, Dual Night Light, 4x Zoom, Intrusion Guard Line',
    technicalSpecs: 'Resolution: 3MP, Zoom: 4x Optical, Storage: up to 256GB Card, Operating Temp: -10° to 60°C',
    highlights: 'Double Output Power Amplifier Speaker, Easy Config App, Robust Casing',
    applications: 'Docks, Shorelines, High Humidity Greenhouses, Residential Porches',
    warrantyDetails: '5 Years Warranty',
    installationInfo: 'Corner mount plate or standard wall adapter recommended.',
    price: 449,
    discountPrice: 419,
    offerPrice: 399,
    gstPercentage: 18,
    installationCharges: 99,
    deliveryCharges: 15,
    image: '/images/cam4.jpg',
    videoUrl: '/videos/demo2.mp4',
    status: 'Active',
    stockQuantity: 25,
    availableStock: 24,
    lowStockThreshold: 5,
    lensCount: 1
  },
  {
    id: 'sol-cam-5',
    type: 'solar-camera',
    sku: 'SD-CAM-PTZ05',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-PTZ-S5',
    name: 'THINKWILL Triple-Lens Panoramic Stand',
    shortDescription: 'Enterprise triple-lens camera with dual tracking sub-domes on support stand.',
    description: 'The ultimate solar surveillance workstation. Combines a fixed panoramic wide lens with two independent high speed PTZ sub-domes for 360 degree target lock.',
    keyFeatures: 'Triple Lens Target Lock, 16x Zoom, Radar Intruder Gaze, Active Warn Siren Shield',
    technicalSpecs: 'Resolution: 8MP Total, Night Vision: 80m Color Laser, Storage: Dual Card Slot, Power: 12V DC Input',
    highlights: 'Automated Coordinated Tracking, High Intensity Floodlights, Cellular 4G Uplink',
    applications: 'Solar Farms, Airports, Commercial Depots, Mining Perimeters',
    warrantyDetails: '7 Years Warranty',
    installationInfo: 'Heavy-duty steel mounting mast or concrete base required.',
    price: 799,
    discountPrice: 749,
    offerPrice: 729,
    gstPercentage: 18,
    installationCharges: 149,
    deliveryCharges: 25,
    image: '/images/cam5.jpg',
    videoUrl: '/videos/demo1.mp4',
    status: 'Active',
    stockQuantity: 9,
    availableStock: 8,
    lowStockThreshold: 3,
    lensCount: 3
  },

  // ELECTRIC CAMERAS
  {
    id: 'elec-ip-1',
    type: 'electric-camera',
    sku: 'HD-IP-BUL01',
    category: 'IP Cameras',
    brand: 'Hikvision',
    modelNumber: 'DS-2CD-CV01',
    name: 'Hikvision ColorVu Bullet 2MP',
    shortDescription: 'High definition 2MP IP network camera. Full-time 24/7 color imaging.',
    description: 'Reliable network bullet camera featuring ColorVu technology for bright color images in pitch-black conditions. IP67 weather guard.',
    keyFeatures: '24/7 Full Color, PoE Support, IP67 Protection, Smart Human Filter',
    technicalSpecs: 'Resolution: 2MP (1920x1080), Lens: 4mm, Night Range: 30m, Protocol: ONVIF',
    highlights: 'Full Color at Night, PoE Connectivity, Sturdy Metal Chassis',
    applications: 'Offices, Car parking, Entrance ways',
    warrantyDetails: '2 Years Manufacturer Warranty',
    installationInfo: 'PoE Ethernet cable required. Wall mount base included.',
    price: 120,
    discountPrice: 110,
    offerPrice: 105,
    gstPercentage: 18,
    installationCharges: 49,
    deliveryCharges: 10,
    image: '/images/ip1.jpg',
    status: 'Active',
    stockQuantity: 60,
    availableStock: 57,
    lowStockThreshold: 10
  },
  {
    id: 'elec-ip-2',
    type: 'electric-camera',
    sku: 'HD-IP-BUL02',
    category: 'IP Cameras',
    brand: 'Hikvision',
    modelNumber: 'DS-2CD-CV02',
    name: 'Hikvision ColorVu Bullet 5MP',
    shortDescription: 'Ultra high definition 5MP IP network camera with ColorVu technology.',
    description: 'High-res 5MP network security camera, ensuring crystal clear video feeds with 24/7 starlight ColorVu capture.',
    keyFeatures: '5MP HD Feed, ColorVu Night Capture, Audio Line-in, MicroSD Slot',
    technicalSpecs: 'Resolution: 5MP (2560x1920), Night Range: 40m, Power: 12V DC / PoE',
    highlights: 'Ultra High Detail, ColorVu Starlight, Advanced Video Analytics',
    applications: 'Storefronts, Corporate Gates, Bank Vaults',
    warrantyDetails: '2 Years Manufacturer Warranty',
    installationInfo: 'Supports wall or ceiling mount junction box adapters.',
    price: 180,
    discountPrice: 169,
    offerPrice: 159,
    gstPercentage: 18,
    installationCharges: 49,
    deliveryCharges: 10,
    image: '/images/ip2.jpg',
    status: 'Active',
    stockQuantity: 45,
    availableStock: 44,
    lowStockThreshold: 8
  },

  // BATTERIES
  { id: 'bat-12', type: 'battery', sku: 'SG-BAT-LFP12', category: 'Batteries', brand: 'SuryaGlow', modelNumber: 'SG-12A', name: 'SuryaGlow 12Ah LFP', capacity: '12Ah', price: 120, description: 'Lightweight safety LiFePO4 battery pack', status: 'Active', stockQuantity: 30, availableStock: 28, lowStockThreshold: 5 },
  { id: 'bat-18', type: 'battery', sku: 'SG-BAT-LFP18', category: 'Batteries', brand: 'SuryaGlow', modelNumber: 'SG-18A', name: 'SuryaGlow 18Ah LFP Pro', capacity: '18Ah', price: 180, description: 'High endurance safety LiFePO4 battery pack', status: 'Active', stockQuantity: 20, availableStock: 19, lowStockThreshold: 5 },

  // SOLAR PANELS
  { id: 'panel-20', type: 'panel', sku: 'HE-PAN-MON20', category: 'Solar Panels', brand: 'Helios', modelNumber: 'HE-20W', name: 'Helios 20W Monocrystalline', wattage: '20W', price: 90, description: 'Anti-reflective tempered glass solar panel', status: 'Active', stockQuantity: 25, availableStock: 24, lowStockThreshold: 5 },
  { id: 'panel-40', type: 'panel', sku: 'HE-PAN-MON40', category: 'Solar Panels', brand: 'Helios', modelNumber: 'HE-40W', name: 'Helios 40W Monocrystalline Pro', wattage: '40W', price: 150, description: 'Double sided efficiency capture panel', status: 'Active', stockQuantity: 15, availableStock: 14, lowStockThreshold: 3 },

  // ACCESSORIES
  { id: 'acc-sd64', type: 'accessory', sku: 'AC-SD-CARD64', category: 'Accessories', brand: 'Sandisk', modelNumber: 'SD-64G', name: '64GB CCTV SD Card', price: 20, description: 'Class 10 high endurance surveillance memory card', status: 'Active', stockQuantity: 100, availableStock: 95, lowStockThreshold: 15 },
  { id: 'acc-sd128', type: 'accessory', sku: 'AC-SD-CARD128', category: 'Accessories', brand: 'Sandisk', modelNumber: 'SD-128G', name: '128GB CCTV SD Card', price: 35, description: 'Class 10 ultra high endurance surveillance memory card', status: 'Active', stockQuantity: 80, availableStock: 76, lowStockThreshold: 12 },
  { id: 'acc-pole', type: 'accessory', sku: 'AC-POL-BRK01', category: 'Accessories', brand: 'Surya Drishti', modelNumber: 'AC-PL-MNT', name: 'Pole Clamp Bracket set', price: 45, description: 'Galvanized iron clamp brackets for camera mounts', status: 'Active', stockQuantity: 40, availableStock: 38, lowStockThreshold: 5 },
  { id: 'acc-wall', type: 'accessory', sku: 'AC-WAL-BRK02', category: 'Accessories', brand: 'Surya Drishti', modelNumber: 'AC-WL-ARM', name: 'Wall Mount Arm bracket', price: 30, description: 'Universal weather-proof wall extension mounting arms', status: 'Active', stockQuantity: 50, availableStock: 50, lowStockThreshold: 5 },
  { id: 'acc-box', type: 'accessory', sku: 'AC-JUN-BOX03', category: 'Accessories', brand: 'Surya Drishti', modelNumber: 'AC-JN-BOX', name: 'Waterproof Junction Box', price: 15, description: 'Outdoor IP66 rated junction lock boxes for connections', status: 'Active', stockQuantity: 12, availableStock: 10, lowStockThreshold: 5 },
  { id: 'acc-inst', type: 'accessory', sku: 'SRV-INSTALL', category: 'Services', brand: 'Surya Drishti', modelNumber: 'SRV-INS', name: 'Professional Site Installation', price: 99, description: 'Complete layout setup and deployment by certified technicians', status: 'Active', stockQuantity: 999, availableStock: 999, lowStockThreshold: 0 },
  { id: 'acc-amc', type: 'accessory', sku: 'SRV-AMC-YEAR', category: 'Services', brand: 'Surya Drishti', modelNumber: 'SRV-AMC', name: 'Annual Maintenance Contract', price: 149, description: 'Periodic cleaning, battery health sweep, and hardware replacement warranty cover', status: 'Active', stockQuantity: 999, availableStock: 999, lowStockThreshold: 0 }
];

const SEED_CATEGORIES = [
  { id: 'cat-solar', name: 'Solar Cameras', nameKn: 'ಸೌರ ಕ್ಯಾಮೆರಾಗಳು', image: '/images/cam1.jpg', displayOrder: 1, enabled: true },
  { id: 'cat-ip', name: 'IP Cameras', nameKn: 'ಐಪಿ ಕ್ಯಾಮೆರಾಗಳು', image: '/images/ip1.jpg', displayOrder: 2, enabled: true },
  { id: 'cat-ir', name: 'IR Cameras', nameKn: 'ಐಆರ್ ಕ್ಯಾಮೆರಾಗಳು', image: '/images/elec2.jpg', displayOrder: 3, enabled: true },
  { id: 'cat-acc', name: 'Accessories', nameKn: 'ಪರಿಕರಗಳು', image: '/images/cam4.jpg', displayOrder: 4, enabled: true }
];

const SEED_COMPATIBILITY_RULES = [
  { id: 'rule-1', type: 'camera-battery', cameraLens: 3, batteryId: 'bat-18', description: 'Triple Lens Camera requires 18Ah Battery' },
  { id: 'rule-2', type: 'panel-battery', panelId: 'panel-20', batteryId: 'bat-12', description: '20W Solar Panel supports only 12Ah Battery' }
];

const SEED_SYSTEM_LOGS = [
  { id: 'log-1', timestamp: new Date().toISOString(), type: 'Login', message: 'Admin login verified successfully.' },
  { id: 'log-2', timestamp: new Date().toISOString(), type: 'System', message: 'Seeded default hardware PIM structures.' }
];

const SEED_WEBSITE_SETTINGS = {
  companyName: 'SURYA DRISHTI',
  logo: '/images/hero-bg-mobile.jpg',
  favicon: '/favicon.ico',
  contactNumber: '+91 98765 43210',
  emailAddress: 'info@suryadrishti.com',
  officeAddress: '123 Solar Heights, 4th Block, Jayanagar, Bengaluru, Karnataka 560011',
  mapsLocation: 'https://maps.google.com/?q=12.9279,77.5824',
  businessHours: '9:00 AM - 6:00 PM (Mon-Sat)',
  gstNumber: '29AAAAA1111A1Z1',
  socialMedia: {
    facebook: 'https://facebook.com/suryadrishti',
    twitter: 'https://twitter.com/suryadrishti',
    linkedin: 'https://linkedin.com/company/suryadrishti'
  },
  faq: [
    { question: 'How long does the solar battery last?', answer: 'Our safety LFP battery packs are designed to last 5-7 years with continuous usage.' },
    { question: 'Is installation included in the custom configuration?', answer: 'Yes, if you toggle Professional Site Installation under Accessories during build.' }
  ],
  testimonials: [
    { client: 'Ramesh Gowda', location: 'Mandya Farm', text: 'The camera setup runs perfectly off-grid. Highly recommended for remote security.' }
  ]
};

const SEED_GALLERY = [
  { id: 'gal-1', type: 'image', title: '77A Solar CCTV Tower', imageUrl: '/images/cam1.jpg', description: 'CCTV tower checking remote crop health off-grid.' },
  { id: 'gal-2', type: 'image', title: 'Downtown Depot setup', imageUrl: '/images/cam2.jpg', description: 'Bullet camera mount checking commercial logistics gate.' },
  { id: 'gal-3', type: 'image', title: 'Coastal Harbor camera', imageUrl: '/images/cam4.jpg', description: 'Anti-rust weather-proof casing mounted near docks.' },
  { id: 'gal-v1', type: 'video', title: 'Apex PTZ Night Vision test', imageUrl: '/images/cam5.jpg', videoUrl: '/videos/demo2.mp4', description: 'Live threat detection infrared sweep test.' }
];

const SEED_PROJECTS = [
  {
    id: 'proj-1',
    title: '77A Farm Site Surveillance',
    location: 'Hill Valley Agriculture Area',
    type: 'Solar CCTV Off-Grid',
    camera: 'Surya Drishti Apex PTZ-S1 + 40W panel',
    duration: '6 Hours',
    feedback: 'Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.',
    client: 'Douglas Ranch LLC',
    beforeImg: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1595275313063-71822c1b4bdf?q=80&w=600&auto=format&fit=crop',
    lat: 37.7749,
    lng: -122.4194
  }
];

const SEED_SERVICE_REQUESTS = [
  {
    id: 'SR-101',
    customerName: 'Douglas Ranch LLC',
    phone: '555-902-3921',
    email: 'douglas@farm.org',
    issueType: 'Solar',
    description: 'Solar panel blocked by dirt and foliage, battery dropping to 30% charge overnight.',
    status: 'Assigned',
    assignedTech: 'Marcus Wright',
    dateCreated: '2026-07-20',
    attachments: ['/images/cam1.jpg']
  }
];

const SEED_SETTINGS = {
  companyName: 'SURYA DRISHTI',
  vatRate: 0.18,
  technicians: ['Marcus Wright', 'Alex Mercer', 'John Connor', 'Sarah Connor']
};

const isBrowser = typeof window !== 'undefined';

const initializeDB = () => {
  if (!isBrowser) return;
  // Sync products, categories, rules, logs, and settings
  if (!localStorage.getItem('sd_products_pim_v2')) {
    localStorage.setItem('sd_products_pim_v2', JSON.stringify(SEED_PRODUCTS));
  } else {
    // Migration: Update existing products in local storage to use new local video files
    try {
      const stored = JSON.parse(localStorage.getItem('sd_products_pim_v2'));
      let modified = false;
      stored.forEach(p => {
        if (p.videoUrl && (p.videoUrl.includes('w3schools.com') || p.videoUrl.includes('movie.mp4') || p.videoUrl.includes('mov_bbb.mp4'))) {
          p.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
          modified = true;
        }
      });
      if (modified) {
        localStorage.setItem('sd_products_pim_v2', JSON.stringify(stored));
      }
    } catch(e) {}
  }
  if (!localStorage.getItem('sd_categories_v2')) {
    localStorage.setItem('sd_categories_v2', JSON.stringify(SEED_CATEGORIES));
  }
  if (!localStorage.getItem('sd_rules_v2')) {
    localStorage.setItem('sd_rules_v2', JSON.stringify(SEED_COMPATIBILITY_RULES));
  }
  if (!localStorage.getItem('sd_logs_v2')) {
    localStorage.setItem('sd_logs_v2', JSON.stringify(SEED_SYSTEM_LOGS));
  }
  if (!localStorage.getItem('sd_web_settings_v2')) {
    localStorage.setItem('sd_web_settings_v2', JSON.stringify(SEED_WEBSITE_SETTINGS));
  }
  if (!localStorage.getItem('sd_gallery_v2')) {
    localStorage.setItem('sd_gallery_v2', JSON.stringify(SEED_GALLERY));
  } else {
    // Migration: Update existing gallery items in local storage to use new local video files
    try {
      const stored = JSON.parse(localStorage.getItem('sd_gallery_v2'));
      let modified = false;
      stored.forEach(g => {
        if (g.videoUrl && (g.videoUrl.includes('w3schools.com') || g.videoUrl.includes('movie.mp4') || g.videoUrl.includes('mov_bbb.mp4'))) {
          g.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
          g.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
          modified = true;
        }
      });
      if (modified) {
        localStorage.setItem('sd_gallery_v2', JSON.stringify(stored));
      }
    } catch(e) {}
  }
  if (!localStorage.getItem('sd_projects_v2')) {
    localStorage.setItem('sd_projects_v2', JSON.stringify(SEED_PROJECTS));
  }
  if (!localStorage.getItem('sd_services_v2')) {
    localStorage.setItem('sd_services_v2', JSON.stringify(SEED_SERVICE_REQUESTS));
  }
  if (!localStorage.getItem('sd_orders_v2')) {
    localStorage.setItem('sd_orders_v2', JSON.stringify([]));
  }
  if (!localStorage.getItem('sd_settings')) {
    localStorage.setItem('sd_settings', JSON.stringify(SEED_SETTINGS));
  }
};

initializeDB();

export const db = {
  // PRODUCTS CRUD
  getProducts: () => {
    initializeDB();
    if (!isBrowser) return SEED_PRODUCTS;
    return JSON.parse(localStorage.getItem('sd_products_pim_v2')) || SEED_PRODUCTS;
  },
  saveProduct: (product) => {
    const products = db.getProducts();
    const index = products.findIndex(p => p.id === product.id);
    const newProd = {
      ...product,
      id: product.id || 'prod-' + Date.now()
    };
    if (index > -1) {
      products[index] = newProd;
      db.writeLog('Product', `Updated product details: ${newProd.name} (${newProd.sku})`);
    } else {
      products.push(newProd);
      db.writeLog('Product', `Created new product: ${newProd.name} (${newProd.sku})`);
    }
    localStorage.setItem('sd_products_pim_v2', JSON.stringify(products));
    return newProd;
  },
  deleteProduct: (id) => {
    const products = db.getProducts();
    const target = products.find(p => p.id === id);
    if (target) {
      db.writeLog('Product', `Deleted product: ${target.name} (${target.sku})`);
    }
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem('sd_products_pim_v2', JSON.stringify(filtered));
    return true;
  },

  // CATEGORIES CRUD
  getCategories: () => {
    initializeDB();
    if (!isBrowser) return SEED_CATEGORIES;
    return JSON.parse(localStorage.getItem('sd_categories_v2')) || SEED_CATEGORIES;
  },
  saveCategory: (category) => {
    const categories = db.getCategories();
    const index = categories.findIndex(c => c.id === category.id);
    const newCat = {
      ...category,
      id: category.id || 'cat-' + Date.now()
    };
    if (index > -1) {
      categories[index] = newCat;
      db.writeLog('Category', `Updated category details: ${newCat.name}`);
    } else {
      categories.push(newCat);
      db.writeLog('Category', `Added new category: ${newCat.name}`);
    }
    localStorage.setItem('sd_categories_v2', JSON.stringify(categories));
    return newCat;
  },
  deleteCategory: (id) => {
    const categories = db.getCategories();
    const target = categories.find(c => c.id === id);
    if (target) {
      db.writeLog('Category', `Deleted category: ${target.name}`);
    }
    const filtered = categories.filter(c => c.id !== id);
    localStorage.setItem('sd_categories_v2', JSON.stringify(filtered));
    return true;
  },

  // COMPATIBILITY RULES CRUD
  getRules: () => {
    initializeDB();
    if (!isBrowser) return SEED_COMPATIBILITY_RULES;
    return JSON.parse(localStorage.getItem('sd_rules_v2')) || SEED_COMPATIBILITY_RULES;
  },
  saveRule: (rule) => {
    const rules = db.getRules();
    const index = rules.findIndex(r => r.id === rule.id);
    const newRule = {
      ...rule,
      id: rule.id || 'rule-' + Date.now()
    };
    if (index > -1) {
      rules[index] = newRule;
    } else {
      rules.push(newRule);
    }
    localStorage.setItem('sd_rules_v2', JSON.stringify(rules));
    db.writeLog('System', `Saved compatibility rule: ${newRule.description}`);
    return newRule;
  },
  deleteRule: (id) => {
    const rules = db.getRules();
    const filtered = rules.filter(r => r.id !== id);
    localStorage.setItem('sd_rules_v2', JSON.stringify(filtered));
    db.writeLog('System', `Deleted compatibility rule ID: ${id}`);
    return true;
  },

  // SYSTEM AUDIT LOGS
  getLogs: () => {
    initializeDB();
    if (!isBrowser) return SEED_SYSTEM_LOGS;
    return JSON.parse(localStorage.getItem('sd_logs_v2')) || SEED_SYSTEM_LOGS;
  },
  writeLog: (type, message) => {
    const logs = db.getLogs();
    const newLog = {
      id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      timestamp: new Date().toISOString(),
      type,
      message
    };
    logs.unshift(newLog);
    localStorage.setItem('sd_logs_v2', JSON.stringify(logs.slice(0, 100))); // Keep last 100
    return newLog;
  },

  // WEBSITE SETTINGS
  getWebSettings: () => {
    initializeDB();
    if (!isBrowser) return SEED_WEBSITE_SETTINGS;
    return JSON.parse(localStorage.getItem('sd_web_settings_v2')) || SEED_WEBSITE_SETTINGS;
  },
  saveWebSettings: (settings) => {
    localStorage.setItem('sd_web_settings_v2', JSON.stringify(settings));
    db.writeLog('System', 'Website corporate contact settings updated.');
    return settings;
  },

  // GALLERY CRUD
  getGallery: () => {
    initializeDB();
    if (!isBrowser) return SEED_GALLERY;
    return JSON.parse(localStorage.getItem('sd_gallery_v2')) || SEED_GALLERY;
  },
  saveGalleryItem: (item) => {
    const gallery = db.getGallery();
    const newItem = {
      ...item,
      id: item.id || 'gal-' + Date.now()
    };
    gallery.unshift(newItem);
    localStorage.setItem('sd_gallery_v2', JSON.stringify(gallery));
    db.writeLog('Media', `Added gallery media: ${newItem.title}`);
    return newItem;
  },
  deleteGalleryItem: (id) => {
    const gallery = db.getGallery();
    const filtered = gallery.filter(g => g.id !== id);
    localStorage.setItem('sd_gallery_v2', JSON.stringify(filtered));
    return true;
  },

  // ORDERS CRUD
  getOrders: () => {
    initializeDB();
    if (!isBrowser) return [];
    return JSON.parse(localStorage.getItem('sd_orders_v2')) || [];
  },
  saveOrder: (order) => {
    const orders = db.getOrders();
    const index = orders.findIndex(o => o.id === order.id);
    const newOrder = {
      ...order,
      id: order.id || 'SD-' + Math.floor(1000 + Math.random() * 9000),
      date: order.date || new Date().toISOString().split('T')[0]
    };
    if (index > -1) {
      orders[index] = newOrder;
      db.writeLog('Order', `Updated order status for ${newOrder.id} to ${newOrder.status}`);
    } else {
      orders.unshift(newOrder);
      db.writeLog('Order', `Placed new quote request configuration: ${newOrder.id}`);
    }
    localStorage.setItem('sd_orders_v2', JSON.stringify(orders));
    return newOrder;
  },
  deleteOrder: (id) => {
    const orders = db.getOrders();
    const filtered = orders.filter(o => o.id !== id);
    localStorage.setItem('sd_orders_v2', JSON.stringify(filtered));
    return true;
  },

  // SERVICE REQUESTS CRUD
  getServices: () => {
    initializeDB();
    if (!isBrowser) return SEED_SERVICE_REQUESTS;
    return JSON.parse(localStorage.getItem('sd_services_v2')) || SEED_SERVICE_REQUESTS;
  },
  saveServiceRequest: (request) => {
    const services = db.getServices();
    const index = services.findIndex(s => s.id === request.id);
    const newReq = {
      ...request,
      id: request.id || 'SR-' + Math.floor(100 + Math.random() * 900),
      dateCreated: request.dateCreated || new Date().toISOString().split('T')[0],
      status: request.status || 'Submitted',
      assignedTech: request.assignedTech || 'Unassigned'
    };
    if (index > -1) {
      services[index] = newReq;
      db.writeLog('Service', `Updated ticket status for ${newReq.id}`);
    } else {
      services.unshift(newReq);
      db.writeLog('Service', `Submitted new maintenance request ticket: ${newReq.id}`);
    }
    localStorage.setItem('sd_services_v2', JSON.stringify(services));
    return newReq;
  },

  // PROJECTS
  getProjects: () => {
    initializeDB();
    if (!isBrowser) return SEED_PROJECTS;
    return JSON.parse(localStorage.getItem('sd_projects_v2')) || SEED_PROJECTS;
  },
  saveProject: (project) => {
    const projects = db.getProjects();
    const index = projects.findIndex(p => p.id === project.id);
    const newProj = {
      ...project,
      id: project.id || 'proj-' + Date.now()
    };
    if (index > -1) {
      projects[index] = newProj;
    } else {
      projects.push(newProj);
    }
    localStorage.setItem('sd_projects_v2', JSON.stringify(projects));
    return newProj;
  },

  // SETTINGS
  getSettings: () => {
    initializeDB();
    if (!isBrowser) return SEED_SETTINGS;
    return JSON.parse(localStorage.getItem('sd_settings')) || SEED_SETTINGS;
  },

  // Reset tool
  resetSeed: () => {
    localStorage.removeItem('sd_products_pim_v2');
    localStorage.removeItem('sd_categories_v2');
    localStorage.removeItem('sd_rules_v2');
    localStorage.removeItem('sd_logs_v2');
    localStorage.removeItem('sd_web_settings_v2');
    localStorage.removeItem('sd_gallery_v2');
    localStorage.removeItem('sd_projects_v2');
    localStorage.removeItem('sd_services_v2');
    localStorage.removeItem('sd_orders_v2');
    initializeDB();
    db.writeLog('System', 'System database refactory re-seeded successfully.');
    return true;
  }
};
