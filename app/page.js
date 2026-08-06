'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    useEffect(() => {
        // Firebase scripts injection and app initialization
        const scriptApp = document.createElement('script');
        scriptApp.src = "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js";
        scriptApp.async = true;
        document.body.appendChild(scriptApp);

        scriptApp.onload = () => {
            const scriptFs = document.createElement('script');
            scriptFs.src = "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js";
            scriptFs.async = true;
            document.body.appendChild(scriptFs);
        };
    }, []);

    return (
      <div style={{ background: '#121212', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px' }}>
          <span style={{ color: '#d32f2f' }}>Vox</span><span style={{ color: '#ffd700' }}>Telugu</span>
        </h1>
        <p style={{ color: '#ffd700', fontSize: '1rem' }}>నిజం • నిష్పక్షం • స్వరం - డిజిటల్ న్యూస్ ప్లాట్‌ఫాం</p>
        <p style={{ color: '#aaa', fontSize: '0.85rem', marginTop: '15px' }}>అన్ని అడ్వాన్స్డ్ ఫీచర్లు మరియు డేటాబేస్ కనెక్షన్ లోడ్ అవుతోంది...</p>
      </div>
    );
}
