'use client';
import { useState, useEffect } from 'react';

export default function VoxTeluguApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [newsList, setNewsList] = useState([
    { id: 1, title: 'తల్లడ ప్రాంతంలో ఘనంగా క్రీడా పోటీలు', category: 'local', time: '10 నిమిషాల క్రితం', desc: 'స్థానిక యువత ఆధ్వర్యంలో ఉత్సాహంగా సాగిన క్రికెట్ టోర్నమెంట్.' },
    { id: 2, title: 'వెంకటేశ్వర స్వామి వారి వార్షిక బ్రహ్మోత్సవాలు', category: 'devotion', time: 'గంట క్రితం', desc: 'భక్తులతో కిటకిటలాడిన ఆలయం, ప్రత్యేక పూజలు.' }
  ]);

  return (
    <div style={{ background: '#121212', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '50px' }}>
      {/* Header */}
      <header style={{ background: '#0b2240', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ffd700' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>
          <span style={{ color: '#d32f2f' }}>Vox</span><span style={{ color: '#ffd700' }}>Telugu</span>
        </h1>
        <div style={{ fontSize: '0.85rem', color: '#ffd700', fontStyle: 'italic' }}>
          నిజం • నిష్పక్షం • స్వరం
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={{ display: 'flex', background: '#1e1e1e', overflowX: 'auto', padding: '10px', borderBottom: '1px solid #333' }}>
        {['home', 'local', 'devotion', 'magazine', 'admin'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: activeTab === tab ? '#d32f2f' : 'transparent', 
              color: '#fff', border: 'none', padding: '8px 16px', margin: '0 5px', 
              borderRadius: '4px', cursor: 'pointer', textTransform: 'capitalize', whiteSpace: 'nowrap', fontWeight: 'bold' 
            }}
          >
            {tab === 'home' ? 'హోమ్' : tab === 'local' ? 'స్థానిక వార్తలు' : tab === 'devotion' ? 'భక్తి' : tab === 'magazine' ? 'డిజిటల్ మ్యాగజైన్' : 'అడ్మిన్'}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {activeTab === 'home' || activeTab === 'local' || activeTab === 'devotion' ? (
          <div>
            <h2 style={{ color: '#ffd700', borderBottom: '1px solid #444', paddingBottom: '8px' }}>తాజా వార్తలు</h2>
            {newsList.map((news) => (
              <div key={news.id} style={{ background: '#1e1e1e', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #d32f2f' }}>
                <span style={{ fontSize: '0.75rem', background: '#333', padding: '3px 8px', borderRadius: '4px', color: '#ffd700' }}>{news.category.toUpperCase()}</span>
                <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.2rem' }}>{news.title}</h3>
                <p style={{ color: '#ccc', fontSize: '0.95rem', margin: 0 }}>{news.desc}</p>
                <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '10px' }}>{news.time}</div>
              </div>
            ))}
          </div>
        ) : activeTab === 'magazine' ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h2 style={{ color: '#ffd700' }}>డిజిటల్ మ్యాగజైన్ ఎడిషన్</h2>
            <p style={{ color: '#aaa' }}>ఈ వారం ప్రత్యేక డిజిటల్ మ్యాగజైన్ పేజీలు ఇక్కడ లోడ్ అవుతాయి.</p>
          </div>
        ) : (
          <div style={{ background: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#ffd700' }}>అడ్మిన్ పోస్ట్ ప్యానెల్</h2>
            <p style={{ color: '#ccc' }}>కొత్త వార్తలు మరియు మ్యాగజైన్ అప్‌డేట్ చేయడానికి లాగిన్ అవ్వండి.</p>
          </div>
        )}
      </main>
    </div>
  );
}
