import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

export default function LiveClock() {
  const { lang } = useLanguage();
  const [timeStr, setTimeStr] = useState('');
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Phnom Penh time (Asia/Phnom_Penh)
      const options = {
        timeZone: 'Asia/Phnom_Penh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeStr(formatted);

      // Check day/night in Phnom Penh (between 6am and 6pm)
      const hourOptions = { timeZone: 'Asia/Phnom_Penh', hour: 'numeric', hour12: false };
      const hour = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(now), 10);
      setIsDay(hour >= 6 && hour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-center justify-between gap-3 text-xs font-mono">
      <div className="flex items-center gap-2 text-slate-300">
        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
        <span className="font-sans font-medium text-white">
          {lang === 'kh' ? personalInfo.location.cityKh : personalInfo.location.city}, {lang === 'kh' ? personalInfo.location.countryKh : personalInfo.location.country}
        </span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        {isDay ? (
          <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
        )}
        <span className="text-slate-200 tabular-nums font-semibold">{timeStr || 'Loading...'}</span>
        <span className="text-[10px] text-slate-500 hidden sm:inline">(ICT GMT+7)</span>
      </div>
    </div>
  );
}
