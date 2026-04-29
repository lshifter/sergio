import { Button } from "@/components/ui/button";

/**
 * Telegram Pre-lander (Polish) - Minimalist Card Design
 * Design: Dark theme with centered card, no descriptions
 * Color Scheme: Dark background with Telegram blue accent
 * Typography: Clean, minimal
 */

const AFFILIATE_LINK = "https://trk.mannequin.partners/click?o=175&a=29&aff_param1=Buyer&aff_param3=inv&aff_param4=pol&aff_click_id=%7Baff_click_id%7D&aff_param5=U1vTzr2SwNA4MWVi";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden flex flex-col">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            ✈️
          </div>
          <span className="text-lg font-bold text-white">Telegram</span>
        </div>
        <Button
          onClick={() => window.open(AFFILIATE_LINK, '_blank')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full transition-all"
        >
          DOWNLOAD
        </Button>
      </header>

      {/* Main Content - Centered Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center border border-gray-800 shadow-2xl">
            {/* Logo Circle */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/manus-storage/pasted_file_DK4k0X_image_f34b325b.png" 
                alt="Profesor Sergio" 
                className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-blue-500"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Sergio Proffessor
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm mb-8">
              📲Dołącz do otwartego dostępu:
Schematy z kontrolą ryzyka
Codzienne aktualizacje 
Ekskluzywna👇 zawartość👇
            </p>

            {/* Main CTA Button */}
            <Button
              onClick={() => window.open(AFFILIATE_LINK, '_blank')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all shadow-lg hover:shadow-xl mb-4"
            >
              JOIN CHANNEL
            </Button>

            {/* Secondary Info */}
            <p className="text-gray-500 text-xs mt-6">
              Bezpieczna komunikacja dla wszystkich
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-gray-600 text-xs">
        <p>&copy; 2026 Telegram. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
