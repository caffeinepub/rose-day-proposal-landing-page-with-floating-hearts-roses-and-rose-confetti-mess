import { useEffect } from 'react';
import { X } from 'lucide-react';

interface FullScreenMessageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function FullScreenMessageOverlay({
  isOpen,
  onClose,
  message,
}: FullScreenMessageOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="overlay-content relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 shadow-2xl sm:p-12">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-all hover:bg-white/30 hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="message-text whitespace-pre-line text-center text-lg leading-relaxed sm:text-xl md:text-2xl">
          {message}
        </div>
      </div>
    </div>
  );
}
