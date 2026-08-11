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
