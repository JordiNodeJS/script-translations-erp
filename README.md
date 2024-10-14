# start it

`npm run dev`

## canbiar el archivo que nos interesa de traducción

`import translations from "./locales/es";`

para que `console.log(convertToCSV(translations));` lo muestre en un formato que excel lo pueda seperar por columnas.

## Excel

Se copia el resultado mostrado en consola devtools del navegador.
Y en excel se pega y se hace la división de datos por el separador especial `::`. Se escogió este operador porque si se utilizara ":", ",", etc nos haría más de dos columnas en muchos casos.

## Para pasar de excel a obj

Comentar primer console y descomentar la segunda console.

```javascript
// console.log(convertToCSV(translations));
console.log(printToObjs(csvData));
```
