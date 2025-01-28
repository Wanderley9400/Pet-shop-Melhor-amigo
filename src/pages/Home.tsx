import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scissors, ShowerHead, Dog } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Petshop "Melhor Amigo"!</h1>
            <p className="text-xl md:text-2xl mb-8">Cuidando do seu melhor amigo com amor e dedicação</p>
            <Link 
              to="/products" 
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Conheça Nossos Serviços
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="space-y-8 text-gray-600">
              <p>
                No Petshop "Melhor Amigo", nós entendemos que seu animal de estimação é
                mais do que apenas um bichinho, é um membro especial da sua família. Com
                isso em mente, estamos comprometidos em fornecer cuidados excepcionais e
                serviços de alta qualidade para garantir que seu melhor amigo tenha uma vida
                feliz e saudável.
              </p>

              <p>
                Com uma equipe dedicada e apaixonada por animais, nossos profissionais
                treinados estão prontos para oferecer os melhores cuidados para o seu pet.
                Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um
                visual impecável, até a limpeza e higienização completa, proporcionamos um
                ambiente seguro e tranquilo para que seu amigo se sinta confortável durante
                todo o processo.
              </p>

              <p>
                Sabemos que a alimentação é fundamental para a saúde do seu pet, por isso
                oferecemos uma ampla variedade de rações de alta qualidade e alimentos
                balanceados, adaptados às necessidades individuais de cada animal. Nossos
                especialistas estão disponíveis para fornecer orientação personalizada e ajudá-lo
                a escolher a melhor opção para o seu amiguinho.
              </p>

              <p>
                No Petshop "Melhor Amigo", também acreditamos na importância da
                socialização e diversão para o bem-estar dos animais. Por isso, oferecemos
                momentos especiais de brincadeiras e interação em nosso espaço dedicado,
                garantindo que seu pet se divirta e faça novos amigos. Além disso, temos uma
                ampla variedade de brinquedos e acessórios para enriquecer a vida do seu
                animalzinho.
              </p>

              <p>
                Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos animais. Lá,
                você poderá ver alguns dos adoráveis clientes que já passaram pelo nosso
                petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o
                seu bem-estar e felicidade.
              </p>

              <p>
                Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos no
                Petshop "Melhor Amigo" e descubra a diferença que fazemos na vida dos
                animais de estimação. Entre em contato conosco por telefone, e-mail ou através
                do nosso formulário de contato no nosso site. Seu pet merece o melhor, e nós
                estamos aqui para fornecer exatamente isso. Confie no Petshop "Melhor
                Amigo" para cuidar do seu melhor amigo como se fosse nosso próprio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <ShowerHead className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Banho Relaxante</h3>
              <p className="text-gray-600">Banhos com produtos de qualidade e cuidado especial para seu pet.</p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Scissors className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tosa Especializada</h3>
              <p className="text-gray-600">Profissionais experientes para deixar seu pet ainda mais bonito.</p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Dog className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alimentação Premium</h3>
              <p className="text-gray-600">Rações e alimentos de alta qualidade para seu melhor amigo.</p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg bg-white">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Espaço de Diversão</h3>
              <p className="text-gray-600">Área dedicada para socialização e brincadeiras.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;