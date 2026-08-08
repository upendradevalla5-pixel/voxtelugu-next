'use client';
import { useState } from 'react';

export default function VoxTeluguApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [newsList, setNewsList] = useState([
    { id: 1, category: 'స్థానిక వార్తలు', title: 'తల్లడ: రైతు సదస్సు.. వర్షపు నీటి సంరక్షణే ధ్యేయం!', desc: 'అన్నారూగూడెం పంచాయతీలో జరిగిన రైతు సదస్సు వివరాలు.', likes: 12, comments: 5 },
    { id: 2, category: 'క్రీడలు', title: 'సూర్యాపేటలో ఘనంగా క్రీడా పోటీలు', desc: 'యువత ఉత్సాహంగా పాల్గొన్న క్రీడా సంబరాలు.', likes: 45, comments: 12 }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const shareOnWhatsApp = (title) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + '\n\nచదవండి: ' + window.location.href)}`, '_blank');
  };

  const addNews = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), category: 'స్థానిక వార్తలు', title: newTitle, desc: newDesc, likes: 0, comments: 0 };
    setNewsList([newPost, ...newsList]);
    setNewTitle(''); setNewDesc('');
    setActiveTab('home');
  };

  return (
    <div style={{ background: '#121212', color: '#fff', minHeight: '100vh', paddingBottom: '70px', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#0b2240', padding: '15px', borderBottom: '2px solid #ffd700', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#ffd700', fontSize: '1.5rem' }}>VoxTelugu</h1>
      </header>

      <main style={{ padding: '15px' }}>
        {activeTab === 'home' && newsList.map(news => (
          <div key={news.id} style={{ background: '#1e1e1e', padding: '15px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #333' }}>
            <span style={{ fontSize: '0.7rem', color: '#ffd700' }}>{news.category}</span>
            <h3 style={{ margin: '5px 0', fontSize: '1.1rem' }}>{news.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#ccc' }}>{news.desc}</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px', borderTop: '1px solid #333', paddingTop: '10px' }}>
              <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>❤️ {news.likes}</button>
              <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>💬 {news.comments}</button>
              <button style={{ background: 'none', border: 'none', color: '#ffd700', cursor: 'pointer' }}>🔊 వాయిస్</button>
            </div>
            <button onClick={() => shareOnWhatsApp(news.title)} style={{ width: '100%', background: '#25D366', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', marginTop: '10px', fontWeight: 'bold', cursor: 'pointer' }}>💬 వాట్సాప్ షేర్</button>
          </div>
        ))}

        {activeTab === 'admin' && (
          <form onSubmit={addNews} style={{ background: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
            <input type="text" placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', background: '#2a2a2a', color: '#fff', border: 'none' }} />
            <textarea placeholder="Description" value={newDesc} onChange={e => setNewDesc(e.target.value)} style={{ width: '100%', padding: '10px', background: '#2a2a2a', color: '#fff', border: 'none' }} />
            <button type="submit" style={{ width: '100%', background: '#d32f2f', color: '#fff', padding: '10px', marginTop: '10px', border: 'none' }}>పబ్లిష్</button>
          </form>
        )}
      </main>

      <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#0b2240', display: 'flex', justifyContent: 'space-around', padding: '10px 0', borderTop: '2px solid #ffd700' }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: '#fff' }}>🏠 హోమ్</button>
        <button onClick={() => setActiveTab('admin')} style={{ background: 'none', border: 'none', color: '#fff' }}>✍️ అడ్మిన్</button>
      </footer>
    </div>
  );
}
