export const secciones = [
  {
    "id": "electrico",
    "nombre": "Especialidad Eléctrica",
    "tipo": "pro",
    "orden": 1,
    "activo": true
  },
  {
    "id": "potencia",
    "nombre": "Potencia y Control",
    "tipo": "pro",
    "orden": 2,
    "activo": true
  },
  {
    "id": "general",
    "nombre": "Catálogo General",
    "tipo": "simple",
    "orden": 3,
    "activo": true
  }
];

export const familias = [
  {
    "id": "iluminacion",
    "seccionId": "electrico",
    "nombre": "Iluminación",
    "imagen": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "tableros",
    "seccionId": "electrico",
    "nombre": "Tableros y Protección",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "conductores",
    "seccionId": "electrico",
    "nombre": "Conductores y Cables",
    "imagen": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "enchufes",
    "seccionId": "electrico",
    "nombre": "Enchufes, Tomas e Interruptores",
    "imagen": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "orden": 4,
    "activo": true
  },
  {
    "id": "canalizacion",
    "seccionId": "electrico",
    "nombre": "Canalización y Accesorios",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 5,
    "activo": true
  },
  {
    "id": "motores",
    "seccionId": "potencia",
    "nombre": "Motores y Variadores",
    "imagen": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "automatizacion",
    "seccionId": "potencia",
    "nombre": "Automatización y Control",
    "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "generacion",
    "seccionId": "potencia",
    "nombre": "Generación y Respaldo",
    "imagen": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "medicion",
    "seccionId": "potencia",
    "nombre": "Medición y Monitoreo",
    "imagen": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "orden": 4,
    "activo": true
  },
  {
    "id": "herr-el",
    "seccionId": "general",
    "nombre": "Herramientas Eléctricas",
    "imagen": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "herr-man",
    "seccionId": "general",
    "nombre": "Herramientas Manuales",
    "imagen": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "pinturas",
    "seccionId": "general",
    "nombre": "Pinturas y Revestimientos",
    "imagen": "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "seguridad",
    "seccionId": "general",
    "nombre": "Seguridad Personal (EPP)",
    "imagen": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80",
    "orden": 4,
    "activo": true
  },
  {
    "id": "construccion",
    "seccionId": "general",
    "nombre": "Construcción",
    "imagen": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    "orden": 5,
    "activo": true
  },
  {
    "id": "ferreteria",
    "seccionId": "general",
    "nombre": "Ferretería General",
    "imagen": "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=600&q=80",
    "orden": 6,
    "activo": true
  }
];

export const subfamilias = [
  {
    "id": "iluminacion-sf1",
    "familiaId": "iluminacion",
    "nombre": "Ampolletas LED",
    "imagen": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "iluminacion-sf2",
    "familiaId": "iluminacion",
    "nombre": "Paneles LED",
    "imagen": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "iluminacion-sf3",
    "familiaId": "iluminacion",
    "nombre": "Tiras LED",
    "imagen": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "iluminacion-sf4",
    "familiaId": "iluminacion",
    "nombre": "Reflectores y Luminarias",
    "imagen": "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    "orden": 4,
    "activo": true
  },
  {
    "id": "tableros-sf1",
    "familiaId": "tableros",
    "nombre": "Tableros eléctricos",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "tableros-sf2",
    "familiaId": "tableros",
    "nombre": "Interruptores automáticos",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "tableros-sf3",
    "familiaId": "tableros",
    "nombre": "Diferenciales (RCCB)",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "conductores-sf1",
    "familiaId": "conductores",
    "nombre": "Cable THHN unipolar",
    "imagen": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "conductores-sf2",
    "familiaId": "conductores",
    "nombre": "Cable bipolar y tripolar",
    "imagen": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "conductores-sf3",
    "familiaId": "conductores",
    "nombre": "Manguera flexible",
    "imagen": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "enchufes-sf1",
    "familiaId": "enchufes",
    "nombre": "Enchufes e interruptores domiciliarios",
    "imagen": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "enchufes-sf2",
    "familiaId": "enchufes",
    "nombre": "Tomas industriales",
    "imagen": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "enchufes-sf3",
    "familiaId": "enchufes",
    "nombre": "Multicontactos y alargadores",
    "imagen": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "canalizacion-sf1",
    "familiaId": "canalizacion",
    "nombre": "Tubo conduit PVC",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "canalizacion-sf2",
    "familiaId": "canalizacion",
    "nombre": "Cajas y accesorios",
    "imagen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "motores-sf1",
    "familiaId": "motores",
    "nombre": "Motores eléctricos trifásicos",
    "imagen": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "motores-sf2",
    "familiaId": "motores",
    "nombre": "Variadores de frecuencia",
    "imagen": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "motores-sf3",
    "familiaId": "motores",
    "nombre": "Arrancadores suaves",
    "imagen": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "automatizacion-sf1",
    "familiaId": "automatizacion",
    "nombre": "Contactores",
    "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "automatizacion-sf2",
    "familiaId": "automatizacion",
    "nombre": "Relés térmicos y de tiempo",
    "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "automatizacion-sf3",
    "familiaId": "automatizacion",
    "nombre": "PLC y controladores",
    "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "orden": 3,
    "activo": true
  },
  {
    "id": "automatizacion-sf4",
    "familiaId": "automatizacion",
    "nombre": "Sensores industriales",
    "imagen": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "orden": 4,
    "activo": true
  },
  {
    "id": "generacion-sf1",
    "familiaId": "generacion",
    "nombre": "UPS y respaldo de energía",
    "imagen": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "generacion-sf2",
    "familiaId": "generacion",
    "nombre": "Energía solar",
    "imagen": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    "orden": 2,
    "activo": true
  },
  {
    "id": "medicion-sf1",
    "familiaId": "medicion",
    "nombre": "Instrumentos de medición",
    "imagen": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "orden": 1,
    "activo": true
  },
  {
    "id": "medicion-sf2",
    "familiaId": "medicion",
    "nombre": "Detectores y verificadores",
    "imagen": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "orden": 2,
    "activo": true
  }
];
