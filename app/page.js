'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <html lang="te">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>VoxTelugu - మన ప్రాంతపు డిజిటల్ వాయిస్</title>
        <meta name="description" content="VoxTelugu - తెలంగాణ మరియు ఆంధ్రప్రదేశ్ తాజా నిజమైన స్థానిక వార్తలు, డిజిటల్ మ్యాగజైన్ మరియు లైవ్ అప్‌డేట్స్." />
        <link rel="icon" href="https://i.ibb.co/C07k25t/849721.png" />
        <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
        <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#000', color: '#212121', fontFamily: 'Segoe UI, sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0b2240', color: '#fff', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900 }}><span style={{ color: '#d32f2f' }}>Vox</span><span style={{ color: '#ffd700' }}>Telugu</span></h1>
          <p style={{ color: '#ffd700', marginTop: '10px' }}>నిజం • నిష్పక్షం • స్వరం - నెక్స్ట్-జెఎస్ వెర్షన్ లోడ్ అవుతోంది...</p>
        </div>
      </body>
    </html>
  );
}
