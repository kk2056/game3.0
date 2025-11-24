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
    // 1. Check if ad is already filled (React Strict Mode or route navigation caching)
    // data-ad-status is set by Google when an ad is processed
    if (adRef.current?.getAttribute('data-ad-status')) {
      setAdLoaded(true);
      return;
    }

    const pushAd = () => {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        
        // Only push if we have a client ID
        if (AD_CLIENT_ID) {
            // Double check status before pushing to avoid "AdSense push error: All ins elements in the DOM with class=adsbygoogle already have ads in them."
            if (!adRef.current?.getAttribute('data-ad-status')) {
               window.adsbygoogle.push({});
               setAdLoaded(true);
            }
        }
      } catch (e: any) {
        // "No slot size" is common in resizing or hidden tabs or initial paint
        // We log it as a warning but don't show the error UI as it often resolves itself
        if (e.message && e.message.includes('No slot size')) {
            console.warn("AdSense layout pending (width=0). This is normal during initial render:", e.message);
            return; 
        }
        console.error("AdSense push error:", e);
        setError(true);
      }
    };

    // 2. CRITICAL FIX: Delay the push by 200ms. 
    // This allows React to finish rendering and the browser to calculate the container width 
    // BEFORE AdSense tries to fill the slot. This prevents "availableWidth=0" errors.
    const timer = setTimeout(pushAd, 200);

    return () => clearTimeout(timer);
  }, [slotId]);

  // We use a specific style for development if the slot ID is a placeholder
  const isPlaceholder = slotId === "1234567890" || slotId === "0987654321" || slotId === "1122334455" || slotId === "5566778899";

  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 ${className}`} aria-label={label}>
      <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-1 font-medium select-none">{label}</span>
      
      <div className="bg-slate-800/30 w-full overflow-hidden rounded-lg border border-slate-800 relative min-h-[100px] flex justify-center">
          {/* AdSense Element */}
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: 'block', minWidth: '250px' }}
            data-ad-client={AD_CLIENT_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          ></ins>

          {/* Fallback/Loading State for better UX */}
          {!adLoaded && !error && (
            <div className="absolute inset-0 bg-slate-800/50 animate-pulse flex items-center justify-center pointer-events-none">
              <span className="text-slate-600 text-xs font-mono">Loading Ad...</span>
            </div>
          )}

          {/* Dev Placeholder Visualization */}
          {isPlaceholder && (
             <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs p-4 bg-slate-900/80 border border-yellow-900/30 text-center z-10">
               AdSpace <br/> (IDs need to be updated in constants.ts)
             </div>
          )}
      </div>
    </div>
  );
};