import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Activity, 
  Settings, 
  ArrowRight, 
  Database,
  Factory,
  Lock,
  MessageSquare,
  X,
  ChevronRight,
  BarChart3,
  Network,
  Users,
  Menu,
  LayoutGrid
} from 'lucide-react';

// Using the provided assets
import logo from "./assets/trinnova-logo.png";

const Logo = ({ className = "w-16 h-16" }) => (
  <img 
    src={logo} 
    alt="Trinnova Logo" 
    className={`${className} object-contain transition-transform duration-300 hover:scale-105`} 
    onError={(e) => {
      e.target.style.display = 'none';
      if (e.target.parentElement) {
        e.target.parentElement.innerHTML = '<span class="text-3xl">⚡</span>';
      }
    }}
  />
);

const App = () => {
  const [activeLayer, setActiveLayer] = useState(5);
  const [activeScreen, setActiveScreen] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // WhatsApp Business Integration
  const whatsappNumber = "201270444958";
  const getWhatsAppLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const primaryNavy = "text-[#1a4384]";
  const bgNavy = "bg-[#1a4384]";
  const borderNavy = "border-[#1a4384]";

  // Scroll logic for header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when changing screens & close menu
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
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
    { title: "Knowledge Security", desc: "Uses RAG to ensure industrial expertise stays secure within the company.", icon: <Lock className={primaryNavy} /> }
  ];

  // Global Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => setActiveScreen('home')}>
          <Logo className="w-12 h-12 md:w-16 md:h-16" />
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none ${primaryNavy}`}>TRINNOVA</span>
            <span className="text-[8px] font-black tracking-[0.3em] text-slate-400 uppercase hidden sm:block">Industrial AI</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-500 items-center">
          <button onClick={() => setActiveScreen('home')} className={`hover:text-[#1a4384] transition-colors uppercase tracking-widest ${activeScreen === 'home' ? primaryNavy : ''}`}>Home</button>
          <button onClick={() => setActiveScreen('cases')} className={`hover:text-[#1a4384] transition-colors uppercase tracking-widest ${activeScreen === 'cases' ? primaryNavy : ''}`}>Case Studies</button>
          <a 
            href={getWhatsAppLink("Hello Trinnova, I would like to request a demo.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgNavy} text-white px-6 py-3 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-xl shadow-[#1a4384]/20 flex items-center gap-2`}
          >
            REQUEST DEMO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 top-[72px] bg-white z-[999] transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col gap-6">
          <button onClick={() => setActiveScreen('home')} className="text-3xl font-black text-left">Home</button>
          <button onClick={() => setActiveScreen('cases')} className="text-3xl font-black text-left">Case Studies</button>
          <hr />
          <div className="pt-4 space-y-4">
             <button onClick={() => setActiveScreen('edge')} className="block text-lg font-bold text-slate-400">Intelligence Edge</button>
             <button onClick={() => setActiveScreen('thread')} className="block text-lg font-bold text-slate-400">Digital Thread</button>
             <button onClick={() => setActiveScreen('agents')} className="block text-lg font-bold text-slate-400">AI Action Agents</button>
          </div>
          <a 
            href={getWhatsAppLink("Mobile Demo Request")}
            className={`mt-auto ${bgNavy} text-white text-center py-5 rounded-2xl font-black text-xl shadow-2xl`}
          >
            REQUEST DEMO
          </a>
        </div>
      </div>
    </nav>
  );

  const IntelligenceEdgeScreen = () => (
    <div className="pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setActiveScreen('home')} className="flex items-center gap-2 text-slate-400 hover:text-[#1a4384] mb-8 font-bold transition-colors">
          <X size={20} /> Back to Platform
        </button>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><BarChart3 size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>Intelligence Edge</h1>
        </div>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          The Intelligence Edge acts as the nervous system of your factory floor, processing data locally to ensure millisecond responsiveness and absolute security.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="font-black text-xl mb-4">Real-time Telemetry</h3>
            <p className="text-slate-500">Sub-second latency for critical machine signals, enabling immediate intervention before failures occur.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="font-black text-xl mb-4">Edge Processing</h3>
            <p className="text-slate-500">Filter noise and process logic at the source to reduce cloud bandwidth and ensure local autonomy.</p>
          </div>
        </div>
        <button onClick={() => window.open(getWhatsAppLink("Edge Deployment Consulting"))} className={`${bgNavy} text-white w-full sm:w-auto px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#1a4384]/20 hover:scale-105 transition-transform`}>
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
          Unifying the product lifecycle from initial design to delivery. The Digital Thread ensures every stakeholder sees the same truth.
        </p>
        <div className="relative p-8 md:p-12 bg-[#1a4384] rounded-[2.5rem] md:rounded-[3rem] text-white mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 animate-pulse">
            <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          <div className="relative z-10 grid gap-8">
            {["ERP Synchronization", "PLM Integration", "Real-time Visibility"].map((text, i) => (
               <div key={i} className="flex items-center gap-4 border-l-4 border-blue-400 pl-6 group">
                <span className="font-black text-2xl group-hover:translate-x-1 transition-transform">0{i+1}</span>
                <p className="font-bold uppercase tracking-widest text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => window.open(getWhatsAppLink("Digital Thread Integration Request"))} className={`${bgNavy} text-white w-full sm:w-auto px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#1a4384]/20 hover:scale-105 transition-transform`}>
          Integrate Your Systems
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
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-4 rounded-2xl ${bgNavy} text-white shadow-lg`}><Users size={32} /></div>
          <h1 className={`text-4xl md:text-6xl font-black ${primaryNavy}`}>Case Studies</h1>
        </div>
        <div className="grid gap-8 md:gap-12 mb-16">
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
            <div key={idx} className="group p-8 border-2 border-slate-100 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#1a4384] transition-all bg-white shadow-xl shadow-slate-200/50">
               <h3 className="text-2xl font-black mb-2">{study.company}</h3>
               <span className={`inline-block px-4 py-1 rounded-full text-white font-bold text-xs mb-4 ${bgNavy}`}>{study.result}</span>
               <p className="text-slate-500 text-lg leading-relaxed">{study.detail}</p>
            </div>
          ))}
        </div>
        <button onClick={() => window.open(getWhatsAppLink("Full Case Study PDFs request"))} className={`${bgNavy} text-white w-full sm:w-auto px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#1a4384]/20`}>
          Get Full Access
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeScreen) {
      case 'edge': return <IntelligenceEdgeScreen />;
      case 'thread': return <DigitalThreadScreen />;
      case 'cases': return <CaseStudiesScreen />;
      case 'agents': return (
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
              Moving beyond "predictive" to "prescriptive." Our Agents don't just tell you something is wrong—they execute the fix.
            </p>
            <div className="space-y-6 mb-16">
              {[
                { title: "Contextual Reasoning", icon: <Brain />, desc: "Understands the 'Why' behind failures by correlating disparate data sources." },
                { title: "Autonomous Scheduling", icon: <Activity />, desc: "Automatically reroutes production orders when a machine goes offline." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-8 bg-slate-50 rounded-3xl border border-slate-100">
                   <div className="p-3 bg-white rounded-xl shadow-sm text-[#1a4384]">{item.icon}</div>
                   <div>
                      <h4 className="font-black text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            <button onClick={() => window.open(getWhatsAppLink("Activate AI Agents info"))} className={`${bgNavy} text-white w-full sm:w-auto px-8 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#1a4384]/20`}>
              Activate AI Agents
            </button>
          </div>
        </div>
      );
      default: return (
        <>
          {/* Hero Section */}
          <header className="relative pt-40 md:pt-48 pb-20 md:pb-32 px-6 overflow-hidden bg-white">
            <div className={`absolute top-0 right-0 w-1/3 h-full ${bgNavy} opacity-[0.02] skew-x-12 transform translate-x-1/2`} />
            <div className="max-w-7xl mx-auto relative">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 ${primaryNavy} text-[10px] md:text-xs font-black mb-8 tracking-widest uppercase`}>
                <Activity size={14} className="animate-pulse" /> The AI-Ready Evolution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.05]">
                We don't stop at analytics — <br />
                <span className={primaryNavy}>we close the loop with action.</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Trinnova is an AI-ready Manufacturing Execution System (MES) bridging the gap between shop-floor machinery and ERP strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActiveScreen('agents')}
                  className={`${bgNavy} text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-2xl shadow-[#1a4384]/40 group`}
                >
                  Explore Action Agents <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={getWhatsAppLink("Watch Video and Discuss Implementation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-slate-200 px-8 py-5 rounded-2xl font-black text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center text-lg"
                >
                  Watch Vision Video
                </a>
              </div>
            </div>
          </header>

          {/* Strategic Foundations */}
          <section id="about" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1a4384] group-hover:text-white transition-all">
                      {pillar.icon}
                    </div>
                    <h3 className={`text-xl font-black mb-4 ${primaryNavy}`}>{pillar.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Feature Quick Nav (Mobile optimized) */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
               <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 pb-4 md:pb-0">
                  {['edge', 'thread', 'agents', 'cases'].map((scr) => (
                    <button 
                      key={scr}
                      onClick={() => setActiveScreen(scr)} 
                      className={`whitespace-nowrap px-6 py-3 rounded-full font-black text-xs border-2 ${borderNavy} ${primaryNavy} hover:bg-[#1a4384] hover:text-white transition-all uppercase tracking-widest`}
                    >
                      {scr === 'edge' ? 'Intelligence Edge' : scr === 'thread' ? 'Digital Thread' : scr === 'agents' ? 'AI Action Agents' : 'Case Studies'}
                    </button>
                  ))}
               </div>
            </div>
          </section>

          {/* 5-Layer Engine Section */}
          <section id="architecture" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className={`text-3xl md:text-5xl font-black mb-8 tracking-tight ${primaryNavy}`}>
                  The 5-Layer Industrial <br className="hidden md:block" /> Intelligence Engine
                </h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  Moving factories from basic visibility to autonomous decision-making.
                </p>
                
                <div className="space-y-4">
                  {layers.map((layer) => (
                    <div 
                      key={layer.id} 
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer ${activeLayer === layer.id ? `bg-white ${borderNavy} shadow-2xl scale-[1.02]` : 'bg-slate-50 border-transparent'}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className={`font-black text-lg md:text-xl ${activeLayer === layer.id ? primaryNavy : 'text-slate-700'}`}>{layer.title}</h4>
                        <span className={`text-[9px] font-black px-2 py-1 rounded ${activeLayer === layer.id ? `${bgNavy} text-white` : 'bg-slate-200 text-slate-500'}`}>
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

              {/* Visual - Mobile Responsive Stack */}
              <div className="relative flex justify-center py-12 md:py-20 bg-slate-50 rounded-[3rem] md:rounded-[4rem]">
                 <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[3/4] flex flex-col items-center justify-center gap-2 perspective-1000">
                    {layers.map((layer, idx) => (
                      <div 
                        key={layer.id}
                        className={`w-full max-w-[220px] md:max-w-[280px] h-24 md:h-36 rounded-2xl bg-gradient-to-br ${layer.color} shadow-2xl transition-all duration-700 flex flex-col items-center justify-center transform 
                          ${activeLayer === layer.id ? 'scale-110 -translate-y-6 md:-translate-y-8 rotate-x-45 brightness-110' : 'opacity-80 rotate-x-45 hover:opacity-100'}`}
                        style={{ 
                          zIndex: 10 - idx, 
                          marginTop: idx === 0 ? '0' : (window.innerWidth < 768 ? '-60px' : '-80px')
                        }}
                      >
                        <div className="bg-white/20 p-2 md:p-3 rounded-xl mb-1 md:mb-2 text-white shadow-inner">{layer.icon}</div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                          {layer.id === "1-2" ? "Layers 1 & 2" : `Layer ${layer.id}`}
                        </span>
                      </div>
                    ))}
                    <div className={`absolute inset-0 pointer-events-none border-4 border-dashed ${borderNavy} opacity-5 rounded-[3rem] animate-pulse scale-125`} />
                 </div>
              </div>
            </div>
          </section>

          {/* Evolution Steps */}
          <section id="evolution" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16 text-center">
                 <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${primaryNavy}`}>Maturity Path</span>
                 <h2 className="text-3xl md:text-4xl font-black mt-2">Factory Operation Evolution</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { phase: "Visibility", label: "Monitoring", desc: "Real-time monitoring via web and mobile platforms. Know your floor at any moment." },
                  { phase: "Optimization", label: "Predictive", desc: "Predictive maintenance and scheduling using ML models to prevent bottlenecks." },
                  { phase: "Autonomy", label: "Autonomous", desc: "AI agents that execute operational actions without human intervention." }
                ].map((step, i) => (
                  <div key={i} className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${bgNavy} text-white`}>
                         {i + 1}
                       </div>
                    </div>
                    <h4 className={`text-2xl font-black mb-3 group-hover:translate-x-1 transition-transform duration-300 ${primaryNavy}`}>
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1a4384]/20 overflow-x-hidden">
      <Navigation />

      {/* Dynamic Content Rendering */}
      <main className="transition-all duration-300">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className={`${bgNavy} pt-24 pb-12 text-white/90`}>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-full lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setActiveScreen('home')}>
              <div className="bg-white p-2 rounded-xl"><Logo className="w-12 h-12" /></div>
              <span className="text-3xl font-black tracking-tighter text-white">TRINNOVA</span>
            </div>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed mb-8">
              Leading the AI-Ready evolution of manufacturing execution systems worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><MessageSquare size={18} /></a>
            </div>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-[10px] text-white/40 mb-8">Platform</h5>
            <ul className="space-y-4 font-bold text-sm">
              <li><button onClick={() => setActiveScreen('edge')} className="hover:text-blue-300 transition-colors">Intelligence Edge</button></li>
              <li><button onClick={() => setActiveScreen('thread')} className="hover:text-blue-300 transition-colors">Digital Thread</button></li>
              <li><button onClick={() => setActiveScreen('agents')} className="hover:text-blue-300 transition-colors">AI Action Agents</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-[10px] text-white/40 mb-8">Direct Contact</h5>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href={getWhatsAppLink("General Inquiry")} className="hover:text-blue-300 transition-colors flex items-center gap-2">WhatsApp Support</a></li>
              {/* <li><a href="#" className="hover:text-blue-300 transition-colors">Technical Docs</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Global Support</a></li> */}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-white/20 text-[10px] flex flex-col md:flex-row justify-between gap-6 font-bold uppercase tracking-widest">
          <p>© 2026 Trinnova Industrial Intelligence Engine.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Better for Mobile UX) */}
      <a 
        href={getWhatsAppLink("Quick Assistance Request")} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] bg-emerald-500 text-white p-4 md:p-5 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-2"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap hidden sm:block">Support Chat</span>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-45 { transform: rotateX(45deg); }
        .animate-in { animation: animate-in 0.6s ease-out; }
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Fluid Typography and Spacing */
        @media (max-width: 640px) {
          .rounded-[4rem] { border-radius: 2rem; }
          .rounded-[3rem] { border-radius: 2rem; }
        }
      `}} />
    </div>
  );
};

// Simple Globe Icon fallback
const Globe = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export default App;