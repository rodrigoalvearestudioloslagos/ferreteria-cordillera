"use client";

import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Taladro Percutor 750W",
    marca: "Cordillera Pro",
    precio: 49990,
    categoria: "Herramientas Eléctricas",
    imagen: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&auto=format&fit=crop",
    specs: ["750W de potencia", "Mandril 13 mm", "Velocidad variable", "Uso profesional"],
  },
  {
    id: 2,
    nombre: "Esmeril Angular 4.5”",
    marca: "Master Tools",
    precio: 39990,
    categoria: "Herramientas Eléctricas",
    imagen: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=900&auto=format&fit=crop",
    specs: ["850W de potencia", "Disco 115 mm", "Protector ajustable", "Ideal para corte y desbaste"],
  },
  {
    id: 3,
    nombre: "Set Destornilladores 12 Piezas",
    marca: "FixLine",
    precio: 14990,
    categoria: "Herramientas Manuales",
    imagen: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=900&auto=format&fit=crop",
    specs: ["12 piezas", "Puntas imantadas", "Mango antideslizante", "Alta resistencia"],
  },
  {
    id: 4,
    nombre: "Pintura Interior Blanca 1 Galón",
    marca: "ColorMax",
    precio: 21990,
    categoria: "Pinturas",
    imagen: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&auto=format&fit=crop",
    specs: ["Terminación mate", "Secado rápido", "Lavable", "Alto rendimiento"],
  },
  {
    id: 5,
    nombre: "Ampolleta LED 12W",
    marca: "LuzPro",
    precio: 3990,
    categoria: "Electricidad",
    imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&auto=format&fit=crop",
    specs: ["12W de consumo", "Luz fría", "Alta eficiencia", "Duración prolongada"],
  },
  {
    id: 6,
    nombre: "Caja de Tornillos 200 Unidades",
    marca: "FixLine",
    precio: 6990,
    categoria: "Ferretería General",
    imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop",
    specs: ["200 unidades", "Acero resistente", "Uso interior y exterior", "Ideal para madera y metal"],
  },
  {
    id: 7,
    nombre: "Sierra Circular 1400W",
    marca: "PowerCut",
    precio: 89990,
    categoria: "Herramientas Eléctricas",
    imagen: "https://images.unsplash.com/photo-1604709178681-82325c04f8bd?w=900&auto=format&fit=crop",
    specs: ["1400W", "Disco 7 1/4”", "Corte preciso", "Guía lateral incluida"],
  },
  {
    id: 8,
    nombre: "Casco de Seguridad",
    marca: "SafeWork",
    precio: 8990,
    categoria: "Seguridad",
    imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop",
    specs: ["Alta resistencia", "Ajuste interior", "Uso en obra", "Certificación de seguridad"],
  },
  {
    id: 9,
    nombre: "Cinta Métrica 5 Metros",
    marca: "Medix",
    precio: 4990,
    categoria: "Herramientas Manuales",
    imagen: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=900&auto=format&fit=crop",
    specs: ["5 metros", "Carcasa reforzada", "Seguro de bloqueo", "Medición precisa"],
  },
  {
    id: 10,
    nombre: "Alargador Eléctrico 5 Metros",
    marca: "ElectroFix",
    precio: 12990,
    categoria: "Electricidad",
    imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&auto=format&fit=crop",
    specs: ["5 metros", "3 tomas", "Uso domiciliario", "Cable reforzado"],
  },
  {
    id: 11,
    nombre: "Silicona Multiuso Transparente",
    marca: "SealPro",
    precio: 3990,
    categoria: "Ferretería General",
    imagen: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=900&auto=format&fit=crop",
    specs: ["Uso interior y exterior", "Alta adherencia", "Resistente al agua", "Secado rápido"],
  },
  {
    id: 12,
    nombre: "Escalera Aluminio 6 Peldaños",
    marca: "AlturaMax",
    precio: 64990,
    categoria: "Construcción",
    imagen: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=900&auto=format&fit=crop",
    specs: ["6 peldaños", "Aluminio liviano", "Base antideslizante", "Alta estabilidad"],
  },
];

const arriendos = [
  {
    id: 101,
    nombre: "Demoledor Eléctrico",
    precio: 24990,
    periodo: "por día",
    imagen: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop",
    descripcion: "Ideal para demolición, retiro de cerámica y trabajos pesados.",
  },
  {
    id: 102,
    nombre: "Betonera 130 Litros",
    precio: 19990,
    periodo: "por día",
    imagen: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=900&auto=format&fit=crop",
    descripcion: "Perfecta para mezcla de cemento, mortero y hormigón en obra.",
  },
  {
    id: 103,
    nombre: "Hidrolavadora Industrial",
    precio: 14990,
    periodo: "por día",
    imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&auto=format&fit=crop",
    descripcion: "Limpieza profunda de fachadas, vehículos, pisos y maquinaria.",
  },
];

export default function Home() {
  const [carrito, setCarrito] = useState([]);
  const [vistaProducto, setVistaProducto] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.marca.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setCartOpen(true);
  };

  const eliminarDelCarrito = (indexEliminar) => {
    setCarrito(carrito.filter((_, index) => index !== indexEliminar));
  };

  const iniciarSesion = (e) => {
    e.preventDefault();
    setUsuario("Cliente");
    setLoginOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="bg-orange-500 text-white text-sm font-bold">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>🚚 Retiro en tienda y despacho a domicilio</span>
          <span className="hidden md:block">📞 +56 9 XXXX XXXX</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-black">
              FERRETERÍA <span className="text-orange-500">CORDILLERA</span>
            </h1>
            <p className="text-xs text-slate-400">
              Venta y arriendo de herramientas
            </p>
          </div>

          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-slate-800 px-3 md:px-4 py-3 rounded-xl text-sm md:text-base font-bold hover:bg-slate-700"
            >
              {usuario ? `Hola, ${usuario}` : "Iniciar sesión"}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="relative bg-orange-500 px-3 md:px-4 py-3 rounded-xl text-sm md:text-base font-black hover:bg-orange-600"
            >
              🛒 Carrito
              {carrito.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-orange-600 rounded-full px-2 text-xs">
                  {carrito.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-4">
          <div className="flex w-full">
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-l-xl px-5 py-3 text-black text-base md:text-lg font-semibold bg-white placeholder:text-slate-400 outline-none"
              placeholder="Buscar productos, herramientas o arriendos..."
            />

            <button className="bg-orange-500 px-5 md:px-8 rounded-r-xl font-black text-white hover:bg-orange-600">
              Buscar
            </button>
          </div>
        </div>

        <nav className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-3 flex gap-8 overflow-x-auto text-sm font-bold">
            <a href="#inicio">Inicio</a>
            <a href="#categorias">Categorías</a>
            <a href="#productos">Catálogo</a>
            <a href="#arriendos">Arriendos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {vistaProducto && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <img
              src={vistaProducto.imagen}
              alt={vistaProducto.nombre}
              className="w-full h-96 object-cover rounded-[2rem] shadow-xl"
            />

            <div>
              <button
                onClick={() => setVistaProducto(null)}
                className="mb-6 text-orange-500 font-black"
              >
                ← Volver al catálogo
              </button>

              <p className="text-orange-500 font-black">{vistaProducto.marca}</p>

              <h2 className="text-5xl font-black mt-2">{vistaProducto.nombre}</h2>

              <p className="text-slate-500 mt-4">
                Categoría: {vistaProducto.categoria}
              </p>

              <p className="text-orange-500 text-5xl font-black mt-6">
                ${vistaProducto.precio.toLocaleString("es-CL")}
              </p>

              <h3 className="font-black text-2xl mt-8 mb-4">Especificaciones</h3>

              <ul className="space-y-3">
                {vistaProducto.specs.map((spec) => (
                  <li key={spec}>✅ {spec}</li>
                ))}
              </ul>

              <button
                onClick={() => agregarCarrito(vistaProducto)}
                className="mt-8 bg-orange-500 text-white px-10 py-4 rounded-xl font-black hover:bg-orange-600"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </section>
      )}

      {!vistaProducto && (
        <>
          <section
            id="inicio"
            className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
          >
            <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange-500 font-black uppercase mb-4">
                  Ferretería profesional online
                </p>

                <h2 className="text-5xl md:text-7xl font-black leading-tight">
                  Compra y arrienda herramientas en un solo lugar
                </h2>

                <p className="mt-8 text-xl text-slate-300">
                  Herramientas, materiales, pinturas, electricidad, seguridad y
                  equipos de arriendo para construcción, reparación y mantención.
                </p>

                <div className="mt-10 flex gap-4 flex-wrap">
                  <a
                    href="#productos"
                    className="bg-orange-500 px-8 py-4 rounded-xl font-black hover:bg-orange-600"
                  >
                    Ver catálogo
                  </a>

                  <a
                    href="#arriendos"
                    className="border border-white px-8 py-4 rounded-xl font-black hover:bg-white hover:text-slate-950"
                  >
                    Ver arriendos
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {productos.slice(0, 4).map((p) => (
                  <div key={p.id} className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-xl">
                    <img src={p.imagen} alt={p.nombre} className="h-32 w-full object-cover" />
                    <div className="p-4">
                      <p className="text-xs font-bold text-orange-500">{p.marca}</p>
                      <h3 className="font-black text-sm">{p.nombre}</h3>
                      <p className="font-black text-lg mt-2">
                        ${p.precio.toLocaleString("es-CL")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="categorias" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-orange-500 font-black text-center">CATEGORÍAS</p>
              <h2 className="text-5xl font-black text-center mb-12">
                Compra por sección
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  "⚡ Eléctricas",
                  "🔧 Manuales",
                  "🏗️ Construcción",
                  "🦺 Seguridad",
                  "🎨 Pinturas",
                  "💡 Electricidad",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition cursor-pointer text-center font-black"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="productos" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-orange-500 font-black text-center">CATÁLOGO</p>
              <h2 className="text-5xl font-black text-center mb-12">
                Productos disponibles
              </h2>

              {busqueda && (
                <p className="text-center mb-10 text-slate-500">
                  Resultados para:{" "}
                  <span className="font-black text-slate-900">{busqueda}</span>
                </p>
              )}

              {productosFiltrados.length === 0 ? (
                <p className="text-center text-slate-500 text-xl">
                  No encontramos productos con esa búsqueda.
                </p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {productosFiltrados.map((producto) => (
                    <div
                      key={producto.id}
                      className="rounded-3xl overflow-hidden bg-slate-50 shadow-xl border border-slate-100"
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="h-56 w-full object-cover"
                      />

                      <div className="p-6">
                        <p className="text-xs font-black text-orange-500">
                          {producto.marca}
                        </p>

                        <h3 className="text-xl font-black mt-1">
                          {producto.nombre}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                          {producto.categoria}
                        </p>

                        <p className="text-orange-500 text-3xl font-black mt-4">
                          ${producto.precio.toLocaleString("es-CL")}
                        </p>

                        <div className="mt-6 flex gap-3">
                          <button
                            onClick={() => {
                              setVistaProducto(producto);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex-1 border border-slate-300 py-3 rounded-xl font-black hover:bg-slate-200"
                          >
                            Ver detalle
                          </button>

                          <button
                            onClick={() => agregarCarrito(producto)}
                            className="flex-1 bg-slate-950 text-white py-3 rounded-xl font-black hover:bg-orange-500"
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section id="arriendos" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-orange-500 font-black text-center">
                ARRIENDO DE HERRAMIENTAS
              </p>

              <h2 className="text-5xl font-black text-center mb-6">
                Equipos para trabajos por día o semana
              </h2>

              <p className="text-center text-slate-500 max-w-3xl mx-auto mb-12">
                Arrienda herramientas profesionales sin comprar equipos costosos.
                Ideal para obras, remodelaciones, mantenciones y trabajos puntuales.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {arriendos.map((item) => (
                  <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                    <img src={item.imagen} alt={item.nombre} className="h-56 w-full object-cover" />

                    <div className="p-6">
                      <h3 className="text-2xl font-black">{item.nombre}</h3>
                      <p className="text-slate-500 mt-3">{item.descripcion}</p>

                      <p className="text-orange-500 text-3xl font-black mt-5">
                        ${item.precio.toLocaleString("es-CL")}{" "}
                        <span className="text-base text-slate-500 font-bold">
                          {item.periodo}
                        </span>
                      </p>

                      <a
                        href="https://wa.me/569XXXXXXXX"
                        className="block text-center mt-6 bg-slate-950 text-white py-3 rounded-xl font-black hover:bg-orange-500"
                      >
                        Consultar disponibilidad
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-5xl font-black text-center mb-12">
                ¿Por qué comprar con nosotros?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  ["🚚", "Despacho rápido", "Recibe tus productos de forma rápida y segura."],
                  ["💲", "Precios competitivos", "Ofertas y valores convenientes para tus proyectos."],
                  ["🏆", "Productos de calidad", "Trabajamos con marcas reconocidas y confiables."],
                  ["📞", "Asesoría especializada", "Te ayudamos a elegir el producto correcto."],
                  ["📦", "Amplio stock", "Gran variedad de herramientas y materiales."],
                  ["🔒", "Compra segura", "Proceso simple y confiable para cotizar o comprar."],
                ].map(([icono, titulo, texto]) => (
                  <div key={titulo} className="bg-slate-50 rounded-3xl p-8 shadow-lg">
                    <div className="text-4xl">{icono}</div>
                    <h3 className="font-black text-xl mt-4">{titulo}</h3>
                    <p className="text-slate-500 mt-3">{texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contacto" className="bg-slate-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="text-orange-500 font-black">CONTACTO</p>

              <h2 className="text-5xl font-black mt-4">
                Cotiza ventas o arriendos
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-slate-800 rounded-3xl p-8">
                  📞
                  <h3 className="font-black mt-3">Teléfono</h3>
                  <p>+56 9 XXXX XXXX</p>
                </div>

                <div className="bg-slate-800 rounded-3xl p-8">
                  📧
                  <h3 className="font-black mt-3">Correo</h3>
                  <p>ventas@ferreteriacordillera.cl</p>
                </div>

                <div className="bg-slate-800 rounded-3xl p-8">
                  📍
                  <h3 className="font-black mt-3">Dirección</h3>
                  <p>Puerto Varas, Chile</p>
                </div>
              </div>

              <a
                href="https://wa.me/569XXXXXXXX"
                className="inline-block mt-12 bg-green-500 px-10 py-4 rounded-xl font-black hover:bg-green-600"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </section>
        </>
      )}

      <footer className="bg-slate-900 text-center text-slate-400 py-8">
        © 2026 Ferretería Cordillera — Venta y arriendo de herramientas
      </footer>

      {loginOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-6">
          <form
            onSubmit={iniciarSesion}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLoginOpen(false)}
              className="float-right text-2xl font-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-black mb-2">Iniciar sesión</h2>

            <p className="text-slate-500 mb-6">
              Accede a tus cotizaciones, compras y arriendos.
            </p>

            <input
              className="w-full border rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Correo electrónico"
            />

            <input
              className="w-full border rounded-xl px-4 py-3 mb-6 text-black"
              placeholder="Contraseña"
              type="password"
            />

            <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-black">
              Entrar
            </button>

            <p className="text-center text-sm text-slate-500 mt-4">
              Demo visual: no guarda usuarios todavía.
            </p>
          </form>
        </div>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-8 shadow-2xl overflow-y-auto">
            <button
              onClick={() => setCartOpen(false)}
              className="float-right text-2xl font-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-black mb-8">Tu carrito</h2>

            {carrito.length === 0 ? (
              <p className="text-slate-500">Tu carrito está vacío.</p>
            ) : (
              <div className="space-y-4">
                {carrito.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="bg-slate-100 rounded-2xl p-4"
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="font-black">{item.nombre}</p>
                        <p className="text-sm text-slate-500">{item.marca}</p>
                      </div>

                      <p className="font-black">
                        ${item.precio.toLocaleString("es-CL")}
                      </p>
                    </div>

                    <button
                      onClick={() => eliminarDelCarrito(index)}
                      className="mt-3 text-red-500 font-black text-sm hover:underline"
                    >
                      Eliminar producto
                    </button>
                  </div>
                ))}

                <div className="border-t pt-6 mt-6 flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span className="text-orange-500">
                    ${total.toLocaleString("es-CL")}
                  </span>
                </div>

                <a
                  href="https://wa.me/569XXXXXXXX"
                  className="block text-center bg-green-500 text-white py-4 rounded-xl font-black hover:bg-green-600"
                >
                  Enviar cotización por WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

