import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Radio, 
  Zap, 
  Building, 
  Antenna, 
  BarChart3, 
  Shield, 
  Fence,
  Wrench,
  Cable
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const techSectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.services-hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });

      // Services grid animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesGridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      });

      // Technology badges animation
      gsap.from('.tech-badge', {
        scrollTrigger: {
          trigger: techSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // CTA animation
      gsap.from('.services-cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Building,
      title: 'Mantenimiento y Construcción de Sites',
      description: 'Servicios especializados en estaciones base y infraestructura crítica de telecomunicaciones.',
      features: [
        'Mantenimiento correctivo y preventivo de estaciones base',
        'Sistemas de puesta a tierra y pozos a tierra',
        'Inspecciones técnicas especializadas',
        'Documentación y certificaciones'
      ],
      slug: 'mantenimiento-construccion-sites'
    },
    {
      icon: Zap,
      title: 'Sistemas de Energía',
      description: 'Soluciones integrales de energía para garantizar operación continua de equipos críticos.',
      features: [
        'Tableros eléctricos y sistemas de control',
        'Bancos de baterías y sistemas UPS',
        'Paneles solares y energía renovable',
        'Sistemas de aire acondicionado',
        'Grupos electrógenos y rectificadores'
      ],
      slug: 'sistemas-energia'
    },
    {
      icon: Wrench,
      title: 'Estructuras Metálicas',
      description: 'Diseño, fabricación e instalación de estructuras metálicas especializadas.',
      features: [
        'Torres de telecomunicaciones',
        'Plataformas y soportes especializados',
        'Pintura y tratamiento anticorrosivo',
        'Mantenimiento y refuerzo estructural'
      ],
      slug: 'estructuras-metalicas'
    },
    {
      icon: Antenna,
      title: 'Servicios de RF y Microondas',
      description: 'Implementación y optimización de tecnologías de radiofrecuencia de última generación.',
      features: [
        'Tecnologías 2G, 3G, 4G, 4.5G y 5G',
        'Instalación de equipos de radio y antenas',
        'Site Survey técnico especializado (TSS)',
        'Estudios de línea de vista (LOS)',
        'Análisis de cobertura y capacidad'
      ],
      slug: 'rf-microondas'
    },
    {
      icon: BarChart3,
      title: 'Optimización de Redes',
      description: 'Servicios avanzados de análisis y optimización del rendimiento de redes móviles.',
      features: [
        'Drive Test y análisis de cobertura',
        'Medición CallP y calidad de servicio',
        'Movimiento y reorientación de antenas',
        'Medición de señal indoor/outdoor',
        'Reportes técnicos especializados'
      ],
      slug: 'optimizacion-redes'
    },
    {
      icon: Cable,
      title: 'Planta Externa (PEXT) y Fibra Óptica',
      description: 'Instalación y mantenimiento de infraestructura de fibra óptica para redes de telecomunicaciones.',
      features: [
        'Fibra Monomodo (SM): Ideal para largas distancias y enlaces backbone',
        'Fibra Multimodo (MM): Para tramos cortos con múltiples modos de propagación',
        'Instalación Aérea: Postes propios, de terceros y eléctricos, torres',
        'Instalación Subterránea: Canalizaciones, microcanalizaciones y cámaras telefónicas (XM, XB, XA, DC)',
        'Materiales especializados: Fleje de acero, hebillas, crucetas, aisladores, soportes y cable mensajero'
      ],
      slug: 'planta-externa-fibra-optica'
    },
    {
      icon: Shield,
      title: 'Sistemas de Vigilancia',
      description: 'Soluciones de seguridad electrónica para protección integral de instalaciones.',
      features: [
        'Cámaras de seguridad IP de alta definición',
        'Sistemas Wi-Fi y CCTV',
        'Vigilancia para hogares y oficinas',
        'Monitoreo de edificios y almacenes',
        'Sistemas de acceso y control'
      ],
      slug: 'sistemas-vigilancia'
    },
    {
      icon: Fence,
      title: 'Cercos Eléctricos',
      description: 'Instalación de sistemas de seguridad perimetral de alta efectividad.',
      features: [
        'Cercos eléctricos residenciales',
        'Sistemas de seguridad perimetral industrial',
        'Sensores y alarmas integradas',
        'Mantenimiento preventivo especializado'
      ],
      slug: 'cercos-electricos'
    },
    {
      icon: Radio,
      title: 'Metalmecánica',
      description: 'Diseño y fabricación de estructuras metálicas personalizadas para telecomunicaciones.',
      features: [
        'Estructuras para telecomunicaciones',
        'Fabricación de torres especializadas',
        'Elementos de construcción metálica',
        'Proyectos personalizados'
      ],
      slug: 'metalmecanica'
    }
  ];

  return (
    <div className="pt-16" ref={heroRef}>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="services-hero-content">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-sm font-medium text-primary-200 mb-6">
              <Radio className="h-4 w-4 mr-2" />
              Servicios Especializados
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Soluciones Integrales de
              <span className="block text-white-400">Telecomunicaciones</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos servicios completos y especializados para satisfacer todas las necesidades 
              de infraestructura de telecomunicaciones con los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50" ref={servicesGridRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white" ref={techSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tecnologías que Dominamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las tecnologías más avanzadas del mercado para garantizar 
              soluciones de vanguardia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['2G', '3G', '4G', '4.5G', '5G', 'LTE'].map((tech, index) => (
              <div key={index} className="tech-badge text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold text-primary-600">{tech}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Tecnología {tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="services-cta-content">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesitas una solución personalizada?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para desarrollar la solución perfecta 
              para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01-3003429"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                Llamar Ahora
              </a>
              <a
                href="mailto:cjrsolutionsenterprise@gmail.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;