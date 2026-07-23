import React, { useState } from 'react';
import { Image as ImageIcon, Eye, X, ZoomIn, Play } from 'lucide-react';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t, tStr } from '../utils/translate';

const GALLERY_ITEMS = [
  // SOLAR CAMERAS
  {
    id: 'sol-6',
    category: 'solar-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 10ಎಂಪಿ / THINKWILL Smart 4G PT Linkage + Zoom Camera 10MP',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 5ಎಂಪಿ + 5ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 5MP + 5MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784796507943.jpg'
  },
  {
    id: 'sol-7',
    category: 'solar-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಮಿನಿ ಕ್ಯಾಮೆರಾ ಆಡಿಯೋದೊಂದಿಗೆ / THINKWILL Smart 4G PT Mini Camera with Audio',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 3ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 3MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784796864746.jpg'
  },
  {
    id: 'sol-8',
    category: 'solar-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಕ್ಯಾಮೆರಾ ಆಡಿಯೋದೊಂದಿಗೆ / THINKWILL Smart 4G PT Linkage Camera with Audio',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 3ಎಂಪಿ + 3ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 3MP + 3MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784817123415.png'
  },
  {
    id: 'sol-9',
    category: 'solar-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಟ್ರಿಪಲ್ ಇಮೇಜ್ ಕ್ಯಾಮೆರಾ / THINKWILL Smart 4G PT Triple Image Camera',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಆಡಿಯೋದೊಂದಿಗೆ 6ಎಂಪಿ + 6ಎಂಪಿ + 6ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with Audio 6MP + 6MP + 6MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784817310915.jpg'
  },
  {
    id: 'sol-10',
    category: 'solar-cam',
    title: 'ಕನ್ಸಿಸ್ಟೆಂಟ್ 4G ಡ್ಯುಯಲ್-ಲಿಂಕ್‌ಕೇಜ್ 3ಎಂಪಿ + 3ಎಂಪಿ ಪಿಟಿ ಕ್ಯಾಮೆರಾ / Consistent 4G Dual-Linkage 3mp + 3mp PT Camera',
    desc: '4G ಡ್ಯುಯಲ್-ಲಿಂಕ್‌ಕೇಜ್ 3ಎಂಪಿ + 3ಎಂಪಿ ಪಿಟಿ ಕ್ಯಾಮೆರಾ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G Dual-Linkage 3MP + 3MP PT Camera, 256GB TF card, Consistent Smart app, 2-way communication.',
    img: '/images/media__1784817467778.jpg'
  },

  // ELECTRIC CAMERAS
  {
    id: 'elec-9',
    category: 'elec-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 10ಎಂಪಿ / THINKWILL Smart 4G PT Linkage + Zoom Camera 10MP',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 5ಎಂಪಿ + 5ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 5MP + 5MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784796507943.jpg'
  },
  {
    id: 'elec-10',
    category: 'elec-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಮಿನಿ ಕ್ಯಾಮೆರಾ ಆಡಿಯೋದೊಂದಿಗೆ / THINKWILL Smart 4G PT Mini Camera with Audio',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 3ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 3MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784796864746.jpg'
  },
  {
    id: 'elec-11',
    category: 'elec-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಕ್ಯಾಮೆರಾ ಆಡಿಯೋದೊಂದಿಗೆ / THINKWILL Smart 4G PT Linkage Camera with Audio',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಜೂಮ್ ಕ್ಯಾಮೆರಾ 3ಎಂಪಿ + 3ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with zoom camera 3MP + 3MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784817123415.png'
  },
  {
    id: 'elec-12',
    category: 'elec-cam',
    title: 'ಥಿಂಕ್‌ವಿಲ್ ಸ್ಮಾರ್ಟ್ 4G ಪಿಟಿ ಟ್ರಿಪಲ್ ಇಮೇಜ್ ಕ್ಯಾಮೆರಾ / THINKWILL Smart 4G PT Triple Image Camera',
    desc: '4G ಪಿಟಿ ಲಿಂಕ್‌ಕೇಜ್ ಆಡಿಯೋದೊಂದಿಗೆ 6ಎಂಪಿ + 6ಎಂಪಿ + 6ಎಂಪಿ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ವೀಸ್ಕಿ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G PT linkage with Audio 6MP + 6MP + 6MP, 256GB TF card, VEESKY app, 2-way communication.',
    img: '/images/media__1784817310915.jpg'
  },
  {
    id: 'elec-13',
    category: 'elec-cam',
    title: 'ಕನ್ಸಿಸ್ಟೆಂಟ್ 4G ಡ್ಯುಯಲ್-ಲಿಂಕ್‌ಕೇಜ್ 3ಎಂಪಿ + 3ಎಂಪಿ ಪಿಟಿ ಕ್ಯಾಮೆರಾ / Consistent 4G Dual-Linkage 3mp + 3mp PT Camera',
    desc: '4G ಡ್ಯುಯಲ್-ಲಿಂಕ್‌ಕೇಜ್ 3ಎಂಪಿ + 3ಎಂಪಿ ಪಿಟಿ ಕ್ಯಾಮೆರಾ, 256ಜಿಬಿ ಟಿಎಫ್ ಕಾರ್ಡ್, ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಆಪ್, ದ್ವಿಮುಖ ಆಡಿಯೋ. / 4G Dual-Linkage 3MP + 3MP PT Camera, 256GB TF card, Consistent Smart app, 2-way communication.',
    img: '/images/media__1784817467778.jpg'
  },
    {
      id: 'ip-1',
      category: 'ip-cam',
      title: 'Thinkwill Smart IP Camera Series / THINKWILL Smart IP Camera Series',
      desc: 'High‑resolution IP dome camera with 4G connectivity, 256 GB TF card support, VEESKY app, 2‑way audio, motion detection for human, vehicle, animal, siren with light and voice.',
      img: '/images/ip1.jpg'
    },

    {
      id: 'ip-2',
      category: 'ip-cam',
      title: 'Hikvision Bullet IP Camera / HIKVISION Bullet IP Camera',
      desc: 'High resolution network bullet camera with night vision and mobile app support. / High resolution network bullet camera with night vision and mobile app support.',
      img: '/images/media__1784818962893.jpg'
    },
    {
      id: 'ip-3',
      category: 'ip-cam',
      title: 'Hikvision 8-Camera DVR Kit / HIKVISION 8-Camera DVR Kit',
      desc: 'Complete 8-channel DVR security system with bullet and dome cameras. / Complete 8-channel DVR security system with bullet and dome cameras.',
      img: '/images/media__1784818962921.jpg'
    },
    {
      id: 'ip-4',
      category: 'ip-cam',
      title: 'CP Plus Dome IP Camera / CP PLUS Dome IP Camera',
      desc: 'High resolution dome IP camera for indoor and outdoor surveillance. / High resolution dome IP camera for indoor and outdoor surveillance.',
      img: '/images/media__1784818963121.jpg'
    },
    {
      id: 'ir-2',
      category: 'ir-cam',
      title: 'CP Plus Bullet IR Camera (Color) / CP PLUS Bullet IR Camera (Color)',
      desc: 'Night vision IR bullet camera with long range detection. / Night vision IR bullet camera with long range detection.',
      img: '/images/media__1784818962908.jpg'
    },
    {
      id: 'ir-3',
      category: 'ir-cam',
      title: 'Hikvision Dome IR Camera / HIKVISION Dome IR Camera',
      desc: 'Infrared dome camera for exceptional low light performance. / Infrared dome camera for exceptional low light performance.',
      img: '/images/media__1784819015020.jpg'
    },
    {
      id: 'ir-4',
      category: 'ir-cam',
      title: 'CP Plus Bullet IR Camera / CP PLUS Bullet IR Camera',
      desc: 'Infrared bullet camera for reliable outdoor security. / Infrared bullet camera for reliable outdoor security.',
      img: '/images/media__1784819014939.jpg'
    },
];

export default function GallerySection() {
  const store = useConfiguratorStore();

  const renderBilingual = (text) => t(text, store.language);
  const categoryBilingual = (category) => {
    switch (category) {
      case 'solar-cam':
        return t('ಸೌರ ಕ್ಯಾಮೆರಾ / Solar Cam', store.language);
      case 'ip-cam':
        return t('ಐಪಿ ಸರಣಿ / IP Series', store.language);
      case 'elec-cam':
        return t('ವಿದ್ಯುತ್ ಸರಣಿ / Electric Series', store.language);
      case 'ir-cam':
        return t('ಐಆರ್ ಸರಣಿ / IR Series', store.language);
      default:
        return category;
    }
  };
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
    { id: 'all', label: t('ಎಲ್ಲಾ ಪ್ರದರ್ಶನಗಳು / All Showcase', store.language) },
    { id: 'solar-cam', label: t('ಸೌರ ಕ್ಯಾಮೆರಾಗಳು / Solar Cameras', store.language) },
    { id: 'ip-cam', label: t('ಐಪಿ ಸರಣಿ / IP Series', store.language) },
    { id: 'elec-cam', label: t('ವಿದ್ಯುತ್ ಸರಣಿ / Electric Series', store.language) },
    { id: 'ir-cam', label: t('ಐಆರ್ ಸರಣಿ / IR Series', store.language) }
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
            {t('ಉತ್ಪನ್ನ ವಿವರಪಟ್ಟಿ / Product Catalog', store.language)}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            {t('ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾ ಗ್ಯಾಲರಿ / CCTV Hardware Gallery', store.language)}
          </h2>
          <p className="text-zinc-400 font-light mt-4">
            {t('ಬಳಕೆದಾರರು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಸೌರ ಸೆಟಪ್‌ಗಳು, ಐಪಿ ಡೋಮ್ ನೋಡ್‌ಗಳು ಮತ್ತು ಎಕ್ಸ್‌ಟ್ರೀಮ್ ಲೋ-ಲಕ್ಸ್ ಇನ್‌ಫ್ರಾರೆಡ್ ಹಾರ್ಡ್‌ವೇರ್‌ಗಳ ವಿವರವಾದ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ. / Browse through our extensive catalog of user-configured solar setups, IP dome nodes, and extreme low-lux infrared hardware.', store.language)}
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group relative bg-zinc-900/40 rounded-xl sm:rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-electric-cyan/30 hover:shadow-[0_12px_24px_rgba(0,245,255,0.04)] hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-square bg-zinc-950 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover overlay badge */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.type === 'video' ? <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black ml-0.5" /> : <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </div>

                {/* Play icon overlay for video type */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-md z-20">
                    <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-black ml-0.5 animate-pulse" />
                  </div>
                )}

                {/* Category Tag */}
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[6px] sm:text-[8px] font-space font-semibold uppercase tracking-wider border border-white/10 bg-zinc-900/90 text-zinc-400 z-10">
                  {categoryBilingual(item.category)}
                </span>
              </div>

              {/* Descriptions */}
              <div className="p-3 sm:p-5 border-t border-zinc-900 bg-zinc-900/20">
                <h4 className="text-[10px] sm:text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors leading-tight">
                  {renderBilingual(item.title)}
                </h4>
                <p className="text-[8px] sm:text-[10px] text-zinc-500 font-light mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                  {renderBilingual(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-xs font-space uppercase">
            {renderBilingual("ಯಾವುದೇ ಸ್ವತ್ತುಗಳು ಕಂಡುಬಂದಿಲ್ಲ / No assets found matching this filter")}
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
                  <Play className="w-4 h-4 animate-pulse" /> {renderBilingual("ವಿಡಿಯೋ ಡೆಮೊ ವೀಕ್ಷಿಸಿ / Play Video Demo")}
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
                  {renderBilingual("ಚಿತ್ರಕ್ಕೆ ಹಿಂತಿರುಗಿ / Back to Image")}
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
