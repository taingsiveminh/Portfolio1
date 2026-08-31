import React from 'react';

export default function TechBadge({ label, icon: Icon, variant = 'default', size = 'sm' }) {
  const sizeClasses = size === 'xs' 
    ? 'px-2.5 py-1 text-xs gap-1.5' 
    : size === 'md'
    ? 'px-4 py-2 text-sm gap-2'
    : 'px-3 py-1.5 text-xs font-medium gap-2';

  const variantStyles = {
    default: 'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08]',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/15',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/15',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/15',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/15',
  };

  return (
    <span className={`inline-flex items-center rounded-lg border font-mono transition-colors duration-200 ${sizeClasses} ${variantStyles[variant] || variantStyles.default}`}>
      {Icon && <Icon className={size === 'xs' ? 'w-3 h-3' : 'w-3.5 h-3.5 opacity-80'} />}
      <span>{label}</span>
    </span>
  );
}
