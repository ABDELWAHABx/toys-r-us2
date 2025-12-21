import { Lightbulb, PenTool, CheckCircle } from 'lucide-react';

export default function Sketches() {
  const phases = [
    {
      phase: 'Ideation',
      icon: Lightbulb,
      color: 'bg-primary-100 text-primary-600',
      description: 'Brainstorming and conceptualizing the core mechanics of an interactive toy that combines action with imaginative play.',
      items: ['Concept sketches', 'Brainstorming sessions', 'Market research', 'Target audience analysis'],
    },
    {
      phase: 'Design & Development',
      icon: PenTool,
      color: 'bg-secondary-100 text-secondary-600',
      description: 'Creating detailed sketches, refining proportions, and developing the product with safety and aesthetics in mind.',
      items: ['Detailed sketches', 'Proportion refinement', 'Safety testing', 'Material selection'],
    },
    {
      phase: 'Finalization',
      icon: CheckCircle,
      color: 'bg-accent-100 text-accent-600',
      description: 'Final adjustments, quality assurance, and preparing the product for production and packaging.',
      items: ['Quality checks', 'Final iterations', 'Production planning', 'Documentation'],
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Design Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial sketches to the final product, every step is carefully planned
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[calc(100%+1.5rem)] w-12 h-1 bg-gradient-to-r from-primary-300 to-transparent"></div>
                )}

                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.phase}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  <ul className="space-y-3">
                    {item.items.map((element, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        <span className="text-gray-700">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12 border-2 border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Design Iterations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">100%</div>
              <p className="text-gray-600">Safety Compliant</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">8 Weeks</div>
              <p className="text-gray-600">Development Timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
