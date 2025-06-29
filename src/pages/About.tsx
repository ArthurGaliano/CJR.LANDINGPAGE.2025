import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Shield, 
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.about-hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });

      // Mission & Vision cards
      gsap.from('.mission-vision-card', {
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Values animation
      gsap.from('.value-item', {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // Stats animation
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });

      // Team section animation
      gsap.from('.team-content', {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out'
      });

      // CTA animation
      gsap.from('.about-cta-content', {
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

  const values = [
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Garantizamos la máxima confiabilidad en todos nuestros servicios y soluciones.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Buscamos la excelencia en cada proyecto, superando las expectativas del cliente.'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Fomentamos la colaboración y el trabajo en equipo para lograr mejores resultados.'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para ofrecer soluciones innovadoras.'
    },
    {
      icon: CheckCircle,
      title: 'Compromiso',
      description: 'Nos comprometemos con la calidad y el cumplimiento de nuestras promesas.'
    },
    {
      icon: Star,
      title: 'Satisfacción',
      description: 'La satisfacción del cliente es nuestra principal prioridad y motivación.'
    }
  ];

  const stats = [
    {
      icon: Globe,
      title: 'Presencia Regional',
      description: 'Operamos a nivel nacional con proyectos en múltiples regiones del Perú',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'Ventas +30MM',
      description: 'Hemos superado los 30 millones en ventas anuales gracias a la confianza de nuestros clientes',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: '+200 Clientes',
      description: 'Más de 200 clientes satisfechos confían en nuestras soluciones especializadas',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: '+500 Colaboradores',
      description: 'Contamos con un equipo de más de 500 profesionales altamente capacitados',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building,
      title: 'Buen Gobierno Corporativo',
      description: 'Mantenemos los más altos estándares de gobierno corporativo y transparencia',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16" ref={heroRef}>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="about-hero-content">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Somos tu socio experto en tecnología y
              <span className="block text-secondary-400">telecomunicaciones</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nuestro modelo de negocio se enfoca en ser el socio tecnológico y confiable de 
              nuestros clientes a través de conocimiento especializado, manejo de stakeholders y 
              soluciones innovadoras que aseguren el éxito de sus proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white" ref={missionVisionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Propuesta de Valor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometidos con la excelencia en cada proyecto que emprendemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="mission-vision-card group">
              <div className="bg-gradient-card rounded-2xl p-8 h-full border border-primary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Brindar servicios de excelencia y eficiencia, adaptados a las necesidades del cliente, 
                  generando confianza y seguridad en cada proyecto que desarrollamos.
                </p>
              </div>
            </div>
            
            <div className="mission-vision-card group">
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 h-full border border-secondary-100 hover:border-secondary-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center group-hover:bg-secondary-200 transition-colors duration-300">
                    <Eye className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ser una empresa líder e innovadora en soluciones integrales, cumpliendo con los 
                  más altos estándares de calidad y siendo referente en el sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-item group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Logros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cifras que demuestran nuestro compromiso y crecimiento en el sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card group">
                <div className="bg-gradient-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 hover:border-primary-200">
                  <div className="aspect-w-16 aspect-h-9 h-48">
                    <img
                      src={stat.image}
                      alt={stat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <stat.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{stat.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="team-content text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Contamos con un equipo multidisciplinario de ingenieros, técnicos y especialistas 
              altamente capacitados, comprometidos con la excelencia y la innovación en cada proyecto.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ingenieros Especializados</h3>
                <p className="text-gray-600">Profesionales con certificaciones internacionales</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Técnicos Certificados</h3>
                <p className="text-gray-600">Personal técnico con amplia experiencia de campo</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Especialistas en Seguridad</h3>
                <p className="text-gray-600">Expertos en normativas y protocolos de seguridad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="about-cta-content">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Quieres ser parte de nuestro equipo?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Únete a nosotros y forma parte de una empresa líder en telecomunicaciones 
              con oportunidades de crecimiento profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                Contáctanos
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

export default About;