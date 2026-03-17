import { motion } from 'motion/react';
import { Smile, Music, User, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const ctaLink = "https://forms.gle/EnzH8K8SybTrCBbm9";

  return (
    <div className="min-h-screen bg-[#FFF9E6] text-[#1A1A1A] font-sans selection:bg-[#D9381E] selection:text-white overflow-x-hidden">

      {/* Header */}
      <header className="absolute top-0 w-full p-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-start">
          <img
            src={`${import.meta.env.BASE_URL}logo-sergio.png`}
            alt="Ksiloco Teatro y Mimo Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 z-10"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] uppercase">
              KSI CLOWN
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Clown, mimo, máscaras y música en vivo
            </p>
          </div>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#B82D16] text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Reserva tu entrada <ArrowRight className="w-5 h-5" />
          </a>

          <ul className="space-y-3 pt-6 border-t border-gray-200/60">
            {[
              "Un espectáculo lleno de humor y poesía.",
              "Cada escena abre una pequeña ventana a la imaginación.",
              "Un universo escénico donde lo poético, lo dramático y lo cómico se encuentran."
            ].map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#D9381E] shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D9381E]/20 to-transparent z-10 mix-blend-overlay"></div>
            <img
              src={`${import.meta.env.BASE_URL}webventa2.jpg`}
              alt="Sergio Otero en el escenario"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D9381E] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">¿Por qué no te lo puedes perder?</h2>
            <p className="text-gray-600 text-lg">Un viaje escénico donde lo cómico y lo poético se encuentran.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Smile className="w-8 h-8 text-[#D9381E]" />,
                title: "Humor y Poesía",
                desc: "Una propuesta escénica donde el humor convive con la poesía visual y momentos de pura emoción."
              },
              {
                icon: <Music className="w-8 h-8 text-[#D9381E]" />,
                title: "Música en Vivo",
                desc: "Cuatro, clarinete y piano interpretados en directo para acompañar la acción escénica."
              },
              {
                icon: <User className="w-8 h-8 text-[#D9381E]" />,
                title: "Mimo y Máscaras",
                desc: "El cuerpo y el gesto cuentan historias más allá de las palabras. El silencio invita a imaginar."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-[#FFF9E6] p-8 rounded-3xl border border-yellow-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-black text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Quiero mi entrada
            </a>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-[#D9381E] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="space-y-2 flex-1">
              <h3 className="text-3xl font-bold">Sergio Otero</h3>
              <p className="text-red-100 text-lg font-medium">Ksiloco Teatro y Mimo</p>
            </div>
            <div className="h-px w-full md:w-px md:h-16 bg-red-400/50"></div>
            <div className="flex-1">
              <p className="text-xl font-medium leading-relaxed">
                "Más de 4 décadas de trayectoria internacional combinando humor, poesía visual y expresión corporal."
              </p>
            </div>
            <div className="h-px w-full md:w-px md:h-16 bg-red-400/50"></div>
            <div className="flex-1 flex justify-center md:justify-end gap-6 opacity-80">
              <span className="font-bold text-lg tracking-wider uppercase">España</span>
              <span className="font-bold text-lg tracking-wider uppercase">Italia</span>
              <span className="font-bold text-lg tracking-wider uppercase">Canadá</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-[#FFF9E6] px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight">Lo que dice el público</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lita Martínez",
                role: "Espectadora",
                text: "Existen mimos que din o que as palabras non dirían, Sergio é un deles. Enche a vida doutras persoas e iso é terapéutico.",
              },
              {
                name: "Carlos R.",
                role: "Asistente al estreno",
                text: "La música en vivo y las máscaras crean una atmósfera única. Te olvidas de todo por un rato y te dejas llevar por la historia. Increíble.",
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Call Section */}
      <section className="py-24 bg-[#1A1A1A] text-white px-6 relative overflow-hidden">
        {/* Background texture/pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            No te quedes sin vivir esta experiencia única.
          </h2>
          <p className="text-2xl text-gray-400 font-medium">
            Estreno en el auditorio de Teis. <br /> 25 de Abril de 2026.
          </p>
          <div className="pt-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#B82D16] text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(217,56,30,0.4)]"
            >
              Apúntate a la función <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8 text-center text-sm">
        <p>© 2026 Ksiloco Teatro y Mimo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
