---
title: "Cómo funciona la plataforma Veritran"
date: 2026-01-01
tags: ["veritran", "tutorial"]
description: "Guía rápida de uso básico Veritran"
---

# Introducción
Veritran es una plataforma para crear aplicaciones web

## Como se compone la plataforma
La plataforma se compone de dos partes:

- Construction
    - Mobile Builder
    - Studio
- Runtime/Operation
    - Apps
    - Middleware
    - Services Invoked
-------------

## Construction
### Mobile Builder
Aqui es donde se crean los binarios para las apps moviles para poderlos cargar en las stores.
Esto permite que los usuarios o los desarrolladores solo tengan que descargar las configuraciones para actualizar la aplicacion en lugar de tener que descargar la aplicacion entera.

- Modelo de entrega: Todas las soluciones creadas con la *Plataforma Veritran* pueden obtenerse mediante dos modelos de entrega
    - Apps completas de Veritran, desarrolladas de principio a fin utilizando la *Plataforma Veritran*
    - Integración de soluciones en apps tradicionales con XpressPlug.

### Studio
Basicamente es donde se desarrolla la aplicacion, que independientemente del dispositivo destinado va a funcionar, porque la idea es que sea un modelo universal, para evitar desarrollos repetitivos para diferentes plataformas.

Estas plataformas o tambien conocidos como canales pueden ser:
- Web Apps
- Smart POS
- Mobile Apps

## Runtime/Operation
### Middleware
Es el componente que comunica la app con los servicios del cliente o de terceros o con servicios de veritran, es decir, hace lo siguiente:
- Procesar y enrutar transacciones.
- Manipular datos.
- Orquestar servicios.
- Controlar los binarios y las configuraciones de las apps.
- Recibir y almacenar las configuraciones enviadas por Studio para las apps.
- Registrar transacciones ejecutadas.

## Otros servicios y componentes de la plataforma
- NOTIF: Gestiona el envio de notificaciones push, trazabilidad de mensajes y gestion de campañas masivas.
- AS (Authentication Server): Autentificacion de usuarios.
- BRMs: Gestiona los roles de la plataforma, gamificacion, control de fraude o programas de fidelizacion.
- IDM (Identity Data Manager Server): Servicios de gestion de datos de los usuarios.
- EMS (Entity Management System): Gestiona las promociones y puntos de interes (POI) basados en la geolocalizacion.
- Audit: Registra todas las operaciones y cambios ejecutados por sus usuarios en los servicios de la plataforma.
- Tokenizacion: Garantiza que las apps desarrolladas esten suscritas al programa de tokenizacion de tarjetas. Garantiza seguridad en operaciones con tarjetas de credito.
- Repositorio: Almacena archivos estaticos y recursos.

------------------------------------

# Estructura de una app
#### App -> Site View, Side Parameters, Local Assets, Local Variables, Lambdas
#### App -> Site View -> Screen -> Components, Widgets, Fragments

- App: contexto donde se crea y configura los objetos o elementos de la app

- Tema (Theme): Grupo de variables, estilos y ajustes personalizados que define los colores, tamaños, fuentes, fondos y otros elementos de la apariencia de tu app. 

- Vista (Site View / Layout): representación de vistas que agrupan pantallas que tienen una misma distribución en áreas visuales. Por ejemplo, en una site view se agrupan todas las pantallas que tienen cabecera y contenido, mientras que en otra se agruparían las pantallas que tienen cabecera, contenido y pie de página.

- Pantalla (Screen): es una porción de una pantalla que va a ocupar un área visual definida en la site view donde se encuentra. Una pantalla se construye a partir de diferentes tipos de componentes como paneles, botones, imágenes, y textos.

- Pantilla de diseño (Layout): distribución o estructura en diferentes áreas visuales o regiones en las que se podría dividir una pantalla. Por ejemplo, se puede establecer una distribución que esté compuesta por una cabecera, menú de navegación y contenido. Asigna la plantilla a una vista cuando la estás creando.

- Módulo (Module): porciones de configuración que corren en un contexto propio. Estos son instanciados desde la app y pueden ser desde un simple componente que usas en una pantalla hasta funcionalidades completas con sus propias pantallas, procesos etc.

- Componente: Objeto nativo o elemento visual que realiza una acción específica y se utiliza para construir una pantalla. Normalmente se puede personalizar con atributos específicos. Ejemplos de componentes son botones, imágenes, íconos.

- Widget: función o componente creado fuera de Studio que puede integrarse en la app.

- Proceso (Lambda): secuencias de pasos que agregan lógica a una app. Cada paso ejecuta una operación o función. Con un proceso puedes realizar operaciones como asignar valores a variables, validaciones lógicas, operaciones matemáticas, crear arrays, manipular cadenas de texto, llamado a transacciones, entre otras.

- Transacción: servicio ejecutado en el middleware de la *Plataforma Veritran* que permite la comunicación e integración con servicios, conexión con bases de datos y pueden contener lógica de negocio. Las transacciones son globales a todas las apps que requieran invocarlas.

- Recurso (Asset): elemento usado en Studio para construir apps, como imágenes, iconos, archivos de video o audio, fuentes de texto, archivos .html, etc. Los recursos pueden tener un alcance local, es decir que solo están disponibles para la app en la que estás trabajando, o global, es decir, disponibles para todas las apps que se encuentran en un proyecto.

- Parámetro: configuración de valores globales asignada a diferentes componentes de la plataforma o a apps individuales. Ejemplos de parámetros son el tiempo de duración de la sesión, fecha de creación de la app, carácter de separación de cifras decimales, etc. Si quieres establecer un parámetro para todas las apps de tu ambiente, configúralo de forma global. Si quieres que esté disponible para una app en particular, configúralo como local.

- Variable: almacena valores o información. Existen dos tipos de variables: registros y arrays, y están asociadas a un valor numérico llamado token. Las variables pueden consistir de números o nombres descriptivos. Por ejemplo, una variable se puede definir con el nombre edad y estar asociada al token con valor numérico 501. Si quieres que las variables estén disponibles para todas las apps de tu ambiente, puedes establecerlas de forma global. Si quieres que estén disponibles para una app en particular, debes establecerlas de forma local.

## Como crear Layouts (definición)
Los layouts se crean de forma global, es decir, varias aplicaciones pueden utilizarla.

- Para acceder a la página de layouts vas: Design -> Layout templates.
- Para el nombramiento de los layouts u otros componentes en general, utilizar las *tools* de IndeThings.
- Las distribuciones (size) de cada estructura va en porcentajes.

## Como crear View (aplicación de Layout)
Es la representación de vistas que agrupan pantallas que tienen una misma distribución en áreas visuales.
- Para acceder a la página de layouts vas: Design -> Views.
- Theme: tema creado previamente el cual definirá la apariencia de todas las pantallas que pertenezcan a la vista. En la mayoría de los casos, el tema es aplicado a todo el contexto de la app y no a cada vista. Es por esto que se recomienda dejar el campo en blanco.

## Tipos de Errores
- 0000: Este error se genera cuando hay pendiente una descarga de la app, y sucede generalmente cuando se sube una nueva versión de la app en las App Stores. Este error es de tipo Local.

- 0001: Este error se genera cuando hay pendiente una descarga de configuración de la app. Se presenta generalmente al publicar la app después de que se han realizado cambios en la funcionalidad que no requieren nuevos permisos del dispositivo. Este error es de tipo Local.

- ZZZ, H99, H80, etc.: Errores que son generados desde una transacción. Estos errores son de tipo Error.


## Diseño de la App

### Tamaños y medidas
Veritran Studio cuenta con diferentes unidades de medida, las cuales son:

- % (porcentaje)
- mm (milímetro)
- in (pulgada)
- px (píxel)
- r (relativo)
- rw (relativo al ancho)
- rh (relativo a la altura)
- br (basado en filas)
- dp (densidad de píxeles)

#### Segun los componentes
- Elementos: En las apps móviles se utilizan comúnmente las medidas rw para establecer el ancho de un elemento y rh para establecer la altura; y pixel density para escalar de manera uniforme en cualquier tipo de pantalla. En las apps web, se utilizan las medidas % y px para los atributos de tamaño.
- Fuentes de texto: Para el tamaño de fuente de un texto dentro de las apps móviles, la medida recomendada es rw. En las apps web se utiliza la medida px.

Las medidas rw y rh son relativas, al igual que %. Sin embargo, si estableces un tamaño con la medida %, este se calcula respecto del contenedor padre donde se encuentra el componente, mientras que las medidas rh y rw se calculan en relación con el tamaño de la pantalla.

*Para mantener buenas practicas teniendo experiencia en el desarrollo web/mobile, es mejor usar %*


## Contruccion de view con layouts
### Casos de uso
1. Imagina que quieres que una screen en una site view invoque otra screen ubicada en una site view diferente. En este caso, hay dos site view distintas.

Una es la V00, que está compuesta de dos pantallas: Header y Contents, ambas con el mismo área visual, S000.

La otra es V01, que contiene tres screens: Header, Contents y Footer, también con el área visual S000

- Para llamar a content1 de V01 hay que utilizar una sintaxis larga que indica qué screen se va a cargar para Header, qué screen se va a cargar para Contents1, y qué screen se va a cargar para Footer: se usa *VV01|Header:S000;Contents1:S000;Footer:S000*

2. Imagina que te encuentras en la site view V01 y quieres invocar la screen Contents1: S001 desde la screen Contents1:S000.

Como ambas screens se encuentran dentro de la misma site view, solo es necesario cargar una de las áreas visuales que componen la screen, reutilizando los componentes cargados en una invocación previa. En este caso, se reutilizarán los componentes que forman parte de Header y Footer, pero se cargará la screen Contents1 en el área visual S001.

- La sintaxis a utilizar es: Vcontents1:S001

3. Imagina que necesitas invocar una cuarta pantalla que se encuentra en la misma site view, V01, pero se modifica el área visual de las screens Contents1 y Footer, que se encuentran en S002 y S001 respectivamente.

- En este caso, debes usar la sintaxis larga: V01|Contents1:S002;Footer:S001. 

## Almacenamiento de datos
### Registros
Los registros almacenan valores o información que estará disponibles en cualquier parte de la app. Suelen identificarse de forma numérica, pero también puedes asignarles un nombre más descriptivo. 


#### 0 - 499
Conjunto de registros reservados. Tienen un uso específico y debes asignarles valores que correspondan al tipo de información que estos registros reciben. Además, es importante que respetes sus formatos para evitar que sean rechazados por el ambiente.
Algunos ejemplos son:

    3: Usuario. Este registro encripta el valor que allí almacenes.
    4: Contraseña. Este registro encripta el valor que allí almacenes.
    10: Código de respuesta de una transacción.
    11: Mensaje de respuesta para las transacciones.
    12: Código de autorización de una transacción.
    51 a 54: Montos o importes.
    56 a 59: Fechas.
    71 a 74: Números de productos bancarios.
    76 a 79: Textos descriptivos.
    81 a 84: Flags.

#### 500 - 899
Registros no persistentes de libre uso. Cuando cierras la app, todos los valores que hayas asignado se perderán.

#### 900 - 999
Registros persistentes de libre uso que permiten que los valores que les asignes queden almacenados en el dispositivo, aunque cierres la app. 

#### 1000 al 999999 
Registros no persistentes de libre uso.


#### 800000 al 800005
Registros para el manejo y almacenamiento de imágenes.

### Arrays
Los arrays disponibles en Veritran Studio van desde 0 hasta 999. Para obtener un valor que se encuentra en una posición específica dentro de un array, debes utilizar la siguiente expresión: #A{array:fila:columna;formato}, que obtiene el valor que se encuentra almacenado en un array en la fila y columna establecidas y en el formato especificado (este último es opcional).

### Constantes
Las constantes se usan de la misma forma que los registros cuando se requiere la información que estas contienen, pero una constante no puede ser modificada, es decir, no se le puede asignar un valor a voluntad.

En Veritran Studio existe un conjunto de constantes cuyos valores se pueden obtener a partir de la siguiente expresión: #K{NOMBRE_CONSTANTE;formato}.

### Formato
Los formatos permiten transformar un dato que se encuentra con una estructura o configuración poco entendible, a un formato que facilite su lectura al momento de mostrarlo en pantalla. Ejemplo #K{TODAY;D}.

| Nombre            | Simbolo   | Dato Original     | Dato Formateado       |
|------------------ |---------- | ------------------| ----------------------|
| Date              | "D"       | aaaammdd          | dd/mm/aaaa            |
| Short Date        | "d"       | aaaammdd          | mm/aa                 |
| Datetime          | "T"       | Aaaammddhhmmdd    | dd/mm/aaaa hh:mm:dd   |
| Time              | "t"       | hhmmdd            | hh:mm:dd              |
| Float             | "F"       | 5+314159          | 3.14159               |     
| Importe Signed    | "G"       | 2-999999          | -9,999.99             |
| Numeric Signed    | "S"       | -9999,99          | 2-999999              |


# Screens
Como se mencionaba anteriormente, es una porción de una pantalla que va a ocupar un área visual definida en la site view donde se encuentra. Una pantalla se construye a partir de diferentes tipos de componentes como paneles, botones, imágenes, y textos.

# Procesos
Como anteriormente se mencionaba, son secuencias de pasos que agregan lógica a una app. Cada paso ejecuta una operación o función. Con un proceso puedes realizar operaciones como asignar valores a variables, validaciones lógicas, operaciones matemáticas, crear arrays, manipular cadenas de texto, llamado a transacciones, entre otras.

# Transacciones
## Configuración de transacciones:
En la pestaña Configuration, configura información general sobre el nodo. En el campo Label, ingresa un nombre para identificar la función el nodo dentro del flujo. También puedes configurar información adicional que varía según el tipo de elemento seleccionado. Por ejemplo, en una acción Iterator, puedes configurar de qué forma iniciará la iteración de datos. Esta pestaña está disponible para todos los elementos presentes en el panel izquierdo y para los nodos Start y End.

En la *pestaña Inputs*, configura los sockets de entrada para el nodo seleccionado. Estos representan la información que el elemento recibe del flujo de transacción. Las entradas varían según el nodo seleccionado y el flujo que estás construyendo. Esta pestaña está disponible para todos los nodos, con excepción de Start y Constant, ya que no tienen flujos de entrada.

En la *pestaña Outputs*, configura los sockets de salida para el nodo seleccionado. Estos representan la información que se envía desde este nodo hacia otro. Estos parámetros varían según el nodo seleccionado. Esta pestaña está disponible para el nodo Start y para cada acción.


