'use client';
import { useState, useEffect } from 'react';

export default function VoxTeluguApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('అన్నీ');
  const [searchQuery, setSearchQuery] = useState('');
  
  // News State
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      category: 'స్థానిక వార్తలు',
      title: 'తల్లడ: అన్నారూగూడెం లో రైతు సదస్సు.. వర్షపు నీటి సంరక్షణే ధ్యేయం!',
      desc: 'తల్లడ మండలం అన్నారూగూడెం పంచాయతీ కార్యాలయంలో గురువారం ఉపసర్పంచ్ కొమ్నేని వెంకటేశ్వర్లు అధ్యక్షతన రైతు సదస్సు నిర్వహించారు.',
      editor: 'Upendra Devalla',
      role: 'Chief Editor',
      date: '8, ఆగస్టు 2026, శనివారం',
      views: 1,
      likes: 0
    }
  ]);

  // Admin Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('స్థానిక వార్తలు');
  const [newDesc, setNewDesc] = useState('');

  const categories = ['అన్నీ', 'తెలంగాణ', 'ఆంధ్రప్రదేశ్', 'స్థానిక వార్తలు', 'వీడియోస్'];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return alert('దయచేసి శీర్షిక మరియు వివరణ రాయండి.');

    const newPost = {
      id: Date.now(),
      category: newCategory,
      title: newTitle,
      desc: newDesc,
      editor: 'Upendra Devalla',
      role: 'Chief Editor',
      date: '8, ఆగస్టు 2026, శనివారం',
      views: 1,
      likes: 0
    };

    setNewsList([newPost, ...newsList]);
    setNewTitle('');
    setNewDesc('');
    setActiveTab('home');
    alert('వార్త విజయవంతంగా పోస్ట్ చేయబడింది!');
  };

  return (
    <div style={{ background: '#121212', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '70px' }}>
      
      {/* Top Header */}
      <header style={{ background: '#0b2240', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ffd700' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: '#ffd700', color: '#000', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>🎙️</div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, color: '#ffd700' }}>VoxTelugu</h1>
            <div style={{ fontSize: '0.65rem', color: '#ffd700' }}>నిజం • నిష్పక్షం • స్వరం</div>
          </div>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div style={{ background: '#ffd700', color: '#000', padding: '6px 12px', fontSize: '0.85rem', fontWeight: 'bold' }}>
        <span style={{ background: '#d32f2f', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', marginRight: '10px' }}>BREAKING:</span>
        తల్లడ ప్రాంతంలో డిజిటల్ న్యూస్ అప్‌డేట్స్ - వాక్స్ తెలుగు.
      </div>

      {/* Category Navigation Bar */}
      <nav style={{ display: 'flex', background: '#0b2240', overflowX: 'auto', padding: '8px 10px', gap: '8px', borderBottom: '1px solid #333' }}>
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => { setSelectedCategory(cat); setActiveTab('home'); }}
            style={{
              background: selectedCategory === cat ? '#1e40af' : '#1e293b',
              color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '20px',
              cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '0.85rem', fontWeight: 'bold'
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main style={{ padding: '15px', maxWidth: '700px', margin: '0 auto' }}>
        
        {/* HOME / NEWS FEED */}
        {activeTab === 'home' && (
          <div>
            {newsList
              .filter(news => selectedCategory === 'అన్నీ' || news.category === selectedCategory)
              .map((news) => (
              <div key={news.id} style={{ background: '#1e1e1e', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #333' }}>
                <div style={{ padding: '15px' }}>
                  <span style={{ background: '#d32f2f', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>{news.category}</span>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '10px 0', color: '#fff' }}>{news.title}</h2>
                  <p style={{ fontSize: '0.85rem', color: '#ccc', margin: 0 }}>{news.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #333', fontSize: '0.75rem', color: '#aaa' }}>
                    <span>✍️ {news.editor} ({news.role})</span>
                    <span>📅 {news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MAGAZINE TAB */}
        {activeTab === 'magazine' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ color: '#ffd700' }}>డిజిటల్ మ్యాగజైన్ ఎడిషన్</h2>
            <p style={{ color: '#aaa' }}>వారపు ప్రత్యేక మ్యాగజైన్ పేజీలు ఇక్కడ ప్రదర్శించబడతాయి.</p>
          </div>
        )}

        {/* ADMIN / REPORTER POST PANEL */}
        {activeTab === 'admin' && (
          <div style={{ background: '#1e1e1e', padding: '20px', borderRadius: '10px', border: '1px solid #333' }}>
            <h2 style={{ color: '#ffd700', marginBottom: '15px' }}>✍️ కొత్త వార్త పోస్ట్ చేయండి (అడ్మిన్ ప్యానెల్)</h2>
            <form onSubmit={handlePostSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '5px', color: '#ccc' }}>వార్త శీర్షిక (Title)</label>
                <input 
                  type="text" 
                  value={newTitle} 
                  onChange={(e) => setNewTitle(e.target.value)} 
                  placeholder="వార్త పేరు రాయండి..."
                  style={{ width: '100%', padding: '10px', background: '#2a2a2a', border: '1px solid #444', color: '#fff', borderRadius: '6px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '5px', color: '#ccc' }}>కేటగిరీ (Category)</label>
                <select 
                  value={newCategory} 
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{ width: '100%', padding: '10px', background: '#2a2a2a', border: '1px solid #444', color: '#fff', borderRadius: '6px' }}
                >
                  <option value="తెలంగాణ">తెలంగాణ</option>
                  <option value="ఆంధ్రప్రదేశ్">ఆంధ్రప్రదేశ్</option>
                  <option value="స్థానిక వార్తలు">స్థానిక వార్తలు</option>
                  <option value="వీడియోస్">వీడియోస్</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '5px', color: '#ccc' }}>వార్త వివరణ (Description)</label>
                <textarea 
                  value={newDesc} 
                  onChange={(e) => setNewDesc(e.target.value)} 
                  placeholder="పూర్తి సమాచారం ఇక్కడ రాయండి..."
                  rows="4"
                  style={{ width: '100%', padding: '10px', background: '#2a2a2a', border: '1px solid #444', color: '#fff', borderRadius: '6px' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ width: '100%', background: '#d32f2f', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                పబ్లిష్ చేయండి (Publish News)
              </button>
            </form>
          </div>
        )}

      </main>

      {/* Bottom Navigation Bar */}
      <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0b2240', borderTop: '2px solid #ffd700', display: 'flex', justifyContent: 'space-around', padding: '8px 0', zIndex: 1000 }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#ffd700' : '#aaa', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.7rem', cursor: 'pointer' }}>
          <span style={{ fontSize: '1.2rem' }}>🏠</span> హోమ్
        </button>
        <button onClick={() => setActiveTab('magazine')} style={{ background: 'none', border: 'none', color: activeTab === 'magazine' ? '#ffd700' : '#aaa', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.7rem', cursor: 'pointer' }}>
          <span style={{ fontSize: '1.2rem' }}>📖</span> మ్యాగజైన్
        </button>
        <button onClick={() => setActiveTab('admin')} style={{ background: 'none', border: 'none', color: activeTab === 'admin' ? '#ffd700' : '#aaa', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.7rem', cursor: 'pointer' }}>
          <span style={{ fontSize: '1.2rem' }}>✍️</span> అడ్మిన్ పోస్ట్
        </button>
      </footer>
    </div>
  );
}
