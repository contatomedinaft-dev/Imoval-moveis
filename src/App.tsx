import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, Phone, MapPin, Clock, Instagram, Facebook, 
  Utensils, Bed, Bath, Home, Building, Briefcase, 
  PenTool, Award, ShieldCheck, Truck, Leaf, Heart, 
  Star, MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark py-4 shadow-lg' : 'bg-transparent py-6 absolute top-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Imoval Móveis Planejados" className="h-16 md:h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-2 rounded-full transition-all hover:scale-105 flex items-center gap-2 text-sm shadow-lg shadow-green-500/30">
            <MessageCircle size={16} />
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-t border-gray-800 py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-gold transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-center mt-2 shadow-lg shadow-green-500/30 flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
            <MessageCircle size={20} />
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#1C1614]">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero.jpg")' }}
      >
        {/* Gradient Overlay: Dark brown on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1614] via-[#1C1614]/90 to-transparent"></div>
        {/* Subtle overall darkening to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5"
        >
          <h1 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-6">
            Móveis que <span className="text-gold italic">transformam</span> ambientes
          </h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
            Projetos exclusivos sob medida para residências e empresas. Qualidade, sofisticação e funcionalidade em cada detalhe.
          </p>
          <a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 text-lg shadow-xl shadow-green-500/30 animate-pulse">
            <MessageCircle size={24} />
            Solicitar Orçamento Grátis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Utensils size={32} strokeWidth={1.5} />, title: 'Cozinhas', desc: 'Soluções completas em móveis planejados e embutidos para o coração da sua casa.' },
    { icon: <Bed size={32} strokeWidth={1.5} />, title: 'Dormitórios', desc: 'Projetos exclusivos que unem conforto, organização e design sofisticado.' },
    { icon: <Bath size={32} strokeWidth={1.5} />, title: 'Banheiros', desc: 'Aproveitamento inteligente de espaço com acabamentos resistentes à umidade.' },
    { icon: <Home size={32} strokeWidth={1.5} />, title: 'Salas de Estar', desc: 'Ambientes integrados e elegantes para receber amigos e família.' },
    { icon: <Briefcase size={32} strokeWidth={1.5} />, title: 'Home Office', desc: 'Ergonomia e produtividade em projetos sob medida para o seu trabalho.' },
    { icon: <Building size={32} strokeWidth={1.5} />, title: 'Comercial', desc: 'Mobiliário corporativo que reflete a identidade e o profissionalismo da sua marca.' },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-gold"></span>
              Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight">
              Excelência em cada detalhe do seu projeto
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            Da concepção à montagem, oferecemos soluções personalizadas que transformam suas ideias em ambientes extraordinários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-serif text-dark mb-4 group-hover:text-gold transition-colors duration-300">{srv.title}</h3>
              <p className="text-gray-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "/projeto1.jpg",
    "/projeto2.jpg",
    "/projeto3.jpg",
    "/projeto4.jpg",
    "/projeto5.jpg",
    "/projeto6.jpg"
  ];

  return (
    <section id="projetos" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-2 font-light">Projetos que inspiram e encantam</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img 
                src={img} 
                alt={`Projeto Imoval ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <PenTool size={28} strokeWidth={1.5} />, title: 'Projeto Personalizado', desc: 'Projetos exclusivos pensados para atender suas necessidades.' },
    { icon: <Award size={28} strokeWidth={1.5} />, title: 'Qualidade Premium', desc: 'Materiais de alta durabilidade e acabamento impecável.' },
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: 'Garantia de 5 Anos', desc: 'Tranquilidade e segurança para o seu investimento.' },
    { icon: <Truck size={28} strokeWidth={1.5} />, title: 'Entregas no Prazo', desc: 'Compromisso com o cronograma estabelecido em contrato.' },
    { icon: <Leaf size={28} strokeWidth={1.5} />, title: 'Sustentabilidade', desc: 'Madeiras de reflorestamento e práticas conscientes.' },
    { icon: <Heart size={28} strokeWidth={1.5} />, title: 'Atendimento Humanizado', desc: 'Acompanhamento próximo em todas as etapas do projeto.' },
  ];

  return (
    <section className="py-24 bg-dark-lighter border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-light">Excelência em cada detalhe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="text-gold shrink-0">{feat.icon}</div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2 font-medium">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Raphael Monteiro', role: 'Cliente', text: 'Projeto e execução conforme combinado e dentro do prazo. Condições de pagamento flexíveis. Atendimento até mesmo fora do horário comercial. Recomendo!' },
    { name: 'Camilla Lima', role: 'Cliente', text: 'Agilidade e prazo atendido , me entregaram com 1 dia de pedido realizado, estão de parabéns!!' },
    { name: 'Sabrina R. B. de Freitas', role: 'Cliente', text: 'Tive uma ótima experiência com a Imoval Móveis Planejados, tudo feito com muito profissionalismo, atenção ao detalhes e compromisso.' },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-dark font-light">O que nossos clientes dizem sobre nós</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((test, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex justify-center gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{test.text}"</p>
              <h4 className="font-bold text-dark font-serif text-lg">{test.name}</h4>
              <span className="text-sm text-gray-500">{test.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="orcamento" className="py-24 bg-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Vamos Conversar?</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight mb-6 font-light">
              Transforme seu espaço em algo extraordinário
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Entre em contato agora e receba um orçamento personalizado. Nossa equipe está pronta para entender seu projeto e criar algo único para você.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Localização</h4>
                  <p className="text-gray-600 text-sm">Cuiabá, Mato Grosso</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center gap-2 shadow-xl shadow-green-500/30">
                <MessageCircle size={20} />
                Falar pelo WhatsApp
              </a>
              <a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 hover:border-[#25D366] text-dark font-medium px-8 py-4 rounded-full transition-colors flex items-center gap-2">
                <Phone size={20} />
                (65) 99271-2767
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3]">
              <img 
                src="/cta-image.jpg" 
                alt="Escritório Imoval" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/logo.png" alt="Imoval Móveis Planejados" className="h-20 md:h-24 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-8 text-sm">
              Transformamos ideias em ambientes cheios de beleza, funcionalidade e identidade. Marcenaria de alto padrão em Cuiabá.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 font-medium">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors text-sm">Nossos Projetos</a></li>
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 font-medium">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>Cuiabá, Mato Grosso</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <span>(65) 99271-2767</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Imoval Móveis Planejados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-light selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5565992712767?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center animate-bounce"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
