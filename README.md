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

# missing translations

```
Missing keys in it.ts: [
  'm_modal_stock_sale',
  'm_modal_stock_sale2',
  'm_modal_stock_sale3',
  'm_modal_stock_sale4',
  'm_modal_stock_sale5'
]
Missing keys in pt.ts: [
  '1CU-C17',             '1CU-C1P12',
  '1CU-C1P13',           '1TU-C17',
  '1TU-P12',             '1TU-P13',
  '2CU-C17',             '2CU-C1P12',
  '2CU-C1P13',           'start_payment',
  'terminal_connected',  'title_remember_that',
  'm_modal_stock_sale',  'm_modal_stock_sale2',
  'm_modal_stock_sale3', 'm_modal_stock_sale4',
  'm_modal_stock_sale5'
]
Missing keys in fr.ts: [
  '1CU-C17',
  '1CU-C1P12',
  '1CU-C1P13',
  '1TU-C17',
  '1TU-P12',
  '1TU-P13',
  '2CU-C17',
  '2CU-C1P12',
  '2CU-C1P13',
  'billings',
  'actions_table_orders_billing',
  'to_mark_as_billing',
  'enter_billin_number',
  'billing_number',
  'enter_billing_number_placeholder',
  'cancel_billing',
  'Accept_billing',
  'processing_please_wait',
  'm_modal_stock_sale',
  'm_modal_stock_sale2',
  'm_modal_stock_sale3',
  'm_modal_stock_sale4',
  'm_modal_stock_sale5'
]
```
