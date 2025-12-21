import { Box, Globe, Leaf, Shield } from 'lucide-react';

export default function Packaging() {
  const features = [
    {
      icon: Box,
      title: 'Smart Design',
      description: 'Compact packaging that maximizes product visibility while protecting every component during transit.',
    },
    {
      icon: Globe,
      title: 'Eye-Catching Graphics',
      description: 'Vibrant, playful design that appeals to children and parents, with clear product information.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'Recyclable packaging made from sustainable materials with minimal environmental impact.',
    },
    {
      icon: Shield,
      title: 'Safety Information',
      description: 'Clear safety warnings, age recommendations, and materials used are prominently displayed.',
    },
  ];

  return (
    <section id="packaging" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Packaging Design</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional packaging that tells the Duck Savior story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gray-200">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg p-12 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Box className="mx-auto mb-4 text-primary-600" size={64} />
                  <p className="text-gray-600 font-medium">Premium Box Design</p>
                  <p className="text-sm text-gray-500 mt-2">Product packaging featuring vibrant colors and interactive elements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Unboxing Experience</h3>
            <p className="text-gray-600 text-lg mb-8">
              The packaging for Duck Savior is designed to create an exciting unboxing experience for children and parents alike. With vibrant colors, clear product displays, and detailed instructions, every aspect is thoughtfully crafted.
            </p>

            <div className="space-y-4">
              {['Clear product window', 'Interactive elements', 'Instruction manual', 'Warranty information', 'Safety certifications'].map(
                (item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                )
              )}
            </div>

            <p className="text-gray-600 text-sm mt-8">
              All materials are sourced responsibly and the packaging is fully recyclable, supporting environmental sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
