import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">College Design Project</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Duck Savior
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              An innovative toy that combines action-packed fun with imaginative play. Save the ducks, complete your mission, and unlock endless adventures with Duck Savior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollDown}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Explore Product
              </button>
              <button
                onClick={() => document.getElementById('creator')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-secondary-500 text-secondary-600 font-bold rounded-lg hover:bg-secondary-50 transition-all"
              >
                Meet the Creator
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border-4 border-primary-200">
              <img
                src="/whatsapp_image_2025-11-26_at_12.56.30_0973acbb.jpg"
                alt="Duck Savior Product"
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-accent-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent-600">1</div>
                  <p className="text-xs text-gray-600">Pistol</p>
                </div>
                <div className="bg-secondary-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-secondary-600">3</div>
                  <p className="text-xs text-gray-600">Projectiles</p>
                </div>
                <div className="bg-primary-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-600">4</div>
                  <p className="text-xs text-gray-600">Pieces Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollDown}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ChevronDown className="text-gray-600" size={24} />
        </button>
      </div>
    </section>
  );
}
