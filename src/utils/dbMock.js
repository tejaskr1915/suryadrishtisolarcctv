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

if (isBrowser && !localStorage.getItem('sd_products_pim_v8_reset_done')) {
  localStorage.removeItem('sd_products_pim_v2');
  localStorage.setItem('sd_products_pim_v8_reset_done', 'true');
}

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

export const getCameraFeatures = (camera) => {
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

export const db = {
  // PRODUCTS CRUD
  getProducts: () => {
    initializeDB();
    const products = !isBrowser ? SEED_PRODUCTS : (JSON.parse(localStorage.getItem('sd_products_pim_v2')) || SEED_PRODUCTS);
    return products.map(p => {
      if (p.type === 'solar-camera') {
        return {
          ...p,
          features: getCameraFeatures(p)
        };
      }
      return p;
    });
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
