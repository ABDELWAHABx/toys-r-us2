import { Zap, Shield, Spline, Package } from 'lucide-react';

export default function ProductComponents() {
  const components = [
    {
      id: 1,
      name: 'Pistol Gun',
      icon: Zap,
      color: 'from-primary-500 to-primary-600',
      description:
        'Ergonomic design with comfortable grip and smooth trigger mechanism. Perfect for young hands with safety-tested materials.',
      features: ['Safe trigger mechanism', 'Lightweight design', 'Durable construction'],
    },
    {
      id: 2,
      name: 'Sticky Projectiles',
      icon: Package,
      color: 'from-accent-500 to-accent-600',
      description:
        'Three colorful sticky projectiles that safely attach to surfaces without damage. Reusable and easy to clean.',
      features: ['Non-toxic materials', 'Soft foam coating', 'Color-coded variants'],
    },
    {
      id: 3,
      name: 'Yellow Ducks',
      icon: Shield,
      color: 'from-secondary-500 to-secondary-600',
      description:
        'Two adorable duck figurines that serve as mission targets. Enhance imaginative play and creative storytelling.',
      features: ['Collectible design', 'Smooth finish', 'Play-safe materials'],
    },
    {
      id: 4,
      name: 'Handcuffs',
      icon: Spline,
      color: 'from-gray-600 to-gray-700',
      description:
        'Adjustable pretend handcuffs for mission-based gameplay. Add an extra layer of adventure to playtime.',
      features: ['Adjustable fit', 'Soft material', 'Easy release mechanism'],
    },
  ];

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Product Components</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every piece of Duck Savior is carefully designed for maximum fun and safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={component.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${component.color} p-8 text-white`}>
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold">{component.name}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${component.color}`}></span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
