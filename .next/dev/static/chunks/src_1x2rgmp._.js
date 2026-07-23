(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/dbMock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "getCameraFeatures",
    ()=>getCameraFeatures
]);
// Local Database simulation using LocalStorage with expanded datasets for enterprise PIM and ERP.
// Integrates PIM details, categories, custom compatibility rules, order pipelines, service requests, and website settings.
const SEED_PRODUCTS = [
    // SOLAR CAMERAS (ONLY 2 NEW PRODUCTS)
    {
        id: 'sol-cam-6',
        type: 'solar-camera',
        sku: 'SD-CAM-PTZ06',
        category: 'Solar Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-S6',
        name: 'thinkwill smart 4G PT linkage + zoom camera 10mp',
        shortDescription: '4G PT linkage with zoom camera 5mp + 5mp',
        description: 'Dual-lens 4G PT linkage with zoom camera 5mp + 5mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and siren with light and voice.',
        keyFeatures: '4G PT Linkage, 5MP + 5MP Dual Lens Zoom, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with light and voice',
        technicalSpecs: 'Resolution: 10MP (5MP + 5MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren light & voice',
        highlights: 'Double Lens Linkage Zoom, VEESKY Cloud Integration, active warning strobe',
        applications: 'Off-grid farms, estates, cattle sheds, private properties',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Pole or wall arm bracket included.',
        price: 699,
        discountPrice: 649,
        offerPrice: 629,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784796507943.jpg',
        videoUrl: '/videos/demo1.mp4',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 23,
        lowStockThreshold: 5,
        lensCount: 2
    },
    {
        id: 'sol-cam-7',
        type: 'solar-camera',
        sku: 'SD-CAM-PTZ07',
        category: 'Solar Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-S7',
        name: 'thinkwill smart 4G PT mini camera with audio',
        shortDescription: '4G PT linkage with zoom camera 3mp',
        description: 'Compact 4G PT mini camera with audio, 3mp resolution, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Mini Design, 3MP HD Lens, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 3MP, Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Compact Outdoor Enclosure, VEESKY Cloud integration, low profile antennas',
        applications: 'Residential porches, private gates, farm boundary checkpoints',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Wall mount base and hardware included.',
        price: 549,
        discountPrice: 499,
        offerPrice: 479,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784796864746.jpg',
        videoUrl: '/videos/demo2.mp4',
        status: 'Active',
        stockQuantity: 30,
        availableStock: 28,
        lowStockThreshold: 5,
        lensCount: 1
    },
    {
        id: 'sol-cam-8',
        type: 'solar-camera',
        sku: 'SD-CAM-PTZ08',
        category: 'Solar Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-S8',
        name: 'thinkwill smart 4G PT Linkage camera with audio',
        shortDescription: '4G PT linkage with zoom camera 3mp + 3mp',
        description: '4G PT linkage with zoom camera 3mp + 3mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3MP + 3MP Dual Lens Zoom, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 6MP (3MP + 3MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Double Lens Linkage Zoom, VEESKY Cloud integration',
        applications: 'Farms, yards, entrances',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Pole or wall arm bracket included.',
        price: 649,
        discountPrice: 599,
        offerPrice: 579,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817123415.png',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 23,
        lowStockThreshold: 5,
        lensCount: 2
    },
    {
        id: 'sol-cam-9',
        type: 'solar-camera',
        sku: 'SD-CAM-PTZ09',
        category: 'Solar Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-S9',
        name: 'thinkwill smart 4G PT Triple Image camera',
        shortDescription: '4G PT linkage with Audio 6mp + 6mp + 6mp',
        description: 'Triple-lens 4G PT linkage with Audio 6mp + 6mp + 6mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3x 6MP Triple Lens, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 18MP (6MP + 6MP + 6MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Triple Lens Linkage, VEESKY Cloud integration, multiple voice siren',
        applications: 'Farms, yards, large estates, borders',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Pole or wall arm bracket included.',
        price: 849,
        discountPrice: 799,
        offerPrice: 779,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817310915.jpg',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 23,
        lowStockThreshold: 5,
        lensCount: 3
    },
    {
        id: 'sol-cam-10',
        type: 'solar-camera',
        sku: 'SD-CAM-PTZ10',
        category: 'Solar Cameras',
        brand: 'Consistent',
        modelNumber: 'CST-PTZ-S10',
        name: 'Consistent 4G Dual-Linkage 3mp + 3mp PT Camera',
        shortDescription: '4G Dual-Linkage 3mp + 3mp PT Camera',
        description: 'Consistent 4G Dual-Linkage 3mp + 3mp PT Camera, TF card up to 256gb, supporting Consistent Smart mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3MP + 3MP Dual Lens Zoom, Consistent Smart Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 6MP (3MP + 3MP), Storage: TF card up to 256GB, App: Consistent Smart, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Double Lens Linkage Zoom, Consistent Smart Cloud integration, multiple voice siren',
        applications: 'Farms, yards, large estates, borders',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Pole or wall arm bracket included.',
        price: 549,
        discountPrice: 499,
        offerPrice: 479,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817467778.jpg',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 23,
        lowStockThreshold: 5,
        lensCount: 2
    },
    // ELECTRIC CAMERAS (ONLY 2 NEW PRODUCTS)
    {
        id: 'elec-ip-3',
        type: 'electric-camera',
        sku: 'HD-IP-BUL03',
        category: 'IP Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-E6',
        name: 'thinkwill smart 4G PT linkage + zoom camera 10mp',
        shortDescription: '4G PT linkage with zoom camera 5mp + 5mp',
        description: 'Dual-lens 4G PT linkage with zoom camera 5mp + 5mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and siren with light and voice.',
        keyFeatures: '4G PT Linkage, 5MP + 5MP Dual Lens Zoom, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with light and voice',
        technicalSpecs: 'Resolution: 10MP (5MP + 5MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren light & voice',
        highlights: 'Double Lens Linkage Zoom, VEESKY Cloud Integration, active warning strobe',
        applications: 'Commercial blocks, warehouses, yards, corporate entrance gates',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Surface junction box or wall bracket mount.',
        price: 349,
        discountPrice: 319,
        offerPrice: 299,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784796507943.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 18,
        lowStockThreshold: 5
    },
    {
        id: 'elec-ip-4',
        type: 'electric-camera',
        sku: 'HD-IP-BUL04',
        category: 'IP Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-E7',
        name: 'thinkwill smart 4G PT mini camera with audio',
        shortDescription: '4G PT linkage with zoom camera 3mp',
        description: 'Compact 4G PT mini camera with audio, 3mp resolution, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Mini Design, 3MP HD Lens, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 3MP, Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Compact Outdoor Enclosure, VEESKY Cloud integration, low profile antennas',
        applications: 'Small offices, warehouse corridors, backyard gates',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Junction box or wall mount brackets.',
        price: 279,
        discountPrice: 249,
        offerPrice: 229,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784796864746.jpg',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 23,
        lowStockThreshold: 5
    },
    {
        id: 'elec-ip-5',
        type: 'electric-camera',
        sku: 'HD-IP-BUL05',
        category: 'IP Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-E8',
        name: 'thinkwill smart 4G PT Linkage camera with audio',
        shortDescription: '4G PT linkage with zoom camera 3mp + 3mp',
        description: '4G PT linkage with zoom camera 3mp + 3mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3MP + 3MP Dual Lens Zoom, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 6MP (3MP + 3MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Double Lens Linkage Zoom, VEESKY Cloud integration',
        applications: 'Commercial blocks, warehouses, yards, corporate entrance gates',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Surface junction box or wall bracket mount.',
        price: 319,
        discountPrice: 289,
        offerPrice: 269,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817123415.png',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 18,
        lowStockThreshold: 5
    },
    {
        id: 'elec-ip-6',
        type: 'electric-camera',
        sku: 'HD-IP-BUL06',
        category: 'IP Cameras',
        brand: 'THINKWILL',
        modelNumber: 'TW-PTZ-E9',
        name: 'thinkwill smart 4G PT Triple Image camera',
        shortDescription: '4G PT linkage with Audio 6mp + 6mp + 6mp',
        description: 'Triple-lens 4G PT linkage with Audio 6mp + 6mp + 6mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3x 6MP Triple Lens, VEESKY Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 18MP (6MP + 6MP + 6MP), Storage: TF card up to 256GB, App: VEESKY, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Triple Lens Linkage, VEESKY Cloud integration, multiple voice siren',
        applications: 'Commercial blocks, warehouses, yards, corporate entrance gates',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Surface junction box or wall bracket mount.',
        price: 419,
        discountPrice: 389,
        offerPrice: 369,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817310915.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 18,
        lowStockThreshold: 5
    },
    {
        id: 'elec-ip-7',
        type: 'electric-camera',
        sku: 'HD-IP-BUL07',
        category: 'IP Cameras',
        brand: 'Consistent',
        modelNumber: 'CST-PTZ-E10',
        name: 'Consistent 4G Dual-Linkage 3mp + 3mp PT Camera',
        shortDescription: '4G Dual-Linkage 3mp + 3mp PT Camera',
        description: 'Consistent 4G Dual-Linkage 3mp + 3mp PT Camera, TF card up to 256gb, supporting Consistent Smart mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
        keyFeatures: '4G PT Linkage, 3MP + 3MP Dual Lens Zoom, Consistent Smart Mobile App, 2-Way Audio, Motion Detection for human/vehicle/animal, Siren with multiple voices',
        technicalSpecs: 'Resolution: 6MP (3MP + 3MP), Storage: TF card up to 256GB, App: Consistent Smart, Motion: Human/Vehicle/Animal, Alarm: Siren multiple voices',
        highlights: 'Double Lens Linkage Zoom, Consistent Smart Cloud integration, multiple voice siren',
        applications: 'Commercial blocks, warehouses, yards, corporate entrance gates',
        warrantyDetails: '5 Years Warranty',
        installationInfo: 'Surface junction box or wall bracket mount.',
        price: 349,
        discountPrice: 319,
        offerPrice: 299,
        gstPercentage: 18,
        installationCharges: 99,
        deliveryCharges: 15,
        image: '/images/media__1784817467778.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 18,
        lowStockThreshold: 5
    },
    // BATTERIES
    // IP CAMERAS (restored)
    {
        id: 'ip-cam-1',
        type: 'ip-camera',
        sku: 'IP-CAM-001',
        category: 'IP Cameras',
        brand: 'SURYA',
        modelNumber: 'SC-IP-1',
        name: 'surya ip camera basic 2mp',
        shortDescription: '2MP IP camera with night vision',
        description: 'Standard IP surveillance camera, 2MP resolution, night vision, supports mobile app, weatherproof.',
        keyFeatures: '2MP, Night Vision, Weatherproof, Mobile App',
        technicalSpecs: 'Resolution: 2MP, Storage: microSD up to 128GB, App: SURYA App',
        highlights: 'Compact design, easy installation',
        applications: 'Indoor offices, small shops',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Wall mount bracket included.',
        price: 199,
        discountPrice: 179,
        offerPrice: 169,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/cam1.jpg',
        videoUrl: '/videos/demo1.mp4',
        status: 'Active',
        stockQuantity: 15,
        availableStock: 13,
        lowStockThreshold: 3,
        lensCount: 1
    },
    {
        id: 'ip-cam-2',
        type: 'ip-camera',
        sku: 'HIK-IP-BUL-01',
        category: 'IP Cameras',
        brand: 'HIKVISION',
        modelNumber: 'HIK-BC-24',
        name: 'Hikvision Bullet IP Camera',
        shortDescription: 'High resolution network bullet camera',
        description: 'High resolution network bullet camera with night vision and mobile app support.',
        keyFeatures: 'Night Vision, Mobile App Support, Bullet Design',
        technicalSpecs: 'Resolution: 4MP, Storage: up to 256GB',
        highlights: 'Weatherproof exterior, extended IR',
        applications: 'Outdoor perimeter, driveways',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Wall mount included.',
        price: 299,
        discountPrice: 269,
        offerPrice: 249,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/media__1784818962893.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 18,
        lowStockThreshold: 5,
        lensCount: 1
    },
    {
        id: 'ip-cam-3',
        type: 'ip-camera',
        sku: 'HIK-DVR-KIT-08',
        category: 'IP Cameras',
        brand: 'HIKVISION',
        modelNumber: 'HIK-KIT-08',
        name: 'Hikvision 8-Camera DVR Kit',
        shortDescription: 'Complete 8-channel DVR security system',
        description: 'Complete 8-channel DVR security system with bullet and dome cameras.',
        keyFeatures: '8 Cameras, DVR included, Wiring included',
        technicalSpecs: 'Channels: 8, Storage: 2TB HDD included',
        highlights: 'Complete bundle, high definition viewing',
        applications: 'Home surveillance, medium retail',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Wiring and setup required.',
        price: 1899,
        discountPrice: 1799,
        offerPrice: 1699,
        gstPercentage: 18,
        installationCharges: 299,
        deliveryCharges: 25,
        image: '/images/media__1784818962921.jpg',
        status: 'Active',
        stockQuantity: 10,
        availableStock: 8,
        lowStockThreshold: 2,
        lensCount: 8
    },
    {
        id: 'ip-cam-4',
        type: 'ip-camera',
        sku: 'CP-IP-DOM-01',
        category: 'IP Cameras',
        brand: 'CP PLUS',
        modelNumber: 'CP-DOM-IP1',
        name: 'CP Plus Dome IP Camera',
        shortDescription: 'High resolution dome IP camera',
        description: 'High resolution dome IP camera for indoor and outdoor surveillance.',
        keyFeatures: 'Wide Angle, PoE Support, Compact Design',
        technicalSpecs: 'Resolution: 3MP, Storage: up to 128GB',
        highlights: 'Vandal resistant, crisp imaging',
        applications: 'Offices, lobbies, corridors',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Ceiling mount included.',
        price: 249,
        discountPrice: 219,
        offerPrice: 199,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/media__1784818963121.jpg',
        status: 'Active',
        stockQuantity: 25,
        availableStock: 22,
        lowStockThreshold: 5,
        lensCount: 1
    },
    // IR CAMERAS (restored)
    {
        id: 'ir-cam-2',
        type: 'ir-camera',
        sku: 'CP-IR-BUL-02',
        category: 'IR Cameras',
        brand: 'CP PLUS',
        modelNumber: 'CP-IR-B2',
        name: 'CP Plus Bullet IR Camera',
        shortDescription: 'Night vision IR bullet camera',
        description: 'Night vision IR bullet camera with long range detection.',
        keyFeatures: 'Long Range IR, Weatherproof, Motion Detection',
        technicalSpecs: 'Resolution: 2MP, IR Range: 30m',
        highlights: 'Superior night vision, robust casing',
        applications: 'Parking lots, fences, dark alleys',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Wall mount bracket included.',
        price: 199,
        discountPrice: 179,
        offerPrice: 159,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/media__1784818962908.jpg',
        status: 'Active',
        stockQuantity: 30,
        availableStock: 28,
        lowStockThreshold: 5,
        lensCount: 1
    },
    {
        id: 'ir-cam-3',
        type: 'ir-camera',
        sku: 'HIK-IR-DOM-03',
        category: 'IR Cameras',
        brand: 'HIKVISION',
        modelNumber: 'HIK-IR-D3',
        name: 'Hikvision Dome IR Camera',
        shortDescription: 'Infrared dome camera for low light',
        description: 'Infrared dome camera for exceptional low light performance.',
        keyFeatures: 'EXIR Night Vision, Wide Dynamic Range',
        technicalSpecs: 'Resolution: 4MP, IR Range: 20m',
        highlights: 'Discrete design, clear night viewing',
        applications: 'Retail stores, banks, entryways',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Ceiling mount bracket included.',
        price: 279,
        discountPrice: 249,
        offerPrice: 229,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/media__1784819015020.jpg',
        status: 'Active',
        stockQuantity: 20,
        availableStock: 15,
        lowStockThreshold: 3,
        lensCount: 1
    },
    {
        id: 'ir-cam-4',
        type: 'ir-camera',
        sku: 'CP-IR-BUL-03',
        category: 'IR Cameras',
        brand: 'CP PLUS',
        modelNumber: 'CP-IR-B3',
        name: 'CP Plus Bullet IR Camera',
        shortDescription: 'Infrared bullet camera for reliable outdoor security',
        description: 'Infrared bullet camera for reliable outdoor security.',
        keyFeatures: 'Long Range IR, Weatherproof, Motion Detection',
        technicalSpecs: 'Resolution: 2MP, IR Range: 30m',
        highlights: 'Superior night vision, robust casing',
        applications: 'Parking lots, fences, dark alleys',
        warrantyDetails: '2 Years Warranty',
        installationInfo: 'Wall mount bracket included.',
        price: 199,
        discountPrice: 179,
        offerPrice: 159,
        gstPercentage: 18,
        installationCharges: 49,
        deliveryCharges: 10,
        image: '/images/media__1784819014939.jpg',
        status: 'Active',
        stockQuantity: 30,
        availableStock: 28,
        lowStockThreshold: 5,
        lensCount: 1
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
if (isBrowser && !localStorage.getItem('sd_products_pim_v8_reset_done')) {
    localStorage.removeItem('sd_products_pim_v2');
    localStorage.setItem('sd_products_pim_v8_reset_done', 'true');
}
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
const getCameraFeatures = (camera)=>{
    if (!camera) return {};
    const name = camera.name || '';
    if (name.includes('mini camera') || name.includes('mini') || name.includes('Mini')) {
        return {
            nightVision: 'Color Night Vision (Up to 30m)',
            zoom: '3MP Linkage Zoom',
            humanDetection: 'Human, Vehicle & Animal Tracking',
            motionDetection: 'Multiple Voice Custom Siren',
            twoWayAudio: 'Two-Way Talk VEESKY Communication',
            storage: 'SD Card up to 256GB',
            warranty: '5 Years'
        };
    }
    if (name.includes('linkage + zoom') || name.includes('PT linkage + zoom') || name.includes('Linkage + Zoom') || name.includes('linkage')) {
        return {
            nightVision: 'Color Night Vision & Warning Strobe',
            zoom: '5MP + 5MP Linkage Zoom',
            humanDetection: 'Human, Vehicle & Animal Tracking',
            motionDetection: 'Active Siren with Light & Voice',
            twoWayAudio: 'Two-Way VEESKY App Audio',
            storage: 'SD Card up to 256GB',
            warranty: '5 Years'
        };
    }
    if (name.includes('Strobe Siren') || name.includes('Warning Dome')) {
        return {
            nightVision: 'Color Night Vision (Up to 50m)',
            zoom: '4x Digital Zoom',
            humanDetection: 'AI Human Tracking & Lock',
            motionDetection: 'Radar Motion Scan (120° coverage)',
            twoWayAudio: 'Two-Way Audio with Speaker Alert',
            storage: 'SD Card up to 256GB / Cloud Sync',
            warranty: '5 Years'
        };
    }
    if (name.includes('Dual-Lens') || name.includes('Dual Lens') || name.includes('THINKWILL Dual-Lens')) {
        return {
            nightVision: 'Starlight Laser (Up to 40m)',
            zoom: '4x Optical Zoom',
            humanDetection: 'Dual-Lens Target Tracking',
            motionDetection: 'Zone PIR Heat Sensing',
            twoWayAudio: 'Full Duplex Intercom (Noise Cancelling)',
            storage: 'SD Card up to 256GB',
            warranty: '5 Years'
        };
    }
    if (name.includes('Telemetry') || name.includes('Consistent Smart')) {
        return {
            nightVision: 'Infrared Black & White (Up to 30m)',
            zoom: '2x Digital Zoom',
            humanDetection: 'Standard Pixel Motion Tracking',
            motionDetection: 'Standard Pixel Motion Analysis',
            twoWayAudio: 'Integrated Mic and Internal Speaker',
            storage: 'SD Card up to 128GB',
            warranty: '3 Years'
        };
    }
    if (name.includes('Single-Lens') || name.includes('Classic Dome') || name.includes('THINKWILL Single-Lens')) {
        return {
            nightVision: 'Color Night Vision (Up to 30m)',
            zoom: '4x Optical Zoom',
            humanDetection: 'Intrusion Line Crossing AI',
            motionDetection: 'Advanced Thermal Motion Sweep',
            twoWayAudio: 'Mic and High-Decibel Speaker Output',
            storage: 'SD Card up to 256GB / Onboard NAS',
            warranty: '5 Years'
        };
    }
    if (name.includes('Triple-Lens') || name.includes('Panoramic Stand') || name.includes('THINKWILL Triple-Lens')) {
        return {
            nightVision: 'Color Night Vision (Up to 80m)',
            zoom: '16x Hybrid Zoom',
            humanDetection: 'Coordinated Co-tracking Triple Pods',
            motionDetection: 'Radar Sweep & Perimeter Defense',
            twoWayAudio: 'Active Acoustic Warning Shield',
            storage: 'Dual MicroSD Slot (Up to 512GB)',
            warranty: '7 Years'
        };
    }
    return {
        nightVision: 'N/A',
        zoom: 'N/A',
        humanDetection: 'N/A',
        motionDetection: 'N/A',
        twoWayAudio: 'N/A',
        storage: 'N/A',
        warranty: 'N/A'
    };
};
initializeDB();
const db = {
    // PRODUCTS CRUD
    getProducts: ()=>{
        initializeDB();
        const products = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : JSON.parse(localStorage.getItem('sd_products_pim_v2')) || SEED_PRODUCTS;
        return products.map((p)=>{
            if (p.type === 'solar-camera') {
                return {
                    ...p,
                    features: getCameraFeatures(p)
                };
            }
            return p;
        });
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
"[project]/src/utils/translate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>t,
    "tStr",
    ()=>tStr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const t = (text, language = 'kn')=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        if (language === 'en') {
            return en;
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: kn
                    }, void 0, false, {
                        fileName: "[project]/src/utils/translate.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-500 font-light mx-1",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/utils/translate.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: en
                    }, void 0, false, {
                        fileName: "[project]/src/utils/translate.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        }
    }
    return text;
};
const tStr = (text, language = 'kn')=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return language === 'en' ? en : `${kn} / ${en}`;
    }
    return text;
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
        language: 'en',
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
        const data = await safeQuery(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').order('name'), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProducts());
        return (data || []).map((p)=>{
            if (p.type === 'solar-camera' && !p.features) {
                return {
                    ...p,
                    features: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCameraFeatures"])(p)
                };
            }
            return p;
        });
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/translate.jsx [app-client] (ecmascript)");
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
            lineNumber: 72,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative min-h-screen bg-obsidian-bg1 text-zinc-100 flex flex-col ${store.language === 'en' ? 'font-sans' : 'font-kannada'}`,
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
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-space font-medium text-md text-white tracking-widest uppercase",
                                children: "SURYA DRISHTI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6 text-[10px] font-space uppercase tracking-wider text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('home'),
                                className: `hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'home' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಮನೆ / Home', store.language)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: `hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'configurator' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಕಾನ್ಫಿಗರೇಟರ್ / Configurator', store.language)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('service'),
                                className: `hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'service' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk', store.language)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 111,
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
                                className: "hover:text-white transition-colors py-1 tracking-wide",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಉತ್ಪನ್ನಗಳು / Gallery', store.language)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>store.setLanguage(store.language === 'kn' ? 'en' : 'kn'),
                                className: "px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 text-[9px] font-space tracking-wider text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: store.language === 'kn' ? 'text-electric-cyan font-bold font-kannada text-[10px]' : 'text-zinc-500 font-kannada text-[10px]',
                                        children: "ಕನ್ನಡ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-700",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: store.language === 'en' ? 'text-electric-cyan font-bold' : 'text-zinc-500',
                                        children: "ENG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: "px-5 py-2.5 rounded-xl text-[10px] uppercase font-semibold tracking-wider text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote', store.language),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 148,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>store.setLanguage(store.language === 'kn' ? 'en' : 'kn'),
                                className: "px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/60 text-[8px] font-space tracking-wider text-zinc-300 transition-all flex items-center gap-1 cursor-pointer uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: store.language === 'kn' ? 'text-electric-cyan font-bold font-kannada text-[9px]' : 'text-zinc-500 font-kannada text-[9px]',
                                        children: "ಕನ್ನಡ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-700",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: store.language === 'en' ? 'text-electric-cyan font-bold' : 'text-zinc-500',
                                        children: "ENG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(true),
                                className: "p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 80,
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
                                            className: "text-zinc-300 font-semibold uppercase tracking-wider text-xs",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("ಮೆನು / Menu", store.language)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "p-1 rounded bg-zinc-900 text-zinc-400 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.jsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6 text-sm tracking-wide text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('home'),
                                            className: "text-left hover:text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಮನೆ / Home', store.language)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('configurator'),
                                            className: "text-left hover:text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಕಾನ್ಫಿಗರೇಟರ್ / Configurator', store.language)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabSwitch('service'),
                                            className: "text-left hover:text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk', store.language)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 198,
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
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಉತ್ಪನ್ನಗಳು / Gallery', store.language)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabSwitch('configurator'),
                                className: "w-full py-3.5 rounded-xl text-[10px] font-semibold text-black bg-white tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])('ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote', store.language),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 222,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 174,
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
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "configurator-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Configurator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GallerySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    store.activeTab === 'service' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRequest$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 241,
                        columnNumber: 43
                    }, this),
                    store.activeTab === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 242,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 229,
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
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this) : toast.type === 'warning' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this) : toast.type === 'info' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    className: "w-4 h-4 text-electric-sky"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-4 h-4 text-electric-emerald"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow text-xs leading-normal font-medium",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>store.removeToast(toast.id),
                                className: "shrink-0 text-zinc-500 hover:text-white font-semibold text-xs",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 246,
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
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "SURYA DRISHTI CCTV INC. • SYSTEM CONFIGURATION SERVICE"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 287,
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
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 285,
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
                                lineNumber: 305,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-space font-medium text-white mb-4",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("ನಿರ್ವಾಹಕರ ಲಾಗಿನ್ / Admin Portal Access", store.language)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-500 mb-6 font-space",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$translate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ನಿರ್ವಾಹಕ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ನಮೂದಿಸಿ. / Please enter the administrator password to proceed.", store.language)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 312,
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
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        adminPasswordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-red-400 mt-1 block",
                                            children: "Invalid password. Please try again."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.jsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold font-space text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer",
                                    children: "Verify & Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 299,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 76,
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

//# sourceMappingURL=src_1x2rgmp._.js.map