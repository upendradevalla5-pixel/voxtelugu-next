'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0b2240', color: '#fff', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>
        <span style={{ color: '#d32f2f' }}>Vox</span><span style={{ color: '#ffd700' }}>Telugu</span>
      </h1>
      <p style={{ color: '#ffd700', marginTop: '10px' }}>నిజం • నిష్పక్షం • స్వరం - పూర్తి ఫీచర్లతో యాప్ సిద్ధమవుతోంది...</p>
    </div>
  );
}
