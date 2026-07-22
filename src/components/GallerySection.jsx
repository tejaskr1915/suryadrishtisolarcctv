import React, { useState } from 'react';
import { Image as ImageIcon, Eye, X, ZoomIn, Play } from 'lucide-react';

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

const renderBilingual = (text) => {
  if (typeof text !== 'string') return text;
  if (text.includes(' / ')) {
    const [kn, en] = text.split(' / ');
    return (
      <>
        <span className="font-kannada">{kn}</span>
        <span className="text-zinc-500 font-light mx-1">/</span>
        <span>{en}</span>
      </>
    );
  }
  return text;
};

const categoryBilingual = (category) => {
  switch (category) {
    case 'solar-cam':
      return <><span className="font-kannada">ಸೌರ ಕ್ಯಾಮೆರಾ</span> / Solar Cam</>;
    case 'ip-cam':
      return <><span className="font-kannada">ಐಪಿ ಸರಣಿ</span> / IP Series</>;
    case 'elec-cam':
      return <><span className="font-kannada">ವಿದ್ಯುತ್ ಸರಣಿ</span> / Electric Series</>;
    case 'ir-cam':
      return <><span className="font-kannada">ಐಆರ್ ಸರಣಿ</span> / IR Series</>;
    default:
      return category;
  }
};

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null); // Local demo video url state

  const handleItemClick = (item) => {
    setLightboxItem(item);
    if (item.type === 'video' && item.videoUrl) {
      setPlayingVideo(item.videoUrl);
    } else {
      setPlayingVideo(null);
    }
  };

  const categories = [
    { id: 'all', label: <><span className="font-kannada">ಎಲ್ಲಾ ಪ್ರದರ್ಶನಗಳು</span> / All Showcase</> },
    { id: 'solar-cam', label: <><span className="font-kannada">ಸೌರ ಕ್ಯಾಮೆರಾಗಳು</span> / Solar Cameras</> },
    { id: 'ip-cam', label: <><span className="font-kannada">ಐಪಿ ಸರಣಿ</span> / IP Series</> },
    { id: 'elec-cam', label: <><span className="font-kannada">ವಿದ್ಯುತ್ ಸರಣಿ</span> / Electric Series</> },
    { id: 'ir-cam', label: <><span className="font-kannada">ಐಆರ್ ಸರಣಿ</span> / IR Series</> }
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery-section" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-electric-emerald/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold">
            <span className="font-kannada">ಉತ್ಪನ್ನ ವಿವರಪಟ್ಟಿ</span> / Product Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            <span className="font-kannada">ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾ ಗ್ಯಾಲರಿ</span> / CCTV Hardware Gallery
          </h2>
          <p className="text-zinc-400 font-light mt-4">
            <span className="font-kannada">ಬಳಕೆದಾರರು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಸೌರ ಸೆಟಪ್‌ಗಳು, ಐಪಿ ಡೋಮ್ ನೋಡ್‌ಗಳು ಮತ್ತು ಎಕ್ಸ್‌ಟ್ರೀಮ್ ಲೋ-ಲಕ್ಸ್ ಇನ್‌ಫ್ರಾರೆಡ್ ಹಾರ್ಡ್‌ವೇರ್‌ಗಳ ವಿವರವಾದ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ.</span> / Browse through our extensive catalog of user-configured solar setups, IP dome nodes, and extreme low-lux infrared hardware.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full font-space text-[10px] uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                filter === cat.id
                  ? 'bg-electric-cyan border-electric-cyan text-black font-semibold shadow-lg shadow-electric-cyan/15'
                  : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group relative bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-electric-cyan/30 hover:shadow-[0_12px_24px_rgba(0,245,255,0.04)] hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-square bg-zinc-950 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover overlay badge */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.type === 'video' ? <Play className="w-5 h-5 fill-black ml-0.5" /> : <ZoomIn className="w-5 h-5" />}
                  </div>
                </div>

                {/* Play icon overlay for video type */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-md z-20">
                    <Play className="w-3.5 h-3.5 fill-black ml-0.5 animate-pulse" />
                  </div>
                )}

                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[8px] font-space font-semibold uppercase tracking-wider border border-white/10 bg-zinc-900/90 text-zinc-400 z-10">
                  {categoryBilingual(item.category)}
                </span>
              </div>

              {/* Descriptions */}
              <div className="p-5 border-t border-zinc-900 bg-zinc-900/20">
                <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {renderBilingual(item.title)}
                </h4>
                <p className="text-[10px] text-zinc-500 font-light mt-1.5 leading-relaxed">
                  {renderBilingual(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-xs font-space uppercase">
            <span className="font-kannada">ಯಾವುದೇ ಸ್ವತ್ತುಗಳು ಕಂಡುಬಂದಿಲ್ಲ</span> / No assets found matching this filter
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => { setLightboxItem(null); setPlayingVideo(null); }}
        >
          <button
            onClick={() => { setLightboxItem(null); setPlayingVideo(null); }}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div 
            className="max-w-4xl w-full flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {!playingVideo ? (
              <div className="relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4">
                <img 
                  src={lightboxItem.img} 
                  alt={lightboxItem.title} 
                  className="max-w-full max-h-[48vh] object-contain rounded-xl"
                />
                <button
                  onClick={() => setPlayingVideo(Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4')}
                  className="px-5 py-2.5 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center gap-2 cursor-pointer font-space uppercase tracking-wider"
                >
                  <Play className="w-4 h-4 animate-pulse" /> <span className="font-kannada">ವಿಡಿಯೋ ಡೆಮೊ ವೀಕ್ಷಿಸಿ</span> / Play Video Demo
                </button>
              </div>
            ) : (
              <div className="relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4">
                <video 
                  src={playingVideo} 
                  autoPlay 
                  controls 
                  className="max-w-full max-h-[48vh] object-contain rounded-xl aspect-video border border-white/5" 
                />
                <button
                  onClick={() => setPlayingVideo(null)}
                  className="px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs hover:bg-zinc-800 transition-all cursor-pointer font-space uppercase tracking-wider"
                >
                  <span className="font-kannada">ಚಿತ್ರಕ್ಕೆ ಹಿಂತಿರುಗಿ</span> / Back to Image
                </button>
              </div>
            )}
            
            <div className="text-center max-w-lg">
              <span className="text-[8px] text-electric-cyan font-space uppercase tracking-widest font-semibold">
                {categoryBilingual(lightboxItem.category)}
              </span>
              <h3 className="text-lg font-space font-medium text-white mt-1">
                {renderBilingual(lightboxItem.title)}
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                {renderBilingual(lightboxItem.desc)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
