"use client";

import React, { useState, useEffect } from 'react';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { t } from '../utils/translate';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import Projects from '../components/Projects';
import Configurator from '../components/Configurator';
import AdminDashboard from '../components/AdminDashboard';
import GallerySection from '../components/GallerySection';
import ServiceRequest from '../components/ServiceRequest';
import { Sun, Menu, X, ArrowRight, Bell, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export default function App() {
  const store = useConfiguratorStore();
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Password dialog states for secret admin portal access
  const [adminPasswordPrompt, setAdminPasswordPrompt] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminPasswordError, setAdminPasswordError] = useState(false);

  // Prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll logic: Hide nav on scroll down, reveal on scroll up
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false); // scrolling down
      } else {
        setNavVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mounted]);

  const handleTabSwitch = (tab) => {
    if (tab === 'configurator') {
      store.setActiveTab('home');
      setMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById('configurator-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    if (tab === 'admin') {
      setAdminPasswordPrompt(true);
      setAdminPasswordInput('');
      setAdminPasswordError(false);
      setMobileMenuOpen(false);
      return;
    }
    store.setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) {
    return <div className="min-h-screen bg-obsidian-bg1"></div>;
  }

  return (
    <div className={`relative min-h-screen bg-obsidian-bg1 text-zinc-100 flex flex-col ${store.language === 'en' ? 'font-sans' : 'font-kannada'}`}>
      
      {/* Floating Premium Navigation Bar */}
      {store.activeTab !== 'admin' && (
        <nav 
          className={`fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-[90%] z-50 rounded-2xl glass-panel px-6 py-4 flex items-center justify-between transition-all duration-500 ${
            navVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'
          }`}
        >
          <div 
            onClick={() => handleTabSwitch('admin')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan group-hover:scale-105 transition-transform duration-300">
              <Sun className="w-5 h-5 animate-spin-slow" />
            </div>
            <span className="font-space font-medium text-md text-white tracking-widest uppercase">
              SURYA DRISHTI
            </span>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center gap-6 text-[10px] font-space uppercase tracking-wider text-zinc-400">
            <button 
              onClick={() => handleTabSwitch('home')}
              className={`hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'home' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`}
            >
              {t('ಮನೆ / Home', store.language)}
            </button>
            <button 
              onClick={() => handleTabSwitch('configurator')}
              className={`hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'configurator' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`}
            >
              {t('ಕಾನ್ಫಿಗರೇಟರ್ / Configurator', store.language)}
            </button>
            <button 
              onClick={() => handleTabSwitch('service')}
              className={`hover:text-white transition-colors py-1 tracking-wide ${store.activeTab === 'service' ? 'text-electric-cyan font-semibold border-b border-electric-cyan' : ''}`}
            >
              {t('ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk', store.language)}
            </button>
            <button 
              onClick={() => {
                if (store.activeTab !== 'home') {
                  store.setActiveTab('home');
                }
                setTimeout(() => {
                  const el = document.getElementById('gallery-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-white transition-colors py-1 tracking-wide"
            >
              {t('ಉತ್ಪನ್ನಗಳು / Gallery', store.language)}
            </button>
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => store.setLanguage(store.language === 'kn' ? 'en' : 'kn')}
              className="px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 text-[9px] font-space tracking-wider text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer uppercase"
            >
              <span className={store.language === 'kn' ? 'text-electric-cyan font-bold font-kannada text-[10px]' : 'text-zinc-500 font-kannada text-[10px]'}>ಕನ್ನಡ</span>
              <span className="text-zinc-700">|</span>
              <span className={store.language === 'en' ? 'text-electric-cyan font-bold' : 'text-zinc-500'}>ENG</span>
            </button>

            <button
              onClick={() => handleTabSwitch('configurator')}
              className="px-5 py-2.5 rounded-xl text-[10px] uppercase font-semibold tracking-wider text-black bg-gradient-to-r from-electric-cyan to-electric-emerald hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer"
            >
              {t('ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote', store.language)} <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => store.setLanguage(store.language === 'kn' ? 'en' : 'kn')}
              className="px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/60 text-[8px] font-space tracking-wider text-zinc-300 transition-all flex items-center gap-1 cursor-pointer uppercase"
            >
              <span className={store.language === 'kn' ? 'text-electric-cyan font-bold font-kannada text-[9px]' : 'text-zinc-500 font-kannada text-[9px]'}>ಕನ್ನಡ</span>
              <span className="text-zinc-700">|</span>
              <span className={store.language === 'en' ? 'text-electric-cyan font-bold' : 'text-zinc-500'}>ENG</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      )}

      {/* Mobile Drawer menu */}
      <div 
        className={`fixed inset-0 z-50 bg-zinc-950/70 backdrop-blur-md transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`absolute top-0 right-0 w-80 h-full bg-obsidian-bg2 border-l border-zinc-900 p-8 flex flex-col justify-between transition-transform duration-500 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-zinc-900 mb-8">
              <span className="text-zinc-300 font-semibold uppercase tracking-wider text-xs">{t("ಮೆನು / Menu", store.language)}</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-sm tracking-wide text-zinc-400">
              <button onClick={() => handleTabSwitch('home')} className="text-left hover:text-white">{t('ಮನೆ / Home', store.language)}</button>
              <button onClick={() => handleTabSwitch('configurator')} className="text-left hover:text-white">{t('ಕಾನ್ಫಿಗರೇಟರ್ / Configurator', store.language)}</button>
              <button onClick={() => handleTabSwitch('service')} className="text-left hover:text-white">{t('ಸೇವಾ ಡೆಸ್ಕ್ / Service Desk', store.language)}</button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (store.activeTab !== 'home') {
                    store.setActiveTab('home');
                  }
                  setTimeout(() => {
                    const el = document.getElementById('gallery-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }} 
                className="text-left hover:text-white"
              >
                {t('ಉತ್ಪನ್ನಗಳು / Gallery', store.language)}
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleTabSwitch('configurator')}
              className="w-full py-3.5 rounded-xl text-[10px] font-semibold text-black bg-white tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
            >
              {t('ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ / Get Quote', store.language)} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Page Content Shell */}
      <main className="flex-grow">
        {store.activeTab === 'home' && (
          <>
            <Hero onNavigate={handleTabSwitch} />
            <div id="configurator-section">
              <Configurator />
            </div>
            <GallerySection />
            <Comparison />
            <Projects />
          </>
        )}
        {store.activeTab === 'service' && <ServiceRequest />}
        {store.activeTab === 'admin' && <AdminDashboard />}
      </main>

      {/* Floating System-Wide Toast Alerts */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80">
        {store.toasts.map(toast => (
          <div
            key={toast.id}
            className={`p-4 rounded-xl border flex items-center gap-3 backdrop-blur-md shadow-lg animate-slide-up ${
              toast.type === 'error'
                ? 'border-red-500/20 bg-red-950/60 text-red-200'
                : toast.type === 'warning'
                ? 'border-amber-500/20 bg-amber-950/60 text-amber-200'
                : toast.type === 'info'
                ? 'border-electric-sky/20 bg-zinc-950/60 text-electric-sky'
                : 'border-electric-emerald/20 bg-zinc-950/60 text-electric-emerald'
            }`}
          >
            <div className="shrink-0">
              {toast.type === 'error' ? (
                <AlertTriangle className="w-4 h-4 text-red-400" />
              ) : toast.type === 'warning' ? (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              ) : toast.type === 'info' ? (
                <Info className="w-4 h-4 text-electric-sky" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-electric-emerald" />
              )}
            </div>
            <div className="flex-grow text-xs leading-normal font-medium">
              {toast.message}
            </div>
            <button
              onClick={() => store.removeToast(toast.id)}
              className="shrink-0 text-zinc-500 hover:text-white font-semibold text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-zinc-950/40 text-center text-xs text-zinc-500 font-space tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-electric-cyan" />
            <span>SURYA DRISHTI CCTV INC. &bull; SYSTEM CONFIGURATION SERVICE</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} ALL CHANNELS SECURED VIA SUPABASE.</span>
          </div>
        </div>
      </footer>

      {/* Admin Password Prompt Overlay */}
      {adminPasswordPrompt && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="max-w-md w-full bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl relative">
            <button 
              onClick={() => setAdminPasswordPrompt(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-lg font-space font-medium text-white mb-4">
              {t("ನಿರ್ವಾಹಕರ ಲಾಗಿನ್ / Admin Portal Access", store.language)}
            </h3>
            
            <p className="text-xs text-zinc-500 mb-6 font-space">
              {t("ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ನಿರ್ವಾಹಕ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ನಮೂದಿಸಿ. / Please enter the administrator password to proceed.", store.language)}
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              if (adminPasswordInput === 'Tejas@2003') {
                setAdminPasswordPrompt(false);
                store.setActiveTab('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setAdminPasswordError(true);
              }
            }} className="space-y-4">
              <div>
                <input 
                  type="password" 
                  value={adminPasswordInput}
                  onChange={(e) => {
                    setAdminPasswordInput(e.target.value);
                    setAdminPasswordError(false);
                  }}
                  placeholder="Enter password..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric-cyan font-space"
                  autoFocus
                />
                {adminPasswordError && (
                  <span className="text-[10px] text-red-400 mt-1 block">
                    Invalid password. Please try again.
                  </span>
                )}
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold font-space text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Verify & Enter
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
