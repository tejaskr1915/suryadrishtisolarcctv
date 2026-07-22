import React, { useState } from 'react';
import { Sun, ShieldAlert, Sparkles, DollarSign, Leaf } from 'lucide-react';

export default function Calculator() {
  const [cameraCount, setCameraCount] = useState(4);
  const [sunHours, setSunHours] = useState(5.5);
  const [elecRate, setElecRate] = useState(8.50); // ₹8.50 per kWh standard average

  // Math Calculations:
  // Average CCTV power setup (Solar tower base draws approx 12W average including AI router + camera)
  // 12W * 24h = 288 Wh per day per camera.
  // Yearly usage: 288 * 365 = 105.12 kWh per camera.
  const powerPerCameraYear = 105.12; 
  const totalKwhPerYear = cameraCount * powerPerCameraYear;
  
  // Traditional commercial grid integration hookup costs:
  // Installing cables/trenching for security poles costs approx ₹80,000 per pole.
  // Solar off-grid removes this trenching cost entirely.
  const trenchingCostSaved = cameraCount * 80000;
  
  // Power bills saved per year
  const yearlyElectricitySaved = totalKwhPerYear * elecRate;
  
  // 10 Year Savings = Trenching saved + 10 * yearly bills saved
  const tenYearSavings = trenchingCostSaved + (yearlyElectricitySaved * 10);
  
  // CO2 reduction: 0.85 lbs (0.38 kg) of CO2 offset per kWh generated
  const co2OffsetKg = totalKwhPerYear * 0.385;

  // Generate SVG Path data for the 10-year growth curve
  const points = [];
  const width = 500;
  const height = 150;
  
  for (let year = 0; year <= 10; year++) {
    const savings = trenchingCostSaved + (yearlyElectricitySaved * year);
    // Scale: max savings is roughly 80000 * 20 + 20 * 105 * 18 * 10 = 1,978,000 max.
    const maxVal = 2200000;
    const x = (year / 10) * width;
    const y = height - (savings / maxVal) * (height - 20);
    points.push(`${x},${y}`);
  }
  
  const linePath = `M ${points.join(' L ')}`;
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;

  return (
    <section className="py-24 relative overflow-hidden bg-obsidian-bg1 grid-bg">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric-emerald/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-emerald text-xs font-space uppercase tracking-widest block mb-3 font-semibold">Financial Efficiency</span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Off-Grid Cost Calculator
          </h2>
          <p className="text-zinc-400 font-light mt-4">
            Traditional camera deployments incur substantial trenching, cabling, and electricity costs. Surya Drishti solar cameras pay for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Sliders Container */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-950/40">
            <div>
              <h3 className="text-lg text-white mb-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-electric-cyan" /> Configure Installation Size
              </h3>

              {/* Slider 1: Camera Count */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs text-zinc-400 uppercase tracking-widest font-space">Security Nodes (CCTV Units)</label>
                  <span className="text-xl font-space font-medium text-electric-cyan">{cameraCount} Nodes</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={cameraCount}
                  onChange={(e) => setCameraCount(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-space">
                  <span>1 Node</span>
                  <span>10 Nodes</span>
                  <span>20 Nodes</span>
                </div>
              </div>

              {/* Slider 2: Sun Hours */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs text-zinc-400 uppercase tracking-widest font-space">Daily Peak Sun Hours</label>
                  <span className="text-xl font-space font-medium text-electric-emerald">{sunHours} Hours</span>
                </div>
                <input 
                  type="range" 
                  min="2.0" 
                  max="8.0" 
                  step="0.5" 
                  value={sunHours}
                  onChange={(e) => setSunHours(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-electric-emerald"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-space">
                  <span>2.0 hrs (Low)</span>
                  <span>5.0 hrs (Average)</span>
                  <span>8.0 hrs (Desert Peak)</span>
                </div>
              </div>

              {/* Slider 3: Electricity Cost */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs text-zinc-400 uppercase tracking-widest font-space">Utility Tariff Rate</label>
                  <span className="text-xl font-space font-medium text-white">₹{elecRate.toFixed(2)} / kWh</span>
                </div>
                <input 
                  type="range" 
                  min="3.00" 
                  max="18.00" 
                  step="0.50" 
                  value={elecRate}
                  onChange={(e) => setElecRate(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-space">
                  <span>₹3.00/kWh</span>
                  <span>₹10.50/kWh</span>
                  <span>₹18.00/kWh</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-electric-cyan/10 bg-electric-cyan/5 text-xs text-zinc-400 mt-6 leading-relaxed items-start">
              <ShieldAlert className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
              <span>
                <strong>Trenching Waiver:</strong> Off-grid solar eliminates wiring excavation permits, typical commercial copper cabling costs, and landscape rehabilitation.
              </span>
            </div>
          </div>

          {/* Results Visualizer */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-950/20">
            <div>
              <h3 className="text-lg text-white mb-6">Estimated Lifetime Returns</h3>
              
              {/* Savings display card */}
              <div className="mb-8">
                <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-1">10-Year Cumulative Savings</span>
                <div className="text-4xl md:text-5xl font-space font-light text-white tracking-tight">
                  <span className="text-electric-emerald font-semibold">₹</span>
                  <span className="glow-text-emerald font-medium">
                    {Math.floor(tenYearSavings).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* SVG Curve Chart */}
              <div className="w-full bg-zinc-950/80 rounded-xl border border-white/5 p-4 mb-8">
                <div className="flex justify-between text-[10px] text-zinc-500 mb-2 font-space">
                  <span>Savings Growth</span>
                  <span>Year 10 Limit</span>
                </div>
                <div className="relative h-[150px] w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    
                    {/* Area path */}
                    <path d={areaPath} fill="url(#chartGrad)" opacity="0.3" />
                    {/* Line path */}
                    <path d={linePath} fill="none" stroke="#00FFA3" strokeWidth="2" />
                    
                    {/* Glowing endpoint marker */}
                    <circle cx="500" cy={points[10].split(',')[1]} r="4" fill="#00FFA3" />
                    <circle cx="500" cy={points[10].split(',')[1]} r="8" fill="#00FFA3" opacity="0.4" className="animate-ping" />
                    
                    {/* Defs */}
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00FFA3" />
                        <stop offset="100%" stopColor="#00FFA3" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-space">
                  <span>Year 0 (Setup)</span>
                  <span>Year 5</span>
                  <span>Year 10</span>
                </div>
              </div>
            </div>

            {/* Micro Stats Panel */}
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric-emerald/10 flex items-center justify-center text-electric-emerald text-xs font-bold font-space">
                  CO₂
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-space">Carbon Offset</span>
                  <span className="block text-sm font-semibold text-white">{Math.round(co2OffsetKg)} kg CO₂ / yr</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 text-sm font-semibold font-space">
                  ₹
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-space">Bills Wiped</span>
                  <span className="block text-sm font-semibold text-white">₹{Math.floor(yearlyElectricitySaved)} / yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
