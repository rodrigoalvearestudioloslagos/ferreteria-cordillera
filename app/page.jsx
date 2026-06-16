"use client";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PorQue from "@/components/PorQue";
import BannerMedio from "@/components/BannerMedio";
import CatalogoPro from "@/components/CatalogoPro";
import CatalogoGeneral from "@/components/CatalogoGeneral";
import SeccionArriendos from "@/components/SeccionArriendos";
import SeccionContacto from "@/components/SeccionContacto";

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

export default function Home() {
  const [busqueda,      setBusqueda]      = useState("");
  const [seccion,       setSeccion]       = useState("inicio");
  const [catData,       setCatData]       = useState(null);
  const [famActiva,     setFamActiva]     = useState(null);
  const [subcatActiva,  setSubcatActiva]  = useState(null);
  const [prodDetalle,   setProdDetalle]   = useState(null);
  const [catGenId,      setCatGenId]      = useState(null);
  const [prodGen,       setProdGen]       = useState(null);

  const irSeccion = (s, data = null) => {
    setSeccion(s); setCatData(data);
    setFamActiva(null); setSubcatActiva(null); setProdDetalle(null);
    setCatGenId(null); setProdGen(null); setBusqueda("");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
  };

  const navItems = [
    { k: "inicio",    label: "Inicio" },
    { k: "electrico", label: "⚡ Catálogo Eléctrico",  data: electrico },
    { k: "potencia",  label: "⚙️ Potencia y Control",  data: potencia },
    { k: "general",   label: "Catálogo General" },
    { k: "arriendos", label: "Arriendos" },
    { k: "contacto",  label: "Contacto" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#F5F7FA" }}>
      <Header
        seccion={seccion}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        navItems={navItems}
        irSeccion={irSeccion}
      />

      {seccion === "inicio" && (
        <>
          <Hero
            irSeccion={irSeccion}
            setFamActiva={setFamActiva}
            electrico={electrico}
            potencia={potencia}
            heroImg={I.hero}
          />
          <PorQue />
          <BannerMedio irSeccion={irSeccion} sectionBgImg={I.sectionBg} />
          <SeccionArriendos arriendos={arriendos} />
          <SeccionContacto />
        </>
      )}

      {(seccion === "electrico" || seccion === "potencia") && (
        <CatalogoPro
          seccion={seccion}
          catData={catData}
          famActiva={famActiva}
          setFamActiva={setFamActiva}
          subcatActiva={subcatActiva}
          setSubcatActiva={setSubcatActiva}
          prodDetalle={prodDetalle}
          setProdDetalle={setProdDetalle}
        />
      )}

      {seccion === "general" && (
        <CatalogoGeneral
          general={general}
          busqueda={busqueda}
          catGenId={catGenId}
          setCatGenId={setCatGenId}
          prodGen={prodGen}
          setProdGen={setProdGen}
        />
      )}

      {seccion === "arriendos" && <SeccionArriendos arriendos={arriendos} />}
      {seccion === "contacto"  && <SeccionContacto />}

      <footer style={{ background: "#0B1829", borderTop: "1px solid #1A3F6F", textAlign: "center", color: "#7FA4C8", padding: "28px 16px", fontSize: 13 }}>
        © 2026 Ferretería Cordillera — Ferretería profesional · Puerto Varas
      </footer>

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "13px 20px", borderRadius: 99, textDecoration: "none", fontWeight: 800, fontSize: 14, boxShadow: "0 4px 20px rgba(37,211,102,.4)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hide-mobile">¿Necesitas ayuda?</span>
      </a>
    </main>
  );
}
