import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Melhor Amigo</h3>
            <p className="text-green-100">Cuidando do seu melhor amigo como se fosse nosso.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contato@melhoramigo.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Rua dos Pets, 123 - São Paulo</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 8h às 19h</p>
            <p>Sábado: 8h às 17h</p>
            <p>Domingo: 9h às 15h</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-500 text-center">
          <p>&copy; {new Date().getFullYear()} Petshop Melhor Amigo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;