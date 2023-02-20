
export function mdtoht(ts) {
    const md = require('markdown-it')()
    md.use(require('markdown-it-multimd-table'))
    md.use(require('markdown-it-task-lists'));
    return md.render(ts);
}

/*
# Título principal 
***
 
Este es un párrafo de texto normal. Lorem ipsum dolor sit amet, consectetur dadipiscing elit. Sed commodo mi ac nisl dapibus, vel aliquet urna bibendum. awdaw 

## Título de segundo nivel

Este es otro párrafo de texto normal. Suspendisse faucibus, lorem eget venenatis lacinia, nulla metus pharetra massa, vitae feugiat nisl est vel est. 

### Título de tercer nivel

A continuación, se muestra una lista con viñetas:

- Elemento de lista 1
- Elemento de lista 2
- Elemento de lista 3

Y aquí hay una lista numerada:

1. Primer elemento de lista numerada
2. Segundo elemento de lista numerada
3. Tercer elemento de lista numerada

Finalmente, aquí hay una imagen:

![Descripción de la imagen](https://via.placeholder.com/350x150)

[enlace](https://via.placeholder.com/350x150)


A continuación se muestra una lista de verificación:

- [x] Elemento de lista verificable 1
- [ ] Elemento de lista verificable 2
- [ ] Elemento de lista verificable 3

Aquí hay una tabla:

| Encabezado de columna 1 | Encabezado de columna 2 | Encabezado de columna 3 |
|------------------------|------------------------|------------------------|
| Celda 1, columna 1      | Celda 1, columna 2      | Celda 1, columna 3      |
| Celda 2, columna 1      | Celda 2, columna 2      | Celda 2, columna 3      |
| Celda 3, columna 1      | Celda 3, columna 2      | Celda 3, columna 3      |

tabla 2:

|              |          Grouping           ||
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  *Long Cell*  |              |
| Content      |    **Cell**   |         Cell |
| New section  |     More      |         Data |
| And more     | With an escaped             ||
|[Prototype table]                          |||  

Este es un bloque de código:

```
javascript
function suma(a, b) {
  return a + b;
}
```
*/

