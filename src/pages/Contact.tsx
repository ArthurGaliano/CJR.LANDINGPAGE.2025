import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import emailjs from '@emailjs/browser'; // Para implementación futura con EmailJS
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.contact-hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
      });

      // Contact info cards animation
      gsap.from('.contact-info-card', {
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Contact form animation
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Map section animation
      gsap.from('.map-content', {
        scrollTrigger: {
          trigger: mapSectionRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate form submission
    gsap.to('.submit-button', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
    
    try {
      // Opción 1: Usar EmailJS (requiere configuración en emailjs.com)
      /* 
      await emailjs.send(
        'YOUR_SERVICE_ID',     // Obtener de emailjs.com
        'YOUR_TEMPLATE_ID',    // Obtener de emailjs.com
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'cjrsolutionsenterprise@gmail.com'
        },
        'YOUR_PUBLIC_KEY'      // Obtener de emailjs.com
      );
      */
      
      // Opción 2: Envío directo por email (funciona inmediatamente)
      const emailBody = `
Nuevo mensaje de contacto desde la web:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}
Mensaje: ${formData.message}
      `.trim();
      
      window.location.href = `mailto:cjrsolutionsenterprise@gmail.com?subject=Solicitud de Cotización - ${formData.service}&body=${encodeURIComponent(emailBody)}`;
      
      // Simulate brief delay for better UX
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Animate success message
        gsap.from('.success-message', {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: 'back.out(1.7)'
        });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }, 1000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      // Animate error message
      gsap.from('.error-message', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. Santa Rosa Mz. F Lt. 7D', 'Urb. Canto Grande'],
      link: 'https://maps.google.com/?q=Av.+Santa+Rosa+Mz.+F+Lt.+7D+Urb.+Canto+Grande'
    },
    {
      icon: Phone,
      title: 'Teléfonos',
      details: ['01-3003429', '964284252'],
      link: 'tel:01-3003429'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['cjrsolutionsenterprise@gmail.com'],
      link: 'mailto:cjrsolutionsenterprise@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lunes - Viernes: 8:00 - 18:00', 'Sábados: 8:00 - 13:00'],
      link: null
    }
  ];

  const services = [
    'Mantenimiento y Construcción de Sites',
    'Sistemas de Energía',
    'Estructuras Metálicas',
    'RF y Microondas',
    'Optimización de Redes',
    'Planta Externa (PEXT) y Fibra Óptica',
    'Sistemas de Vigilancia',
    'Cercos Eléctricos',
    'Metalmecánica'
  ];

  return (
    <div className="pt-16" ref={heroRef}>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="contact-hero-content">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con todas tus necesidades de telecomunicaciones. 
              Contáctanos y obtén una cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" ref={contactSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {info.link && idx === 0 ? (
                                <a href={info.link} className="hover:text-primary-600 transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="contact-form bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Solicitar Cotización
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="success-message mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 font-medium">
                        ¡Mensaje enviado exitosamente! Se abrirá tu cliente de correo para enviar la solicitud.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800 font-medium">
                        Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+51 999 999 999"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Seleccionar servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Describe tu proyecto o necesidades específicas..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button w-full bg-gradient-primary hover:bg-gradient-primary-dark disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white" ref={mapSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="map-content text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600">
              Visítanos en nuestra oficina principal
            </p>
          </div>
          
          <div className="map-content bg-gradient-card rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Av. Santa Rosa Mz. F Lt. 7D
              </h3>
              <p className="text-gray-600 mb-4">Urb. Canto Grande</p>
              <a
                href="https://maps.google.com/?q=Av.+Santa+Rosa+Mz.+F+Lt.+7D+Urb.+Canto+Grande"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary hover:bg-gradient-primary-dark text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;