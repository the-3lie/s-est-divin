import { MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = '255 77 86 43 49';
    const message = `Bonjour, je suis intéressé(e) par : ${product.name} - Prix: ${product.price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {product.category}
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {product.price}
          </span>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transform transition-all duration-300 hover:shadow-xl hover:scale-105 group/button"
        >
          <MessageCircle className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
          Commander sur WhatsApp
        </button>
      </div>

      <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
}
