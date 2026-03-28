import { useState, useEffect } from "react";

const C = {
  deepPurple:   "#2d1654",
  richPurple:   "#3b1f6e",
  darkPurple:   "#1e0e3a",
  forestGreen:  "#1a3d2b",
  darkGreen:    "#122a1e",
  gold:         "#d4a843",
  goldLight:    "#f0c96a",
  goldDark:     "#a07820",
  lavender:     "#b48fd4",
  lavLight:     "#d4b8f0",
  white:        "#f8f4ff",
  purple200:    "rgba(180,143,212,0.85)",
};

function Stars() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i, x: Math.random()*100, y: Math.random()*100,
    r: Math.random()*1.8+0.5, delay: Math.random()*5, dur: Math.random()*3+2,
  }));
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {stars.map(s => (
        <div key={s.id} style={{
          position:"absolute", left:`${s.x}%`, top:`${s.y}%`,
          width:s.r*2, height:s.r*2, borderRadius:"50%",
          background: s.r > 1.5 ? "#d4a843" : "#d4b8f0",
          opacity:0, animation:`twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
        }}/>
      ))}
    </div>
  );
}

function TripleMoon({ size = 80, color = "#d4a843" }) {
  return (
    <svg width={size} height={size*0.55} viewBox="0 0 120 66" fill="none">
      <path d="M20 10 Q5 33 20 56 Q8 48 8 33 Q8 18 20 10Z" fill={color}/>
      <path d="M100 10 Q115 33 100 56 Q112 48 112 33 Q112 18 100 10Z" fill={color}/>
      <circle cx="60" cy="33" r="22" fill={color}/>
      <text x="60" y="38" textAnchor="middle" fontSize="16" fill="#122a1e" fontWeight="bold">✦</text>
    </svg>
  );
}

function LogoArt({ width = 340, height = 260 }) {
  const goldColor = "#d4a843";
  const goldLight = "#f0c96a";
  const goldDark  = "#a07820";
  const green     = "#1a3d2b";
  const leaf1     = "#2a6040";
  const leaf2     = "#3a7050";
  const flowerBig = "#7b5aa6";
  const flowerMid = "#9b7ac6";
  const flowerLt  = "#c4a0e8";
  const flowerPetal = "#b085d8";
  const lavender  = "#b48fd4";
  const white     = "#f8f4ff";

  return (
    <svg width={width} height={height} viewBox="0 0 340 260">
      {/* Outer border frame */}
      <rect x="4" y="4" width="332" height="252" rx="4" fill="none" stroke={lavender} strokeWidth="0.8" opacity="0.6"/>
      {/* Corner flourishes */}
      {[[14,14],[326,14],[14,246],[326,246]].map(([cx,cy],i) => (
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="12" fill={lavender} opacity="0.7">✦</text>
      ))}

      {/* Main green circle */}
      <circle cx="170" cy="122" r="96" fill={green}/>
      <circle cx="170" cy="122" r="91" fill="none" stroke={goldColor} strokeWidth="1.8"/>
      <circle cx="170" cy="122" r="88" fill="none" stroke={goldDark} strokeWidth="0.5"/>

      {/* Triple moon above circle */}
      <path d="M148 30 Q138 42 148 54 Q141 50 141 42 Q141 34 148 30Z" fill={goldColor}/>
      <path d="M192 30 Q202 42 192 54 Q199 50 199 42 Q199 34 192 30Z" fill={goldColor}/>
      <circle cx="170" cy="42" r="18" fill={goldColor}/>
      <circle cx="170" cy="42" r="9" fill={goldDark} opacity="0.4"/>

      {/* LEFT main stem */}
      <path d="M170 218 Q138 192 122 162 Q108 132 132 92" stroke={leaf1} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* RIGHT main stem */}
      <path d="M170 218 Q202 192 218 162 Q232 132 208 92" stroke={leaf1} strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Left leaves */}
      <ellipse cx="112" cy="152" rx="20" ry="8" fill={leaf1} transform="rotate(-35 112 152)"/>
      <ellipse cx="124" cy="125" rx="17" ry="7" fill={leaf2} transform="rotate(-50 124 125)"/>
      <ellipse cx="140" cy="100" rx="14" ry="6" fill={leaf1} transform="rotate(-60 140 100)"/>
      <ellipse cx="100" cy="140" rx="13" ry="5" fill="#224e32" transform="rotate(-22 100 140)"/>
      {/* Right leaves */}
      <ellipse cx="228" cy="152" rx="20" ry="8" fill={leaf1} transform="rotate(35 228 152)"/>
      <ellipse cx="216" cy="125" rx="17" ry="7" fill={leaf2} transform="rotate(50 216 125)"/>
      <ellipse cx="200" cy="100" rx="14" ry="6" fill={leaf1} transform="rotate(60 200 100)"/>
      <ellipse cx="240" cy="140" rx="13" ry="5" fill="#224e32" transform="rotate(22 240 140)"/>

      {/* Big lavender flowers LEFT */}
      {[0,60,120,180,240,300].map(a => (
        <ellipse key={a}
          cx={98 + 16*Math.cos(a*Math.PI/180)} cy={104 + 16*Math.sin(a*Math.PI/180)}
          rx="7" ry="4" fill={flowerPetal} opacity="0.85"
          transform={`rotate(${a} ${98+16*Math.cos(a*Math.PI/180)} ${104+16*Math.sin(a*Math.PI/180)})`}/>
      ))}
      <circle cx="98" cy="104" r="12" fill={flowerBig} opacity="0.9"/>
      <circle cx="98" cy="104" r="8" fill={flowerMid}/>
      <circle cx="98" cy="104" r="4" fill={flowerLt}/>

      {/* Big lavender flowers RIGHT */}
      {[0,60,120,180,240,300].map(a => (
        <ellipse key={a}
          cx={242 + 16*Math.cos(a*Math.PI/180)} cy={104 + 16*Math.sin(a*Math.PI/180)}
          rx="7" ry="4" fill={flowerPetal} opacity="0.85"
          transform={`rotate(${a} ${242+16*Math.cos(a*Math.PI/180)} ${104+16*Math.sin(a*Math.PI/180)})`}/>
      ))}
      <circle cx="242" cy="104" r="12" fill={flowerBig} opacity="0.9"/>
      <circle cx="242" cy="104" r="8" fill={flowerMid}/>
      <circle cx="242" cy="104" r="4" fill={flowerLt}/>

      {/* Small daisies */}
      {[[132,210],[208,210],[114,180],[226,180]].map(([cx,cy],i) => (
        <g key={i}>
          {[0,45,90,135,180,225,270,315].map(a => (
            <ellipse key={a}
              cx={cx+8*Math.cos(a*Math.PI/180)} cy={cy+8*Math.sin(a*Math.PI/180)}
              rx="4" ry="3" fill={flowerPetal} opacity="0.75"
              transform={`rotate(${a} ${cx+8*Math.cos(a*Math.PI/180)} ${cy+8*Math.sin(a*Math.PI/180)})`}/>
          ))}
          <circle cx={cx} cy={cy} r="5" fill={goldColor}/>
        </g>
      ))}

      {/* Gold stars */}
      {[[145,68],[195,68],[170,52],[118,172],[222,172],[148,210],[192,210],[170,230]].map(([x,y],i) => (
        <text key={i} x={x} y={y} textAnchor="middle" fontSize={i<3?13:9} fill={goldColor} opacity="0.85">✦</text>
      ))}

      {/* Candle */}
      <rect x="162" y="208" width="16" height="36" rx="2" fill="#9b7ac6"/>
      <rect x="159" y="208" width="22" height="7" rx="2" fill={flowerBig}/>
      <ellipse cx="170" cy="248" rx="18" ry="5" fill={goldColor}/>
      <rect x="163" y="240" width="14" height="10" rx="2" fill={goldDark}/>
      <polygon points="170,240 173,246 179,246 174,249 176,255 170,251 164,255 166,249 161,246 167,246" fill={goldColor}/>
      <path d="M170 202 Q166 192 170 184 Q174 192 170 202Z" fill={goldLight}/>
      <path d="M170 202 Q167 195 170 188 Q173 195 170 202Z" fill="white" opacity="0.8"/>

      {/* Festival name text */}
      <text x="170" y="108" textAnchor="middle" fontSize="13" fontWeight="bold" fill={white} fontFamily="serif" letterSpacing="4">FRESNO</text>
      <line x1="128" y1="114" x2="212" y2="114" stroke={goldColor} strokeWidth="0.7"/>
      <text x="170" y="114" textAnchor="middle" fontSize="8" fill={goldColor}>✦</text>
      <text x="170" y="134" textAnchor="middle" fontSize="20" fontWeight="bold" fill={white} fontFamily="serif" letterSpacing="2">PAGAN</text>
      <line x1="122" y1="141" x2="218" y2="141" stroke={goldColor} strokeWidth="0.6"/>
      <text x="170" y="141" textAnchor="middle" fontSize="8" fill={goldColor}>✦</text>
      <text x="170" y="158" textAnchor="middle" fontSize="13" fontWeight="bold" fill={white} fontFamily="serif" letterSpacing="1.5">SPIRITUALITY</text>
      <text x="170" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill={white} fontFamily="serif" letterSpacing="2">FESTIVAL</text>
    </svg>
  );
}

function CrystalBall() {
  return (
    <svg width="200" height="230" viewBox="0 0 200 230">
      <ellipse cx="100" cy="195" rx="44" ry="10" fill="#000" opacity="0.22"/>
      <path d="M70 186 Q84 196 100 196 Q116 196 130 186 L126 178 Q100 192 74 178Z" fill="#a07820"/>
      <circle cx="100" cy="112" r="76" fill="#1a1035" stroke="#b48fd4" strokeWidth="1.5"/>
      <circle cx="100" cy="112" r="68" fill="none" stroke="#3d1a6e" strokeWidth="12" opacity="0.45"/>
      <circle cx="86" cy="98" r="32" fill="#2a0a50" opacity="0.55"/>
      <circle cx="114" cy="126" r="26" fill="#1a1060" opacity="0.5"/>
      {[[76,84],[122,93],[96,132],[136,108],[68,118],[112,70],[82,148]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i%2===0?1.5:1} fill="white" opacity={0.4+i*0.07}/>
      ))}
      <path d="M90 78 Q105 93 90 108 Q83 98 83 93 Q83 88 90 78Z" fill="#d4a843" opacity="0.65"/>
      <polygon points="100,88 104,103 119,103 107,113 111,128 100,118 89,128 93,113 81,103 96,103"
        fill="none" stroke="#b48fd4" strokeWidth="0.8" opacity="0.55"/>
      <ellipse cx="82" cy="83" rx="20" ry="14" fill="white" opacity="0.06" transform="rotate(-20 82 83)"/>
      <ellipse cx="74" cy="78" rx="7" ry="4" fill="white" opacity="0.11" transform="rotate(-20 74 78)"/>
      <circle cx="100" cy="112" r="76" fill="none" stroke="#d4b8f0" strokeWidth="0.4" opacity="0.5"/>
    </svg>
  );
}

function RitualFire() {
  return (
    <svg width="220" height="190" viewBox="0 0 220 190">
      <ellipse cx="110" cy="168" rx="72" ry="13" fill="#122a1e" opacity="0.65"/>
      {[0,40,80,120,160,200,240,280,320].map((a,i) => (
        <ellipse key={i} cx={110+56*Math.cos(a*Math.PI/180)} cy={168+9*Math.sin(a*Math.PI/180)}
          rx="7" ry="5" fill="#4a3a2a" opacity="0.9"/>
      ))}
      <path d="M72 163 Q110 153 148 163" stroke="#5a3a1a" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M76 168 Q110 159 144 168" stroke="#6a4a2a" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <ellipse cx="110" cy="161" rx="26" ry="7" fill="#cc5500" opacity="0.55"/>
      <path d="M110 158 Q92 132 100 102 Q107 118 110 108 Q113 118 120 102 Q128 132 110 158Z" fill="#cc4400" opacity="0.8"/>
      <path d="M110 155 Q96 136 103 112 Q108 124 110 116 Q112 124 117 112 Q124 136 110 155Z" fill="#ee7700"/>
      <path d="M110 152 Q100 132 105 114 Q108 126 110 120 Q112 126 115 114 Q120 132 110 152Z" fill="#ffaa00"/>
      <path d="M110 148 Q105 133 107 121 Q110 130 113 121 Q115 133 110 148Z" fill="#ffdd88"/>
      {[[96,94],[122,89],[104,79],[117,84],[110,72]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={1.5-i*0.2} fill="#f0c96a" opacity={0.9-i*0.15}/>
      ))}
      <path d="M106 72 Q100 54 108 39 Q112 49 106 72" stroke="#888" strokeWidth="1.4" fill="none" opacity="0.28" strokeLinecap="round"/>
      <path d="M114 76 Q120 57 112 43 Q108 53 114 76" stroke="#888" strokeWidth="1.1" fill="none" opacity="0.23" strokeLinecap="round"/>
      <polygon points="110,45 114,58 128,58 117,67 121,80 110,71 99,80 103,67 92,58 106,58"
        fill="none" stroke="#d4a843" strokeWidth="1" opacity="0.45"/>
    </svg>
  );
}

function TarotCard() {
  const gold = "#d4a843"; const goldD = "#a07820"; const lavLt = "#d4b8f0";
  return (
    <svg width="140" height="240" viewBox="0 0 140 240">
      <rect x="4" y="4" width="132" height="232" rx="9" fill="#1a0a35" stroke={gold} strokeWidth="1.4"/>
      <rect x="10" y="10" width="120" height="220" rx="6" fill="none" stroke={goldD} strokeWidth="0.55"/>
      {[[20,20],[120,20],[20,225],[120,225]].map(([x,y],i) => (
        <text key={i} x={x} y={y} textAnchor="middle" fontSize="9" fill={gold}>✦</text>
      ))}
      <circle cx="70" cy="48" r="20" fill="#1a3d2b" stroke={gold} strokeWidth="0.9"/>
      <path d="M62 37 Q51 48 62 59 Q56 55 56 48 Q56 41 62 37Z" fill={gold}/>
      <circle cx="70" cy="48" r="9" fill={goldD} opacity="0.28"/>
      <text x="70" y="52" textAnchor="middle" fontSize="11" fill="#f0c96a">☽</text>
      <line x1="20" y1="74" x2="120" y2="74" stroke={goldD} strokeWidth="0.7"/>
      <text x="70" y="78" textAnchor="middle" fontSize="7" fill={gold}>✦</text>
      <path d="M70 155 Q57 142 52 124 Q61 134 70 129 Q79 134 88 124 Q83 142 70 155Z" fill="#1a3d2b"/>
      <path d="M70 147 Q47 128 43 104 Q57 118 70 113 Q83 118 97 104 Q93 128 70 147Z" fill="#2a5a3a"/>
      <circle cx="70" cy="104" r="17" fill="#1a3d2b" stroke={gold} strokeWidth="0.7"/>
      <polygon points="70,93 73,102 83,102 75,108 78,117 70,112 62,117 65,108 57,102 67,102"
        fill="none" stroke="#f0c96a" strokeWidth="0.75"/>
      {[[44,147],[96,147],[30,128],[110,128]].map(([cx,cy],i) => (
        <g key={i}><circle cx={cx} cy={cy} r="7" fill="#7b5aa6" opacity="0.8"/><circle cx={cx} cy={cy} r="3.5" fill={gold}/></g>
      ))}
      <line x1="20" y1="175" x2="120" y2="175" stroke={goldD} strokeWidth="0.7"/>
      <text x="70" y="191" textAnchor="middle" fontSize="8" fill={lavLt} fontFamily="serif" letterSpacing="1.5">THE HIGH</text>
      <text x="70" y="204" textAnchor="middle" fontSize="8" fill={lavLt} fontFamily="serif" letterSpacing="1.5">PRIESTESS</text>
      <text x="70" y="222" textAnchor="middle" fontSize="10" fill={gold}>✦ II ✦</text>
    </svg>
  );
}

function HerbBundle() {
  const gold = "#d4a843"; const goldD = "#a07820";
  return (
    <svg width="180" height="210" viewBox="0 0 180 210">
      {[-18,-7,0,7,18].map((o,i) => (
        <path key={i} d={`M90 200 Q${90+o} ${162+i*4} ${88+o} ${105-i*7}`}
          stroke="#2a7040" strokeWidth={2-i*0.18} fill="none" strokeLinecap="round"/>
      ))}
      {[[72,132],[105,127],[65,108],[116,103],[77,88],[102,83],[70,67],[110,62]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx={11-i} ry="5" fill="#3a8050" opacity="0.9"
          transform={`rotate(${i%2===0?-40:40} ${x} ${y})`}/>
      ))}
      <path d="M90 200 Q79 172 74 134 Q74 114 77 90" stroke="#6a4a8a" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M90 200 Q101 172 106 134 Q106 114 103 90" stroke="#6a4a8a" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      {[[72,122],[76,112],[77,102],[78,92],[78,82],[79,72],[79,62],[80,52]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.5" ry="5.5" fill="#9b7ac6" opacity="0.85"/>
      ))}
      {[[108,122],[104,112],[103,102],[102,92],[102,82],[101,72],[101,62],[101,52]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.5" ry="5.5" fill="#9b7ac6" opacity="0.85"/>
      ))}
      <path d="M67 177 Q90 170 113 177" stroke={gold} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M70 182 Q90 176 110 182" stroke={goldD} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M90 177 Q81 168 76 172 Q79 180 90 177Z" fill={gold}/>
      <path d="M90 177 Q99 168 104 172 Q101 180 90 177Z" fill={gold}/>
      <circle cx="90" cy="177" r="3.5" fill={goldD}/>
      {[[48,64],[136,69],[55,94],[133,88]].map(([x,y],i) => (
        <text key={i} x={x} y={y} textAnchor="middle" fontSize="9" fill={gold} opacity="0.7">✦</text>
      ))}
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ["Home","About","Schedule","Vendors","Contact"];
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); };

  const navBase = { background:"none", border:"none", cursor:"pointer", fontFamily:"'Cinzel',serif",
    fontSize:11, letterSpacing:"0.18em", color:C.lavLight, textTransform:"uppercase",
    padding:"4px 0", transition:"color 0.2s" };

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: scrolled ? "rgba(30,14,58,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.goldDark}40` : "none",
      transition:"all 0.4s" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"14px 28px",
        display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <TripleMoon size={34} color={C.gold}/>
          <span style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:12, letterSpacing:"0.22em", fontWeight:600 }}>FPSF</span>
        </div>
        <div style={{ display:"flex", gap:24, alignItems:"center" }} className="nav-links">
          {links.map(l => (
            <button key={l} onClick={() => go(l.toLowerCase())} style={navBase}
              onMouseEnter={e => e.target.style.color=C.gold}
              onMouseLeave={e => e.target.style.color=C.lavLight}>{l}</button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="nav-burger"
          style={{ background:"none", border:"none", color:C.gold, fontSize:22, cursor:"pointer", display:"none" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background:"rgba(28,12,54,0.98)", padding:"10px 28px 18px", borderTop:`1px solid ${C.goldDark}30` }}>
          {links.map(l => (
            <button key={l} onClick={() => go(l.toLowerCase())}
              style={{ display:"block", width:"100%", textAlign:"left", background:"none", border:"none",
                cursor:"pointer", fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"0.15em",
                color:C.lavLight, padding:"9px 0", textTransform:"uppercase" }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [moon, setMoon] = useState(0);
  const moons = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];
  useEffect(() => { const t = setInterval(() => setMoon(m => (m+1)%8), 1100); return () => clearInterval(t); }, []);

  return (
    <section id="home" style={{ minHeight:"100vh", display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", textAlign:"center", padding:"100px 24px 60px",
      background:`radial-gradient(ellipse at 50% 0%, ${C.richPurple} 0%, ${C.deepPurple} 45%, ${C.darkPurple} 90%)`,
      position:"relative", overflow:"hidden" }}>

      {/* Corner flourishes */}
      {[[0,0,"M12 168 Q12 12 168 12","M12 138 Q12 32 138 32"],[1,0,"M328 168 Q328 12 172 12","M328 138 Q328 32 202 32"]].map(([side,_,p1,p2],i) => (
        <svg key={i} style={{ position:"absolute", top:0, [side?"right":"left"]:0, width:180, height:180, opacity:0.32, pointerEvents:"none" }} viewBox="0 0 340 180">
          <path d={p1} stroke={C.lavender} strokeWidth="1" fill="none"/>
          <path d={p2} stroke={C.gold} strokeWidth="0.5" fill="none" opacity="0.5"/>
        </svg>
      ))}
      <svg style={{ position:"absolute", bottom:0, left:0, width:180, height:180, opacity:0.3, pointerEvents:"none" }} viewBox="0 0 180 180">
        <path d="M12 12 Q12 168 168 168" stroke={C.lavender} strokeWidth="1" fill="none"/>
      </svg>
      <svg style={{ position:"absolute", bottom:0, right:0, width:180, height:180, opacity:0.3, pointerEvents:"none" }} viewBox="0 0 180 180">
        <path d="M168 12 Q168 168 12 168" stroke={C.lavender} strokeWidth="1" fill="none"/>
      </svg>

      {/* Main logo */}
      <div style={{ marginBottom:24, animation:"floatUp 0.9s ease-out both" }}>
        <LogoArt width={320} height={246}/>
      </div>

      <p style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:10, letterSpacing:"0.35em",
        textTransform:"uppercase", marginBottom:10, animation:"fadeIn 1s 0.3s both" }}>✦ Second Annual ✦</p>
      <div style={{ fontSize:28, marginBottom:6, animation:"fadeIn 1s 0.5s both" }}>{moons[moon]}</div>
      <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:"italic", color:C.lavLight,
        fontSize:17, marginBottom:16, animation:"fadeIn 1s 0.7s both" }}>
        Personal Empowerment Through Magick
      </p>

      <div style={{ display:"flex", gap:8, alignItems:"center", justifyContent:"center", marginBottom:8, animation:"fadeIn 1s 0.9s both" }}>
        <div style={{ height:1, width:36, background:`linear-gradient(to right,transparent,${C.gold})` }}/>
        <span style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:12, letterSpacing:"0.2em" }}>SEPTEMBER 19, 2026</span>
        <div style={{ height:1, width:36, background:`linear-gradient(to left,transparent,${C.gold})` }}/>
      </div>

      <p style={{ fontFamily:"'Cinzel',serif", color:C.lavender, fontSize:10, letterSpacing:"0.18em",
        marginBottom:30, animation:"fadeIn 1s 1s both" }}>
        ROEDING PARK · FRESNO, CA · 10:00 AM – 5:00 PM · FREE ADMISSION
      </p>

      <div style={{ display:"flex", gap:14, flexWrap:"wrap", justifyContent:"center", animation:"fadeIn 1s 1.2s both" }}>
<button onClick={() => document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}
          style={{ padding:"12px 28px", fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"0.2em",
            textTransform:"uppercase", background:"transparent", color:C.lavLight,
            border:`1px solid ${C.lavender}55`, borderRadius:3, cursor:"pointer", transition:"border-color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.borderColor=C.gold}
          onMouseLeave={e => e.currentTarget.style.borderColor=`${C.lavender}55`}>
          Learn More
        </button>
      </div>

      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80, pointerEvents:"none",
        background:`linear-gradient(to bottom,transparent,${C.darkPurple})` }}/>
    </section>
  );
}

function Divider() {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, padding:"8px 0" }}>
      <div style={{ height:1, flex:1, maxWidth:200, background:`linear-gradient(to right,transparent,${C.goldDark})` }}/>
      <TripleMoon size={38} color={C.gold}/>
      <div style={{ height:1, flex:1, maxWidth:200, background:`linear-gradient(to left,transparent,${C.goldDark})` }}/>
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:46 }}>
      <p style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", marginBottom:10 }}>{eyebrow}</p>
      <h2 style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:"clamp(20px,3.5vw,34px)", color:C.white, marginBottom:12 }}>{title}</h2>
      {sub && <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:"italic", color:C.purple200, fontSize:15, maxWidth:540, margin:"0 auto" }}>{sub}</p>}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginTop:14 }}>
        <div style={{ height:1, width:56, background:`linear-gradient(to right,transparent,${C.gold}70)` }}/>
        <span style={{ color:C.gold, fontSize:11 }}>✦</span>
        <div style={{ height:1, width:56, background:`linear-gradient(to left,transparent,${C.gold}70)` }}/>
      </div>
    </div>
  );
}

function About() {
  const features = [
    { icon:"🧿", title:"Vendor Market", desc:"Browse crystals, ritual tools, handcrafted jewelry, herbs, and metaphysical goods from local artisans." },
    { icon:"🌿", title:"Workshops & Classes", desc:"Attend sessions on magick, herbalism, divination, and personal empowerment led by practitioners." },
    { icon:"🔮", title:"Public Rituals & Demos", desc:"Join open ceremonies celebrating diverse pagan paths — all traditions welcome to showcase their practice." },
    { icon:"🍖", title:"Free Community BBQ", desc:"We provide a free BBQ for all attendees. Donations of BBQ-style food and bottled water are welcome!" },
  ];

  return (
    <section id="about" style={{ background:C.darkPurple, padding:"80px 24px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Divider/><div style={{ height:38 }}/>
        <SectionTitle eyebrow="☽ Our Gathering ☾" title="Where All Paths Meet"
          sub="A community celebration open to all walks of life — Wiccan, Druid, Heathen, folk practitioner, or the simply curious."/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))", gap:18, marginBottom:48 }}>
          {features.map((f,i) => (
            <div key={i} style={{ background:`rgba(26,61,43,0.22)`, border:`1px solid ${C.goldDark}45`,
              borderRadius:4, padding:"22px 20px", transition:"transform 0.25s, box-shadow 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 8px 28px ${C.forestGreen}35`; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ fontSize:26, marginBottom:10 }}>{f.icon}</div>
              <h3 style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:13, marginBottom:7 }}>{f.title}</h3>
              <p style={{ color:C.purple200, fontSize:13, lineHeight:1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display:"flex", gap:36, justifyContent:"center", alignItems:"flex-end", flexWrap:"wrap" }}>
          {[
            { el:<CrystalBall/>, label:"DIVINATION" },
            { el:<RitualFire/>, label:"RITUAL FIRE" },
            { el:<TarotCard/>, label:"TAROT" },
            { el:<HerbBundle/>, label:"HERBALISM" },
          ].map((item,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              {item.el}
              <p style={{ fontFamily:"'Cinzel',serif", color:C.lavender, fontSize:9, letterSpacing:"0.22em", marginTop:6 }}>{item.label}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop:40, padding:"26px 30px", background:`rgba(26,61,43,0.28)`,
          border:`1px dashed ${C.gold}38`, borderRadius:4, textAlign:"center" }}>
          <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:"italic", color:C.lavLight, fontSize:17, lineHeight:1.75 }}>
            "We welcome all walks and paths to showcase their beliefs in vending booths, public rituals or demonstrations."
          </p>
          <p style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:9, letterSpacing:"0.22em", marginTop:10 }}>
            — FRESNO PAGAN SPIRITUALITY FESTIVAL
          </p>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const events = [
    { time:"10:00 AM", title:"Gates Open", desc:"Festival grounds open — community gathers", type:"gate" },
    { time:"10:30 AM", title:"Opening Ritual & Welcome", desc:"Community welcome ceremony and circle casting", type:"ritual" },
    { time:"11:00 AM", title:"Vendor Market Opens", desc:"Browse all metaphysical and artisan vendor booths", type:"vendor" },
    { time:"11:30 AM", title:"Workshop: Tarot & Divination", desc:"Introduction to reading the cards — all levels welcome", type:"workshop" },
    { time:"12:00 PM", title:"Free Community BBQ", desc:"Complimentary BBQ for all attendees!", type:"bbq" },
    { time:"12:30 PM", title:"Workshop: Herbalism & Magick", desc:"Working with plants, sacred herbs, and natural energies", type:"workshop" },
    { time:"1:00 PM", title:"Drumming Circle", desc:"Open community drum jam — all welcome!", type:"ritual" },

    { time:"2:00 PM", title:"Workshop: Personal Empowerment", desc:"Harness your inner power through magickal practice", type:"workshop" },
    { time:"2:30 PM", title:"Public Demonstrations", desc:"Diverse paths showcase rituals and spiritual practices", type:"ritual" },
    { time:"3:00 PM", title:"Psychic Readings", desc:"Sign up at the information booth", type:"demo" },
    { time:"3:30 PM", title:"Fire Performance", desc:"Community fire ceremony", type:"ritual" },
    { time:"4:30 PM", title:"Closing Ceremony", desc:"Circle closing, gratitude, and community farewell", type:"ritual" },
    { time:"5:00 PM", title:"Festival Close", desc:"Until we gather again under the moon 🌕", type:"gate" },
  ];

  const dot = { gate:"#6366f1", ritual:C.gold, workshop:"#06b6d4", demo:"#10b981",
    vendor:C.lavender, bbq:"#f59e0b", special:"#ec4899" };

  return (
    <section id="schedule" style={{ background:`linear-gradient(180deg,${C.darkPurple},${C.deepPurple})`, padding:"80px 24px" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <Divider/><div style={{ height:38 }}/>
        <SectionTitle eyebrow="☽ The Day ☾" title="Festival Schedule" sub="Saturday, September 19, 2026 · Roeding Park, Fresno CA"/>
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:70, top:0, bottom:0, width:1,
            background:`linear-gradient(to bottom,transparent,${C.goldDark}45,transparent)` }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {events.map((e,i) => (
              <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}
                onMouseEnter={ev => ev.currentTarget.querySelector(".ecard").style.transform="translateX(5px)"}
                onMouseLeave={ev => ev.currentTarget.querySelector(".ecard").style.transform="translateX(0)"}>
                <div style={{ width:58, paddingTop:12, textAlign:"right", flexShrink:0,
                  fontFamily:"'Cinzel',serif", color:`${C.lavender}85`, fontSize:9.5, letterSpacing:"0.04em" }}>{e.time}</div>
                <div style={{ position:"relative", flexShrink:0, paddingTop:15 }}>
                  <div style={{ width:11, height:11, borderRadius:"50%", background:dot[e.type]||C.gold,
                    boxShadow:`0 0 7px ${dot[e.type]||C.gold}` }}/>
                </div>
                <div className="ecard" style={{ flex:1, padding:"9px 14px", transition:"transform 0.2s",
                  background:`rgba(26,14,58,0.48)`, border:`1px solid ${C.goldDark}28`, borderRadius:3 }}>
                  <p style={{ fontFamily:"'Cinzel',serif", color:C.lavLight, fontSize:12, marginBottom:2 }}>{e.title}</p>
                  <p style={{ color:`${C.lavender}75`, fontSize:11 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vendors() {
  return (
    <section id="vendors" style={{ background:C.darkPurple, padding:"80px 24px" }}>
      <div style={{ maxWidth:800, margin:"0 auto" }}>
        <Divider/><div style={{ height:38 }}/>
        <SectionTitle eyebrow="☽ The Market ☾" title="Vendors & Artisans"
          sub="Support local makers and spiritual businesses at our curated metaphysical market."/>
        <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:"italic", color:C.purple200,
          fontSize:17, lineHeight:1.85, textAlign:"center", maxWidth:620, margin:"0 auto 36px" }}>
          Browse a rich gathering of local artisans and spiritual vendors offering crystals, handcrafted jewelry,
          ritual tools, herbs, candles, pagan artwork, tarot and oracle decks, wire-wrapped pieces, orgonite,
          spiritual readings, and so much more. Every booth a discovery, every purchase a blessing.
        </p>
        <div style={{ marginTop:28, padding:"20px 26px", background:`rgba(180,143,212,0.07)`,
          border:`1px dashed ${C.lavender}38`, borderRadius:4, textAlign:"center" }}>
          <p style={{ fontFamily:"'Cinzel',serif", color:C.lavLight, fontSize:12, marginBottom:7 }}>
            Want to be a vendor, volunteer, or presenter?
          </p>
          <p style={{ color:C.purple200, fontSize:13, marginBottom:14 }}>
            Contact us or send us a Facebook message — we'd love to have you!
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }); }}
              style={{ fontFamily:"'Cinzel',serif", color:C.goldLight, fontSize:10, letterSpacing:"0.14em",
                textDecoration:"none", background:`linear-gradient(135deg,${C.forestGreen},${C.darkGreen})`,
                border:`1px solid ${C.gold}50`, padding:"8px 20px", borderRadius:2, display:"inline-block" }}>
              Contact Us
            </a>
            <a href="https://www.facebook.com/p/Fresno-Pagan-Spirituality-Festival-61577325568920/"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:10, letterSpacing:"0.14em",
                textDecoration:"none", border:`1px solid ${C.gold}45`, padding:"8px 20px",
                borderRadius:2, display:"inline-block" }}>
              Message on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [sent, setSent] = useState(false);
  const inputStyle = { width:"100%", padding:"10px 13px", background:`rgba(26,61,43,0.18)`,
    border:`1px solid ${C.goldDark}38`, borderRadius:2, color:C.lavLight,
    fontFamily:"Georgia,serif", fontSize:13, outline:"none", boxSizing:"border-box",
    transition:"border-color 0.2s" };

  return (
    <section id="contact" style={{ background:C.darkPurple, padding:"80px 24px" }}>
      <div style={{ maxWidth:660, margin:"0 auto" }}>
        <Divider/><div style={{ height:38 }}/>
        <SectionTitle eyebrow="☽ Connect ☾" title="Get In Touch"
          sub="Questions? Want to vend, volunteer, or present? We want to hear from you!"/>
        {sent ? (
          <div style={{ textAlign:"center", padding:"46px 24px", background:`rgba(26,61,43,0.28)`,
            border:`1px solid ${C.gold}38`, borderRadius:4 }}>
            <div style={{ fontSize:38, marginBottom:10 }}>🌕</div>
            <h3 style={{ fontFamily:"'Cinzel',serif", color:C.gold, fontSize:17, marginBottom:7 }}>Blessed Be!</h3>
            <p style={{ color:C.lavLight, fontSize:14 }}>Your message has been received. We'll be in touch soon.</p>
          </div>
        ) : (
          <div style={{ background:`rgba(26,14,58,0.48)`, border:`1px solid ${C.goldDark}38`, borderRadius:4, padding:"30px 26px" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {["Your Name","Email Address","Subject"].map((label,i) => (
                <div key={i}>
                  <label style={{ display:"block", fontFamily:"'Cinzel',serif", color:`${C.lavender}85`,
                    fontSize:9.5, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:5 }}>{label}</label>
                  <input type={i===1?"email":"text"} style={inputStyle}
                    onFocus={e => e.target.style.borderColor=`${C.gold}70`}
                    onBlur={e => e.target.style.borderColor=`${C.goldDark}38`}/>
                </div>
              ))}
              <div>
                <label style={{ display:"block", fontFamily:"'Cinzel',serif", color:`${C.lavender}85`,
                  fontSize:9.5, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:5 }}>Message</label>
                <textarea rows={5} style={{ ...inputStyle, resize:"vertical" }}
                  onFocus={e => e.target.style.borderColor=`${C.gold}70`}
                  onBlur={e => e.target.style.borderColor=`${C.goldDark}38`}/>
              </div>
              <button onClick={() => setSent(true)}
                style={{ padding:"12px", fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"0.2em",
                  textTransform:"uppercase", background:`linear-gradient(135deg,${C.forestGreen},${C.darkGreen})`,
                  color:C.goldLight, border:`1px solid ${C.gold}45`, borderRadius:2, cursor:"pointer",
                  boxShadow:`0 0 18px ${C.forestGreen}55`, transition:"transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform="scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}>
                Send Message
              </button>
            </div>
            <div style={{ marginTop:26, paddingTop:22, borderTop:`1px solid ${C.goldDark}28`,
              display:"flex", flexWrap:"wrap", gap:20, justifyContent:"center" }}>
              {[
                { l:" Facebook", v:"Fresno Pagan Spirituality Festival", h:"https://www.facebook.com/p/Fresno-Pagan-Spirituality-Festival-61577325568920/" },
                { l:"📷 Instagram", v:"@fresnopaganspiritualityfest", h:"https://www.instagram.com/fresnopaganspiritualityfest/" },
              ].map((c,i) => (
                <a key={i} href={c.h} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration:"none", textAlign:"center" }}>
                  <p style={{ fontFamily:"'Cinzel',serif", color:`${C.lavender}65`, fontSize:9.5, marginBottom:2 }}>{c.l}</p>
                  <p style={{ color:C.gold, fontSize:11 }}>{c.v}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:"#0d041e", borderTop:`1px solid ${C.goldDark}28`, padding:"38px 24px", textAlign:"center" }}>
      <TripleMoon size={46} color={C.gold}/>
      <p style={{ fontFamily:"'Cinzel',serif", color:C.lavender, fontSize:10, letterSpacing:"0.25em", marginTop:10, marginBottom:3 }}>
        FRESNO PAGAN SPIRITUALITY FESTIVAL
      </p>
      <p style={{ color:`${C.lavender}55`, fontSize:11, marginBottom:3 }}>
        September 19, 2026 · Roeding Park · 890 W Belmont Ave, Fresno CA 93728
      </p>
      <p style={{ fontFamily:"'IM Fell English',serif", fontStyle:"italic", color:`${C.lavender}38`, fontSize:12, marginTop:10 }}>
        All paths welcome · Blessed be 🌙
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=IM+Fell+English:ital@0;1&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#1e0e3a;color:#f8f4ff;font-family:Georgia,serif;}
        @keyframes twinkle{0%,100%{opacity:0;transform:scale(0.7)}50%{opacity:0.9;transform:scale(1.2)}}
        @keyframes floatUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#0d041e;}
        ::-webkit-scrollbar-thumb{background:rgba(180,143,212,0.38);border-radius:10px;}
        @media(max-width:640px){
          .nav-links{display:none!important;}
          .nav-burger{display:block!important;}
        }
      `}</style>
      <Stars/>
      <div style={{ position:"relative", zIndex:1 }}>
        <Nav/>
        <Hero/>
        <About/>
        <Schedule/>
        <Vendors/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
