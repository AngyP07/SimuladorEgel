window.TOPICS = [
  {
    "id": "hw-circuits",
    "title": "1.1 Circuitos eléctricos y electrónica",
    "shortTitle": "Circuitos",
    "tag": "Disciplinar · Implementación de hardware",
    "summary": "Analiza circuitos, arquitectura, sistemas embebidos y control.",
    "kicker": "11 reactivos en la distribución oficial",
    "color": "#2547ff",
    "bullets": [
      "Electrónica analógica y digital",
      "Arquitectura y memoria",
      "Sensores, actuadores y control"
    ],
    "concepts": [
      {
        "term": "Ley de Ohm",
        "explanation": "Relaciona voltaje, corriente y resistencia mediante V = I·R.",
        "memory": "Determinar una magnitud eléctrica a partir de las otras dos.",
        "trap": "No confundas Ley de Ohm con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Calcular la corriente de una carga cuando se conocen el voltaje aplicado y la resistencia.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Ley de corrientes de Kirchhoff",
        "explanation": "La suma algebraica de las corrientes que entran y salen de un nodo es cero.",
        "memory": "Plantear ecuaciones de conservación de corriente en nodos.",
        "trap": "No confundas Ley de corrientes de Kirchhoff con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Analizar cómo se reparte la corriente en un nodo con varias ramas.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Ley de voltajes de Kirchhoff",
        "explanation": "La suma algebraica de las caídas y elevaciones de voltaje en una trayectoria cerrada es cero.",
        "memory": "Plantear ecuaciones de voltaje en lazos cerrados.",
        "trap": "No confundas Ley de voltajes de Kirchhoff con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Analizar una malla eléctrica con varias fuentes y resistencias.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Resistencias en serie",
        "explanation": "Comparten la misma corriente y su resistencia equivalente es la suma de las resistencias.",
        "memory": "Simplificar una rama en la que circula la misma corriente.",
        "trap": "No confundas Resistencias en serie con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Obtener la resistencia equivalente de componentes conectados uno después de otro.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Resistencias en paralelo",
        "explanation": "Comparten el mismo voltaje y la inversa de la resistencia equivalente es la suma de inversas.",
        "memory": "Simplificar ramas que tienen la misma diferencia de potencial.",
        "trap": "No confundas Resistencias en paralelo con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Obtener la resistencia equivalente de varias ramas conectadas a los mismos dos nodos.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      }
    ],
    "area": "Implementación de hardware",
    "section": "Disciplinar",
    "officialCount": 11
  },
  {
    "id": "hw-architecture",
    "title": "1.2 Arquitectura de computadoras y su organización",
    "shortTitle": "Arquitectura",
    "tag": "Disciplinar · Implementación de hardware",
    "summary": "Analiza circuitos, arquitectura, sistemas embebidos y control.",
    "kicker": "11 reactivos en la distribución oficial",
    "color": "#5b5bd6",
    "bullets": [
      "Electrónica analógica y digital",
      "Arquitectura y memoria",
      "Sensores, actuadores y control"
    ],
    "concepts": [
      {
        "term": "Sistema binario",
        "explanation": "Representa información usando base 2, con los dígitos 0 y 1.",
        "memory": "Representar información con dos estados discretos.",
        "trap": "No confundas Sistema binario con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Interpretar datos internos de una computadora y realizar conversiones de base.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Complemento a dos",
        "explanation": "Representación binaria habitual de enteros con signo que simplifica sumas y restas.",
        "memory": "Representar enteros con signo de forma eficiente.",
        "trap": "No confundas Complemento a dos con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Codificar números negativos y operar con ellos en una ALU.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Unidad aritmético-lógica (ALU)",
        "explanation": "Parte del procesador que ejecuta operaciones aritméticas, lógicas y comparaciones.",
        "memory": "Ejecutar operaciones matemáticas y booleanas.",
        "trap": "No confundas Unidad aritmético-lógica (ALU) con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Realizar una suma, una operación AND o una comparación dentro del CPU.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Unidad de control",
        "explanation": "Coordina la ejecución de instrucciones y genera señales de control para los componentes del procesador.",
        "memory": "Secuenciar y coordinar el ciclo de instrucción.",
        "trap": "No confundas Unidad de control con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Decodificar una instrucción y ordenar transferencias entre registros, ALU y memoria.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Registros del CPU",
        "explanation": "Memoria muy rápida dentro del procesador usada para operandos, direcciones y estado.",
        "memory": "Reducir el tiempo de acceso a datos de uso inmediato.",
        "trap": "No confundas Registros del CPU con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Guardar temporalmente datos que la ALU utilizará inmediatamente.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      }
    ],
    "area": "Implementación de hardware",
    "section": "Disciplinar",
    "officialCount": 11
  },
  {
    "id": "hw-embedded",
    "title": "1.3 Sistemas embebidos",
    "shortTitle": "Embebidos",
    "tag": "Disciplinar · Implementación de hardware",
    "summary": "Analiza circuitos, arquitectura, sistemas embebidos y control.",
    "kicker": "13 reactivos en la distribución oficial",
    "color": "#7c4dff",
    "bullets": [
      "Electrónica analógica y digital",
      "Arquitectura y memoria",
      "Sensores, actuadores y control"
    ],
    "concepts": [
      {
        "term": "Microcontrolador",
        "explanation": "Integra CPU, memoria y periféricos de entrada/salida en un mismo circuito, orientado al control dedicado.",
        "memory": "Integrar procesamiento y periféricos con bajo costo y consumo.",
        "trap": "No confundas Microcontrolador con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Controlar sensores y actuadores en un dispositivo de propósito específico.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "Firmware",
        "explanation": "Software de bajo nivel almacenado en el dispositivo que controla directamente su hardware.",
        "memory": "Implementar la lógica cercana al hardware del dispositivo.",
        "trap": "No confundas Firmware con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Definir el comportamiento de arranque y control de un sistema embebido.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "GPIO",
        "explanation": "Pines digitales configurables como entradas o salidas de propósito general.",
        "memory": "Interactuar con señales digitales externas simples.",
        "trap": "No confundas GPIO con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Leer un interruptor o activar un LED desde un microcontrolador.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "PWM",
        "explanation": "Modulación por ancho de pulso que varía el ciclo de trabajo de una señal digital.",
        "memory": "Controlar potencia promedio con una salida digital.",
        "trap": "No confundas PWM con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Regular la velocidad de un motor o el brillo de un LED.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "UART",
        "explanation": "Interfaz serial asíncrona que transmite datos usando líneas de transmisión y recepción.",
        "memory": "Establecer comunicación serial sencilla punto a punto.",
        "trap": "No confundas UART con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Comunicar un microcontrolador con un módulo serial sin línea de reloj compartida.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      }
    ],
    "area": "Implementación de hardware",
    "section": "Disciplinar",
    "officialCount": 13
  },
  {
    "id": "hw-control",
    "title": "1.4 Automatización y control de procesos",
    "shortTitle": "Control",
    "tag": "Disciplinar · Implementación de hardware",
    "summary": "Analiza circuitos, arquitectura, sistemas embebidos y control.",
    "kicker": "14 reactivos en la distribución oficial",
    "color": "#a64dff",
    "bullets": [
      "Electrónica analógica y digital",
      "Arquitectura y memoria",
      "Sensores, actuadores y control"
    ],
    "concepts": [
      {
        "term": "Control en lazo abierto",
        "explanation": "La acción de control no depende de la salida medida del proceso.",
        "memory": "Controlar procesos simples cuando la retroalimentación no es necesaria.",
        "trap": "No confundas Control en lazo abierto con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Operar un sistema con una acción fija sin medir el resultado real.",
          "Peso en simulacro oficial de la subárea: 14 reactivos."
        ]
      },
      {
        "term": "Control en lazo cerrado",
        "explanation": "Compara la salida medida con una referencia y ajusta la acción de control mediante realimentación.",
        "memory": "Corregir el error usando medición de la salida.",
        "trap": "No confundas Control en lazo cerrado con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Mantener una temperatura cercana a un valor objetivo a pesar de perturbaciones.",
          "Peso en simulacro oficial de la subárea: 14 reactivos."
        ]
      },
      {
        "term": "Realimentación negativa",
        "explanation": "Devuelve una parte de la salida para reducir la diferencia respecto a la referencia.",
        "memory": "Mejorar precisión y rechazo de perturbaciones.",
        "trap": "No confundas Realimentación negativa con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Estabilizar una variable y disminuir el error de seguimiento.",
          "Peso en simulacro oficial de la subárea: 14 reactivos."
        ]
      },
      {
        "term": "Función de transferencia",
        "explanation": "Relaciona salida y entrada de un sistema lineal en el dominio de Laplace bajo condiciones iniciales nulas.",
        "memory": "Analizar respuesta y estabilidad mediante un modelo entrada-salida.",
        "trap": "No confundas Función de transferencia con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Modelar matemáticamente la dinámica de un proceso lineal.",
          "Peso en simulacro oficial de la subárea: 14 reactivos."
        ]
      },
      {
        "term": "Respuesta al escalón",
        "explanation": "Describe cómo evoluciona un sistema cuando la entrada cambia bruscamente a un valor constante.",
        "memory": "Caracterizar el comportamiento transitorio de un sistema.",
        "trap": "No confundas Respuesta al escalón con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Evaluar tiempo de establecimiento, sobreimpulso y error estacionario.",
          "Peso en simulacro oficial de la subárea: 14 reactivos."
        ]
      }
    ],
    "area": "Implementación de hardware",
    "section": "Disciplinar",
    "officialCount": 14
  },
  {
    "id": "net-design",
    "title": "2.1 Diseño de redes",
    "shortTitle": "Diseño de redes",
    "tag": "Disciplinar · Implementación de redes de computadoras",
    "summary": "Diseña, administra y protege redes con protocolos, estándares y herramientas de evaluación.",
    "kicker": "11 reactivos en la distribución oficial",
    "color": "#00a8cc",
    "bullets": [
      "OSI/TCP-IP y direccionamiento",
      "Servicios y administración",
      "Seguridad, monitoreo y evaluación"
    ],
    "concepts": [
      {
        "term": "Modelo OSI",
        "explanation": "Modelo de referencia de siete capas que separa funciones de comunicación.",
        "memory": "Organizar la comunicación en capas con responsabilidades definidas.",
        "trap": "No confundas Modelo OSI con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Ubicar protocolos y funciones de red por niveles para diseñar y diagnosticar.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Modelo TCP/IP",
        "explanation": "Arquitectura práctica de protocolos usada en Internet, con capas de acceso, Internet, transporte y aplicación.",
        "memory": "Relacionar protocolos de Internet con una arquitectura por capas.",
        "trap": "No confundas Modelo TCP/IP con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Explicar la comunicación IP real entre aplicaciones y redes.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Topología estrella",
        "explanation": "Conecta los nodos a un dispositivo central, comúnmente un switch.",
        "memory": "Aislar fallas de enlaces individuales y facilitar administración.",
        "trap": "No confundas Topología estrella con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Diseñar una LAN donde cada equipo tenga un enlace independiente hacia un punto central.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Máscara de subred",
        "explanation": "Indica qué bits de una dirección IP pertenecen a red y cuáles a host.",
        "memory": "Separar la parte de red y host de una dirección IP.",
        "trap": "No confundas Máscara de subred con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Determinar si dos direcciones IPv4 están en la misma subred.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      },
      {
        "term": "Direcciones IPv4 privadas",
        "explanation": "Rangos reservados para redes internas que no se enrutan directamente en Internet.",
        "memory": "Direccionar redes internas y usar NAT para salida a Internet.",
        "trap": "No confundas Direcciones IPv4 privadas con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Asignar direcciones internas a equipos de una organización sin consumir direcciones públicas.",
          "Peso en simulacro oficial de la subárea: 11 reactivos."
        ]
      }
    ],
    "area": "Implementación de redes de computadoras",
    "section": "Disciplinar",
    "officialCount": 11
  },
  {
    "id": "net-admin",
    "title": "2.2 Administración de redes",
    "shortTitle": "Administración",
    "tag": "Disciplinar · Implementación de redes de computadoras",
    "summary": "Diseña, administra y protege redes con protocolos, estándares y herramientas de evaluación.",
    "kicker": "13 reactivos en la distribución oficial",
    "color": "#00b894",
    "bullets": [
      "OSI/TCP-IP y direccionamiento",
      "Servicios y administración",
      "Seguridad, monitoreo y evaluación"
    ],
    "concepts": [
      {
        "term": "DHCP",
        "explanation": "Protocolo que asigna automáticamente parámetros de red como dirección IP, máscara, gateway y DNS.",
        "memory": "Centralizar y automatizar la configuración IP de hosts.",
        "trap": "No confundas DHCP con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Configurar de forma automática a muchos clientes que se conectan a una LAN.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "DNS",
        "explanation": "Sistema que traduce nombres de dominio a direcciones IP y otros registros.",
        "memory": "Permitir uso de nombres legibles en lugar de direcciones numéricas.",
        "trap": "No confundas DNS con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Resolver un nombre como servidor.ejemplo.mx a una dirección IP.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "NAT/PAT",
        "explanation": "Traduce direcciones y, en PAT, puertos entre redes privadas y públicas.",
        "memory": "Conservar direcciones públicas y ocultar direccionamiento interno.",
        "trap": "No confundas NAT/PAT con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Permitir que muchos equipos privados compartan una dirección pública.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "SNMP",
        "explanation": "Protocolo de administración usado para consultar y recibir información de dispositivos de red.",
        "memory": "Centralizar monitoreo mediante objetos de administración.",
        "trap": "No confundas SNMP con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Supervisar estado, interfaces y contadores de switches y routers.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "ICMP",
        "explanation": "Protocolo de control y diagnóstico usado por herramientas como ping.",
        "memory": "Diagnosticar conectividad a nivel de Internet.",
        "trap": "No confundas ICMP con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Comprobar alcance IP y recibir mensajes de error de red.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      }
    ],
    "area": "Implementación de redes de computadoras",
    "section": "Disciplinar",
    "officialCount": 13
  },
  {
    "id": "net-security",
    "title": "2.3 Seguridad y evaluación en redes",
    "shortTitle": "Seguridad de red",
    "tag": "Disciplinar · Implementación de redes de computadoras",
    "summary": "Diseña, administra y protege redes con protocolos, estándares y herramientas de evaluación.",
    "kicker": "17 reactivos en la distribución oficial",
    "color": "#009688",
    "bullets": [
      "OSI/TCP-IP y direccionamiento",
      "Servicios y administración",
      "Seguridad, monitoreo y evaluación"
    ],
    "concepts": [
      {
        "term": "Confidencialidad",
        "explanation": "Propiedad que evita que información sea revelada a entidades no autorizadas.",
        "memory": "Limitar el acceso a la información solo a sujetos autorizados.",
        "trap": "No confundas Confidencialidad con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Proteger datos sensibles contra lectura por terceros.",
          "Peso en simulacro oficial de la subárea: 17 reactivos."
        ]
      },
      {
        "term": "Integridad",
        "explanation": "Propiedad que protege la exactitud y evita modificaciones no autorizadas de la información.",
        "memory": "Conservar datos completos y sin cambios indebidos.",
        "trap": "No confundas Integridad con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Detectar si un archivo o mensaje fue alterado.",
          "Peso en simulacro oficial de la subárea: 17 reactivos."
        ]
      },
      {
        "term": "Disponibilidad",
        "explanation": "Propiedad que procura que sistemas y datos estén accesibles cuando se requieren.",
        "memory": "Reducir interrupciones y asegurar acceso oportuno.",
        "trap": "No confundas Disponibilidad con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Diseñar redundancia para mantener un servicio operativo ante fallas.",
          "Peso en simulacro oficial de la subárea: 17 reactivos."
        ]
      },
      {
        "term": "Autenticación",
        "explanation": "Proceso de verificar la identidad de un usuario, dispositivo o servicio.",
        "memory": "Confirmar quién intenta acceder.",
        "trap": "No confundas Autenticación con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Comprobar credenciales antes de permitir el inicio de sesión.",
          "Peso en simulacro oficial de la subárea: 17 reactivos."
        ]
      },
      {
        "term": "Autorización",
        "explanation": "Proceso de determinar qué acciones o recursos puede usar una identidad ya autenticada.",
        "memory": "Aplicar permisos de acuerdo con roles o políticas.",
        "trap": "No confundas Autorización con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Decidir si un usuario puede modificar una configuración después de iniciar sesión.",
          "Peso en simulacro oficial de la subárea: 17 reactivos."
        ]
      }
    ],
    "area": "Implementación de redes de computadoras",
    "section": "Disciplinar",
    "officialCount": 17
  },
  {
    "id": "sw-engineering",
    "title": "3.1 Ingeniería de software",
    "shortTitle": "Ing. software",
    "tag": "Disciplinar · Desarrollo de software",
    "summary": "Integra ingeniería de software, programación, sistemas operativos, datos, algoritmos e IA.",
    "kicker": "16 reactivos en la distribución oficial",
    "color": "#ff6b6b",
    "bullets": [
      "Requisitos, diseño y pruebas",
      "Programación y software base",
      "Bases de datos, estructuras y algoritmos"
    ],
    "concepts": [
      {
        "term": "Requisito funcional",
        "explanation": "Describe un servicio, comportamiento o capacidad que el sistema debe proporcionar.",
        "memory": "Definir qué debe hacer el software.",
        "trap": "No confundas Requisito funcional con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Documentar que el sistema debe permitir registrar una venta y calcular su total.",
          "Peso en simulacro oficial de la subárea: 16 reactivos."
        ]
      },
      {
        "term": "Requisito no funcional",
        "explanation": "Define atributos o restricciones de calidad como rendimiento, seguridad o disponibilidad.",
        "memory": "Definir cómo debe comportarse o qué restricciones debe cumplir el sistema.",
        "trap": "No confundas Requisito no funcional con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Establecer que una respuesta debe entregarse en menos de dos segundos.",
          "Peso en simulacro oficial de la subárea: 16 reactivos."
        ]
      },
      {
        "term": "Caso de uso",
        "explanation": "Modela interacciones entre actores y un sistema para alcanzar un objetivo.",
        "memory": "Capturar escenarios funcionales desde la perspectiva de actores.",
        "trap": "No confundas Caso de uso con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Describir cómo un cliente realiza una compra y qué respuestas obtiene del sistema.",
          "Peso en simulacro oficial de la subárea: 16 reactivos."
        ]
      },
      {
        "term": "UML",
        "explanation": "Lenguaje de modelado con diagramas para representar estructura y comportamiento de sistemas.",
        "memory": "Visualizar y documentar modelos de software.",
        "trap": "No confundas UML con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Comunicar clases, secuencias o casos de uso durante el diseño.",
          "Peso en simulacro oficial de la subárea: 16 reactivos."
        ]
      },
      {
        "term": "Scrum",
        "explanation": "Marco ágil iterativo que organiza trabajo en sprints con roles, eventos y backlog.",
        "memory": "Favorecer entrega incremental y adaptación continua.",
        "trap": "No confundas Scrum con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Desarrollar incrementos frecuentes priorizados por valor y revisarlos con interesados.",
          "Peso en simulacro oficial de la subárea: 16 reactivos."
        ]
      }
    ],
    "area": "Desarrollo de software",
    "section": "Disciplinar",
    "officialCount": 16
  },
  {
    "id": "sw-programming",
    "title": "3.2 Programación y software base",
    "shortTitle": "Programación",
    "tag": "Disciplinar · Desarrollo de software",
    "summary": "Integra ingeniería de software, programación, sistemas operativos, datos, algoritmos e IA.",
    "kicker": "13 reactivos en la distribución oficial",
    "color": "#ff8a00",
    "bullets": [
      "Requisitos, diseño y pruebas",
      "Programación y software base",
      "Bases de datos, estructuras y algoritmos"
    ],
    "concepts": [
      {
        "term": "Encapsulamiento",
        "explanation": "Oculta detalles internos y expone una interfaz controlada para usar un objeto o módulo.",
        "memory": "Reducir dependencia de la implementación interna.",
        "trap": "No confundas Encapsulamiento con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Proteger el estado de una clase y modificarlo mediante operaciones definidas.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "Herencia",
        "explanation": "Permite crear una clase a partir de otra reutilizando y especializando comportamiento.",
        "memory": "Reutilizar estructura y expresar relaciones de especialización.",
        "trap": "No confundas Herencia con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Modelar una clase especializada que comparte atributos y operaciones de una clase general.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "Polimorfismo",
        "explanation": "Permite tratar objetos de distintos tipos mediante una interfaz común y ejecutar comportamiento específico.",
        "memory": "Desacoplar al cliente de implementaciones concretas.",
        "trap": "No confundas Polimorfismo con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Invocar el mismo método sobre implementaciones diferentes de una interfaz.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "Manejo de excepciones",
        "explanation": "Mecanismo para detectar y tratar condiciones anómalas separándolas del flujo normal.",
        "memory": "Gestionar errores de ejecución de forma estructurada.",
        "trap": "No confundas Manejo de excepciones con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Recuperarse de un archivo inexistente sin terminar abruptamente toda la aplicación.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      },
      {
        "term": "Recursividad",
        "explanation": "Técnica en la que una función se llama a sí misma sobre un problema más pequeño hasta un caso base.",
        "memory": "Expresar problemas definidos en términos de subproblemas similares.",
        "trap": "No confundas Recursividad con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Recorrer naturalmente una estructura jerárquica como un árbol.",
          "Peso en simulacro oficial de la subárea: 13 reactivos."
        ]
      }
    ],
    "area": "Desarrollo de software",
    "section": "Disciplinar",
    "officialCount": 13
  },
  {
    "id": "sw-data",
    "title": "3.3 Manejo de datos y algoritmos",
    "shortTitle": "Datos y algoritmos",
    "tag": "Disciplinar · Desarrollo de software",
    "summary": "Integra ingeniería de software, programación, sistemas operativos, datos, algoritmos e IA.",
    "kicker": "21 reactivos en la distribución oficial",
    "color": "#f2b705",
    "bullets": [
      "Requisitos, diseño y pruebas",
      "Programación y software base",
      "Bases de datos, estructuras y algoritmos"
    ],
    "concepts": [
      {
        "term": "Clave primaria",
        "explanation": "Atributo o conjunto de atributos que identifica de manera única cada fila de una tabla.",
        "memory": "Garantizar identificación única de registros.",
        "trap": "No confundas Clave primaria con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Evitar que dos registros representen la misma entidad con el mismo identificador.",
          "Peso en simulacro oficial de la subárea: 21 reactivos."
        ]
      },
      {
        "term": "Clave foránea",
        "explanation": "Atributo que referencia una clave candidata de otra tabla para representar relaciones.",
        "memory": "Mantener relaciones entre tablas y apoyar integridad referencial.",
        "trap": "No confundas Clave foránea con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Vincular cada pedido con el cliente al que pertenece.",
          "Peso en simulacro oficial de la subárea: 21 reactivos."
        ]
      },
      {
        "term": "Normalización",
        "explanation": "Proceso de organizar tablas para reducir redundancia y anomalías de actualización.",
        "memory": "Mejorar consistencia del modelo relacional.",
        "trap": "No confundas Normalización con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Separar datos repetidos en relaciones bien estructuradas.",
          "Peso en simulacro oficial de la subárea: 21 reactivos."
        ]
      },
      {
        "term": "JOIN",
        "explanation": "Operación SQL que combina filas de tablas relacionadas según una condición.",
        "memory": "Consultar información distribuida entre relaciones.",
        "trap": "No confundas JOIN con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Obtener pedidos junto con el nombre del cliente almacenado en otra tabla.",
          "Peso en simulacro oficial de la subárea: 21 reactivos."
        ]
      },
      {
        "term": "Transacción ACID",
        "explanation": "Unidad de trabajo que busca atomicidad, consistencia, aislamiento y durabilidad.",
        "memory": "Proteger la consistencia ante fallas y concurrencia.",
        "trap": "No confundas Transacción ACID con conceptos cercanos de la misma subárea: identifica primero qué función resuelve.",
        "quickFacts": [
          "Registrar un pago y actualizar un saldo de manera indivisible.",
          "Peso en simulacro oficial de la subárea: 21 reactivos."
        ]
      }
    ],
    "area": "Desarrollo de software",
    "section": "Disciplinar",
    "officialCount": 21
  },
  {
    "id": "read-study",
    "title": "4.1 Comprensión lectora · ámbito de estudio",
    "shortTitle": "Lectura estudio",
    "tag": "Lenguaje y Comunicación · Comprensión lectora",
    "summary": "Practica identificación, interpretación y evaluación en textos académicos, literarios y sociales.",
    "kicker": "12 reactivos en la distribución oficial",
    "color": "#3478f6",
    "bullets": [
      "Identificación de información",
      "Interpretación global y local",
      "Evaluación de forma y contenido"
    ],
    "concepts": [
      {
        "term": "Identificación de información",
        "explanation": "Localiza datos explícitos o relaciones que pueden recuperarse directamente del texto.",
        "memory": "Regresa al fragmento y verifica la evidencia exacta.",
        "trap": "Elegir una opción plausible pero no respaldada por el texto.",
        "quickFacts": [
          "Busca nombres, fechas, acciones y relaciones.",
          "No completes con conocimiento externo."
        ]
      },
      {
        "term": "Interpretación",
        "explanation": "Construye el sentido global o explica el significado de una parte del texto a partir de sus relaciones internas.",
        "memory": "Pregunta qué idea une la mayor cantidad de información.",
        "trap": "Confundir una idea secundaria con la idea central.",
        "quickFacts": [
          "Incluye inferencias justificadas.",
          "Puede centrarse en una frase o en todo el texto."
        ]
      },
      {
        "term": "Evaluación de forma y contenido",
        "explanation": "Valora decisiones del autor, función de elementos y ejemplos coherentes con lo planteado.",
        "memory": "La mejor opción debe poder justificarse con la lógica del texto.",
        "trap": "Escoger una opinión personal sin evidencia.",
        "quickFacts": [
          "Conecta texto y situación plausible.",
          "Evalúa razones, ejemplos y organización."
        ]
      },
      {
        "term": "Lectura experta",
        "explanation": "Alterna entre texto, pregunta y opciones para verificar evidencia antes de responder.",
        "memory": "Texto → pregunta → texto.",
        "trap": "Responder solo con la primera impresión.",
        "quickFacts": [
          "Descarta respuestas parcialmente correctas.",
          "Lee el estímulo completo."
        ]
      },
      {
        "term": "Género textual",
        "explanation": "El ámbito determina géneros frecuentes: académico, literario o de participación social.",
        "memory": "Reconoce primero para qué fue escrito el texto.",
        "trap": "Juzgar un género con las reglas comunicativas de otro.",
        "quickFacts": [
          "Estudio: reseña/artículo.",
          "Literario: cuento/ensayo.",
          "Social: convocatoria/nota."
        ]
      }
    ],
    "area": "Comprensión lectora",
    "section": "Lenguaje y Comunicación",
    "officialCount": 12
  },
  {
    "id": "read-literary",
    "title": "4.2 Comprensión lectora · ámbito literario",
    "shortTitle": "Lectura literaria",
    "tag": "Lenguaje y Comunicación · Comprensión lectora",
    "summary": "Practica identificación, interpretación y evaluación en textos académicos, literarios y sociales.",
    "kicker": "12 reactivos en la distribución oficial",
    "color": "#8e44ff",
    "bullets": [
      "Identificación de información",
      "Interpretación global y local",
      "Evaluación de forma y contenido"
    ],
    "concepts": [
      {
        "term": "Identificación de información",
        "explanation": "Localiza datos explícitos o relaciones que pueden recuperarse directamente del texto.",
        "memory": "Regresa al fragmento y verifica la evidencia exacta.",
        "trap": "Elegir una opción plausible pero no respaldada por el texto.",
        "quickFacts": [
          "Busca nombres, fechas, acciones y relaciones.",
          "No completes con conocimiento externo."
        ]
      },
      {
        "term": "Interpretación",
        "explanation": "Construye el sentido global o explica el significado de una parte del texto a partir de sus relaciones internas.",
        "memory": "Pregunta qué idea une la mayor cantidad de información.",
        "trap": "Confundir una idea secundaria con la idea central.",
        "quickFacts": [
          "Incluye inferencias justificadas.",
          "Puede centrarse en una frase o en todo el texto."
        ]
      },
      {
        "term": "Evaluación de forma y contenido",
        "explanation": "Valora decisiones del autor, función de elementos y ejemplos coherentes con lo planteado.",
        "memory": "La mejor opción debe poder justificarse con la lógica del texto.",
        "trap": "Escoger una opinión personal sin evidencia.",
        "quickFacts": [
          "Conecta texto y situación plausible.",
          "Evalúa razones, ejemplos y organización."
        ]
      },
      {
        "term": "Lectura experta",
        "explanation": "Alterna entre texto, pregunta y opciones para verificar evidencia antes de responder.",
        "memory": "Texto → pregunta → texto.",
        "trap": "Responder solo con la primera impresión.",
        "quickFacts": [
          "Descarta respuestas parcialmente correctas.",
          "Lee el estímulo completo."
        ]
      },
      {
        "term": "Género textual",
        "explanation": "El ámbito determina géneros frecuentes: académico, literario o de participación social.",
        "memory": "Reconoce primero para qué fue escrito el texto.",
        "trap": "Juzgar un género con las reglas comunicativas de otro.",
        "quickFacts": [
          "Estudio: reseña/artículo.",
          "Literario: cuento/ensayo.",
          "Social: convocatoria/nota."
        ]
      }
    ],
    "area": "Comprensión lectora",
    "section": "Lenguaje y Comunicación",
    "officialCount": 12
  },
  {
    "id": "read-social",
    "title": "4.3 Comprensión lectora · participación social",
    "shortTitle": "Lectura social",
    "tag": "Lenguaje y Comunicación · Comprensión lectora",
    "summary": "Practica identificación, interpretación y evaluación en textos académicos, literarios y sociales.",
    "kicker": "6 reactivos en la distribución oficial",
    "color": "#e84393",
    "bullets": [
      "Identificación de información",
      "Interpretación global y local",
      "Evaluación de forma y contenido"
    ],
    "concepts": [
      {
        "term": "Identificación de información",
        "explanation": "Localiza datos explícitos o relaciones que pueden recuperarse directamente del texto.",
        "memory": "Regresa al fragmento y verifica la evidencia exacta.",
        "trap": "Elegir una opción plausible pero no respaldada por el texto.",
        "quickFacts": [
          "Busca nombres, fechas, acciones y relaciones.",
          "No completes con conocimiento externo."
        ]
      },
      {
        "term": "Interpretación",
        "explanation": "Construye el sentido global o explica el significado de una parte del texto a partir de sus relaciones internas.",
        "memory": "Pregunta qué idea une la mayor cantidad de información.",
        "trap": "Confundir una idea secundaria con la idea central.",
        "quickFacts": [
          "Incluye inferencias justificadas.",
          "Puede centrarse en una frase o en todo el texto."
        ]
      },
      {
        "term": "Evaluación de forma y contenido",
        "explanation": "Valora decisiones del autor, función de elementos y ejemplos coherentes con lo planteado.",
        "memory": "La mejor opción debe poder justificarse con la lógica del texto.",
        "trap": "Escoger una opinión personal sin evidencia.",
        "quickFacts": [
          "Conecta texto y situación plausible.",
          "Evalúa razones, ejemplos y organización."
        ]
      },
      {
        "term": "Lectura experta",
        "explanation": "Alterna entre texto, pregunta y opciones para verificar evidencia antes de responder.",
        "memory": "Texto → pregunta → texto.",
        "trap": "Responder solo con la primera impresión.",
        "quickFacts": [
          "Descarta respuestas parcialmente correctas.",
          "Lee el estímulo completo."
        ]
      },
      {
        "term": "Género textual",
        "explanation": "El ámbito determina géneros frecuentes: académico, literario o de participación social.",
        "memory": "Reconoce primero para qué fue escrito el texto.",
        "trap": "Juzgar un género con las reglas comunicativas de otro.",
        "quickFacts": [
          "Estudio: reseña/artículo.",
          "Literario: cuento/ensayo.",
          "Social: convocatoria/nota."
        ]
      }
    ],
    "area": "Comprensión lectora",
    "section": "Lenguaje y Comunicación",
    "officialCount": 6
  },
  {
    "id": "write-study",
    "title": "5.1 Redacción indirecta · ámbito de estudio",
    "shortTitle": "Redacción estudio",
    "tag": "Lenguaje y Comunicación · Redacción indirecta",
    "summary": "Selecciona textos adecuados por propósito, coherencia, concordancia, puntuación y acentuación.",
    "kicker": "15 reactivos en la distribución oficial",
    "color": "#ff4d6d",
    "bullets": [
      "Dimensión comunicativa",
      "Gramática y semántica",
      "Ortografía"
    ],
    "concepts": [
      {
        "term": "Dimensión comunicativa",
        "explanation": "Selecciona el texto cuyo género, propósito y registro corresponden a la situación comunicativa.",
        "memory": "Quién escribe + para quién + con qué propósito.",
        "trap": "Elegir un texto correcto gramaticalmente pero inadecuado para el receptor.",
        "quickFacts": [
          "Registro formal, informal o especializado.",
          "El género debe corresponder al objetivo."
        ]
      },
      {
        "term": "Concordancia",
        "explanation": "Mantiene correspondencia adecuada de género, número y persona entre los elementos de la oración.",
        "memory": "Sujeto y verbo deben coincidir; sustantivos y modificadores deben concordar.",
        "trap": "Dejarse llevar por el sustantivo más cercano al verbo.",
        "quickFacts": [
          "Concordancia nominal.",
          "Concordancia verbal."
        ]
      },
      {
        "term": "Cohesión",
        "explanation": "Conecta oraciones mediante pronombres, conectores y relaciones léxico-semánticas sin romper el sentido.",
        "memory": "Cada oración debe enlazar con la anterior y preparar la siguiente.",
        "trap": "Usar conectores que contradicen la relación lógica.",
        "quickFacts": [
          "Cohesión gramatical.",
          "Cohesión léxico-semántica y textual."
        ]
      },
      {
        "term": "Puntuación",
        "explanation": "Organiza las relaciones sintácticas y el sentido mediante signos como coma, punto, dos puntos y punto y coma.",
        "memory": "La puntuación debe aclarar, no fragmentar arbitrariamente.",
        "trap": "Separar sujeto y verbo con una coma sin razón.",
        "quickFacts": [
          "Revisa incisos y enumeraciones.",
          "Cuida dos puntos y punto y coma."
        ]
      },
      {
        "term": "Acentuación y grafías",
        "explanation": "Selecciona formas que siguen la norma ortográfica, incluidos acentos diacríticos y escritura correcta de palabras.",
        "memory": "Revisa la función de monosílabos como tú/tu, él/el, sé/se.",
        "trap": "Poner tilde por énfasis y no por función gramatical.",
        "quickFacts": [
          "Incluye acentuación.",
          "Incluye grafías y mayúsculas."
        ]
      }
    ],
    "area": "Redacción indirecta",
    "section": "Lenguaje y Comunicación",
    "officialCount": 15
  },
  {
    "id": "write-social",
    "title": "5.2 Redacción indirecta · participación social",
    "shortTitle": "Redacción social",
    "tag": "Lenguaje y Comunicación · Redacción indirecta",
    "summary": "Selecciona textos adecuados por propósito, coherencia, concordancia, puntuación y acentuación.",
    "kicker": "15 reactivos en la distribución oficial",
    "color": "#d63031",
    "bullets": [
      "Dimensión comunicativa",
      "Gramática y semántica",
      "Ortografía"
    ],
    "concepts": [
      {
        "term": "Dimensión comunicativa",
        "explanation": "Selecciona el texto cuyo género, propósito y registro corresponden a la situación comunicativa.",
        "memory": "Quién escribe + para quién + con qué propósito.",
        "trap": "Elegir un texto correcto gramaticalmente pero inadecuado para el receptor.",
        "quickFacts": [
          "Registro formal, informal o especializado.",
          "El género debe corresponder al objetivo."
        ]
      },
      {
        "term": "Concordancia",
        "explanation": "Mantiene correspondencia adecuada de género, número y persona entre los elementos de la oración.",
        "memory": "Sujeto y verbo deben coincidir; sustantivos y modificadores deben concordar.",
        "trap": "Dejarse llevar por el sustantivo más cercano al verbo.",
        "quickFacts": [
          "Concordancia nominal.",
          "Concordancia verbal."
        ]
      },
      {
        "term": "Cohesión",
        "explanation": "Conecta oraciones mediante pronombres, conectores y relaciones léxico-semánticas sin romper el sentido.",
        "memory": "Cada oración debe enlazar con la anterior y preparar la siguiente.",
        "trap": "Usar conectores que contradicen la relación lógica.",
        "quickFacts": [
          "Cohesión gramatical.",
          "Cohesión léxico-semántica y textual."
        ]
      },
      {
        "term": "Puntuación",
        "explanation": "Organiza las relaciones sintácticas y el sentido mediante signos como coma, punto, dos puntos y punto y coma.",
        "memory": "La puntuación debe aclarar, no fragmentar arbitrariamente.",
        "trap": "Separar sujeto y verbo con una coma sin razón.",
        "quickFacts": [
          "Revisa incisos y enumeraciones.",
          "Cuida dos puntos y punto y coma."
        ]
      },
      {
        "term": "Acentuación y grafías",
        "explanation": "Selecciona formas que siguen la norma ortográfica, incluidos acentos diacríticos y escritura correcta de palabras.",
        "memory": "Revisa la función de monosílabos como tú/tu, él/el, sé/se.",
        "trap": "Poner tilde por énfasis y no por función gramatical.",
        "quickFacts": [
          "Incluye acentuación.",
          "Incluye grafías y mayúsculas."
        ]
      }
    ],
    "area": "Redacción indirecta",
    "section": "Lenguaje y Comunicación",
    "officialCount": 15
  }
];
