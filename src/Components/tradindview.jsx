import React, { useEffect } from 'react';

export const TradingViewChart = () => {
  useEffect(() => {
    // Make sure TradingView script is loaded
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.TradingView.widget({
        "width": 479,
        "height": 700,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_12345"
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <h2>Done i think</h2>
      <div id="tradingview_12345"></div>
    </div>
  );
};

