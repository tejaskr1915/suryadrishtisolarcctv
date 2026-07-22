(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/battery-charging.mjs [app-client] (ecmascript) <export default as BatteryCharging>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
function Hero({ onNavigate }) {
    _s();
    const [solarAngle, setSolarAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(32);
    const [batteryCharge, setBatteryCharge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(78);
    const [isCharging, setIsCharging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bgImage, setBgImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/images/hero-bg.jpg');
    // Swap background images dynamically based on device viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleResize = {
                "Hero.useEffect.handleResize": ()=>{
                    if (window.innerWidth < 768) {
                        setBgImage('/images/hero-bg-mobile.jpg');
                    } else {
                        setBgImage('/images/hero-bg.jpg');
                    }
                }
            }["Hero.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Animate mock telemetry in the hero panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setSolarAngle({
                        "Hero.useEffect.interval": (prev)=>{
                            const drift = (Math.random() - 0.5) * 0.4;
                            const next = prev + drift;
                            return next < 30 ? 30 : next > 35 ? 35 : parseFloat(next.toFixed(2));
                        }
                    }["Hero.useEffect.interval"]);
                    setBatteryCharge({
                        "Hero.useEffect.interval": (prev)=>{
                            if (prev >= 98) {
                                setIsCharging(false);
                                return 98;
                            }
                            if (prev <= 70) {
                                setIsCharging(true);
                            }
                            return prev + (isCharging ? 1 : -1);
                        }
                    }["Hero.useEffect.interval"]);
                }
            }["Hero.useEffect.interval"], 3000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        isCharging
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cover bg-center transition-all duration-500",
        style: {
            backgroundImage: `url('${bgImage}')`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/35 to-zinc-950/80 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-kannada tracking-wide mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    "ನಿಮ್ಮ ಭದ್ರತೆ ನಮ್ಮ ಜವಾಬ್ದಾರಿ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold font-kannada leading-tight text-white mb-6",
                                children: [
                                    "ಸೂರ್ಯ ದೃಷ್ಟಿ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-2xl md:text-3.5xl font-space font-semibold tracking-wider bg-gradient-to-r from-electric-cyan via-electric-sky to-electric-emerald bg-clip-text text-transparent mt-2 uppercase",
                                        children: "SURYA DRISHTI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-200 font-kannada text-base md:text-lg leading-relaxed mb-4",
                                children: "ನಿಮ್ಮ ಜಮೀನು, ತೋಟ ಮತ್ತು ಸ್ವತ್ತುಗಳ ರಕ್ಷಣೆಗಾಗಿ ಸೌರಶಕ್ತಿ ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕಣ್ಗಾವಲು ವ್ಯವಸ್ಥೆ."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-space text-sm md:text-base font-light leading-relaxed mb-8",
                                children: "Autonomous Solar CCTV security engineered with starlight AI threat classification, thermal energy backup, and custom specifications generator."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate('configurator'),
                                        className: "px-8 py-4 rounded-xl font-space bg-gradient-to-r from-electric-cyan to-electric-emerald text-black font-semibold tracking-wider hover:opacity-90 shadow-lg hover:shadow-electric-cyan/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase group cursor-pointer",
                                        children: [
                                            "Configure System ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 88,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const el = document.getElementById('comparison-matrix');
                                            if (el) el.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        },
                                        className: "px-8 py-4 rounded-xl font-space glass-panel border border-zinc-800 text-white font-medium hover:border-zinc-700 transition-all duration-300 text-sm uppercase cursor-pointer",
                                        children: "Compare Cameras"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900/60 max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-space font-medium text-white",
                                                children: "99.9%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-zinc-500 uppercase tracking-widest mt-1",
                                                children: "Solar Autonomy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-space font-medium text-white",
                                                children: "< 350ms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-zinc-500 uppercase tracking-widest mt-1",
                                                children: "AI Classification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-space font-medium text-white",
                                                children: "7 Year"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-zinc-500 uppercase tracking-widest mt-1",
                                                children: "System Warranty"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 relative h-[450px] flex items-center justify-center pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-72 h-72 rounded-full border border-electric-cyan/15 animate-ping opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-56 h-56 rounded-full border border-electric-cyan/10 animate-spin-slow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-40 h-40 rounded-full border border-dashed border-electric-cyan/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-72 h-0.5 bg-gradient-to-r from-transparent via-electric-cyan to-transparent animate-scanner shadow-[0_0_8px_#00F5FF] z-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-8 right-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Solar Input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-white",
                                                children: "40W Helios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-12 left-0 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-electric-emerald/10 flex items-center justify-center text-electric-emerald",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$charging$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryCharging$3e$__["BatteryCharging"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Thermal Battery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-white",
                                                children: [
                                                    batteryCharge,
                                                    "% Charging"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 -right-4 glass-panel p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[9px] text-zinc-500 uppercase tracking-wider font-space",
                                                children: "Panel Align"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs font-semibold text-zinc-300",
                                                children: [
                                                    solarAngle,
                                                    "° SW"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.jsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 px-3 py-1 bg-zinc-950/90 border border-electric-cyan/20 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-space tracking-widest text-zinc-400 uppercase font-semibold",
                                        children: "Active Telemetry HUD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Hero, "qnuUHUygnQoqKSxnxMsojgwsx8g=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Comparison.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Comparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useConfiguratorStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/audio-lines.mjs [app-client] (ecmascript) <export default as AudioLines>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-client] (ecmascript) <export default as ZoomIn>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/Comparison.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const renderBilingualValue = (val)=>{
    if (!val) return '';
    const translations = {
        // Night Vision
        'Color Night Vision (Up to 50m)': 'ಕಲರ್ ನೈಟ್ ವಿಷನ್ (50 ಮೀ ವರೆಗೆ) / Color Night Vision (Up to 50m)',
        'Starlight Laser (Up to 40m)': 'ಸ್ಟಾರ್‌ಲೈಟ್ ಲೇಸರ್ (40 ಮೀ ವರೆಗೆ) / Starlight Laser (Up to 40m)',
        'Infrared Black & White (Up to 30m)': 'ಇನ್‌ಫ್ರಾರೆಡ್ ಬ್ಲಾಕ್ & ವೈಟ್ (30 ಮೀ ವರೆಗೆ) / Infrared Black & White (Up to 30m)',
        'Dual-Source Color Night Vision': 'ಡ್ಯುಯಲ್-ಸೋರ್ಸ್ ಕಲರ್ ನೈಟ್ ವಿಷನ್ / Dual-Source Color Night Vision',
        'Color Laser Starlight Gaze (Up to 80m)': 'ಕಲರ್ ಲೇಸರ್ ಸ್ಟಾರ್‌ಲೈಟ್ ಗೇಜ್ (80 ಮೀ ವರೆಗೆ) / Color Laser Starlight Gaze (Up to 80m)',
        // Zoom
        '10x Optical Hybrid Zoom': '10x ಆಪ್ಟಿಕಲ್ ಹೈಬ್ರಿಡ್ ಜೂಮ್ / 10x Optical Hybrid Zoom',
        '4x Digital Magnification': '4x ಡಿಜಿಟಲ್ ಮ್ಯಾಗ್ನಿಫಿಕೇಶನ್ / 4x Digital Magnification',
        'No Optical (Fixed Wide-Angle Lens)': 'ಆಪ್ಟಿಕಲ್ ಇಲ್ಲ (ಸ್ಥಿರ ವೈಡ್-ಆಂಗಲ್ ಲೆನ್ಸ್) / No Optical (Fixed Wide-Angle Lens)',
        '4x Optical Zoom': '4x ಆಪ್ಟಿಕಲ್ ಜೂಮ್ / 4x Optical Zoom',
        '16x Hybrid Panoramic Zoom': '16x ಹೈಬ್ರಿಡ್ ಪನೋರಮಿಕ್ ಜೂಮ್ / 16x Hybrid Panoramic Zoom',
        // AI Target Tracing
        'AI Object Tracking & Siren Lock': 'ಎಐ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸೈರನ್ ಲಾಕ್ / AI Object Tracking & Siren Lock',
        'Intelligent Human Filter': 'ಬುದ್ಧಿವಂತ ಹ್ಯೂಮನ್ ಫಿಲ್ಟರ್ / Intelligent Human Filter',
        'Basic Motion & Face Scanning': 'ಮೂಲ ಚಲನೆ ಮತ್ತು ಮುಖ ಸ್ಕ್ಯಾನಿಂಗ್ / Basic Motion & Face Scanning',
        'Intrusion Cross-Line Alarm': 'ಅನಧಿಕೃತ ಪ್ರವೇಶ ಕ್ರಾಸ್-ಲೈನ್ ಅಲಾರಾಂ / Intrusion Cross-Line Alarm',
        'AI Multi-Target Classification': 'ಎಐ ಮಲ್ಟಿ-ಟಾರ್ಗೆಟ್ ವರ್ಗೀಕರಣ / AI Multi-Target Classification',
        // PIR Motion Sweep
        'Radar Motion Scan (120° coverage)': 'ರಡಾರ್ ಮೋಷನ್ ಸ್ಕ್ಯಾನ್ (120° ಕವರೇಜ್) / Radar Motion Scan (120° coverage)',
        'Zone PIR Heat Sensing': 'ಝೋನ್ ಪಿಐಆರ್ ಹೀಟ್ ಸೆನ್ಸಿಂಗ್ / Zone PIR Heat Sensing',
        'Standard Pixel Motion Analysis': 'ಪ್ರಮಾಣಿತ ಪಿಕ್ಸೆಲ್ ಚಲನೆ ವಿಶ್ಲೇಷಣೆ / Standard Pixel Motion Analysis',
        'Advanced Thermal Motion Sweep': 'ಸುಧಾರಿತ ಥರ್ಮಲ್ ಮೋಷನ್ ಸ್ವೀಪ್ / Advanced Thermal Motion Sweep',
        'Radar Sweep & Perimeter Defense': 'ರಡಾರ್ ಸ್ವೀಪ್ ಮತ್ತು ಪರಿಧಿ ರಕ್ಷಣೆ / Radar Sweep & Perimeter Defense',
        // Audio Intercom
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
const renderProductName = (name)=>{
    if (!name) return '';
    const translations = {
        'Strobe Siren Warning Dome': 'ಸ್ಟ್ರೋಬ್ ಸೈರನ್ ಎಚ್ಚರಿಕೆ ಡೋಮ್ / Strobe Siren Warning Dome',
        'THINKWILL Dual-Lens PTZ Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಪಿಟಿಝಡ್ ಡೋಮ್ / THINKWILL Dual-Lens PTZ Dome',
        'Consistent Smart Telemetry PTZ Dome': 'ಕನ್ಸಿಸ್ಟೆಂಟ್ ಸ್ಮಾರ್ಟ್ ಟೆಲಿಮೆಟ್ರಿ ಪಿಟಿಝಡ್ ಡೋಮ್ / Consistent Smart Telemetry PTZ Dome',
        'THINKWILL Single-Lens Classic Dome': 'ಥಿಂಕ್‌ವಿಲ್ ಸಿಂಗಲ್-ಲೆನ್ಸ್ ಕ್ಲಾಸಿಕ್ ಡೋಮ್ / THINKWILL Single-Lens Classic Dome',
        'THINKWILL Triple-Lens Panoramic Stand': 'ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಪನೋರಮಿಕ್ ಸ್ಟ್ಯಾಂಡ್ / THINKWILL Triple-Lens Panoramic Stand'
    };
    const matched = translations[name];
    return matched ? renderBilingual(matched) : name;
};
const renderProductDescription = (desc)=>{
    if (!desc) return '';
    const translations = {
        'White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.': 'ಸಂಯೋಜಿತ ಕೆಂಪು ಸ್ಟ್ರೋಬ್ ಸೈರನ್, ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು ಮತ್ತು ಡ್ಯುಯಲ್-ಲೆನ್ಸ್ ಗುರಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White dome camera with integrated red strobe siren, dual outdoor antennas, and dual-lens target tracking.',
        'Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.': 'ಸಂಯೋಜಿತ ಮೌಂಟಿಂಗ್ ಬ್ರಾಕೆಟ್, ಡ್ಯುಯಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ವೈಡ್-ಆಂಗಲ್ ಆಪ್ಟಿಕಲ್ ಲೆನ್ಸ್ ಹೊಂದಿರುವ ಕಾಂಪ್ಯಾಕ್ಟ್ ವೈರ್‌ಲೆಸ್ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Compact wireless THINKWILL dome camera with integrated mounting bracket, dual antennas, and wide-angle optical lens.',
        'Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.': 'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಸ್ಟಾರ್‌ಲೈಟ್ ಸೆನ್ಸಾರ್‌ಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ದಕ್ಷತೆಯ ಇನ್‌ಫ್ರಾರೆಡ್ ನೈಟ್ ಸ್ವೀಪ್ ಹೊಂದಿರುವ ಕನ್ಸಿಸ್ಟೆಂಟ್ ಬ್ರಾಂಡ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / Consistent brand dome camera with dual outdoor antennas, starlight sensors, and high-efficiency infrared night sweep.',
        'White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.': 'ಡ್ಯುಯಲ್ ಹೊರಾಂಗಣ ಆಂಟೆನಾಗಳು, ಶೂನ್ಯ-ವಿಳಂಬ ವೈಫೈ ಸಂಪರ್ಕ ಮತ್ತು ಹೆಚ್ಚಿನ ಶಕ್ತಿಯ ಹವಾಮಾನ-ನಿರೋಧಕ ಕೇಸಿಂಗ್ ಹೊಂದಿರುವ ಬಿಳಿ ಥಿಂಕ್‌ವಿಲ್ ಡೋಮ್ ಕ್ಯಾಮೆರಾ. / White THINKWILL dome camera with dual outdoor antennas, zero-lag WiFi connection, and high strength weather-proof casing.',
        'Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.': 'ಡಬಲ್ ಆಂಟೆನಾಗಳು ಮತ್ತು ಬೆಂಬಲ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಡ್ಯುಯಲ್ ಸಬ್-ಡೋಮ್ ದೃಶ್ಯ ಪಾಡ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಎಂಟರ್‌ಪ್ರೈಸ್ ಥಿಂಕ್‌ವಿಲ್ ಟ್ರಿಪಲ್-ಲೆನ್ಸ್ ಕ್ಯಾಮೆರಾ. / Enterprise THINKWILL triple-lens camera with double antennas and dual sub-dome visual pods on support stand.'
    };
    const matched = translations[desc];
    return matched ? renderBilingual(matched) : desc;
};
function Comparison() {
    _s();
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProducts();
    // Filter only solar cameras for comparison
    const solarCameras = products.filter((p)=>p.type === 'solar-camera');
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfiguratorStore"])();
    const [cameraAId, setCameraAId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(solarCameras[0]?.id || '');
    const [cameraBId, setCameraBId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(solarCameras[1]?.id || '');
    const [highlightDifferences, setHighlightDifferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const camA = solarCameras.find((c)=>c.id === cameraAId) || solarCameras[0];
    const camB = solarCameras.find((c)=>c.id === cameraBId) || solarCameras[1];
    const handleConfigure = (camera)=>{
        store.setSolarCamera(camera);
        // Switch view to home configurator and scroll smoothly to it
        store.setActiveTab('home');
        setTimeout(()=>{
            const el = document.getElementById('configurator-section');
            if (el) el.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };
    const isDiff = (key)=>{
        if (!camA || !camB || !camA.features || !camB.features) return false;
        return camA.features[key] !== camB.features[key];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "comparison-matrix",
        className: "py-24 relative overflow-hidden bg-obsidian-bg2 border-y border-zinc-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Comparison.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end justify-between mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ ಹೋಲಿಕೆ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            " / Compare Models"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಸಂವಾದಾತ್ಮಕ ಹೋಲಿಕೆ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            " / Interactive Comparison"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 font-light mt-3 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಆಪ್ಟಿಕ್ಸ್, ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಯತಾಂಕಗಳನ್ನು ಅಕ್ಕಪಕ್ಕದಲ್ಲಿ ಹೋಲಿಸಲು ಯಾವುದೇ ಎರಡು ಕ್ಯಾಮೆರಾ ಮಾದರಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            " / Select any two camera models to compare their optics, night vision capabilities, and autonomous tracking parameters side-by-side."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 md:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setHighlightDifferences(!highlightDifferences),
                                    className: `px-5 py-2.5 rounded-full font-space text-[10px] tracking-wider uppercase border cursor-pointer transition-all duration-300 ${highlightDifferences ? 'border-electric-cyan text-electric-cyan bg-electric-cyan/10 glow-cyan' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-kannada",
                                            children: "ವ್ಯತ್ಯಾಸಗಳನ್ನು ಗುರುತಿಸಿ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        " / Highlight Differences"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ 1 ಆಯ್ಕೆಮಾಡಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            " / Choose Camera 1"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 flex-wrap",
                                        children: solarCameras.map((cam)=>{
                                            const isActive = cam.id === cameraAId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCameraAId(cam.id),
                                                className: `relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'}`,
                                                title: cam.name,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: cam.image,
                                                        alt: cam.name,
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cam.id, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-zinc-400 mt-2.5 font-space font-medium",
                                        children: renderProductName(camA?.name)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel p-5 rounded-2xl border border-white/5 bg-zinc-900/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-zinc-500 uppercase tracking-widest font-space block mb-3 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಕ್ಯಾಮೆರಾ 2 ಆಯ್ಕೆಮಾಡಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            " / Choose Camera 2"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 flex-wrap",
                                        children: solarCameras.map((cam)=>{
                                            const isActive = cam.id === cameraBId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCameraBId(cam.id),
                                                className: `relative w-16 h-16 rounded-xl overflow-hidden border bg-zinc-950 p-2 cursor-pointer transition-all duration-300 ${isActive ? 'border-electric-cyan bg-electric-cyan/5 scale-105 shadow-md shadow-electric-cyan/15' : 'border-zinc-900 bg-zinc-950/20 hover:border-zinc-800'}`,
                                                title: cam.name,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: cam.image,
                                                        alt: cam.name,
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this),
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-electric-cyan animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cam.id, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-zinc-400 mt-2.5 font-space font-medium",
                                        children: renderProductName(camB?.name)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comparison.jsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    camA && camB && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-3xl border border-white/5 bg-obsidian-bg3/50 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse min-w-[600px] text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-zinc-800/80 bg-zinc-950/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 font-space text-zinc-500 uppercase tracking-widest text-[9px] w-[220px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ವಿಶೇಷಣಗಳು"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    " / Specifications"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 w-[250px] border-r border-zinc-900 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: camA.image,
                                                            alt: camA.name,
                                                            className: "w-full h-full object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-space font-medium text-sm text-white mb-1",
                                                        children: renderProductName(camA.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]",
                                                        children: renderProductDescription(camA.description)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleConfigure(camA),
                                                        className: "inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕಾನ್ಫಿಗರ್ ಮಾಡಿ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            " / Configure Node ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 93
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-6 w-[250px] text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-zinc-950/80 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-2 mb-3 mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: camB.image,
                                                            alt: camB.name,
                                                            className: "w-full h-full object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-space font-medium text-sm text-white mb-1",
                                                        children: renderProductName(camB.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-zinc-500 font-light mb-4 leading-relaxed line-clamp-2 min-h-[30px]",
                                                        children: renderProductDescription(camB.description)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleConfigure(camB),
                                                        className: "inline-flex items-center gap-1.5 text-[10px] text-electric-cyan font-space uppercase tracking-wider hover:text-white transition-colors group cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕಾನ್ಫಿಗರ್ ಮಾಡಿ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this),
                                                            " / Configure Node ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3 h-3 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Comparison.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 93
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Comparison.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comparison.jsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comparison.jsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-zinc-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('nightVision') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ರಾತ್ರಿ ದೃಷ್ಟಿ ಸಾಮರ್ಥ್ಯ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 68
                                                        }, this),
                                                        " / Night Vision Gaze"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.nightVision || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.nightVision || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('zoom') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಹೈಬ್ರಿಡ್ ಆಪ್ಟಿಕ್ಸ್ ಜೂಮ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 71
                                                        }, this),
                                                        " / Hybrid Optics Zoom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.zoom || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.zoom || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('humanDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಎಐ ಟಾರ್ಗೆಟ್ ಟ್ರೇಸಿಂಗ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 310,
                                                            columnNumber: 71
                                                        }, this),
                                                        " / AI Target Tracing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.humanDetection || camA.features?.humanDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.humanDetection || camB.features?.humanDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('motionDetection') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಪಿಐಆರ್ ಚಲನೆ ಪತ್ತೆ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 68
                                                        }, this),
                                                        " / PIR Motion Sweep"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.motionDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.motionDetection || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('twoWayAudio') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__["AudioLines"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಆಡಿಯೋ ಇಂಟರ್‌ಕಾಮ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 75
                                                        }, this),
                                                        " / Audio Intercom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.twoWayAudio || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.twoWayAudio || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('storage') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ಮೆಮೊರಿ ಸ್ಟೋರೇಜ್ ಕಾರ್ಡ್"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 349,
                                                            columnNumber: 74
                                                        }, this),
                                                        " / Memory Storage Card"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.storage || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.storage || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-white/5 transition-colors ${highlightDifferences && isDiff('warranty') ? 'bg-electric-cyan/5 border-l-2 border-electric-cyan' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 font-medium text-[11px] text-zinc-400 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-4 h-4 text-electric-cyan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-kannada",
                                                            children: "ತಯಾರಕರ ವಾರಂಟಿ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Comparison.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 76
                                                        }, this),
                                                        " / Manufacturer Warranty"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light border-r border-zinc-900",
                                                    children: renderBilingualValue(camA.features?.warranty || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-6 text-zinc-200 font-light",
                                                    children: renderBilingualValue(camB.features?.warranty || 'N/A')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Comparison.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Comparison.jsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Comparison.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Comparison.jsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comparison.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comparison.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comparison.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(Comparison, "WF0AgPeQkwp6z6WWSq6oilF09K4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useConfiguratorStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfiguratorStore"]
    ];
});
_c = Comparison;
var _c;
__turbopack_context__.k.register(_c, "Comparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Projects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dbMock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const getBilingualProject = (proj)=>{
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
        'Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.': 'ಅದ್ಭುತವಾಗಿದೆ! ಕ್ಯಾಮೆರಾ ಕೇವಲ ಸೌರಶಕ್ತಿಯಿಂದಲೇ ದೋಷರಹಿತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಈ ಸ್ಮಾರ್ಟ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ. / Fantastic! The camera runs flawlessly on solar energy alone. Highly recommend this smart system.',
        'The active object tracking has already stopped three trespassers. Dashboard notifications are instant.': 'ಸಕ್ರಿಯ ಆಬ್ಜೆಕ್ಟ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಈಗಾಗಲೇ ಮೂವರು ಅತಿಕ್ರಮಣಕಾರರನ್ನು ತಡೆದಿದೆ. ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅಧಿಸೂಚನೆಗಳು ತ್ವರಿತವಾಗಿವೆ. / The active object tracking has already stopped three trespassers. Dashboard notifications are instant.',
        'Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.': 'ಉಪ್ಪು ಗಾಳಿಯ ವಿರುದ್ಧ ತುಕ್ಕು-ನಿರೋಧಕ ವಸ್ತುಗಳು ಬಲವಾಗಿ ನಿಲ್ಲುತ್ತವೆ. ಲೈವ್ ಸ್ಟ್ರೀಮ್ 4G ಸೆಲ್ಯುಲಾರ್ ಮೂಲಕ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. / Anti-rust materials holding strong against salt air. Live stream works perfectly over 4G cellular.'
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
function Projects() {
    _s();
    const projects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dbMock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].getProjects();
    const [selectedProjRaw, setSelectedProjRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(projects[0]);
    const [comparisonSliderVal, setComparisonSliderVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50); // percentage for before/after split
    const selectedProj = getBilingualProject(selectedProjRaw);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 relative overflow-hidden bg-obsidian-bg3 grid-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಸಕ್ರಿಯ ನಿಯೋಜನೆಗಳು"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    " / Active Deployments"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಯೋಜನೆಗಳು"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    " / Projects Showcase"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-light mt-3 max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ನಮ್ಮ ಕೈಗಾರಿಕಾ ಭದ್ರತಾ ಕೇಂದ್ರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಕಸ್ಟಮ್ ಪೇಲೋಡ್‌ಗಳು, ಮೊದಲು/ನಂತರದ ಚಿತ್ರಗಳು ಮತ್ತು ಸ್ವಾಯತ್ತತೆಯ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ವೀಕ್ಷಿಸಲು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳಲ್ಲಿ ನಿಲ್ದಾಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    " / Explore our industrial security hubs. Select a station on the live network coordinates to view custom payloads, before/after images, and autonomy feedback."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 glass-panel rounded-2xl p-6 border border-white/5 bg-zinc-950/40 relative overflow-hidden flex flex-col justify-between min-h-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-zinc-400 font-space uppercase tracking-widest flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full bg-electric-cyan animate-ping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 87,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಲೈವ್ ಏರಿಯಾ ನೆಟ್‌ವರ್ಕ್"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 88,
                                                                columnNumber: 19
                                                            }, this),
                                                            " / Live Area Network"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-zinc-500 font-space uppercase",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ಕೊಲ್ಲಿ ಪ್ರದೇಶದ ವಲಯ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 91,
                                                                columnNumber: 19
                                                            }, this),
                                                            " / Bay Area Quadrant"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-[280px] bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "absolute inset-0 w-full h-full opacity-35",
                                                        viewBox: "0 0 100 100",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "20",
                                                                y1: "0",
                                                                x2: "20",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 99,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "40",
                                                                y1: "0",
                                                                x2: "40",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "60",
                                                                y1: "0",
                                                                x2: "60",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 101,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "80",
                                                                y1: "0",
                                                                x2: "80",
                                                                y2: "100",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 102,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "20",
                                                                x2: "100",
                                                                y2: "20",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 103,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "40",
                                                                x2: "100",
                                                                y2: "40",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 104,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "60",
                                                                x2: "100",
                                                                y2: "60",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 105,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "0",
                                                                y1: "80",
                                                                x2: "100",
                                                                y2: "80",
                                                                stroke: "rgba(0, 245, 255, 0.08)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "15",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "30",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "45",
                                                                fill: "none",
                                                                stroke: "rgba(0, 245, 255, 0.05)",
                                                                strokeWidth: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 111,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "50",
                                                                y1: "50",
                                                                x2: "90",
                                                                y2: "90",
                                                                stroke: "#00F5FF",
                                                                strokeWidth: "0.3",
                                                                opacity: "0.6",
                                                                className: "animate-spin-slow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 114,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this),
                                                    projects.map((proj, idx)=>{
                                                        const mappedProj = getBilingualProject(proj);
                                                        // Fixed coordinate offsets for visualization map
                                                        const positions = [
                                                            {
                                                                top: '35%',
                                                                left: '30%'
                                                            },
                                                            {
                                                                top: '48%',
                                                                left: '65%'
                                                            },
                                                            {
                                                                top: '70%',
                                                                left: '42%'
                                                            }
                                                        ];
                                                        const pos = positions[idx] || {
                                                            top: '50%',
                                                            left: '50%'
                                                        };
                                                        const isSelected = selectedProjRaw.id === proj.id;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedProjRaw(proj),
                                                            className: "absolute p-2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer",
                                                            style: {
                                                                top: pos.top,
                                                                left: pos.left
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `absolute inset-0 rounded-full scale-150 animate-radar ${isSelected ? 'bg-electric-cyan/20' : 'bg-zinc-500/10'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: `w-6 h-6 transition-all duration-300 ${isSelected ? 'text-electric-cyan scale-125 glow-cyan' : 'text-zinc-600 hover:text-zinc-400'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-zinc-950/90 text-[10px] text-white px-2 py-0.5 rounded border border-white/10 font-space whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                                                    children: renderBilingual(mappedProj.title)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Projects.jsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, proj.id, true, {
                                                            fileName: "[project]/src/components/Projects.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 border-t border-zinc-900 pt-4 flex justify-between text-xs text-zinc-500 font-space",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ನೆಟ್‌ವರ್ಕ್ ನೋಡ್ ಕ್ಲಿಕ್‌ಗಳು ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಟೆಲಿಮೆಟ್ರಿಯನ್ನು ನವೀಕರಿಸುತ್ತವೆ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this),
                                                    " / Interactive network node clicks updates portfolio telemetry"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಆನ್‌ಲೈನ್"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this),
                                                    " / Online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            selectedProj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/5 bg-zinc-950/20 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-electric-cyan font-space uppercase tracking-widest font-semibold",
                                                                children: renderBilingual(selectedProj.type)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl font-space font-medium text-white mt-1",
                                                                children: renderBilingual(selectedProj.title)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-zinc-500 flex items-center gap-1 mt-1.5 font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    renderBilingual(selectedProj.location)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-white/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-3.5 h-3.5 fill-amber-400 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-white",
                                                                children: "5.0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-[220px] rounded-xl overflow-hidden border border-white/5 bg-zinc-950 mb-6 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: selectedProj.afterImg,
                                                        alt: "Post-Installation Solar Camera System",
                                                        className: "absolute inset-0 w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 overflow-hidden",
                                                        style: {
                                                            width: `${comparisonSliderVal}%`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: selectedProj.beforeImg,
                                                                alt: "Pre-Installation Site Location",
                                                                className: "absolute top-0 left-0 w-full h-full object-cover",
                                                                style: {
                                                                    width: '100%',
                                                                    minWidth: '400px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-4 left-4 bg-zinc-950/80 px-2 py-0.5 border border-white/10 rounded text-[9px] font-space text-zinc-400 uppercase tracking-widest z-20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಮೊದಲು"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Before"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 right-4 bg-electric-cyan/95 text-black px-2 py-0.5 rounded text-[9px] font-space font-semibold uppercase tracking-widest z-20 shadow-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-kannada",
                                                                children: "ನಂತರ (ಸೌರ ವ್ಯವಸ್ಥೆ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            " / After (Solar System)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 bottom-0 w-0.5 bg-electric-cyan z-30 pointer-events-none",
                                                        style: {
                                                            left: `${comparisonSliderVal}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-electric-cyan text-black font-semibold flex items-center justify-center text-xs shadow-lg border border-zinc-900",
                                                            children: "↔"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Projects.jsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "100",
                                                        value: comparisonSliderVal,
                                                        onChange: (e)=>setComparisonSliderVal(e.target.value),
                                                        className: "absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-zinc-950/40 border border-white/5 rounded-xl p-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-zinc-500 uppercase tracking-wider block font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಪೇಲೋಡ್ ಕಾನ್ಫಿಗರೇಶನ್"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Payload Config"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-200 mt-1 block leading-normal",
                                                                children: renderBilingual(selectedProj.camera)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-zinc-950/40 border border-white/5 rounded-xl p-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-zinc-500 uppercase tracking-wider block font-space",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-kannada",
                                                                        children: "ಸ್ಥಾಪನಾ ಸಮಯ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " / Install Time"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-200 mt-1 block flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-3.5 h-3.5 text-electric-cyan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Projects.jsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    renderBilingual(selectedProj.duration)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Projects.jsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-zinc-900/60 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-zinc-500 uppercase tracking-widest font-space block mb-2 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                        className: "w-3.5 h-3.5 text-electric-emerald"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-kannada",
                                                        children: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 79
                                                    }, this),
                                                    " / Client Review (",
                                                    selectedProj.client,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-400 text-xs italic leading-relaxed",
                                                children: [
                                                    '"',
                                                    renderBilingual(selectedProj.feedback),
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.jsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Projects.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(Projects, "lFyXVoYtlF+j1HVizo05bKVFjxs=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GallerySection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
;
;
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
const renderBilingual = (text)=>{
    if (typeof text !== 'string') return text;
    if (text.includes(' / ')) {
        const [kn, en] = text.split(' / ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-kannada",
                    children: kn
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 font-light mx-1",
                    children: "/"
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: en
                }, void 0, false, {
                    fileName: "[project]/src/components/GallerySection.jsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return text;
};
const categoryBilingual = (category)=>{
    switch(category){
        case 'solar-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಸೌರ ಕ್ಯಾಮೆರಾ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 205,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / Solar Cam"
                ]
            }, void 0, true);
        case 'ip-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಪಿ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 207,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / IP Series"
                ]
            }, void 0, true);
        case 'elec-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ವಿದ್ಯುತ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 209,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / Electric Series"
                ]
            }, void 0, true);
        case 'ir-cam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಆರ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 211,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    " / IR Series"
                ]
            }, void 0, true);
        default:
            return category;
    }
};
function GallerySection() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [lightboxItem, setLightboxItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playingVideo, setPlayingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Local demo video url state
    const handleItemClick = (item)=>{
        setLightboxItem(item);
        if (item.type === 'video' && item.videoUrl) {
            setPlayingVideo(item.videoUrl);
        } else {
            setPlayingVideo(null);
        }
    };
    const categories = [
        {
            id: 'all',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಎಲ್ಲಾ ಪ್ರದರ್ಶನಗಳು"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 232,
                        columnNumber: 27
                    }, this),
                    " / All Showcase"
                ]
            }, void 0, true)
        },
        {
            id: 'solar-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಸೌರ ಕ್ಯಾಮೆರಾಗಳು"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 233,
                        columnNumber: 33
                    }, this),
                    " / Solar Cameras"
                ]
            }, void 0, true)
        },
        {
            id: 'ip-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಪಿ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 234,
                        columnNumber: 30
                    }, this),
                    " / IP Series"
                ]
            }, void 0, true)
        },
        {
            id: 'elec-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ವಿದ್ಯುತ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 235,
                        columnNumber: 32
                    }, this),
                    " / Electric Series"
                ]
            }, void 0, true)
        },
        {
            id: 'ir-cam',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-kannada",
                        children: "ಐಆರ್ ಸರಣಿ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 236,
                        columnNumber: 30
                    }, this),
                    " / IR Series"
                ]
            }, void 0, true)
        }
    ];
    const filteredItems = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item)=>item.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery-section",
        className: "py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-0 w-80 h-80 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 left-0 w-80 h-80 bg-electric-emerald/5 rounded-full filter blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-electric-cyan text-xs font-space uppercase tracking-widest block mb-3 font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಉತ್ಪನ್ನ ವಿವರಪಟ್ಟಿ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    " / Product Catalog"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-light text-white leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾ ಗ್ಯಾಲರಿ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    " / CCTV Hardware Gallery"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 font-light mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-kannada",
                                        children: "ಬಳಕೆದಾರರು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಸೌರ ಸೆಟಪ್‌ಗಳು, ಐಪಿ ಡೋಮ್ ನೋಡ್‌ಗಳು ಮತ್ತು ಎಕ್ಸ್‌ಟ್ರೀಮ್ ಲೋ-ಲಕ್ಸ್ ಇನ್‌ಫ್ರಾರೆಡ್ ಹಾರ್ಡ್‌ವೇರ್‌ಗಳ ವಿವರವಾದ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    " / Browse through our extensive catalog of user-configured solar setups, IP dome nodes, and extreme low-lux infrared hardware."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-3 mb-12",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFilter(cat.id),
                                className: `px-5 py-2.5 rounded-full font-space text-[10px] uppercase tracking-wider transition-all duration-300 border cursor-pointer ${filter === cat.id ? 'bg-electric-cyan border-electric-cyan text-black font-semibold shadow-lg shadow-electric-cyan/15' : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'}`,
                                children: cat.label
                            }, cat.id, false, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleItemClick(item),
                                className: "group relative bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-electric-cyan/30 hover:shadow-[0_12px_24px_rgba(0,245,255,0.04)] hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square bg-zinc-950 flex items-center justify-center overflow-hidden relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.img,
                                                alt: item.title,
                                                className: "w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
                                                    children: item.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-5 h-5 fill-black ml-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GallerySection.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 46
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GallerySection.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 95
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GallerySection.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            item.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 w-7 h-7 rounded-full bg-electric-cyan text-black flex items-center justify-center shadow-md z-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-3.5 h-3.5 fill-black ml-0.5 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GallerySection.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-4 left-4 px-2.5 py-1 rounded-md text-[8px] font-space font-semibold uppercase tracking-wider border border-white/10 bg-zinc-900/90 text-zinc-400 z-10",
                                                children: categoryBilingual(item.category)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 border-t border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors",
                                                children: renderBilingual(item.title)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-zinc-500 font-light mt-1.5 leading-relaxed",
                                                children: renderBilingual(item.desc)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 text-zinc-500 text-xs font-space uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-kannada",
                                children: "ಯಾವುದೇ ಸ್ವತ್ತುಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            " / No assets found matching this filter"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            lightboxItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out",
                onClick: ()=>{
                    setLightboxItem(null);
                    setPlayingVideo(null);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setLightboxItem(null);
                            setPlayingVideo(null);
                        },
                        className: "absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 shadow-lg cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GallerySection.jsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl w-full flex flex-col items-center gap-6",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            !playingVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: lightboxItem.img,
                                        alt: lightboxItem.title,
                                        className: "max-w-full max-h-[48vh] object-contain rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPlayingVideo(Math.random() > 0.5 ? '/videos/demo1.mp4' : '/videos/demo2.mp4'),
                                        className: "px-5 py-2.5 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan text-xs font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center gap-2 cursor-pointer font-space uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "w-4 h-4 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ವಿಡಿಯೋ ಡೆಮೊ ವೀಕ್ಷಿಸಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 367,
                                                columnNumber: 62
                                            }, this),
                                            " / Play Video Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-h-[70vh] bg-zinc-950/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: playingVideo,
                                        autoPlay: true,
                                        controls: true,
                                        className: "max-w-full max-h-[48vh] object-contain rounded-xl aspect-video border border-white/5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPlayingVideo(null),
                                        className: "px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs hover:bg-zinc-800 transition-all cursor-pointer font-space uppercase tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-kannada",
                                                children: "ಚಿತ್ರಕ್ಕೆ ಹಿಂತಿರುಗಿ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GallerySection.jsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this),
                                            " / Back to Image"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 378,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-electric-cyan font-space uppercase tracking-widest font-semibold",
                                        children: categoryBilingual(lightboxItem.category)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-space font-medium text-white mt-1",
                                        children: renderBilingual(lightboxItem.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-400 font-light mt-2 leading-relaxed",
                                        children: renderBilingual(lightboxItem.desc)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GallerySection.jsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GallerySection.jsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GallerySection.jsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GallerySection.jsx",
                lineNumber: 341,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GallerySection.jsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s(GallerySection, "nChTWLqWbTi5MENcTFhCbkaEFhI=");
_c = GallerySection;
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1fpht0s._.js.map