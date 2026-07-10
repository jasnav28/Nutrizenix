import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroVideoProps {
  onVideoEnd: () => void;
}

export function IntroVideo({ onVideoEnd }: IntroVideoProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/uploads/in.mp4');

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onVideoEnd, 300);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setShowFallback(true);
    setVideoLoaded(true);
  };

  useEffect(() => {
    // Determine video source based on screen size
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? '/uploads/nut.mp4' : '/uploads/in.mp4');

    // Fallback if video fails to load after 10 seconds
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        setShowFallback(true);
        setVideoLoaded(true);
      }
    }, 10000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [videoLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {showFallback ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src="/uploads/c.png"
                alt="Nutrizenix Logo"
                className="w-64 md:w-96 h-auto object-contain animate-pulse"
              />
              <p className="text-white/50 mt-8 text-lg">Nurturing Growth. Cultivating Excellence</p>
            </motion.div>
          ) : (
            <>
              <video
                key={videoSrc}
                autoPlay
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={handleVideoLoad}
                onCanPlayThrough={handleVideoLoad}
                onError={handleVideoError}
                onEnded={handleVideoEnd}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!videoLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
                  <p className="text-sm text-white/70">Loading intro...</p>
                </div>
              )}
            </>
          )}

          <button
            onClick={handleVideoEnd}
            className="absolute bottom-8 right-8 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm z-10"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
