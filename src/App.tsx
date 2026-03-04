import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const designers = [
  {
    id: 1,
    name: "Amarante",
    subtitle: "nació de la amistad y la complicidad entre dos mujeres colombianas:",
    description: "Antonia Villegas y Manuela Cordovez. Amarante es, ante todo, una marca creada por mujeres y pensada para mujeres que quieren sentirse seguras, elegantes y auténticas, con accesorios que elevan lo cotidiano y se convierten en verdaderos protagonistas.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
    tabText: "Manual de Uso"
  },
  {
    id: 2,
    name: "Zierra Leona",
    subtitle: "nació del sueño que compartimos mi mamá y yo",
    description: "Unir nuestro amor por los animales, la naturaleza y el diseño en una marca con propósito. Desde el inicio quisimos crear algo más que ropa; una marca para almas jóvenes, libres y auténticas, que haga sentir a cada mujer en su mejor versión: segura, poderosa y diferente.",
    image: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=600&auto=format&fit=crop",
    tabText: "Manual de Uso"
  },
  {
    id: 3,
    name: "Beatriz y Maria Jose",
    subtitle: "creando un legado que trasciende generaciones:",
    description: "En Legado creemos que cada pieza que creamos es más que un accesorio: es un objeto que acompaña historias, decisiones y momentos que trascienden generaciones.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=600&auto=format&fit=crop",
    tabText: "Legado"
  },
  {
    id: 4,
    name: "Johanna Ortiz",
    subtitle: "la alegría de vivir plasmada en cada puntada:",
    description: "Reconocida mundialmente por sus boleros, estampados tropicales y siluetas fluidas. Regalar Johanna Ortiz es obsequiar una pieza de arte que invita a celebrar la vida, perfecta para la mujer que disfruta ser el centro de atención con gracia y naturalidad.",
    image: "https://images.unsplash.com/photo-1515347619362-71efdf18c01b?q=80&w=600&auto=format&fit=crop",
    tabText: "Esenciales"
  },
  {
    id: 5,
    name: "Maygel Coronel",
    subtitle: "redefiniendo el resort wear con versatilidad:",
    description: "Sus piezas, que transitan perfectamente de la playa a la ciudad, son el regalo ideal para la mujer contemporánea. Volúmenes dramáticos y tejidos que abrazan el cuerpo en una paleta de colores que evoca la calidez del Caribe colombiano.",
    image: "https://images.unsplash.com/photo-1550614000-4b95dd10cb64?q=80&w=600&auto=format&fit=crop",
    tabText: "Resort"
  },
  {
    id: 6,
    name: "Pepa Pombo",
    subtitle: "el legado del tejido de punto llevado a la alta moda:",
    description: "Una herencia familiar que se traduce en prendas multifuncionales y llenas de color. Un regalo de Pepa Pombo es una inversión en diseño inteligente, donde cada pieza puede transformarse y adaptarse a múltiples ocasiones con absoluta sofisticación.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
    tabText: "Herencia"
  },
  {
    id: 7,
    name: "Silvia Tcherassi",
    subtitle: "pionera del chic latinoamericano en el mundo:",
    description: "Sus colecciones son sinónimo de lujo desestructurado y elegancia sin esfuerzo. Regalar una pieza de Silvia Tcherassi es entregar un ícono de la moda, donde la innovación textil y la impecable confección se encuentran en perfecta armonía.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    tabText: "Iconos"
  },
  {
    id: 8,
    name: "Daniella Batlle",
    subtitle: "romance contemporáneo para la mujer moderna:",
    description: "Siluetas etéreas y detalles delicados que capturan la esencia de la feminidad actual. Sus creaciones son el regalo perfecto para quien aprecia la sutileza, los acabados manuales y las prendas que cuentan una historia de amor por el diseño.",
    image: "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?q=80&w=600&auto=format&fit=crop",
    tabText: "Romance"
  },
  {
    id: 9,
    name: "Kika Vargas",
    subtitle: "proporciones excéntricas y romanticismo puro:",
    description: "Conocida por sus volúmenes exagerados y estampados pintados a mano. Sus piezas combinan la herencia arquitectónica con una feminidad lúdica, creando prendas que son verdaderas obras de arte ponibles.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=600&auto=format&fit=crop",
    tabText: "Volumen"
  },
  {
    id: 10,
    name: "Agua Bendita",
    subtitle: "el poder del trabajo artesanal colombiano:",
    description: "Cada pieza cuenta una historia a través de bordados hechos a mano por artesanas colombianas. Una mezcla perfecta de maximalismo, color y técnicas tradicionales llevadas al escenario global.",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=600&auto=format&fit=crop",
    tabText: "Artesanal"
  },
  {
    id: 11,
    name: "Waimari",
    subtitle: "la brisa del caribe en cada detalle:",
    description: "Piezas atemporales con encajes delicados y siluetas relajadas. Perfectas para la mujer que busca elegancia sin esfuerzo, inspiradas en la estética vintage y el estilo de vida costero.",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=600&auto=format&fit=crop",
    tabText: "Brisa"
  },
  {
    id: 12,
    name: "Andrés Otálora",
    subtitle: "celebra la feminidad a través de la sofisticación:",
    description: "Con más de dos décadas en la industria, sus diseños destacan por estampados exclusivos y siluetas que realzan la figura. Una propuesta ideal para regalar elegancia atemporal.",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=600&auto=format&fit=crop",
    tabText: "Colección"
  }
];

const mockProducts = [
  { id: 1, name: "Carnaval", designer: "VOIE", price: "$578.200", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=400&auto=format&fit=crop", tags: ["Exclusivo Malva", "New in"] },
  { id: 2, name: "Blusa Daphne", designer: "PAMELA STEVENSON", price: "$800.000", image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=400&auto=format&fit=crop", tags: ["New in"] },
  { id: 3, name: "Jeans Western Embroidered", designer: "PIANI", price: "$450.000", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop", tags: ["New in"] },
  { id: 4, name: "Cartera en Cuero", designer: "AMARANTE", price: "$620.000", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400&auto=format&fit=crop", tags: [] },
  { id: 5, name: "Traje de Baño Enterizo", designer: "MAYGEL CORONEL", price: "$580.000", image: "https://images.unsplash.com/photo-1564222256577-45e728f2c611?q=80&w=400&auto=format&fit=crop", tags: ["Exclusivo Malva"] },
  { id: 6, name: "Vestido de Punto", designer: "PEPA POMBO", price: "$1,100.000", image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=400&auto=format&fit=crop", tags: ["New in"] },
];

const RealisticPaperclip = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 60 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(2px 3px 3px rgba(0,0,0,0.3))' }}
  >
    <path 
      d="M25 90 V30 C25 15 45 15 45 30 V95 C45 115 15 115 15 95 V20 C15 5 35 5 35 20 V80" 
      stroke="#9ca3af" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M25 90 V30 C25 15 45 15 45 30 V95 C45 115 15 115 15 95 V20 C15 5 35 5 35 20 V80" 
      stroke="#f3f4f6" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      strokeOpacity="0.6"
      transform="translate(-1, -1)"
    />
  </svg>
);

function FolderCard({ designer, index }: { designer: typeof designers[0], index: number }) {
  return (
    <motion.div 
      id={`designer-${designer.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-[180px] relative pl-8 md:pl-10 pt-4 w-full group flex flex-col h-full min-h-[450px]"
    >
      {/* Tab */}
      <div className="absolute left-0 top-12 md:top-16 w-8 md:w-10 h-28 md:h-36 bg-[var(--color-folder)] rounded-l-xl border border-[var(--color-folder-border)] border-r-0 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:-translate-x-1 z-0">
        <span className="-rotate-90 whitespace-nowrap font-serif italic text-gray-500 tracking-wider text-xs md:text-sm">
          {designer.tabText}
        </span>
      </div>
      
      {/* Main Folder */}
      <div className="bg-[var(--color-folder)] rounded-r-2xl rounded-bl-2xl rounded-tl-md border border-[var(--color-folder-border)] p-5 md:p-6 shadow-sm relative z-10 w-full flex flex-col flex-grow transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        
        {/* Text Content */}
        <div className="mb-6 flex-grow">
          <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2 leading-tight">
            <span className="italic font-semibold">{designer.name}</span>{' '}
            <span className="text-sm md:text-base italic text-gray-700 font-normal block mt-1">{designer.subtitle}</span>
          </h3>
          <p className="font-sans text-xs md:text-sm text-gray-800 leading-relaxed font-medium line-clamp-4">
            {designer.description}
          </p>
        </div>

        {/* Polaroid Image */}
        <div className="relative mt-auto mb-4">
          {/* Paperclip */}
          <div className="absolute -top-5 -left-4 z-20 transform -rotate-[25deg] w-10 h-20">
             <RealisticPaperclip className="w-full h-full" />
          </div>
          
          <div className="bg-[#FDFCFB] p-2 shadow-md transform rotate-1 group-hover:rotate-0 transition-transform duration-500 relative flex">
            <div className="w-[85%] overflow-hidden bg-gray-200">
              <img 
                src={designer.image} 
                alt={`Colección de ${designer.name}`} 
                className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                loading="lazy"
              />
            </div>
            <div className="w-[15%] flex items-center justify-center">
               <span 
                 className="font-serif italic text-sm md:text-base text-gray-400 tracking-widest"
                 style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
               >
                 {designer.name}
               </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-12 bg-white/50 my-12 border-y border-[var(--color-folder-border)]">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-6">
          <h4 className="font-serif text-2xl italic text-gray-900">Selección de Regalos</h4>
          <div className="flex gap-2 hidden md:flex">
            <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-[2px] pb-6 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockProducts.map((product) => (
            <div key={product.id} className="min-w-[85vw] md:min-w-[calc(33.333%-2px)] snap-start group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-2 text-xs font-sans uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Producto
                  </span>
                </div>
              </div>
              <div className="text-left px-1">
                <h5 className="font-sans font-semibold text-gray-900 text-sm uppercase tracking-wider mb-1">{product.designer}</h5>
                <p className="font-sans text-gray-700 text-sm mb-0.5">{product.name}</p>
                <p className="font-sans text-gray-700 text-sm mb-1">{product.price}</p>
                {product.tags && product.tags.length > 0 && (
                  <p className="font-sans text-gray-500 text-sm mt-1">
                    {product.tags.map((tag, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="mx-1.5">|</span>}
                        {tag}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCollage() {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Text Section */}
      <div className="w-full md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-none mb-6"
        >
          <span className="block font-normal">Fashion</span>
          <span className="block italic font-semibold">LEADERS</span>
        </motion.h1>
      </div>

      {/* Collage Section */}
      <div className="w-full md:w-2/3 relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-3xl h-full"
        >
          {/* Collage Images - Absolute positioned to look like scattered photos */}
          <div className="absolute top-[10%] left-[5%] w-[30%] aspect-[3/4] bg-gray-200 shadow-lg transform -rotate-6 z-10 p-2 bg-white">
            <img src={designers[0].image} className="w-full h-full object-cover filter grayscale" alt="" />
            <RealisticPaperclip className="absolute -top-4 -left-4 w-12 h-24 transform -rotate-12" />
          </div>
          
          <div className="absolute top-[5%] left-[35%] w-[25%] aspect-square bg-gray-200 shadow-lg transform rotate-3 z-20 p-2 bg-white">
            <img src={designers[1].image} className="w-full h-full object-cover filter grayscale" alt="" />
          </div>
          
          <div className="absolute top-[15%] right-[10%] w-[28%] aspect-[4/5] bg-gray-200 shadow-lg transform rotate-6 z-10 p-2 bg-white">
            <img src={designers[2].image} className="w-full h-full object-cover filter grayscale" alt="" />
            <RealisticPaperclip className="absolute -top-6 right-4 w-10 h-20 transform rotate-45" />
          </div>
          
          <div className="absolute bottom-[15%] left-[15%] w-[25%] aspect-square bg-gray-200 shadow-lg transform rotate-12 z-30 p-2 bg-white">
            <img src={designers[3].image} className="w-full h-full object-cover filter grayscale" alt="" />
          </div>
          
          <div className="absolute bottom-[10%] left-[45%] w-[32%] aspect-[4/3] bg-gray-200 shadow-xl transform -rotate-2 z-40 p-2 bg-white">
            <img src={designers[4].image} className="w-full h-full object-cover filter grayscale" alt="" />
          </div>
          
          <div className="absolute bottom-[20%] right-[15%] w-[22%] aspect-[3/4] bg-gray-200 shadow-lg transform -rotate-12 z-20 p-2 bg-white">
            <img src={designers[5].image} className="w-full h-full object-cover filter grayscale" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DesignerDropdown({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filtrar por Diseñador");

  const handleSelect = (designer: typeof designers[0] | null) => {
    if (designer) {
      setSelected(designer.name);
      setIsOpen(false);
      const element = document.getElementById(`designer-${designer.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setSelected("Filtrar por Diseñador");
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.designer-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`sticky z-40 w-full bg-[var(--color-bg-main)]/95 backdrop-blur-md border-y border-[var(--color-folder-border)] mb-8 shadow-sm transition-all duration-300 ${isScrolled ? 'top-[53px] py-2' : 'top-[81px] py-3'}`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 flex justify-center designer-dropdown">
        <div className="relative w-full max-w-xs md:max-w-sm">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between bg-[var(--color-folder)] border border-[var(--color-folder-border)] px-5 rounded-sm shadow-sm text-sm font-sans font-medium text-gray-800 hover:bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
          >
            <span className="font-serif italic text-base">{selected}</span>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full mt-1 bg-white border border-[var(--color-folder-border)] rounded-sm shadow-xl overflow-hidden z-50"
              >
                <ul className="max-h-64 overflow-y-auto py-2">
                  <li>
                    <button
                      onClick={() => handleSelect(null)}
                      className="w-full text-left px-5 py-2.5 text-sm font-serif italic text-gray-500 hover:bg-[var(--color-bg-main)] hover:text-black transition-colors"
                    >
                      Todos los diseñadores
                    </button>
                  </li>
                  {designers.map(d => (
                    <li key={d.id}>
                      <button
                        onClick={() => handleSelect(d)}
                        className="w-full text-left px-5 py-2.5 text-sm font-serif text-gray-800 hover:bg-[var(--color-bg-main)] hover:text-black transition-colors"
                      >
                        {d.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chunk designers into groups of 3
  const chunkedDesigners = [];
  for (let i = 0; i < designers.length; i += 3) {
    chunkedDesigners.push(designers.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen font-sans selection:bg-gray-800 selection:text-white pb-24">
      {/* Navigation */}
      <nav className={`w-full px-6 md:px-12 flex justify-between items-center border-b border-[var(--color-folder-border)] sticky top-0 bg-[var(--color-bg-main)]/90 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className={`font-serif font-bold tracking-widest uppercase transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Malva</div>
        <div className={`font-sans uppercase tracking-widest font-medium transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-xs md:text-sm'}`}>The Gift Guide</div>
      </nav>

      {/* Hero Collage Section */}
      <HeroCollage />

      {/* Intro Text */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <p className="font-sans text-gray-800 text-sm md:text-base leading-relaxed font-medium">
          En Malva celebramos a las mujeres que transforman la industria con carácter y estilo. 
          Fashion Leaders es un homenaje a su creatividad y determinación, a las mujeres que 
          están construyendo y redefiniendo el futuro de la moda en Colombia.
        </p>
      </div>

      <DesignerDropdown isScrolled={isScrolled} />

      {/* Main Content: Alternating Designers and Products */}
      <main>
        {chunkedDesigners.map((chunk, chunkIndex) => (
          <div key={`chunk-${chunkIndex}`} className="mb-8">
            {/* Designers Row/Carousel */}
            <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {chunk.map((designer, index) => (
                  <div key={designer.id} className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center">
                    <FolderCard designer={designer} index={index} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Carousel for this group */}
            <ProductCarousel />
          </div>
        ))}
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
