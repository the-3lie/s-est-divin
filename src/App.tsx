import { useState } from 'react';
import { Moon, Sun, Sparkles, ShoppingBag, MessageCircle, CheckCircle } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Lapins', 'Pagnes', 'Autres'];

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">

      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-blue-100 dark:border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              C'est Divin
            </h1>
          </div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-blue-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="Changer de thème"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-600/10 pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-full border border-blue-600/20 dark:border-blue-400/20">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">✨ Bienvenue ✨</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Bienvenue chez{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              C'est Divin
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Qualité, authenticité et élégance à portée de main
          </p>

          <a
            href="#produits"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          >
            <ShoppingBag className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Voir nos articles
          </a>
        </div>
      </section>

      <section id="produits" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nos{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Produits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de produits de qualité
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comment{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                ça marche ?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Commander chez nous, c'est simple et rapide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Visitez le site', desc: 'Explorez notre catalogue de produits', icon: Sparkles },
              { step: '2', title: 'Parcourez les articles', desc: 'Découvrez nos différentes catégories', icon: ShoppingBag },
              { step: '3', title: 'Cliquez sur WhatsApp', desc: 'Sélectionnez votre produit favori', icon: MessageCircle },
              { step: '4', title: 'Finalisez la commande', desc: 'Confirmez directement sur WhatsApp', icon: CheckCircle }
            ].map((item) => (
              <div
                key={item.step}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>

                  <div className="mt-6 text-center">
                    <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-blue-300 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold">C'est Divin</h3>
          </div>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Votre satisfaction est notre priorité
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Contactez-nous sur WhatsApp
          </a>

          <div className="mt-12 pt-8 border-t border-blue-700 dark:border-gray-700">
            <p className="text-blue-200 dark:text-gray-400">
              © 2024 C'est Divin. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
