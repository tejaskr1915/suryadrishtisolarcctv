import React, { useState, useEffect } from 'react';
import { db } from '../utils/dbMock';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t, tStr } from '../utils/translate';
import { Shield, Battery, Sun, HardDrive, Network, UploadCloud, CheckCircle2, ChevronRight, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ServiceRequest() {
  const store = useConfiguratorStore();

  const renderBilingual = (text) => t(text, store.language);

  const renderIssueType = (type) => {
    const translations = {
      'Camera': 'ಕ್ಯಾಮೆರಾ / Camera',
      'Battery': 'ಬ್ಯಾಟರಿ / Battery',
      'Solar': 'ಸೌರ ಫಲಕ / Solar',
      'Recorder': 'ರೆಕಾರ್ಡರ್ / Recorder',
      'Network': 'ನೆಟ್‌ವರ್ಕ್ / Network'
    };
    return renderBilingual(translations[type] || type);
  };
  const [activeReqs, setActiveReqs] = useState([]);
  const [selectedReq, setSelectedReq] = useState(null);

  // Load ticket items
  const loadRequests = () => {
    const list = db.getServices();
    setActiveReqs(list);
    if (list.length > 0 && !selectedReq) {
      setSelectedReq(list[0]);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleServiceFormSubmit = async (e) => {
    e.preventDefault();
    const result = await store.submitServiceRequest();
    if (result) {
      loadRequests();
      setSelectedReq(result);
    }
  };

  const handleMockFileSelected = (e) => {
    const files = Array.from(e.target.files);
    const mockFiles = files.map(file => ({
      name: file.name,
      preview: URL.createObjectURL(file)
    }));
    store.setServiceFiles([...store.serviceFiles, ...mockFiles]);
    store.addToast(`Attached ${files.length} diagnostic media files`, 'info');
  };

  const handleRemoveFile = (index) => {
    store.setServiceFiles(store.serviceFiles.filter((_, i) => i !== index));
  };

  // Stepper milestones
  const getMilestones = (req) => {
    if (!req) return [];
    return [
      { 
        step: renderBilingual("ಸಲ್ಲಿಸಲಾಗಿದೆ / Submitted"), 
        label: renderBilingual("ಸೂಪಬೇಸ್‌ನಲ್ಲಿ ಟಿಕೆಟ್ ದಾಖಲಿಸಲಾಗಿದೆ / Ticket Lodged in Supabase"), 
        desc: renderBilingual("ಬೆಂಬಲ ಚಾನಲ್‌ಗೆ ಎಚ್ಚರಿಕೆ ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ. / Alert notifications dispatched to support channel."), 
        done: true 
      },
      { 
        step: renderBilingual("ನಿಯೋಜಿಸಲಾಗಿದೆ / Assigned"), 
        label: <>{renderBilingual("ತಾಂತ್ರಿಕ ಸಿಬ್ಬಂದಿಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ: / Assigned to Technical Crew:")} {req.assignedTech}</>, 
        desc: req.assignedTech !== 'Unassigned' 
          ? renderBilingual("ಸಿಬ್ಬಂದಿ ರವಾನೆ ಲಾಕ್ ಮಾಡಲಾಗಿದೆ. ಜಿಪಿಎಸ್ ನ್ಯಾವಿಗೇಷನ್ ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ. / Crew dispatch locked. GPS navigation synced.") 
          : renderBilingual("ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ನಿಯೋಜನೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ. / Awaiting assignment in dashboard."), 
        done: req.assignedTech !== 'Unassigned' 
      },
      { 
        step: renderBilingual("ಪ್ರಗತಿಯಲ್ಲಿದೆ / In Progress"), 
        label: renderBilingual("ಸಿಬ್ಬಂದಿ ಸೈಟ್ ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ / Crew Troubleshooting Site"), 
        desc: renderBilingual("ತಂತ್ರಜ್ಞರು ಜೋಡಣೆ ಮತ್ತು ವೈರಿಂಗ್ ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದ್ದಾರೆ. / Technician checking alignment and wiring guides."), 
        done: req.status === 'Resolved' || (req.status === 'In Progress') 
      },
      { 
        step: renderBilingual("ಪರಿಹರಿಸಲಾಗಿದೆ / Resolved"), 
        label: renderBilingual("ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ / Diagnostics Verified"), 
        desc: renderBilingual("ರಿಮೋಟ್ ಪ್ರವೇಶವನ್ನು ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ಸಿಸ್ಟಮ್ ಸ್ವಾಯತ್ತತೆಯನ್ನು ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ. / Remote access established. System autonomy synced."), 
        done: req.status === 'Resolved' 
      }
    ];
  };

  return (
    <div className="min-h-screen pt-32 pb-20 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-electric-cyan text-xs font-space uppercase tracking-widest block mb-2 font-semibold">
            {renderBilingual("ನಿರ್ವಹಣೆ ಮತ್ತು ಬೆಂಬಲ / Maintenance & Support")}
          </span>
          <h1 className="text-4xl font-space font-light text-white leading-tight">
            {renderBilingual("ಸೇವಾ ಟಿಕೆಟ್ ಡೆಸ್ಕ್ / Service Ticket Desk")}
          </h1>
          <p className="text-zinc-400 font-light mt-1">
            {renderBilingual("ಸಿಸ್ಟಮ್ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ಸ್ ಅನ್ನು ದಾಖಲಿಸಿ, ಆಫ್-ಗ್ರಿಡ್ ಮಾಡ್ಯೂಲ್‌ಗಳಲ್ಲಿ ತಾಂತ್ರಿಕ ಸಹಾಯವನ್ನು ವಿನಂತಿಸಿ ಅಥವಾ ಸಕ್ರಿಯ ನಿರ್ವಹಣೆ ಒಪ್ಪಂದದ ತಂತ್ರಜ್ಞರ ಪರಿಶೀಲನಾ ಪಟ್ಟಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. / Lodge system diagnostics, request technical help on off-grid modules, or track active maintenance contract technician checklists.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Lodge Service Request Form */}
          <div className="lg:col-span-6 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/40">
            <h3 className="text-xl text-white mb-6">
              {renderBilingual("ಸೇವಾ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ / Lodge Maintenance Request")}
            </h3>
            
            <form onSubmit={handleServiceFormSubmit} className="space-y-5">
              
              {/* Select Issue Category */}
              <div>
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-3">
                  {renderBilingual("ಸಮಸ್ಯೆಯಿರುವ ಭಾಗ / Target Issue Module")}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { type: 'Camera', icon: Shield },
                    { type: 'Battery', icon: Battery },
                    { type: 'Solar', icon: Sun },
                    { type: 'Recorder', icon: HardDrive },
                    { type: 'Network', icon: Network }
                  ].map(item => (
                    <button
                      key={item.type}
                      type="button"
                      onClick={() => store.setServiceIssue(item.type)}
                      className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        store.serviceIssue === item.type
                          ? 'border-electric-cyan bg-electric-cyan/5 text-electric-cyan'
                          : 'border-zinc-900 bg-zinc-950/40 text-zinc-500 hover:border-zinc-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-[9px] font-space font-semibold uppercase">{renderIssueType(item.type)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Core customer details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1">
                    {renderBilingual("ಪೂರ್ಣ ಹೆಸರು / Full Name")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={tStr("ನೋಂದಾಯಿತ ಹೆಸರನ್ನು ನಮೂದಿಸಿ / Enter registered name", store.language)}
                    value={store.customerName}
                    onChange={(e) => store.setCustomerInfo({ customerName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1">
                    {renderBilingual("ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ / Registered Phone")}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={tStr("ನೋಂದಾಯಿತ ಫೋನ್ ಸಂಖ್ಯೆ / Registered phone number", store.language)}
                    value={store.customerPhone}
                    onChange={(e) => store.setCustomerInfo({ customerPhone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-1">
                  {renderBilingual("ಸಮಸ್ಯೆಯ ವಿವರಗಳು / Issue Details")}
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder={tStr("ಸಮಸ್ಯೆಯ ವಿವರಗಳನ್ನು ವಿವರಿಸಿ (ಉದಾ. ರಾತ್ರಿ ಕ್ಯಾಮೆರಾ ಆಫ್ ಆಗುತ್ತದೆ, ಮಂಜು ಇರುವಾಗ ಸಂಪರ್ಕ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ)... / Describe details of the glitch (e.g. camera loses power at night, connection drop during fog)...", store.language)}
                  value={store.serviceDescription}
                  onChange={(e) => store.setServiceDescription(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
                />
              </div>

              {/* File Attachment Upload */}
              <div>
                <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-2.5">
                  {renderBilingual("ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಮೀಡಿಯಾ ಅಪ್‌ಲೋಡ್ / Diagnostic Media Upload")}
                </label>
                
                {store.serviceFiles.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-3">
                    {store.serviceFiles.map((file, idx) => (
                      <div key={idx} className="relative w-12 h-12 rounded border border-white/5 bg-zinc-950 overflow-hidden shrink-0 group">
                        <img src={file.preview} alt="Upload" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(idx)}
                          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 text-red-500 text-xs font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <label className="w-full py-4 rounded-xl border border-dashed border-zinc-800 text-[10px] text-zinc-500 hover:text-white hover:border-zinc-700 font-space uppercase flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer">
                  <UploadCloud className="w-4 h-4" />
                  <span>{renderBilingual("ಚಿತ್ರಗಳು ಅಥವಾ ವೀಡಿಯೊಗಳನ್ನು ಆರಿಸಿ / Choose Images or Videos")}</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleMockFileSelected}
                    className="hidden"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={store.isSubmitting}
                className="w-full py-3.5 rounded-xl font-space text-xs font-semibold text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer mt-6"
              >
                {store.isSubmitting ? (
                  <><RefreshCw className="w-4 h-4 animate-spin" /> renderBilingual("ಟಿಕೆಟ್ ಉಳಿಸಲಾಗುತ್ತಿದೆ... / Saving ticket...")</>
                ) : (
                  <>renderBilingual("ಟಿಕೆಟ್ ಸಲ್ಲಿಸಿ / File Ticket")</>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT PANEL: Live Track Progress and Status Timelines */}
          <div className="lg:col-span-6 glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/20">
            <h3 className="text-xl text-white mb-6 font-space">
              {renderBilingual("ಸಕ್ರಿಯ ಟೆಲಿಮೆಟ್ರಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ / Track Active Telemetry")}
            </h3>

            {selectedReq ? (
              <div>
                <div className="flex justify-between items-start gap-4 pb-4 border-b border-zinc-900 mb-6">
                  <div>
                    <span className="text-[8px] font-space text-electric-cyan uppercase tracking-widest font-semibold">
                      {renderBilingual("ಸೇವಾ ಟಿಕೆಟ್ ಐಡಿ / Service Ticket ID")}
                    </span>
                    <h4 className="text-lg font-space font-medium text-white mt-0.5">{selectedReq.id}</h4>
                    <span className="text-[10px] text-zinc-500 font-space block mt-1">
                      <>{renderBilingual("ಸಲ್ಲಿಸಿದ ದಿನಾಂಕ: / Filed Date:")} {selectedReq.dateCreated}</>
                    </span>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-semibold font-space tracking-wider uppercase border ${
                    selectedReq.status === 'Resolved'
                      ? 'border-electric-emerald/20 text-electric-emerald bg-electric-emerald/5'
                      : 'border-amber-400/20 text-amber-400 bg-amber-400/5'
                  }`}>
                    {selectedReq.status === 'Resolved' ? renderBilingual("ಪರಿಹರಿಸಲಾಗಿದೆ / Resolved") :
                     selectedReq.status === 'In Progress' ? renderBilingual("ಪ್ರಗತಿಯಲ್ಲಿದೆ / In Progress") :
                     selectedReq.status === 'Assigned' ? renderBilingual("ನಿಯೋಜಿಸಲಾಗಿದೆ / Assigned") :
                     renderBilingual("ಸಲ್ಲಿಸಲಾಗಿದೆ / Submitted")}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
                      <>{renderBilingual("ಸಮಸ್ಯೆಯ ವಿವರಗಳು / Issue Details")} ({renderIssueType(selectedReq.issueType)})</>
                    </span>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light">{selectedReq.description}</p>
                  </div>

                  <div>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-2">
                      {renderBilingual("ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಲಗತ್ತುಗಳು / Diagnostic Attachments")}
                    </span>
                    {selectedReq.attachments && selectedReq.attachments.length > 0 ? (
                      <div className="flex gap-2">
                        {selectedReq.attachments.map((img, idx) => (
                          <img key={idx} src={img} alt="Attachment" className="w-16 h-16 object-cover rounded border border-white/5" />
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-zinc-600 block">
                        renderBilingual("ಯಾವುದೇ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಫೈಲ್‌ಗಳನ್ನು ಲಗತ್ತಿಸಲಾಗಿಲ್ಲ / No diagnostic files attached")
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Stepper checklist timeline */}
                <div className="border-t border-zinc-900 pt-6">
                  <span className="text-[9px] font-space uppercase text-zinc-500 tracking-wider block mb-5 font-semibold">
                    {renderBilingual("ಲೈವ್ ಪ್ರಗತಿ / Live Action Progress")}
                  </span>
                  
                  <div className="relative pl-6 space-y-6">
                    {/* Stepper vertical line indicator */}
                    <div className="absolute top-1.5 bottom-1.5 left-2 w-0.5 bg-zinc-800"></div>

                    {getMilestones(selectedReq).map((step, idx) => (
                      <div key={idx} className="relative">
                        {/* Circle dot indicator */}
                        <div className={`absolute -left-6 top-1 w-4.5 h-4.5 rounded-full border border-zinc-950 flex items-center justify-center z-10 ${
                          step.done ? 'bg-electric-cyan text-black' : 'bg-zinc-900 text-zinc-600'
                        }`}>
                          {step.done ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        </div>
                        <div>
                          <span className={`text-xs font-semibold block ${step.done ? 'text-white' : 'text-zinc-500'}`}>{step.step}</span>
                          <span className={`text-[11px] block mt-0.5 ${step.done ? 'text-zinc-300' : 'text-zinc-600'}`}>{step.label}</span>
                          <span className="text-[10px] text-zinc-500 block mt-1 leading-normal font-light">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center py-12 text-xs text-zinc-600">
                {renderBilingual("ಯಾವುದೇ ಸಕ್ರಿಯ ನಿರ್ವಹಣೆ ಟಿಕೆಟ್ ಆಯ್ಕೆ ಮಾಡಲಾಗಿಲ್ಲ. ಒಂದನ್ನು ನೋಂದಾಯಿಸಲು ಎಡಭಾಗದ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ. / No active maintenance ticket selected. Fill the left form to register one.")}
              </div>
            )}

            {/* List selector of all tickets at bottom */}
            {activeReqs.length > 0 && (
              <div className="border-t border-zinc-900 pt-6 mt-8 space-y-2">
                <span className="text-[9px] text-zinc-500 uppercase font-space tracking-widest block mb-2 font-medium">
                  {renderBilingual("ದಾಖಲಾದ ಟಿಕೆಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ / Lodged Ticket Dashboard")}
                </span>
                {activeReqs.map(req => (
                  <div
                    key={req.id}
                    onClick={() => setSelectedReq(req)}
                    className={`p-3 rounded-xl border cursor-pointer flex justify-between items-center transition-all duration-300 ${
                      selectedReq?.id === req.id 
                        ? 'bg-electric-cyan/5 border-electric-cyan' 
                        : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-space font-medium text-white block">{req.customerName} ({renderIssueType(req.issueType)})</span>
                      <span className="text-[9px] text-zinc-500 mt-0.5 block">
                        <>{renderBilingual("ಸ್ಥಿತಿ: / Status:")} {req.status === 'Resolved' ? renderBilingual("ಪರಿಹರಿಸಲಾಗಿದೆ / Resolved") :
                         req.status === 'In Progress' ? renderBilingual("ಪ್ರಗತಿಯಲ್ಲಿದೆ / In Progress") :
                         req.status === 'Assigned' ? renderBilingual("ನಿಯೋಜಿಸಲಾಗಿದೆ / Assigned") :
                         renderBilingual("ಸಲ್ಲಿಸಲಾಗಿದೆ / Submitted")}</>
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
