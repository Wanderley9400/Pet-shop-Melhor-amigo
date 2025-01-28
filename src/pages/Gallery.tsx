import React, { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
    caption: 'Nosso amigo Max após o banho'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1599692392256-2d084495fe15?auto=format&fit=crop&q=80',
    caption: 'Luna aproveitando o dia de spa'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
    caption: 'Thor exibindo seu novo visual'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80',
    caption: 'Mia relaxando após a tosa'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80',
    caption: 'Bob curtindo seu banho'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80',
    caption: 'Nina toda elegante'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeria de Fotos</h1>
          <p className="text-lg text-gray-600">
            Conheça alguns dos nossos adoráveis clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-end justify-center">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption}
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-lg text-gray-900">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;