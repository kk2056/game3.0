import React, { useEffect, useRef, useState } from 'react';
import { AD_CLIENT_ID } from '../constants';
import { AdProps } from '../types';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdUnit: React.FC<AdProps> = ({ slotId, format = 'auto', className = '', label = 'Advertisement' }) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        // Push the ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch (e) {
      console.error("AdSense push error:", e);
      setError(true);
    }
  }, []);

  // CLS Prevention: We must enforce a minimum height even if the ad hasn't loaded yet.
  // Sidebar ads usually need ~600px, headers ~90px, rectangles ~250px.
  
  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 ${className}`} aria-label={label}>
      <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-1 font-medium select-none">{label}</span>
      
      <div className="bg-slate-800/30 w-full overflow-hidden rounded-lg border border-slate-800 relative">
          {/* Skeleton Loading State */}
          {!adLoaded && !error && (
            <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
              <span className="text-slate-700 text-xs">Loading Ad...</span>
            </div>
          )}

          <ins
            className="adsbygoogle block w-full"
            style={{ display: 'block' }}
            data-ad-client={AD_CLIENT_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          ></ins>

          {error && (
             <div className="flex items-center justify-center h-full text-slate-600 text-xs p-4 bg-slate-900">
               Sponsor Space
             </div>
          )}
      </div>
    </div>
  );
};