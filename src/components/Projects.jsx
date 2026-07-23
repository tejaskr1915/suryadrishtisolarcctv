import React, { useState } from 'react';
import { db } from '../utils/dbMock';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t } from '../utils/translate';
import { MapPin, Star, Eye, Calendar, UserCheck, Shield } from 'lucide-react';

export default function Projects() {
  const store = useConfiguratorStore();
  const projects = db.getProjects();
  const [selectedProjRaw, setSelectedProjRaw] = useState(projects[0]);
  const [comparisonSliderVal, setComparisonSliderVal] = useState(50); // percentage for before/after split

  const renderBilingual = (text) => t(text, store.language);

  const getBilingualProject = (proj) => {
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
      'Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.':
        'ಅದ್ಭುತವಾಗಿದೆ! ಕ್ಯಾಮೆರಾ ಕೇವಲ ಸೌರಶಕ್ತಿಯಿಂದಲೇ ದೋಷರಹಿತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಈ ಸ್ಮಾರ್ಟ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ. / Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.',
      'The active object tracking has already stopped three trespassers. Dashboard notifications are instant.':
        'ಸಕ್ರಿಯ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಈಗಾಗಲೇ ಮೂವರು ಅತಿಕ್ರಮಣಕಾರರನ್ನು تಡೆದಿದೆ. ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅಧಿಸೂಚನೆಗಳು ತ್ವರಿತವಾಗಿವೆ. / The active object tracking has already stopped three trespassers. Dashboard notifications are instant.',
      'Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.':
        'ಉಪ್ಪು ಗಾಳಿಯ ವಿರುದ್ಧ ತುಕ್ಕು-ನಿರೋಧಕ ವಸ್ತುಗಳು ಬಲವಾಗಿ ನಿಲ್ಲುತ್ತವೆ. ಲೈವ್ ಸ್ಟ್ರೀಮ್ 4G ಸೆಲ್ಯುಲಾರ್ ಮೂಲಕ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. / Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.'
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

  const selectedProj = getBilingualProject(selectedProjRaw);

  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-bg3 grid-bg">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[120px]"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold">
            {renderBilingual("ಸಕ್ರಿಯ ನಿಯೋಜನೆಗಳು / Active Deployments")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            {renderBilingual("ಯೋಜನೆಗಳು / Projects Showcase")}
          </h2>
          <p className="text-zinc-400 font-light mt-3 max-w-xl">
            {renderBilingual("ನಮ್ಮ ಕೈಗಾರಿಕಾ ಭದ್ರತಾ ಕೇಂದ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಕಸ್ಟಮ್ ಪೇಲೋಡ್‌ಗಳು, ಮೊದಲು/ನಂತರದ ಚಿತ್ರಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತತೆಯ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ವೀಕ್ಷಿಸಲು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳಲ್ಲಿ ನಿಲ್ದಾಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ. / Explore our industrial security hubs. Select a station on the live network coordinates to view custom payloads, before/after images, and autonomy feedback.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Dark Cyber-Map (SVG-based GPS Surveillance Zone) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-white/5 bg-zinc-950/40 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-zinc-400 font-space uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping"></span> 
                  {renderBilingual("ಲೈವ್ ಏರಿಯಾ ನೆಟ್‌ವರ್ಕ್ / Live Area Network")}
                </span>
                <span className="text-[10px] text-zinc-500 font-space uppercase">
                  {renderBilingual("ಕೊಲ್ಲಿ ಪ್ರದೇಶದ ವಲಯ / Bay Area Quadrant")}
                </span>
              </div>
              
              {/* SVG MAP */}
              <div className="relative w-full h-[280px] bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(0, 245, 255, 0.08)" strokeWidth="0.5" />

                  {/* Concentric Radar Rings */}
                  <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(0, 245, 255, 0.05)" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0, 245, 255, 0.05)" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0, 245, 255, 0.05)" strokeWidth="0.5" />
                  
                  {/* Sweep line */}
                  <line x1="50" y1="50" x2="90" y2="90" stroke="#00F5FF" strokeWidth="0.3" opacity="0.6" className="animate-spin-slow" />
                </svg>

                {/* Node coordinates */}
                {projects.map((proj, idx) => {
                  const mappedProj = getBilingualProject(proj);
                  // Fixed coordinate offsets for visualization map
                  const positions = [
                    { top: '35%', left: '30%' },
                    { top: '48%', left: '65%' },
                    { top: '70%', left: '42%' }
                  ];
                  const pos = positions[idx] || { top: '50%', left: '50%' };
                  const isSelected = selectedProjRaw.id === proj.id;

                  return (
                    <button
                      key={proj.id}
                      onClick={() => setSelectedProjRaw(proj)}
                      className="absolute p-2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      <span className={`absolute inset-0 rounded-full scale-150 animate-radar ${isSelected ? 'bg-electric-cyan/20' : 'bg-zinc-500/10'}`}></span>
                      <MapPin className={`w-6 h-6 transition-all duration-300 ${isSelected ? 'text-electric-cyan scale-125 glow-cyan' : 'text-zinc-600 hover:text-zinc-400'}`} />
                      
                      {/* Tooltip */}
                      <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-zinc-950/90 text-[10px] text-white px-2 py-0.5 rounded border border-white/10 font-space whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {renderBilingual(mappedProj.title)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-6 border-t border-zinc-900 pt-4 flex justify-between text-xs text-zinc-500 font-space">
              <span>{renderBilingual("ನೆಟ್‌ವರ್ಕ್ ನೋಡ್ ಕ್ಲಿಕ್‌ಗಳು ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಟೆಲಿಮೆಟ್ರಿಯನ್ನು ನವೀಕರಿಸುತ್ತವೆ / Interactive network node clicks updates portfolio telemetry")}</span>
              <span>{renderBilingual("ಆನ್‌ಲೈನ್ / Online")}</span>
            </div>
          </div>

          {/* Right Column: Dynamic Project Details & Interactive Before/After Split */}
          {selectedProj && (
            <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/5 bg-zinc-950/20 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="text-[10px] text-electric-cyan font-space uppercase tracking-widest font-semibold">
                      {renderBilingual(selectedProj.type)}
                    </span>
                    <h3 className="text-2xl font-space font-medium text-white mt-1">
                      {renderBilingual(selectedProj.title)}
                    </h3>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1.5 font-space">
                      <MapPin className="w-3 h-3" /> {renderBilingual(selectedProj.location)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-white/5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-white">5.0</span>
                  </div>
                </div>

                {/* Before/After Split Slider */}
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-white/5 bg-zinc-950 mb-6 group">
                  {/* After Image (Background) */}
                  <img 
                    src={selectedProj.afterImg} 
                    alt="Post-Installation Solar Camera System" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Overlay clipped by slider width) */}
                  <div 
                    className="absolute inset-0 overflow-hidden" 
                    style={{ width: `${comparisonSliderVal}%` }}
                  >
                    <img 
                      src={selectedProj.beforeImg} 
                      alt="Pre-Installation Site Location" 
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      style={{ width: '100%', minWidth: '400px' }} // prevent image squishing
                    />
                    <div className="absolute top-4 left-4 bg-zinc-950/80 px-2 py-0.5 border border-white/10 rounded text-[9px] font-space text-zinc-400 uppercase tracking-widest z-20">
                      {renderBilingual("ಮೊದಲು / Before")}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-electric-cyan/95 text-black px-2 py-0.5 rounded text-[9px] font-space font-semibold uppercase tracking-widest z-20 shadow-md">
                    {renderBilingual("ನಂತರ (ಸೌರ ವ್ಯವಸ್ಥೆ) / After (Solar System)")}
                  </div>

                  {/* Split line separator */}
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-electric-cyan z-30 pointer-events-none"
                    style={{ left: `${comparisonSliderVal}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-electric-cyan text-black font-semibold flex items-center justify-center text-xs shadow-lg border border-zinc-900">
                      ↔
                    </div>
                  </div>

                  {/* Range Input Slider overlaying image container */}
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={comparisonSliderVal}
                    onChange={(e) => setComparisonSliderVal(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                  />
                </div>

                {/* Specs & Testimonials */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-space">
                      {renderBilingual("ಪೇಲೋಡ್ ಕಾನ್ಫಿಗರೇಶನ್ / Payload Config")}
                    </span>
                    <span className="text-xs text-zinc-200 mt-1 block leading-normal">
                      {renderBilingual(selectedProj.camera)}
                    </span>
                  </div>
                  <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-space">
                      {renderBilingual("ಸ್ಥಾಪನಾ ಸಮಯ / Install Time")}
                    </span>
                    <span className="text-xs text-zinc-200 mt-1 block flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-electric-cyan" /> {renderBilingual(selectedProj.duration)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-900/60 pt-6">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-electric-emerald" /> {renderBilingual("ಗ್ರಾಹಕರ ವಿಮರ್ಶೆ / Client Review")} ({selectedProj.client})
                </span>
                <p className="text-zinc-400 text-xs italic leading-relaxed">
                  "{renderBilingual(selectedProj.feedback)}"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
