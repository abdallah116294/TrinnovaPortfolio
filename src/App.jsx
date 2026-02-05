// import React, { useState } from 'react';
// import { 
//   Cpu, 
//   Brain, 
//   Zap, 
//   Activity, 
//   Settings, 
//   ShieldCheck, 
//   Share2, 
//   ArrowRight, 
//   CheckCircle2,
//   Database,
//   Factory,
//   Globe,
//   Lock,
//   MessageSquare
// } from 'lucide-react';

// const Logo = ({ className = "w-10 h-10" }) => (
//   <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
//     <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
//     <circle cx="50" cy="50" r="22" fill="currentColor" />
//     {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
//       <g key={angle} transform={`rotate(${angle} 50 50)`}>
//         <line x1="50" y1="12" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//         <circle cx="50" cy="10" r="3" fill="currentColor" />
//       </g>
//     ))}
//   </svg>
// );

// const App = () => {
//   const [activeLayer, setActiveLayer] = useState(null);

//   // WhatsApp Business Integration
//   const whatsappNumber = "201270444958";
//   const getWhatsAppLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//   // Colors inspired by the logo
//   const primaryNavy = "text-[#1a4384]";
//   const bgNavy = "bg-[#1a4384]";
//   const borderNavy = "border-[#1a4384]";

//   const layers = [
//     { 
//       id: 5, 
//       name: "The Action Layer", 
//       title: "AI Action Agents",
//       desc: "Closing the loop between insight and execution by triggering autonomous workflows.",
//       color: "from-[#1a4384] to-[#2b59a2]",
//       icon: <Zap className="w-6 h-6" />
//     },
//     { 
//       id: 4, 
//       name: "Intelligence & Reasoning", 
//       title: "Contextual AI Reasoning",
//       desc: "Applies physics-based modeling and AI reasoning to explain root causes.",
//       color: "from-[#2b59a2] to-[#3b71c1]",
//       icon: <Brain className="w-6 h-6" />
//     },
//     { 
//       id: 3, 
//       name: "Physics-Grounded Modeling", 
//       title: "Optimization Layer",
//       desc: "ML-driven scheduling and performance based on real-world constraints.",
//       color: "from-[#3b71c1] to-[#4c89e0]",
//       icon: <Settings className="w-6 h-6" />
//     },
//     { 
//       id: "1-2", 
//       name: "Data Acquisition", 
//       title: "The Infrastructure",
//       desc: "Standardizes machine signals from PLCs and sensors into structured event records.",
//       color: "from-[#4c89e0] to-[#6da5f3]",
//       icon: <Database className="w-6 h-6" />
//     }
//   ];

//   const pillars = [
//     { title: "Modular, Not Monolithic", desc: "Start with specific modules and scale as your digital maturity grows.", icon: <Settings className={primaryNavy} /> },
//     { title: "The Execution Layer", desc: "The bridge between shop-floor machine-level OT and high-level ERP systems.", icon: <Factory className={primaryNavy} /> },
//     { title: "Institutionalized Knowledge", desc: "Uses RAG to ensure industrial expertise stays secure within the company.", icon: <Lock className={primaryNavy} /> }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1a4384]/20">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Logo className={`w-10 h-10 ${primaryNavy}`} />
//             <span className={`text-2xl font-black tracking-tighter ${primaryNavy}`}>TRINNOVA</span>
//           </div>
//           <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
//             <a href="#about" className="hover:text-[#1a4384] transition-colors uppercase tracking-widest">About</a>
//             <a href="#architecture" className="hover:text-[#1a4384] transition-colors uppercase tracking-widest">Architecture</a>
//             <a href="#evolution" className="hover:text-[#1a4384] transition-colors uppercase tracking-widest">Evolution</a>
//           </div>
//           <a 
//             href={getWhatsAppLink("Hello Trinnova, I would like to request a demo of your platform.")}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`${bgNavy} text-white px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-[#1a4384]/20 flex items-center gap-2`}
//           >
//             Request Demo
//           </a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="relative pt-48 pb-24 px-6 overflow-hidden bg-white">
//         <div className={`absolute top-0 right-0 w-1/3 h-full ${bgNavy} opacity-[0.02] skew-x-12 transform translate-x-1/2`} />
//         <div className="max-w-7xl mx-auto relative">
//           <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 ${primaryNavy} text-xs font-black mb-8 tracking-widest uppercase`}>
//             <Activity size={14} /> The AI-Ready Evolution
//           </div>
//           <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
//             We don't stop at analytics — <br />
//             <span className={primaryNavy}>we close the loop with action.</span>
//           </h1>
//           <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
//             Trinnova is an AI-ready Manufacturing Execution System (MES) bridging the gap between shop-floor machinery and Enterprise Resource Planning (ERP).
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a 
//               href={getWhatsAppLink("I'm interested in exploring the Industrial Intelligence Engine for my factory.")}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-[#1a4384]/30 group`}
//             >
//               Explore the Engine <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a 
//               href={getWhatsAppLink("Hello, I'd like to watch the Trinnova Vision Video and discuss implementation.")}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center"
//             >
//               Watch Vision Video
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Strategic Foundations */}
//       <section id="about" className="py-24 bg-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-8">
//             {pillars.map((pillar, i) => (
//               <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
//                 <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
//                   {pillar.icon}
//                 </div>
//                 <h3 className={`text-xl font-black mb-4 ${primaryNavy}`}>{pillar.title}</h3>
//                 <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5-Layer Engine Section */}
//       <section id="architecture" className="py-32 px-6 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${primaryNavy}`}>
//               The 5-Layer Industrial <br />Intelligence Engine
//             </h2>
//             <p className="text-slate-600 text-lg mb-12 leading-relaxed">
//               Our 5-layer technical model moves factories from basic data visibility to sophisticated, autonomous decision-making.
//             </p>
            
//             <div className="space-y-4">
//               {layers.map((layer) => (
//                 <div 
//                   key={layer.id} 
//                   onMouseEnter={() => setActiveLayer(layer.id)}
//                   className={`p-6 rounded-2xl border-2 transition-all cursor-default ${activeLayer === layer.id ? `bg-white ${borderNavy} shadow-2xl` : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
//                 >
//                   <div className="flex justify-between items-center mb-3">
//                     <h4 className={`font-black text-xl ${activeLayer === layer.id ? primaryNavy : 'text-slate-700'}`}>{layer.title}</h4>
//                     <span className={`text-xs font-black font-mono px-2 py-1 rounded ${activeLayer === layer.id ? `${bgNavy} text-white` : 'bg-slate-200 text-slate-500'}`}>
//                       LAYER {layer.id}
//                     </span>
//                   </div>
//                   <p className={`text-sm font-medium leading-relaxed transition-colors ${activeLayer === layer.id ? 'text-slate-600' : 'text-slate-400'}`}>
//                     {layer.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative flex justify-center py-20 bg-slate-50 rounded-[4rem]">
//              <div className="relative w-full max-sm:max-w-xs max-w-sm aspect-[3/4] flex flex-col items-center justify-center gap-2 perspective-1000">
//                 {layers.map((layer, idx) => (
//                   <div 
//                     key={layer.id}
//                     className={`w-full max-w-[280px] h-32 md:h-36 rounded-2xl bg-gradient-to-br ${layer.color} shadow-2xl transition-all duration-700 flex flex-col items-center justify-center transform 
//                       ${activeLayer === layer.id ? 'scale-110 -translate-y-8 rotate-x-45 brightness-110' : 'opacity-80 rotate-x-45 hover:opacity-100'}`}
//                     style={{ 
//                       zIndex: 10 - idx, 
//                       marginTop: idx === 0 ? '0' : '-80px'
//                     }}
//                   >
//                     <div className="bg-white/20 p-3 rounded-xl mb-2 text-white shadow-inner">{layer.icon}</div>
//                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
//                       {layer.id === "1-2" ? "Layers 1 & 2" : `Layer ${layer.id}`}
//                     </span>
//                   </div>
//                 ))}
//                 <div className={`absolute inset-0 pointer-events-none border-4 border-dashed ${borderNavy} opacity-10 rounded-[3rem] animate-pulse scale-125`} />
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* Digital Thread Comparison */}
//       <section className={`py-32 ${bgNavy} text-white`}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-24">
//             <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">The Challenge Isn’t Data. <br/>It’s Connection.</h2>
//             <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
//                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
//                <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-10 flex items-center gap-2">
//                 Fragmentation (Silos)
//               </h4>
//               <div className="grid grid-cols-2 gap-4">
//                 {['Product Design', 'Asset Mgmt', 'Production', 'Shop Floor'].map(item => (
//                   <div key={item} className="p-4 border border-white/10 rounded-xl bg-white/5 text-center font-bold text-white/40">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8 text-white/50 text-sm leading-relaxed italic">
//                 "Today's factories are flooded with data trapped in silos, creating inefficiency and hidden costs."
//               </div>
//             </div>

//             <div className="p-12 rounded-[3rem] bg-white text-[#1a4384] shadow-2xl shadow-black/20 relative overflow-hidden group">
//               <div className="absolute top-0 left-0 w-full h-1 bg-[#1a4384]" />
//               <h4 className="text-[#1a4384] font-black uppercase tracking-widest text-xs mb-10 flex items-center gap-2">
//                 <CheckCircle2 size={14} /> The Trinnova Digital Thread
//               </h4>
//               <div className="relative h-48 flex items-center justify-center">
//                 <div className={`w-40 h-40 border-4 ${borderNavy} border-dashed rounded-full animate-spin-slow flex items-center justify-center`}>
//                   <Logo className={`w-16 h-16 ${primaryNavy} animate-pulse`} />
//                 </div>
//                 <div className="absolute -top-4 font-black text-[10px] bg-[#1a4384] text-white px-3 py-1 rounded-full whitespace-nowrap">CONTINUOUS FLOW</div>
//               </div>
//               <p className="mt-8 font-bold text-lg leading-tight text-center">
//                 A single version of truth connecting every <br/>department in real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Evolution Steps */}
//       <section id="evolution" className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-20">
//              <span className={`text-xs font-black uppercase tracking-[0.3em] ${primaryNavy}`}>Maturity Path</span>
//              <h2 className="text-4xl font-black mt-2">Factory Operation Evolution</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-16">
//             {[
//               { phase: "Visibility", label: "Monitoring", desc: "Real-time monitoring via web and mobile platforms. Know your floor." },
//               { phase: "Optimization", label: "Predictive", desc: "Predictive maintenance and scheduling using advanced ML models." },
//               { phase: "Autonomy", label: "Autonomous", desc: "AI agents that recommend and execute operational actions." }
//             ].map((step, i) => (
//               <div key={i} className="group">
//                 <div className="flex items-center gap-4 mb-6">
//                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${bgNavy} text-white`}>
//                       {i + 1}
//                    </div>
//                    <div className="h-0.5 flex-1 bg-slate-100" />
//                 </div>
//                 <h4 className={`text-2xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300 ${primaryNavy}`}>
//                   {step.phase}
//                 </h4>
//                 <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={`${bgNavy} pt-24 pb-12 text-white/90`}>
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-8">
//               <Logo className="w-12 h-12 text-white" />
//               <span className="text-3xl font-black tracking-tighter text-white text-nowrap">TRINNOVA</span>
//             </div>
//             <p className="text-white/60 max-w-sm text-lg leading-relaxed">
//               Leading the AI-Ready evolution of manufacturing execution systems worldwide.
//             </p>
//           </div>
//           <div>
//             <h5 className="font-black uppercase tracking-widest text-xs text-white/40 mb-8">Platform</h5>
//             <ul className="space-y-4 font-bold">
//               <li><a href={getWhatsAppLink("Hello, I'd like to learn more about the Intelligence Edge module.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Intelligence Edge</a></li>
//               <li><a href={getWhatsAppLink("Hello, I'm interested in the Digital Thread integration for my business.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Digital Thread</a></li>
//               <li><a href={getWhatsAppLink("Hello, I'd like to discuss AI Action Agents for autonomous operations.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">AI Action Agents</a></li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="font-black uppercase tracking-widest text-xs text-white/40 mb-8">Company</h5>
//             <ul className="space-y-4 font-bold">
//               <li><a href="#architecture" className="hover:text-blue-300 transition-colors">Architecture</a></li>
//               <li><a href={getWhatsAppLink("I'd like to see some Case Studies of Trinnova implementations.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Case Studies</a></li>
//               <li><a href={getWhatsAppLink("Hello, I have a general inquiry regarding Trinnova.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center gap-2"><MessageSquare size={14}/> Contact via WhatsApp</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-white/30 text-xs flex flex-col md:flex-row justify-between gap-6 font-bold">
//           <p>© 2026 Trinnova Industrial Intelligence Engine. All rights reserved.</p>
//           <div className="flex gap-8 uppercase tracking-widest">
//             <a href="#">Privacy</a>
//             <a href="#">Terms</a>
//           </div>
//         </div>
//       </footer>

//       {/* Floating WhatsApp Action Button */}
//       <a 
//         href={getWhatsAppLink("Hello Trinnova, I need assistance with your platform.")} 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="fixed bottom-8 right-8 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-2"
//       >
//         <MessageSquare size={24} />
//         <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Chat with us</span>
//       </a>

//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .rotate-x-45 {
//           transform: rotateX(45deg);
//         }
//       `}} />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Activity, 
  Settings, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Database,
  Factory,
  Lock,
  MessageSquare,
  X,
  ChevronRight,
  BarChart3,
  Network,
  Users
} from 'lucide-react';
import logo from './assets/trinnova-logo.png';

// Using the provided brand logo

const Logo = ({ className = "w-16 h-16" }) => (
  <img 
     src={logo} 
    alt="Trinnova Logo" 
    className={`${className} object-contain transition-transform duration-300 hover:scale-105`} 
    onError={(e) => {
      // Fallback in case image doesn't load
      e.target.style.display = 'none';
      if (e.target.parentElement) {
        e.target.parentElement.innerHTML = '<span class="text-3xl">⚡</span>';
      }
    }}
  />
);

const App = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [activeScreen, setActiveScreen] = useState('home');

  // WhatsApp Business Integration
  const whatsappNumber = "201270444958";
  const getWhatsAppLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const primaryNavy = "text-[#1a4384]";
  const bgNavy = "bg-[#1a4384]";
  const borderNavy = "border-[#1a4384]";

  // Scroll to top when changing screens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeScreen]);

  const layers = [
    { 
      id: 5, 
      name: "The Action Layer", 
      title: "AI Action Agents",
      desc: "Closing the loop between insight and execution by triggering autonomous workflows.",
      color: "from-[#1a4384] to-[#2b59a2]",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      id: 4, 
      name: "Intelligence & Reasoning", 
      title: "Contextual AI Reasoning",
      desc: "Applies physics-based modeling and AI reasoning to explain root causes.",
      color: "from-[#2b59a2] to-[#3b71c1]",
      icon: <Brain className="w-6 h-6" />
    },
    { 
      id: 3, 
      name: "Physics-Grounded Modeling", 
      title: "Optimization Layer",
      desc: "ML-driven scheduling and performance based on real-world constraints.",
      color: "from-[#3b71c1] to-[#4c89e0]",
      icon: <Settings className="w-6 h-6" />
    },
    { 
      id: "1-2", 
      name: "Data Acquisition", 
      title: "The Infrastructure",
      desc: "Standardizes machine signals from PLCs and sensors into structured event records.",
      color: "from-[#4c89e0] to-[#6da5f3]",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const pillars = [
    { title: "Modular, Not Monolithic", desc: "Start with specific modules and scale as your digital maturity grows.", icon: <Settings className={primaryNavy} /> },
    { title: "The Execution Layer", desc: "The bridge between shop-floor machine-level OT and high-level ERP systems.", icon: <Factory className={primaryNavy} /> },
    { title: "Institutionalized Knowledge", desc: "Uses RAG to ensure industrial expertise stays secure within the company.", icon: <Lock className={primaryNavy} /> }
  ];

  // Screen Components
  const IntelligenceEdgeScreen = () => (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setActiveScreen('home')} className="flex items-center gap-2 text-slate-400 hover:text-[#1a4384] mb-8 font-bold transition-colors">
          <X size={20} /> Back to Platform
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><BarChart3 size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>Intelligence Edge</h1>
        </div>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          The Intelligence Edge acts as the nervous system of your factory floor, processing data locally to ensure millisecond responsiveness and absolute security.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="font-black text-xl mb-4">Real-time Telemetry</h3>
            <p className="text-slate-500">Sub-second latency for critical machine signals, enabling immediate intervention before failures occur.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="font-black text-xl mb-4">Edge Processing</h3>
            <p className="text-slate-500">Filter noise and process logic at the source to reduce cloud bandwidth and ensure local autonomy.</p>
          </div>
        </div>
        <button onClick={() => window.open(getWhatsAppLink("I'd like to discuss an Intelligence Edge implementation."))} className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform`}>
          Consult on Edge Deployment
        </button>
      </div>
    </div>
  );

  const DigitalThreadScreen = () => (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setActiveScreen('home')} className="flex items-center gap-2 text-slate-400 hover:text-[#1a4384] mb-8 font-bold transition-colors">
          <X size={20} /> Back to Platform
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><Network size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>Digital Thread</h1>
        </div>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Unifying the lifecycle of your product from initial design through manufacturing to final delivery. The Digital Thread ensures every stakeholder sees the same truth.
        </p>
        <div className="relative p-12 bg-[#1a4384] rounded-[3rem] text-white mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 animate-pulse">
            <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          <div className="relative z-10 grid gap-6">
            <div className="flex items-center gap-4 border-l-4 border-blue-400 pl-6 group">
              <span className="font-black text-2xl group-hover:translate-x-1 transition-transform">01</span>
              <p className="font-bold uppercase tracking-widest text-sm">ERP Syncronization</p>
            </div>
            <div className="flex items-center gap-4 border-l-4 border-blue-400 pl-6 group">
              <span className="font-black text-2xl group-hover:translate-x-1 transition-transform">02</span>
              <p className="font-bold uppercase tracking-widest text-sm">PLM Integration</p>
            </div>
            <div className="flex items-center gap-4 border-l-4 border-blue-400 pl-6 group">
              <span className="font-black text-2xl group-hover:translate-x-1 transition-transform">03</span>
              <p className="font-bold uppercase tracking-widest text-sm">Real-time Shop Floor Visibility</p>
            </div>
          </div>
        </div>
        <button onClick={() => window.open(getWhatsAppLink("Tell me more about Digital Thread integration."))} className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform`}>
          Integrate Your Systems
        </button>
      </div>
    </div>
  );

  const AIActionAgentsScreen = () => (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setActiveScreen('home')} className="flex items-center gap-2 text-slate-400 hover:text-[#1a4384] mb-8 font-bold transition-colors">
          <X size={20} /> Back to Platform
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><Zap size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>AI Action Agents</h1>
        </div>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Moving beyond "predictive" to "prescriptive." Our Agents don't just tell you something is wrong—they recommend and, with your permission, execute the fix.
        </p>
        <div className="space-y-6 mb-16">
          <div className="flex gap-6 items-start p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
             <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><Brain className={primaryNavy}/></div>
             <div>
                <h4 className="font-black text-lg mb-2">Contextual Reasoning</h4>
                <p className="text-slate-500">Understands the "Why" behind machine failures by correlating disparate data sources and institutional knowledge.</p>
             </div>
          </div>
          <div className="flex gap-6 items-start p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
             <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100"><Activity className={primaryNavy}/></div>
             <div>
                <h4 className="font-black text-lg mb-2">Autonomous Scheduling</h4>
                <p className="text-slate-500">Automatically reroutes production orders when a machine goes offline for maintenance, minimizing delivery delays.</p>
             </div>
          </div>
        </div>
        <button onClick={() => window.open(getWhatsAppLink("I'm interested in AI Action Agents."))} className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform`}>
          Activate AI Agents
        </button>
      </div>
    </div>
  );

  const CaseStudiesScreen = () => (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setActiveScreen('home')} className="flex items-center gap-2 text-slate-400 hover:text-[#1a4384] mb-8 font-bold transition-colors">
          <X size={20} /> Back to Platform
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><Users size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>Case Studies</h1>
        </div>
        <div className="grid gap-12 mb-16">
          {[
            { 
              company: "Global Automotive Tier-1", 
              result: "22% Efficiency Gain", 
              detail: "Implemented Layer 4 reasoning to identify thermal bottlenecks in the casting process that were invisible to standard sensors." 
            },
            { 
              company: "Pharma Manufacturing Corp", 
              result: "Zero Unplanned Downtime", 
              detail: "Deployed Action Agents to predict pump failures 48 hours in advance and automatically schedule repair crews." 
            }
          ].map((study, idx) => (
            <div key={idx} className="group p-8 border-2 border-slate-100 rounded-[2.5rem] hover:border-[#1a4384] transition-all bg-white shadow-xl shadow-slate-200/50">
               <h3 className="text-2xl font-black mb-2">{study.company}</h3>
               <span className={`inline-block px-4 py-1 rounded-full text-white font-bold text-xs mb-4 ${bgNavy}`}>{study.result}</span>
               <p className="text-slate-500 text-lg leading-relaxed">{study.detail}</p>
            </div>
          ))}
        </div>
        <button onClick={() => window.open(getWhatsAppLink("Send me full Case Study PDFs."))} className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform`}>
          Get Full Access
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeScreen) {
      case 'edge': return <IntelligenceEdgeScreen />;
      case 'thread': return <DigitalThreadScreen />;
      case 'agents': return <AIActionAgentsScreen />;
      case 'cases': return <CaseStudiesScreen />;
      default: return (
        <>
          {/* Hero Section */}
          <header className="relative pt-48 pb-24 px-6 overflow-hidden bg-white">
            <div className={`absolute top-0 right-0 w-1/3 h-full ${bgNavy} opacity-[0.02] skew-x-12 transform translate-x-1/2`} />
            <div className="max-w-7xl mx-auto relative">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 ${primaryNavy} text-xs font-black mb-8 tracking-widest uppercase`}>
                <Activity size={14} /> The AI-Ready Evolution
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
                We don't stop at analytics — <br />
                <span className={primaryNavy}>we close the loop with action.</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Trinnova is an AI-ready Manufacturing Execution System (MES) bridging the gap between shop-floor machinery and Enterprise Resource Planning (ERP).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveScreen('agents')}
                  className={`${bgNavy} text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-[#1a4384]/30 group`}
                >
                  Explore AI Action Agents <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={getWhatsAppLink("Hello, I'd like to watch the Trinnova Vision Video and discuss implementation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Watch Vision Video
                </a>
              </div>
            </div>
          </header>

          {/* Strategic Foundations */}
          <section id="about" className="py-24 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, i) => (
                  <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className={`text-xl font-black mb-4 ${primaryNavy}`}>{pillar.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Feature Quick Nav */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
               <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => setActiveScreen('edge')} className={`px-6 py-3 rounded-full font-black text-sm border-2 ${borderNavy} ${primaryNavy} hover:bg-[#1a4384] hover:text-white transition-all`}>
                    Intelligence Edge
                  </button>
                  <button onClick={() => setActiveScreen('thread')} className={`px-6 py-3 rounded-full font-black text-sm border-2 ${borderNavy} ${primaryNavy} hover:bg-[#1a4384] hover:text-white transition-all`}>
                    Digital Thread
                  </button>
                  <button onClick={() => setActiveScreen('agents')} className={`px-6 py-3 rounded-full font-black text-sm border-2 ${borderNavy} ${primaryNavy} hover:bg-[#1a4384] hover:text-white transition-all`}>
                    AI Action Agents
                  </button>
                  <button onClick={() => setActiveScreen('cases')} className={`px-6 py-3 rounded-full font-black text-sm border-2 ${borderNavy} ${primaryNavy} hover:bg-[#1a4384] hover:text-white transition-all`}>
                    Case Studies
                  </button>
               </div>
            </div>
          </section>

          {/* 5-Layer Engine Section */}
          <section id="architecture" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight ${primaryNavy}`}>
                  The 5-Layer Industrial <br />Intelligence Engine
                </h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  Our 5-layer technical model moves factories from basic data visibility to sophisticated, autonomous decision-making.
                </p>
                
                <div className="space-y-4">
                  {layers.map((layer) => (
                    <div 
                      key={layer.id} 
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      className={`p-6 rounded-2xl border-2 transition-all cursor-default ${activeLayer === layer.id ? `bg-white ${borderNavy} shadow-2xl` : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className={`font-black text-xl ${activeLayer === layer.id ? primaryNavy : 'text-slate-700'}`}>{layer.title}</h4>
                        <span className={`text-xs font-black font-mono px-2 py-1 rounded ${activeLayer === layer.id ? `${bgNavy} text-white` : 'bg-slate-200 text-slate-500'}`}>
                          LAYER {layer.id}
                        </span>
                      </div>
                      <p className={`text-sm font-medium leading-relaxed transition-colors ${activeLayer === layer.id ? 'text-slate-600' : 'text-slate-400'}`}>
                        {layer.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center py-20 bg-slate-50 rounded-[4rem]">
                 <div className="relative w-full max-sm:max-w-xs max-w-sm aspect-[3/4] flex flex-col items-center justify-center gap-2 perspective-1000">
                    {layers.map((layer, idx) => (
                      <div 
                        key={layer.id}
                        className={`w-full max-w-[280px] h-32 md:h-36 rounded-2xl bg-gradient-to-br ${layer.color} shadow-2xl transition-all duration-700 flex flex-col items-center justify-center transform 
                          ${activeLayer === layer.id ? 'scale-110 -translate-y-8 rotate-x-45 brightness-110' : 'opacity-80 rotate-x-45 hover:opacity-100'}`}
                        style={{ 
                          zIndex: 10 - idx, 
                          marginTop: idx === 0 ? '0' : '-80px'
                        }}
                      >
                        <div className="bg-white/20 p-3 rounded-xl mb-2 text-white shadow-inner">{layer.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                          {layer.id === "1-2" ? "Layers 1 & 2" : `Layer ${layer.id}`}
                        </span>
                      </div>
                    ))}
                    <div className={`absolute inset-0 pointer-events-none border-4 border-dashed ${borderNavy} opacity-10 rounded-[3rem] animate-pulse scale-125`} />
                 </div>
              </div>
            </div>
          </section>

          {/* Evolution Steps */}
          <section id="evolution" className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-20 text-center">
                 <span className={`text-xs font-black uppercase tracking-[0.3em] ${primaryNavy}`}>Maturity Path</span>
                 <h2 className="text-4xl font-black mt-2">Factory Operation Evolution</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-16">
                {[
                  { phase: "Visibility", label: "Monitoring", desc: "Real-time monitoring via web and mobile platforms. Know your floor at any moment." },
                  { phase: "Optimization", label: "Predictive", desc: "Predictive maintenance and scheduling using advanced ML models to prevent bottlenecks." },
                  { phase: "Autonomy", label: "Autonomous", desc: "AI agents that recommend and execute operational actions without human intervention." }
                ].map((step, i) => (
                  <div key={i} className="group p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${bgNavy} text-white`}>
                          {i + 1}
                       </div>
                    </div>
                    <h4 className={`text-2xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300 ${primaryNavy}`}>
                      {step.phase}
                    </h4>
                    <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1a4384]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveScreen('home')}>
            <Logo className="w-20 h-20" />
            <span className={`text-2xl font-black tracking-tighter ${primaryNavy}`}>TRINNOVA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <button onClick={() => setActiveScreen('home')} className={`hover:text-[#1a4384] transition-colors uppercase tracking-widest ${activeScreen === 'home' ? primaryNavy : ''}`}>Home</button>
            <button onClick={() => setActiveScreen('cases')} className={`hover:text-[#1a4384] transition-colors uppercase tracking-widest ${activeScreen === 'cases' ? primaryNavy : ''}`}>Case Studies</button>
          </div>
          <a 
            href={getWhatsAppLink("Hello Trinnova, I would like to request a demo of your platform.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgNavy} text-white px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-[#1a4384]/20 flex items-center gap-2`}
          >
            Request Demo
          </a>
        </div>
      </nav>

      {/* Dynamic Content Rendering */}
      {renderContent()}

      {/* Footer */}
      <footer className={`${bgNavy} pt-24 pb-12 text-white/90`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setActiveScreen('home')}>
              <Logo className="w-20 h-20   " />
              <span className="text-3xl font-black tracking-tighter text-white">TRINNOVA</span>
            </div>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed">
              Leading the AI-Ready evolution of manufacturing execution systems worldwide.
            </p>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-xs text-white/40 mb-8 font-mono">Platform</h5>
            <ul className="space-y-4 font-bold">
              <li><button onClick={() => setActiveScreen('edge')} className="hover:text-blue-300 transition-colors text-left">Intelligence Edge</button></li>
              <li><button onClick={() => setActiveScreen('thread')} className="hover:text-blue-300 transition-colors text-left">Digital Thread</button></li>
              <li><button onClick={() => setActiveScreen('agents')} className="hover:text-blue-300 transition-colors text-left">AI Action Agents</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-xs text-white/40 mb-8 font-mono">Company</h5>
            <ul className="space-y-4 font-bold">
              <li><button onClick={() => setActiveScreen('home')} className="hover:text-blue-300 transition-colors text-left">Architecture</button></li>
              <li><button onClick={() => setActiveScreen('cases')} className="hover:text-blue-300 transition-colors text-left">Case Studies</button></li>
              <li><a href={getWhatsAppLink("Hello, I have a general inquiry regarding Trinnova.")} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors flex items-center gap-2"><MessageSquare size={14}/> Contact via WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-white/30 text-xs flex flex-col md:flex-row justify-between gap-6 font-bold">
          <p>© 2026 Trinnova Industrial Intelligence Engine. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest font-mono">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a 
        href={getWhatsAppLink("Hello Trinnova, I need assistance with your platform.")} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-2"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Chat with us</span>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-45 {
          transform: rotateX(45deg);
        }
        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default App;