import I from "./images";

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


export default general;
