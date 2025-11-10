'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Shield,
  Clock,
  Award,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Users,
  Factory,
  Hammer,
  Star,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        } else {
          nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav
        id="navbar"
        className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Factory className="w-8 h-8 text-industrial-700" />
              <span className="text-2xl font-bold text-industrial-900">PrefabriPro</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Beneficios', 'Proyectos', 'Proceso', 'Testimonios', 'FAQ', 'Contacto'].map(
                (item, idx) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-industrial-700 font-medium transition-colors group relative"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-industrial-700 transition-all group-hover:w-full"></span>
                  </motion.a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['Inicio', 'Beneficios', 'Proyectos', 'Proceso', 'Testimonios', 'FAQ', 'Contacto'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-industrial-700 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-50 to-gray-100 -z-10"></div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-industrial-600 font-semibold text-lg mb-4 tracking-wide"
              >
                ESTRUCTURAS QUE CONSTRUYEN PROGRESO
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Prefabricados que duran{' '}
                <span className="text-industrial-700">generaciones</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Estructuras industriales de acero y concreto diseñadas con precisión alemana y
                experiencia latinoamericana.
              </motion.p>

              {/* Social Proof Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8 mb-10"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-industrial-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Años</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-6 h-6 text-industrial-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">350+</div>
                    <div className="text-sm text-gray-600">Proyectos</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#contacto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-industrial-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-industrial-800 transition-all shadow-lg group"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Obtén tu cotización gratuita
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all"
                    placeholder="+52 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de proyecto
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-transparent transition-all">
                    <option>Nave industrial</option>
                    <option>Bodega comercial</option>
                    <option>Estructura residencial</option>
                    <option>Proyecto personalizado</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-industrial-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-industrial-800 transition-all shadow-lg"
                >
                  Enviar solicitud
                </motion.button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                📞 Respuesta en menos de 2 horas hábiles
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <AnimatedSection className="py-20 bg-industrial-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: '150,000m²', label: 'Construidos' },
              { icon: Users, value: '98%', label: 'Satisfacción' },
              { icon: Shield, value: '100%', label: 'Garantizado' },
              { icon: Clock, value: '30%', label: 'Más rápido' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-industrial-200">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir prefabricados?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología probada que reduce costos, acelera tiempos y garantiza calidad superior
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Construcción 40% más rápida',
                description:
                  'Fabricación paralela en planta mientras preparas el terreno. Instalación en semanas, no meses.',
              },
              {
                icon: Shield,
                title: 'Calidad certificada ISO',
                description:
                  'Control de calidad en ambiente controlado. Cada pieza cumple estándares internacionales.',
              },
              {
                icon: Award,
                title: 'Precio predecible',
                description:
                  'Sin sorpresas ni sobrecostos. Cotización fija que incluye fabricación, transporte e instalación.',
              },
              {
                icon: Building2,
                title: 'Durabilidad extrema',
                description:
                  'Diseñado para 50+ años. Resistencia sísmica y estructural superior al método tradicional.',
              },
              {
                icon: Hammer,
                title: 'Menor impacto en obra',
                description:
                  'Menos ruido, polvo y residuos. Instalación limpia y organizada que no paraliza operaciones.',
              },
              {
                icon: CheckCircle2,
                title: 'Garantía extendida',
                description:
                  'Garantía estructural de 10 años. Respaldo técnico permanente post-instalación.',
              },
            ].map((benefit, idx) => (
              <AnimatedSection key={idx}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full transition-all"
                >
                  <div className="w-14 h-14 bg-industrial-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-industrial-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proyectos que nos respaldan
            </h2>
            <p className="text-xl text-gray-600">
              De naves industriales a centros comerciales
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nave Industrial Automotriz',
                specs: '12,000m² | 18m altura | 4 meses',
                location: 'Querétaro, México',
                year: '2023',
              },
              {
                title: 'Centro Logístico Amazon',
                specs: '25,000m² | 15m altura | 6 meses',
                location: 'Guadalajara, México',
                year: '2022',
              },
              {
                title: 'Planta Farmacéutica',
                specs: '8,500m² | 12m altura | 5 meses',
                location: 'Monterrey, México',
                year: '2024',
              },
            ].map((project, idx) => (
              <AnimatedSection key={idx}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-64 bg-gradient-to-br from-industrial-400 to-industrial-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Factory className="w-24 h-24 text-white/30" />
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-industrial-700">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.specs}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proceso simple y transparente
            </h2>
            <p className="text-xl text-gray-600">
              De la consulta a la entrega en 4 pasos claros
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consulta y análisis',
                description:
                  'Visita técnica sin costo. Evaluamos necesidades, dimensiones y requisitos específicos.',
                duration: '2-3 días',
              },
              {
                step: '02',
                title: 'Diseño y cotización',
                description:
                  'Planos estructurales en 3D + cotización detallada con precio final cerrado.',
                duration: '5-7 días',
              },
              {
                step: '03',
                title: 'Fabricación en planta',
                description:
                  'Producción bajo normas ISO en ambiente controlado con supervisión continua.',
                duration: '4-8 semanas',
              },
              {
                step: '04',
                title: 'Instalación y entrega',
                description:
                  'Montaje por equipo especializado. Entrega llave en mano con certificación.',
                duration: '2-4 semanas',
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-6 mb-12 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-industrial-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <span className="text-sm font-semibold text-industrial-600 bg-industrial-50 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">Resultados reales de proyectos completados</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Mendoza',
                role: 'Director de Operaciones',
                company: 'Grupo Industrial del Norte',
                content:
                  '"Redujimos 3 meses del cronograma original. La calidad superó nuestras expectativas y el precio se mantuvo exacto a la cotización inicial."',
                rating: 5,
              },
              {
                name: 'Ana Rodríguez',
                role: 'Gerente de Proyectos',
                company: 'Desarrollos Comerciales SA',
                content:
                  '"Increíble nivel de profesionalismo. Desde el diseño hasta la instalación, todo fue impecable. Ya vamos en nuestro tercer proyecto con ellos."',
                rating: 5,
              },
              {
                name: 'Roberto Silva',
                role: 'CEO',
                company: 'Manufactura Avanzada',
                content:
                  '"La mejor inversión que hicimos. Estructura sólida, proceso transparente y equipo técnico excepcional. 100% recomendado."',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <AnimatedSection key={idx}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    {testimonial.content}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-industrial-600 font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber</p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuánto tiempo toma un proyecto completo?',
                a: 'Desde diseño hasta instalación final: 8-16 semanas dependiendo de la escala. Esto es 30-40% más rápido que construcción tradicional.',
              },
              {
                q: '¿Qué incluye el precio de la cotización?',
                a: 'Diseño estructural, fabricación, transporte, montaje, supervisión técnica y garantía. Sin costos ocultos ni sorpresas.',
              },
              {
                q: '¿Qué garantías ofrecen?',
                a: 'Garantía estructural de 10 años. Certificaciones de calidad ISO 9001 y respaldo técnico permanente post-instalación.',
              },
              {
                q: '¿Pueden personalizar el diseño?',
                a: 'Totalmente. Trabajamos con arquitectos e ingenieros para adaptar cada estructura a tus necesidades específicas.',
              },
              {
                q: '¿Qué zonas geográficas cubren?',
                a: 'Operamos en toda la República Mexicana y Centroamérica. Tenemos plantas en Monterrey, Guadalajara y Ciudad de México.',
              },
            ].map((faq, idx) => (
              <AnimatedSection key={idx}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: activeTab === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-industrial-600" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeTab === idx ? 'auto' : 0,
                      opacity: activeTab === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.a}</div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-industrial-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-xl mb-10 text-industrial-100">
              Agenda una visita técnica gratuita y recibe tu cotización en menos de 48 horas
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Llámanos</div>
                <div className="text-industrial-100">+52 (81) 1234-5678</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Escríbenos</div>
                <div className="text-industrial-100">contacto@prefabripro.com</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Visítanos</div>
                <div className="text-industrial-100">Monterrey, Guadalajara, CDMX</div>
              </motion.div>
            </div>

            <motion.a
              href="#inicio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-industrial-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <span>Solicitar cotización ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Factory className="w-6 h-6" />
            <span className="text-xl font-bold text-white">PrefabriPro</span>
          </div>
          <p className="mb-4">Estructuras que construyen progreso desde 2009</p>
          <div className="text-sm">
            © {new Date().getFullYear()} PrefabriPro. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
