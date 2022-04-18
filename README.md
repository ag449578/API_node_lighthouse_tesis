# Descripción
La aplicación es una API en NODE orientada a la evaluación de rendimiento web, dispone de un endpoint con la forma `https://<host>:<puerto>/api/usuario/<url del sitio a evaluar>`. Responde a una petición GET con los datos de las métricas evaluadas en formato JSON.

## Métricas que evalúa
1. first-contentful-paint
2. largest-contentful-paint
3. speed-index
4. total-blocking-time


## Requerimientos previos
1. Tener instalado Node
2. Tener instalado Npm

## Despliegue
1. Obtener el código fuente desde [GitHub]([https://link](https://github.com/ag449578/API_node_lighthouse_tesis.git))
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm start` para levantar la aplicacion 
4. Consultar en una petición GET `https://<host>:<puerto>/api/usuario/<url del sitio a evaluar>`


