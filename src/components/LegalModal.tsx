import { X } from "lucide-react";
import type { ReactNode } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}

export default function LegalModal({
  isOpen,
  onClose,
  title,
  content,
}: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
      />

      <div className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modalIn">
        <div className="flex items-center justify-between p-6 border-b border-black/5">
          <h2 className="text-2xl font-serif font-bold text-primary">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 text-gray-800">
          {content}
        </div>
      </div>
    </div>
  );
}