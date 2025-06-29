import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
  Clock,
  Target,
  Zap,
  Building,
  Antenna,
  BarChart3,
  Shield,
  Fence,
  Wrench,
  Radio,
  Cable
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.service-detail-hero', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });

      // Content sections animation
      gsap.from('.content-section', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Gallery animation
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // CTA animation
      gsap.from('.service-cta', {
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

  const servicesData = {
    'mantenimiento-construccion-sites': {
      icon: Building,
      title: 'Mantenimiento y Construcción de Sites',
      subtitle: 'Infraestructura crítica de telecomunicaciones',
      description: 'Servicios especializados en estaciones base y infraestructura crítica de telecomunicaciones con los más altos estándares de calidad y seguridad.',
      longDescription: 'Nuestro equipo de ingenieros especializados cuenta con más de 15 años de experiencia en el mantenimiento y construcción de sites de telecomunicaciones. Trabajamos con las principales operadoras del país, garantizando la continuidad operativa de la infraestructura crítica.',
      services: [
        'Mantenimiento correctivo y preventivo de estaciones base',
        'Sistemas de puesta a tierra y pozos a tierra',
        'Inspecciones técnicas especializadas',
        'Documentación y certificaciones',
        'Auditorías de infraestructura',
        'Implementación de mejoras de seguridad',
        'Monitoreo de equipos críticos',
        'Gestión de incidencias 24/7'
      ],
      benefits: [
        'Reducción de tiempo de inactividad',
        'Cumplimiento de normativas internacionales',
        'Documentación técnica completa',
        'Soporte técnico especializado',
        'Garantía en todos los trabajos'
      ],
      process: [
        'Evaluación inicial del site',
        'Planificación detallada del trabajo',
        'Ejecución con personal certificado',
        'Pruebas y verificaciones',
        'Documentación y entrega'
      ],
      images: [
        'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'sistemas-energia': {
      icon: Zap,
      title: 'Sistemas de Energía',
      subtitle: 'Soluciones energéticas integrales',
      description: 'Soluciones integrales de energía para garantizar operación continua de equipos críticos con tecnología de vanguardia.',
      longDescription: 'Diseñamos e implementamos sistemas de energía robustos y eficientes que garantizan la continuidad operativa de infraestructuras críticas. Nuestras soluciones incluyen desde sistemas tradicionales hasta energías renovables.',
      services: [
        'Tableros eléctricos y sistemas de control',
        'Bancos de baterías y sistemas UPS',
        'Paneles solares y energía renovable',
        'Sistemas de aire acondicionado',
        'Grupos electrógenos y rectificadores',
        'Sistemas de monitoreo energético',
        'Optimización de consumo eléctrico',
        'Mantenimiento preventivo de equipos'
      ],
      benefits: [
        'Ahorro energético significativo',
        'Reducción de costos operativos',
        'Mayor confiabilidad del sistema',
        'Cumplimiento ambiental',
        'Monitoreo en tiempo real'
      ],
      process: [
        'Análisis de requerimientos energéticos',
        'Diseño del sistema óptimo',
        'Instalación con equipos certificados',
        'Configuración y puesta en marcha',
        'Capacitación y soporte continuo'
      ],
      images: [
        'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'estructuras-metalicas': {
      icon: Wrench,
      title: 'Estructuras Metálicas',
      subtitle: 'Diseño y fabricación especializada',
      description: 'Diseño, fabricación e instalación de estructuras metálicas especializadas para telecomunicaciones con ingeniería de precisión.',
      longDescription: 'Contamos con un taller especializado en metalmecánica donde diseñamos y fabricamos estructuras metálicas a medida. Nuestro equipo de ingenieros y soldadores certificados garantiza la máxima calidad en cada proyecto.',
      services: [
        'Torres de telecomunicaciones',
        'Plataformas y soportes especializados',
        'Pintura y tratamiento anticorrosivo',
        'Mantenimiento y refuerzo estructural',
        'Estructuras para antenas',
        'Escaleras y sistemas de acceso',
        'Cerramientos y protecciones',
        'Modificaciones estructurales'
      ],
      benefits: [
        'Estructuras diseñadas a medida',
        'Materiales de alta calidad',
        'Cumplimiento de normas sísmicas',
        'Resistencia a condiciones climáticas',
        'Garantía estructural extendida'
      ],
      process: [
        'Análisis estructural y diseño',
        'Fabricación en taller especializado',
        'Control de calidad riguroso',
        'Transporte e instalación',
        'Pruebas de carga y certificación'
      ],
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'rf-microondas': {
      icon: Antenna,
      title: 'Servicios de RF y Microondas',
      subtitle: 'Tecnología de radiofrecuencia avanzada',
      description: 'Implementación y optimización de tecnologías de radiofrecuencia de última generación incluyendo 5G.',
      longDescription: 'Somos especialistas en tecnologías de radiofrecuencia y microondas, con experiencia en todas las generaciones de tecnología móvil. Nuestro equipo está certificado en las últimas tecnologías 5G y sistemas de comunicación avanzados.',
      services: [
        'Tecnologías 2G, 3G, 4G, 4.5G y 5G',
        'Instalación de equipos de radio y antenas',
        'Site Survey técnico especializado (TSS)',
        'Estudios de línea de vista (LOS)',
        'Análisis de cobertura y capacidad',
        'Configuración de equipos RF',
        'Mediciones de potencia y VSWR',
        'Optimización de enlaces microondas'
      ],
      benefits: [
        'Cobertura optimizada',
        'Mayor capacidad de red',
        'Reducción de interferencias',
        'Cumplimiento regulatorio',
        'Tecnología de vanguardia'
      ],
      process: [
        'Site Survey y análisis técnico',
        'Diseño de la solución RF',
        'Instalación de equipos especializados',
        'Configuración y optimización',
        'Pruebas de aceptación y documentación'
      ],
      images: [
        'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'optimizacion-redes': {
      icon: BarChart3,
      title: 'Optimización de Redes',
      subtitle: 'Análisis y mejora del rendimiento',
      description: 'Servicios avanzados de análisis y optimización del rendimiento de redes móviles para maximizar la calidad de servicio.',
      longDescription: 'Utilizamos herramientas de medición de última generación y metodologías probadas para optimizar el rendimiento de redes móviles. Nuestro equipo de ingenieros RF especializados garantiza la mejor experiencia para los usuarios finales.',
      services: [
        'Drive Test y análisis de cobertura',
        'Medición CallP y calidad de servicio',
        'Movimiento y reorientación de antenas',
        'Medición de señal indoor/outdoor',
        'Reportes técnicos especializados',
        'Análisis de KPIs de red',
        'Optimización de parámetros RF',
        'Benchmarking competitivo'
      ],
      benefits: [
        'Mejora en calidad de servicio',
        'Reducción de llamadas caídas',
        'Optimización de cobertura',
        'Incremento en satisfacción del cliente',
        'Reportes detallados y actionables'
      ],
      process: [
        'Planificación de rutas de medición',
        'Ejecución de Drive Tests',
        'Análisis de datos y KPIs',
        'Identificación de oportunidades',
        'Implementación de mejoras'
      ],
      images: [
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'planta-externa-fibra-optica': {
      icon: Cable,
      title: 'Planta Externa (PEXT) y Fibra Óptica',
      subtitle: 'Infraestructura de fibra óptica especializada',
      description: 'Instalación y mantenimiento de infraestructura de fibra óptica para redes de telecomunicaciones de alta velocidad.',
      longDescription: 'Contamos con experiencia especializada en el diseño, instalación y mantenimiento de redes de fibra óptica. Nuestro equipo técnico maneja tanto instalaciones aéreas como subterráneas, utilizando materiales y técnicas de vanguardia para garantizar la máxima calidad en las comunicaciones.',
      services: [
        'Fibra Monomodo (SM): Ideal para largas distancias y enlaces backbone',
        'Fibra Multimodo (MM): Para tramos cortos con múltiples modos de propagación',
        'Instalación Aérea: Postes propios, de terceros y eléctricos, torres',
        'Instalación Subterránea: Canalizaciones, microcanalizaciones y cámaras telefónicas (XM, XB, XA, DC)',
        'Materiales especializados: Fleje de acero, hebillas, crucetas, aisladores, soportes y cable mensajero',
        'Empalmes y terminaciones de fibra óptica',
        'Mediciones OTDR y certificación de enlaces',
        'Mantenimiento preventivo y correctivo de redes'
      ],
      benefits: [
        'Alta velocidad de transmisión de datos',
        'Mayor ancho de banda disponible',
        'Resistencia a interferencias electromagnéticas',
        'Instalaciones duraderas y confiables',
        'Cumplimiento de estándares internacionales'
      ],
      process: [
        'Estudio técnico y diseño de la red',
        'Preparación de infraestructura y materiales',
        'Instalación de fibra óptica especializada',
        'Empalmes y terminaciones técnicas',
        'Certificación y pruebas de calidad'
      ],
      images: [
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'sistemas-vigilancia': {
      icon: Shield,
      title: 'Sistemas de Vigilancia',
      subtitle: 'Seguridad electrónica integral',
      description: 'Soluciones de seguridad electrónica para protección integral de instalaciones con tecnología IP avanzada.',
      longDescription: 'Implementamos sistemas de vigilancia de última generación que combinan cámaras IP de alta definición, análisis inteligente de video y plataformas de gestión centralizadas para brindar seguridad integral.',
      services: [
        'Cámaras de seguridad IP de alta definición',
        'Sistemas Wi-Fi y CCTV',
        'Vigilancia para hogares y oficinas',
        'Monitoreo de edificios y almacenes',
        'Sistemas de acceso y control',
        'Análisis inteligente de video',
        'Grabación en la nube',
        'Monitoreo remoto 24/7'
      ],
      benefits: [
        'Vigilancia en tiempo real',
        'Grabación de alta calidad',
        'Acceso remoto desde cualquier dispositivo',
        'Alertas automáticas',
        'Reducción de riesgos de seguridad'
      ],
      process: [
        'Evaluación de riesgos de seguridad',
        'Diseño del sistema de vigilancia',
        'Instalación de equipos especializados',
        'Configuración y pruebas',
        'Capacitación y soporte continuo'
      ],
      images: [
        'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'cercos-electricos': {
      icon: Fence,
      title: 'Cercos Eléctricos',
      subtitle: 'Seguridad perimetral efectiva',
      description: 'Instalación de sistemas de seguridad perimetral de alta efectividad para protección residencial e industrial.',
      longDescription: 'Nuestros sistemas de cercos eléctricos combinan tecnología de pulsos de alta tensión con sistemas de alarma integrados, proporcionando una barrera de seguridad efectiva y disuasiva.',
      services: [
        'Cercos eléctricos residenciales',
        'Sistemas de seguridad perimetral industrial',
        'Sensores y alarmas integradas',
        'Mantenimiento preventivo especializado',
        'Sistemas de control de acceso',
        'Integración con CCTV',
        'Monitoreo de intrusión',
        'Respaldo de energía'
      ],
      benefits: [
        'Disuasión efectiva de intrusos',
        'Instalación rápida y limpia',
        'Bajo consumo energético',
        'Integración con otros sistemas',
        'Mantenimiento mínimo requerido'
      ],
      process: [
        'Evaluación del perímetro',
        'Diseño del sistema de seguridad',
        'Instalación profesional',
        'Configuración y pruebas',
        'Entrenamiento en uso y mantenimiento'
      ],
      images: [
        'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'metalmecanica': {
      icon: Radio,
      title: 'Metalmecánica',
      subtitle: 'Fabricación especializada',
      description: 'Diseño y fabricación de estructuras metálicas personalizadas para telecomunicaciones con precisión industrial.',
      longDescription: 'Nuestro taller de metalmecánica cuenta con maquinaria especializada y personal técnico altamente calificado para la fabricación de estructuras metálicas complejas y componentes especializados.',
      services: [
        'Estructuras para telecomunicaciones',
        'Fabricación de torres especializadas',
        'Elementos de construcción metálica',
        'Proyectos personalizados',
        'Soldadura especializada',
        'Tratamientos superficiales',
        'Control de calidad riguroso',
        'Ingeniería de fabricación'
      ],
      benefits: [
        'Fabricación a medida',
        'Control total de calidad',
        'Tiempos de entrega optimizados',
        'Costos competitivos',
        'Flexibilidad en diseños'
      ],
      process: [
        'Análisis de requerimientos técnicos',
        'Diseño y ingeniería detallada',
        'Fabricación en taller especializado',
        'Control de calidad integral',
        'Entrega e instalación'
      ],
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const service = servicesData[serviceSlug as keyof typeof servicesData];

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="pt-16" ref={heroRef}>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-detail-hero">
            <Link 
              to="/servicios"
              className="inline-flex items-center text-primary-200 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Servicios
            </Link>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  {service.title}
                </h1>
                <p className="text-xl text-secondary-200">
                  {service.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="content-section">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Descripción del Servicio
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Services List */}
              <div className="content-section">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Servicios Incluidos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="content-section">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestro Proceso
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Benefits */}
                <div className="content-section bg-gradient-card rounded-xl p-6 border border-primary-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-primary-600 mr-2" />
                    Beneficios Clave
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="content-section bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Estadísticas del Servicio
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">Proyectos</span>
                      </div>
                      <span className="font-bold text-primary-600">100+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">Experiencia</span>
                      </div>
                      <span className="font-bold text-primary-600">15+ años</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">Satisfacción</span>
                      </div>
                      <span className="font-bold text-primary-600">99%</span>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="content-section bg-gradient-primary text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    ¿Interesado en este servicio?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Contáctanos para una cotización personalizada
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:01-3003429"
                      className="flex items-center justify-center w-full bg-white text-primary-600 hover:bg-gray-100 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar Ahora
                    </a>
                    <a
                      href="mailto:cjrsolutionsenterprise@gmail.com"
                      className="flex items-center justify-center w-full border-2 border-white/30 hover:border-white/50 hover:bg-white/10 py-3 px-4 rounded-lg font-medium transition-all duration-200"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Enviar Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Galería de Proyectos
            </h2>
            <p className="text-xl text-gray-600">
              Algunos ejemplos de nuestros trabajos realizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.images.map((image, index) => (
              <div key={index} className="gallery-item group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image}
                    alt={`${service.title} - Proyecto ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Proyecto {index + 1}</p>
                      <p className="text-sm text-gray-300">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="service-cta">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para brindarte la mejor solución 
              para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Link>
              <a
                href="tel:01-3003429"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;