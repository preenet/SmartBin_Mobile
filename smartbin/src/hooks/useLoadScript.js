import { useState, useEffect } from 'react';

const useLoadScript = (url) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    
    script.onload = () => setScriptLoaded(true);
    script.onerror = (e) => setError(e);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return { scriptLoaded, error };
};

export default useLoadScript;