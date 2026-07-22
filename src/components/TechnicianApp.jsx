import React, { useState, useEffect } from 'react';
import { db } from '../utils/dbMock';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { Phone, MessageSquare, CheckSquare, UploadCloud, Map, Radio, Wifi, WifiOff, Compass, MapPin } from 'lucide-react';

export default function TechnicianApp() {
  const store = useConfiguratorStore();
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);
  
  // Offline Simulation State
  const [isOnline, setIsOnline] = useState(true);
  
  // Photo upload mock states
  const [isUploading, setIsUploading] = useState(false);

  const loadJobs = () => {
    const list = db.getJobs();
    setJobs(list);
    if (list.length > 0 && !activeJob) {
      setActiveJob(list[0]);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleToggleChecklist = (jobId, itemId) => {
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        const updatedItems = job.items.map(item => {
          if (item.id === itemId) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        const allDone = updatedItems.every(i => i.checked);
        const status = allDone ? 'Completed' : 'In Progress';
        
        return { ...job, items: updatedItems, status };
      }
      return job;
    });

    setJobs(updatedJobs);
    const updatedActive = updatedJobs.find(j => j.id === jobId);
    if (updatedActive) setActiveJob(updatedActive);

    // Save to dbMock
    const dbJob = updatedJobs.find(j => j.id === jobId);
    db.saveJob(dbJob);

    // Sync notification toast
    if (isOnline) {
      store.addToast(`Item status synced with central database!`, 'success');
    } else {
      store.addToast(`Saved locally (Offline Mode). Will sync when online.`, 'warning');
    }
  };

  const handleMockUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      
      // Select a photo from the local public paths dynamically
      const photosArray = ['/images/cam1.jpg', '/images/cam2.jpg', '/images/cam4.jpg', '/images/cam5.jpg'];
      const randomIdx = Math.floor(Math.random() * photosArray.length);
      const selectedPhoto = photosArray[randomIdx];

      const updatedJobs = jobs.map(job => {
        if (job.id === activeJob.id) {
          const photos = [...(job.photos || []), selectedPhoto];
          return { ...job, photos };
        }
        return job;
      });

      setJobs(updatedJobs);
      const matched = updatedJobs.find(j => j.id === activeJob.id);
      setActiveJob(matched);
      db.saveJob(matched);

      // CRITICAL NEW INTEGRATION: Pushes photo to public showcase gallery!
      db.saveGalleryItem({
        title: `Installation Proof - ${activeJob.customerName.split(' (')[0]}`,
        description: `Verified setup on site address: ${activeJob.address}. Assigned tech Marcus Wright.`,
        type: 'image',
        imageUrl: selectedPhoto
      });

      store.addToast('Proof uploaded & synced directly to Public Showcase Gallery!', 'success');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 grid-bg flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Context description */}
        <div className="lg:col-span-5 text-left">
          <span className="text-electric-cyan text-xs font-space uppercase tracking-widest block mb-2 font-semibold">Technician Phone simulator</span>
          <h1 className="text-3xl md:text-4xl font-space font-light text-white leading-tight">Field Crew Portal</h1>
          <p className="text-zinc-400 font-light mt-4 leading-relaxed">
            Operations center for technicians. Checking checklists and uploading CCTV angle proofs here automatically syncs images directly to the showcase gallery on the website!
          </p>
          
          {/* Offline Switch */}
          <div className="mt-8 p-4 rounded-xl border border-white/5 bg-zinc-950/40 max-w-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-200 font-medium block">Offline Support Mode</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">Toggle connection sync state</span>
            </div>
            <button
              onClick={() => {
                setIsOnline(!isOnline);
                store.addToast(isOnline ? 'Network dropped. Sync saved in browser cache.' : 'Connection restored. Sync complete!', isOnline ? 'info' : 'success');
              }}
              className={`px-4 py-2 rounded-lg font-space text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors border ${
                isOnline 
                  ? 'bg-electric-emerald/10 border-electric-emerald text-electric-emerald' 
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400'
              }`}
            >
              {isOnline ? (
                <><Wifi className="w-3.5 h-3.5" /> Online</>
              ) : (
                <><WifiOff className="w-3.5 h-3.5" /> Offline</>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Smartphone frame mockup */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-[330px] h-[670px] bg-zinc-950 rounded-[45px] p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-[6px] border-zinc-800 relative overflow-hidden flex flex-col">
            
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-950 rounded-b-2xl z-50 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-zinc-800 rounded-full mb-1"></div>
            </div>

            {/* Simulated iPhone Screen content */}
            <div className="flex-1 bg-obsidian-bg1 rounded-[32px] overflow-hidden flex flex-col relative pt-8 text-zinc-100">
              
              {/* Screen Top Status bar */}
              <div className="flex justify-between items-center px-6 text-[10px] text-zinc-400 font-space font-medium absolute top-2 left-0 right-0 z-30">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  {isOnline ? <Wifi className="w-3" /> : <WifiOff className="w-3 text-red-500" />}
                  <span>LTE</span>
                  <div className="w-4 h-2.5 border border-zinc-400 rounded-sm p-0.5 flex items-center">
                    <div className="h-full w-full bg-zinc-400 rounded-2xs"></div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs in Mock mobile */}
              <div className="px-4 pt-2 pb-3 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-space font-semibold text-white tracking-widest">☀ DRISHTI MOBILE</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 text-[8px] text-zinc-400 uppercase tracking-widest border border-white/5">
                    {jobs.filter(j => j.status !== 'Completed').length} active jobs
                  </span>
                </div>
              </div>

              {/* Mobile app scrollable section */}
              <div className="flex-1 overflow-y-auto pb-4 space-y-4 px-4 pt-4">
                
                {/* Simulated GPS Map */}
                {activeJob && (
                  <div className="relative w-full h-[140px] bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden shrink-0">
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 0 30 Q 30 30, 50 60 T 100 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                      <path d="M 20 0 L 20 100 M 70 0 L 70 100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <path d="M 50 100 Q 50 80, 25 55" fill="none" stroke="#00FFA3" strokeWidth="2.5" strokeDasharray="4 2" />
                    </svg>

                    {/* Active pin */}
                    <div className="absolute top-1/3 left-1/4 animate-bounce">
                      <span className="absolute -inset-2 rounded-full bg-electric-emerald/30 animate-ping"></span>
                      <MapPin className="w-5 h-5 text-electric-emerald fill-electric-emerald" />
                    </div>

                    <div className="absolute bottom-2 left-2 bg-zinc-950/95 border border-white/5 px-2.5 py-1 rounded-lg text-[9px] font-space text-zinc-400 flex items-center gap-1 shadow-md">
                      <Compass className="w-3 h-3 text-electric-cyan animate-pulse" /> Alignment locked
                    </div>
                  </div>
                )}

                {/* Job Info Selector Cards */}
                {activeJob && (
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-950/20 text-xs">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[8px] font-space uppercase text-electric-cyan font-semibold">Active Assignment</span>
                        <h4 className="font-space font-medium text-white text-xs mt-0.5 leading-snug">{activeJob.customerName}</h4>
                      </div>
                      <span className="text-[8px] text-zinc-500 font-space">{activeJob.distance}</span>
                    </div>

                    <p className="text-[10px] text-zinc-400 font-light mb-4">{activeJob.address}</p>

                    {/* Action buttons */}
                    <div className="flex gap-2.5 mb-4">
                      <a
                        href={`tel:${activeJob.phone}`}
                        className="flex-1 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[9px] font-space uppercase text-zinc-300 flex items-center justify-center gap-1 transition-colors border border-white/5"
                      >
                        Phone Client
                      </a>
                      <a
                        href={`https://wa.me/${activeJob.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 rounded-lg bg-electric-emerald/10 border border-electric-emerald/20 hover:bg-electric-emerald/20 text-[9px] font-space uppercase text-electric-emerald flex items-center justify-center gap-1 transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>

                    {/* Task checklist */}
                    <div className="border-t border-zinc-900 pt-4">
                      <span className="text-[9px] font-space uppercase text-zinc-500 tracking-wider block mb-3 font-semibold">Installation Checklist</span>
                      <div className="space-y-2.5">
                        {activeJob.items.map(item => (
                          <label
                            key={item.id}
                            className="flex items-center justify-between p-2 rounded bg-zinc-950/60 border border-zinc-900/60 hover:border-zinc-800 cursor-pointer"
                          >
                            <span className={`text-[10px] flex-1 pr-2 ${item.checked ? 'text-zinc-500 line-through' : 'text-zinc-300'}`}>
                              {item.label}
                            </span>
                            <input
                              type="checkbox"
                              checked={item.checked}
                              onChange={() => handleToggleChecklist(activeJob.id, item.id)}
                              className="accent-electric-emerald w-4 h-4 cursor-pointer"
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Photo upload interface */}
                    <div className="border-t border-zinc-900 pt-4 mt-4">
                      <span className="text-[9px] font-space uppercase text-zinc-500 tracking-wider block mb-3 font-semibold">Upload Photo Proof (Phone camera)</span>
                      
                      {activeJob.photos && activeJob.photos.length > 0 ? (
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {activeJob.photos.map((ph, idx) => (
                            <img key={idx} src={ph} alt="Proof" className="w-12 h-12 rounded object-cover border border-white/5" />
                          ))}
                        </div>
                      ) : null}

                      <button
                        onClick={handleMockUpload}
                        disabled={isUploading}
                        className="w-full py-2.5 rounded-lg border border-dashed border-zinc-800 text-[10px] text-zinc-500 hover:text-white hover:border-zinc-700 font-space uppercase flex items-center justify-center gap-1.5 transition-all"
                      >
                        {isUploading ? (
                          <>Uploading Proof...</>
                        ) : (
                          <><UploadCloud className="w-3.5 h-3.5" /> Shoot & Upload Angle Proof</>
                        )}
                      </button>
                    </div>

                  </div>
                )}

                {/* Job queue picker list at bottom */}
                <div className="space-y-2 shrink-0">
                  <span className="text-[8px] text-zinc-500 uppercase font-space tracking-widest font-semibold block mb-1">Assigned Task Board</span>
                  {jobs.map(job => {
                    const isSelected = activeJob?.id === job.id;
                    return (
                      <div
                        key={job.id}
                        onClick={() => setActiveJob(job)}
                        className={`p-3 rounded-xl border cursor-pointer flex justify-between items-center transition-all duration-300 ${
                          isSelected 
                            ? 'bg-electric-cyan/5 border-electric-cyan' 
                            : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800'
                        }`}
                      >
                        <div>
                          <span className="font-space text-[10px] text-white block font-medium truncate max-w-[150px]">{job.customerName}</span>
                          <span className="text-[8px] text-zinc-500 block mt-0.5">{job.distance}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-space tracking-wider uppercase border ${
                          job.status === 'Completed'
                            ? 'border-electric-emerald/20 text-electric-emerald bg-electric-emerald/5'
                            : 'border-zinc-800 text-zinc-400'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Navigation button */}
              {activeJob && activeJob.status !== 'Completed' && (
                <div className="p-3 bg-zinc-950/80 border-t border-zinc-900 relative z-20">
                  <button
                    onClick={() => {
                      store.addToast(`Routing crew navigation to: ${activeJob.address}`, 'info');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold font-space text-xs tracking-wider uppercase hover:opacity-90 transition-opacity"
                  >
                    Navigate to Site
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
