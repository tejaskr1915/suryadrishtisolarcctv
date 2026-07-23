import React, { useState } from 'react';
import { db } from '../utils/dbMock';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t } from '../utils/translate';
import { Eye, ShieldCheck, ArrowRight, Zap, Target, RefreshCw, AudioLines, HardDrive, ZoomIn } from 'lucide-react';

export default function Comparison() {
  const store = useConfiguratorStore();
  const products = db.getProducts();
  // Filter only solar cameras for comparison
  const solarCameras = products.filter(p => p.type === 'solar-camera');
  
  const [cameraAId, setCameraAId] = useState(solarCameras[0]?.id || '');
  const [cameraBId, setCameraBId] = useState(solarCameras[1]?.id || '');
  const [highlightDifferences, setHighlightDifferences] = useState(false);

  const renderBilingual = (text) => t(text, store.language);

  const renderBilingualValue = (val) => {
    if (!val) return '';
    const translations = {
      // Night Vision
      'Color Night Vision & Warning Strobe': 'ಬಣ್ಣದ ರಾತ್ರಿ ದೃಷ್ಟಿ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಸ್ಟ್ರೋಬ್ / Color Night Vision & Warning Strobe',
      'Color Night Vision (Up to 50m)': 'ಕಲರ್ ನೈಟ್ ವಿಷನ್ (50 ಮೀ ವರೆಗೆ) / Color Night Vision (Up to 50m)',
      'Starlight Laser (Up to 40m)': 'ಸ್ಟಾರ್‌ಲೈಟ್ ಲೇಸರ್ (40 ಮೀ ವರೆಗೆ) / Starlight Laser (Up to 40m)',
      'Infrared Black & White (Up to 30m)': 'ಇನ್‌ಫ್ರಾರೆಡ್ ಬ್ಲಾಕ್ & ವೈಟ್ (30 ಮೀ ವರೆಗೆ) / Infrared Black & White (Up to 30m)',
      'Dual-Source Color Night Vision': 'ಡ್ಯುಯಲ್-ಸೋರ್ಸ್ ಕಲರ್ ನೈಟ್ ವಿಷನ್ / Dual-Source Color Night Vision',
      'Color Laser Starlight Gaze (Up to 80m)': 'ಕಲರ್ ಲೇಸರ್ ಸ್ಟಾರ್‌ಲೈಟ್ ಗೇಜ್ (80 ಮೀ ವರೆಗೆ) / Color Laser Starlight Gaze (Up to 80m)',
      // Zoom
      '3MP Linkage Zoom': '3ಎಂಪಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ / 3MP Linkage Zoom',
      '5MP + 5MP Linkage Zoom': '5ಎಂಪಿ + 5ಎಂಪಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ / 5MP + 5MP Linkage Zoom',
      '10x Optical Hybrid Zoom': '10x ಆಪ್ಟಿಕಲ್ ಹೈಬ್ರಿಡ್ ಜೂಮ್ / 10x Optical Hybrid Zoom',
      '4x Digital Magnification': '4x ಡಿಜಿಟಲ್ ಮ್ಯಾಗ್ನಿಫಿಕೇಶನ್ / 4x Digital Magnification',
      'No Optical (Fixed Wide-Angle Lens)': 'ಆಪ್ಟಿಕಲ್ ಇಲ್ಲ (ಸ್ಥಿರ ವೈಡ್-ಆಂಗಲ್ ಲೆನ್ಸ್) / No Optical (Fixed Wide-Angle Lens)',
      '4x Optical Zoom': '4x ಆಪ್ಟಿಕಲ್ ಜೂಮ್ / 4x Optical Zoom',
      '16x Hybrid Panoramic Zoom': '16x ಹೈಬ್ರಿಡ್ ಪನೋರಮಿಕ್ ಜೂಮ್ / 16x Hybrid Panoramic Zoom',
      // AI Target Tracing
      'Human, Vehicle & Animal Tracking': 'ಮಾನವ, ವಾಹನ ಮತ್ತು ಪ್ರಾಣಿ ಪತ್ತೆಹಚ್ಚುವಿಕೆ / Human, Vehicle & Animal Tracking',
      'AI Object Tracking & Siren Lock': 'ಎಐ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸೈರನ್ ಲಾಕ್ / AI Object Tracking & Siren Lock',
      'Intelligent Human Filter': 'ಬುದ್ಧಿವಂತ ಹ್ಯೂಮನ್ ಫಿಲ್ಟರ್ / Intelligent Human Filter',
      'Basic Motion & Face Scanning': 'ಮೂಲ ಚಲನೆ ಮತ್ತು ಮುಖ ಸ್ಕ್ಯಾನಿಂಗ್ / Basic Motion & Face Scanning',
      'Intrusion Cross-Line Alarm': 'ಅನಧಿಕೃತ ಪ್ರವೇಶ ಕ್ರಾಸ್-ಲೈನ್ ಅಲಾರಾಂ / Intrusion Cross-Line Alarm',
      'AI Multi-Target Classification': 'ಎಐ ಮಲ್ಟಿ-ಟಾರ್ಗೆಟ್ ವರ್ಗೀಕರಣ / AI Multi-Target Classification',
      // PIR Motion Sweep
      'Multiple Voice Custom Siren': 'ಬಹು ಧ್ವನಿ ಕಸ್ಟಮ್ ಸೈರನ್ / Multiple Voice Custom Siren',
      'Active Siren with Light & Voice': 'ಬೆಳಕು ಮತ್ತು ಧ್ವನಿಯೊಂದಿಗೆ ಸಕ್ರಿಯ ಸೈರನ್ / Active Siren with Light & Voice',
      'Radar Motion Scan (120° coverage)': 'ರಡಾರ್ ಮೋಷನ್ ಸ್ಕ್ಯಾನ್ (120° ಕವರೇಜ್) / Radar Motion Scan (120° coverage)',
      'Zone PIR Heat Sensing': 'ಝೋನ್ ಪಿಐಆರ್ ಹೀಟ್ ಸೆನ್ಸಿಂಗ್ / Zone PIR Heat Sensing',
      'Standard Pixel Motion Analysis': 'ಪ್ರಮಾಣಿತ ಪಿಕ್ಸೆಲ್ ಚಲನೆ ವಿಶ್ಲೇಷಣೆ / Standard Pixel Motion Analysis',
      'Advanced Thermal Motion Sweep': 'ಸುಧಾರಿತ ಥರ್ಮಲ್ ಮೋಷನ್ ಸ್ವೀಪ್ / Advanced Thermal Motion Sweep',
      'Radar Sweep & Perimeter Defense': 'ರಡಾರ್ ಸ್ವೀಪ್ ಮತ್ತು ಪರಿಧಿ ರಕ್ಷಣೆ / Radar Sweep & Perimeter Defense',
      // Audio Intercom
      'Two-Way VEESKY App Audio': 'ದ್ವಿಮುಖ ವೀಸ್ಕಿ ಆಪ್ ಆಡಿಯೋ / Two-Way VEESKY App Audio',
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

  const renderProductName = (name) => {
    if (!name) return '';
    const translations = {
      'thinkwill smart 4G PT mini camera with audio': 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಮಿನಿ ಕ್ಯಾಮೆರಾ ಆಡಿಯೋದೊಂದಿಗೆ / THINKWILL Smart 4G PT Mini Camera with Audio',
      'thinkwill smart 4G PT linkage + zoom camera 10mp': 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 10ಎಂಪಿ / THINKWILL Smart 4G PT Linkage + Zoom Camera 10MP',
      'Strobe Siren Warning Dome': 'ಸ್ಟ್ರೋಬ್ ಸೈರನ್ ಎಚ್ಚರಿಕೆ ಡೋಮ್ / Strobe Siren Warning Dome',
      'THINKWILL Dual-Lens PTZ Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಪಿಟಿಝಡ್ ಡೋಮ್ / THINKWILL Dual-Lens PTZ Dome',
      'Consistent Smart Telemetry PTZ Dome': 'ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಟೆಲಿಮೆಟ್ರಿ ಪಿಟಿಝಡ್ ಡೋಮ್ / Consistent Smart Telemetry PTZ Dome',
      'THINKWILL Single-Lens Classic Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಸಿಂಗಲ್-ಲೆನ್ಸ್ ಕ್ಲಾಸಿಕ್ ಡೋಮ್ / THINKWILL Single-Lens Classic Dome',
      'THINKWILL Triple-Lens Panoramic Stand': 'ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಪನೋರಮಿಕ್ ಸ್ಟ್ಯಾಂಡ್ / THINKWILL Triple-Lens Panoramic Stand'
    };
    const matched = translations[name];
    return matched ? renderBilingual(matched) : name;
  };

  const renderProductDescription = (desc) => {
    if (!desc) return '';
    const translations = {
      '4G PT linkage with zoom camera 3mp': '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 3ಎಂಪಿ / 4G PT linkage with zoom camera 3MP',
      'Compact 4G PT mini camera with audio, 3mp resolution, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.': 'ಆಡಿಯೋದೊಂದಿಗೆ ಕಾಂಪ್ಯಾಕ್ಟ್ 4G ಪಿಟಿ ಮಿನಿ ಕ್ಯಾಮೆರಾ, 3ಎಂಪಿ ರೆಸಲ್ಯೂಶನ್, 256ಜಿಬಿ ವರೆಗೆ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್ ಬೆಂಬಲ, ದ್ವಿಮುಖ ಆಡಿಯೋ, ಮಾನವ, ವಾಹನ ಮತ್ತು ಪ್ರಾಣಿ ಪತ್ತೆ, ಮತ್ತು ಬಹು ಧ್ವನಿ ಸೈರನ್. / Compact 4G PT mini camera with audio, 3MP resolution, TF card up to 256GB, VEESKY app support, 2-way communication, motion detection for human, vehicle and animal, and multiple voice siren.',
      '4G PT linkage with zoom camera 5mp + 5mp': '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 5ಎಂಪಿ + 5ಎಂಪಿ / 4G PT linkage with zoom camera 5MP + 5MP',
      'Dual-lens 4G PT linkage with zoom camera 5mp + 5mp, TF card up to 256gb, supporting VEESKY mobile app, 2-way communication, motion detection for human, vehicle and animal, and siren with light and voice.': 'ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 5ಎಂಪಿ + 5ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ, ಮಾನವ, ವಾಹನ ಮತ್ತು ಪ್ರಾಣಿ ಪತ್ತೆ, ಬೆಳಕು ಮತ್ತು ಧ್ವನಿಯೊಂದಿಗೆ ಸೈರನ್. / Dual-lens 4G PT linkage with zoom camera 5MP + 5MP, 256GB TF card, VEESKY app, 2-way communication, motion detection for human, vehicle and animal, and siren with light and voice.',
      'White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.': 
        'ಸಂಯೋಜಿತ ಕೆಂಪು ಸ್ಟ್ರೋಬ್ ಸೈರನ್, ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು ಮತ್ತು ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಗುರಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.',
      'Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.':
        'ಸಂಯೋಜಿತ ಮೌಂಟಿಂಗ್ ಬ್ರಾಕೆಟ್, ಡ್ಯುಯಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ವೈಡ್-ಆಂಗಲ್ ಆಪ್ಟಿಕಲ್ ಲೆನ್ಸ್ ಹೊಂದಿರುವ ಕಾಂಪ್ಯಾಕ್ಟ್ ವೈರ್‌ಲೆಸ್ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.',
      'Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.':
        'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಸ್ಟಾರ್‌ಲೈಟ್ ಸೆನ್ಸಾರ್‌ಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ದಕ್ಷತೆಯ ಇನ್‌ಫ್ರಾರೆಡ್ ನೈಟ್ ಸ್ವೀಪ್ ಹೊಂದಿರುವ ಕನ್ಸಿಸ್ಟೆಂಟ್ ಬ್ರಾಂಡ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.',
      'White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.':
        'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಶೂನ್ಯ-ವಿಳಂಬ ವೈಫೈ ಸಂಪರ್ಕ ಮತ್ತು ಹೆಚ್ಚಿನ ಶಕ್ತಿಯ ಹವಾಮಾನ-ನಿರೋಧಕ ಕೇಸಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.',
      'Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.':
        'ಡಬಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ಬೆಂಬಲ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಡ್ಯುಯಲ್ ಸಬ್-ಡೋಮ್ ದೃಶ್ಯ ಪಾಡ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಎಂಟರ್‌ಪ್ರೈಸ್ ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಕ್ಯಾಮೆರಾ. / Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.'
    };
    const matched = translations[desc];
    return matched ? renderBilingual(matched) : desc;
  };

  const camA = solarCameras.find(c => c.id === cameraAId) || solarCameras[0];
  const camB = solarCameras.find(c => c.id === cameraBId) || solarCameras[1];

  const handleConfigure = (camera) => {
    store.setSolarCamera(camera);
    // Switch view to home configurator and scroll smoothly to it
    store.setActiveTab('home');
    setTimeout(() => {
      const el = document.getElementById('configurator-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const isDiff = (key) => {
    if (!camA || !camB || !camA.features || !camB.features) return false;
    return camA.features[key] !== camB.features[key];
  };

  return (
    <section id="comparison-matrix" className="py-24 relative overflow-hidden bg-obsidian-bg2 border-y border-zinc-900/50">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold">
              {renderBilingual("ಕ್ಯಾಮೆರಾ ಹೋಲಿಕೆ / Compare Models")}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              {renderBilingual("ಸಂವಾದಾತ್ಮಕ ಹೋಲಿಕೆ / Interactive Comparison")}
            </h2>
            <p className="text-zinc-400 font-light mt-3 max-w-xl">
              {renderBilingual("ಆಪ್ಟಿಕ್ಸ್, ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಯತಾಂಕಗಳನ್ನು ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಹೋಲಿಸಲು ಯಾವುದೇ ಎರಡು ಕ್ಯಾಮೆರಾ ಮಾದರಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ. / Select any two camera models to compare their optics, night vision capabilities, and autonomous tracking parameters side-by-side.")}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => setHighlightDifferences(!highlightDifferences)}
              className={`px-5 py-2.5 rounded-full font-space text-[10px] tracking-wider uppercase border cursor-pointer transition-all duration-300 ${
                highlightDifferences
                  ? 'border-electric-cyan text-electric-cyan bg-electric-cyan/10 glow-cyan'
                  : 'border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              {renderBilingual("ವ್ಯತ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸಿ / Highlight Differences")}
            </button>
          </div>
        </div>

        {/* Visual Image Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Camera 1 Selector */}
          <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold">
              {renderBilingual("ಕ್ಯಾಮೆರಾ 1 ಆಯ್ಕೆಮಾಡಿ / Choose Camera 1")}
            </span>
            <div className="flex gap-3 flex-wrap">
              {solarCameras.map(cam => {
                const isActive = cam.id === cameraAId;
                return (
                  <button
                    key={cam.id}
                    onClick={() => setCameraAId(cam.id)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' 
                        : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'
                    }`}
                    title={cam.name}
                  >
                    <img src={cam.image} alt={cam.name} className="w-full h-full object-contain" />
                    {isActive && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="text-[10px] text-zinc-400 mt-2.5 font-space font-medium">
              {renderProductName(camA?.name)}
            </div>
          </div>

          {/* Camera 2 Selector */}
          <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold">
              {renderBilingual("ಕ್ಯಾಮೆರಾ 2 ಆಯ್ಕೆಮಾಡಿ / Choose Camera 2")}
            </span>
            <div className="flex gap-3 flex-wrap">
              {solarCameras.map(cam => {
                const isActive = cam.id === cameraBId;
                return (
                  <button
                    key={cam.id}
                    onClick={() => setCameraBId(cam.id)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' 
                        : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'
                    }`}
                    title={cam.name}
                  >
                    <img src={cam.image} alt={cam.name} className="w-full h-full object-contain" />
                    {isActive && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="text-[10px] text-zinc-400 mt-2.5 font-space font-medium">
              {renderProductName(camB?.name)}
            </div>
          </div>
        </div>

        {/* Matrix Grid Container */}
        {camA && camB && (
          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-obsidian-bg3/50 backdrop-blur-md">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs">
              <thead>
                <tr className="border-b border-zinc-800/80 bg-zinc-950/40">
                  <th className="p-6 font-space text-zinc-500 uppercase tracking-widest text-[9px] w-[220px]">
                    {renderBilingual("ವಿಶೇಷಣಗಳು / Specifications")}
                  </th>
                  
                  {/* Camera 1 Head */}
                  <th className="p-6 w-[250px] border-r border-zinc-900 text-center">
                    <div className="w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto">
                      <img src={camA.image} alt={camA.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="font-space font-medium text-sm text-white mb-1">
                      {renderProductName(camA.name)}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]">
                      {renderProductDescription(camA.description)}
                    </div>
                    <button
                      onClick={() => handleConfigure(camA)}
                      className="inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer"
                    >
                      <>{renderBilingual("ಕಾನ್ಫಿಗರ್ ಮಾಡಿ / Configure Node")} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></>
                    </button>
                  </th>

                  {/* Camera 2 Head */}
                  <th className="p-6 w-[250px] text-center">
                    <div className="w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto">
                      <img src={camB.image} alt={camB.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="font-space font-medium text-sm text-white mb-1">
                      {renderProductName(camB.name)}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]">
                      {renderProductDescription(camB.description)}
                    </div>
                    <button
                      onClick={() => handleConfigure(camB)}
                      className="inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer"
                    >
                      <>{renderBilingual("ಕಾನ್ಫಿಗರ್ ಮಾಡಿ / Configure Node")} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/50">
                {/* Night Vision */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('nightVision') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><Eye className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯ / Night Vision Gaze")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.nightVision || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.nightVision || 'N/A')}
                  </td>
                </tr>

                {/* Hybrid Zoom */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('zoom') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><ZoomIn className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ಹೈಬ್ರಿಡ್ ಆಪ್ಟಿಕ್ಸ್ ಜೂಮ್ / Hybrid Optics Zoom")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.zoom || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.zoom || 'N/A')}
                  </td>
                </tr>

                {/* Human Detection */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('humanDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><Target className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ಎಐ ಟಾರ್ಗೆಟ್ ಟ್ರೇಸಿಂಗ್ / AI Target Tracing")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.humanDetection || camA.features?.humanDetection || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.humanDetection || camB.features?.humanDetection || 'N/A')}
                  </td>
                </tr>

                {/* Motion Scanning */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('motionDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><Zap className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ಪಿಐಆರ್ ಚಲನೆ ಪತ್ತೆ / PIR Motion Sweep")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.motionDetection || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.motionDetection || 'N/A')}
                  </td>
                </tr>

                {/* Two-Way Audio */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('twoWayAudio') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><AudioLines className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ಆಡಿಯೋ ಇಂಟರ್‌ಕಾಮ್ / Audio Intercom")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.twoWayAudio || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.twoWayAudio || 'N/A')}
                  </td>
                </tr>

                {/* TF Storage */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('storage') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><HardDrive className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ಮೆಮೊರಿ ಸ್ಟೋರೇಜ್ ಕಾರ್ಡ್ / Memory Storage Card")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.storage || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.storage || 'N/A')}
                  </td>
                </tr>

                {/* Warranty */}
                <tr className={`hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('warranty') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`}>
                  <td className="p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2">
                    <><ShieldCheck className="w-4 h-4 text-electric-cyan" /> {renderBilingual("ತಯಾರಕರ ವಾರಂಟಿ / Manufacturer Warranty")}</>
                  </td>
                  <td className="p-6 text-zinc-200 font-light border-r border-zinc-900">
                    {renderBilingualValue(camA.features?.warranty || 'N/A')}
                  </td>
                  <td className="p-6 text-zinc-200 font-light">
                    {renderBilingualValue(camB.features?.warranty || 'N/A')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
