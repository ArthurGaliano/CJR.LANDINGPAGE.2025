import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
  isHovered?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  slug
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(card.querySelector('.service-icon'), {
        rotate: 5,
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });

      gsap.to(card.querySelector('.more-info-arrow'), {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(card.querySelector('.service-icon'), {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(card.querySelector('.more-info-arrow'), {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="service-icon w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-900 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-sm text-gray-500 italic">
              +{features.length - 3} servicios más...
            </li>
          )}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            to={`/servicios/${slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center"
          >
            Ver detalles completos
            <svg className="more-info-arrow w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;