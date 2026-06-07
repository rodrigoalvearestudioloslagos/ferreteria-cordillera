export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-black">
              FERRETERÍA <span className="text-orange-500">CORDILLERA</span>
            </h1>
            <p className="text-xs text-slate-300">
              Calidad, variedad y los mejores precios
            </p>
          </div>

          <nav className="hidden md:flex gap-8 font-semibold">
            <a href="#inicio">Inicio</a>
            <a href="#categorias">Categorías</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="bg-orange-500 px-5 py-3 rounded-xl font-bold hover:bg-orange-600"
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="mb-4 text-orange-500 font-bold uppercase">
              Ferretería Profesional
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              TODO LO QUE
              <br />
              NECESITAS,
              <br />
              <span className="text-orange-500">
                LO TENEMOS
              </span>
            </h2>

            <p className="mt-8 text-xl text-slate-300">
              Herramientas, materiales, pinturas,
              electricidad y mucho más para tus proyectos.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#productos"
                className="bg-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-600"
              >
                Ver Productos
              </a>

              <a
                href="#contacto"
                className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl">
              <div className="text-center text-[150px]">
                🔨
              </div>

              <h3 className="text-center text-2xl font-bold">
                Herramientas y Materiales
              </h3>

              <p className="text-center text-slate-400 mt-3">
                Imagen referencial para futura fotografía comercial.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold">
              CATEGORÍAS
            </p>

            <h2 className="text-5xl font-black text-slate-900">
              Categorías Destacadas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              "⚡ Herramientas Eléctricas",
              "🔧 Herramientas Manuales",
              "🏗️ Construcción",
              "🧰 Ferretería General",
              "🎨 Pinturas",
              "💡 Electricidad",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
              >
                <p className="font-bold">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section
        id="productos"
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold">
              PRODUCTOS
            </p>

            <h2 className="text-5xl font-black">
              Productos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["Taladro Percutor", "$49.990"],
              ["Esmeril Angular", "$39.990"],
              ["Set Destornilladores", "$14.990"],
            ].map(([nombre, precio]) => (

              <div
                key={nombre}
                className="rounded-3xl shadow-xl overflow-hidden bg-slate-50"
              >
                <div className="h-56 bg-slate-300 flex items-center justify-center text-7xl">
                  🛠️
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    {nombre}
                  </h3>

                  <p className="text-orange-500 text-3xl font-black mt-3">
                    {precio}
                  </p>

                  <button className="mt-6 bg-slate-950 text-white px-6 py-3 rounded-xl font-bold">
                    Cotizar
                  </button>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Mayor presencia digital",
              "Imagen profesional",
              "Canal permanente de ventas",
              "Acceso desde cualquier dispositivo",
              "Tecnología moderna y segura",
              "Atención rápida por WhatsApp",
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                ✅ {item}
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black mb-10">
            Horarios de Atención
          </h2>

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
            <p className="text-xl">
              Lunes a Viernes
            </p>

            <p className="font-black text-3xl text-orange-500">
              08:00 - 18:00
            </p>

            <div className="my-8" />

            <p className="text-xl">
              Sábado
            </p>

            <p className="font-black text-3xl text-orange-500">
              09:00 - 14:00
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="bg-slate-950 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-orange-500 font-bold">
            CONTACTO
          </p>

          <h2 className="text-5xl font-black mt-4">
            Solicita tu Cotización
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-slate-800 rounded-2xl p-6">
              📞
              <h3 className="font-bold mt-3">
                Teléfono
              </h3>
              <p>+56 9 XXXX XXXX</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              📧
              <h3 className="font-bold mt-3">
                Correo
              </h3>
              <p>ventas@ferreteriacordillera.cl</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              📍
              <h3 className="font-bold mt-3">
                Dirección
              </h3>
              <p>Puerto Varas, Chile</p>
            </div>

          </div>

          <a
            href="#"
            className="inline-block mt-12 bg-green-500 px-10 py-4 rounded-xl font-bold text-white hover:bg-green-600"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 text-center text-slate-400 py-8">
        © 2026 Ferretería Cordillera
      </footer>

    </main>
  );
}

