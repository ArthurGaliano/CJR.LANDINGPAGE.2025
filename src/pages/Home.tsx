import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Radio, 
  ChevronRight, 
  Shield, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  Smartphone,
  Wifi,
  Satellite,
  Network,
  Globe,
  TrendingUp,
  CheckCircle,
  Play
} from 'lucide-react';
import AnimatedLogo from '../components/AnimatedLogo';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const implementationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const fiberLinesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fiber optic lines animation
      gsap.set('.fiber-line', { 
        scaleX: 0, 
        transformOrigin: 'left center',
        opacity: 0 
      });

      // Animate fiber lines sequentially
      gsap.to('.fiber-line', {
        scaleX: 1,
        opacity: 0.6,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5
      });

      // Continuous pulse animation for fiber lines
      gsap.to('.fiber-line', {
        opacity: 0.3,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });

      // Data particles animation
      gsap.set('.data-particle', { 
        scale: 0, 
        opacity: 0 
      });

      gsap.to('.data-particle', {
        scale: 1,
        opacity: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 1
      });

      // Floating particles
      gsap.to('.data-particle', {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Network nodes animation
      gsap.set('.network-node', { 
        scale: 0, 
        opacity: 0 
      });

      gsap.to('.network-node', {
        scale: 1,
        opacity: 0.7,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 1.5
      });

      // Pulsing network nodes
      gsap.to('.network-node', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

      // Hero content animations
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('.hero-logo', {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
        duration: 1.2,
        ease: 'back.out(1.7)'
      }, '-=0.5')
      .from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.8')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.7')
      .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6')
      .from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-stats', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.8');

      // Stats counter animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // Implementation section animations
      gsap.from('.implementation-content', {
        scrollTrigger: {
          trigger: implementationRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.tech-card', {
        scrollTrigger: {
          trigger: implementationRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      });

      gsap.from('.trend-item', {
        scrollTrigger: {
          trigger: implementationRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // CTA section
      gsap.from('.cta-content', {
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

  const stats = [
    { icon: Users, value: '500+', label: 'Proyectos Completados' },
    { icon: Award, value: '15+', label: 'Años de Experiencia' },
    { icon: Shield, value: '99.9%', label: 'Confiabilidad' },
    { icon: Zap, value: '24/7', label: 'Soporte Técnico' },
  ];

  const technologies = [
    {
      icon: Smartphone,
      title: 'Redes 5G',
      description: 'Implementación de la nueva generación de redes móviles con velocidades ultra-rápidas y baja latencia.',
      status: 'En Implementación',
      progress: 75
    },
    {
      icon: Wifi,
      title: 'Wi-Fi 6E',
      description: 'Despliegue de tecnología Wi-Fi de última generación para mayor capacidad y eficiencia.',
      status: 'Activo',
      progress: 90
    },
    {
      icon: Satellite,
      title: 'IoT Masivo',
      description: 'Conectividad para Internet de las Cosas con soporte para millones de dispositivos.',
      status: 'En Desarrollo',
      progress: 60
    },
    {
      icon: Network,
      title: 'Edge Computing',
      description: 'Procesamiento de datos en el borde de la red para aplicaciones de tiempo real.',
      status: 'Piloto',
      progress: 45
    }
  ];

  const trends = [
    'Expansión de cobertura 5G en zonas urbanas y rurales',
    'Implementación de redes privadas para industrias',
    'Desarrollo de ciudades inteligentes con IoT',
    'Migración hacia infraestructura cloud-native',
    'Integración de inteligencia artificial en redes',
    'Sostenibilidad energética en telecomunicaciones'
  ];

  return (
    <div ref={heroRef}>
      {/* Hero Section - Pantalla Completa */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Fondo tecnológico animado */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid tecnológico de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(242, 101, 34, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(242, 101, 34, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Líneas de fibra óptica */}
          <div ref={fiberLinesRef} className="absolute inset-0">
            {/* Líneas horizontales */}
            <div className="fiber-line absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            <div className="fiber-line absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary-400 to-transparent"></div>
            <div className="fiber-line absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
            
            {/* Líneas verticales */}
            <div className="fiber-line absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent"></div>
            <div className="fiber-line absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-secondary-400 to-transparent"></div>
            <div className="fiber-line absolute left-3/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-accent-400 to-transparent"></div>
            
            {/* Líneas diagonales */}
            <div className="fiber-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent transform rotate-45 origin-center"></div>
            <div className="fiber-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary-300 to-transparent transform -rotate-45 origin-center"></div>
          </div>

          {/* Nodos de red */}
          <div className="absolute inset-0">
            <div className="network-node absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400 rounded-full shadow-lg shadow-primary-400/50"></div>
            <div className="network-node absolute top-1/4 right-1/4 w-3 h-3 bg-secondary-400 rounded-full shadow-lg shadow-secondary-400/50"></div>
            <div className="network-node absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent-400 rounded-full shadow-lg shadow-accent-400/50"></div>
            <div className="network-node absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary-400 rounded-full shadow-lg shadow-primary-400/50"></div>
            <div className="network-node absolute top-1/2 left-1/6 w-4 h-4 bg-secondary-400 rounded-full shadow-lg shadow-secondary-400/50"></div>
            <div className="network-node absolute top-1/3 right-1/6 w-3 h-3 bg-accent-400 rounded-full shadow-lg shadow-accent-400/50"></div>
          </div>

          {/* Partículas de datos */}
          <div ref={particlesRef} className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="data-particle absolute w-1 h-1 bg-primary-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Efectos de luz */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="hero-badge inline-flex items-center px-6 py-3 bg-primary-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary-200 border border-primary-400/30">
                  <Radio className="h-4 w-4 mr-2" />
                  Líder en Telecomunicaciones
                </div>
                
                {/* Animated Logo in Hero */}
                <div className="hero-logo flex justify-center lg:justify-start">
                  <AnimatedLogo 
                    size="xl" 
                    showText={true} 
                    autoPlay={true}
                    className="text-white [&_.logo-text]:text-white [&_.logo-text_span:last-child]:text-gray-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <h1 className="hero-title text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="hero-subtitle block text-secondary-400 mb-2">Soluciones Integrales</span>
                    <span className="hero-subtitle block text-white">de Telecomunicaciones</span>
                  </h1>
                  <p className="hero-description text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Empresa peruana dedicada a brindar soluciones integrales de telecomunicaciones 
                    con calidad, eficiencia y compromiso.
                  </p>
                </div>
              </div>
              
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/servicios"
                  className="inline-flex items-center px-8 py-4 bg-gradient-primary hover:bg-gradient-primary-dark rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl shadow-primary-500/25 justify-center"
                >
                  Ver Servicios
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg transition-all duration-200 justify-center text-white"
                >
                  Contactar
                </Link>
              </div>
            </div>
            
            <div className="hero-stats relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl" ref={statsRef}>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item text-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll para más</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Implementation Section - Nueva Sección de Pantalla Completa */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100" ref={implementationRef}>
        {/* Fondo con patrones tecnológicos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(242, 101, 34, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(251, 176, 59, 0.1) 0%, transparent 50%)
              `
            }}></div>
          </div>
          
          {/* Elementos decorativos flotantes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-secondary-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="implementation-content text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-8">
              <TrendingUp className="h-4 w-4 mr-2" />
              Tecnologías en Implementación
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              El Futuro de las
              <span className="block text-primary-600">Telecomunicaciones</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Estamos a la vanguardia implementando las tecnologías más avanzadas que están 
              transformando el panorama de las telecomunicaciones en el Perú y el mundo.
            </p>
          </div>

          {/* Tecnologías Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full relative overflow-hidden">
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    tech.status === 'Activo' ? 'bg-green-100 text-green-700' :
                    tech.status === 'En Implementación' ? 'bg-primary-100 text-primary-700' :
                    tech.status === 'En Desarrollo' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {tech.status}
                  </div>

                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                  
                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progreso</span>
                      <span className="font-medium text-primary-600">{tech.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tendencias del Sector */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Tendencias del Sector
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                El sector de telecomunicaciones está experimentando una transformación sin precedentes. 
                Estas son las principales tendencias que estamos implementando:
              </p>
              
              <div className="space-y-4">
                {trends.map((trend, index) => (
                  <div key={index} className="trend-item flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{trend}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Impacto Global</h4>
                    <p className="text-primary-100">Conectando el futuro</p>
                  </div>
                </div>
                
                <p className="text-lg text-primary-50 mb-8 leading-relaxed">
                  Nuestras implementaciones no solo transforman la conectividad local, 
                  sino que contribuyen al desarrollo tecnológico global del país.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                    <div className="text-sm text-primary-100">Cobertura Nacional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-primary-100">Ciudades Conectadas</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-15"></div>
            </div>
          </div>

          {/* Call to Action dentro de la sección */}
          <div className="text-center mt-16">
            <Link
              to="/servicios"
              className="inline-flex items-center px-8 py-4 bg-gradient-primary hover:bg-gradient-primary-dark text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5 mr-2" />
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para potenciar tu infraestructura?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos 
              con nuestras soluciones especializadas.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;