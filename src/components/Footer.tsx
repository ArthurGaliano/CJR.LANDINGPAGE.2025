import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <AnimatedLogo 
                size="lg" 
                showText={true} 
                autoPlay={true}
                useRealLogo={true}
                className="text-white [&_.logo-text]:text-white [&_.logo-text_span:last-child]:text-gray-400"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empresa peruana dedicada a brindar soluciones integrales de telecomunicaciones 
              con calidad, eficiencia y compromiso.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:bg-gradient-primary-dark transition-all duration-200 cursor-pointer hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:bg-gradient-primary-dark transition-all duration-200 cursor-pointer hover:scale-110">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Mantenimiento de Sites</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sistemas de Energía</li>
              <li className="hover:text-white transition-colors cursor-pointer">RF y Microondas</li>
              <li className="hover:text-white transition-colors cursor-pointer">Optimización de Redes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sistemas de Vigilancia</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Av. Santa Rosa Mz. F Lt. 7D<br />
                  Urb. Canto Grande
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm">
                  <div>01-3003429</div>
                  <div>964284252</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">cjrsolutionsenterprise@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CJR Solutions Enterprise S.A.C. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;