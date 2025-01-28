import React from 'react';
import { Bath, Scissors, Dog as DogBowl, Bone } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ração Premium',
    description: 'Rações premium para cães e gatos, formuladas com ingredientes de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80',
    icon: DogBowl
  },
  {
    id: 2,
    name: 'Serviço de Tosa Especializada',
    description: 'Serviços profissionais de tosa para cães de todas as raças.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80',
    icon: Scissors
  },
  {
    id: 3,
    name: 'Banho Relaxante',
    description: 'Banhos relaxantes para cães e gatos com produtos de qualidade.',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80',
    icon: Bath
  },
  {
    id: 4,
    name: 'Brinquedos Interativos',
    description: 'Variedade de brinquedos para estimular a mente e o corpo do seu pet.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80',
    icon: Bone
  }
];

const Products = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos e Serviços</h1>
          <p className="text-lg text-gray-600">
            Oferecemos uma variedade de produtos e serviços de alta qualidade para o seu pet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 p-2 rounded-full">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;