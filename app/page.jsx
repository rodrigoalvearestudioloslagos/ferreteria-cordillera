"use client";
import { useState } from "react";
import Image from "next/image";

const I = {
  hero:         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&fit=crop",
  led:          "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
  tablero:      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  cable:        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  enchufe:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  conduit:      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  motor:        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
  plc:          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  solar:        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  multimetro:   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
  taladro:      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
  pincel:       "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
  casco:        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80",
  obra:         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  tornillo:     "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=600&q=80",
  demoledor:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  betonera:     "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  hidrolavadora:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  andamio:      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  sectionBg:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
};

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

const potencia = [
  { id:"motores", nombre:"Motores y Variadores", img:I.motor,
    subcats:[
      { nombre:"Motores eléctricos trifásicos", img:I.motor, productos:[
          { nombre:"Motor trifásico 1HP 4 polos", marca:"WEG", precio:89990,  img:I.motor, specs:["1HP / 0.75kW","4 polos 1500 RPM","Trifásico 380V","IE2","Carcasa aluminio"] },
          { nombre:"Motor trifásico 2HP 4 polos", marca:"WEG", precio:129990, img:I.motor, specs:["2HP / 1.5kW","4 polos 1500 RPM","Trifásico 380V","IE2","IP55"] },
          { nombre:"Motor trifásico 5HP 4 polos", marca:"ABB", precio:219990, img:I.motor, specs:["5HP / 3.7kW","4 polos 1500 RPM","Trifásico 380V","IE3 premium","IP55"] },
      ]},
      { nombre:"Variadores de frecuencia", img:I.motor, productos:[
          { nombre:"Variador 1.5kW trifásico 380V", marca:"Schneider", precio:149990, img:I.motor, specs:["1.5kW / 2HP","Entrada 380V 3F","Salida 0-400Hz","Display LCD","IP20"] },
          { nombre:"Variador 4kW trifásico 380V",   marca:"ABB",       precio:229990, img:I.motor, specs:["4kW / 5.5HP","Entrada 380V 3F","Control vectorial","Modbus RTU","IP20"] },
      ]},
      { nombre:"Arrancadores suaves", img:I.motor, productos:[
          { nombre:"Arrancador suave 7.5kW", marca:"Schneider", precio:189990, img:I.motor, specs:["7.5kW","Trifásico 380V","By-pass integrado","Display LED","IP20"] },
          { nombre:"Arrancador suave 15kW",  marca:"ABB",       precio:289990, img:I.motor, specs:["15kW","Trifásico 380V","Protección electrónica","Modbus","IP20"] },
      ]},
    ]},
  { id:"automatizacion", nombre:"Automatización y Control", img:I.plc,
    subcats:[
      { nombre:"Contactores", img:I.plc, productos:[
          { nombre:"Contactor 9A bobina 220V",  marca:"Schneider", precio:18990, img:I.plc, specs:["9A / 4kW","Bobina 220V AC","3P + 1NA","Riel DIN","AC-3"] },
          { nombre:"Contactor 18A bobina 220V", marca:"Schneider", precio:26990, img:I.plc, specs:["18A / 7.5kW","Bobina 220V AC","3P + 1NA","Riel DIN","AC-3"] },
          { nombre:"Contactor 32A bobina 220V", marca:"ABB",       precio:38990, img:I.plc, specs:["32A / 15kW","Bobina 220V AC","3P + 1NA","Riel DIN","AC-3"] },
      ]},
      { nombre:"Relés térmicos y de tiempo", img:I.plc, productos:[
          { nombre:"Relé térmico ajustable 6-9A", marca:"Schneider", precio:14990, img:I.plc, specs:["Rango 6-9A","Clase 10A","Reset manual/auto","Riel DIN","Señalización"] },
          { nombre:"Relé de tiempo 0.1s-60min",   marca:"Schneider", precio:16990, img:I.plc, specs:["Multirango","220V AC","Retardo conexión","Riel DIN","LED indicador"] },
      ]},
      { nombre:"PLC y controladores", img:I.plc, productos:[
          { nombre:"PLC compacto 14 I/O 24VDC", marca:"Siemens", precio:189990, img:I.plc, specs:["8 entradas DI","6 salidas DO","24VDC","Programación Ladder","Ethernet"] },
          { nombre:"HMI 7\" táctil color",       marca:"Weintek", precio:249990, img:I.plc, specs:["7\" TFT color","800x480px","Touch resistivo","RS232/485/Ethernet","12/24V DC"] },
      ]},
      { nombre:"Sensores industriales", img:I.plc, productos:[
          { nombre:"Sensor inductivo M18 NPN NO", marca:"Sick",  precio:22990, img:I.plc, specs:["M18 cilíndrico","Alcance 8mm","NPN NO","12-24VDC","IP67"] },
          { nombre:"Sensor fotoeléctrico difuso",  marca:"Omron", precio:34990, img:I.plc, specs:["Alcance 500mm","PNP NO/NC","12-24VDC","IP67","Ajuste potenciómetro"] },
      ]},
    ]},
  { id:"generacion", nombre:"Generación y Respaldo", img:I.solar,
    subcats:[
      { nombre:"UPS y respaldo de energía", img:I.solar, productos:[
          { nombre:"UPS 1kVA/900W línea interactiva", marca:"APC",  precio:129990, img:I.solar, specs:["1000VA/900W","8 tomas","Batería 12V/9Ah","USB monitoreo","Torre/Rack"] },
          { nombre:"UPS 3kVA/2700W online",           marca:"Eaton", precio:349990, img:I.solar, specs:["3000VA/2700W","Doble conversión","Autonomía 7min","RS232","Torre"] },
      ]},
      { nombre:"Energía solar", img:I.solar, productos:[
          { nombre:"Panel solar monocristalino 400W", marca:"Jinko",   precio:149990, img:I.solar, specs:["400W pico","Monocristalino PERC","Voc 49.3V","IP68","25 años garantía"] },
          { nombre:"Inversor solar híbrido 5kW",       marca:"Growatt", precio:489990, img:I.solar, specs:["5kW salida","MPPT 100A","Baterías litio o plomo","WiFi","IP65"] },
          { nombre:"Controlador de carga MPPT 40A",   marca:"Epever",  precio:69990,  img:I.solar, specs:["40A","MPPT eficiencia 99%","12/24/48V auto","LCD display","RS485"] },
      ]},
    ]},
  { id:"medicion", nombre:"Medición y Monitoreo", img:I.multimetro,
    subcats:[
      { nombre:"Instrumentos de medición", img:I.multimetro, productos:[
          { nombre:"Multímetro digital True RMS",     marca:"Fluke", precio:89990,  img:I.multimetro, specs:["True RMS","CAT III 600V","VDC/VAC/A/Ω","Temperatura","Frecuencia"] },
          { nombre:"Pinza amperimétrica AC/DC 1000A", marca:"Hioki", precio:129990, img:I.multimetro, specs:["1000A AC/DC","True RMS","Data hold","Bluetooth"] },
      ]},
      { nombre:"Detectores y verificadores", img:I.multimetro, productos:[
          { nombre:"Detector de tensión sin contacto",       marca:"Fluke",   precio:18990, img:I.multimetro, specs:["Sin contacto","12-1000V AC","Señal sonora+visual","IP40"] },
          { nombre:"Comprobador de enchufes e instalaciones",marca:"Kewtech", precio:34990, img:I.multimetro, specs:["Comprueba tierra","Polaridad","RCCB","LED resultado"] },
      ]},
    ]},
];

const general = [
  { id:"herr-el", nombre:"Herramientas Eléctricas", img:I.taladro, productos:[
      { nombre:"Taladro Percutor 750W",      marca:"Cordillera Pro", precio:49990, img:I.taladro, specs:["750W","Mandril 13mm","Velocidad variable","Impacto/taladro","Maletín"] },
      { nombre:"Esmeril Angular 4½\" 850W",  marca:"Master Tools",   precio:39990, img:I.taladro, specs:["850W","Disco 115mm","11000RPM","Protector ajustable","Empuñadura lateral"] },
      { nombre:"Sierra Circular 7¼\" 1400W", marca:"PowerCut",       precio:89990, img:I.taladro, specs:["1400W","Disco 7¼\"","Guía paralela","Inclinación 0-45°","Maletín"] },
      { nombre:"Lijadora Orbital 300W",      marca:"Master Tools",   precio:34990, img:I.taladro, specs:["300W","Plato 125mm","6 velocidades","Bolsa polvo","Papel incluido"] },
  ]},
  { id:"herr-man", nombre:"Herramientas Manuales", img:I.taladro, productos:[
      { nombre:"Set Destornilladores 12 piezas", marca:"FixLine", precio:14990, img:I.taladro, specs:["12 piezas","Puntas PH/SL","Imantadas","Mango ergonómico","Estuche"] },
      { nombre:"Cinta Métrica 5m con freno",     marca:"Medix",   precio:4990,  img:I.taladro, specs:["5 metros","Carcasa ABS","Bloqueo automático","Acero","Gancho imantado"] },
      { nombre:"Alicate universal 8\"",           marca:"FixLine", precio:7990,  img:I.taladro, specs:["8 pulgadas","Acero CrV","Mango dieléctrico","Corta alambre","Grip antideslizante"] },
      { nombre:"Martillo carpintero 500g",        marca:"FixLine", precio:8990,  img:I.taladro, specs:["500g","Mango fibra vidrio","Antivibración","Saca clavos","Balance perfecto"] },
  ]},
  { id:"pinturas", nombre:"Pinturas y Revestimientos", img:I.pincel, productos:[
      { nombre:"Pintura Interior Blanca Látex 1 Gal", marca:"ColorMax", precio:21990, img:I.pincel, specs:["1 galón (3.785L)","Látex mate","Lavable","Secado 1h","Rendimiento 10-12m²/L"] },
      { nombre:"Pintura Exterior Látex 1 Gal",         marca:"ColorMax", precio:24990, img:I.pincel, specs:["1 galón","Resistente lluvia","Anti-hongos","Secado 2h","Rendimiento 8-10m²/L"] },
      { nombre:"Esmalte negro brillante 1 Gal",        marca:"ColorMax", precio:19990, img:I.pincel, specs:["1 galón","Base alquídica","Secado duro 24h","Alta resistencia","Múltiples superficies"] },
  ]},
  { id:"seguridad", nombre:"Seguridad Personal (EPP)", img:I.casco, productos:[
      { nombre:"Casco de Seguridad clase E",         marca:"SafeWork", precio:8990,  img:I.casco, specs:["Clase E","HDPE resistente","Ajuste 4 puntos","Ratchet interno","ANSI Z89.1"] },
      { nombre:"Guantes de nitrilo talla L",         marca:"SafeWork", precio:5990,  img:I.casco, specs:["Nitrilo negro","Talla L","Antideslizante","Resistente aceites","Sin polvo"] },
      { nombre:"Zapatos seguridad punta composite",  marca:"SafeWork", precio:39990, img:I.casco, specs:["Punta composite","Suela antiestática","Cuero genuino","ISO 20345 S3","Talla 40-46"] },
      { nombre:"Lentes de seguridad antiempañante",  marca:"3M",       precio:3990,  img:I.casco, specs:["Policarbonato","Antiempañante","UV400","ANSI Z87.1","Lente transparente"] },
  ]},
  { id:"construccion", nombre:"Construcción", img:I.obra, productos:[
      { nombre:"Cemento Portland 25 Kg",              marca:"ConstruMix", precio:6990,  img:I.obra, specs:["25kg saco","Cemento gris","Alta resistencia","NCh 148","Uso general"] },
      { nombre:"Escalera aluminio tijera 6 peldaños", marca:"AlturaMax",  precio:64990, img:I.obra, specs:["6 peldaños","Aluminio","Capacidad 150kg","Antideslizante","Altura 1.5m"] },
      { nombre:"Carretilla obra 80L",                 marca:"ObraMax",    precio:54990, img:I.obra, specs:["80 litros","Bandeja polietileno","Rueda maciza","Capacidad 160kg","Marcos acero"] },
  ]},
  { id:"ferreteria", nombre:"Ferretería General", img:I.tornillo, productos:[
      { nombre:"Tornillos autorroscantes 3.5x35 (200uds)", marca:"FixLine",   precio:6990, img:I.tornillo, specs:["200 unidades","3.5x35mm","Acero brillante","Punta aguda","Madera y metal"] },
      { nombre:"Silicona multiuso transparente 310ml",     marca:"SealPro",   precio:3990, img:I.tornillo, specs:["310ml","Transparente","Adherencia total","Impermeable","Secado 24h"] },
      { nombre:"Cinta aislante 19mm x 10m negra",         marca:"3M",        precio:1990, img:I.tornillo, specs:["19mm x 10m","PVC negro","Hasta 600V","-18°C a 105°C","UL Listed"] },
  ]},
];

const arriendos = [
  { id:1, nombre:"Demoledor Eléctrico SDS-Max",      precio:24990, periodo:"por día", img:I.demoledor,    specs:["1500W","Energía 17J","SDS-Max","Cincel incluido","Maleta transporte"], desc:"Demolición de hormigón, retiro de cerámica, rompimiento de losas y trabajos pesados." },
  { id:2, nombre:"Betonera 130 Litros 1HP",          precio:19990, periodo:"por día", img:I.betonera,     specs:["1HP motor","130L capacidad","220V","Volcable manual","Ruedas para traslado"], desc:"Mezcla de cemento, mortero y hormigón. Ideal para obras de mediano tamaño." },
  { id:3, nombre:"Hidrolavadora Industrial 200 bar", precio:14990, periodo:"por día", img:I.hidrolavadora,specs:["200 bar presión","2800 PSI","2200W","Lanza 5m","Manguera 8m"], desc:"Limpieza profunda de fachadas, vehículos, pisos industriales y maquinaria." },
  { id:4, nombre:"Andamio metálico 4m",              precio:12990, periodo:"por día", img:I.andamio,      specs:["Altura 4m","2 cuerpos","Plataforma 1.5m","Acero galvanizado","Ruedas con freno"], desc:"Para trabajos en altura: pinturas, estucos, electricidad y mantenciones." },
];

// ── ESTILOS GLOBALES ──────────────────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

  .page-wrap { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

  /* ── GRIDS RESPONSIVOS ── */
  .grid-familias { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .grid-subcats  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .grid-productos{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .grid-general  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .grid-arriendos{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .grid-porque   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .grid-hero     { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .grid-hero-cards{ display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .grid-contacto { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .grid-detalle  { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }

  @media (max-width: 1024px) {
    .grid-familias  { grid-template-columns: repeat(2, 1fr); }
    .grid-subcats   { grid-template-columns: repeat(3, 1fr); }
    .grid-productos { grid-template-columns: repeat(3, 1fr); }
    .grid-general   { grid-template-columns: repeat(2, 1fr); }
    .grid-arriendos { grid-template-columns: repeat(2, 1fr); }
    .grid-porque    { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .page-wrap { padding: 0 16px; }
    .grid-familias  { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .grid-subcats   { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .grid-productos { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .grid-general   { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .grid-arriendos { grid-template-columns: repeat(1, 1fr); gap: 16px; }
    .grid-porque    { grid-template-columns: repeat(1, 1fr); }
    .grid-hero      { grid-template-columns: 1fr; }
    .grid-hero-cards{ display: none; }
    .grid-contacto  { grid-template-columns: repeat(1, 1fr); }
    .grid-detalle   { grid-template-columns: 1fr; }
    .hide-mobile    { display: none; }
    .show-mobile    { display: block; }
  }

  @media (min-width: 769px) {
    .show-mobile { display: none; }
  }

  /* ── CARDS ── */
  .card {
    background: #fff;
    border: 1px solid #DDE3EC;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.10); }

  .card-dark {
    background: #0B1829;
    border: 1px solid #1A3F6F;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.2s, border-color 0.2s;
  }
  .card-dark:hover { transform: translateY(-4px); border-color: #F5B800; }

  /* ── BOTONES ── */
  .btn-primary {
    background: #F5B800; color: #0B1829; border: none;
    padding: 14px 28px; border-radius: 10px; font-weight: 800;
    font-size: 15px; cursor: pointer; transition: background 0.2s;
    display: inline-block; text-decoration: none; text-align: center;
  }
  .btn-primary:hover { background: #D9A300; }

  .btn-outline-white {
    background: transparent; color: #fff;
    border: 2px solid rgba(255,255,255,0.4);
    padding: 14px 28px; border-radius: 10px; font-weight: 800;
    font-size: 15px; cursor: pointer; transition: background 0.2s, border-color 0.2s;
  }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.7); }

  .btn-outline-dark {
    background: transparent; color: #0B1829;
    border: 1.5px solid #DDE3EC;
    padding: 12px 20px; border-radius: 10px; font-weight: 700;
    font-size: 14px; cursor: pointer; transition: background 0.2s;
    display: inline-block; text-decoration: none; text-align: center;
  }
  .btn-outline-dark:hover { background: #F5F7FA; }

  .btn-dark {
    background: #0B1829; color: #fff; border: none;
    padding: 13px 20px; border-radius: 10px; font-weight: 800;
    font-size: 14px; cursor: pointer; transition: background 0.2s;
    display: block; text-align: center; text-decoration: none; width: 100%;
  }
  .btn-dark:hover { background: #F5B800; color: #0B1829; }

  /* ── BADGE ── */
  .badge-amber {
    display: inline-block; background: #FFF3CC; color: #854F0B;
    font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 5px 14px; border-radius: 99px;
  }

  /* ── NAV ── */
  .nav-btn {
    background: transparent; color: #7FA4C8; border: none;
    padding: 9px 18px; border-radius: 8px; font-weight: 700;
    font-size: 14px; cursor: pointer; transition: background 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .nav-btn:hover { background: #102844; color: #fff; }
  .nav-btn.active { background: #F5B800; color: #0B1829; }

  /* ── IMG CONTENEDOR ── */
  .img-cover {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
  .img-box-familia { height: 180px; overflow: hidden; position: relative; background: linear-gradient(135deg, #102844 0%, #1A3F6F 100%); }
  .img-box-subcat  { height: 140px; overflow: hidden; background: linear-gradient(135deg, #102844 0%, #1A3F6F 100%); }
  .img-box-prod    { height: 200px; overflow: hidden; background: linear-gradient(135deg, #F5F7FA 0%, #E8EEF5 100%); }
  .img-box-arriendo{ height: 200px; overflow: hidden; position: relative; background: linear-gradient(135deg, #102844 0%, #1A3F6F 100%); }
  .img-box-general { height: 170px; overflow: hidden; background: linear-gradient(135deg, #F5F7FA 0%, #E0E7F0 100%); }

  @media (max-width: 768px) {
    .img-box-familia  { height: 140px; }
    .img-box-subcat   { height: 120px; }
    .img-box-prod     { height: 160px; }
    .img-box-arriendo { height: 180px; }
    .img-box-general  { height: 150px; }
  }

  /* ── MARCA ── */
  .marca-tag {
    font-size: 11px; font-weight: 800; color: #F5B800;
    text-transform: uppercase; letter-spacing: 0.06em;
    margin: 0 0 4px; display: block;
  }

  /* ── SPECS LISTA ── */
  .spec-item {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 0; border-bottom: 1px solid #EEF0F5; font-size: 14px; color: #0B1829;
  }
  .spec-dot { width: 7px; height: 7px; border-radius: 50%; background: #F5B800; flex-shrink: 0; }

  /* ── BREADCRUMB ── */
  .breadcrumb { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 28px; }
  .bc-btn { background: none; border: none; color: #7FA4C8; cursor: pointer; font-weight: 600; font-size: 14px; padding: 0; }
  .bc-btn:hover { color: #F5B800; }
  .bc-sep { color: #3A5F80; font-size: 16px; }
  .bc-current { color: #0B1829; font-weight: 700; font-size: 14px; }

  /* ── OVERLAY GRADIENTE ── */
  .overlay-bottom { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 40%, rgba(11,24,41,0.85) 100%); }
  .overlay-label  { position: absolute; bottom: 12px; left: 14px; color: #fff; font-weight: 900; font-size: 15px; }

  /* ── PRECIO BADGE EN CARD ── */
  .precio-badge {
    position: absolute; bottom: 10px; left: 12px;
    background: #F5B800; color: #0B1829;
    font-size: 12px; font-weight: 900; padding: 5px 12px; border-radius: 99px;
  }

  /* scrollbar horizontal nav */
  .nav-scroll { overflow-x: auto; scrollbar-width: none; }
  .nav-scroll::-webkit-scrollbar { display: none; }

  /* modal overlay */
  .modal-bg { position: fixed; inset: 0; z-index: 200; background: rgba(0,0,0,0.72); display: flex; align-items: center; justify-content: center; padding: 16px; }
  .cart-side { position: fixed; inset: 0; z-index: 200; background: rgba(0,0,0,0.72); display: flex; justify-content: flex-end; }
`;

// ── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ size = 60 }) {
  return (
    <Image
      src="/logo-cordillera.png"
      alt="Ferretería Cordillera"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block" }}
      priority
    />
  );
}

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
export default function Home() {
  const [carrito,       setCarrito]       = useState([]);
  const [cartOpen,      setCartOpen]      = useState(false);
  const [loginOpen,     setLoginOpen]     = useState(false);
  const [usuario,       setUsuario]       = useState(null);
  const [busqueda,      setBusqueda]      = useState("");
  const [seccion,       setSeccion]       = useState("inicio");
  const [catData,       setCatData]       = useState(null);
  const [famActiva,     setFamActiva]     = useState(null);
  const [subcatActiva,  setSubcatActiva]  = useState(null);
  const [prodDetalle,   setProdDetalle]   = useState(null);
  const [catGenId,      setCatGenId]      = useState(null);
  const [prodGen,       setProdGen]       = useState(null);
  const [cupon,         setCupon]         = useState("");
  const [cuponMsg,      setCuponMsg]      = useState("");

  const subtotal  = carrito.reduce((a, i) => a + (i.precio || 0), 0);
  const descuento = cupon.trim().toUpperCase() === "CORDILLERA10" ? Math.round(subtotal * 0.1) : 0;
  const total     = subtotal - descuento;

  const agregarCarrito = (p) => { setCarrito(c => [...c, p]); setCartOpen(true); };
  const quitarItem     = (i) => setCarrito(c => c.filter((_, idx) => idx !== i));
  const aplicarCupon   = () => {
    if (cupon.trim().toUpperCase() === "CORDILLERA10") setCuponMsg("✅ 10% aplicado");
    else setCuponMsg("❌ Cupón inválido");
  };

  const irSeccion = (s, data = null) => {
    setSeccion(s); setCatData(data);
    setFamActiva(null); setSubcatActiva(null); setProdDetalle(null);
    setCatGenId(null); setProdGen(null); setBusqueda("");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
  };

  const fam = famActiva ? catData?.find(f => f.id === famActiva) : null;
  const sub = subcatActiva && fam ? fam.subcats.find(s => s.nombre === subcatActiva) : null;

  // ── SECCIÓN: CATÁLOGO PROFESIONAL (Eléctrico / Potencia) ─────────────────
  const CatalogoPro = () => {
    const titulo = seccion === "electrico" ? "Catálogo Eléctrico" : "Potencia y Control";
    return (
      <div style={{ background: "#F5F7FA", minHeight: "100vh", paddingBottom: 60 }}>
        {/* Cabecera azul con breadcrumb */}
        <div style={{ background: "#0B1829", padding: "20px 0 0" }}>
          <div className="page-wrap">
            <div className="breadcrumb">
              <button className="bc-btn" onClick={() => { setFamActiva(null); setSubcatActiva(null); setProdDetalle(null); }}>{titulo}</button>
              {fam && <><span className="bc-sep">›</span>
                <button className="bc-btn" onClick={() => { setSubcatActiva(null); setProdDetalle(null); }}>{fam.nombre}</button></>}
              {sub && <><span className="bc-sep">›</span>
                <button className="bc-btn" onClick={() => setProdDetalle(null)}>{sub.nombre}</button></>}
              {prodDetalle && <><span className="bc-sep">›</span>
                <span className="bc-current">{prodDetalle.nombre}</span></>}
            </div>
          </div>
        </div>

        <div className="page-wrap" style={{ paddingTop: 36 }}>

          {/* Detalle producto */}
          {prodDetalle && (
            <div className="grid-detalle">
              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #DDE3EC" }}>
                <img src={prodDetalle.img} alt={prodDetalle.nombre} className="img-cover" style={{ height: 320 }}
                  onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
              </div>
              <div>
                <span className="marca-tag">{prodDetalle.marca}</span>
                <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "10px 0 8px", lineHeight: 1.2 }}>{prodDetalle.nombre}</h1>
                {prodDetalle.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 34, margin: "0 0 24px" }}>${prodDetalle.precio.toLocaleString("es-CL")}</p>}
                <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                  <p style={{ color: "#4A6080", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Características</p>
                  {(prodDetalle.specs || []).map(s => (
                    <div key={s} className="spec-item"><div className="spec-dot" />{s}</div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {prodDetalle.precio
                    ? <button className="btn-primary" style={{ flex: 1 }} onClick={() => agregarCarrito(prodDetalle)}>Agregar al carrito</button>
                    : <a href="https://wa.me/569XXXXXXXX" className="btn-primary" style={{ flex: 1 }}>Consultar precio</a>}
                  <a href="https://wa.me/569XXXXXXXX" className="btn-outline-dark" style={{ flex: 1 }}>Consultar por WhatsApp</a>
                </div>
              </div>
            </div>
          )}

          {/* Vista familias */}
          {!fam && !prodDetalle && (
            <>
              <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", marginBottom: 8 }}>{titulo}</h2>
              <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 15 }}>Selecciona la sección que necesitas</p>
              <div className="grid-familias">
                {catData.map(f => (
                  <button key={f.id} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setFamActiva(f.id)}>
                    <div className="img-box-familia">
                      <img src={f.img} alt={f.nombre} className="img-cover"
                        onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                      <div className="overlay-bottom" />
                      <span className="overlay-label">{f.nombre}</span>
                    </div>
                    <div style={{ padding: "14px 16px 18px", flex: 1 }}>
                      {f.subcats.map(s => (
                        <div key={s.nombre} style={{ fontSize: 13, color: "#4A6080", padding: "5px 0", borderBottom: "1px solid #F0F4F8", display: "flex", gap: 8 }}>
                          <span style={{ color: "#F5B800", fontWeight: 900 }}>›</span> {s.nombre}
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Vista subcategorías */}
          {fam && !sub && !prodDetalle && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                  <img src={fam.img} alt={fam.nombre} className="img-cover"
                    onError={e => e.target.style.display = "none"} />
                </div>
                <div>
                  <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", margin: 0 }}>{fam.nombre}</h2>
                  <p style={{ color: "#4A6080", margin: "4px 0 0", fontSize: 14 }}>{fam.subcats.length} categorías disponibles</p>
                </div>
              </div>
              <div className="grid-subcats">
                {fam.subcats.map(sc => (
                  <button key={sc.nombre} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setSubcatActiva(sc.nombre)}>
                    <div className="img-box-subcat">
                      <img src={sc.img} alt={sc.nombre} className="img-cover"
                        onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                    </div>
                    <div style={{ padding: "14px 16px 16px", flex: 1 }}>
                      <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 6px" }}>{sc.nombre}</h3>
                      <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{sc.productos.length} productos</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Vista productos */}
          {sub && !prodDetalle && (
            <>
              <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,26px)", marginBottom: 8 }}>{sub.nombre}</h2>
              <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 14 }}>{sub.productos.length} productos</p>
              <div className="grid-productos">
                {sub.productos.map((p, i) => (
                  <div key={i} className="card">
                    <div className="img-box-prod" onClick={() => setProdDetalle(p)}>
                      <img src={p.img} alt={p.nombre} className="img-cover"
                        onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                    </div>
                    <div style={{ padding: "16px 16px 18px" }}>
                      <span className="marca-tag">{p.marca}</span>
                      <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 10px", lineHeight: 1.4, cursor: "pointer" }} onClick={() => setProdDetalle(p)}>{p.nombre}</h3>
                      {p.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>}
                      <div style={{ display: "flex", gap: 8 }}>
                        <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }} onClick={() => setProdDetalle(p)}>Ver detalle</button>
                        {p.precio
                          ? <button className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px" }} onClick={() => agregarCarrito(p)}>Agregar</button>
                          : <a href="https://wa.me/569XXXXXXXX" className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px" }}>Cotizar</a>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // ── CATÁLOGO GENERAL ──────────────────────────────────────────────────────
  const CatalogoGeneral = () => {
    const cat = catGenId ? general.find(c => c.id === catGenId) : null;
    const filtrados = busqueda
      ? general.flatMap(c => c.productos.map(p => ({ ...p, cat: c.nombre }))).filter(p =>
          p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.marca?.toLowerCase().includes(busqueda.toLowerCase()))
      : null;

    if (prodGen) return (
      <div style={{ background: "#F5F7FA", minHeight: "100vh", padding: "36px 0 60px" }}>
        <div className="page-wrap">
          <button className="btn-outline-dark" style={{ marginBottom: 24 }} onClick={() => setProdGen(null)}>← Volver</button>
          <div className="grid-detalle">
            <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #DDE3EC" }}>
              <img src={prodGen.img} alt={prodGen.nombre} className="img-cover" style={{ height: 320 }}
                onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
            </div>
            <div>
              <span className="marca-tag">{prodGen.marca}</span>
              <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "10px 0 8px" }}>{prodGen.nombre}</h1>
              <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 34, margin: "0 0 24px" }}>${prodGen.precio.toLocaleString("es-CL")}</p>
              <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                <p style={{ color: "#4A6080", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Características</p>
                {(prodGen.specs || []).map(s => <div key={s} className="spec-item"><div className="spec-dot" />{s}</div>)}
              </div>
              <button className="btn-primary" style={{ width: "100%", marginBottom: 12 }} onClick={() => agregarCarrito(prodGen)}>Agregar al carrito</button>
              <a href="https://wa.me/569XXXXXXXX" className="btn-outline-dark" style={{ display: "block", width: "100%" }}>Consultar por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div style={{ background: "#F5F7FA", minHeight: "100vh", padding: "36px 0 60px" }}>
        <div className="page-wrap">
          {filtrados ? (
            <>
              <p style={{ color: "#0B1829", fontWeight: 800, fontSize: 18, marginBottom: 28 }}>
                Resultados para <span style={{ color: "#1A3F6F" }}>"{busqueda}"</span>
              </p>
              {filtrados.length === 0
                ? <p style={{ color: "#4A6080", textAlign: "center", marginTop: 60, fontSize: 16 }}>No encontramos productos.</p>
                : <div className="grid-productos">{filtrados.map((p, i) => <ProdCard key={i} p={p} onClick={() => setProdGen(p)} />)}</div>}
            </>
          ) : !cat ? (
            <>
              <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", marginBottom: 8 }}>Catálogo General</h2>
              <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 15 }}>Herramientas, pinturas, seguridad, construcción y más</p>
              <div className="grid-general">
                {general.map(c => (
                  <button key={c.id} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setCatGenId(c.id)}>
                    <div className="img-box-general">
                      <img src={c.img} alt={c.nombre} className="img-cover"
                        onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                    </div>
                    <div style={{ padding: "16px 18px 20px", flex: 1 }}>
                      <h3 style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: "0 0 4px" }}>{c.nombre}</h3>
                      <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{c.productos.length} productos</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button className="btn-outline-dark" style={{ marginBottom: 24 }} onClick={() => setCatGenId(null)}>← Volver</button>
              <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", marginBottom: 28 }}>{cat.nombre}</h2>
              <div className="grid-productos">{cat.productos.map((p, i) => <ProdCard key={i} p={p} onClick={() => setProdGen(p)} />)}</div>
            </>
          )}
        </div>
      </div>
    );
  };

  const ProdCard = ({ p, onClick }) => (
    <div className="card">
      <div className="img-box-prod" onClick={onClick}>
        <img src={p.img} alt={p.nombre} className="img-cover"
          onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
      </div>
      <div style={{ padding: "16px 16px 18px" }}>
        {p.marca && <span className="marca-tag">{p.marca}</span>}
        <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 8px", lineHeight: 1.4, cursor: "pointer" }} onClick={onClick}>{p.nombre}</h3>
        <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }} onClick={onClick}>Ver detalle</button>
          <button className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px" }} onClick={() => agregarCarrito(p)}>Agregar</button>
        </div>
      </div>
    </div>
  );

  // ── HERO ──────────────────────────────────────────────────────────────────
  const Hero = () => (
    <section style={{ background: "#0B1829", position: "relative", overflow: "hidden", minHeight: 640 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${I.hero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .22 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,#0B1829 48%,rgba(16,40,68,.5) 100%)" }} />
      <div className="page-wrap" style={{ position: "relative", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="grid-hero">
          <div>
            <span style={{ display: "inline-block", background: "#F5B800", color: "#0B1829", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 99, marginBottom: 20 }}>
              Tu ferretería de confianza · Puerto Varas
            </span>
            <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(34px,4.5vw,58px)", lineHeight: 1.1, margin: "0 0 20px" }}>
              Todo lo que<br />necesitas para<br /><span style={{ color: "#F5B800" }}>tu proyecto</span>
            </h1>
            <p style={{ color: "#7FA4C8", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.7, maxWidth: 440, margin: "0 0 36px" }}>
              Catálogo completo con herramientas, materiales, pinturas, construcción y equipos en arriendo. Todo en un solo lugar.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => irSeccion("electrico", electrico)}>Ver Catálogo Eléctrico</button>
              <button className="btn-outline-white" onClick={() => irSeccion("potencia", potencia)}>Potencia y Control</button>
            </div>
          </div>
          <div className="grid-hero-cards">
            {electrico.slice(0, 4).map(f => (
              <button key={f.id} className="card-dark" style={{ textAlign: "left", padding: 0, width: "100%", cursor: "pointer" }}
                onClick={() => { irSeccion("electrico", electrico); setFamActiva(f.id); }}>
                <div style={{ height: 140, overflow: "hidden", opacity: .8 }}>
                  <img src={f.img} alt={f.nombre} className="img-cover"
                    onError={e => e.target.style.display = "none"} />
                </div>
                <div style={{ padding: "12px 16px 16px" }}>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: 14, margin: 0, lineHeight: 1.3 }}>{f.nombre}</p>
                  <p style={{ color: "#7FA4C8", fontSize: 12, margin: "4px 0 0" }}>{f.subcats.length} categorías →</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // ── POR QUÉ ───────────────────────────────────────────────────────────────
  const PorQue = () => (
    <section style={{ background: "#fff", padding: "64px 0" }}>
      <div className="page-wrap">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="badge-amber">¿Por qué elegirnos?</span>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "14px 0 10px" }}>Tu ferretería en Puerto Varas</h2>
          <p style={{ color: "#4A6080", maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
            Tu ferretería de barrio con todo lo que necesitas, desde herramientas hasta materiales de construcción.
          </p>
        </div>
        <div className="grid-porque">
          {[
            { icon: "⚡", t: "Atención personalizada",  d: "Te asesoramos para que encuentres exactamente lo que necesitas." },
            { icon: "📦", t: "Catálogo completo",        d: "Amplia variedad de productos para el hogar, la obra y la industria." },
            { icon: "🚚", t: "Despacho a domicilio",     d: "Llevamos tus productos directamente a la obra o tu hogar." },
            { icon: "💲", t: "Precios competitivos",     d: "Los mejores proveedores para darte el mejor valor del mercado." },
            { icon: "🔒", t: "Compra segura",            d: "Proceso simple, transparente y confiable para cotizar o comprar." },
            { icon: "📞", t: "Asesoría en terreno",      d: "Consulta por WhatsApp o visítanos directamente en Puerto Varas." },
          ].map(it => (
            <div key={it.t} style={{ background: "#F5F7FA", borderRadius: 16, padding: "24px 22px", borderLeft: "4px solid #F5B800" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{it.icon}</div>
              <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 16, margin: "0 0 8px" }}>{it.t}</h3>
              <p style={{ color: "#4A6080", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ── BANNER MEDIO ──────────────────────────────────────────────────────────
  const BannerMedio = () => (
    <section style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${I.sectionBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .22 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(11,24,41,.68)" }} />
      <div className="page-wrap" style={{ position: "relative", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px,3.5vw,40px)", margin: "0 0 16px", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          Tu ferretería de confianza en Puerto Varas
        </h2>
        <p style={{ color: "#7FA4C8", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px" }}>
          Materiales, herramientas y equipos para tus proyectos. Asesoría incluida.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => irSeccion("general")}>Ver Catálogo General</button>
          <button className="btn-outline-white" onClick={() => irSeccion("arriendos")}>Arriendos</button>
        </div>
      </div>
    </section>
  );

  // ── ARRIENDOS ─────────────────────────────────────────────────────────────
  const SeccionArriendos = () => (
    <section id="arriendos-sec" style={{ background: "#F5F7FA", padding: "64px 0" }}>
      <div className="page-wrap">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="badge-amber">Arriendo de equipos</span>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "14px 0 10px" }}>Equipos por día o semana</h2>
          <p style={{ color: "#4A6080", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
            Sin necesidad de comprar equipos costosos. Ideal para obras, remodelaciones y trabajos puntuales.
          </p>
        </div>
        <div className="grid-arriendos">
          {arriendos.map(item => (
            <div key={item.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div className="img-box-arriendo">
                <img src={item.img} alt={item.nombre} className="img-cover"
                  onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                <span className="precio-badge">${item.precio.toLocaleString("es-CL")} {item.periodo}</span>
              </div>
              <div style={{ padding: "18px 18px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: "0 0 8px" }}>{item.nombre}</h3>
                <p style={{ color: "#4A6080", fontSize: 13, margin: "0 0 14px", lineHeight: 1.5, flex: 1 }}>{item.desc}</p>
                <div style={{ background: "#F5F7FA", borderRadius: 10, padding: "10px 14px", marginBottom: 16, border: "1px solid #EEF0F5" }}>
                  {item.specs.slice(0, 3).map(s => (
                    <div key={s} style={{ fontSize: 13, color: "#4A6080", display: "flex", gap: 8, padding: "3px 0" }}>
                      <span style={{ color: "#F5B800", fontWeight: 900 }}>✓</span> {s}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/569XXXXXXXX" className="btn-dark">Consultar disponibilidad</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ── CONTACTO ──────────────────────────────────────────────────────────────
  const SeccionContacto = () => (
    <section style={{ background: "#0B1829", padding: "72px 0 80px" }}>
      <div className="page-wrap">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ display: "inline-block", background: "#F5B800", color: "#0B1829", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 99 }}>Contacto</span>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(26px,3.5vw,42px)", margin: "16px 0 12px" }}>Cotiza ventas o arriendos</h2>
          <p style={{ color: "#7FA4C8", fontSize: 16, margin: "0 auto", maxWidth: 480, lineHeight: 1.7 }}>
            Escríbenos o visítanos. Estamos para ayudarte a encontrar lo que necesitas.
          </p>
        </div>
        <div className="grid-contacto">
          {[
            { ic: "📞", t: "Teléfono",  v: "+56 9 XXXX XXXX",               sub: "Lunes a sábado · 9:00 a 19:00" },
            { ic: "📧", t: "Correo",    v: "ventas@ferreteriacordillera.cl", sub: "Respondemos en menos de 24h" },
            { ic: "📍", t: "Dirección", v: "Puerto Varas, Chile",            sub: "Visítanos en nuestra tienda" },
          ].map(({ ic, t, v, sub }) => (
            <div key={t} style={{ background: "#102844", border: "1px solid #1A3F6F", borderRadius: 20, padding: "36px 28px", textAlign: "center", transition: "border-color .2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#F5B800"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1A3F6F"}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{ic}</div>
              <h3 style={{ color: "#F5B800", fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>{t}</h3>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: "0 0 6px" }}>{v}</p>
              <p style={{ color: "#7FA4C8", fontSize: 13, margin: 0 }}>{sub}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://wa.me/569XXXXXXXX" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "15px 32px", borderRadius: 99, fontWeight: 900, fontSize: 16, textDecoration: "none" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );

  const navItems = [
    { k: "inicio",    label: "Inicio" },
    { k: "electrico", label: "⚡ Catálogo Eléctrico",  data: electrico },
    { k: "potencia",  label: "⚙️ Potencia y Control",  data: potencia },
    { k: "general",   label: "Catálogo General" },
    { k: "arriendos", label: "Arriendos" },
    { k: "contacto",  label: "Contacto" },
  ];

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main style={{ minHeight: "100vh", background: "#F5F7FA" }}>

        {/* Top bar */}
        <div style={{ background: "#F5B800", color: "#0B1829", fontSize: 12, fontWeight: 700 }}>
          <div className="page-wrap" style={{ padding: "7px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
            <span>🚚 Retiro en tienda y despacho a domicilio · Puerto Varas</span>
            <span className="hide-mobile">📞 +56 9 XXXX XXXX</span>
          </div>
        </div>

        {/* Header */}
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#0B1829", borderBottom: "1px solid #1A3F6F", boxShadow: "0 2px 16px rgba(0,0,0,.3)" }}>
          <div className="page-wrap" style={{ padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => irSeccion("inicio")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 12 }}>
              <Logo size={60} />
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "#fff", fontWeight: 900, fontSize: 16, margin: 0, letterSpacing: "0.02em", lineHeight: 1.1 }}>
                  FERRETERÍA <span style={{ color: "#F5B800" }}>CORDILLERA</span>
                </p>
                <p style={{ color: "#7FA4C8", fontSize: 11, margin: "3px 0 0" }}>Ferretería · Puerto Varas</p>
              </div>
            </button>

            <div style={{ flex: 1, minWidth: 180, display: "flex", maxWidth: 460 }}>
              <input value={busqueda}
                onChange={e => { setBusqueda(e.target.value); if (e.target.value) irSeccion("general"); }}
                style={{ width: "100%", padding: "10px 16px", background: "#102844", border: "1px solid #1A3F6F", borderRight: "none", borderRadius: "9px 0 0 9px", color: "#fff", fontSize: 14, outline: "none" }}
                placeholder="Buscar productos..." />
              <button style={{ background: "#F5B800", color: "#0B1829", border: "none", padding: "10px 18px", borderRadius: "0 9px 9px 0", fontWeight: 900, fontSize: 13, cursor: "pointer" }}>
                Buscar
              </button>
            </div>

            <div style={{ display: "flex", gap: 10, marginLeft: "auto" }}>
              <button className="hide-mobile" onClick={() => setLoginOpen(true)}
                style={{ background: "#102844", color: "#fff", border: "1px solid #1A3F6F", padding: "10px 16px", borderRadius: 9, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {usuario ? `Hola, ${usuario}` : "Iniciar sesión"}
              </button>
              <button onClick={() => setCartOpen(true)}
                style={{ position: "relative", background: "#F5B800", color: "#0B1829", border: "none", padding: "10px 18px", borderRadius: 9, fontWeight: 900, fontSize: 13, cursor: "pointer" }}>
                🛒 Carrito
                {carrito.length > 0 && (
                  <span style={{ position: "absolute", top: -8, right: -8, background: "#fff", color: "#F5B800", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900 }}>
                    {carrito.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <nav className="nav-scroll" style={{ borderTop: "1px solid #1A3F6F" }}>
            <div className="page-wrap" style={{ padding: "5px 24px", display: "flex", gap: 2 }}>
              {navItems.map(({ k, label, data }) => (
                <button key={k} className={`nav-btn${seccion === k ? " active" : ""}`}
                  onClick={() => irSeccion(k, data || null)}>
                  {label}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* Contenido */}
        {seccion === "inicio" && <><Hero /><PorQue /><BannerMedio /><SeccionArriendos /><SeccionContacto /></>}
        {(seccion === "electrico" || seccion === "potencia") && <CatalogoPro />}
        {seccion === "general"   && <CatalogoGeneral />}
        {seccion === "arriendos" && <SeccionArriendos />}
        {seccion === "contacto"  && <SeccionContacto />}

        {/* Footer */}
        <footer style={{ background: "#0B1829", borderTop: "1px solid #1A3F6F", textAlign: "center", color: "#7FA4C8", padding: "28px 16px", fontSize: 13 }}>
          © 2026 Ferretería Cordillera — Ferretería profesional · Puerto Varas
        </footer>

        {/* Burbuja WhatsApp */}
        <a href="https://wa.me/569XXXXXXXX" target="_blank" rel="noopener noreferrer"
          style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "13px 20px", borderRadius: 99, textDecoration: "none", fontWeight: 800, fontSize: 14, boxShadow: "0 4px 20px rgba(37,211,102,.4)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hide-mobile">¿Necesitas ayuda?</span>
        </a>

        {/* Login modal */}
        {loginOpen && (
          <div className="modal-bg" onClick={() => setLoginOpen(false)}>
            <form onSubmit={e => { e.preventDefault(); setUsuario("Cliente"); setLoginOpen(false); }}
              style={{ background: "#fff", borderRadius: 20, maxWidth: 400, width: "100%", padding: "2rem", boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}
              onClick={e => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: 0 }}>Iniciar sesión</h2>
                <button type="button" onClick={() => setLoginOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#999" }}>×</button>
              </div>
              <input style={{ width: "100%", padding: "12px 16px", border: "1px solid #DDE3EC", borderRadius: 10, fontSize: 14, color: "#0B1829", boxSizing: "border-box", marginBottom: 12, outline: "none", display: "block" }} placeholder="Correo electrónico" />
              <input type="password" style={{ width: "100%", padding: "12px 16px", border: "1px solid #DDE3EC", borderRadius: 10, fontSize: 14, color: "#0B1829", boxSizing: "border-box", marginBottom: 20, outline: "none", display: "block" }} placeholder="Contraseña" />
              <button className="btn-primary" style={{ width: "100%", padding: 14 }}>Entrar</button>
              <p style={{ textAlign: "center", fontSize: 12, color: "#999", marginTop: 12 }}>Demo visual — no guarda usuarios todavía</p>
            </form>
          </div>
        )}

        {/* Carrito */}
        {cartOpen && (
          <div className="cart-side">
            <div style={{ background: "#fff", width: "100%", maxWidth: 440, height: "100%", padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: 0 }}>Tu carrito</h2>
                <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#999" }}>×</button>
              </div>
              {carrito.length === 0
                ? <p style={{ color: "#999", textAlign: "center", marginTop: 60, fontSize: 15 }}>Tu carrito está vacío.</p>
                : <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ flex: 1 }}>
                      {carrito.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid #F0F4F8" }}>
                          {item.img && (
                            <div style={{ width: 60, height: 60, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#F5F7FA" }}>
                              <img src={item.img} alt={item.nombre} className="img-cover"
                                onError={e => e.target.style.display = "none"} />
                            </div>
                          )}
                          <div style={{ flex: 1 }}>
                            <p style={{ color: "#0B1829", fontWeight: 800, fontSize: 14, margin: "0 0 2px" }}>{item.nombre}</p>
                            {item.marca && <p style={{ color: "#999", fontSize: 12, margin: "0 0 4px" }}>{item.marca}</p>}
                            {item.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: 0 }}>${item.precio.toLocaleString("es-CL")}</p>}
                          </div>
                          <button onClick={() => quitarItem(idx)} style={{ background: "none", border: "none", color: "#e53", fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>Eliminar</button>
                        </div>
                      ))}
                    </div>
                    <div style={{ borderTop: "1px solid #F0F4F8", paddingTop: 18, marginTop: 18 }}>
                      <label style={{ display: "block", fontWeight: 800, color: "#0B1829", marginBottom: 8, fontSize: 14 }}>Cupón de descuento</label>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <input value={cupon} onChange={e => setCupon(e.target.value)} placeholder="Ej: CORDILLERA10"
                          style={{ flex: 1, padding: "10px 14px", border: "1px solid #DDE3EC", borderRadius: 9, fontSize: 14, color: "#0B1829", outline: "none" }} />
                        <button onClick={aplicarCupon}
                          style={{ background: "#0B1829", color: "#fff", border: "none", padding: "10px 16px", borderRadius: 9, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                          Aplicar
                        </button>
                      </div>
                      {cuponMsg && <p style={{ color: cuponMsg.startsWith("✅") ? "#0a7" : "#c00", fontSize: 13, fontWeight: 700, margin: "0 0 12px" }}>{cuponMsg}</p>}
                      {descuento > 0 && (
                        <>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#4A6080", marginBottom: 6 }}>
                            <span>Subtotal</span><span>${subtotal.toLocaleString("es-CL")}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#0a7", fontWeight: 700, marginBottom: 6 }}>
                            <span>Descuento 10%</span><span>-${descuento.toLocaleString("es-CL")}</span>
                          </div>
                        </>
                      )}
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 21, fontWeight: 900, color: "#0B1829", margin: "14px 0 18px" }}>
                        <span>Total</span><span style={{ color: "#F5B800" }}>${total.toLocaleString("es-CL")}</span>
                      </div>
                      <button onClick={() => alert("Demo Webpay Plus: aquí el cliente sería redirigido al portal de pago seguro.")}
                        style={{ width: "100%", background: "#c0392b", color: "#fff", border: "none", padding: 15, borderRadius: 10, fontWeight: 900, fontSize: 15, cursor: "pointer" }}>
                        Pagar con Webpay
                      </button>
                    </div>
                  </div>}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

