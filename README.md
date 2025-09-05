# Mascotas _El Carmen_
## Proyecto CC5002 - Tarea 1

La siguiente página web simula la interfaz para un servicio de adopción de mascotas.

Este es un proyecto se construyó como entrega para la primera tarea del curso CC5002: "Desarrollo de Aplicaciones Web" en la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile, semestre primavera 2025.

Este proyecto fue realizado por el estudiante Gastón Santibáñez.

## Estructura y derechos de la página

El archivo principal es _index.html_. Este, y todos los archivos del proyecto, usan la _stylesheet_  main.css.

Las imágenes se almacenan en el directorio _imgs_. 
Las imágenes de gráficos son de elaboración propia con datos aleatorios, construidas con _Google Spreadsheets_.
Las imágenes de animales son de mascotas de amigos míos, que me dieron todos los permisos para utilizarlas en este proyecto.

Tanto los archivos _.html_ así como _main.css_ fueron construidos usando otros archivos como plantilla. Esos archivos provenían de mi diario personal, y fueron elaborados completamente por mí.

## Notas sobre el diseño del proyecto

Se optó por usar la codificación UTF-8, lenguaje "es" (español) en todos los archivos _.html_. Esto es para poder utilizar caracteres especiales como tildes y emojis sin mayor problema.

Para la presentación ordenada de información, se usan reiteradamente los tags _\<table\>_ y _\<colgroup\>_.

### postear.html y postear.js

Podrá notar que los _input_ del _form_ que permiten escoger región y comuna no cuentan con ninguna opción. Esto se debe a que las opciones serán escritas y actualizadas por medio de JavaScript, a partir de las opciones disponibles en el archivo _region_comuna.js_.

Las opciones no son importadas de ese archivo, sino que el diccionario presente en él fue copiado y pegado a _postear.js_. Esto se debe a que intentar importar un archivo me causaba un error "CORS Request not HTTP", y trasladar los datos era más sencillo que invertir tiempo en solucionarlo.

Podrá notar también el uso extensivo de la _class=error_. Esta formatea el texto en rojo para los mensajes de error, e inicializa sus párrafos con el estilo _display: none_. _postear.js_ es quien se encarga de cambiar _display_ para que los mensajes sean o no visibles.

De forma similar al caso de regiones y comunas, en el formulario hay un _\<div\>_ con _id="contactThroughDiv"_. Este también tiene sus contenidos escritos por medio de postear.js. Podrá observar que en el archivo JavaScript hay un _array_ de plataformas compatibles (_supportedContactPlatforms_). postear.js añade, por cada plataforma en el _array_, un campo al formulario. Esto tiene la ventaja de hacer que la edición de este aspecto del formulario sea muy rápida y sencilla. ¿No le gusta Fotolog? Reemplácelo por su red social preferida en 1 minuto.

Observe que en el campo de descripción de la mascota el tamaño de la _textarea_ no es fijo. Esto es una decisión deliberada: la caja comienza con el tamaño indicado en el enunciado de la tarea, pero se puede modificar. En ese mismo punto del código hay un comentario que explica qué modificar si se desea que el tamaño sea fijo.

La *última* observación a realizar respecto al archivo HTML es sobre los campos de _input_ de archivo. Aunque estos 5 campos están escritos en el documento desde un inicio, _postear.js_ asegura que solo sean visibles los pertinentes. De la misma forma, aunque el botón de "Agregar otra foto" no sea visible desde un inicio, sí aparecerá en el instante en que usted cargue una foto.

Ahora hablando exclusivamente sobre _postear.js_, puede notar que el documento es largo, pero está apropiadamente dividido en secciones con un propósito claro.

La primera sección define la variable para manejar la parte de las fotos del formulario, y constantes varias que son utilizadas en el archivo.

La segunda sección define varias funciones auxiliares que son utilizadas más adelante en el archivo.

La tercera sección es más interesante: define una serie de funciones nombras _handle***Error()_. Estas identifican si la información escrita en el formulario es inválida por algún u otro motivo, y se usan para identificar entradas válidas y mostrar los mensajes de error. Acá se usan una serie de trucos útiles:

1. Una forma alternativa de chequear que se llenó un campo de texto obligatorio es revisar que el largo de su string es al menos 1.
2. Similarmente, a un campo opcional con largo máximo se le puede consultar simplemente si su largo cumple la cota superior, que 0 (no llenado) siempre cumplirá.
3. Varias funciones siguen el esquema de settear el mensaje de error a blanco (""), después actualizarlo en bloques _if_, y finalmente revisar si sigue siendo vacío para determinar (retornar) si hay o no un error.
4. Para ciertos _handlers_ que revisan varios campos y pueden necesitar mostrar varios mensajes de error antes de retornar, se implementa una variable _output_ inicializada en 0 (no hay error) y modificada condicionalmente a 1 (hay error).
5. Por el número de funciones, hay comentarios que subdividen esta sección en tres grupos, correspondientes a los grupos del formulario en _postear.html_. Los _handlers_ también están en el mismo orden que los campos del _form_, así que facilita la búsqueda.

Respecto a funciones individuales, no hay nada que notar, pues los campos de texto de errores son bastante descriptivos _per se_.

La cuarta sección tiene funciones que escriben partes del documento HTML que ya fueron descritas: las de la región, comuna, y redes sociales.

La quinta sección tiene las funciones que ocultan o desocultan distintas partes del coumento HTML según la información en el _form_ (todas las nombradas _dynamic***Display()_), más algunas funciones auxiliares. Acá se usa y abusa del truco de _settear_ el atributo _display_ del estilo en _inline/block_ (visible) o _none_ (oculto).

La sexta y última sección de _postear.js_ contiene la función principal que chequea si el _input_ en el formulario es válido, y reacciona acorde. Además, esta sección llama a las funciones que generan el archivo HTML, crea los _event listeners_ que modifican el archivo cuando es pertinente, y fija los valores predeterminados para una serie de campos (en particular, para el de fecha de entrega).

### index.html, listado.html, y main.css

Podrá notar que las imágenes NO tienen el tamaño solicitado de 320x240 píxeles en ambos archivos HTML. Esto es una decisión deliberada de diseño. En el archivo _main.css_ hay un comentario que explica cómo "solucionarlo" de forma rápida, pero tiene una razón de ser: es muy factible que las fotos de las que disponga una persona común y corriente que llene el formulario sean verticales, como son las fotos que tomamos con los celulares. Por eso, las fotos se _acomodan_, cambiando su escala pero sin deformarlas ni cortarlas, de forma tal que tengan un ancho máximo de 320 píxeles y alto máximo de 240 píxeles. Si una persona sube una foto en resolución 320x240, la verá en su tamaño original; si sube una foto con esa misma proporción, también la verá en ese tamaño, aunque achicada. Pero si alguien sube una foto con otras proporciones, no se deformará ni recortará, garantizando que se vea correctamente en la web.

## Observaciones finales para la corrección

Podrá notar que el proyecto está incompleto: en la página del listado de avisos, se debería poder hacer click sobre una fila para poder viajar a una nueva página con el aviso más detallado. Esto, que corresponde a 1 punto de la tarea, no está implementado por cuestiones de tiempo. Todo lo demás, sí está presente.