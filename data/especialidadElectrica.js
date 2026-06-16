import I from "./images";

const electrico = [
  { id:"iluminacion", nombre:"Iluminación", img:I.led,
    subcats:[
      { nombre:"Ampolletas LED", img:I.led, productos:[
          { nombre:"Ampolleta LED 9W E27 luz fría",  marca:"Philips",  precio:2990, img:I.led, specs:["9W consumo","Luz 6500K fría","Base E27","15.000h vida útil","Equivale a 60W incandescente"] },
          { nombre:"Ampolleta LED 12W E27 cálida",   marca:"Osram",    precio:3490, img:I.led, specs:["12W consumo","Luz 3000K cálida","Base E27","20.000h vida útil","Alto IRC"] },
          { nombre:"Ampolleta LED GU10 7W",          marca:"Ledvance", precio:4290, img:I.led, specs:["7W consumo","Haz 36°","Base GU10","25.000h vida útil","Apta dimmers"] },
          { nombre:"Ampolleta LED filamento 4W",     marca:"Philips",  precio:3990, img:I.led, specs:["4W consumo","Diseño vintage","Base E27","15.000h vida útil","Luz decorativa"] },
      ]},
      { nombre:"Paneles LED", img:I.led, productos:[
          { nombre:"Panel LED 18W empotrado", marca:"Ledvance", precio:12990, img:I.led, specs:["18W","1800 lúmenes","60x60cm","IP20","Luz neutra 4000K"] },
          { nombre:"Panel LED 24W cuadrado",  marca:"Osram",    precio:15990, img:I.led, specs:["24W","2400 lúmenes","60x60cm","IP20","Luz fría 6000K"] },
      ]},
      { nombre:"Tiras LED", img:I.led, productos:[
          { nombre:"Tira LED RGB 5m + control", marca:"Generic", precio:18990, img:I.led, specs:["5 metros","RGB 16 colores","Control remoto IR","12V DC","IP20 interior"] },
          { nombre:"Tira LED blanco frío 5m",   marca:"Generic", precio:12990, img:I.led, specs:["5 metros","6000K blanco frío","300 LEDs","12V DC","Adhesivo 3M"] },
      ]},
      { nombre:"Reflectores y Luminarias", img:I.led, productos:[
          { nombre:"Reflector LED 30W exterior",  marca:"Ledvance", precio:19990, img:I.led, specs:["30W","3000 lúmenes","IP65","Luz fría","Aluminio fundido"] },
          { nombre:"Luminaria de emergencia",      marca:"Exit",     precio:14990, img:I.led, specs:["3W LED","Batería Ni-Cd","2h autonomía","Carga automática","IP20"] },
      ]},
    ]},
  { id:"tableros", nombre:"Tableros y Protección", img:I.tablero,
    subcats:[
      { nombre:"Tableros eléctricos", img:I.tablero, productos:[
          { nombre:"Tablero 8 circuitos embutir",    marca:"Schneider", precio:28990, img:I.tablero, specs:["8 circuitos","Puerta con llave","Riel DIN","IP40","Para embutir"] },
          { nombre:"Tablero 12 circuitos embutir",   marca:"Schneider", precio:38990, img:I.tablero, specs:["12 circuitos","Puerta con llave","Riel DIN","IP40","Para embutir"] },
          { nombre:"Tablero 24 circuitos sobreponer", marca:"ABB",      precio:52990, img:I.tablero, specs:["24 circuitos","Doble puerta","IP54","Metálico","Sobreponer"] },
      ]},
      { nombre:"Interruptores automáticos", img:I.tablero, productos:[
          { nombre:"Termomagnético 1P 10A", marca:"Schneider", precio:4990,  img:I.tablero, specs:["1 polo 10A","Curva C","10kA ruptura","Riel DIN","220V AC"] },
          { nombre:"Termomagnético 1P 16A", marca:"Schneider", precio:4990,  img:I.tablero, specs:["1 polo 16A","Curva C","10kA ruptura","Riel DIN","220V AC"] },
          { nombre:"Termomagnético 2P 32A", marca:"ABB",       precio:12990, img:I.tablero, specs:["2 polos 32A","Curva C","10kA ruptura","Riel DIN","220V AC"] },
      ]},
      { nombre:"Diferenciales (RCCB)", img:I.tablero, productos:[
          { nombre:"Diferencial 2P 25A 30mA", marca:"Schneider", precio:24990, img:I.tablero, specs:["2 polos 25A","Sensibilidad 30mA","Tipo AC","Riel DIN","220V AC"] },
          { nombre:"Diferencial 4P 40A 30mA", marca:"ABB",       precio:48990, img:I.tablero, specs:["4 polos 40A","Sensibilidad 30mA","Tipo AC","Riel DIN","380V AC"] },
      ]},
    ]},
  { id:"conductores", nombre:"Conductores y Cables", img:I.cable,
    subcats:[
      { nombre:"Cable THHN unipolar", img:I.cable, productos:[
          { nombre:"Cable 1.5mm² THHN rojo x100m",  marca:"Nexans", precio:24990, img:I.cable, specs:["1.5mm²","THHN 75°C","600V","Cobre sólido","Rollo 100m"] },
          { nombre:"Cable 2.5mm² THHN negro x100m", marca:"Nexans", precio:34990, img:I.cable, specs:["2.5mm²","THHN 75°C","600V","Cobre sólido","Rollo 100m"] },
          { nombre:"Cable 4mm² THHN azul x100m",    marca:"Nexans", precio:54990, img:I.cable, specs:["4mm²","THHN 75°C","600V","Cobre sólido","Rollo 100m"] },
      ]},
      { nombre:"Cable bipolar y tripolar", img:I.cable, productos:[
          { nombre:"Cable bipolar 2x1.5mm² x50m",  marca:"Centelsa", precio:19990, img:I.cable, specs:["2x1.5mm²","PVC 60°C","300V","Cobre flexible","Rollo 50m"] },
          { nombre:"Cable tripolar 3x2.5mm² x50m", marca:"Centelsa", precio:32990, img:I.cable, specs:["3x2.5mm²","PVC 70°C","300V","Cobre flexible","Rollo 50m"] },
      ]},
      { nombre:"Manguera flexible", img:I.cable, productos:[
          { nombre:"Manguera 3x1.5mm² x50m", marca:"Centelsa", precio:29990, img:I.cable, specs:["3x1.5mm²","Cubierta PVC","300/500V","Flexible","Rollo 50m"] },
          { nombre:"Manguera 4x2.5mm² x50m", marca:"Centelsa", precio:49990, img:I.cable, specs:["4x2.5mm²","Cubierta PVC","300/500V","Flexible","Rollo 50m"] },
      ]},
    ]},
  { id:"enchufes", nombre:"Enchufes, Tomas e Interruptores", img:I.enchufe,
    subcats:[
      { nombre:"Enchufes e interruptores domiciliarios", img:I.enchufe, productos:[
          { nombre:"Enchufe doble 16A",      marca:"Legrand", precio:3990, img:I.enchufe, specs:["2 tomas","16A 220V","Con tierra","Tapa blanca","Embutir"] },
          { nombre:"Interruptor simple 10A", marca:"Legrand", precio:2990, img:I.enchufe, specs:["1 vía","10A 220V","Tapa blanca","Embutir","Led indicador"] },
          { nombre:"Interruptor escalera",   marca:"Legrand", precio:4490, img:I.enchufe, specs:["2 vías","10A 220V","Tapa blanca","Embutir","Conmutado"] },
      ]},
      { nombre:"Tomas industriales", img:I.enchufe, productos:[
          { nombre:"Toma industrial 3P+T 16A IP44", marca:"Gewiss", precio:12990, img:I.enchufe, specs:["3P+T 16A","IP44","220V","Azul uso normal","CEE 17"] },
          { nombre:"Toma industrial 3P+T 32A IP44", marca:"Gewiss", precio:18990, img:I.enchufe, specs:["3P+T 32A","IP44","220V","Rojo fuerza","CEE 17"] },
      ]},
      { nombre:"Multicontactos y alargadores", img:I.enchufe, productos:[
          { nombre:"Multicontacto 5 tomas + USB", marca:"Generic", precio:8990,  img:I.enchufe, specs:["5 tomas","2 puertos USB","Protección sobretensión","Interruptor","Cable 1.5m"] },
          { nombre:"Alargador 10m 3 tomas",       marca:"Generic", precio:12990, img:I.enchufe, specs:["3 tomas","Cable 10m","2.5mm²","16A","Con tierra"] },
      ]},
    ]},
  { id:"canalizacion", nombre:"Canalización y Accesorios", img:I.conduit,
    subcats:[
      { nombre:"Tubo conduit PVC", img:I.conduit, productos:[
          { nombre:"Tubo conduit PVC 3/4\" x3m",     marca:"Tigre",  precio:2490, img:I.conduit, specs:["3/4\"","PVC rígido","3m largo","Naranja","UL Listed"] },
          { nombre:"Tubo conduit PVC 1\" x3m",        marca:"Tigre",  precio:3490, img:I.conduit, specs:["1\"","PVC rígido","3m largo","Naranja","UL Listed"] },
          { nombre:"Tubo conduit metálico 3/4\" x3m", marca:"Conduit",precio:4990, img:I.conduit, specs:["3/4\"","Acero galvanizado","3m largo","EMT","UL Listed"] },
      ]},
      { nombre:"Cajas y accesorios", img:I.conduit, productos:[
          { nombre:"Caja paso 15x15cm PVC",  marca:"Plastex", precio:4990, img:I.conduit, specs:["15x15x10cm","PVC gris","IP55","Tapa atornillada","4 entradas"] },
          { nombre:"Curva 90° conduit 3/4\"", marca:"Tigre",  precio:890,  img:I.conduit, specs:["3/4\"","90°","PVC rígido","Naranja","Pack x5"] },
          { nombre:"Abrazadera conduit 3/4\"",marca:"Generic",precio:590,  img:I.conduit, specs:["3/4\"","Metálica","Tornillo incluido","Galvanizada","Pack x10"] },
      ]},
    ]},
];


export default electrico;
