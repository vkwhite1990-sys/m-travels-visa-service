'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(!localStorage.getItem('mtravels-cookie-consent')); }, []);
  if (!visible) return null;
  const choose = (value: string) => { localStorage.setItem('mtravels-cookie-consent', value); setVisible(false); };
  return <aside role="dialog" aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-2xl bg-slate-950 p-5 text-white shadow-2xl">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-bold">Your privacy matters</h2><p className="mt-1 text-sm text-slate-300">We use essential cookies and, with your permission, analytics cookies to improve M TRAVEL'S.</p></div><div className="flex shrink-0 gap-2"><button onClick={() => choose('essential')} className="rounded-lg border border-slate-500 px-3 py-2 text-sm">Essential only</button><button onClick={() => choose('accepted')} className="rounded-lg bg-amber-400 px-3 py-2 text-sm font-bold text-slate-950">Accept analytics</button></div></div>
  </aside>;
}
