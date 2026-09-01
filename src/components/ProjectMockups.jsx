import React from 'react';
import { Send, QrCode, CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, Zap, Sparkles, ExternalLink } from 'lucide-react';

export function GoShopeMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top simulated browser bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-blue-400">
          https://goshope.site
        </div>
        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SaaS
        </span>
      </div>

      {/* Center Simulated UI: Split Telegram Alert & Storefront */}
      <div className="grid grid-cols-12 gap-2.5 my-auto py-2">
        {/* Left: Mini Storefront Cart */}
        <div className="col-span-6 p-2.5 rounded-xl bg-slate-900/90 border border-white/[0.08] shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-semibold text-white mb-1.5">
            <span className="flex items-center gap-1">
              <ShoppingBag className="w-3 h-3 text-blue-400" />
              Storefront
            </span>
            <span className="text-emerald-400 font-mono text-[10px]">$24.00</span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-300 font-mono">
            <div className="flex justify-between bg-white/[0.03] p-1 rounded">
              <span>Wireless Buds x1</span>
              <span>$18.00</span>
            </div>
            <div className="flex justify-between bg-white/[0.03] p-1 rounded">
              <span>Fast Cable x1</span>
              <span>$6.00</span>
            </div>
          </div>
          <div className="mt-2 pt-1.5 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-slate-400">
            <span className="flex items-center gap-1 text-cyan-300 font-mono">
              <QrCode className="w-2.5 h-2.5" />
              ABA PayWay
            </span>
            <span className="text-emerald-400 font-bold">PAID</span>
          </div>
        </div>

        {/* Right: Telegram Bot Real-time Dispatch */}
        <div className="col-span-6 p-2.5 rounded-xl bg-[#1e293b]/90 border border-blue-500/20 shadow-xl flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-cyan-400 pb-1 border-b border-white/[0.06]">
            <Send className="w-3 h-3" />
            <span>Telegram Bot Alert</span>
          </div>
          <div className="py-1 text-[9px] font-mono text-slate-200 space-y-0.5 leading-tight">
            <p className="text-emerald-300 font-bold">🔔 New Order #1042</p>
            <p className="text-slate-400">Customer: Sokha (+855 96...)</p>
            <p className="text-slate-300">Total: $24.00 (ABA QR)</p>
          </div>
          <div className="bg-blue-600/30 text-blue-300 text-[8px] font-mono text-center py-0.5 rounded">
            ⚡ Dispatched in 120ms
          </div>
        </div>
      </div>

      {/* Bottom Footer pills */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
        <span>Java Spring Boot + React</span>
        <span className="text-blue-400">Webhooks Live</span>
      </div>
    </div>
  );
}

export function TSMSolutionsMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-purple-400">
          https://tsmsolutions.site
        </div>
        <span className="text-[10px] font-mono text-purple-400">Agency</span>
      </div>

      <div className="my-auto py-2 space-y-2">
        <div className="p-3 rounded-xl bg-[#111322]/90 border border-purple-500/20 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Digital Experience Hub
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
              100/100 Perf
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <div className="text-white font-bold">Fast UI</div>
              <div className="text-[9px] text-slate-400">React 18</div>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <div className="text-purple-300 font-bold">Global</div>
              <div className="text-[9px] text-slate-400">Vercel Edge</div>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <div className="text-emerald-400 font-bold">SEO</div>
              <div className="text-[9px] text-slate-400">Optimized</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
        <span>Modern Web Services</span>
        <span className="text-purple-400">Production</span>
      </div>
    </div>
  );
}

export function YGHAgricMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-emerald-400">
          https://ygh-agric.vercel.app
        </div>
        <span className="text-[10px] font-mono text-emerald-400">AgriTech</span>
      </div>

      <div className="my-auto py-2">
        <div className="p-3 rounded-xl bg-[#0d1614]/90 border border-emerald-500/20 shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">Agricultural Supply Catalog</span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Active Catalog
            </span>
          </div>
          <div className="space-y-1 text-[10px] font-mono text-slate-300">
            <div className="flex items-center justify-between p-1 rounded bg-white/[0.03]">
              <span>🌱 Eco Soil Fertilizer NPK</span>
              <span className="text-emerald-400">Wholesale</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-white/[0.03]">
              <span>🚜 Irrigation Smart Systems</span>
              <span className="text-emerald-400">In Stock</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
        <span>Lightweight HTML5 + JS</span>
        <span className="text-emerald-400">Fast Rural Load</span>
      </div>
    </div>
  );
}

export function MinhWebFunMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-cyan-400">
          https://minhwebfun.vercel.app
        </div>
        <span className="text-[10px] font-mono text-cyan-400">Creative Lab</span>
      </div>

      <div className="my-auto py-2">
        <div className="p-3 rounded-xl bg-[#09151c]/90 border border-cyan-500/20 shadow-lg space-y-2 text-center">
          <div className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Code Sandbox</span>
          </div>
          <p className="text-[10px] text-slate-400">
            UI Mechanics, Canvas Physics & CSS Animation Experiments
          </p>
          <div className="flex justify-center gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-[9px]">
              Micro-interactions
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono text-[9px]">
              CSS Art
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
        <span>Experimental Sandbox</span>
        <span className="text-cyan-400">Open Source</span>
      </div>
    </div>
  );
}
