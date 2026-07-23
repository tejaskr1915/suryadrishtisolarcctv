module.exports = [
"[project]/src/utils/dbMock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
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
        status: 'Active',
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
        stockQuantity: 3,
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
    {
        id: 'bat-12',
        type: 'battery',
        sku: 'SG-BAT-LFP12',
        category: 'Batteries',
        brand: 'SuryaGlow',
        modelNumber: 'SG-12A',
        name: 'SuryaGlow 12Ah LFP',
        capacity: '12Ah',
        price: 120,
        description: 'Lightweight safety LiFePO4 battery pack',
        status: 'Active',
        stockQuantity: 30,
        availableStock: 28,
        lowStockThreshold: 5
    },
    {
        id: 'bat-18',
        type: 'battery',
        sku: 'SG-BAT-LFP18',
        category: 'Batteries',
        brand: 'SuryaGlow',
        modelNumber: 'SG-18A',
        name: 'SuryaGlow 18Ah LFP Pro',
        capacity: '18Ah',
        price: 180,
        description: 'High endurance safety LiFePO4 battery pack',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 19,
        lowStockThreshold: 5
    },
    // SOLAR PANELS
    {
        id: 'panel-20',
        type: 'panel',
        sku: 'HE-PAN-MON20',
        category: 'Solar Panels',
        brand: 'Helios',
        modelNumber: 'HE-20W',
        name: 'Helios 20W Monocrystalline',
        wattage: '20W',
        price: 90,
        description: 'Anti-reflective tempered glass solar panel',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 24,
        lowStockThreshold: 5
    },
    {
        id: 'panel-40',
        type: 'panel',
        sku: 'HE-PAN-MON40',
        category: 'Solar Panels',
        brand: 'Helios',
        modelNumber: 'HE-40W',
        name: 'Helios 40W Monocrystalline Pro',
        wattage: '40W',
        price: 150,
        description: 'Double sided efficiency capture panel',
        status: 'Active',
        stockQuantity: 15,
        availableStock: 14,
        lowStockThreshold: 3
    },
    // ACCESSORIES
    {
        id: 'acc-sd64',
        type: 'accessory',
        sku: 'AC-SD-CARD64',
        category: 'Accessories',
        brand: 'Sandisk',
        modelNumber: 'SD-64G',
        name: '64GB CCTV SD Card',
        price: 20,
        description: 'Class 10 high endurance surveillance memory card',
        status: 'Active',
        stockQuantity: 100,
        availableStock: 95,
        lowStockThreshold: 15
    },
    {
        id: 'acc-sd128',
        type: 'accessory',
        sku: 'AC-SD-CARD128',
        category: 'Accessories',
        brand: 'Sandisk',
        modelNumber: 'SD-128G',
        name: '128GB CCTV SD Card',
        price: 35,
        description: 'Class 10 ultra high endurance surveillance memory card',
        status: 'Active',
        stockQuantity: 80,
        availableStock: 76,
        lowStockThreshold: 12
    },
    {
        id: 'acc-pole',
        type: 'accessory',
        sku: 'AC-POL-BRK01',
        category: 'Accessories',
        brand: 'Surya Drishti',
        modelNumber: 'AC-PL-MNT',
        name: 'Pole Clamp Bracket set',
        price: 45,
        description: 'Galvanized iron clamp brackets for camera mounts',
        status: 'Active',
        stockQuantity: 40,
        availableStock: 38,
        lowStockThreshold: 5
    },
    {
        id: 'acc-wall',
        type: 'accessory',
        sku: 'AC-WAL-BRK02',
        category: 'Accessories',
        brand: 'Surya Drishti',
        modelNumber: 'AC-WL-ARM',
        name: 'Wall Mount Arm bracket',
        price: 30,
        description: 'Universal weather-proof wall extension mounting arms',
        status: 'Active',
        stockQuantity: 50,
        availableStock: 50,
        lowStockThreshold: 5
    },
    {
        id: 'acc-box',
        type: 'accessory',
        sku: 'AC-JUN-BOX03',
        category: 'Accessories',
        brand: 'Surya Drishti',
        modelNumber: 'AC-JN-BOX',
        name: 'Waterproof Junction Box',
        price: 15,
        description: 'Outdoor IP66 rated junction lock boxes for connections',
        status: 'Active',
        stockQuantity: 12,
        availableStock: 10,
        lowStockThreshold: 5
    },
    {
        id: 'acc-inst',
        type: 'accessory',
        sku: 'SRV-INSTALL',
        category: 'Services',
        brand: 'Surya Drishti',
        modelNumber: 'SRV-INS',
        name: 'Professional Site Installation',
        price: 99,
        description: 'Complete layout setup and deployment by certified technicians',
        status: 'Active',
        stockQuantity: 999,
        availableStock: 999,
        lowStockThreshold: 0
    },
    {
        id: 'acc-amc',
        type: 'accessory',
        sku: 'SRV-AMC-YEAR',
        category: 'Services',
        brand: 'Surya Drishti',
        modelNumber: 'SRV-AMC',
        name: 'Annual Maintenance Contract',
        price: 149,
        description: 'Periodic cleaning, battery health sweep, and hardware replacement warranty cover',
        status: 'Active',
        stockQuantity: 999,
        availableStock: 999,
        lowStockThreshold: 0
    }
];
const SEED_CATEGORIES = [
    {
        id: 'cat-solar',
        name: 'Solar Cameras',
        nameKn: 'ಸೌರ ಕ್ಯಾಮೆರಾಗಳು',
        image: '/images/cam1.jpg',
        displayOrder: 1,
        enabled: true
    },
    {
        id: 'cat-ip',
        name: 'IP Cameras',
        nameKn: 'ಐಪಿ ಕ್ಯಾಮೆರಾಗಳು',
        image: '/images/ip1.jpg',
        displayOrder: 2,
        enabled: true
    },
    {
        id: 'cat-ir',
        name: 'IR Cameras',
        nameKn: 'ಐಆರ್ ಕ್ಯಾಮೆರಾಗಳು',
        image: '/images/elec2.jpg',
        displayOrder: 3,
        enabled: true
    },
    {
        id: 'cat-acc',
        name: 'Accessories',
        nameKn: 'ಪರಿಕರಗಳು',
        image: '/images/cam4.jpg',
        displayOrder: 4,
        enabled: true
    }
];
const SEED_COMPATIBILITY_RULES = [
    {
        id: 'rule-1',
        type: 'camera-battery',
        cameraLens: 3,
        batteryId: 'bat-18',
        description: 'Triple Lens Camera requires 18Ah Battery'
    },
    {
        id: 'rule-2',
        type: 'panel-battery',
        panelId: 'panel-20',
        batteryId: 'bat-12',
        description: '20W Solar Panel supports only 12Ah Battery'
    }
];
const SEED_SYSTEM_LOGS = [
    {
        id: 'log-1',
        timestamp: new Date().toISOString(),
        type: 'Login',
        message: 'Admin login verified successfully.'
    },
    {
        id: 'log-2',
        timestamp: new Date().toISOString(),
        type: 'System',
        message: 'Seeded default hardware PIM structures.'
    }
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
        {
            question: 'How long does the solar battery last?',
            answer: 'Our safety LFP battery packs are designed to last 5-7 years with continuous usage.'
        },
        {
            question: 'Is installation included in the custom configuration?',
            answer: 'Yes, if you toggle Professional Site Installation under Accessories during build.'
        }
    ],
    testimonials: [
        {
            client: 'Ramesh Gowda',
            location: 'Mandya Farm',
            text: 'The camera setup runs perfectly off-grid. Highly recommended for remote security.'
        }
    ]
};
const SEED_GALLERY = [
    {
        id: 'gal-1',
        type: 'image',
        title: '77A Solar CCTV Tower',
        imageUrl: '/images/cam1.jpg',
        description: 'CCTV tower checking remote crop health off-grid.'
    },
    {
        id: 'gal-2',
        type: 'image',
        title: 'Downtown Depot setup',
        imageUrl: '/images/cam2.jpg',
        description: 'Bullet camera mount checking commercial logistics gate.'
    },
    {
        id: 'gal-3',
        type: 'image',
        title: 'Coastal Harbor camera',
        imageUrl: '/images/cam4.jpg',
        description: 'Anti-rust weather-proof casing mounted near docks.'
    },
    {
        id: 'gal-v1',
        type: 'video',
        title: 'Apex PTZ Night Vision test',
        imageUrl: '/images/cam5.jpg',
        videoUrl: '/videos/demo2.mp4',
        description: 'Live threat detection infrared sweep test.'
    }
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
        attachments: [
            '/images/cam1.jpg'
        ]
    }
];
const SEED_SETTINGS = {
    companyName: 'SURYA DRISHTI',
    vatRate: 0.18,
    technicians: [
        'Marcus Wright',
        'Alex Mercer',
        'John Connor',
        'Sarah Connor'
    ]
};
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
const initializeDB = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
initializeDB();
const db = {
    // PRODUCTS CRUD
    getProducts: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_PRODUCTS;
        //TURBOPACK unreachable
        ;
    },
    saveProduct: (product)=>{
        const products = db.getProducts();
        const index = products.findIndex((p)=>p.id === product.id);
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
    deleteProduct: (id)=>{
        const products = db.getProducts();
        const target = products.find((p)=>p.id === id);
        if (target) {
            db.writeLog('Product', `Deleted product: ${target.name} (${target.sku})`);
        }
        const filtered = products.filter((p)=>p.id !== id);
        localStorage.setItem('sd_products_pim_v2', JSON.stringify(filtered));
        return true;
    },
    // CATEGORIES CRUD
    getCategories: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_CATEGORIES;
        //TURBOPACK unreachable
        ;
    },
    saveCategory: (category)=>{
        const categories = db.getCategories();
        const index = categories.findIndex((c)=>c.id === category.id);
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
    deleteCategory: (id)=>{
        const categories = db.getCategories();
        const target = categories.find((c)=>c.id === id);
        if (target) {
            db.writeLog('Category', `Deleted category: ${target.name}`);
        }
        const filtered = categories.filter((c)=>c.id !== id);
        localStorage.setItem('sd_categories_v2', JSON.stringify(filtered));
        return true;
    },
    // COMPATIBILITY RULES CRUD
    getRules: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_COMPATIBILITY_RULES;
        //TURBOPACK unreachable
        ;
    },
    saveRule: (rule)=>{
        const rules = db.getRules();
        const index = rules.findIndex((r)=>r.id === rule.id);
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
    deleteRule: (id)=>{
        const rules = db.getRules();
        const filtered = rules.filter((r)=>r.id !== id);
        localStorage.setItem('sd_rules_v2', JSON.stringify(filtered));
        db.writeLog('System', `Deleted compatibility rule ID: ${id}`);
        return true;
    },
    // SYSTEM AUDIT LOGS
    getLogs: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_SYSTEM_LOGS;
        //TURBOPACK unreachable
        ;
    },
    writeLog: (type, message)=>{
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
    getWebSettings: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_WEBSITE_SETTINGS;
        //TURBOPACK unreachable
        ;
    },
    saveWebSettings: (settings)=>{
        localStorage.setItem('sd_web_settings_v2', JSON.stringify(settings));
        db.writeLog('System', 'Website corporate contact settings updated.');
        return settings;
    },
    // GALLERY CRUD
    getGallery: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_GALLERY;
        //TURBOPACK unreachable
        ;
    },
    saveGalleryItem: (item)=>{
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
    deleteGalleryItem: (id)=>{
        const gallery = db.getGallery();
        const filtered = gallery.filter((g)=>g.id !== id);
        localStorage.setItem('sd_gallery_v2', JSON.stringify(filtered));
        return true;
    },
    // ORDERS CRUD
    getOrders: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
    },
    saveOrder: (order)=>{
        const orders = db.getOrders();
        const index = orders.findIndex((o)=>o.id === order.id);
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
    deleteOrder: (id)=>{
        const orders = db.getOrders();
        const filtered = orders.filter((o)=>o.id !== id);
        localStorage.setItem('sd_orders_v2', JSON.stringify(filtered));
        return true;
    },
    // SERVICE REQUESTS CRUD
    getServices: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_SERVICE_REQUESTS;
        //TURBOPACK unreachable
        ;
    },
    saveServiceRequest: (request)=>{
        const services = db.getServices();
        const index = services.findIndex((s)=>s.id === request.id);
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
    getProjects: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_PROJECTS;
        //TURBOPACK unreachable
        ;
    },
    saveProject: (project)=>{
        const projects = db.getProjects();
        const index = projects.findIndex((p)=>p.id === project.id);
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
    getSettings: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time truthy", 1) return SEED_SETTINGS;
        //TURBOPACK unreachable
        ;
    },
    // Reset tool
    resetSeed: ()=>{
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
}),
"[project]/src/store/useConfiguratorStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfiguratorStore",
    ()=>useConfiguratorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-ssr] (ecmascript)");
;
;
const useConfiguratorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getProducts();
    // Helper variables for initial seeding in Zustand
    const solarCameras = products.filter((p)=>p.type === 'solar-camera');
    const batteries = products.filter((p)=>p.type === 'battery');
    const panels = products.filter((p)=>p.type === 'panel');
    return {
        // Nav Routing Tab
        activeTab: 'home',
        setActiveTab: (tab)=>set({
                activeTab: tab
            }),
        // Toasts alert array
        toasts: [],
        addToast: (message, type = 'success')=>{
            const id = Date.now();
            set((state)=>({
                    toasts: [
                        ...state.toasts,
                        {
                            id,
                            message,
                            type
                        }
                    ]
                }));
            setTimeout(()=>{
                set((state)=>({
                        toasts: state.toasts.filter((t)=>t.id !== id)
                    }));
            }, 4000);
        },
        removeToast: (id)=>set((state)=>({
                    toasts: state.toasts.filter((t)=>t.id !== id)
                })),
        // Active Configurator Type ('solar' | 'electric')
        configType: 'solar',
        setConfigType: (type)=>set({
                configType: type
            }),
        // SOLAR SELECTIONS
        solarLensCount: 1,
        solarCamera: solarCameras.find((c)=>c.lensCount === 1) || solarCameras[0] || null,
        solarBattery: batteries.find((b)=>b.capacity === '12Ah') || batteries[0] || null,
        solarPanel: panels.find((p)=>p.wattage === '20W') || panels[0] || null,
        solarMemoryCard: products.find((p)=>p.id === 'acc-sd64') || null,
        solarAccessories: [],
        checkCompatibility: (typeChanged, selectedItem)=>{
            const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getProducts();
            const rules = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getRules();
            let cam = get().solarCamera;
            let bat = get().solarBattery;
            let pan = get().solarPanel;
            if (typeChanged === 'camera') cam = selectedItem;
            if (typeChanged === 'battery') bat = selectedItem;
            if (typeChanged === 'panel') pan = selectedItem;
            let toastMsg = null;
            // Evaluate active rules from database
            rules.forEach((rule)=>{
                // Rule: Camera (lensCount) -> Battery requirement
                if (rule.cameraLens && cam && cam.lensCount === rule.cameraLens) {
                    if (bat && bat.id !== rule.batteryId) {
                        const requiredBat = products.find((p)=>p.id === rule.batteryId);
                        if (requiredBat) {
                            bat = requiredBat;
                            toastMsg = `Auto-adjusted: ${rule.description}`;
                        }
                    }
                }
                // Rule: Solar Panel -> Battery restriction
                if (rule.panelId && pan && pan.id === rule.panelId) {
                    if (bat && bat.id !== rule.batteryId) {
                        const allowedBat = products.find((p)=>p.id === rule.batteryId);
                        if (allowedBat) {
                            bat = allowedBat;
                            toastMsg = `Auto-adjusted: ${rule.description}`;
                        }
                    }
                }
            });
            // Special check: if battery is 18Ah, it requires 40W panel (inverse of panel capacity restriction)
            if (bat && bat.id === 'bat-18' && pan && pan.id === 'panel-20') {
                const requiredPanel = products.find((p)=>p.id === 'panel-40');
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
        setSolarLensCount: (count)=>{
            const filteredCams = solarCameras.filter((c)=>c.lensCount === count);
            const cam = filteredCams[0] || null;
            set({
                solarLensCount: count,
                solarCamera: cam
            });
            get().checkCompatibility('camera', cam);
        },
        setSolarCamera: (cam)=>{
            set({
                solarCamera: cam
            });
            get().checkCompatibility('camera', cam);
        },
        setSolarBattery: (bat)=>{
            set({
                solarBattery: bat
            });
            get().checkCompatibility('battery', bat);
        },
        setSolarPanel: (pan)=>{
            set({
                solarPanel: pan
            });
            get().checkCompatibility('panel', pan);
        },
        setSolarMemoryCard: (card)=>set({
                solarMemoryCard: card
            }),
        toggleSolarAccessory: (acc)=>{
            const current = get().solarAccessories;
            const exists = current.some((a)=>a.id === acc.id);
            if (exists) {
                set({
                    solarAccessories: current.filter((a)=>a.id !== acc.id)
                });
                get().addToast(`Removed ${acc.name}`, 'info');
            } else {
                set({
                    solarAccessories: [
                        ...current,
                        acc
                    ]
                });
                get().addToast(`Added ${acc.name}`, 'success');
            }
        },
        // ELECTRIC SELECTIONS
        electricClass: 'WiFi Camera',
        electricLens: 'Single Lens',
        electricRes: '2MP',
        electricQty: 4,
        electricStorage: '1TB',
        electricInstallation: 'Outdoor',
        setElectricClass: (cls)=>set({
                electricClass: cls
            }),
        setElectricLens: (lens)=>set({
                electricLens: lens
            }),
        setElectricRes: (res)=>set({
                electricRes: res
            }),
        setElectricQty: (qty)=>set({
                electricQty: qty
            }),
        setElectricStorage: (st)=>set({
                electricStorage: st
            }),
        setElectricInstallation: (inst)=>set({
                electricInstallation: inst
            }),
        // CUSTOMER FORM DATA
        customerName: '',
        customerPhone: '',
        customerWhatsapp: '',
        customerEmail: '',
        customerAddress: '',
        customerVillage: '',
        customerTaluk: '',
        customerDistrict: '',
        customerState: 'Karnataka',
        customerPin: '',
        customerMaps: 'https://maps.google.com/?q=12.9716,77.5946',
        customerPrefDate: '',
        customerNotes: '',
        setCustomerInfo: (info)=>set((state)=>({
                    ...state,
                    ...info
                })),
        // Order Success Ref State
        completedOrder: null,
        isSubmitting: false,
        // Pricing breakdowns math for Solar System
        getSolarBreakdown: ()=>{
            const { solarCamera, solarBattery, solarPanel, solarMemoryCard, solarAccessories } = get();
            const cameraPrice = solarCamera?.price || 0;
            const batteryPrice = solarBattery?.price || 0;
            const panelPrice = solarPanel?.price || 0;
            const memoryCardPrice = solarMemoryCard?.price || 0;
            // Check if "Professional Site Installation" is in accessories
            const installationToggled = solarAccessories.some((a)=>a.id === 'acc-inst');
            const installationFee = installationToggled ? 99 : 0;
            // Sum other accessories (excluding installation and AMC to keep calculations transparent)
            const hardwareAccessories = solarAccessories.filter((a)=>a.id !== 'acc-inst');
            const accessoriesSum = hardwareAccessories.reduce((sum, a)=>sum + a.price, 0);
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
        getElectricBreakdown: ()=>{
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
        submitConfigurator: async ()=>{
            set({
                isSubmitting: true
            });
            const { configType, customerName, customerEmail, customerPhone, customerWhatsapp, customerAddress, customerVillage, customerTaluk, customerDistrict, customerState, customerPin, customerMaps, customerPrefDate, customerNotes } = get();
            if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
                get().addToast('Please fill in the core contact inputs', 'error');
                set({
                    isSubmitting: false
                });
                return false;
            }
            // Network delay mock
            await new Promise((resolve)=>setTimeout(resolve, 2000));
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
                    accessories: solarAccessories.map((a)=>a.name),
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
                    camera: `${electricClass === 'WiFi Camera' ? get().solarCamera?.name || 'WiFi Camera' : electricClass} x${electricQty}`,
                    cameraImage,
                    dvr: breakdown.dvrModel || undefined,
                    storage: `${electricStorage} Storage`,
                    accessories: [
                        `Installation Area: ${electricInstallation}`
                    ],
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
                const saved = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveOrder(orderData);
                set({
                    completedOrder: saved,
                    isSubmitting: false
                });
                get().addToast('Quotation successfully stored in database!', 'success');
                // Simulating transactional messages
                console.log(`[Email Dispatch] To Client: ${customerEmail} - Quotation Attached.`);
                console.log(`[Email Dispatch] To Admin: sales@suryadrishti.com - New order ${saved.id} submitted.`);
                console.log(`[WhatsApp Dispatch] To Admin: Marcus Wright (assigned) - New order alert for customer ${customerName}.`);
                get().addToast('Transactional Emails & WhatsApp alerts dispatched!', 'info');
                return saved;
            } catch (err) {
                get().addToast('Supabase write failure. Please check network logs.', 'error');
                set({
                    isSubmitting: false
                });
                return false;
            }
        },
        // SERVICE REQUEST SUBMISSION
        serviceIssue: 'Camera',
        serviceDescription: '',
        serviceFiles: [],
        setServiceIssue: (issue)=>set({
                serviceIssue: issue
            }),
        setServiceDescription: (desc)=>set({
                serviceDescription: desc
            }),
        setServiceFiles: (files)=>set({
                serviceFiles: files
            }),
        submitServiceRequest: async ()=>{
            set({
                isSubmitting: true
            });
            const { serviceIssue, serviceDescription, serviceFiles, customerName, customerPhone, customerEmail } = get();
            if (!customerName || !customerPhone || !serviceDescription) {
                get().addToast('Core customer profile and details required', 'error');
                set({
                    isSubmitting: false
                });
                return false;
            }
            // Simulate loading network delay
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            const requestData = {
                customerName,
                phone: customerPhone,
                email: customerEmail || 'no-email@suryadrishti.com',
                issueType: serviceIssue,
                description: serviceDescription,
                attachments: serviceFiles.map((f)=>f.preview || '/images/cam1.jpg'),
                status: 'Submitted',
                assignedTech: 'Unassigned'
            };
            try {
                const saved = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveServiceRequest(requestData);
                set({
                    isSubmitting: false,
                    serviceDescription: '',
                    serviceFiles: []
                });
                get().addToast('Service ticket registered! Tracking ID: ' + saved.id, 'success');
                return saved;
            } catch (err) {
                get().addToast('Supabase registration failed.', 'error');
                set({
                    isSubmitting: false
                });
                return false;
            }
        },
        // Reset wizard
        resetConfigurator: ()=>{
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
}),
"[project]/src/components/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/battery-charging.mjs [app-ssr] (ecmascript) <export default as BatteryCharging>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
;
;
;
function Hero({ onNavigate }) {
    const [solarAngle, setSolarAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(32);
    const [batteryCharge, setBatteryCharge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(78);
    const [isCharging, setIsCharging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bgImage, setBgImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/images/hero-bg.jpg');
    // Swap background images dynamically based on device viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (window.innerWidth < 768) {
                setBgImage('/images/hero-bg-mobile.jpg');
            } else {
                setBgImage('/images/hero-bg.jpg');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    // Animate mock telemetry in the hero panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setSolarAngle((prev)=>{
                const drift = (Math.random() - 0.5) * 0.4;
                const next = prev + drift;
                return next < 30 ? 30 : next > 35 ? 35 : parseFloat(next.toFixed(2));
            });
            setBatteryCharge((prev)=>{
                if (prev >= 98) {
                    setIsCharging(false);
                    return 98;
                }
                if (prev <= 70) {
                    setIsCharging(true);
                }
                return prev + (isCharging ? 1 : -1);
            });
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        isCharging
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-500",
        style: {
            backgroundImage: `url('${bgImage}')`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/35 to-zinc-950/80 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 glass-panel p-4 sm:p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative z-10 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2px px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[9px] sm:text-xs font-kannada tracking-wide mb-3 sm:mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    "ನಿಮ್ಮ ಭದ್ರತೆ ನಮ್ಮ ಜವಾಬ್ದಾರಿ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl md:text-5xl font-bold font-kannada leading-tight text-white mb-3 sm:mb-4",
                                children: [
                                    "ಸೂರ್ಯ ದೃಷ್ಟಿ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-sm sm:text-lg md:text-2xl font-space font-semibold tracking-wider bg-gradient-to-r from-electric-cyan via-electric-sky to-electric-emerald bg-clip-text text-transparent mt-1 uppercase",
                                        children: "SURYA DRISHTI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-200 font-kannada text-xs sm:text-sm md:text-base leading-relaxed mb-2.5",
                                children: "ನಿಮ್ಮ ಜಮೀನು, ತೋಟ ಮತ್ತು ಸ್ವತ್ತುಗಳ ರಕ್ಷಣೆಗಾಗಿ ಸೌರಶಕ್ತಿ ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕಣ್ಗಾವಲು ವ್ಯವಸ್ಥೆ."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-space text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-5 sm:mb-6",
                                children: "Autonomous Solar CCTV security engineered with starlight AI threat classification, thermal energy backup, and custom specifications generator."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-5 sm:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate('configurator'),
                                        className: "px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg font-space bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold tracking-wider hover:opacity-90 shadow-lg hover:shadow-electric-cyan/20 transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs uppercase group cursor-pointer",
                                        children: [
                                            "Configure System ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 88,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const el = document.getElementById('comparison-matrix');
                                            if (el) el.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        },
                                        className: "px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg font-space glass-panel border border-zinc-800 text-white font-medium hover:border-zinc-700 transition-all duration-300 text-[10px] sm:text-xs uppercase cursor-pointer",
                                        children: "Compare Cameras"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-zinc-900/60 max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base sm:text-lg font-space font-medium text-white",
                                                children: "99.9%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5",
                                                children: "Solar Autonomy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base sm:text-lg font-space font-medium text-white",
                                                children: "< 350ms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5",
                                                children: "AI Classification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base sm:text-lg font-space font-medium text-white",
                                                children: "7 Year"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5",
                                                children: "System Warranty"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex lg:col-span-5 relative h-[450px] items-center justify-center pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-72 h-72 rounded-full border border-electric-cyan/15 animate-ping opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-56 h-56 rounded-full border border-electric-cyan/10 animate-spin-slow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-40 h-40 rounded-full border border-dashed border-electric-cyan/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-72 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan to-transparent animate-scanner shadow-[0_0_8px_#00F5FF] z-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-8 right-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Solar Input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-white",
                                                children: "40W Helios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-12 left-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-electric-emerald/10 flex items-center justify-center text-electric-emerald",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__["BatteryCharging"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Thermal Battery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-white",
                                                children: [
                                                    batteryCharge,
                                                    "% Charging"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 -right-4 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Panel Align"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-zinc-300",
                                                children: [
                                                    solarAngle,
                                                    "° SW"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 px-3 py-1 bg-zinc-950/90 border border-electric-cyan/20 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-space tracking-widest text-zinc-400 uppercase font-semibold",
                                        children: "Active Telemetry HUD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Comparison.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Comparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.mjs [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/audio-lines.mjs [app-ssr] (ecmascript) <export default as AudioLines>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-ssr] (ecmascript) <export default as ZoomIn>");
;
;
;
;
;
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const renderBilingualValue = (val)=>{
    if (!val) return '';
    const translations = {
        // Night Vision
        'Color Night Vision (Up to 50m)': 'ಕಲರ್ ನೈಟ್ ವಿಷನ್ (50 ಮೀ ವರೆಗೆ) / Color Night Vision (Up to 50m)',
        'Starlight Laser (Up to 40m)': 'ಸ್ಟಾರ್‌ಲೈಟ್ ಲೇಸರ್ (40 ಮೀ ವರೆಗೆ) / Starlight Laser (Up to 40m)',
        'Infrared Black & White (Up to 30m)': 'ಇನ್‌ಫ್ರಾರೆಡ್ ಬ್ಲಾಕ್ & ವೈಟ್ (30 ಮೀ ವರೆಗೆ) / Infrared Black & White (Up to 30m)',
        'Dual-Source Color Night Vision': 'ಡ್ಯುಯಲ್-ಸೋರ್ಸ್ ಕಲರ್ ನೈಟ್ ವಿಷನ್ / Dual-Source Color Night Vision',
        'Color Laser Starlight Gaze (Up to 80m)': 'ಕಲರ್ ಲೇಸರ್ ಸ್ಟಾರ್‌ಲೈಟ್ ಗೇಜ್ (80 ಮೀ ವರೆಗೆ) / Color Laser Starlight Gaze (Up to 80m)',
        // Zoom
        '10x Optical Hybrid Zoom': '10x ಆಪ್ಟಿಕಲ್ ಹೈಬ್ರಿಡ್ ಜೂಮ್ / 10x Optical Hybrid Zoom',
        '4x Digital Magnification': '4x ಡಿಜಿಟಲ್ ಮ್ಯಾಗ್ನಿಫಿಕೇಶನ್ / 4x Digital Magnification',
        'No Optical (Fixed Wide-Angle Lens)': 'ಆಪ್ಟಿಕಲ್ ಇಲ್ಲ (ಸ್ಥಿರ ವೈಡ್-ಆಂಗಲ್ ಲೆನ್ಸ್) / No Optical (Fixed Wide-Angle Lens)',
        '4x Optical Zoom': '4x ಆಪ್ಟಿಕಲ್ ಜೂಮ್ / 4x Optical Zoom',
        '16x Hybrid Panoramic Zoom': '16x ಹೈಬ್ರಿಡ್ ಪನೋರಮಿಕ್ ಜೂಮ್ / 16x Hybrid Panoramic Zoom',
        // AI Target Tracing
        'AI Object Tracking & Siren Lock': 'ಎಐ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸೈರನ್ ಲಾಕ್ / AI Object Tracking & Siren Lock',
        'Intelligent Human Filter': 'ಬುದ್ಧಿವಂತ ಹ್ಯೂಮನ್ ಫಿಲ್ಟರ್ / Intelligent Human Filter',
        'Basic Motion & Face Scanning': 'ಮೂಲ ಚಲನೆ ಮತ್ತು ಮುಖ ಸ್ಕ್ಯಾನಿಂಗ್ / Basic Motion & Face Scanning',
        'Intrusion Cross-Line Alarm': 'ಅನಧಿಕೃತ ಪ್ರವೇಶ ಕ್ರಾಸ್-ಲೈನ್ ಅಲಾರಾಂ / Intrusion Cross-Line Alarm',
        'AI Multi-Target Classification': 'ಎಐ ಮಲ್ಟಿ-ಟಾರ್ಗೆಟ್ ವರ್ಗೀಕರಣ / AI Multi-Target Classification',
        // PIR Motion Sweep
        'Radar Motion Scan (120° coverage)': 'ರಡಾರ್ ಮೋಷನ್ ಸ್ಕ್ಯಾನ್ (120° ಕವರೇಜ್) / Radar Motion Scan (120° coverage)',
        'Zone PIR Heat Sensing': 'ಝೋನ್ ಪಿಐಆರ್ ಹೀಟ್ ಸೆನ್ಸಿಂಗ್ / Zone PIR Heat Sensing',
        'Standard Pixel Motion Analysis': 'ಪ್ರಮಾಣಿತ ಪಿಕ್ಸೆಲ್ ಚಲನೆ ವಿಶ್ಲೇಷಣೆ / Standard Pixel Motion Analysis',
        'Advanced Thermal Motion Sweep': 'ಸುಧಾರಿತ ಥರ್ಮಲ್ ಮೋಷನ್ ಸ್ವೀಪ್ / Advanced Thermal Motion Sweep',
        'Radar Sweep & Perimeter Defense': 'ರಡಾರ್ ಸ್ವೀಪ್ ಮತ್ತು ಪರಿಧಿ ರಕ್ಷಣೆ / Radar Sweep & Perimeter Defense',
        // Audio Intercom
        'Full Duplex Intercom (Noise Cancelling)': 'ಫುಲ್ ಡ್ಯುಪ್ಲೆಕ್ಸ್ ಇಂಟರ್‌ಕಾಮ್ (ಶಬ್ದ ರದ್ದತಿ) / Full Duplex Intercom (Noise Cancelling)',
        'Two-Way Audio with Speaker Alert': 'ಸ್ಪೀಕರ್ ಅಲರ್ಟ್‌ನೊಂದಿಗೆ ದ್ವಿಮುಖ ಆಡಿಯೋ / Two-Way Audio with Speaker Alert',
        'Integrated Mic and Internal Speaker': 'ಸಂಯೋಜಿತ ಮೈಕ್ ಮತ್ತು ಆಂತರಿಕ ಸ್ವೀಕರ್ / Integrated Mic and Internal Speaker',
        'Mic and High-Decibel Speaker Output': 'ಮೈಕ್ ಮತ್ತು ಹೈ-ಡೆಸಿಬಲ್ ಸ್ಪೀಕರ್ ಔಟ್‌ಪುಟ್ / Mic and High-Decibel Speaker Output',
        'Active Acoustic Warning Shield': 'ಸಕ್ರಿಯ ಅಕೌಸ್ಟಿಕ್ ಎಚ್ಚರಿಕೆ ಶೀಲ್ಡ್ / Active Acoustic Warning Shield',
        // Memory Storage Card
        'SD Card up to 256GB / Cloud Sync': '256 ಜಿಬಿ ವರೆಗೆ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / ಕ್ಲೌಡ್ ಸಿಂಕ್ / SD Card up to 256GB / Cloud Sync',
        'SD Card up to 256GB': '256 ಜಿಬಿ ವರೆಗೆ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / SD Card up to 256GB',
        'SD Card up to 128GB': '128 ಜಿಬಿ ವರೆಗೆ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / SD Card up to 128GB',
        'SD Card up to 256GB / Onboard NAS': '256 ಜಿಬಿ ವರೆಗೆ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / ಆನ್‌ಬೋರ್ಡ್ ಎನ್‌ಎಎಸ್ / SD Card up to 256GB / Onboard NAS',
        'Dual MicroSD Slot (Up to 512GB)': 'ಡ್ಯುಯಲ್ ಮೈಕ್ರೋ ಎಸ್‌ಡಿ ಸ್ಲಾಟ್ (512 ಜಿಬಿ ವರೆಗೆ) / Dual MicroSD Slot (Up to 512GB)',
        // Manufacturer Warranty
        '5 Years': '5 ವರ್ಷಗಳು / 5 Years',
        '3 Years': '3 ವರ್ಷಗಳು / 3 Years',
        '7 Years': '7 ವರ್ಷಗಳು / 7 Years'
    };
    const matched = translations[val];
    return matched ? renderBilingual(matched) : val;
};
const renderProductName = (name)=>{
    if (!name) return '';
    const translations = {
        'Strobe Siren Warning Dome': 'ಸ್ಟ್ರೋಬ್ ಸೈರನ್ ಎಚ್ಚರಿಕೆ ಡೋಮ್ / Strobe Siren Warning Dome',
        'THINKWILL Dual-Lens PTZ Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಪಿಟಿಝಡ್ ಡೋಮ್ / THINKWILL Dual-Lens PTZ Dome',
        'Consistent Smart Telemetry PTZ Dome': 'ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಟೆಲಿಮೆಟ್ರಿ ಪಿಟಿಝಡ್ ಡೋಮ್ / Consistent Smart Telemetry PTZ Dome',
        'THINKWILL Single-Lens Classic Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಸಿಂಗಲ್-ಲೆನ್ಸ್ ಕ್ಲಾಸಿಕ್ ಡೋಮ್ / THINKWILL Single-Lens Classic Dome',
        'THINKWILL Triple-Lens Panoramic Stand': 'ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಪನೋರಮಿಕ್ ಸ್ಟ್ಯಾಂಡ್ / THINKWILL Triple-Lens Panoramic Stand'
    };
    const matched = translations[name];
    return matched ? renderBilingual(matched) : name;
};
const renderProductDescription = (desc)=>{
    if (!desc) return '';
    const translations = {
        'White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.': 'ಸಂಯೋಜಿತ ಕೆಂಪು ಸ್ಟ್ರೋಬ್ ಸೈರನ್, ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು ಮತ್ತು ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಗುರಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.',
        'Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.': 'ಸಂಯೋಜಿತ ಮೌಂಟಿಂಗ್ ಬ್ರಾಕೆಟ್, ಡ್ಯುಯಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ವೈಡ್-ಆಂಗಲ್ ಆಪ್ಟಿಕಲ್ ಲೆನ್ಸ್ ಹೊಂದಿರುವ ಕಾಂಪ್ಯಾಕ್ಟ್ ವೈರ್‌ಲೆಸ್ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.',
        'Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.': 'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಸ್ಟಾರ್‌ಲೈಟ್ ಸೆನ್ಸಾರ್‌ಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ದಕ್ಷತೆಯ ಇನ್‌ಫ್ರಾರೆಡ್ ನೈಟ್ ಸ್ವೀಪ್ ಹೊಂದಿರುವ ಕನ್ಸಿಸ್ಟೆಂಟ್ ಬ್ರಾಂಡ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.',
        'White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.': 'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಶೂನ್ಯ-ವಿಳಂಬ ವೈಫೈ ಸಂಪರ್ಕ ಮತ್ತು ಹೆಚ್ಚಿನ ಶಕ್ತಿಯ ಹವಾಮಾನ-ನಿರೋಧಕ ಕೇಸಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.',
        'Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.': 'ಡಬಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ಬೆಂಬಲ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಡ್ಯುಯಲ್ ಸಬ್-ಡೋಮ್ ದೃಶ್ಯ ಪಾಡ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಎಂಟರ್‌ಪ್ರೈಸ್ ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಕ್ಯಾಮೆರಾ. / Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.'
    };
    const matched = translations[desc];
    return matched ? renderBilingual(matched) : desc;
};
function Comparison() {
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getProducts();
    // Filter only solar cameras for comparison
    const solarCameras = products.filter((p)=>p.type === 'solar-camera');
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const [cameraAId, setCameraAId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(solarCameras[0]?.id || '');
    const [cameraBId, setCameraBId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(solarCameras[1]?.id || '');
    const [highlightDifferences, setHighlightDifferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const camA = solarCameras.find((c)=>c.id === cameraAId) || solarCameras[0];
    const camB = solarCameras.find((c)=>c.id === cameraBId) || solarCameras[1];
    const handleConfigure = (camera)=>{
        store.setSolarCamera(camera);
        // Switch view to home configurator and scroll smoothly to it
        store.setActiveTab('home');
        setTimeout(()=>{
            const el = document.getElementById('configurator-section');
            if (el) el.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };
    const isDiff = (key)=>{
        if (!camA || !camB || !camA.features || !camB.features) return false;
        return camA.features[key] !== camB.features[key];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "comparison-matrix",
        className: "py-24 relative overflow-hidden bg-obsidian-bg2 border-y border-zinc-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Comparison.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end justify-between mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ ಹೋಲಿಕೆ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            " / Compare Models"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಸಂವಾದಾತ್ಮಕ ಹೋಲಿಕೆ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            " / Interactive Comparison"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 font-light mt-3 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಆಪ್ಟಿಕ್ಸ್, ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಯತಾಂಕಗಳನ್ನು ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಹೋಲಿಸಲು ಯಾವುದೇ ಎರಡು ಕ್ಯಾಮೆರಾ ಮಾದರಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            " / Select any two camera models to compare their optics, night vision capabilities, and autonomous tracking parameters side-by-side."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 md:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setHighlightDifferences(!highlightDifferences),
                                    className: `px-5 py-2.5 rounded-full font-space text-[10px] tracking-wider uppercase border cursor-pointer transition-all duration-300 ${highlightDifferences ? 'border-electric-cyan text-electric-cyan bg-electric-cyan/10 glow-cyan' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada",
                                            children: "ವ್ಯತ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸಿ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        " / Highlight Differences"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ 1 ಆಯ್ಕೆಮಾಡಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            " / Choose Camera 1"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 flex-wrap",
                                        children: solarCameras.map((cam)=>{
                                            const isActive = cam.id === cameraAId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCameraAId(cam.id),
                                                className: `relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'}`,
                                                title: cam.name,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: cam.image,
                                                        alt: cam.name,
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cam.id, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-zinc-400 mt-2.5 font-space font-medium",
                                        children: renderProductName(camA?.name)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ 2 ಆಯ್ಕೆಮಾಡಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            " / Choose Camera 2"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 flex-wrap",
                                        children: solarCameras.map((cam)=>{
                                            const isActive = cam.id === cameraBId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCameraBId(cam.id),
                                                className: `relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'}`,
                                                title: cam.name,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: cam.image,
                                                        alt: cam.name,
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cam.id, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-zinc-400 mt-2.5 font-space font-medium",
                                        children: renderProductName(camB?.name)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    camA && camB && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-3xl border border-white/5 bg-obsidian-bg3/50 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse min-w-[600px] text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-zinc-800/80 bg-zinc-950/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 font-space text-zinc-500 uppercase tracking-widest text-[9px] w-[220px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ವಿಶೇಷಣಗಳು"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    " / Specifications"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 w-[250px] border-r border-zinc-900 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: camA.image,
                                                            alt: camA.name,
                                                            className: "w-full h-full object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-space font-medium text-sm text-white mb-1",
                                                        children: renderProductName(camA.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]",
                                                        children: renderProductDescription(camA.description)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleConfigure(camA),
                                                        className: "inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕಾನ್ಫಿಗರ್ ಮಾಡಿ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            " / Configure Node ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 93
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 w-[250px] text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: camB.image,
                                                            alt: camB.name,
                                                            className: "w-full h-full object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-space font-medium text-sm text-white mb-1",
                                                        children: renderProductName(camB.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]",
                                                        children: renderProductDescription(camB.description)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleConfigure(camB),
                                                        className: "inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕಾನ್ಫಿಗರ್ ಮಾಡಿ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this),
                                                            " / Configure Node ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 93
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-zinc-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('nightVision') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 68
                                                        }, this),
                                                        " / Night Vision Gaze"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.nightVision || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.nightVision || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('zoom') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಹೈಬ್ರಿಡ್ ಆಪ್ಟಿಕ್ಸ್ ಜೂಮ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 71
                                                        }, this),
                                                        " / Hybrid Optics Zoom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.zoom || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.zoom || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('humanDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಎಐ ಟಾರ್ಗೆಟ್ ಟ್ರೇಸಿಂಗ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 310,
                                                            columnNumber: 71
                                                        }, this),
                                                        " / AI Target Tracing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.humanDetection || camA.features?.humanDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.humanDetection || camB.features?.humanDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('motionDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಪಿಐಆರ್ ಚಲನೆ ಪತ್ತೆ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 68
                                                        }, this),
                                                        " / PIR Motion Sweep"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.motionDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.motionDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('twoWayAudio') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__["AudioLines"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಆಡಿಯೋ ಇಂಟರ್‌ಕಾಮ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 75
                                                        }, this),
                                                        " / Audio Intercom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.twoWayAudio || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.twoWayAudio || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('storage') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಮೆಮೊರಿ ಸ್ಟೋರೇಜ್ ಕಾರ್ಡ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 349,
                                                            columnNumber: 74
                                                        }, this),
                                                        " / Memory Storage Card"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.storage || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.storage || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('warranty') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ತಯಾರಕರ ವಾರಂಟಿ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 76
                                                        }, this),
                                                        " / Manufacturer Warranty"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.warranty || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.warranty || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Comparison.jsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comparison.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comparison.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-ssr] (ecmascript) <export default as UserCheck>");
;
;
;
;
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const getBilingualProject = (proj)=>{
    if (!proj) return null;
    const translations = {
        '77A Farm Site Surveillance': '77ಎ ಫಾರ್ಮ್ ಸೈಟ್ ಕಣ್ಗಾವಲು / 77A Farm Site Surveillance',
        'Metro Hub Construction Phase 2': 'ಮೆಟ್ರೋ ಹಬ್ ನಿರ್ಮಾಣ ಹಂತ 2 / Metro Hub Construction Phase 2',
        'Coastal Marina Guarding': 'ಕರಾವಳಿ ಮರೀನಾ ಕಾವಲು / Coastal Marina Guarding',
        'Hill Valley Agriculture Area': 'ಹಿಲ್ ವ್ಯಾಲಿ ಕೃಷಿ ಪ್ರದೇಶ / Hill Valley Agriculture Area',
        'Downtown Commercial Block': 'ಡೌನ್‌ಟೌನ್ ವಾಣಿಜ್ಯ ಬ್ಲಾಕ್ / Downtown Commercial Block',
        'North Quay Yacht Harbor': 'ನಾರ್ತ್ ಕ್ವೇ ಯಾಚ್ ಹಾರ್ಬರ್ / North Quay Yacht Harbor',
        'Solar CCTV Off-Grid': 'ಸೌರ ಸಿಸಿಟಿವಿ ಆಫ್-ಗ್ರಿಡ್ / Solar CCTV Off-Grid',
        'Hybrid CCTV (Solar + Backup AC)': 'ಹೈಬ್ರಿಡ್ ಸಿಸಿಟಿವಿ (ಸೌರ + ಬ್ಯಾಕಪ್ ಎಸಿ) / Hybrid CCTV (Solar + Backup AC)',
        '100% Green Solar Tower': '100% ಹಸಿರು ಸೌರ ಗೋಪುರ / 100% Green Solar Tower',
        'Surya Drishti Apex PTZ-S1 + 40W panel': 'ಸೂರ್ಯ ದೃಷ್ಟಿ ಅಪೆಕ್ಸ್ PTZ-S1 + 40W ಪ್ಯಾನಲ್ / Surya Drishti Apex PTZ-S1 + 40W panel',
        'Surya Drishti Dome CS-S4 + 18Ah LFP': 'ಸೂರ್ಯ ದೃಷ್ಟಿ ಡೋಮ್ CS-S4 + 18Ah LFP / Surya Drishti Dome CS-S4 + 18Ah LFP',
        'Double Pro AI TW-S2 + Helios 40W Duo': 'ಡಬಲ್ ಪ್ರೊ AI TW-S2 + ಹೆಲಿಯೋಸ್ 40W ಡ್ಯುವೋ / Double Pro AI TW-S2 + Helios 40W Duo',
        '6 Hours': '6 ಗಂಟೆಗಳು / 6 Hours',
        '8 Hours': '8 ಗಂಟೆಗಳು / 8 Hours',
        '12 Hours': '12 ಗಂಟೆಗಳು / 12 Hours',
        'Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.': 'ಅದ್ಭುತವಾಗಿದೆ! ಕ್ಯಾಮೆರಾ ಕೇವಲ ಸೌರಶಕ್ತಿಯಿಂದಲೇ ದೋಷರಹಿತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಈ ಸ್ಮಾರ್ಟ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ. / Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.',
        'The active object tracking has already stopped three trespassers. Dashboard notifications are instant.': 'ಸಕ್ರಿಯ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಈಗಾಗಲೇ ಮೂವರು ಅತಿಕ್ರಮಣಕಾರರನ್ನು ತಡೆದಿದೆ. ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅಧಿಸೂಚನೆಗಳು ತ್ವರಿತವಾಗಿವೆ. / The active object tracking has already stopped three trespassers. Dashboard notifications are instant.',
        'Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.': 'ಉಪ್ಪು ಗಾಳಿಯ ವಿರುದ್ಧ ತುಕ್ಕು-ನಿರೋಧಕ ವಸ್ತುಗಳು ಬಲವಾಗಿ ನಿಲ್ಲುತ್ತವೆ. ಲೈವ್ ಸ್ಟ್ರೀಮ್ 4G ಸೆಲ್ಯುಲಾರ್ ಮೂಲಕ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. / Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.'
    };
    return {
        ...proj,
        title: translations[proj.title] || proj.title,
        location: translations[proj.location] || proj.location,
        type: translations[proj.type] || proj.type,
        camera: translations[proj.camera] || proj.camera,
        duration: translations[proj.duration] || proj.duration,
        feedback: translations[proj.feedback] || proj.feedback
    };
};
function Projects() {
    const projects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getProjects();
    const [selectedProjRaw, setSelectedProjRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(projects[0]);
    const [comparisonSliderVal, setComparisonSliderVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50); // percentage for before/after split
    const selectedProj = getBilingualProject(selectedProjRaw);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 relative overflow-hidden bg-obsidian-bg3 grid-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಸಕ್ರಿಯ ನಿಯೋಜನೆಗಳು"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    " / Active Deployments"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಯೋಜನೆಗಳು"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    " / Projects Showcase"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-light mt-3 max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ನಮ್ಮ ಕೈಗಾರಿಕಾ ಭದ್ರತಾ ಕೇಂದ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಕಸ್ಟಮ್ ಪೇಲೋಡ್‌ಗಳು, ಮೊದಲು/ನಂತರದ ಚಿತ್ರಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತತೆಯ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ವೀಕ್ಷಿಸಲು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳಲ್ಲಿ ನಿಲ್ದಾಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    " / Explore our industrial security hubs. Select a station on the live network coordinates to view custom payloads, before/after images, and autonomy feedback."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 glass-panel rounded-2xl p-6 border border-white/5 bg-zinc-950/40 relative overflow-hidden flex flex-col justify-between min-h-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-zinc-400 font-space uppercase tracking-widest flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full bg-electric-cyan animate-ping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 87,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಲೈವ್ ಏರಿಯಾ ನೆಟ್‌ವರ್ಕ್"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 88,
                                                                columnNumber: 19
                                                            }, this),
                                                            " / Live Area Network"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-zinc-500 font-space uppercase",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕೊಲ್ಲಿ ಪ್ರದೇಶದ ವಲಯ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 91,
                                                                columnNumber: 19
                                                            }, this),
                                                            " / Bay Area Quadrant"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-[280px] bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "absolute inset-0 w-full h-full opacity-35",
                                                        viewBox: "0 0 100 100",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "20",
                                                                y1: "0",
                                                                x2: "20",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 99,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "40",
                                                                y1: "0",
                                                                x2: "40",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "60",
                                                                y1: "0",
                                                                x2: "60",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 101,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "80",
                                                                y1: "0",
                                                                x2: "80",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 102,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "20",
                                                                x2: "100",
                                                                y2: "20",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 103,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "40",
                                                                x2: "100",
                                                                y2: "40",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 104,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "60",
                                                                x2: "100",
                                                                y2: "60",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "80",
                                                                x2: "100",
                                                                y2: "80",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "15",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "30",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "45",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 111,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "50",
                                                                y1: "50",
                                                                x2: "90",
                                                                y2: "90",
                                                                stroke: "#00F5FF",
                                                                strokeWidth: "0.3",
                                                                opacity: "0.6",
                                                                className: "animate-spin-slow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 114,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this),
                                                    projects.map((proj, idx)=>{
                                                        const mappedProj = getBilingualProject(proj);
                                                        // Fixed coordinate offsets for visualization map
                                                        const positions = [
                                                            {
                                                                top: '35%',
                                                                left: '30%'
                                                            },
                                                            {
                                                                top: '48%',
                                                                left: '65%'
                                                            },
                                                            {
                                                                top: '70%',
                                                                left: '42%'
                                                            }
                                                        ];
                                                        const pos = positions[idx] || {
                                                            top: '50%',
                                                            left: '50%'
                                                        };
                                                        const isSelected = selectedProjRaw.id === proj.id;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedProjRaw(proj),
                                                            className: "absolute p-2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer",
                                                            style: {
                                                                top: pos.top,
                                                                left: pos.left
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `absolute inset-0 rounded-full scale-150 animate-radar ${isSelected ? 'bg-electric-cyan/20' : 'bg-zinc-500/10'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: `w-6 h-6 transition-all duration-300 ${isSelected ? 'text-electric-cyan scale-125 glow-cyan' : 'text-zinc-600 hover:text-zinc-400'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-zinc-950/90 text-[10px] text-white px-2 py-0.5 rounded border border-white/10 font-space whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                                                    children: renderBilingual(mappedProj.title)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, proj.id, true, {
                                                            fileName: "[project]/src/components/Projects.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 border-t border-zinc-900 pt-4 flex justify-between text-xs text-zinc-500 font-space",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ನೆಟ್‌ವರ್ಕ್ ನೋಡ್ ಕ್ಲಿಕ್‌ಗಳು ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಟೆಲಿಮೆಟ್ರಿಯನ್ನು ನವೀಕರಿಸುತ್ತವೆ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this),
                                                    " / Interactive network node clicks updates portfolio telemetry"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಆನ್‌ಲೈನ್"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this),
                                                    " / Online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            selectedProj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/5 bg-zinc-950/20 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-electric-cyan font-space uppercase tracking-widest font-semibold",
                                                                children: renderBilingual(selectedProj.type)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl font-space font-medium text-white mt-1",
                                                                children: renderBilingual(selectedProj.title)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-zinc-500 flex items-center gap-1 mt-1.5 font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    renderBilingual(selectedProj.location)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-white/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-3.5 h-3.5 fill-amber-400 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-white",
                                                                children: "5.0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-[220px] rounded-xl overflow-hidden border border-white/5 bg-zinc-950 mb-6 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: selectedProj.afterImg,
                                                        alt: "Post-Installation Solar Camera System",
                                                        className: "absolute inset-0 w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 overflow-hidden",
                                                        style: {
                                                            width: `${comparisonSliderVal}%`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: selectedProj.beforeImg,
                                                                alt: "Pre-Installation Site Location",
                                                                className: "absolute top-0 left-0 w-full h-full object-cover",
                                                                style: {
                                                                    width: '100%',
                                                                    minWidth: '400px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-4 left-4 bg-zinc-950/80 px-2 py-0.5 border border-white/10 rounded text-[9px] font-space text-zinc-400 uppercase tracking-widest z-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಮೊದಲು"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Before"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 right-4 bg-electric-cyan/95 text-black px-2 py-0.5 rounded text-[9px] font-space font-semibold uppercase tracking-widest z-20 shadow-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ನಂತರ (ಸೌರ ವ್ಯವಸ್ಥೆ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            " / After (Solar System)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 bottom-0 w-0.5 bg-electric-cyan z-30 pointer-events-none",
                                                        style: {
                                                            left: `${comparisonSliderVal}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-electric-cyan text-black font-semibold flex items-center justify-center text-xs shadow-lg border border-zinc-900",
                                                            children: "↔"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Projects.jsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "100",
                                                        value: comparisonSliderVal,
                                                        onChange: (e)=>setComparisonSliderVal(e.target.value),
                                                        className: "absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-zinc-950/40 border border-white/5 rounded-xl p-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-zinc-500 uppercase tracking-wider block font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಪೇಲೋಡ್ ಕಾನ್ಫಿಗರೇಶನ್"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Payload Config"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-200 mt-1 block leading-normal",
                                                                children: renderBilingual(selectedProj.camera)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-zinc-950/40 border border-white/5 rounded-xl p-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-zinc-500 uppercase tracking-wider block font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಸ್ಥಾಪನಾ ಸಮಯ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Install Time"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-200 mt-1 block flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-3.5 h-3.5 text-electric-cyan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    renderBilingual(selectedProj.duration)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-zinc-900/60 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                        className: "w-3.5 h-3.5 text-electric-emerald"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 79
                                                    }, this),
                                                    " / Client Review (",
                                                    selectedProj.client,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-400 text-xs italic leading-relaxed",
                                                children: [
                                                    '"',
                                                    renderBilingual(selectedProj.feedback),
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Projects.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/utils/pdfGenerator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-side simulation of PDF Quotation Generation.
// Renders a high-fidelity, premium specification request layout matching the CONFIGURATION RENDERER screenshot.
__turbopack_context__.s([
    "generateQuotationPDF",
    ()=>generateQuotationPDF
]);
const generateQuotationPDF = (order)=>{
    const printWindow = window.open('', '_blank');
    const cameraImageSrc = order.summary.cameraImage ? order.summary.cameraImage.startsWith('http') ? order.summary.cameraImage : window.location.origin + order.summary.cameraImage : '';
    // Parse details safely
    const cameraTitle = order.summary.camera ? order.summary.camera.includes(' (₹') ? order.summary.camera.split(' (₹')[0] : order.summary.camera : '';
    const batteryTitle = order.summary.battery ? order.summary.battery.split(' (₹')[0] : '';
    const panelTitle = order.summary.panel ? order.summary.panel.split(' (₹')[0] : '';
    const storageTitle = order.summary.storage ? order.summary.storage.split(' (₹')[0] : '';
    const addOnsHTML = order.summary.accessories && order.summary.accessories.length > 0 ? order.summary.accessories.map((acc)=>`
        <div class="spec-row">
          <span class="bullet-label">• ${acc}</span>
          <span class="spec-val">Selected</span>
        </div>
      `).join('') : '<div class="spec-row text-muted"><span class="bullet-label">• None</span><span class="spec-val">-</span></div>';
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Surya Drishti CCTV Specification - ${order.id}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #09090b;
          color: #fafafa;
          margin: 0;
          padding: 30px;
          display: flex;
          justify-content: center;
        }
        
        .main-container {
          max-width: 600px;
          width: 100%;
          background: #09090b;
          border: 1px solid #1c1c1f;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        }

        .header-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #71717a;
          border-bottom: 1px solid #1c1c1f;
          padding-bottom: 12px;
        }

        .card-renderer {
          background: #111113;
          border: 1px solid #1c1c1f;
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 24px;
        }

        .renderer-header {
          display: flex;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fafafa;
          margin-bottom: 16px;
        }

        .renderer-subtitle {
          color: #52525b;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 300px;
          background: #050505;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          padding: 20px;
        }

        .loop-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #a1a1aa;
        }

        .loop-dot {
          width: 7px;
          height: 7px;
          background: #00F5FF;
          border-radius: 50%;
        }

        .type-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          font-size: 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #a1a1aa;
        }

        .spec-container {
          margin-top: 24px;
        }

        .spec-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #52525b;
          border-bottom: 1px solid #1c1c1f;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 13px;
        }

        .spec-label {
          color: #71717a;
        }

        .spec-val {
          color: #fafafa;
          font-weight: 500;
        }

        .addons-section {
          margin-top: 16px;
        }

        .addons-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #52525b;
          margin-bottom: 8px;
        }

        .bullet-label {
          color: #a1a1aa;
        }

        .custom-pricing-note {
          background: rgba(0, 245, 255, 0.03);
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          font-size: 11px;
          line-height: 1.6;
          color: #a1a1aa;
          margin-top: 24px;
        }

        .custom-pricing-header {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          color: #00F5FF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        @media print {
          body {
            background: #fff;
            color: #000;
            padding: 0;
          }
          .main-container {
            border: none;
            box-shadow: none;
            background: #fff;
            color: #000;
            max-width: 100%;
          }
          .card-renderer {
            background: #f4f4f5;
            border-color: #e4e4e7;
          }
          .renderer-header {
            color: #000;
          }
          .renderer-subtitle {
            color: #71717a;
          }
          .image-container {
            background: #fff;
            border-color: #e4e4e7;
          }
          .loop-badge, .type-badge, .spec-label {
            color: #4b5563;
          }
          .spec-val, .bullet-label {
            color: #000;
          }
          .custom-pricing-note {
            background: #f0fdfa;
            border-color: #5eead4;
            color: #374151;
          }
          .custom-pricing-header {
            color: #0d9488;
          }
        }
      </style>
    </head>
    <body>
      <div class="main-container">
        <div class="header-meta">
          <span>Enquiry ID: ${order.id}</span>
          <span>Date: ${order.date}</span>
        </div>

        <div class="card-renderer">
          <div class="renderer-header">
            <span>Configuration Renderer</span>
            <span class="renderer-subtitle">Instant View</span>
          </div>

          <div class="image-container">
            ${cameraImageSrc ? `<img src="${cameraImageSrc}" alt="CCTV Node Model" />` : ''}
            <div class="loop-badge">
              <div class="loop-dot"></div>
              <span>${order.configType === 'solar' ? 'Solar Loop' : 'Grid Loop'}</span>
            </div>
            <div class="type-badge">
              <span>${order.configType === 'solar' ? 'Solar CCTV' : 'Electric CCTV'}</span>
            </div>
          </div>
        </div>

        <div class="spec-container">
          <div class="spec-title">Configuration Specifications</div>
          
          <div class="spec-row">
            <span class="spec-label">Camera Node:</span>
            <span class="spec-val">${cameraTitle || 'Selected'}</span>
          </div>
          
          ${batteryTitle ? `
          <div class="spec-row">
            <span class="spec-label">LFP Battery Storage:</span>
            <span class="spec-val">${batteryTitle}</span>
          </div>
          ` : ''}

          ${panelTitle ? `
          <div class="spec-row">
            <span class="spec-label">Albedo Solar input:</span>
            <span class="spec-val">${panelTitle}</span>
          </div>
          ` : ''}

          ${storageTitle ? `
          <div class="spec-row">
            <span class="spec-label">TF Memory Storage:</span>
            <span class="spec-val">${storageTitle}</span>
          </div>
          ` : ''}

          ${order.summary.dvr ? `
          <div class="spec-row">
            <span class="spec-label">${order.summary.dvr.includes('DVR') ? 'DVR Rec System:' : 'NVR Rec System:'}</span>
            <span class="spec-val">${order.summary.dvr}</span>
          </div>
          ` : ''}

          <div class="addons-section">
            <div class="addons-title">Add-ons</div>
            ${addOnsHTML}
          </div>
        </div>

        <div class="custom-pricing-note">
          <div class="custom-pricing-header">Custom Quote Review Pending</div>
          Our admin team will review these technical specifications and reach out via WhatsApp or call to <strong>${order.customer.phone}</strong> with a custom quote.
        </div>
      </div>
      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
};
}),
"[project]/src/components/Configurator.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/Configurator.jsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/utils/supabaseClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://rklgqgplqcrnlvtajlcm.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbGdxZ3BscWNybmx2dGFqbGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NTM0MTMsImV4cCI6MjEwMDEyOTQxM30.zVt1G-Ioy872aga9PsQpbAi_qmDgwtRPKOeo7Xl8io0") || '';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/src/services/apiService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiService",
    ()=>apiService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabaseClient.js [app-ssr] (ecmascript)");
;
;
const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined';
// Safe query runner that automatically falls back to client local storage if Supabase is unconfigured or tables are missing.
const safeQuery = async (queryFn, fallbackFn)=>{
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
const apiService = {
    // PRODUCTS (PIM)
    getProducts: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').order('name'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getProducts());
    },
    saveProduct: async (product)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('products').upsert(product).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save product failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveProduct(product);
        }
    },
    deleteProduct: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('products').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete product failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].deleteProduct(id);
        }
    },
    duplicateProduct: async (id)=>{
        try {
            const products = await apiService.getProducts();
            const target = products.find((p)=>p.id === id);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].duplicateProduct(id);
        }
    },
    // CATEGORIES
    getCategories: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('categories').select('*').order('displayOrder'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getCategories());
    },
    saveCategory: async (category)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('categories').upsert(category).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save category failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveCategory(category);
        }
    },
    deleteCategory: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('categories').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete category failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].deleteCategory(id);
        }
    },
    // COMPATIBILITY RULES
    getRules: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('rules').select('*'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getRules());
    },
    saveRule: async (rule)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('rules').upsert(rule).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save rule failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveRule(rule);
        }
    },
    deleteRule: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('rules').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete rule failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].deleteRule(id);
        }
    },
    // AUDIT LOGS
    getLogs: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('logs').select('*').order('timestamp', {
                ascending: false
            }).limit(50), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getLogs());
    },
    writeLog: async (type, message)=>{
        const payload = {
            id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            timestamp: new Date().toISOString(),
            type,
            message
        };
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('logs').insert([
                payload
            ]).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase log failed, writing to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].writeLog(type, message);
        }
    },
    // WEBSITE SETTINGS
    getWebSettings: async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('settings').select('*').eq('id', 'global_settings');
            if (error || !data || data.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getWebSettings();
            }
            return data[0];
        } catch (err) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getWebSettings();
        }
    },
    saveWebSettings: async (settings)=>{
        try {
            const payload = {
                ...settings,
                id: 'global_settings'
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('settings').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase settings update failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveWebSettings(settings);
        }
    },
    // ORDERS & QUOTATIONS
    getOrders: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('orders').select('*').order('date', {
                ascending: false
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getOrders());
    },
    saveOrder: async (order)=>{
        try {
            const orderId = order.id || 'SD-' + Math.floor(1000 + Math.random() * 9000);
            const payload = {
                ...order,
                id: orderId,
                date: order.date || new Date().toISOString().split('T')[0]
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('orders').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase order creation failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveOrder(order);
        }
    },
    deleteOrder: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('orders').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete order failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].deleteOrder(id);
        }
    },
    // SERVICE REQUESTS
    getServices: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('services').select('*').order('dateCreated', {
                ascending: false
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getServices());
    },
    saveServiceRequest: async (request)=>{
        try {
            const reqId = request.id || 'SR-' + Math.floor(100 + Math.random() * 900);
            const payload = {
                ...request,
                id: reqId,
                dateCreated: request.dateCreated || new Date().toISOString().split('T')[0],
                status: request.status || 'Submitted',
                assignedTech: request.assignedTech || 'Unassigned'
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('services').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase service request failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveServiceRequest(request);
        }
    },
    // GALLERY
    getGallery: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('gallery').select('*'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getGallery());
    },
    saveGalleryItem: async (item)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('gallery').upsert(item).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase gallery item upload failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].saveGalleryItem(item);
        }
    },
    deleteGalleryItem: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('gallery').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete gallery item failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].deleteGalleryItem(id);
        }
    },
    // ANALYTICS & REPORTS
    getAnalytics: async ()=>{
        try {
            const products = await apiService.getProducts();
            const orders = await apiService.getOrders();
            const categories = await apiService.getCategories();
            const logs = await apiService.getLogs();
            const totalProducts = products.length;
            const activeProducts = products.filter((p)=>p.status === 'Active').length;
            const draftProducts = products.filter((p)=>p.status === 'Draft').length;
            const featuredProducts = products.filter((p)=>p.sku && p.sku.includes('PTZ')).length;
            const lowStockAlerts = products.filter((p)=>(p.stockQuantity || 0) <= (p.lowStockThreshold || 5));
            const outOfStockCount = products.filter((p)=>(p.stockQuantity || 0) === 0).length;
            const approvedOrders = orders.filter((o)=>o.status === 'Accepted');
            const totalSales = approvedOrders.length;
            const revenue = approvedOrders.reduce((sum, order)=>{
                const cam = products.find((p)=>p.id === order.camera?.id) || {
                    price: 500
                };
                const bat = products.find((p)=>p.id === order.battery?.id) || {
                    price: 150
                };
                const pan = products.find((p)=>p.id === order.panel?.id) || {
                    price: 100
                };
                const card = products.find((p)=>p.id === order.memoryCard?.id) || {
                    price: 20
                };
                const accSum = (order.accessories || []).reduce((s, a)=>s + (a.price || 0), 0);
                return sum + (Number(cam.price || 0) + Number(bat.price || 0) + Number(pan.price || 0) + Number(card.price || 0) + accSum);
            }, 0);
            return {
                totalProducts,
                activeProducts,
                draftProducts,
                featuredProducts,
                categoryCount: categories.length,
                ordersCount: orders.length,
                customersCount: [
                    ...new Set(orders.map((o)=>o.customer?.phone).filter(Boolean))
                ].length,
                quotationsCount: orders.length,
                inventorySummary: {
                    totalStock: products.reduce((sum, p)=>sum + (p.stockQuantity || 0), 0),
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getAnalytics();
        }
    }
};
}),
"[project]/src/components/AdminDashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabaseClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.mjs [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-check.mjs [app-ssr] (ecmascript) <export default as FolderCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.mjs [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.mjs [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as Home>");
;
;
;
;
;
;
function AdminDashboard() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const uploadImageToSupabase = async (file, folder = 'images')=>{
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`;
            const filePath = `${folder}/${fileName}`;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('media').upload(filePath, file, {
                contentType: file.type,
                upsert: true
            });
            if (error) throw error;
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('media').getPublicUrl(filePath);
            return publicUrl;
        } catch (err) {
            console.error('Supabase upload error:', err);
            store.addToast(`File upload failed: ${err.message}`, 'error');
            return null;
        }
    };
    // Navigation tabs
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview'); // 'overview' | 'pim' | 'builder' | 'orders' | 'customers' | 'settings'
    // Data states
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [webSettings, setWebSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Search & Filter
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // Form states
    const [editingProduct, setEditingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewingProduct, setPreviewingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingCategory, setEditingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showProductForm, setShowProductForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoryForm, setShowCategoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRuleForm, setShowRuleForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // New product payload template
    const defaultProduct = {
        name: '',
        sku: '',
        category: 'Solar Cameras',
        brand: 'Surya Drishti',
        modelNumber: '',
        shortDescription: '',
        description: '',
        keyFeatures: '',
        technicalSpecs: '',
        highlights: '',
        applications: '',
        warrantyDetails: '5 Years Warranty',
        installationInfo: '',
        price: 499,
        discountPrice: 459,
        offerPrice: 439,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/cam1.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 20,
        lowStockThreshold: 5,
        lensCount: 1,
        type: 'solar-camera'
    };
    const [productForm, setProductForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...defaultProduct
    });
    // New category payload template
    const defaultCategory = {
        name: '',
        nameKn: '',
        image: '/images/cam1.jpg',
        displayOrder: 1,
        enabled: true
    };
    const [categoryForm, setCategoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...defaultCategory
    });
    // New compatibility rule payload template
    const defaultRule = {
        type: 'camera-battery',
        cameraLens: 1,
        batteryId: 'bat-12',
        panelId: 'panel-20',
        description: ''
    };
    const [ruleForm, setRuleForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...defaultRule
    });
    // Load all dashboard records
    const loadDashboardData = async ()=>{
        try {
            setLoading(true);
            const [prodRes, catRes, ruleRes, orderRes, serviceRes, settingsRes, analyticsRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getProducts(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getCategories(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getRules(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getOrders(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getServices(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getWebSettings(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getAnalytics()
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
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadDashboardData();
    }, [
        activeTab
    ]);
    // Product mutations
    const handleSaveProductSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveProduct(productForm);
            store.addToast(`Saved product: ${productForm.name}`, 'success');
            setShowProductForm(false);
            setProductForm({
                ...defaultProduct
            });
            setEditingProduct(null);
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to save product details', 'error');
        }
    };
    const handleEditProductClick = (prod)=>{
        setEditingProduct(prod);
        setProductForm({
            ...prod
        });
        setShowProductForm(true);
    };
    const handleDuplicateProduct = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].duplicateProduct(id);
            store.addToast('Product duplicated successfully', 'success');
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to duplicate product', 'error');
        }
    };
    const handleDeleteProductClick = async (id)=>{
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteProduct(id);
                store.addToast('Product deleted from inventory', 'info');
                loadDashboardData();
            } catch (err) {
                store.addToast('Failed to delete product', 'error');
            }
        }
    };
    const handleArchiveProduct = async (prod)=>{
        try {
            const updated = {
                ...prod,
                status: prod.status === 'Archived' ? 'Active' : 'Archived'
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveProduct(updated);
            store.addToast(`Product status toggled to: ${updated.status}`, 'info');
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to archive product', 'error');
        }
    };
    const handlePublishToggle = async (prod)=>{
        try {
            const updated = {
                ...prod,
                status: prod.status === 'Active' ? 'Draft' : 'Active'
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveProduct(updated);
            store.addToast(`Published toggle: ${updated.status}`, 'success');
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to toggle publish status', 'error');
        }
    };
    // Category mutations
    const handleSaveCategorySubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveCategory(categoryForm);
            store.addToast(`Saved category: ${categoryForm.name}`, 'success');
            setShowCategoryForm(false);
            setCategoryForm({
                ...defaultCategory
            });
            setEditingCategory(null);
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to save category', 'error');
        }
    };
    const handleEditCategoryClick = (cat)=>{
        setEditingCategory(cat);
        setCategoryForm({
            ...cat
        });
        setShowCategoryForm(true);
    };
    const handleDeleteCategoryClick = async (id)=>{
        if (window.confirm('Are you sure you want to delete this category?')) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteCategory(id);
                store.addToast('Category deleted successfully', 'info');
                loadDashboardData();
            } catch (err) {
                store.addToast('Failed to delete category', 'error');
            }
        }
    };
    // Compatibility Rule mutations
    const handleSaveRuleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const payload = {
                ...ruleForm,
                description: ruleForm.description || (ruleForm.type === 'camera-battery' ? `${ruleForm.cameraLens} Lens Camera requires battery ID: ${ruleForm.batteryId}` : `Panel ID: ${ruleForm.panelId} restricts battery selection to ID: ${ruleForm.batteryId}`)
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveRule(payload);
            store.addToast('New compatibility rule saved', 'success');
            setShowRuleForm(false);
            setRuleForm({
                ...defaultRule
            });
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to create compatibility rule', 'error');
        }
    };
    const handleDeleteRuleClick = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteRule(id);
            store.addToast('Compatibility rule deleted', 'info');
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to delete rule', 'error');
        }
    };
    // Order status mutations
    const handleUpdateOrderStatus = async (orderId, newStatus)=>{
        try {
            const target = orders.find((o)=>o.id === orderId);
            if (target) {
                const updated = {
                    ...target,
                    status: newStatus
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveOrder(updated);
                store.addToast(`Updated order status to ${newStatus}`, 'success');
                loadDashboardData();
            }
        } catch (err) {
            store.addToast('Failed to update status', 'error');
        }
    };
    const handleSaveWebSettingsSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].saveWebSettings(webSettings);
            store.addToast('System website settings updated successfully', 'success');
            loadDashboardData();
        } catch (err) {
            store.addToast('Failed to update settings', 'error');
        }
    };
    // Filter products by search terms
    const filteredProducts = products.filter((p)=>{
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-full md:w-64 shrink-0 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>store.setActiveTab('home'),
                        className: "w-full mb-4 p-3.5 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all cursor-pointer flex items-center justify-center gap-2 font-space uppercase tracking-wider",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "w-4 h-4 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-kannada",
                                children: "ಮುಖ್ಯ ಪುಟ / Home Page"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 293,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-2xl border border-white/5 bg-zinc-950/40 mb-4 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5 animate-spin-slow"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-white tracking-wide",
                                        children: "Administrator Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-500 font-space",
                                        children: "Centralized Control Desk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            id: 'overview',
                            label: 'Dashboard Overview',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                        },
                        {
                            id: 'pim',
                            label: 'Product Catalog (PIM)',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderCheck$3e$__["FolderCheck"]
                        },
                        {
                            id: 'builder',
                            label: 'Rules & Options',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
                        },
                        {
                            id: 'orders',
                            label: 'Orders & Quotes',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
                        },
                        {
                            id: 'customers',
                            label: 'Customers Manager',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                        },
                        {
                            id: 'settings',
                            label: 'Settings & Content',
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
                        }
                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `w-full p-3.5 rounded-xl border flex items-center gap-3 text-xs font-semibold tracking-wide font-space transition-all cursor-pointer ${activeTab === tab.id ? 'bg-electric-cyan/10 border-electric-cyan text-electric-cyan' : 'bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this),
                                " ",
                                tab.label
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (window.confirm('Reset all databases to default seed records?')) {
                                db.resetSeed();
                                loadDashboardData();
                                store.addToast('Database configurations seeded back to default!', 'success');
                            }
                        },
                        className: "w-full mt-6 p-3.5 rounded-xl border border-red-500/20 bg-red-950/10 text-red-400 text-xs font-semibold hover:bg-red-950/20 transition-all cursor-pointer flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            " Reset DB Seed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow min-w-0",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[400px] rounded-3xl glass-panel border border-white/5 flex items-center justify-center text-zinc-400 text-sm gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-5 h-5 animate-spin text-electric-cyan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        " Retrieving Admin Records..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        activeTab === 'overview' && analytics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                    children: [
                                        {
                                            label: 'Total Products',
                                            val: analytics.totalProducts,
                                            desc: `${analytics.activeProducts} Active / ${analytics.draftProducts} Draft`
                                        },
                                        {
                                            label: 'Orders & Quotes',
                                            val: analytics.ordersCount,
                                            desc: 'Pending user quotes'
                                        },
                                        {
                                            label: 'Category Count',
                                            val: analytics.categoryCount,
                                            desc: 'Active groupings'
                                        },
                                        {
                                            label: 'Unique Customers',
                                            val: analytics.customersCount,
                                            desc: 'Verified phone profiles'
                                        }
                                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 rounded-2xl border border-white/5 bg-zinc-950/20 flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-wider font-space",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-semibold text-white my-2",
                                                    children: stat.val
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 365,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-zinc-400",
                                                    children: stat.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 363,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 356,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-white mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 375,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Revenue Summary"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between py-2 border-b border-white/5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-400",
                                                                    children: "Total Approved Sales"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 379,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-semibold text-white font-space",
                                                                    children: [
                                                                        analytics.revenueSummary.totalSales,
                                                                        " Orders"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between py-2 border-b border-white/5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-400",
                                                                    children: "Mock Generated Revenue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold text-electric-emerald font-space",
                                                                    children: [
                                                                        "$",
                                                                        analytics.revenueSummary.totalRevenue
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-400",
                                                                    children: "Average Order Value"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-semibold text-white font-space",
                                                                    children: [
                                                                        "$",
                                                                        analytics.revenueSummary.avgTicketValue
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 386,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 377,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-white mb-4 flex items-center gap-2 text-amber-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 395,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Low Stock Alarms"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, this),
                                                analytics.lowStockAlerts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 max-h-48 overflow-y-auto pr-2",
                                                    children: analytics.lowStockAlerts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center p-2 rounded-xl bg-zinc-950/60 border border-amber-500/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-zinc-300 truncate max-w-[200px]",
                                                                    children: p.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold font-space",
                                                                    children: [
                                                                        "Qty: ",
                                                                        p.stockQuantity,
                                                                        " (Low)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, p.id, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 400,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-500 text-center py-6",
                                                    children: "All products have healthy stock levels."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 409,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 372,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-white mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "w-4 h-4 text-electric-sky"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 417,
                                                    columnNumber: 21
                                                }, this),
                                                " System Audit Trail Logs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 max-h-64 overflow-y-auto pr-2",
                                            children: analytics.recentActivities.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-950/40 border border-white/5 hover:bg-zinc-950/60 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-widest ${log.type === 'Product' ? 'bg-electric-cyan/10 text-electric-cyan' : log.type === 'Order' ? 'bg-electric-emerald/10 text-electric-emerald' : log.type === 'Login' ? 'bg-electric-sky/10 text-electric-sky' : 'bg-zinc-800 text-zinc-400'}`,
                                                                    children: log.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 font-medium",
                                                                    children: log.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-zinc-500 font-space",
                                                            children: new Date(log.timestamp).toLocaleTimeString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 432,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, log.id, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 421,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 415,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 353,
                            columnNumber: 15
                        }, this),
                        activeTab === 'pim' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full sm:max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search SKU, name, group...",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-electric-cyan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: categoryFilter,
                                                    onChange: (e)=>setCategoryFilter(e.target.value),
                                                    className: "bg-zinc-950/80 border border-zinc-800 text-xs text-white rounded-xl px-4 py-2.5 focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 464,
                                                            columnNumber: 23
                                                        }, this),
                                                        categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.name,
                                                                children: c.name
                                                            }, c.id, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 465,
                                                                columnNumber: 44
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingProduct(null);
                                                        setProductForm({
                                                            ...defaultProduct
                                                        });
                                                        setShowProductForm(true);
                                                    },
                                                    className: "px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase font-space tracking-wide flex items-center gap-1.5 ml-auto cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 476,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Add Product"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto rounded-3xl border border-white/5 bg-zinc-950/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-space bg-zinc-950/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "SKU / Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 486,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Product Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 487,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 488,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Price / Stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 489,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 490,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-4 text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 491,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 485,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 484,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-white/5 text-xs text-zinc-300",
                                                children: filteredProducts.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-zinc-950/30 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-space font-medium text-white",
                                                                        children: prod.sku || 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-zinc-500",
                                                                        children: prod.modelNumber || 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 497,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 font-semibold text-white",
                                                                children: prod.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 501,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: prod.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 502,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-white font-space",
                                                                        children: [
                                                                            "$",
                                                                            prod.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-[10px] font-space ${prod.stockQuantity <= prod.lowStockThreshold ? 'text-amber-400' : 'text-zinc-500'}`,
                                                                        children: [
                                                                            "Stock: ",
                                                                            prod.stockQuantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 503,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase ${prod.status === 'Active' ? 'bg-electric-emerald/10 text-electric-emerald' : prod.status === 'Draft' ? 'bg-zinc-800 text-zinc-400' : 'bg-red-950/30 text-red-400'}`,
                                                                    children: prod.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 509,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-4 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-end gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setPreviewingProduct(prod),
                                                                            title: "Preview Card",
                                                                            className: "p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 524,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 519,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handlePublishToggle(prod),
                                                                            title: prod.status === 'Active' ? 'Set as Draft' : 'Publish Product',
                                                                            className: "p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors",
                                                                            children: prod.status === 'Active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 531,
                                                                                columnNumber: 61
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 531,
                                                                                columnNumber: 98
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleEditProductClick(prod),
                                                                            title: "Edit Specifications",
                                                                            className: "p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 538,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 533,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDuplicateProduct(prod.id),
                                                                            title: "Duplicate PIM",
                                                                            className: "p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 545,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleArchiveProduct(prod),
                                                                            title: prod.status === 'Archived' ? 'Activate Product' : 'Archive Product',
                                                                            className: "p-2 rounded bg-zinc-900/80 text-zinc-400 hover:text-white transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 552,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 547,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteProductClick(prod.id),
                                                                            title: "Delete",
                                                                            className: "p-2 rounded bg-red-950/20 text-red-400 hover:text-red-300 transition-colors",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                                lineNumber: 559,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 554,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 517,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, prod.id, true, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 496,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 494,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 483,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 482,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderCheck$3e$__["FolderCheck"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 573,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Category Display Configuration"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 572,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingCategory(null);
                                                        setCategoryForm({
                                                            ...defaultCategory
                                                        });
                                                        setShowCategoryForm(true);
                                                    },
                                                    className: "px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-[10px] font-semibold uppercase tracking-wider font-space text-white flex items-center gap-1 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 583,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Add Category"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 571,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: cat.image,
                                                                    className: "w-10 h-10 rounded-lg object-cover border border-white/10",
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-white text-xs",
                                                                            children: cat.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-zinc-500 font-space font-kannada",
                                                                            children: [
                                                                                "KN: ",
                                                                                cat.nameKn,
                                                                                " • Order: ",
                                                                                cat.displayOrder
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 590,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleEditCategoryClick(cat),
                                                                    className: "p-2 rounded bg-zinc-900 text-zinc-400 hover:text-white",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 603,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteCategoryClick(cat.id),
                                                                    className: "p-2 rounded bg-red-950/10 text-red-400 hover:bg-red-950/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 609,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 598,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, cat.id, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 589,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 587,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 570,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 443,
                            columnNumber: 15
                        }, this),
                        activeTab === 'builder' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-white flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                className: "w-4 h-4 text-electric-cyan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Configuration Compatibility Rules"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 628,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-zinc-500 mt-1",
                                                        children: "Configure constraints that restrict camera models to compatible batteries or battery systems to matching panel inputs."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 627,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setRuleForm({
                                                        ...defaultRule
                                                    });
                                                    setShowRuleForm(true);
                                                },
                                                className: "px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider font-space flex items-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 641,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Add Rule"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 634,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 626,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: rules.map((rule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-2 py-0.5 rounded bg-electric-cyan/10 text-electric-cyan font-bold tracking-widest text-[9px] uppercase font-space",
                                                                children: rule.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 649,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-300 font-medium",
                                                                children: rule.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 652,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 648,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteRuleClick(rule.id),
                                                        className: "p-2 rounded bg-red-950/20 text-red-400 hover:text-red-300 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 659,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 655,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, rule.id, true, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 647,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 645,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 625,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 622,
                            columnNumber: 15
                        }, this),
                        activeTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-3xl border border-white/5 bg-zinc-950/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-space bg-zinc-950/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4",
                                                        children: "Order ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 678,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4",
                                                        children: "Customer Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 679,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4",
                                                        children: "Contact Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 680,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4",
                                                        children: "Camera / Battery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 681,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 682,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-right",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 683,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 677,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 676,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-white/5 text-xs text-zinc-300",
                                            children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-zinc-950/30 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 font-semibold text-white font-space",
                                                            children: order.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 689,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 font-semibold text-white",
                                                            children: order.customerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 690,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 font-space",
                                                            children: order.customerPhone
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 691,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: order.camera?.name || 'WiFi Camera Configuration'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 693,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-zinc-500",
                                                                    children: [
                                                                        "Bat: ",
                                                                        order.battery?.name || 'N/A'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 694,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 692,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${order.status === 'Accepted' ? 'bg-electric-emerald/10 text-electric-emerald' : order.status === 'Rejected' ? 'bg-red-950/30 text-red-400' : 'bg-amber-950/30 text-amber-400'}`,
                                                                children: order.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 697,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 696,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-end gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateOrderStatus(order.id, 'Accepted'),
                                                                        className: "px-2.5 py-1 rounded bg-electric-emerald/10 text-electric-emerald hover:bg-electric-emerald/20 text-[10px] font-semibold font-space uppercase",
                                                                        children: "Accept"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateOrderStatus(order.id, 'Rejected'),
                                                                        className: "px-2.5 py-1 rounded bg-red-950/20 text-red-400 hover:bg-red-950/30 text-[10px] font-semibold font-space uppercase",
                                                                        children: "Reject"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                        lineNumber: 712,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 705,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 704,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, order.id, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 688,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 686,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 675,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 674,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 671,
                            columnNumber: 15
                        }, this),
                        activeTab === 'customers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 max-w-sm flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4 text-zinc-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 735,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search customer names, phone numbers...",
                                            className: "w-full bg-transparent text-xs text-white focus:outline-none border-none placeholder-zinc-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 736,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 734,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 rounded-2xl bg-zinc-950/20 border border-white/5 flex flex-col justify-between space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-white text-sm",
                                                                    children: order.customerName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-zinc-500 font-space",
                                                                    children: order.customerEmail || 'No Email Recorded'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 748,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-space uppercase",
                                                            children: "Active Account"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 752,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 747,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-500",
                                                                    children: "Phone:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 font-space",
                                                                    children: order.customerPhone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 758,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-500",
                                                                    children: "Saved Config:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 font-semibold",
                                                                    children: order.camera?.name || 'Electric System'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 762,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-500",
                                                                    children: "Address:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 truncate max-w-[200px]",
                                                                    children: order.customerAddress || 'No Address'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 766,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 757,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, order.id, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 746,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 744,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 731,
                            columnNumber: 15
                        }, this),
                        activeTab === 'settings' && webSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveWebSettingsSubmit,
                            className: "p-6 rounded-3xl border border-white/5 bg-zinc-950/20 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-4 h-4 text-electric-cyan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 782,
                                            columnNumber: 19
                                        }, this),
                                        " Corporate Website Settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 781,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Company Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 787,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: webSettings.companyName,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            companyName: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 786,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "GST Registration Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 797,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: webSettings.gstNumber,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            gstNumber: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 798,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 796,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Corporate Logo Image (Supabase Storage)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 807,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: async (e)=>{
                                                                const file = e.target.files[0];
                                                                if (file) {
                                                                    store.addToast('Uploading logo to Supabase...', 'info');
                                                                    const url = await uploadImageToSupabase(file, 'images');
                                                                    if (url) {
                                                                        setWebSettings({
                                                                            ...webSettings,
                                                                            logo: url
                                                                        });
                                                                        store.addToast('Logo uploaded successfully!', 'success');
                                                                    }
                                                                }
                                                            },
                                                            className: "bg-zinc-900 border border-zinc-800 rounded-xl p-2 text-xs text-white focus:outline-none flex-grow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 809,
                                                            columnNumber: 23
                                                        }, this),
                                                        webSettings.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: webSettings.logo,
                                                                alt: "Logo",
                                                                className: "w-full h-full object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 827,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 826,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 808,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 806,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Favicon Path"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: webSettings.favicon,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            favicon: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 835,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Contact Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 844,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: webSettings.contactNumber,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            contactNumber: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 845,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 843,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Office Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 854,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: webSettings.emailAddress,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            emailAddress: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 855,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 853,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2",
                                                    children: "Physical Office Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 864,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: webSettings.officeAddress,
                                                    onChange: (e)=>setWebSettings({
                                                            ...webSettings,
                                                            officeAddress: e.target.value
                                                        }),
                                                    rows: "2",
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 865,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 863,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 785,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end pt-4 border-t border-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider font-space cursor-pointer",
                                        children: "Save Corporate Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 875,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 874,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 780,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            showProductForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center border-b border-white/5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: editingProduct ? 'Edit Product Specifications (PIM)' : 'Add New Product to Inventory'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 895,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowProductForm(false),
                                    className: "text-zinc-500 hover:text-white cursor-pointer",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 898,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 894,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveProductSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Product Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: productForm.name,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            name: e.target.value
                                                        }),
                                                    required: true,
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 906,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Product SKU Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 916,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: productForm.sku,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            sku: e.target.value
                                                        }),
                                                    required: true,
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 917,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Category Group"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 927,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: productForm.category,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            category: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                                    children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c.name,
                                                            children: c.name
                                                        }, c.id, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 933,
                                                            columnNumber: 42
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 928,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Brand Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 938,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: productForm.brand,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            brand: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 939,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 937,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Stock Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 948,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: productForm.stockQuantity,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            stockQuantity: parseInt(e.target.value) || 0
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 949,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 947,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Price ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 958,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: productForm.price,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            price: parseFloat(e.target.value) || 0
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 959,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 957,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Short Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 968,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: productForm.shortDescription,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            shortDescription: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 969,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 967,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Detailed PIM Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 978,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: productForm.description,
                                                    onChange: (e)=>setProductForm({
                                                            ...productForm,
                                                            description: e.target.value
                                                        }),
                                                    rows: "3",
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 979,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 977,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Product Image (Supabase Storage)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 988,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: async (e)=>{
                                                                const file = e.target.files[0];
                                                                if (file) {
                                                                    store.addToast('Uploading image to Supabase...', 'info');
                                                                    const url = await uploadImageToSupabase(file, 'images');
                                                                    if (url) {
                                                                        setProductForm({
                                                                            ...productForm,
                                                                            image: url
                                                                        });
                                                                        store.addToast('Image uploaded successfully!', 'success');
                                                                    }
                                                                }
                                                            },
                                                            className: "bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none flex-grow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 990,
                                                            columnNumber: 21
                                                        }, this),
                                                        productForm.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shrink-0 w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: productForm.image,
                                                                alt: "Preview",
                                                                className: "w-full h-full object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                lineNumber: 1008,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 989,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 987,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4 border-t border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowProductForm(false),
                                            className: "px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-xs font-semibold uppercase tracking-wider font-space text-zinc-400 hover:text-white cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1016,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider font-space cursor-pointer",
                                            children: "Save Product specifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1023,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1015,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 901,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 893,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 892,
                columnNumber: 9
            }, this),
            showCategoryForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center border-b border-white/5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: editingCategory ? 'Edit Category' : 'Create New Category'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1041,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCategoryForm(false),
                                    className: "text-zinc-500 hover:text-white cursor-pointer",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1044,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1040,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveCategorySubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                            children: "English Category Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1049,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: categoryForm.name,
                                            onChange: (e)=>setCategoryForm({
                                                    ...categoryForm,
                                                    name: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1050,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1048,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                            children: "Kannada Category Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1060,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: categoryForm.nameKn,
                                            onChange: (e)=>setCategoryForm({
                                                    ...categoryForm,
                                                    nameKn: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none font-kannada"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                            children: "Sort/Display Order"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1071,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: categoryForm.displayOrder,
                                            onChange: (e)=>setCategoryForm({
                                                    ...categoryForm,
                                                    displayOrder: parseInt(e.target.value) || 1
                                                }),
                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1072,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1070,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4 border-t border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowCategoryForm(false),
                                            className: "px-4 py-2 rounded-xl border border-zinc-800 text-xs font-semibold text-zinc-400 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1081,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold cursor-pointer",
                                            children: "Save Group"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1088,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1080,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1047,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 1039,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 1038,
                columnNumber: 9
            }, this),
            showRuleForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center border-b border-white/5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: "Configure Compatibility Rule"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowRuleForm(false),
                                    className: "text-zinc-500 hover:text-white cursor-pointer",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveRuleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                            children: "Rule Dependency Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: ruleForm.type,
                                            onChange: (e)=>setRuleForm({
                                                    ...ruleForm,
                                                    type: e.target.value
                                                }),
                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "camera-battery",
                                                    children: "Camera Lenses ↔ Battery Compatibility"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "panel-battery",
                                                    children: "Solar Panel ↔ Battery Restriction"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1110,
                                    columnNumber: 15
                                }, this),
                                ruleForm.type === 'camera-battery' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Lens Count trigger"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ruleForm.cameraLens,
                                                    onChange: (e)=>setRuleForm({
                                                            ...ruleForm,
                                                            cameraLens: parseInt(e.target.value) || 1
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1",
                                                            children: "1 Lens (Single)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1131,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "2",
                                                            children: "2 Lenses (Dual)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1132,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "3",
                                                            children: "3 Lenses (Triple)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1133,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Required Battery Pack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ruleForm.batteryId,
                                                    onChange: (e)=>setRuleForm({
                                                            ...ruleForm,
                                                            batteryId: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                                    children: products.filter((p)=>p.type === 'battery').map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: p.id,
                                                            children: [
                                                                p.name,
                                                                " (",
                                                                p.capacity,
                                                                ")"
                                                            ]
                                                        }, p.id, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Solar Panel trigger"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ruleForm.panelId,
                                                    onChange: (e)=>setRuleForm({
                                                            ...ruleForm,
                                                            panelId: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                                    children: products.filter((p)=>p.type === 'panel').map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: p.id,
                                                            children: [
                                                                p.name,
                                                                " (",
                                                                p.wattage,
                                                                ")"
                                                            ]
                                                        }, p.id, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1159,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase font-space block mb-1",
                                                    children: "Locked Battery Pack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ruleForm.batteryId,
                                                    onChange: (e)=>setRuleForm({
                                                            ...ruleForm,
                                                            batteryId: e.target.value
                                                        }),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none",
                                                    children: products.filter((p)=>p.type === 'battery').map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: p.id,
                                                            children: [
                                                                p.name,
                                                                " (",
                                                                p.capacity,
                                                                ")"
                                                            ]
                                                        }, p.id, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1163,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4 border-t border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowRuleForm(false),
                                            className: "px-4 py-2 rounded-xl border border-zinc-800 text-xs text-zinc-400 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-5 py-2 rounded-xl bg-white text-black text-xs font-semibold cursor-pointer",
                                            children: "Build Rule"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 1103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 1102,
                columnNumber: 9
            }, this),
            previewingProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPreviewingProduct(null),
                            className: "absolute top-4 right-4 text-zinc-500 hover:text-white cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewingProduct.image,
                            alt: "",
                            className: "w-full h-48 object-contain bg-zinc-900 rounded-2xl p-4 border border-white/5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1208,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-bold tracking-widest font-space text-electric-cyan",
                                            children: [
                                                previewingProduct.brand,
                                                " • ",
                                                previewingProduct.modelNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2 py-0.5 rounded text-[8px] font-bold uppercase ${previewingProduct.status === 'Active' ? 'bg-electric-emerald/10 text-electric-emerald' : 'bg-zinc-800 text-zinc-400'}`,
                                            children: previewingProduct.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-white mt-1",
                                    children: previewingProduct.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-zinc-500 font-space",
                                    children: [
                                        "SKU: ",
                                        previewingProduct.sku
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: previewingProduct.description || previewingProduct.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1225,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t border-white/5 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-500 block uppercase font-space",
                                            children: "Hardware Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-white font-space",
                                            children: [
                                                "$",
                                                previewingProduct.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-500 block uppercase font-space text-right",
                                            children: "In-Stock"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-white font-space text-right block",
                                            children: [
                                                previewingProduct.stockQuantity,
                                                " Units"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 1236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 1234,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 1229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 1201,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 1200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AdminDashboard.jsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/GallerySection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-ssr] (ecmascript) <export default as Play>");
;
;
;
const GALLERY_ITEMS = [
    // DEMO VIDEOS
    {
        id: 'demo-v1',
        category: 'solar-cam',
        title: 'ಸೌರ ಸಿಸಿಟಿವಿ ರಾತ್ರಿ ದೃಷ್ಟಿ ಪರೀಕ್ಷೆ / Solar CCTV Night Vision Test',
        desc: 'ಅಪೆಕ್ಸ್ ಪಿಟಿಝಡ್ ರಾತ್ರಿ ದೃಷ್ಟಿ ಸ್ವೀಪ್ ವಿಡಿಯೋ ಡೆಮೊ. / Apex PTZ night vision sweep video demo.',
        img: '/images/cam5.jpg',
        videoUrl: '/videos/demo1.mp4',
        type: 'video'
    },
    {
        id: 'demo-v2',
        category: 'solar-cam',
        title: 'ಕ್ಲೌಡ್ ಸಿಸಿಟಿವಿ ತಡೆರಹಿತ ಕಣ್ಗಾವಲು / Cloud CCTV Continuous Feed',
        desc: 'ದೂರದ ಕೃಷಿಭೂಮಿ ಕಣ್ಗಾವಲು ಲೈವ್ ವಿಡಿಯೋ ಡೆಮೊ. / Remote agricultural land surveillance live video demo.',
        img: '/images/cam1.jpg',
        videoUrl: '/videos/demo2.mp4',
        type: 'video'
    },
    // SOLAR CAMERAS
    {
        id: 'sol-1',
        category: 'solar-cam',
        title: 'ಸ್ಟ್ರೋಬ್ ಸೈರನ್ ಎಚ್ಚರಿಕೆ ಡೋಮ್ / Strobe Siren Warning Dome',
        desc: 'ಕೆಂಪು ಎಚ್ಚರಿಕೆ ಸ್ಟ್ರೋಬ್ ಬೀಕನ್ ಹೊಂದಿರುವ ಪ್ರೀಮಿಯಂ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Premium dome camera with red warning strobe beacon.',
        img: '/images/cam1.jpg'
    },
    {
        id: 'sol-2',
        category: 'solar-cam',
        title: 'ಥಿಂಕ್‌ವಿಲ್ ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಪಿಟಿಝಡ್ ಡೋಮ್ / THINKWILL Dual-Lens PTZ Dome',
        desc: 'ಸಂಯೋಜಿತ ಮೌಂಟಿಂಗ್ ಬ್ರಾಕೆಟ್ ಹೊಂದಿರುವ ಕಾಂಪ್ಯಾಕ್ಟ್ ಥಿಂಕ್‌ವಿಲ್ ಬ್ರಾಂಡ್ ವೈರ್‌ಲೆಸ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Compact THINKWILL brand wireless dome camera with integrated mounting bracket.',
        img: '/images/cam2.jpg'
    },
    {
        id: 'sol-3',
        category: 'solar-cam',
        title: 'ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಟೆಲಿಮೆಟ್ರಿ ಪಿಟಿಝಡ್ ಡೋಮ್ / Consistent Smart Telemetry PTZ Dome',
        desc: 'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು ಮತ್ತು ಸ್ಟಾರ್‌ಲೈಟ್ ಸೆನ್ಸಾರ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಕನ್ಸಿಸ್ಟೆಂಟ್ ಬ್ರಾಂಡ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Consistent brand dome camera with dual outdoor antennas and starlight sensors.',
        img: '/images/cam3.jpg'
    },
    {
        id: 'sol-4',
        category: 'solar-cam',
        title: 'ಥಿಂಕ್‌ವಿಲ್ ಸಿಂಗಲ್-ಲೆನ್ಸ್ ಕ್ಲಾಸಿಕ್ ಡೋಮ್ / THINKWILL Single-Lens Classic Dome',
        desc: 'ಕಾಂಪ್ಯಾಕ್ಟ್ ಥಿಂಕ್‌ವಿಲ್ ಬ್ರಾಂಡ್ ವೈರ್‌ಲೆಸ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Compact THINKWILL brand wireless dome camera.',
        img: '/images/cam4.jpg'
    },
    {
        id: 'sol-5',
        category: 'solar-cam',
        title: 'ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಪನೋರಮಿಕ್ ಸ್ಟ್ಯಾಂಡ್ / THINKWILL Triple-Lens Panoramic Stand',
        desc: 'ಡೆಸ್ಕ್‌ಟಾಪ್ ಸ್ಟ್ಯಾಂಡ್‌ನೊಂದಿಗೆ ಪನೋರಮಿಕ್ ಮಲ್ಟಿ-ಡೈರೆಕ್ಷನಲ್ ಸಬ್-ಡೋಮ್ ದೃಶ್ಯ ಶ್ರೇಣಿ. / Panoramic multi-directional sub-dome visual array with desktop stand.',
        img: '/images/cam5.jpg'
    },
    // IP CAMERAS
    {
        id: 'ip-1',
        category: 'ip-cam',
        title: 'ಐಪಿ ಸ್ಟಾರ್‌ಲೈಟ್ ಡೋಮ್ ಸಿಸಿಟಿವಿ / IP Starlight Dome CCTV',
        desc: 'ಲೇಸರ್ ರಾತ್ರಿ ದೃಷ್ಟಿ ಬೆಂಬಲದೊಂದಿಗೆ ಬಿಳಿ ಹೈ-ಡೆಫಿನಿಷನ್ ಡೋಮ್. / White high-definition dome with laser night vision support.',
        img: '/images/media__1784612854089.jpg'
    },
    {
        id: 'ip-2',
        category: 'ip-cam',
        title: 'ಐಪಿ ಸ್ಮಾರ್ಟ್ ಬುಲೆಟ್ ಕಣ್ಗಾವಲು / IP Smart Bullet Surveillance',
        desc: 'ಪ್ರೀಮಿಯಂ ಹೊರಾಂಗಣ ಹವಾಮಾನ-ನಿರೋಧಕ ಬುಲೆಟ್ ಹೌಸಿಂಗ್. / Premium outdoor weather-sealed bullet housing.',
        img: '/images/media__1784612854094.jpg'
    },
    {
        id: 'ip-3',
        category: 'ip-cam',
        title: 'ಐಪಿ ಆಪ್ಟಿಕಲ್ ಜೂಮ್ ಡೋಮ್ / IP Optical Zoom Dome',
        desc: 'ಹೈಬ್ರಿಡ್ ಭೌತಿಕ ಜೂಮ್ ಹೊಂದಿರುವ ಡ್ಯುಯಲ್ ಆಂಟೆನಾ ನೆಟ್‌ವರ್ಕ್ ಡೋಮ್. / Dual antenna network dome with hybrid physical zoom.',
        img: '/images/media__1784612854227.jpg'
    },
    {
        id: 'ip-4',
        category: 'ip-cam',
        title: 'ಐಪಿ ಅಲ್ಟ್ರಾ ಕಾಂಪ್ಯಾಕ್ಟ್ ನೋಡ್ / IP Ultra Compact Node',
        desc: 'ವಸತಿ ಸ್ಥಾಪನೆಗಳಿಗಾಗಿ ಕಡಿಮೆ ಪ್ರೊಫೈಲ್ ಡೋಮ್ ಸೆನ್ಸಾರ್. / Low profile dome sensor for residential installations.',
        img: '/images/media__1784612854239.jpg'
    },
    {
        id: 'ip-5',
        category: 'ip-cam',
        title: 'ಐಪಿ ಮಲ್ಟಿ-ಲೆನ್ಸ್ ಪನೋರಮಿಕ್ ಪಾಡ್ / IP Multi-Lens Panoramic Pod',
        desc: 'ಮಾಪನಾಂಕ ನಿರ್ಣಯ ಪೀಠದ ಮೇಲಿರುವ ವಿಶಾಲ ದೃಶ್ಯ ಕವರೇಜ್ ಹೊಂದಿರುವ ಪನೋರಮಿಕ್ ಮಾಡೆಲ್. / Broad visual coverage panoramic model on calibration pedestal.',
        img: '/images/media__1784612854250.jpg'
    },
    // ELECTRIC CAMERAS
    {
        id: 'elec-1',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಸ್ಮಾರ್ಟ್ ಡೋಮ್ ಸಿಸಿಟಿವಿ / Electric Smart dome CCTV',
        desc: 'ಡ್ಯುಯಲ್ ಹೈ-ಗೇನ್ ಆಂಟೆನಾಗಳನ್ನು ಹೊಂದಿರುವ ನೆಟ್‌ವರ್ಕ್ ಡೋಮ್ ಕಣ್ಗಾವಲು ಘಟಕ. / Network dome surveillance unit with dual high-gain antennas.',
        img: '/images/media__1784613517037.jpg'
    },
    {
        id: 'elec-2',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ನೈಟ್ ಸ್ವೀಪರ್ ಬುಲೆಟ್ / Electric Night Sweeper Bullet',
        desc: 'ಹೆಚ್ಚಿನ ಶಕ್ತಿಯ ಇನ್‌ಫ್ರಾರೆಡ್ ಎಲ್‌ಇಡಿಗಳನ್ನು ಹೊಂದಿರುವ ನಿರಂತರ ಗ್ರಿಡ್ ಚಾಲಿತ ಬುಲೆಟ್. / Continuous grid-powered bullet with high-power infrared LEDs.',
        img: '/images/media__1784613517038.jpg'
    },
    {
        id: 'elec-3',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಆಕ್ಟಿವ್ ಟ್ರ್ಯಾಕ್ ಡೋಮ್ / Electric Active Track Dome',
        desc: 'ಸಂಯೋಜಿತ ಪ್ಯಾನ್-ಟಿಲ್ಟ್-ಜೂಮ್ ಬ್ರಾಕೆಟ್ ಕ್ಯಾಮೆರಾ. / Integrated pan-tilt-zoom bracket camera.',
        img: '/images/media__1784613517039.jpg'
    },
    {
        id: 'elec-4',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಕ್ಲಾಸಿಕ್ ಡೋಮ್ ನೋಡ್ / Electric Classic Dome Node',
        desc: 'ಪ್ರಮಾಣಿತ ವಾಣಿಜ್ಯ ದರ್ಜೆಯ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Standard commercial grade dome camera.',
        img: '/images/media__1784613517104.jpg'
    },
    {
        id: 'elec-5',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಡೋಮ್ ನೋಡ್ 5 / Electric Dome Node 5',
        desc: 'ಸ್ಟಾರ್‌ಲೈಟ್ ಕಡಿಮೆ-ಲಕ್ಸ್ ಸಂವೇದನಾಶೀಲ ಆಪ್ಟಿಕಲ್ ಡೋಮ್. / Starlight low-lux sensitive optical dome.',
        img: '/images/media__1784613547249.jpg'
    },
    {
        id: 'elec-6',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಬುಲೆಟ್ ನೋಡ್ 6 / Electric Bullet Node 6',
        desc: 'ದೂರದ ಪರಿಧಿಯನ್ನು ಸ್ವೀಪ್ ಮಾಡುವ ಬುಲೆಟ್ ಹಾರ್ಡ್‌ವೇರ್. / Long distance perimeter sweep bullet hardware.',
        img: '/images/media__1784613547262.jpg'
    },
    {
        id: 'elec-7',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಡೋಮ್ ನೋಡ್ 7 / Electric Dome Node 7',
        desc: 'ವಿರೂಪಗೊಳಿಸುವಿಕೆ ನಿರೋಧಕ ಭದ್ರತಾ ಡೋಮ್ ಚಾಸಿಸ್. / Anti-tampering security dome chassis.',
        img: '/images/media__1784613547275.jpg'
    },
    {
        id: 'elec-8',
        category: 'elec-cam',
        title: 'ವಿದ್ಯುತ್ ಡೋಮ್ ನೋಡ್ 8 / Electric Dome Node 8',
        desc: 'ವೈಡ್-ಆಂಗಲ್ ಕವರೇಜ್ ಡೋಮ್ ನೋಡ್. / Wide-angle coverage dome node.',
        img: '/images/media__1784613547343.jpg'
    },
    // IR CAMERAS
    {
        id: 'ir-1',
        category: 'ir-cam',
        title: 'ಐಆರ್ ಭದ್ರತಾ ಡೋಮ್ ನೋಡ್ / IR Security Dome Node',
        desc: 'ಇನ್‌ಫ್ರಾರೆಡ್ ಶ್ರೇಣಿಗಳೊಂದಿಗೆ ಸುಧಾರಿತ ನೈಟ್ ಸ್ವೀಪ್ ಡೋಮ್. / Advanced night sweep dome with infrared arrays.',
        img: '/images/media__1784620979541.jpg'
    },
    {
        id: 'ir-2',
        category: 'ir-cam',
        title: 'ಐಆರ್ ಲೇಸರ್ ನೈಟ್ ಡೋಮ್ / IR Laser Night Dome',
        desc: 'ಬಣ್ಣದ ಲೇಸರ್ ಸ್ಟಾರ್‌ಲೈಟ್ ರಾತ್ರಿ ದೃಷ್ಟಿ ಕ್ಯಾಮೆರಾ. / Color laser starlight night vision camera.',
        img: '/images/media__1784620987487.jpg'
    },
    {
        id: 'ir-3',
        category: 'ir-cam',
        title: 'ಐಆರ್ ಆಕ್ಟಿವ್ ಅಲರ್ಟ್ ಬುಲೆಟ್ / IR Active Alert Bullet',
        desc: 'ಸಂಯೋಜಿತ ಮೈಕ್ರೋ-ಸೈರನ್ ಅಲರ್ಟ್ ಬುಲೆಟ್. / Integrated micro-siren alert bullet.',
        img: '/images/media__1784620992238.jpg'
    },
    {
        id: 'ir-4',
        category: 'ir-cam',
        title: 'ಐಆರ್ ಕಾಂಪ್ಯಾಕ್ಟ್ ಡೋಮ್ ನೋಡ್ / IR Compact Dome Node',
        desc: 'ವಸತಿ ರಕ್ಷಣೆಗಾಗಿ ಡ್ಯುಯಲ್ ಆಂಟೆನಾ ಲೂಪ್ ಡೋಮ್. / Dual antenna loop dome for residential protection.',
        img: '/images/media__1784620996687.jpg'
    }
];
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const categoryBilingual = (category)=>{
    switch(category){
        case 'solar-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಸೌರ ಕ್ಯಾಮೆರಾ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 205,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / Solar Cam"
                ]
            }, void 0, true);
        case 'ip-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಪಿ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 207,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / IP Series"
                ]
            }, void 0, true);
        case 'elec-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ವಿದ್ಯುತ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 209,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / Electric Series"
                ]
            }, void 0, true);
        case 'ir-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಆರ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 211,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / IR Series"
                ]
            }, void 0, true);
        default:
            return category;
    }
};
function GallerySection() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [lightboxItem, setLightboxItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playingVideo, setPlayingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Local demo video url state
    const handleItemClick = (item)=>{
        setLightboxItem(item);
        if (item.type === 'video' && item.videoUrl) {
            setPlayingVideo(item.videoUrl);
        } else {
            setPlayingVideo(null);
        }
    };
    const categories = [
        {
            id: 'all',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಎಲ್ಲಾ ಪ್ರದರ್ಶನಗಳು"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 232,
                        columnNumber: 27
                    }, this),
                    " / All Showcase"
                ]
            }, void 0, true)
        },
        {
            id: 'solar-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಸೌರ ಕ್ಯಾಮೆರಾಗಳು"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 233,
                        columnNumber: 33
                    }, this),
                    " / Solar Cameras"
                ]
            }, void 0, true)
        },
        {
            id: 'ip-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಪಿ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 234,
                        columnNumber: 30
                    }, this),
                    " / IP Series"
                ]
            }, void 0, true)
        },
        {
            id: 'elec-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ವಿದ್ಯುತ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 235,
                        columnNumber: 32
                    }, this),
                    " / Electric Series"
                ]
            }, void 0, true)
        },
        {
            id: 'ir-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಆರ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 236,
                        columnNumber: 30
                    }, this),
                    " / IR Series"
                ]
            }, void 0, true)
        }
    ];
    const filteredItems = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item)=>item.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery-section",
        className: "py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-0 w-80 h-80 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 left-0 w-80 h-80 bg-electric-emerald/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಉತ್ಪನ್ನ ವಿವರಪಟ್ಟಿ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    " / Product Catalog"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾ ಗ್ಯಾಲರಿ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    " / CCTV Hardware Gallery"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-light mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಬಳಕೆದಾರರು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಸೌರ ಸೆಟಪ್‌ಗಳು, ಐಪಿ ಡೋಮ್ ನೋಡ್‌ಗಳು ಮತ್ತು ಎಕ್ಸ್‌ಟ್ರೀಮ್ ಲೋ-ಲಕ್ಸ್ ಇನ್‌ಫ್ರಾರೆಡ್ ಹಾರ್ಡ್‌ವೇರ್‌ಗಳ ವಿವರವಾದ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    " / Browse through our extensive catalog of user-configured solar setups, IP dome nodes, and extreme low-lux infrared hardware."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-3 mb-12",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFilter(cat.id),
                                className: `px-5 py-2.5 rounded-full font-space text-[10px] uppercase tracking-wider transition-all duration-300 border cursor-pointer ${filter === cat.id ? 'bg-electric-cyan border-electric-cyan text-black font-semibold shadow-lg shadow-electric-cyan/15' : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'}`,
                                children: cat.label
                            }, cat.id, false, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleItemClick(item),
                                className: "group relative bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-electric-cyan/30 hover:shadow-[0_12px_24px_rgba(0,245,255,0.04)] hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square bg-zinc-950 flex items-center justify-center overflow-hidden relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.img,
                                                alt: item.title,
                                                className: "w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
                                                    children: item.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-5 h-5 fill-black ml-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GallerySection.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 46
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GallerySection.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 95
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GallerySection.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            item.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 w-7 h-7 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-md z-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-3.5 h-3.5 fill-black ml-0.5 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GallerySection.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-4 left-4 px-2.5 py-1 rounded-md text-[8px] font-space font-semibold uppercase tracking-wider border border-white/10 bg-zinc-900/90 text-zinc-400 z-10",
                                                children: categoryBilingual(item.category)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 border-t border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors",
                                                children: renderBilingual(item.title)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-zinc-500 font-light mt-1.5 leading-relaxed",
                                                children: renderBilingual(item.desc)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 text-zinc-500 text-xs font-space uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-kannada",
                                children: "ಯಾವುದೇ ಸ್ವತ್ತುಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            " / No assets found matching this filter"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            lightboxItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out",
                onClick: ()=>{
                    setLightboxItem(null);
                    setPlayingVideo(null);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setLightboxItem(null);
                            setPlayingVideo(null);
                        },
                        className: "absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 shadow-lg cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GallerySection.jsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl w-full flex flex-col items-center gap-6",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            !playingVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: lightboxItem.img,
                                        alt: lightboxItem.title,
                                        className: "max-w-full max-h-[48vh] object-contain rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPlayingVideo(Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4'),
                                        className: "px-5 py-2.5 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center gap-2 cursor-pointer font-space uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "w-4 h-4 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ವಿಡಿಯೋ ಡೆಮೊ ವೀಕ್ಷಿಸಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 367,
                                                columnNumber: 62
                                            }, this),
                                            " / Play Video Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: playingVideo,
                                        autoPlay: true,
                                        controls: true,
                                        className: "max-w-full max-h-[48vh] object-contain rounded-xl aspect-video border border-white/5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPlayingVideo(null),
                                        className: "px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs hover:bg-zinc-800 transition-all cursor-pointer font-space uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಚಿತ್ರಕ್ಕೆ ಹಿಂತಿರುಗಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this),
                                            " / Back to Image"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 378,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-electric-cyan font-space uppercase tracking-widest font-semibold",
                                        children: categoryBilingual(lightboxItem.category)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-space font-medium text-white mt-1",
                                        children: renderBilingual(lightboxItem.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-400 font-light mt-2 leading-relaxed",
                                        children: renderBilingual(lightboxItem.desc)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 341,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GallerySection.jsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ServiceRequest.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/battery.mjs [app-ssr] (ecmascript) <export default as Battery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-ssr] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
;
;
;
;
;
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceRequest.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceRequest.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceRequest.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const renderIssueType = (type)=>{
    const translations = {
        'Camera': 'ಕ್ಯಾಮೆರಾ / Camera',
        'Battery': 'ಬ್ಯಾಟರಿ / Battery',
        'Solar': 'ಸೌರ ಫಲಕ / Solar',
        'Recorder': 'ರೆಕಾರ್ಡರ್ / Recorder',
        'Network': 'ನೆಟ್‌ವರ್ಕ್ / Network'
    };
    return renderBilingual(translations[type] || type);
};
function ServiceRequest() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const [activeReqs, setActiveReqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedReq, setSelectedReq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load ticket items
    const loadRequests = ()=>{
        const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].getServices();
        setActiveReqs(list);
        if (list.length > 0 && !selectedReq) {
            setSelectedReq(list[0]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadRequests();
    }, []);
    const handleServiceFormSubmit = async (e)=>{
        e.preventDefault();
        const result = await store.submitServiceRequest();
        if (result) {
            loadRequests();
            setSelectedReq(result);
        }
    };
    const handleMockFileSelected = (e)=>{
        const files = Array.from(e.target.files);
        const mockFiles = files.map((file)=>({
                name: file.name,
                preview: URL.createObjectURL(file)
            }));
        store.setServiceFiles([
            ...store.serviceFiles,
            ...mockFiles
        ]);
        store.addToast(`Attached ${files.length} diagnostic media files`, 'info');
    };
    const handleRemoveFile = (index)=>{
        store.setServiceFiles(store.serviceFiles.filter((_, i)=>i !== index));
    };
    // Stepper milestones
    const getMilestones = (req)=>{
        if (!req) return [];
        return [
            {
                step: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಸಲ್ಲಿಸಲಾಗಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this),
                        " / Submitted"
                    ]
                }, void 0, true),
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಸೂಪಬೇಸ್‌ನಲ್ಲಿ ಟಿಕೆಟ್ ದಾಖಲಿಸಲಾಗಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 79,
                            columnNumber: 18
                        }, this),
                        " / Ticket Lodged in Supabase"
                    ]
                }, void 0, true),
                desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಬೆಂಬಲ ಚಾನಲ್‌ಗೆ ಎಚ್ಚರಿಕೆ ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 80,
                            columnNumber: 17
                        }, this),
                        " / Alert notifications dispatched to support channel."
                    ]
                }, void 0, true),
                done: true
            },
            {
                step: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ನಿಯೋಜಿಸಲಾಗಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 84,
                            columnNumber: 17
                        }, this),
                        " / Assigned"
                    ]
                }, void 0, true),
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ತಾಂತ್ರಿಕ ಸಿಬ್ಬಂದಿಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 85,
                            columnNumber: 18
                        }, this),
                        " / Assigned to Technical Crew: ",
                        req.assignedTech
                    ]
                }, void 0, true),
                desc: req.assignedTech !== 'Unassigned' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಸಿಬ್ಬಂದಿ ರವಾನೆ ಲಾಕ್ ಮಾಡಲಾಗಿದೆ. ಜಿಪಿಎಸ್ ನ್ಯಾವಿಗೇಷನ್ ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this),
                        " / Crew dispatch locked. GPS navigation synced."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ನಿಯೋಜನೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this),
                        " / Awaiting assignment in dashboard."
                    ]
                }, void 0, true),
                done: req.assignedTech !== 'Unassigned'
            },
            {
                step: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಪ್ರಗತಿಯಲ್ಲಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, this),
                        " / In Progress"
                    ]
                }, void 0, true),
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಸಿಬ್ಬಂದಿ ಸೈಟ್ ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 93,
                            columnNumber: 18
                        }, this),
                        " / Crew Troubleshooting Site"
                    ]
                }, void 0, true),
                desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ತಂತ್ರಜ್ಞರು ಜೋಡಣೆ ಮತ್ತು ವೈರಿಂಗ್ ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, this),
                        " / Technician checking alignment and wiring guides."
                    ]
                }, void 0, true),
                done: req.status === 'Resolved' || req.status === 'In Progress'
            },
            {
                step: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಪರಿಹರಿಸಲಾಗಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this),
                        " / Resolved"
                    ]
                }, void 0, true),
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 99,
                            columnNumber: 18
                        }, this),
                        " / Diagnostics Verified"
                    ]
                }, void 0, true),
                desc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-kannada",
                            children: "ರಿಮೋಟ್ ಪ್ರವೇಶವನ್ನು ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ಸಿಸ್ಟಮ್ ಸ್ವಾಯತ್ತತೆಯನ್ನು ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this),
                        " / Remote access established. System autonomy synced."
                    ]
                }, void 0, true),
                done: req.status === 'Resolved'
            }
        ];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-32 pb-20 grid-bg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-2 font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-kannada",
                                    children: "ನಿರ್ವಹಣೆ ಮತ್ತು ಬೆಂಬಲ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                " / Maintenance & Support"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-space font-light text-white leading-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-kannada",
                                    children: "ಸೇವಾ ಟಿಕೆಟ್ ಡೆಸ್ಕ್"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                " / Service Ticket Desk"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 font-light mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-kannada",
                                    children: "ಸಿಸ್ಟಮ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್ ಅನ್ನು ದಾಖಲಿಸಿ, ಆಫ್-ಗ್ರಿಡ್ ಮಾಡ್ಯೂಲ್‌ಗಳಲ್ಲಿ ತಾಂತ್ರಿಕ ಸಹಾಯವನ್ನು ವಿನಂತಿಸಿ ಅಥವಾ ಸಕ್ರಿಯ ನಿರ್ವಹಣೆ ಒಪ್ಪಂದದ ತಂತ್ರಜ್ಞರ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                " / Lodge system diagnostics, request technical help on off-grid modules, or track active maintenance contract technician checklists."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceRequest.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl text-white mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada",
                                            children: "ಸೇವಾ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        " / Lodge Maintenance Request"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleServiceFormSubmit,
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಸಮಸ್ಯೆಯಿರುವ ಭಾಗ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this),
                                                        " / Target Issue Module"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-2",
                                                    children: [
                                                        {
                                                            type: 'Camera',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
                                                        },
                                                        {
                                                            type: 'Battery',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"]
                                                        },
                                                        {
                                                            type: 'Solar',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"]
                                                        },
                                                        {
                                                            type: 'Recorder',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"]
                                                        },
                                                        {
                                                            type: 'Network',
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"]
                                                        }
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>store.setServiceIssue(item.type),
                                                            className: `py-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${store.serviceIssue === item.type ? 'border-electric-cyan bg-electric-cyan/5 text-electric-cyan' : 'border-zinc-900 bg-zinc-950/40 text-zinc-500 hover:border-zinc-800'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-space font-semibold uppercase",
                                                                    children: renderIssueType(item.type)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item.type, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಪೂರ್ಣ ಹೆಸರು"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " / Full Name"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            placeholder: "ನೋಂದಾಯಿತ ಹೆಸರನ್ನು ನಮೂದಿಸಿ / Enter registered name",
                                                            value: store.customerName,
                                                            onChange: (e)=>store.setCustomerInfo({
                                                                    customerName: e.target.value
                                                                }),
                                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " / Registered Phone"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            required: true,
                                                            placeholder: "ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ / Registered phone number",
                                                            value: store.customerPhone,
                                                            onChange: (e)=>store.setCustomerInfo({
                                                                    customerPhone: e.target.value
                                                                }),
                                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಸಮಸ್ಯೆಯ ವಿವರಗಳು"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        " / Issue Details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    required: true,
                                                    rows: "3",
                                                    placeholder: "ಸಮಸ್ಯೆಯ ವಿವರಗಳನ್ನು ವಿವರಿಸಿ (ಉದಾ. ರಾತ್ರಿ ಕ್ಯಾಮೆರಾ ಆಫ್ ಆಗುತ್ತದೆ, ಮಂಜು ಇರುವಾಗ ಸಂಪರ್ಕ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ)... / Describe details of the glitch (e.g. camera loses power at night, connection drop during fog)...",
                                                    value: store.serviceDescription,
                                                    onChange: (e)=>store.setServiceDescription(e.target.value),
                                                    className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಮೀಡಿಯಾ ಅಪ್‌ಲೋಡ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, this),
                                                        " / Diagnostic Media Upload"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this),
                                                store.serviceFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 flex-wrap mb-3",
                                                    children: store.serviceFiles.map((file, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-12 h-12 rounded border border-white/5 bg-zinc-950 overflow-hidden shrink-0 group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: file.preview,
                                                                    alt: "Upload",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRemoveFile(idx),
                                                                    className: "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 text-red-500 text-xs font-bold",
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "w-full py-4 rounded-xl border border-dashed border-zinc-800 text-[10px] text-zinc-500 hover:text-white hover:border-zinc-700 font-space uppercase flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಚಿತ್ರಗಳು ಅಥವಾ ವೀಡಿಯೊಗಳನ್ನು ಆರಿಸಿ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " / Choose Images or Videos"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            multiple: true,
                                                            accept: "image/*,video/*",
                                                            onChange: handleMockFileSelected,
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: store.isSubmitting,
                                            className: "w-full py-3.5 rounded-xl font-space text-xs font-semibold text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer mt-6",
                                            children: store.isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-4 h-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಟಿಕೆಟ್ ಉಳಿಸಲಾಗುತ್ತಿದೆ..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 68
                                                    }, this),
                                                    " / Saving ticket..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಟಿಕೆಟ್ ಸಲ್ಲಿಸಿ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    " / File Ticket"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl text-white mb-6 font-space",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada",
                                            children: "ಸಕ್ರಿಯ ಟೆಲಿಮೆಟ್ರಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        " / Track Active Telemetry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                selectedReq ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start gap-4 pb-4 border-b border-zinc-900 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-space text-electric-cyan uppercase tracking-widest font-semibold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಸೇವಾ ಟಿಕೆಟ್ ಐಡಿ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " / Service Ticket ID"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-space font-medium text-white mt-0.5",
                                                            children: selectedReq.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-zinc-500 font-space block mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಸಲ್ಲಿಸಿದ ದಿನಾಂಕ:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " / Filed Date: ",
                                                                selectedReq.dateCreated
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2.5 py-1 rounded text-[10px] font-semibold font-space tracking-wider uppercase border ${selectedReq.status === 'Resolved' ? 'border-electric-emerald/20 text-electric-emerald bg-electric-emerald/5' : 'border-amber-400/20 text-amber-400 bg-amber-400/5'}`,
                                                    children: selectedReq.status === 'Resolved' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಪರಿಹರಿಸಲಾಗಿದೆ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 281,
                                                                columnNumber: 60
                                                            }, this),
                                                            " / Resolved"
                                                        ]
                                                    }, void 0, true) : selectedReq.status === 'In Progress' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಪ್ರಗತಿಯಲ್ಲಿದೆ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 282,
                                                                columnNumber: 63
                                                            }, this),
                                                            " / In Progress"
                                                        ]
                                                    }, void 0, true) : selectedReq.status === 'Assigned' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ನಿಯೋಜಿಸಲಾಗಿದೆ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 283,
                                                                columnNumber: 60
                                                            }, this),
                                                            " / Assigned"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಸಲ್ಲಿಸಲಾಗಿದೆ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 284,
                                                                columnNumber: 24
                                                            }, this),
                                                            " / Submitted"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-zinc-500 uppercase tracking-widest block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಸಮಸ್ಯೆಯ ವಿವರಗಳು"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " / Issue Details (",
                                                                renderIssueType(selectedReq.issueType),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-zinc-300 text-xs leading-relaxed font-light",
                                                            children: selectedReq.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-zinc-500 uppercase tracking-widest block mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಲಗತ್ತುಗಳು"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " / Diagnostic Attachments"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedReq.attachments && selectedReq.attachments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: selectedReq.attachments.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: img,
                                                                    alt: "Attachment",
                                                                    className: "w-16 h-16 object-cover rounded border border-white/5"
                                                                }, idx, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-zinc-600 block",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-kannada",
                                                                    children: "ಯಾವುದೇ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಫೈಲ್‌ಗಳನ್ನು ಲಗತ್ತಿಸಲಾಗಿಲ್ಲ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " / No diagnostic files attached"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 307,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-zinc-900 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-space uppercase text-zinc-500 tracking-wider block mb-5 font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಲೈವ್ ಪ್ರಗತಿ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this),
                                                        " / Live Action Progress"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative pl-6 space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1.5 bottom-1.5 left-2 w-0.5 bg-zinc-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this),
                                                        getMilestones(selectedReq).map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `absolute -left-6 top-1 w-4.5 h-4.5 rounded-full border border-zinc-950 flex items-center justify-center z-10 ${step.done ? 'bg-electric-cyan text-black' : 'bg-zinc-900 text-zinc-600'}`,
                                                                        children: step.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 40
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 79
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-xs font-semibold block ${step.done ? 'text-white' : 'text-zinc-500'}`,
                                                                                children: step.step
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 333,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-[11px] block mt-0.5 ${step.done ? 'text-zinc-300' : 'text-zinc-600'}`,
                                                                                children: step.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 334,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-zinc-500 block mt-1 leading-normal font-light",
                                                                                children: step.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 335,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 325,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12 text-xs text-zinc-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada",
                                            children: "ಯಾವುದೇ ಸಕ್ರಿಯ ನಿರ್ವಹಣೆ ಟಿಕೆಟ್ ಆಯ್ಕೆ ಮಾಡಲಾಗಿಲ್ಲ. ಒಂದನ್ನು ನೋಂದಾಯಿಸಲು ಎಡಭಾಗದ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        " / No active maintenance ticket selected. Fill the left form to register one."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this),
                                activeReqs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-zinc-900 pt-6 mt-8 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-zinc-500 uppercase font-space tracking-widest block mb-2 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-kannada",
                                                    children: "ದಾಖಲಾದ ಟಿಕೆಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this),
                                                " / Lodged Ticket Dashboard"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRequest.jsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        activeReqs.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedReq(req),
                                                className: `p-3 rounded-xl border cursor-pointer flex justify-between items-center transition-all duration-300 ${selectedReq?.id === req.id ? 'bg-electric-cyan/5 border-electric-cyan' : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-space font-medium text-white block",
                                                                children: [
                                                                    req.customerName,
                                                                    " (",
                                                                    renderIssueType(req.issueType),
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 366,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[9px] text-zinc-500 mt-0.5 block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಸ್ಥಿತಿ:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " / Status: ",
                                                                    req.status === 'Resolved' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-kannada",
                                                                                children: "ಪರಿಹರಿಸಲಾಗಿದೆ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 368,
                                                                                columnNumber: 112
                                                                            }, this),
                                                                            " / Resolved"
                                                                        ]
                                                                    }, void 0, true) : req.status === 'In Progress' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-kannada",
                                                                                children: "ಪ್ರಗತಿಯಲ್ಲಿದೆ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 369,
                                                                                columnNumber: 59
                                                                            }, this),
                                                                            " / In Progress"
                                                                        ]
                                                                    }, void 0, true) : req.status === 'Assigned' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-kannada",
                                                                                children: "ನಿಯೋಜಿಸಲಾಗಿದೆ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 370,
                                                                                columnNumber: 56
                                                                            }, this),
                                                                            " / Assigned"
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-kannada",
                                                                                children: "ಸಲ್ಲಿಸಲಾಗಿದೆ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                                lineNumber: 371,
                                                                                columnNumber: 28
                                                                            }, this),
                                                                            " / Submitted"
                                                                        ]
                                                                    }, void 0, true)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4 text-zinc-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceRequest.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, req.id, true, {
                                                fileName: "[project]/src/components/ServiceRequest.jsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRequest.jsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRequest.jsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceRequest.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceRequest.jsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceRequest.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comparison$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Comparison.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Configurator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Configurator.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminDashboard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GallerySection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GallerySection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRequest$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRequest.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function App() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const [navVisible, setNavVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Password dialog states for secret admin portal access
    const [adminPasswordPrompt, setAdminPasswordPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adminPasswordInput, setAdminPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [adminPasswordError, setAdminPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent SSR hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Scroll logic: Hide nav on scroll down, reveal on scroll up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setNavVisible(false); // scrolling down
            } else {
                setNavVisible(true); // scrolling up
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        lastScrollY,
        mounted
    ]);
    const handleTabSwitch = (tab)=>{
        if (tab === 'configurator') {
            store.setActiveTab('home');
            setMobileMenuOpen(false);
            setTimeout(()=>{
                const el = document.getElementById('configurator-section');
                if (el) el.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
            return;
        }
        if (tab === 'admin') {
            setAdminPasswordPrompt(true);
            setAdminPasswordInput('');
            setAdminPasswordError(false);
            setMobileMenuOpen(false);
            return;
        }
        store.setActiveTab(tab);
        setMobileMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-obsidian-bg1"
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 71,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-obsidian-bg1 text-zinc-100 flex flex-col font-sans",
        children: [
            store.activeTab !== 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-[90%] z-50 rounded-2xl glass-panel px-6 py-4 flex items-center justify-between transition-all duration-500 ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleTabSwitch('admin'),
                        className: "flex items-center gap-2 cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-5 h-5 animate-spin-slow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-space font-medium text-md text-white tracking-widest uppercase",
                                children: "SURYA DRISHTI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6 text-[10px] font-space uppercase tracking-wider text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('home'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'home' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಮನೆ / Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'configurator' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಕಾನ್ಫಿಗರೇಟರ್ / Configurator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('service'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'service' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (store.activeTab !== 'home') {
                                        store.setActiveTab('home');
                                    }
                                    setTimeout(()=>{
                                        const el = document.getElementById('gallery-section');
                                        if (el) el.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    }, 100);
                                },
                                className: "hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide",
                                children: "ಉತ್ಪನ್ನಗಳು / Gallery"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabSwitch('configurator'),
                            className: "px-5 py-2.5 rounded-xl font-kannada text-[10px] uppercase font-semibold tracking-wider text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer",
                            children: [
                                "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 138,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(true),
                        className: "md:hidden p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 bg-zinc-950/70 backdrop-blur-md transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 right-0 w-80 h-full bg-obsidian-bg2 border-l border-zinc-900 p-8 flex flex-col justify-between transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center pb-6 border-b border-zinc-900 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada text-zinc-300 font-semibold uppercase tracking-wider text-xs",
                                            children: "ಮೆನು / Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "p-1 rounded bg-zinc-900 text-zinc-400 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6 text-sm font-kannada tracking-wide text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('home'),
                                            className: "text-left hover:text-white",
                                            children: "ಮನೆ / Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('configurator'),
                                            className: "text-left hover:text-white",
                                            children: "ಕಾನ್ಫಿಗರೇಟರ್ / Configurator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('service'),
                                            className: "text-left hover:text-white",
                                            children: "ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMobileMenuOpen(false);
                                                if (store.activeTab !== 'home') {
                                                    store.setActiveTab('home');
                                                }
                                                setTimeout(()=>{
                                                    const el = document.getElementById('gallery-section');
                                                    if (el) el.scrollIntoView({
                                                        behavior: 'smooth'
                                                    });
                                                }, 100);
                                            },
                                            className: "text-left hover:text-white",
                                            children: "ಉತ್ಪನ್ನಗಳು / Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: "w-full py-3.5 rounded-xl font-kannada text-[10px] font-semibold text-black bg-white tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5",
                                children: [
                                    "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 201,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    store.activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onNavigate: handleTabSwitch
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "configurator-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Configurator$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GallerySection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comparison$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    store.activeTab === 'service' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRequest$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 220,
                        columnNumber: 43
                    }, this),
                    store.activeTab === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 221,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80",
                children: store.toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-xl border flex items-center gap-3 backdrop-blur-md shadow-lg animate-slide-up ${toast.type === 'error' ? 'border-red-500/20 bg-red-950/60 text-red-200' : toast.type === 'warning' ? 'border-amber-500/20 bg-amber-950/60 text-amber-200' : toast.type === 'info' ? 'border-electric-sky/20 bg-zinc-950/60 text-electric-sky' : 'border-electric-emerald/20 bg-zinc-950/60 text-electric-emerald'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0",
                                children: toast.type === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this) : toast.type === 'warning' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this) : toast.type === 'info' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-4 h-4 text-electric-sky"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-4 h-4 text-electric-emerald"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 247,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow text-xs leading-normal font-medium",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>store.removeToast(toast.id),
                                className: "shrink-0 text-zinc-500 hover:text-white font-semibold text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-12 border-t border-zinc-900 bg-zinc-950/40 text-center text-xs text-zinc-500 font-space tracking-wider",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-4 h-4 text-electric-cyan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "SURYA DRISHTI CCTV INC. • SYSTEM CONFIGURATION SERVICE"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ALL CHANNELS SECURED VIA SUPABASE."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            adminPasswordPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAdminPasswordPrompt(false),
                            className: "absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-space font-medium text-white mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-kannada",
                                    children: "ನಿರ್ವಾಹಕರ ಲಾಗಿನ್"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                " / Admin Portal Access"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-500 mb-6 font-space",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-kannada",
                                    children: "ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ನಿರ್ವಾಹಕ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ನಮೂದಿಸಿ."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this),
                                " / Please enter the administrator password to proceed."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                if (adminPasswordInput === 'Tejas@2003') {
                                    setAdminPasswordPrompt(false);
                                    store.setActiveTab('admin');
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                } else {
                                    setAdminPasswordError(true);
                                }
                            },
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: adminPasswordInput,
                                            onChange: (e)=>{
                                                setAdminPasswordInput(e.target.value);
                                                setAdminPasswordError(false);
                                            },
                                            placeholder: "Enter password...",
                                            className: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric-cyan font-space",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        adminPasswordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-red-400 mt-1 block",
                                            children: "Invalid password. Please try again."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold font-space text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer",
                                    children: "Verify & Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 278,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0wdcmod._.js.map