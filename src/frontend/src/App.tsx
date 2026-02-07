import { useState } from 'react';
import FloatingHeartsRosesBackground from './components/FloatingHeartsRosesBackground';
import FullScreenMessageOverlay from './components/FullScreenMessageOverlay';
import RoseConfetti from './components/RoseConfetti';

function App() {
  const [showOpenMessage, setShowOpenMessage] = useState(false);
  const [showWifeyMessage, setShowWifeyMessage] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  const handleOpenClick = () => {
    setTriggerConfetti(true);
    setShowOpenMessage(true);
    setTimeout(() => setTriggerConfetti(false), 3000);
  };

  const handleWifeyClick = () => {
    setTriggerConfetti(true);
    setShowWifeyMessage(true);
    setTimeout(() => setTriggerConfetti(false), 3000);
  };

  const openMessage = `🌹 Happy Rose Day, Jaana 🌹

Your beauty outshines every flower ever created, and no fragrance in the world compares to the scent that belongs only to you. Your body fragrance is more precious to me than the rarest roses in the world. It's not just a scent, it's comfort, it's home, it's the feeling I want to carry with me forever.`;

  const wifeyMessage = `You Mean Everything to Me 👩‍❤️‍💋‍👨

Your Fragrance — it calms my Soul 💕

Your smile — it fixes everything 😘

Your voice — my comfort sound 💕🤞🏻

Your heart — pure, kind, loyal, and beautiful 💖💗😙🧿

Your presence — my home 💞`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHeartsRosesBackground heartCount={25} roseCount={25} />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="hero-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              ♥ Shaheena ♥
            </h1>
            <p className="sub-heading text-xl font-medium sm:text-2xl md:text-3xl">
              Click to See Why You're My Forever 💖
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <button
              onClick={handleOpenClick}
              className="button-gradient transform px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95 sm:px-12 sm:py-5 sm:text-xl"
            >
              🌹 Open 🌹
            </button>
            <button
              onClick={handleWifeyClick}
              className="button-gradient transform px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-95 sm:px-12 sm:py-5 sm:text-xl"
            >
              Wifey 🌹
            </button>
          </div>
        </div>

        <div className="bottom-quote mt-16 max-w-2xl text-center">
          <p className="text-lg italic sm:text-xl md:text-2xl">
            Every moment with you feels like a dream come true 🌹
          </p>
        </div>
      </main>

      {triggerConfetti && <RoseConfetti />}

      <FullScreenMessageOverlay
        isOpen={showOpenMessage}
        onClose={() => setShowOpenMessage(false)}
        message={openMessage}
      />

      <FullScreenMessageOverlay
        isOpen={showWifeyMessage}
        onClose={() => setShowWifeyMessage(false)}
        message={wifeyMessage}
      />

      <footer className="relative z-10 pb-4 text-center text-sm opacity-70">
        <p>
          © 2026. Built with ❤️ using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
