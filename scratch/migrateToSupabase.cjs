/**
 * Automated Supabase Migrator & Database/Storage Seeder
 * 
 * Run script:
 * node scratch/migrateToSupabase.cjs
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split(/\r?\n/).forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SEED_CATEGORIES = [
  { id: 'solar-cam', name: 'Solar Cameras', displayOrder: 1, active: true },
  { id: 'ip-cam', name: 'IP Series', displayOrder: 2, active: true },
  { id: 'elec-cam', name: 'Electric Series', displayOrder: 3, active: true },
  { id: 'ir-cam', name: 'IR Series', displayOrder: 4, active: true }
];

const SEED_PRODUCTS = [
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
    image: 'cam1.jpg',
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
    image: 'cam2.jpg',
    videoUrl: '/videos/demo2.mp4',
    status: 'Active',
    stockQuantity: 18,
    availableStock: 14,
    lowStockThreshold: 5,
    lensCount: 2
  },
  {
    id: 'sol-cam-3',
    type: 'solar-camera',
    sku: 'SD-CAM-PTZ03',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-PTZ-S3',
    name: 'THINKWILL Triple-Lens Stand',
    shortDescription: 'Large outdoor warning camera with three lenses, starlight sensor, and solar bracket.',
    description: 'Ultra-HD solar warning CCTV rig that combines wide-angle panoramic coverage with telephoto optical zoom surveillance for zero blind spots.',
    keyFeatures: 'Triple Lens Matrix, 10x Optical Zoom, Dual Warning Flashlights, Starlight Low-lux Night Vision',
    technicalSpecs: 'Resolution: 6MP, Night Vision: 80m Starlight Color, Zoom: 10x Hybrid, Audio: 5W Two-way Speaker',
    highlights: 'Active Warning Horn, Heavy Duty Metal Bracket, Multi-angle Solar Panel Mounting',
    applications: 'High-security Warehouses, Borders, Open Meadows, Quarries',
    warrantyDetails: '5 Years Replacement Warranty',
    installationInfo: 'Requires solar tower frame or reinforced cylindrical pole mount.',
    price: 799,
    discountPrice: 749,
    offerPrice: 699,
    gstPercentage: 18,
    installationCharges: 149,
    deliveryCharges: 25,
    image: 'cam5.jpg',
    videoUrl: '/videos/demo1.mp4',
    status: 'Active',
    stockQuantity: 4,
    availableStock: 4,
    lowStockThreshold: 5,
    lensCount: 3
  },
  {
    id: 'sol-cam-4',
    type: 'solar-camera',
    sku: 'SD-CAM-PTZ04',
    category: 'Solar Cameras',
    brand: 'Surya Drishti',
    modelNumber: 'SD-PTZ-S4',
    name: 'Outdoor Warning Dome S4',
    shortDescription: 'Bullet warning style dome with high-gain antennas and laser active warning strobe.',
    description: 'Robust surveillance dome featuring high-range LTE connectivity, red strobe lights, high sensitivity voice recording, and long-range radar sweep.',
    keyFeatures: 'Strobe Flash Warning, High-gain Antennas, Radar-triggered Alarm, IP67 Waterproofing',
    technicalSpecs: 'Resolution: 2K, Night Vision: 35m Infrared, Audio: Built-in speaker, Connection: 4G LTE/WiFi',
    highlights: 'Pulsing Warning LED ring, Cold-resistant Battery Enclosure, Vandal-proof casing',
    applications: 'Remote Outposts, Fisheries, Border Fences, Telecom Tower Sites',
    warrantyDetails: '5 Years Replacement Warranty',
    installationInfo: 'Mountable on walls or brackets using standard M6 masonry fasteners.',
    price: 549,
    discountPrice: 499,
    offerPrice: 489,
    gstPercentage: 18,
    installationCharges: 99,
    deliveryCharges: 15,
    image: 'cam3.jpg',
    videoUrl: '/videos/demo2.mp4',
    status: 'Active',
    stockQuantity: 25,
    availableStock: 22,
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
    name: 'Apex Warning PTZ Dome',
    shortDescription: 'Large premium high-speed PTZ dome camera with active siren and warning strobes.',
    description: 'Our top-tier solar surveillance unit. High-speed pan-tilt motor with auto-tracking sweeps, starlight warning strobes, and double antennas for remote locations.',
    keyFeatures: '360° Pan Tilt Sweep, Auto Tracking Lenses, Dual LED Floodlights, Active Siren Horn',
    technicalSpecs: 'Resolution: 4K UHD, Night Vision: 60m Color, Zoom: 20x Digital, Compression: H.265+',
    highlights: 'Industrial Pan-Tilt Motor, Deep Learning Human Filter, High-gain WiFi Antennas',
    applications: 'High Value Farms, Commercial Warehouses, Industrial Yards',
    warrantyDetails: '5 Years Replacement Warranty',
    installationInfo: 'Comes with heavy duty wall mount arm adapter.',
    price: 899,
    discountPrice: 829,
    offerPrice: 799,
    gstPercentage: 18,
    installationCharges: 149,
    deliveryCharges: 25,
    image: 'cam4.jpg',
    videoUrl: '/videos/demo1.mp4',
    status: 'Active',
    stockQuantity: 12,
    availableStock: 10,
    lowStockThreshold: 5,
    lensCount: 2
  }
];

const SEED_RULES = [
  { id: 'rule-1', description: 'Triple Lens Camera requires 18Ah Battery', cameraId: 'sol-cam-3', batteryId: 'bat-3', panelId: null },
  { id: 'rule-2', description: '20W Solar Panel supports only 12Ah Battery', cameraId: null, batteryId: 'bat-2', panelId: 'pan-1' }
];

const SEED_SETTINGS = {
  id: 'global_settings',
  companyName: 'SURYA DRISHTI',
  logo: '/images/hero-bg-mobile.jpg',
  favicon: '/favicon.ico',
  contactNumber: '+91 98765 43210',
  emailAddress: 'info@suryadrishti.com',
  officeAddress: '123 Solar Heights, 4th Block, Jayanagar, Bengaluru, Karnataka 560011',
  mapsLocation: 'https://maps.google.com/?q=12.9279,77.5824',
  businessHours: '9:00 AM - 6:00 PM (Mon-Sat)',
  gstNumber: '29AAAAA1111A1Z1'
};

async function runMigration() {
  console.log('⚡ Starting Supabase Database & Storage Seeding Pipeline...');
  
  // A. Create Storage Bucket 'media'
  console.log('📦 Setting up Supabase Storage bucket "media"...');
  try {
    const { data: bucketData, error: bucketError } = await supabase.storage.createBucket('media', {
      public: true,
      allowedMimeTypes: ['image/jpeg', 'image/png', 'image/svg+xml', 'video/mp4'],
      fileSizeLimit: 15728640
    });
    
    if (bucketError && bucketError.message !== 'Bucket already exists') {
      console.warn('⚠️ Bucket setup issue:', bucketError.message);
    } else {
      console.log('✅ Storage bucket "media" is active.');
    }
  } catch (e) {
    console.warn('⚠️ Bucket setup exception:', e.message);
  }

  // B. Upload Local CCTV Images
  console.log('🖼&nbsp;Uploading camera images to Supabase Storage...');
  const imagesToUpload = [
    'cam1.jpg', 'cam2.jpg', 'cam3.jpg', 'cam4.jpg', 'cam5.jpg',
    'ip1.jpg', 'ip2.jpg', 'elec1.jpg', 'elec2.jpg', 'elec3.jpg'
  ];
  
  const publicUrls = {};

  for (const filename of imagesToUpload) {
    const localFilePath = path.resolve(__dirname, '../public/images', filename);
    if (!fs.existsSync(localFilePath)) {
      console.warn(`⚠️ Warning: Local image file ${localFilePath} not found.`);
      continue;
    }

    const fileBuffer = fs.readFileSync(localFilePath);
    const storagePath = `images/${filename}`;

    const { data, error } = await supabase.storage
      .from('media')
      .upload(storagePath, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {
      console.error(`❌ Failed to upload image ${filename}:`, error.message);
      continue;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(storagePath);

    console.log(`✅ Uploaded ${filename} ➔ ${publicUrl}`);
    publicUrls[filename] = publicUrl;
  }

  // C. Upload Banner Images
  const bannerFilename = 'hero-bg.jpg';
  const bannerLocalPath = path.resolve(__dirname, '../public/images', bannerFilename);
  if (fs.existsSync(bannerLocalPath)) {
    const fileBuffer = fs.readFileSync(bannerLocalPath);
    const storagePath = `images/${bannerFilename}`;
    await supabase.storage.from('media').upload(storagePath, fileBuffer, { contentType: 'image/jpeg', upsert: true });
    const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(storagePath);
    SEED_SETTINGS.logo = publicUrl;
    console.log(`✅ Uploaded hero banner background ➔ ${publicUrl}`);
  }

  // D. Seed Categories Table
  console.log('🗂&nbsp;Seeding Categories table...');
  const { error: catError } = await supabase.from('categories').upsert(SEED_CATEGORIES);
  if (catError) {
    console.error('❌ Failed to seed Categories. Ensure columns matches "id", "name", "displayOrder", "active". Error:', catError.message);
  } else {
    console.log('✅ Categories successfully seeded.');
  }

  // E. Seed Products Table with mapped public storage URLs
  console.log('🛍&nbsp;Seeding Products table...');
  const mappedProducts = SEED_PRODUCTS.map(p => {
    if (publicUrls[p.image]) {
      p.image = publicUrls[p.image];
    } else {
      p.image = `/images/${p.image}`;
    }
    return p;
  });

  const { error: prodError } = await supabase.from('products').upsert(mappedProducts);
  if (prodError) {
    console.error('❌ Failed to seed Products. Ensure columns use double-quotes camelCase keys. Error:', prodError.message);
  } else {
    console.log('✅ Products successfully seeded.');
  }

  // F. Seed Rules Table
  console.log('🔌 Seeding Rules table...');
  const { error: ruleError } = await supabase.from('rules').upsert(SEED_RULES);
  if (ruleError) {
    console.error('❌ Failed to seed Rules:', ruleError.message);
  } else {
    console.log('✅ Compatibility Rules successfully seeded.');
  }

  // G. Seed Settings Table
  console.log('⚙️ Seeding Settings table...');
  const { error: settingsError } = await supabase.from('settings').upsert([SEED_SETTINGS]);
  if (settingsError) {
    console.error('❌ Failed to seed Settings:', settingsError.message);
  } else {
    console.log('✅ Website Settings successfully seeded.');
  }

  console.log('\n🏁 Seeding complete! You are fully migrated.');
}

runMigration().catch(err => {
  console.error('❌ Pipeline execution crashed:', err);
});
