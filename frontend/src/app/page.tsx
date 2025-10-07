'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('loading...');

  useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setApiStatus(data.status || 'ok');
      })
      .catch(() => {
        setApiStatus('error');
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative z-10 w-full max-w-5xl items-center justify-center text-center font-mono text-lg">
        <h1 className="text-4xl font-bold mb-4">Phantas</h1>
        <p>AI 小说图片生成</p>
        <div className="mt-8 p-4 border rounded-lg">
          <p>
            与后端 API 的连接状态: <span className="font-bold">{apiStatus}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
