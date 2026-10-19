# EGEL ICOMPU Study Lab

Simulador estático para estudiar el **EGEL Plus ICOMPU** desde el navegador. No necesita servidor, base de datos ni instalación.

## Abrir

1. Descomprime la carpeta.
2. Abre `index.html` en Chrome, Edge, Firefox o Safari.
3. El progreso se guarda localmente en el navegador mediante `localStorage`.

## Incluye

- **890 reactivos originales de práctica** organizados en 15 subáreas.
- Prácticas aleatorias de **10, 20 y 50 reactivos**.
- **Simulacro de 200 reactivos** con la distribución del EGEL Plus ICOMPU 2023:
  - 140 disciplinares.
  - 60 de Lenguaje y Comunicación.
- Simulacros completos por área: Hardware (49), Redes (41), Software (50), Comprensión lectora (30) y Redacción indirecta (30).
- Filtro por área o subárea.
- Modo práctica con retroalimentación inmediata.
- Modo simulación con revisión al final.
- Temporizador opcional a ritmo de 2 min 24 s por reactivo (equivalente a 8 h / 200).
- Multirreactivos de comprensión lectora con estímulo compartido.
- Tarjetas de memoria, registro de errores y progreso acumulado por subárea.

## Criterio utilizado

La estructura vigente del simulador sigue la **Guía para el sustentante EGEL Plus ICOMPU (2023)**: 200 reactivos y tres opciones de respuesta. El PDF de práctica más antiguo se utilizó como referencia para ampliar la cobertura temática y conservar estilos de pregunta como cuestionamiento directo, completamiento, ordenamiento, relación de elementos y casos compartidos, pero sus reactivos de cuatro opciones no se copiaron como formato vigente.

Las preguntas del banco son material de práctica redactado para este simulador. **No son reactivos oficiales de Ceneval ni una reproducción del examen real.**

## Archivos principales

- `index.html` — interfaz.
- `css/styles.css` — diseño responsive.
- `js/app.js` — lógica del simulador.
- `data/topics.js` — temario y tarjetas.
- `data/questions.js` — banco de reactivos.
- `data/exam-sets.js` — distribuciones de simulacros.
- `data/build-report.json` — conteos del banco.


## Actualización de reactivos (octubre de 2026)

Se incorporaron reactivos nuevos basados en los documentos proporcionados sobre direccionamiento IPv4/subneteo, redes, seguridad, ingeniería de software, compiladores, estructuras de datos, bases de datos, arquitectura de computadoras, sistemas embebidos, control, comprensión lectora y redacción. Cada reactivo agregado incluye una explicación en la retroalimentación. Se revisó la duplicación exacta por enunciado contra el banco existente; no se copiaron reactivos con enunciado idéntico. Las preguntas son de práctica adaptadas, no una reproducción literal de las guías.


## Actualización ampliada de reactivos

Se incorporó un conjunto ampliado de reactivos adaptados de las prácticas de las guías EGEL de Ingeniería de Software e Ingeniería Computacional. Se conservaron los reactivos originales, se ubicaron los nuevos por tema, se añadieron explicaciones de retroalimentación y se filtraron coincidencias textuales cercanas. También se conservaron los reactivos previos sobre subneteo.

Nota: las explicaciones de reactivos importados indican por qué la opción registrada en la clave del documento es la correcta; algunos reactivos pueden tener erratas de OCR heredadas del PDF y conviene revisar manualmente los reactivos señalados por su fuente.


La actualización ampliada incluye también los ejercicios propuestos de subneteo y reactivos elaborados a partir de los ejercicios resueltos del Workbook de direccionamiento IP. Los reactivos que requieren seleccionar varias opciones usan selección múltiple en la interfaz.


La actualización ampliada incluye también los ejercicios propuestos de subneteo y reactivos elaborados a partir de los ejercicios resueltos del Workbook de direccionamiento IP. Los reactivos que requieren seleccionar varias opciones usan selección múltiple en la interfaz.


La actualización ampliada incluye también los ejercicios propuestos de subneteo y reactivos elaborados a partir de los ejercicios resueltos del Workbook de direccionamiento IP. Los reactivos que requieren seleccionar varias opciones usan selección múltiple en la interfaz.


Conteo de esta compilación: 1,424 reactivos en total. Incluye 890 originales, 30 reactivos agregados en la actualización previa y 504 reactivos adicionales extraídos/adaptados de las guías EGEL, los ejercicios de subneteo y el Workbook. Los seis números de ejercicio cuyos enunciados no aparecen en el texto extraído del PDF no se inventaron; se incorporaron los enunciados disponibles y los ejercicios que pudieron reconstruirse con respaldo suficiente.
