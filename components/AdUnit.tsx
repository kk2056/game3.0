import React, { useEffect, useState } from 'react';
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
      // Ensure adsbygoogle array exists
      window.adsbygoogle = window.adsbygoogle || [];
      
      // Only push if we have a valid client ID, otherwise it crashes
      if (AD_CLIENT_ID) {
        window.adsbygoogle.push({});
        setAdLoaded(true);
      }
    } catch (e) {
      console.error("AdSense push error:", e);
      setError(true);
    }
  }, [slotId]);

  // We use a specific style for development if the slot ID is a placeholder
  const isPlaceholder = slotId === "1234567890" || slotId === "0987654321";

  return (
    <div className={`w-full flex flex-col items-center justify-center my-6 ${className}`} aria-label={label}>
      <span className="text-[10px] uppercase tracking-widest text-slate-600 mb-1 font-medium select-none">{label}</span>
      
      <div className="bg-slate-800/30 w-full overflow-hidden rounded-lg border border-slate-800 relative min-h-[100px] flex justify-center">
          {/* AdSense Element */}
          <ins
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
             <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs p-4 bg-slate-900/80 border border-yellow-900/30 text-center">
               AdSpace <br/> (IDs need to be updated in constants.ts)
             </div>
          )}
      </div>
    </div>
  );
};