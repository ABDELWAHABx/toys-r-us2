import { Award, Sparkles, Target } from 'lucide-react';

export default function Creator() {
  const creatorStats = [
    { icon: Award, label: 'Design Hours', value: '150+' },
    { icon: Sparkles, label: 'Iterations', value: '50+' },
    { icon: Target, label: 'Success Rate', value: '100%' },
  ];

  return (
    <section id="creator" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet the Creator</h2>
          <p className="text-xl text-gray-600">The student designer behind Duck Savior</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary-200">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
                  DS
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Student Designer</h3>
                <p className="text-center text-primary-600 font-semibold mb-6">College Project</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  A passionate design student who created Duck Savior as a college project, combining creativity, innovation, and practical engineering to bring a unique toy concept to life.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Duck Savior represents a commitment to creating toys that engage children's imagination while maintaining the highest safety standards. Every design decision was made with both fun and responsibility in mind.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {[
                    'Designed a complete product with multiple functional components',
                    'Implemented safety testing and compliance protocols',
                    'Created comprehensive packaging and branding',
                    'Developed detailed documentation and user manuals',
                    'Conducted extensive prototyping and refinement cycles',
                  ].map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {creatorStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors"
                    >
                      <Icon className="mx-auto text-primary-600 mb-2" size={24} />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-lg mb-6 opacity-90">
            Duck Savior demonstrates the perfect blend of creative design and practical engineering for children's products.
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
            Contact Designer
          </button>
        </div>
      </div>
    </section>
  );
}
