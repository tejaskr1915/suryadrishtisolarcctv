import React, { useState, useEffect } from 'react';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t, tStr } from '../utils/translate';
import { db } from '../utils/dbMock';
import { generateQuotationPDF } from '../utils/pdfGenerator';
import { 
  Shield, Battery, Sun, Wrench, ChevronRight, User, Mail, Phone, MapPin, 
  CheckCircle2, RefreshCw, Play, X, Sliders, Layers, HardDrive, Cpu, Settings
} from 'lucide-react';



export default function Configurator() {
  const store = useConfiguratorStore();

  const renderBilingual = (text) => t(text, store.language);

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
    return renderBilingual(translations[name] || name);
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
    return renderBilingual(translations[desc] || desc);
  };

  const renderBatteryName = (name) => {
    const translations = {
      'SuryaGlow 12Ah LFP': 'ಸೂರ್ಯಗ್ಲೋ 12Ah ಎಲ್‌ಎಫ್‌ಪಿ / SuryaGlow 12Ah LFP',
      'SuryaGlow 18Ah LFP Pro': 'ಸೂರ್ಯಗ್ಲೋ 18Ah ಎಲ್‌ಎಫ್‌ಪಿ ಪ್ರೊ / SuryaGlow 18Ah LFP Pro'
    };
    return renderBilingual(translations[name] || name);
  };

  const renderBatteryDescription = (desc) => {
    const translations = {
      'Lightweight safety LiFePO4 battery pack': 'ಕಡಿಮೆ ತೂಕದ ಸುರಕ್ಷಿತ LiFePO4 ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ / Lightweight safety LiFePO4 battery pack',
      'High endurance safety LiFePO4 battery pack': 'ಹೆಚ್ಚಿನ ಬಾಳಿಕೆಯ ಸುರಕ್ಷಿತ LiFePO4 ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ / High endurance safety LiFePO4 battery pack'
    };
    return renderBilingual(translations[desc] || desc);
  };

  const renderPanelName = (name) => {
    const translations = {
      'Helios 20W Monocrystalline': 'ಹೆಲಿಯೋಸ್ 20W ಮೊನೊಕ್ರಿಸ್ಟಲಿನ್ / Helios 20W Monocrystalline',
      'Helios 40W Monocrystalline Pro': 'ಹೆಲಿಯೋಸ್ 40W ಮೊನೊಕ್ರಿಸ್ಟಲಿನ್ ಪ್ರೊ / Helios 40W Monocrystalline Pro'
    };
    return renderBilingual(translations[name] || name);
  };

  const renderPanelDescription = (desc) => {
    const translations = {
      'Anti-reflective tempered glass solar panel': 'ಪ್ರತಿಫಲನ-ನಿರೋಧಕ ಟೆಂಪರ್ಡ್ ಗ್ಲಾಸ್ ಸೌರ ಫಲಕ / Anti-reflective tempered glass solar panel',
      'Double sided efficiency capture panel': 'ಉಭಯ ಬದಿಯ ದಕ್ಷತೆಯ ಸೌರ ಫಲಕ / Double sided efficiency capture panel'
    };
    return renderBilingual(translations[desc] || desc);
  };

  const renderAccessoryName = (name) => {
    const translations = {
      '64GB CCTV SD Card': '64 ಜಿಬಿ ಸಿಸಿಟಿವಿ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / 64GB CCTV SD Card',
      '128GB CCTV SD Card': '128 ಜಿಬಿ ಸیسیಟಿವಿ ಎಸ್‌ಡಿ ಕಾರ್ಡ್ / 128GB CCTV SD Card',
      'Pole Clamp Bracket set': 'ಪೋಲ್ ಕ್ಲಾಂಪ್ ಬ್ರಾಕೆಟ್ ಸೆಟ್ / Pole Clamp Bracket set',
      'Wall Mount Arm bracket': 'ವಾಲ್ ಮೌಂಟ್ ಆರ್ಮ್ ಬ್ರಾಕೆಟ್ / Wall Mount Arm bracket',
      'Waterproof Junction Box': 'ಜಲನಿರೋಧಕ ಜಂಕ್ಷನ್ ಬಾಕ್ಸ್ / Waterproof Junction Box',
      'Professional Site Installation': 'ವೃತ್ತಿಪರ ಸ್ಥಳ ಸ್ಥಾಪನೆ / Professional Site Installation',
      'Annual Maintenance Contract': 'ವಾರ್ಷಿಕ ನಿರ್ವಹಣೆ ಒಪ್ಪಂದ / Annual Maintenance Contract'
    };
    return renderBilingual(translations[name] || name);
  };
  const products = db.getProducts();

  // Categories
  const solarCameras = products.filter(p => p.type === 'solar-camera');
  const batteries = products.filter(p => p.type === 'battery');
  const panels = products.filter(p => p.type === 'panel');
  const accessories = products.filter(p => p.type === 'accessory');

  // Electric Camera nodes (IP and IR types)
  const ipCameras = products.filter(p => p.type === 'electric-camera' && p.category === 'IP Camera');
  const irCameras = products.filter(p => p.type === 'electric-camera' && p.category === 'IR Camera');
  
  // Auto clamp quantity and storage options when toggling camera line
  useEffect(() => {
    if (store.electricClass === 'WiFi Camera') {
      if (store.electricQty > 2) {
        store.setElectricQty(2);
      }
      if (store.electricStorage !== '64GB' && store.electricStorage !== '128GB') {
        store.setElectricStorage('64GB');
      }
    } else {
      if (store.electricStorage === '64GB' || store.electricStorage === '128GB') {
        store.setElectricStorage('1TB');
      }
    }
  }, [store.electricClass]);

  // Local Configurator States
  const [solarStep, setSolarStep] = useState(1); // 1 to 6
  const [videoModalUrl, setVideoModalUrl] = useState(null); // Lightbox player url
  const [previewCamera, setPreviewCamera] = useState(null); // Camera preview popup modal state

  const handleNextSolar = () => {
    if (solarStep < 6) setSolarStep(solarStep + 1);
  };
  const handlePrevSolar = () => {
    if (solarStep > 1) setSolarStep(solarStep - 1);
  };

  const sendOrderEmail = async (order) => {
    try {
      let detailsText = '';
      if (order.configType === 'solar') {
        detailsText = `Solar CCTV System Setup:\n- Camera Node: ${order.summary.camera}\n- Battery: ${order.summary.battery}\n- Solar Panel: ${order.summary.panel}\n- Storage: ${order.summary.storage}\n- Accessories: ${order.summary.accessories.join(', ')}`;
      } else {
        detailsText = `Electric CCTV System Setup:\n- Camera Line: ${order.summary.camera}\n- Storage: ${order.summary.storage}\n- Accessories: ${order.summary.accessories.join(', ')}`;
        if (order.summary.dvr) {
          detailsText += `\n- Recorder (NVR/DVR): ${order.summary.dvr}`;
        }
      }

      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: order.customer.name,
          phone: order.customer.phone,
          email: order.customer.email,
          cameraImage: order.summary.cameraImage,
          detailsSummary: detailsText
        })
      });
    } catch (err) {
      console.error('Failed to trigger email notification endpoint:', err);
    }
  };

  const handleSolarSubmit = async (e) => {
    e.preventDefault();
    const order = await store.submitConfigurator();
    if (order) {
      generateQuotationPDF(order);
      sendOrderEmail(order);
    }
  };

  const handleElectricSubmit = async (e) => {
    e.preventDefault();
    const order = await store.submitConfigurator();
    if (order) {
      generateQuotationPDF(order);
      sendOrderEmail(order);
    }
  };

  // Find camera image path to display for Electric based on current settings
  const getElectricCameraImage = () => {
    const { electricClass, electricRes } = store;
    if (electricClass === 'WiFi Camera') {
      return store.solarCamera?.image || '/images/cam1.jpg';
    } else if (electricClass === 'IP Camera') {
      return electricRes === '5MP' ? '/images/ip2.jpg' : '/images/ip1.jpg';
    } else {
      return electricRes === '5MP' ? '/images/elec3.jpg' : '/images/elec2.jpg';
    }
  };

  // Order Complete Screen (Success Redirection)
  if (store.completedOrder) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center grid-bg">
        <div className="max-w-2xl w-full glass-panel border-electric-emerald/30 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-electric-emerald/5 rounded-full filter blur-[50px] pointer-events-none"></div>

          <div className="w-16 h-16 bg-electric-emerald/10 border border-electric-emerald/30 rounded-full flex items-center justify-center text-electric-emerald mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-space font-medium text-white mb-1">
            <span className="font-kannada">ಸಿಸಿಟಿವಿ ಕಾನ್ಫಿಗರೇಶನ್ ಉಳಿಸಲಾಗಿದೆ</span> / CCTV Configuration Saved
          </h2>
          <p className="text-electric-emerald text-xs uppercase tracking-widest font-space font-medium mb-6">
            <span className="font-kannada">ಉಲ್ಲೇಖ ಐಡಿ</span> / Reference ID: {store.completedOrder.id}
          </p>

          <div className="bg-zinc-950/80 rounded-2xl border border-white/5 p-6 mb-8 text-left text-xs leading-relaxed space-y-3">
            <div className="flex justify-between border-b border-zinc-900 pb-2 text-zinc-500 font-space uppercase">
              <span><span className="font-kannada">ಆಯ್ಕೆಮಾಡಿದ ಘಟಕಗಳ ಸಾರಾಂಶ</span> / Selected Components Summary</span>
              <span><span className="font-kannada">ಸ್ಥಿತಿ</span> / Status</span>
            </div>
            
            {store.configType === 'solar' ? (
              <>
                <div className="flex justify-between">
                  <span className="text-zinc-300 font-semibold">{renderProductName(store.completedOrder.summary.camera)}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400"><span className="font-kannada">ಬ್ಯಾಟರಿ:</span> / Battery: {renderBatteryName(store.completedOrder.summary.battery)}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400"><span className="font-kannada">ಸೌರ ಫಲಕ:</span> / Solar Panel: {renderPanelName(store.completedOrder.summary.panel)}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400"><span className="font-kannada">ಮೆಮೊರಿ ಕಾರ್ಡ್:</span> / Memory Card: {renderAccessoryName(store.completedOrder.summary.storage)}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-zinc-300 font-semibold">{renderProductName(store.completedOrder.summary.camera)}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
                {store.completedOrder.summary.dvr && (
                  <div className="flex justify-between">
                    <span className="text-zinc-400">
                      {store.completedOrder.summary.dvr.includes('DVR') ? <><span className="font-kannada">ಡಿವಿಆರ್:</span> / DVR:</> : <><span className="font-kannada">ಎನ್‌ವಿಆರ್:</span> / NVR:</>} {store.completedOrder.summary.dvr}
                    </span>
                    <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-zinc-400"><span className="font-kannada">ಸಂಗ್ರಹಣೆ:</span> / Storage: {store.completedOrder.summary.storage}</span>
                  <span className="text-zinc-500"><span className="font-kannada">ವಿನಂತಿಸಲಾಗಿದೆ</span> / Requested</span>
                </div>
              </>
            )}

            {store.completedOrder.summary.accessories.length > 0 && (
              <div className="pt-2 border-t border-zinc-900/60">
                <span className="text-zinc-500 uppercase tracking-widest text-[8px] block mb-1">
                  <span className="font-kannada">ಹೆಚ್ಚುವರಿ ಪರಿಕರಗಳು:</span> / Add-ons:
                </span>
                {store.completedOrder.summary.accessories.map((acc, index) => (
                  <div key={index} className="flex justify-between text-zinc-400">
                    <span>{renderAccessoryName(acc)}</span>
                    <span className="text-zinc-500"><span className="font-kannada">ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ</span> / Selected</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-zinc-900/60 text-zinc-500 text-center text-[11px] leading-relaxed">
              <span className="text-electric-emerald font-semibold uppercase block mb-1">
                <span className="font-kannada">ವಿಚಾರಣೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ</span> / Enquiry Successfully Placed
              </span>
              <span className="font-kannada">ಸ್ಥಾಪನಾ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಕಸ್ಟಮ್ ಉಲ್ಲೇಖವನ್ನು ಒದಗಿಸಲು ಆಡಳಿತಾತ್ಮಕ ಪ್ರತಿನಿಧಿಯು ಶೀಘ್ರದಲ್ಲೇ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಫೋನ್ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.</span> / An administrative representative will contact you shortly via WhatsApp or Phone to review installation logistics and provide your custom quote.
            </div>
          </div>

          <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/5 mb-8 text-left text-xs leading-relaxed text-zinc-400">
            <strong><span className="font-kannada">ಗ್ರಾಹಕರು:</span> / Client:</strong> {store.completedOrder.customer.name}<br />
            <strong><span className="font-kannada">ವಿಳಾಸ:</span> / Address:</strong> {store.completedOrder.customer.address}<br />
            <strong><span className="font-kannada">ಫೋನ್:</span> / Phone:</strong> {store.completedOrder.customer.phone}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => generateQuotationPDF(store.completedOrder)}
              className="py-3 rounded-xl font-space text-xs tracking-wider uppercase border border-white/10 text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="font-kannada">ಪಿಡಿಎಫ್ ವಿವರಣೆ ಪತ್ರಿಕೆ</span> / Download Spec PDF
            </button>
            <button
              onClick={() => {
                const order = store.completedOrder;
                const adminPhone = "+919999999999";
                const text = encodeURIComponent(
                  `*NEW SOLAR CCTV ENQUIRY - ${order.id}*\n\n` +
                  `*Client Details:*\n` +
                  `- Name: ${order.customer.name}\n` +
                  `- Phone: ${order.customer.phone}\n` +
                  `- Email: ${order.customer.email}\n` +
                  `- Address: ${order.customer.address}\n\n` +
                  `*Configuration Specifications:*\n` +
                  `- Camera Node: ${order.summary.camera}\n` +
                  (order.configType === 'solar' ? 
                    `- LFP Battery Storage: ${order.summary.battery}\n` +
                    `- Albedo Solar input: ${order.summary.panel}\n` +
                    `- TF Memory Storage: ${order.summary.storage}\n` : 
                    (order.summary.dvr ? `- ${order.summary.dvr.includes('DVR') ? 'DVR' : 'NVR'} System: ${order.summary.dvr}\n` : '') +
                    `- CCTV Storage: ${order.summary.storage}\n`
                  ) +
                  (order.summary.accessories.length > 0 ? 
                    `\n*Add-ons Selected:*\n` + order.summary.accessories.map(a => `- ${a}`).join('\n') : '') +
                  `\n\n_Sent via Surya Drishti Spec Builder._`
                );
                window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
              }}
              className="py-3 rounded-xl font-space text-xs tracking-wider uppercase bg-[#25D366] text-black hover:opacity-90 transition-opacity font-semibold cursor-pointer"
            >
              <span className="font-kannada">ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕಳುಹಿಸಿ</span> / Send via WhatsApp
            </button>
            <button
              onClick={() => {
                const order = store.completedOrder;
                const adminEmail = "admin@suryadrishti.com";
                const subject = encodeURIComponent(`Surya Drishti Spec Enquiry - ${order.id}`);
                const body = encodeURIComponent(
                  `NEW SOLAR CCTV ENQUIRY - ${order.id}\n\n` +
                  `Client Details:\n` +
                  `- Name: ${order.customer.name}\n` +
                  `- Phone: ${order.customer.phone}\n` +
                  `- Email: ${order.customer.email}\n` +
                  `- Address: ${order.customer.address}\n\n` +
                  `Configuration Specifications:\n` +
                  `- Camera Node: ${order.summary.camera}\n` +
                  (order.configType === 'solar' ? 
                    `- LFP Battery Storage: ${order.summary.battery}\n` +
                    `- Albedo Solar input: ${order.summary.panel}\n` +
                    `- TF Memory Storage: ${order.summary.storage}\n` : 
                    (order.summary.dvr ? `- ${order.summary.dvr.includes('DVR') ? 'DVR' : 'NVR'} System: ${order.summary.dvr}\n` : '') +
                    `- CCTV Storage: ${order.summary.storage}\n`
                  ) +
                  (order.summary.accessories.length > 0 ? 
                    `\nAdd-ons Selected:\n` + order.summary.accessories.map(a => `- ${a}`).join('\n') : '') +
                  `\n\nSent via Surya Drishti Spec Builder.`
                );
                window.open(`mailto:${adminEmail}?subject=${subject}&body=${body}`, '_blank');
              }}
              className="py-3 rounded-xl font-space text-xs tracking-wider uppercase border border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10 transition-colors cursor-pointer"
            >
              <span className="font-kannada">ಇಮೇಲ್ ಮೂಲಕ ಕಳುಹಿಸಿ</span> / Send via Email
            </button>
            <button
              onClick={() => {
                store.resetConfigurator();
                store.setActiveTab('home');
              }}
              className="py-3 rounded-xl font-space text-xs tracking-wider uppercase bg-white text-black hover:opacity-90 transition-opacity font-semibold cursor-pointer"
            >
              <span className="font-kannada">ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ</span> / Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Unified Tab Navigation for Solar vs. Electric configures */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-2xl glass-panel border border-white/5 flex gap-2 w-full max-w-md">
            <button
              onClick={() => {
                store.setConfigType('solar');
                store.resetConfigurator();
              }}
              className={`flex-1 py-3 rounded-xl font-space text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                store.configType === 'solar'
                  ? 'bg-electric-cyan text-black font-semibold shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {store.language === 'kn' && <span className="font-kannada block text-[10px] normal-case">ಸೌರ ಸಿಸಿಟಿವಿ ವ್ಯವಸ್ಥೆ</span>}
              Solar CCTV System
            </button>
            <button
              onClick={() => {
                store.setConfigType('electric');
                store.resetConfigurator();
              }}
              className={`flex-1 py-3 rounded-xl font-space text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                store.configType === 'electric'
                  ? 'bg-electric-cyan text-black font-semibold shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {store.language === 'kn' && <span className="font-kannada block text-[10px] normal-case">ವಿದ್ಯುತ್ ಸಿಸಿಟಿವಿ ವ್ಯವಸ್ಥೆ</span>}
              Electric CCTV System
            </button>
          </div>
        </div>

        {/* Workflows grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Wizard configurations */}
          <div className="lg:col-span-7">
            
            {store.configType === 'solar' ? (
              /* SOLAR CCTV PAGE */
              <div>
                {/* Stepper tracking */}
                <div className="flex items-center gap-2 p-2 rounded-2xl glass-panel border border-white/5 mb-8 overflow-x-auto">
                  {[
                    { step: 1, label: renderBilingual("ಕ್ಯಾಮೆರಾ / Camera"), icon: Shield },
                    { step: 2, label: renderBilingual("ಬ್ಯಾಟರಿ / Battery"), icon: Battery },
                    { step: 3, label: renderBilingual("ಸೌರ ಫಲಕ / Panel"), icon: Sun },
                    { step: 4, label: renderBilingual("ಮೆಮೊರಿ / Storage"), icon: HardDrive },
                    { step: 5, label: renderBilingual("ಪರಿಕರಗಳು / Accessories"), icon: Wrench },
                    { step: 6, label: renderBilingual("ಸಾರಾಂಶ / Summary"), icon: Layers },
                    { step: 7, label: renderBilingual("ಸಂಪರ್ಕ / Contact"), icon: User }
                  ].map(s => (
                    <button
                      key={s.step}
                      onClick={() => setSolarStep(s.step)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-space uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                        solarStep === s.step
                          ? 'bg-electric-cyan text-black font-semibold'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                  <s.icon className="w-3 h-3 text-current" /> {s.label}
                    </button>
                  ))}
                </div>

                <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/20 mb-8 min-h-[380px]">
                   
                   {/* Step controls header (Back and Next buttons) at the top of the container */}
                   {solarStep < 6 && (
                     <div className="flex justify-between items-center pb-6 mb-8 border-b border-white/5">
                       <button
                         type="button"
                         onClick={handlePrevSolar}
                         disabled={solarStep === 1}
                         className="px-6 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 font-space text-xs uppercase hover:border-zinc-700 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                       >
                         {renderBilingual("ಹಿಂದೆ / Back")}
                       </button>
                       <button
                         type="button"
                         onClick={handleNextSolar}
                         className="px-6 py-2.5 rounded-xl font-space text-xs uppercase font-semibold text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer ml-auto"
                       >
                         {renderBilingual("ಮುಂದಿನ ಹಂತ / Next Step")}
                       </button>
                     </div>
                   )}
                  
                  {/* Step 1: Solar Cameras (Five Models selection with big images, no names) */}
                  {solarStep === 1 && (
                    <div>
                      <h3 className="text-base sm:text-lg text-white mb-1.5 font-semibold">
                        {renderBilingual("ಎಐ ಕ್ಯಾಮೆರಾ ಮಾದರಿಯನ್ನು ಆರಿಸಿ / Choose AI Camera Model")}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-zinc-500 mb-4 font-space uppercase">
                        {renderBilingual("ನಮ್ಮ ಐದು ಸೌರ ಆಪ್ಟಿಕಲ್ ಸೆನ್ಸಾರ್‌ಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ / Select from our five solar optical sensors by visual design")}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
                        {solarCameras.map(cam => {
                          const isSelected = store.solarCamera?.id === cam.id;
                          return (
                            <div
                              key={cam.id}
                              onClick={() => store.setSolarCamera(cam)}
                              className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                                isSelected 
                                  ? 'bg-electric-cyan/5 border-electric-cyan glow-cyan' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              {/* Large Image Container */}
                              <div className="relative w-full h-24 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden border border-white/5 bg-zinc-950 flex items-center justify-center mb-2 sm:mb-3 group/img">
                                <img src={cam.image} alt="Solar Camera Model" className="w-full h-full object-contain p-1.5 sm:p-4 transition-transform duration-300 group-hover/img:scale-105" />
                                
                                {/* Large play button hover overlay */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setVideoModalUrl(Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4');
                                  }}
                                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer z-10"
                                  title="Watch Demo Clip"
                                >
                                  <div className="w-8 h-8 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-lg font-bold">
                                    <Play className="w-3.5 h-3.5 fill-black" />
                                  </div>
                                </button>
                              </div>

                              {/* Specs & Pricing */}
                              <div className="space-y-3">
                                <div>
                                  <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase tracking-widest font-space font-medium block">
                                    {renderBilingual("ಸ್ವಾಯತ್ತ ದೃಷ್ಟಿ ನೋಡ್ / Autonomous Vision Node")}
                                  </span>
                                  <h4 className="text-[10px] sm:text-sm font-space font-medium text-white block mt-0.5 leading-tight">
                                    {renderProductName(cam.name)}
                                  </h4>
                                </div>
                                <p className="text-[9px] sm:text-xs text-zinc-400 font-light leading-relaxed min-h-[30px] line-clamp-2 hidden sm:block">
                                  {renderProductDescription(cam.description)}
                                </p>
                                
                                <div className="text-right mt-1">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setPreviewCamera(cam);
                                    }}
                                    className="text-[9px] sm:text-[10px] text-electric-cyan font-space uppercase hover:text-white cursor-pointer"
                                  >
                                    {renderBilingual("ವಿವರಗಳು / Specs")}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Battery (12Ah, 18Ah) */}
                  {solarStep === 2 && (
                    <div>
                      <h3 className="text-xl text-white mb-2">
                        <span className="font-kannada">ಎಲ್‌ಎಫ್‌ಪಿ ಸುರಕ್ಷಿತ ಬ್ಯಾಟರಿಯನ್ನು ಆರಿಸಿ</span> / Choose LFP Safety Battery
                      </h3>
                      <p className="text-xs text-zinc-500 mb-6 font-space uppercase">
                        <span className="font-kannada">ಲಿಥಿಯಂ ಐರನ್ ಫಾಸ್ಫೇಟ್ ಸಾಮರ್ಥ್ಯದ ಆಯ್ಕೆಗಳು</span> / Lithium Iron Phosphate capacity options
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {batteries.filter(b => b.capacity === '12Ah' || b.capacity === '18Ah').map(bat => {
                          const isSelected = store.solarBattery?.id === bat.id;
                          return (
                            <div
                              key={bat.id}
                              onClick={() => store.setSolarBattery(bat)}
                              className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-32 sm:h-36 ${
                                isSelected 
                                  ? 'bg-electric-emerald/5 border-electric-emerald glow-emerald' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] text-zinc-500 font-space uppercase">
                                  <span className="font-kannada">ಥರ್ಮಲ್ ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್</span> / Thermal Battery Pack
                                </span>
                                <h4 className="text-xs sm:text-sm font-space font-medium text-white mt-0.5">
                                  {renderBatteryName(bat.name)}
                                </h4>
                                <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 line-clamp-2">
                                  {renderBatteryDescription(bat.description)}
                                </p>
                              </div>
                              <div className="flex justify-between items-center border-t border-zinc-900/60 pt-2 mt-2">
                                <span className="text-xs text-electric-emerald font-space">{bat.capacity}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Solar Panel (20W, 40W) */}
                  {solarStep === 3 && (
                    <div>
                      <h3 className="text-xl text-white mb-2">
                        <span className="font-kannada">ಆಲ್ಬೆಡೋ ಸೌರ ಫಲಕವನ್ನು ಆರಿಸಿ</span> / Choose Albedo Solar Panel
                      </h3>
                      <p className="text-xs text-zinc-500 mb-6 font-space uppercase">
                        <span className="font-kannada">ಮೊನೊಕ್ರಿಸ್ಟಲಿನ್ ಉತ್ಪಾದನಾ ಘಟಕಗಳು</span> / Monocrystalline generation elements
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {panels.filter(p => p.wattage === '20W' || p.wattage === '40W').map(pan => {
                          const isSelected = store.solarPanel?.id === pan.id;
                          return (
                            <div
                              key={pan.id}
                              onClick={() => store.setSolarPanel(pan)}
                              className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-32 sm:h-36 ${
                                isSelected 
                                  ? 'bg-electric-cyan/5 border-electric-cyan glow-cyan' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] text-zinc-500 font-space uppercase">
                                  <span className="font-kannada">ಸಿಲಿಕಾನ್ ಪವರ್ ಜನರೇಟರ್</span> / Silicon Power generator
                                </span>
                                <h4 className="text-lg font-space font-medium text-white mt-1">
                                  {renderPanelName(pan.name)}
                                </h4>
                                <p className="text-xs text-zinc-400 mt-2">
                                  {renderPanelDescription(pan.description)}
                                </p>
                              </div>
                              <div className="flex justify-between items-center border-t border-zinc-900 pt-3 mt-4">
                                <span className="text-xs text-electric-cyan font-space">{pan.wattage}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Choose Storage (64GB, 128GB Memory Card) */}
                  {solarStep === 4 && (
                    <div>
                      <h3 className="text-xl text-white mb-2">
                        <span className="font-kannada">ಸಂಗ್ರಹಣಾ ಮೆಮೊರಿ ಕಾರ್ಡ್ ಆರಿಸಿ</span> / Choose Storage Memory Card
                      </h3>
                      <p className="text-xs text-zinc-500 mb-6 font-space uppercase">
                        <span className="font-kannada">ಟಿಎಫ್/ಎಸ್‌ಡಿ ಕಾರ್ಡ್ ಸಂಗ್ರಹಣಾ ಸಾಮರ್ಥ್ಯಗಳು</span> / TF/SD card storage capacities
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {accessories.filter(a => a.id === 'acc-sd64' || a.id === 'acc-sd128').map(card => {
                          const isSelected = store.solarMemoryCard?.id === card.id;
                          return (
                            <div
                              key={card.id}
                              onClick={() => store.setSolarMemoryCard(card)}
                              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-40 ${
                                isSelected 
                                  ? 'bg-electric-cyan/5 border-electric-cyan glow-cyan' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              <div>
                                <span className="text-[10px] text-zinc-500 font-space uppercase">
                                  <span className="font-kannada">ಆನ್‌ಬೋರ್ಡ್ ಫ್ಲ್ಯಾಶ್ ಮೆಮೊರಿ</span> / Onboard flash memory
                                </span>
                                <h4 className="text-lg font-space font-medium text-white mt-1">
                                  {renderAccessoryName(card.name)}
                                </h4>
                                <p className="text-xs text-zinc-400 mt-2">
                                  <span className="font-kannada">ನಿರಂತರ ಭದ್ರತಾ ಲೂಪ್ ರೆಕಾರ್ಡಿಂಗ್‌ಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಹೆಚ್ಚಿನ ವೇಗದ ರೈಟಿಂಗ್ ಸಾಮರ್ಥ್ಯ.</span> / High speed write ratings designed for constant security loop recording.
                                </p>
                              </div>
                              <div className="flex justify-between items-center border-t border-zinc-900 pt-3 mt-4">
                                <span className="text-xs text-electric-cyan font-space">MicroSD</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Accessories checklist (Excludes SD cards) */}
                  {solarStep === 5 && (
                    <div>
                      <h3 className="text-base sm:text-lg text-white mb-4 font-semibold">
                        <span className="font-kannada">ಹಾರ್ಡ್‌ವೇರ್ ಪರಿಕರಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ</span> / Select Hardware Accessories
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {accessories.filter(a => a.id !== 'acc-sd64' && a.id !== 'acc-sd128').map(acc => {
                          const isSelected = store.solarAccessories.some(a => a.id === acc.id);
                          return (
                            <div
                              key={acc.id}
                              onClick={() => store.toggleSolarAccessory(acc)}
                              className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-electric-cyan/5 border-electric-cyan' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              <span className="text-xs font-medium text-white">{renderAccessoryName(acc.name)}</span>
                              <div className="text-right shrink-0 flex items-center gap-3">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'border-electric-cyan bg-electric-cyan text-black' : 'border-zinc-700'}`}>
                                  {isSelected && <span className="text-[9px] font-bold">✓</span>}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 6: Live Summary details */}
                  {solarStep === 6 && (
                    <div>
                      <h3 className="text-base sm:text-lg text-white mb-4 font-semibold">
                        <span className="font-kannada">ಸಿಸ್ಟಮ್ ವಿವರಣೆಯ ಸಾರಾಂಶ</span> / System Specification Summary
                      </h3>
                      <div className="space-y-3 bg-zinc-950/40 p-5 rounded-2xl border border-white/5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-zinc-500"><span className="font-kannada">ಕ್ಯಾಮೆರಾ ಮಾದರಿ:</span> / Camera Model:</span>
                          <span className="text-white font-medium">{renderProductName(store.solarCamera?.name)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500"><span className="font-kannada">ಬ್ಯಾಟರಿ ಸಂಗ್ರಹಣೆ:</span> / Storage LFP Battery:</span>
                          <span className="text-white font-medium">{renderBatteryName(store.solarBattery?.name)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500"><span className="font-kannada">ಹೆಲಿಯೋಸ್ ಸೌರ ಫಲಕ:</span> / Generator Helios Panel:</span>
                          <span className="text-white font-medium">{renderPanelName(store.solarPanel?.name)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">{renderBilingual("ಮೆಮೊರಿ ಸಂಗ್ರಹಣೆ: / TF Memory Storage:")}</span>
                          <span className="text-white font-medium">{renderAccessoryName(store.solarMemoryCard?.name)}</span>
                        </div>
                        {store.solarAccessories.length > 0 && (
                          <div className="border-t border-zinc-900 pt-3">
                            <span className="text-[10px] text-zinc-600 block mb-1.5 uppercase font-space">
                              {renderBilingual("ಹೆಚ್ಚುವರಿಗಳು: / Add-ons:")}
                            </span>
                            {store.solarAccessories.map(a => (
                              <div key={a.id} className="flex justify-between text-zinc-400 mb-1">
                                <span>{renderAccessoryName(a.name)}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="border-t border-zinc-900 pt-3 text-zinc-400 text-center text-[10px] leading-relaxed">
                          <span className="text-electric-cyan font-space uppercase block mb-1">
                            <span className="font-kannada">ಕಸ್ಟಮ್ ಬೆಲೆ ವಿನಂತಿ</span> / Custom Pricing Request
                          </span>
                          <span className="font-kannada">ನಮ್ಮ ಆಡಳಿತ ತಂಡವು ಈ ತಾಂತ್ರಿಕ ವಿವರಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಬೆಲೆಯ ಉಲ್ಲೇಖವನ್ನು ಒದಗಿಸಲು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಫೋನ್ ಕರೆ ಮೂಲಕ ನಿಮ್ಮನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತದೆ.</span> / Our administration team will review these technical specifications and contact you directly via WhatsApp or phone call to provide your customized pricing quote.
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setSolarStep(7)}
                        className="w-full py-3.5 rounded-xl font-space text-xs font-semibold text-black bg-white uppercase tracking-wider mt-6 hover:bg-zinc-200 transition-colors cursor-pointer"
                      >
                        <span className="font-kannada">ಸಂಪರ್ಕ ವಿವರಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ</span> / Proceed to Contact Details
                      </button>
                    </div>
                  )}

                  {/* Step 7: Customer Details checkout */}
                  {solarStep === 7 && (
                    <div>
                      <h3 className="text-base sm:text-lg text-white mb-4 font-semibold">
                        <span className="font-kannada">ಗ್ರಾಹಕ ಸ್ಥಾಪನಾ ವಿನಂತಿ</span> / Customer Installation Request
                      </h3>
                      <form onSubmit={handleSolarSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            required
                            placeholder={tStr("ಪೂರ್ಣ ಹೆಸರು / Full Name", store.language)}
                            value={store.customerName}
                            onChange={(e) => store.setCustomerInfo({ customerName: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                          />
                          <input
                            type="tel"
                            required
                            placeholder={tStr("ಫೋನ್ ಸಂಖ್ಯೆ / Phone Number", store.language)}
                            value={store.customerPhone}
                            onChange={(e) => store.setCustomerInfo({ customerPhone: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="tel"
                            placeholder={tStr("ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ / WhatsApp Number", store.language)}
                            value={store.customerWhatsapp}
                            onChange={(e) => store.setCustomerInfo({ customerWhatsapp: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                          />
                          <input
                            type="email"
                            required
                            placeholder={tStr("ಇಮೇಲ್ ವಿಳಾಸ / Email Address", store.language)}
                            value={store.customerEmail}
                            onChange={(e) => store.setCustomerInfo({ customerEmail: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                          />
                        </div>

                        <input
                          type="text"
                          required
                          placeholder={tStr("ಬೀದಿ ವಿಳಾಸ / ಮನೆ ವಿವರಗಳು / Street Address / House details", store.language)}
                          value={store.customerAddress}
                          onChange={(e) => store.setCustomerInfo({ customerAddress: e.target.value })}
                          className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input
                            type="text"
                            placeholder={tStr("ಹಳ್ಳಿ / ಪಟ್ಟಣ / Village / Town", store.language)}
                            value={store.customerVillage}
                            onChange={(e) => store.setCustomerInfo({ customerVillage: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder={tStr("ತಾಲೂಕು / Taluk", store.language)}
                            value={store.customerTaluk}
                            onChange={(e) => store.setCustomerInfo({ customerTaluk: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder={tStr("ಜಿಲ್ಲೆ / District", store.language)}
                            value={store.customerDistrict}
                            onChange={(e) => store.setCustomerInfo({ customerDistrict: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input
                            type="text"
                            placeholder={tStr("ರಾಜ್ಯ / State", store.language)}
                            value={store.customerState}
                            onChange={(e) => store.setCustomerInfo({ customerState: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder={tStr("ಪಿನ್ ಕೋಡ್ / PIN Code", store.language)}
                            value={store.customerPin}
                            onChange={(e) => store.setCustomerInfo({ customerPin: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                          <input
                            type="date"
                            placeholder="Pref Date"
                            value={store.customerPrefDate}
                            onChange={(e) => store.setCustomerInfo({ customerPrefDate: e.target.value })}
                            className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                          />
                        </div>

                        <textarea
                          placeholder={tStr("ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಲಿಂಕ್ ಅಥವಾ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳು / Google Maps link or coordinates (GPS coordinate drop)", store.language)}
                          value={store.customerMaps}
                          onChange={(e) => store.setCustomerInfo({ customerMaps: e.target.value })}
                          rows="1"
                          className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
                        />

                        <textarea
                          placeholder={tStr("ಹೆಚ್ಚುವರಿ ಟಿಪ್ಪಣಿಗಳು... / Additional Notes...", store.language)}
                          value={store.customerNotes}
                          onChange={(e) => store.setCustomerInfo({ customerNotes: e.target.value })}
                          rows="2"
                          className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
                        />

                        <button
                          type="submit"
                          disabled={store.isSubmitting}
                          className="w-full py-3 rounded-lg font-space text-xs font-semibold text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer mt-4"
                        >
                          {store.isSubmitting ? (
                            <><RefreshCw className="w-4 h-4 animate-spin" /> {renderBilingual("ಉಲ್ಲೇಖವನ್ನು ಉಳಿಸಲಾಗುತ್ತಿದೆ... / Saving quote...")}</>
                          ) : (
                            <>{renderBilingual("ಸೌರ ಉಲ್ಲೇಖ ಸಲ್ಲಿಸಿ ಮತ್ತು ಪಿಡಿಎಫ್ ರಚಿಸಿ / Submit Solar Quote & Generate PDF")}</>
                          )}
                        </button>
                      </form>
                    </div>
                  )}


                </div>
              </div>
            ) : (
              /* ELECTRIC CCTV PAGE */
              <div className="glass-panel p-4 md:p-6 rounded-2xl border border-white/5 bg-zinc-950/20">
                <h3 className="text-base sm:text-lg text-white mb-4 font-semibold">
                  {renderBilingual("ವಿದ್ಯುತ್ ಸಿಸಿಟಿವಿ ಕಾನ್ಫಿಗರೇಶನ್ / Configure Electric CCTV")}
                </h3>
                
                <form onSubmit={handleElectricSubmit} className="space-y-6">
                  
                  {/* Select Camera Type (WiFi, IP, IR) */}
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3">
                      {renderBilingual("ಕ್ಯಾಮೆರಾ ಲೈನ್ ಆಯ್ಕೆಮಾಡಿ / Choose Camera Line")}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['WiFi Camera', 'IP Camera', 'IR Camera'].map(cls => (
                        <button
                          key={cls}
                          type="button"
                          onClick={() => store.setElectricClass(cls)}
                          className={`py-2.5 rounded-lg border font-space text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            store.electricClass === cls
                              ? 'border-electric-cyan bg-electric-cyan/5 text-electric-cyan glow-cyan font-medium'
                              : 'border-zinc-900 bg-zinc-950/40 text-zinc-400 hover:border-zinc-800'
                          }`}
                        >
                          {cls === 'WiFi Camera' ? <>{store.language === 'kn' && <span className="font-kannada block text-[8px] normal-case">ವೈಫೈ ಕ್ಯಾಮೆರಾ</span>}WiFi Camera</> :
                           cls === 'IP Camera' ? <>{store.language === 'kn' && <span className="font-kannada block text-[8px] normal-case">ಐಪಿ ಕ್ಯಾಮೆರಾ</span>}IP Camera</> :
                           <>{store.language === 'kn' && <span className="font-kannada block text-[8px] normal-case">ಐಆರ್ ಕ್ಯಾಮೆರಾ</span>}IR Camera</>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sub option selectors depending on camera line */}
                  {store.electricClass === 'WiFi Camera' ? (
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3">
                        {renderBilingual("ವೈಫೈ ಕ್ಯಾಮೆರಾ ಮಾದರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ / Select WiFi Camera Model")}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {solarCameras.map(cam => {
                          const isSelected = store.solarCamera?.id === cam.id;
                          return (
                            <div
                              key={cam.id}
                              onClick={() => store.setSolarCamera(cam)}
                              className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-between text-center ${
                                isSelected 
                                  ? 'bg-electric-cyan/5 border-electric-cyan glow-cyan' 
                                  : 'bg-zinc-950/60 border-zinc-900 hover:border-zinc-800'
                              }`}
                            >
                              <div className="w-10 h-10 bg-zinc-950 rounded-lg overflow-hidden flex items-center justify-center p-1 mb-1.5">
                                <img src={cam.image} alt={cam.name} className="w-full h-full object-contain" />
                              </div>
                              <span className="text-[8px] font-space font-medium text-white block leading-tight min-h-[16px]">
                                {renderProductName(cam.name)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3">
                        {renderBilingual("ರೆಸಲ್ಯೂಶನ್ ದರ್ಜೆ / Resolution Grade")}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['2MP', '5MP'].map(res => (
                          <button
                            key={res}
                            type="button"
                            onClick={() => store.setElectricRes(res)}
                            className={`py-2 rounded-lg border text-xs transition-all cursor-pointer ${
                              store.electricRes === res
                                ? 'border-electric-cyan text-electric-cyan'
                                : 'border-zinc-900 text-zinc-400'
                            }`}
                          >
                            {res}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity selector nodes */}
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3">
                      {renderBilingual("ಕ್ಯಾಮೆರಾಗಳ ಸಂಖ್ಯೆ / Camera Quantity Nodes")}
                    </label>
                    <div className="grid grid-cols-7 gap-2">
                      {(store.electricClass === 'WiFi Camera' ? [1, 2] : [1, 2, 4, 6, 8, 16, 32]).map(qty => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => store.setElectricQty(qty)}
                          className={`py-2.5 rounded-lg border font-space text-xs transition-all cursor-pointer ${
                            store.electricQty === qty
                              ? 'border-electric-cyan bg-electric-cyan/10 text-electric-cyan font-semibold'
                              : 'border-zinc-900 text-zinc-400'
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Storage Size & Installation Environment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2.5">
                        {renderBilingual("ಸಂಗ್ರಹಣಾ ಸಾಮರ್ಥ್ಯ / Storage Capacity")}
                      </label>
                      <select
                        value={store.electricStorage}
                        onChange={(e) => store.setElectricStorage(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      >
                        {store.electricClass === 'WiFi Camera' ? (
                          <>
                            <option value="64GB">{tStr("64GB ಮೆಮೊರಿ ಕಾರ್ಡ್ / 64GB Memory Card", store.language)}</option>
                            <option value="128GB">{tStr("128GB ಮೆಮೊರಿ ಕಾರ್ಡ್ / 128GB Memory Card", store.language)}</option>
                          </>
                        ) : (
                          <>
                            <option value="500GB">{tStr("500GB ಸಿಸಿಟಿವಿ ಸಂಗ್ರಹಣೆ / 500GB CCTV Storage", store.language)}</option>
                            <option value="1TB">{tStr("1TB ಸಿಸಿಟಿವಿ ಸಂಗ್ರಹಣೆ / 1TB CCTV Storage", store.language)}</option>
                            <option value="2TB">{tStr("2TB ಸಿಸಿಟಿವಿ ಸಂಗ್ರಹಣೆ / 2TB CCTV Storage", store.language)}</option>
                            <option value="4TB">{tStr("4TB ಸಿಸಿಟಿವಿ ಸಂಗ್ರಹಣೆ / 4TB CCTV Storage", store.language)}</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2.5">
                        {renderBilingual("ಸ್ಥಾಪನಾ ವ್ಯಾಪ್ತಿ / Installation Scope")}
                      </label>
                      <select
                        value={store.electricInstallation}
                        onChange={(e) => store.setElectricInstallation(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      >
                        <option value="Indoor">{tStr("ಒಳಾಂಗಣ ಮಾತ್ರ / Indoor Only", store.language)}</option>
                        <option value="Outdoor">{tStr("ಹೊರಾಂಗಣ ಮಾತ್ರ / Outdoor Only", store.language)}</option>
                        <option value="Mixed">{tStr("ಮಿಶ್ರ ಒಳಾಂಗಣ ಮತ್ತು ಹೊರಾಂಗಣ / Mixed Indoor & Outdoor", store.language)}</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom quote notice */}
                  <div className="bg-zinc-950/80 rounded-2xl border border-white/5 p-5 text-xs text-center leading-relaxed">
                    <span className="text-electric-cyan font-space uppercase block mb-1 font-semibold">
                      {renderBilingual("ಕಸ್ಟಮ್ ಬೆಲೆ ಉಲ್ಲೇಖ / Custom Pricing Quote")}
                    </span>
                    {renderBilingual("ನಮ್ಮ ಆಡಳಿತ ತಂಡವು ಮಿಶ್ರ ಲೇಔಟ್ ನೋಡ್ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ಮತ್ತು ಕಸ್ಟಮ್ ಇನ್‌ವಾಯ್ಸ್ ಉಲ್ಲೇಖವನ್ನು ಒದಗಿಸಲು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಫೋನ್ ಕರೆ ಮೂಲಕ ಸಂಪರ್ಕಿಸುತ್ತದೆ. / Our admin team will reach out via WhatsApp or phone call to review your mixed layout node count and supply a custom invoice quote.")}
                  </div>

                  {/* Customer Information forms */}
                  <div className="border-t border-zinc-900 pt-6 space-y-4">
                    <h4 className="text-md text-white mb-2 font-space">
                      {renderBilingual("ಸ್ಥಾಪನಾ ವಿವರಗಳು / Installation details")}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="ಪೂರ್ಣ ಹೆಸರು / Full Name"
                        value={store.customerName}
                        onChange={(e) => store.setCustomerInfo({ customerName: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="ಫೋನ್ ಸಂಖ್ಯೆ / Phone Number"
                        value={store.customerPhone}
                        onChange={(e) => store.setCustomerInfo({ customerPhone: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ / WhatsApp Number"
                        value={store.customerWhatsapp}
                        onChange={(e) => store.setCustomerInfo({ customerWhatsapp: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="ಇಮೇಲ್ ವಿಳಾಸ / Email Address"
                        value={store.customerEmail}
                        onChange={(e) => store.setCustomerInfo({ customerEmail: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="ಬೀದಿ ವಿಳಾಸ / Street Address"
                      value={store.customerAddress}
                      onChange={(e) => store.setCustomerInfo({ customerAddress: e.target.value })}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="ಹಳ್ಳಿ / Village"
                        value={store.customerVillage}
                        onChange={(e) => store.setCustomerInfo({ customerVillage: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="ತಾಲೂಕು / Taluk"
                        value={store.customerTaluk}
                        onChange={(e) => store.setCustomerInfo({ customerTaluk: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="ಜಿಲ್ಲೆ / District"
                        value={store.customerDistrict}
                        onChange={(e) => store.setCustomerInfo({ customerDistrict: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="ಪಿನ್ ಕೋಡ್ / PIN Code"
                        value={store.customerPin}
                        onChange={(e) => store.setCustomerInfo({ customerPin: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                      <input
                        type="date"
                        placeholder="Pref Date"
                        value={store.customerPrefDate}
                        onChange={(e) => store.setCustomerInfo({ customerPrefDate: e.target.value })}
                        className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={store.isSubmitting}
                    className="w-full py-4 rounded-xl font-space text-xs font-semibold text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {store.isSubmitting ? (
                      <><RefreshCw className="w-4 h-4 animate-spin" /> {renderBilingual("ಆರ್ಡರ್ ಉಳಿಸಲಾಗುತ್ತಿದೆ... / Saving order...")}</>
                    ) : (
                      <>{renderBilingual("ಸ್ಥಾಪನೆ ಬುಕ್ ಮಾಡಿ ಮತ್ತು ಉಲ್ಲೇಖವನ್ನು ಪಡೆಯಿರಿ / Book Installation & Generate Quote")}</>
                    )}
                  </button>
                </form>
              </div>
            )}

          </div>

          {/* RIGHT PANEL: Live Visual Preview and Specifications Summary */}
          <div className="lg:col-span-5 sticky top-32 glass-panel rounded-3xl p-6 border border-white/5 flex flex-col items-center min-h-[500px]">
            <div className="w-full flex justify-between items-center border-b border-zinc-900 pb-4 mb-8">
              <span className="text-xs text-zinc-400 font-space uppercase tracking-widest">
                {renderBilingual("ಕಾನ್ಫಿಗರೇಶನ್ ರೆಂಡರರ್ / Configuration Renderer")}
              </span>
              <span className="text-[10px] text-zinc-500 font-space uppercase">
                {renderBilingual("ತ್ವರಿತ ವೀಕ್ಷಣೆ / Instant view")}
              </span>
            </div>

            {/* Generated Image Showcase */}
            <div className="relative w-full h-[250px] border border-white/5 rounded-2xl overflow-hidden bg-zinc-950/80 flex items-center justify-center mb-8 shadow-inner group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              
              {/* Show selected camera image */}
              {store.configType === 'solar' ? (
                <img 
                  src={store.solarCamera?.image} 
                  alt={store.solarCamera?.name} 
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,245,255,0.15)] animate-float relative z-0" 
                />
              ) : (
                <img 
                  src={getElectricCameraImage()} 
                  alt="Electric Camera Setup" 
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,245,255,0.15)] animate-float relative z-0" 
                />
              )}

              {/* Float specs badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-space text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping"></span> 
                  {store.configType === 'solar' ? renderBilingual("ಸೌರ ಲೂಪ್ / Solar Loop") : renderBilingual("ಗ್ರಿಡ್ ಲೂಪ್ / Grid Loop")}
                </span>
                <span>
                  {store.configType === 'solar' ? renderBilingual("ಸೌರ ಸಿಸಿಟಿವಿ / Solar CCTV") : renderBilingual("ವಿದ್ಯುತ್ ಸಿಸಿಟಿವಿ / Electric CCTV")}
                </span>
              </div>
            </div>

            {/* Configured Item Details breakdown list */}
            <div className="w-full space-y-3 leading-relaxed text-xs">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block border-b border-zinc-900 pb-1.5 font-medium">
                {renderBilingual("ಕಾನ್ಫಿಗರೇಶನ್ ವಿವರಣೆಗಳು / Configuration specifications")}
              </span>
              
              {store.configType === 'solar' ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಕ್ಯಾಮೆರಾ ನೋಡ್: / Camera Node:")}</span>
                    <span className="text-zinc-300 font-medium">{renderProductName(store.solarCamera?.name)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಬ್ಯಾಟರಿ ಸಂಗ್ರಹಣೆ: / LFP Battery Storage:")}</span>
                    <span className="text-zinc-300 font-medium">{renderBatteryName(store.solarBattery?.name)} ({store.solarBattery?.capacity})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಸೌರ ಫಲಕ: / Albedo Solar input:")}</span>
                    <span className="text-zinc-300 font-medium">{renderPanelName(store.solarPanel?.name)} ({store.solarPanel?.wattage})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500"><span className="font-kannada">ಮೆಮೊರಿ ಸಂಗ್ರಹಣೆ:</span> / TF Memory Storage:</span>
                    <span className="text-zinc-300 font-medium">{renderAccessoryName(store.solarMemoryCard?.name)}</span>
                  </div>
                  {store.solarAccessories.length > 0 && (
                    <div className="border-t border-zinc-900/60 pt-2 space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase font-space tracking-wider">
                        <span className="font-kannada">ಹೆಚ್ಚುವರಿಗಳು:</span> / Add-ons:
                      </span>
                      {store.solarAccessories.map(a => (
                        <div key={a.id} className="flex justify-between pl-2">
                          <span className="text-zinc-500 font-light">• {renderAccessoryName(a.name)}</span>
                          <span className="text-zinc-300">{renderBilingual("ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ / Selected")}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಕ್ಯಾಮೆರಾ ಶ್ರೇಣಿ: / Category Line:")}</span>
                    <span className="text-zinc-300 font-medium">
                      {store.electricClass === 'WiFi Camera' ? <><span className="font-kannada">ವೈಫೈ ಕ್ಯಾಮೆರಾ</span> / WiFi Camera</> :
                       store.electricClass === 'IP Camera' ? <><span className="font-kannada">ಐಪಿ ಕ್ಯಾಮೆರಾ</span> / IP Camera</> :
                       <><span className="font-kannada">ಐಆರ್ ಕ್ಯಾಮೆರಾ</span> / IR Camera</>} ({store.electricQty} {renderBilingual("ಯುನಿಟ್‌ಗಳು / units")})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಸಂಗ್ರಹಣಾ ಗಾತ್ರ: / Storage Size:")}</span>
                    <span className="text-zinc-300 font-medium">{store.electricStorage}</span>
                  </div>
                  {store.getElectricBreakdown().dvrModel && (
                    <div className="flex justify-between">
                      <span className="text-zinc-500">
                        {store.getElectricBreakdown().dvrModel.includes('DVR') ? renderBilingual("ಡಿವಿಆರ್ ರ್ಯಾಕ್: / DVR Rack:") : renderBilingual("ಎನ್‌ವಿಆರ್ ರ್ಯಾಕ್: / NVR Rack:")}
                      </span>
                      <span className="text-zinc-300 font-medium">
                        {store.getElectricBreakdown().dvrModel}
                      </span>
                    </div>
                  )}
                </>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Play Video Lightbox overlay */}
      {videoModalUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
          <div className="relative max-w-3xl w-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden aspect-video">
            <button
              onClick={() => setVideoModalUrl(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <video 
              src={videoModalUrl} 
              autoPlay 
              controls 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      )}

      {/* Product specs popup modal */}
      {previewCamera && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setPreviewCamera(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Big Image & Play Video */}
              <div className="flex flex-col gap-4">
                <div className="aspect-square bg-zinc-900/60 border border-white/5 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group">
                  <img src={previewCamera.image} alt={previewCamera.name} className="w-full h-full object-contain" />
                </div>
                {previewCamera.videoUrl && (
                  <button
                    onClick={() => {
                      setVideoModalUrl(Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4');
                      setPreviewCamera(null);
                    }}
                    className="w-full py-3 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center gap-2 cursor-pointer font-space uppercase tracking-wider"
                  >
                    <Play className="w-4 h-4" /> {renderBilingual("ಡೆಮೊ ಪ್ಲೇ ಮಾಡಿ / Play Demo")}
                  </button>
                )}
              </div>

              {/* Right Column: Specs list */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest font-space text-electric-cyan">
                    {previewCamera.brand} &bull; {previewCamera.modelNumber || 'PIM Specs'}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-1">{renderProductName(previewCamera.name)}</h4>
                  <span className="text-[10px] text-zinc-500 font-space block mt-0.5">SKU: {previewCamera.sku || 'N/A'}</span>
                  
                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                    {renderProductDescription(previewCamera.description || previewCamera.shortDescription)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ರಾತ್ರಿ ದೃಷ್ಟಿ: / Night Vision:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{renderBilingual(previewCamera.features?.nightVision || 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಆಪ್ಟಿಕಲ್ ಜೂಮ್: / Optical Zoom:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{renderBilingual(previewCamera.features?.zoom || 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಎಐ ಪತ್ತೆ: / AI Detection:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{renderBilingual(previewCamera.features?.humanDetection || 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಚಲನೆಯ ಸಂವೇದಕ: / Motion Sensor:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{renderBilingual(previewCamera.features?.motionDetection || 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ಇಂಟರ್‌ಕಾಮ್ ಆಡಿಯೋ: / Intercom Audio:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{renderBilingual(previewCamera.features?.twoWayAudio || 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{renderBilingual("ವಾರಂಟಿ ನಿಯಮಗಳು: / Warranty Terms:")}</span>
                    <span className="text-zinc-300 font-medium text-right">{previewCamera.warrantyDetails || renderBilingual(previewCamera.features?.warranty || '5 Years')}</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => {
                      store.setSolarCamera(previewCamera);
                      setPreviewCamera(null);
                      store.addToast(`Selected ${previewCamera.name}`, 'success');
                    }}
                    className="flex-grow py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold font-space text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {renderBilingual("ಆಯ್ಕೆಮಾಡಿ / Select Camera Node")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
