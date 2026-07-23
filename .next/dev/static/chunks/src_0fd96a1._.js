(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/dbMock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const isBrowser = ("TURBOPACK compile-time value", "object") !== 'undefined';
const initializeDB = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Sync products, categories, rules, logs, and settings
    if (!localStorage.getItem('sd_products_pim_v2')) {
        localStorage.setItem('sd_products_pim_v2', JSON.stringify(SEED_PRODUCTS));
    } else {
        // Migration: Update existing products in local storage to use new local video files
        try {
            const stored = JSON.parse(localStorage.getItem('sd_products_pim_v2'));
            let modified = false;
            stored.forEach((p)=>{
                if (p.videoUrl && (p.videoUrl.includes('w3schools.com') || p.videoUrl.includes('movie.mp4') || p.videoUrl.includes('mov_bbb.mp4'))) {
                    p.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
                    modified = true;
                }
            });
            if (modified) {
                localStorage.setItem('sd_products_pim_v2', JSON.stringify(stored));
            }
        } catch (e) {}
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
            stored.forEach((g)=>{
                if (g.videoUrl && (g.videoUrl.includes('w3schools.com') || g.videoUrl.includes('movie.mp4') || g.videoUrl.includes('mov_bbb.mp4'))) {
                    g.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
                    g.videoUrl = Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4';
                    modified = true;
                }
            });
            if (modified) {
                localStorage.setItem('sd_gallery_v2', JSON.stringify(stored));
            }
        } catch (e) {}
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
const db = {
    // PRODUCTS CRUD
    getProducts: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_products_pim_v2')) || SEED_PRODUCTS;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_categories_v2')) || SEED_CATEGORIES;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_rules_v2')) || SEED_COMPATIBILITY_RULES;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_logs_v2')) || SEED_SYSTEM_LOGS;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_web_settings_v2')) || SEED_WEBSITE_SETTINGS;
    },
    saveWebSettings: (settings)=>{
        localStorage.setItem('sd_web_settings_v2', JSON.stringify(settings));
        db.writeLog('System', 'Website corporate contact settings updated.');
        return settings;
    },
    // GALLERY CRUD
    getGallery: ()=>{
        initializeDB();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_gallery_v2')) || SEED_GALLERY;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_orders_v2')) || [];
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_services_v2')) || SEED_SERVICE_REQUESTS;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_projects_v2')) || SEED_PROJECTS;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(localStorage.getItem('sd_settings')) || SEED_SETTINGS;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/pdfGenerator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/supabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://rklgqgplqcrnlvtajlcm.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbGdxZ3BscWNybmx2dGFqbGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NTM0MTMsImV4cCI6MjEwMDEyOTQxM30.zVt1G-Ioy872aga9PsQpbAi_qmDgwtRPKOeo7Xl8io0") || '';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/useConfiguratorStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfiguratorStore",
    ()=>useConfiguratorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-client] (ecmascript)");
;
;
const useConfiguratorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProducts();
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
        // Language setting: 'kn' (Bilingual Kannada + English), 'en' (English only)
        language: 'kn',
        setLanguage: (lang)=>set({
                language: lang
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
            const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProducts();
            const rules = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getRules();
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
                const saved = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveOrder(orderData);
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
                const saved = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveServiceRequest(requestData);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/apiService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiService",
    ()=>apiService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabaseClient.js [app-client] (ecmascript)");
;
;
const isBrowser = ("TURBOPACK compile-time value", "object") !== 'undefined';
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
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').order('name'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProducts());
    },
    saveProduct: async (product)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').upsert(product).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save product failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveProduct(product);
        }
    },
    deleteProduct: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete product failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].deleteProduct(id);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].duplicateProduct(id);
        }
    },
    // CATEGORIES
    getCategories: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').select('*').order('displayOrder'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getCategories());
    },
    saveCategory: async (category)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').upsert(category).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save category failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveCategory(category);
        }
    },
    deleteCategory: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete category failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].deleteCategory(id);
        }
    },
    // COMPATIBILITY RULES
    getRules: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('rules').select('*'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getRules());
    },
    saveRule: async (rule)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('rules').upsert(rule).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase save rule failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveRule(rule);
        }
    },
    deleteRule: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('rules').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete rule failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].deleteRule(id);
        }
    },
    // AUDIT LOGS
    getLogs: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('logs').select('*').order('timestamp', {
                ascending: false
            }).limit(50), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getLogs());
    },
    writeLog: async (type, message)=>{
        const payload = {
            id: 'log-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            timestamp: new Date().toISOString(),
            type,
            message
        };
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('logs').insert([
                payload
            ]).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase log failed, writing to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].writeLog(type, message);
        }
    },
    // WEBSITE SETTINGS
    getWebSettings: async ()=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').select('*').eq('id', 'global_settings');
            if (error || !data || data.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getWebSettings();
            }
            return data[0];
        } catch (err) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getWebSettings();
        }
    },
    saveWebSettings: async (settings)=>{
        try {
            const payload = {
                ...settings,
                id: 'global_settings'
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase settings update failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveWebSettings(settings);
        }
    },
    // ORDERS & QUOTATIONS
    getOrders: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('orders').select('*').order('date', {
                ascending: false
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getOrders());
    },
    saveOrder: async (order)=>{
        try {
            const orderId = order.id || 'SD-' + Math.floor(1000 + Math.random() * 9000);
            const payload = {
                ...order,
                id: orderId,
                date: order.date || new Date().toISOString().split('T')[0]
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('orders').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase order creation failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveOrder(order);
        }
    },
    deleteOrder: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('orders').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete order failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].deleteOrder(id);
        }
    },
    // SERVICE REQUESTS
    getServices: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('services').select('*').order('dateCreated', {
                ascending: false
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getServices());
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('services').upsert(payload).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase service request failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveServiceRequest(request);
        }
    },
    // GALLERY
    getGallery: async ()=>{
        return safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').select('*'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getGallery());
    },
    saveGalleryItem: async (item)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').upsert(item).select();
            if (error) throw error;
            return data[0];
        } catch (err) {
            console.warn('Supabase gallery item upload failed, saving to local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].saveGalleryItem(item);
        }
    },
    deleteGalleryItem: async (id)=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').delete().eq('id', id);
            if (error) throw error;
            return true;
        } catch (err) {
            console.warn('Supabase delete gallery item failed, deleting from local DB:', err.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].deleteGalleryItem(id);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getAnalytics();
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Comparison.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Configurator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Configurator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminDashboard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GallerySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GallerySection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRequest$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRequest.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
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
function App() {
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const [navVisible, setNavVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Password dialog states for secret admin portal access
    const [adminPasswordPrompt, setAdminPasswordPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adminPasswordInput, setAdminPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [adminPasswordError, setAdminPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent SSR hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setMounted(true);
        }
    }["App.useEffect"], []);
    // Scroll logic: Hide nav on scroll down, reveal on scroll up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (!mounted) return;
            const handleScroll = {
                "App.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setNavVisible(false); // scrolling down
                    } else {
                        setNavVisible(true); // scrolling up
                    }
                    setLastScrollY(currentScrollY);
                }
            }["App.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "App.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["App.useEffect"];
        }
    }["App.useEffect"], [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-obsidian-bg1"
        }, void 0, false, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 71,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-obsidian-bg1 text-zinc-100 flex flex-col font-sans",
        children: [
            store.activeTab !== 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-[90%] z-50 rounded-2xl glass-panel px-6 py-4 flex items-center justify-between transition-all duration-500 ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleTabSwitch('admin'),
                        className: "flex items-center gap-2 cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6 text-[10px] font-space uppercase tracking-wider text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('home'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'home' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಮನೆ / Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'configurator' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಕಾನ್ಫಿಗರೇಟರ್ / Configurator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('service'),
                                className: `hover:text-white transition-colors py-1 font-kannada text-[10px] tracking-wide ${store.activeTab === 'service' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: "ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabSwitch('configurator'),
                            className: "px-5 py-2.5 rounded-xl font-kannada text-[10px] uppercase font-semibold tracking-wider text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer",
                            children: [
                                "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(true),
                        className: "md:hidden p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 bg-zinc-950/70 backdrop-blur-md transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 right-0 w-80 h-full bg-obsidian-bg2 border-l border-zinc-900 p-8 flex flex-col justify-between transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center pb-6 border-b border-zinc-900 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada text-zinc-300 font-semibold uppercase tracking-wider text-xs",
                                            children: "ಮೆನು / Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "p-1 rounded bg-zinc-900 text-zinc-400 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6 text-sm font-kannada tracking-wide text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('home'),
                                            className: "text-left hover:text-white",
                                            children: "ಮನೆ / Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('configurator'),
                                            className: "text-left hover:text-white",
                                            children: "ಕಾನ್ಫಿಗರೇಟರ್ / Configurator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('service'),
                                            className: "text-left hover:text-white",
                                            children: "ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: "w-full py-3.5 rounded-xl font-kannada text-[10px] font-semibold text-black bg-white tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5",
                                children: [
                                    "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    store.activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onNavigate: handleTabSwitch
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "configurator-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Configurator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GallerySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    store.activeTab === 'service' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRequest$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 220,
                        columnNumber: 43
                    }, this),
                    store.activeTab === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80",
                children: store.toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-xl border flex items-center gap-3 backdrop-blur-md shadow-lg animate-slide-up ${toast.type === 'error' ? 'border-red-500/20 bg-red-950/60 text-red-200' : toast.type === 'warning' ? 'border-amber-500/20 bg-amber-950/60 text-amber-200' : toast.type === 'info' ? 'border-electric-sky/20 bg-zinc-950/60 text-electric-sky' : 'border-electric-emerald/20 bg-zinc-950/60 text-electric-emerald'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0",
                                children: toast.type === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this) : toast.type === 'warning' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this) : toast.type === 'info' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-4 h-4 text-electric-sky"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow text-xs leading-normal font-medium",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-12 border-t border-zinc-900 bg-zinc-950/40 text-center text-xs text-zinc-500 font-space tracking-wider",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-4 h-4 text-electric-cyan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            adminPasswordPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAdminPasswordPrompt(false),
                            className: "absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-space font-medium text-white mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-500 mb-6 font-space",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        adminPasswordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(App, "r6uIDrL62sdPYzLKgHlM0AIZ0d8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfiguratorStore"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0fd96a1._.js.map