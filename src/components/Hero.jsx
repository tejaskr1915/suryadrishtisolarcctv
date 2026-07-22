import React, { useState, useEffect } from 'react';
import { Shield, BatteryCharging, Sun, Compass, Radio, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [solarAngle, setSolarAngle] = useState(32);
  const [batteryCharge, setBatteryCharge] = useState(78);
  const [isCharging, setIsCharging] = useState(true);
  const [bgImage, setBgImage] = useState('/images/hero-bg.jpg');

  // Swap background images dynamically based on device viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage('/images/hero-bg-mobile.jpg');
      } else {
        setBgImage('/images/hero-bg.jpg');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate mock telemetry in the hero panel
  useEffect(() => {
    const interval = setInterval(() => {
      setSolarAngle(prev => {
        const drift = (Math.random() - 0.5) * 0.4;
        const next = prev + drift;
        return next < 30 ? 30 : next > 35 ? 35 : parseFloat(next.toFixed(2));
      });

      setBatteryCharge(prev => {
        if (prev >= 98) {
          setIsCharging(false);
          return 98;
        }
        if (prev <= 70) {
          setIsCharging(true);
        }
        return prev + (isCharging ? 1 : -1);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isCharging]);

  return (
    <section 
      className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Dark gradient overlays to ensure text readability and seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/35 to-zinc-950/80 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-0"></div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copywriting & Stats wrapped in frosted glass panel to guarantee readability */}
        <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10 backdrop-blur-md">
          {/* Kannada Header Tagline from Banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-kannada tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            ನಿಮ್ಮ ಭದ್ರತೆ ನಮ್ಮ ಜವಾಬ್ದಾರಿ
          </div>

          {/* Title with Kannada Font Noto Sans Kannada */}
          <h1 className="text-4xl md:text-6xl font-bold font-kannada leading-tight text-white mb-6">
            ಸೂರ್ಯ ದೃಷ್ಟಿ
            <span className="block text-2xl md:text-3.5xl font-space font-semibold tracking-wider bg-gradient-to-r from-electric-cyan via-electric-sky to-electric-emerald bg-clip-text text-transparent mt-2 uppercase">
              SURYA DRISHTI
            </span>
          </h1>

          {/* Kannada + English descriptions */}
          <p className="text-zinc-200 font-kannada text-base md:text-lg leading-relaxed mb-4">
            ನಿಮ್ಮ ಜಮೀನು, ತೋಟ ಮತ್ತು ಸ್ವತ್ತುಗಳ ರಕ್ಷಣೆಗಾಗಿ ಸೌರಶಕ್ತಿ ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕಣ್ಗಾವಲು ವ್ಯವಸ್ಥೆ.
          </p>
          <p className="text-zinc-400 font-space text-sm md:text-base font-light leading-relaxed mb-8">
            Autonomous Solar CCTV security engineered with starlight AI threat classification, thermal energy backup, and custom specifications generator.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => onNavigate('configurator')}
              className="px-8 py-4 rounded-xl font-space bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold tracking-wider hover:opacity-90 shadow-lg hover:shadow-electric-cyan/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase group cursor-pointer"
            >
              Configure System <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('comparison-matrix');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl font-space glass-panel border border-zinc-800 text-white font-medium hover:border-zinc-700 transition-all duration-300 text-sm uppercase cursor-pointer"
            >
              Compare Cameras
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900/60 max-w-lg">
            <div>
              <div className="text-2xl font-space font-medium text-white">99.9%</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Solar Autonomy</div>
            </div>
            <div>
              <div className="text-2xl font-space font-medium text-white">&lt; 350ms</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">AI Classification</div>
            </div>
            <div>
              <div className="text-2xl font-space font-medium text-white">7 Year</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">System Warranty</div>
            </div>
          </div>
        </div>

        {/* Right Side: Virtual Telemetry HUD overlaying the background image's camera tower */}
        <div className="lg:col-span-5 relative h-[450px] flex items-center justify-center pointer-events-none">
          {/* Holographic Radar / Telemetry target rings */}
          <div className="absolute w-72 h-72 rounded-full border border-electric-cyan/15 animate-ping opacity-30"></div>
          <div className="absolute w-56 h-56 rounded-full border border-electric-cyan/10 animate-spin-slow"></div>
          <div className="absolute w-40 h-40 rounded-full border border-dashed border-electric-cyan/20"></div>

          {/* Sweeping Laser Line representing active camera scan */}
          <div className="absolute w-72 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan to-transparent animate-scanner shadow-[0_0_8px_#00F5FF] z-20"></div>

          {/* Telemetry Indicator badges */}
          <div className="absolute top-8 right-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto">
            <div className="w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-zinc-500 uppercase tracking-wider font-space">Solar Input</span>
              <span className="block text-xs font-semibold text-white">40W Helios</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto">
            <div className="w-8 h-8 rounded-full bg-electric-emerald/10 flex items-center justify-center text-electric-emerald">
              <BatteryCharging className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-zinc-500 uppercase tracking-wider font-space">Thermal Battery</span>
              <span className="block text-xs font-semibold text-white">{batteryCharge}% Charging</span>
            </div>
          </div>

          <div className="absolute top-1/2 -right-4 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[9px] text-zinc-500 uppercase tracking-wider font-space">Panel Align</span>
              <span className="block text-xs font-semibold text-zinc-300">{solarAngle}° SW</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-2 px-3 py-1 bg-zinc-950/90 border border-electric-cyan/20 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping"></span>
            <span className="text-[8px] font-space tracking-widest text-zinc-400 uppercase font-semibold">Active Telemetry HUD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
