import React, { useEffect, useState, useRef } from 'react';
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
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Check if ad is already filled
    if (adRef.current?.getAttribute('data-ad-status')) {
      setAdLoaded(true);
      return;
    }

    const pushAd = () => {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        if (AD_CLIENT_ID) {
            if (!adRef.current?.getAttribute('data-ad-status')) {
               window.adsbygoogle.push({});
               setAdLoaded(true);
            }
        }
      } catch (e: any) {
        if (e.message && e.message.includes('No slot size')) {
            return; 
        }
        console.error("AdSense error:", e);
        setError(true);
      }
    };

    // Delay to prevent CLS and layout errors
    const timer = setTimeout(pushAd, 200);
    return () => clearTimeout(timer);
  }, [slotId]);

  const isPlaceholder = slotId === "1234567890" || slotId === "0987654321" || slotId === "1122334455" || slotId === "5566778899";

  return (
    <div className={`w-full flex flex-col items-center justify-center my-8 ${className}`} aria-label={label}>
      {/* Clear Label to prevent 'Confusing Ad Placement' violations */}
      <div className="w-full text-center mb-2">
         <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium select-none border-b border-slate-700 pb-1">
           {label}
         </span>
      </div>
      
      <div className="bg-slate-800/30 w-full overflow-hidden rounded-lg border border-slate-800 relative min-h-[100px] flex justify-center shadow-inner">
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: 'block', minWidth: '250px' }}
            data-ad-client={AD_CLIENT_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          ></ins>

          {!adLoaded && !error && (
            <div className="absolute inset-0 bg-slate-800/50 animate-pulse flex items-center justify-center pointer-events-none">
              <span className="text-slate-600 text-xs font-mono">Loading Ad...</span>
            </div>
          )}

          {isPlaceholder && (
             <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs p-4 bg-slate-900/80 border border-yellow-900/30 text-center z-10">
               AdSpace (Update IDs)
             </div>
          )}
      </div>
    </div>
  );
};