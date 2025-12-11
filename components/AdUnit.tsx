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
            // Prevent pushing if already pushed to this ref
            if (!adRef.current?.getAttribute('data-ad-status')) {
               window.adsbygoogle.push({});
               setAdLoaded(true);
            }
        }
      } catch (e: any) {
        // Ignore specific "No slot size" errors which are common in responsive ads during resize
        if (e.message && e.message.includes('No slot size')) {
            return; 
        }
        console.error("AdSense error:", e);
        setError(true);
      }
    };

    // Small delay ensures DOM is ready and reduces layout shift impact
    const timer = setTimeout(pushAd, 200);
    return () => clearTimeout(timer);
  }, [slotId]);

  // Visual placeholder for development or when ad blocks are active
  const isPlaceholder = slotId === "1234567890" || slotId === "0987654321" || slotId === "1122334455" || slotId === "5566778899";

  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 py-2 ${className}`} aria-label={label}>
      {/* Ad Label - Mandatory for preventing accidental clicks policy violations */}
      <div className="w-full text-center mb-1">
         <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold select-none">
           {label}
         </span>
      </div>
      
      {/* Container with min-height to reduce CLS (Cumulative Layout Shift) */}
      <div className="bg-slate-800/20 w-full overflow-hidden rounded-md flex justify-center relative min-h-[100px] shadow-sm">
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: 'block', minWidth: '250px' }}
            data-ad-client={AD_CLIENT_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          ></ins>

          {/* Loading State */}
          {!adLoaded && !error && (
            <div className="absolute inset-0 bg-slate-800/10 animate-pulse flex items-center justify-center pointer-events-none">
            </div>
          )}

          {/* Dev Placeholder */}
          {isPlaceholder && (
             <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs p-4 bg-slate-800/50 border border-slate-700 border-dashed text-center z-10">
               AdSpace {format}
             </div>
          )}
      </div>
    </div>
  );
};