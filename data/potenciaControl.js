import I from "./images";

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


export default potencia;
