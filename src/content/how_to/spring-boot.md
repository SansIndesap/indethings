---
title: "Cómo usar SpringBoot"
date: 2025-12-12
tags: ["git", "tutorial"]
description: "Guía rápida de uso básico de Spring Boot"
---

## Introducción
Spring boot es un framework para crear aplicaciones web

## Requisitos
- Java X
- Maven
- IDE (IntelliJ IDEA, Eclipse, NetBeans, VSCode) -> En este caso ejemplos de VSCode

## Arquitectura
- MVC

## Elementos principales
- Controller
- Service
- Repository
- DTO
- Entidades

-------------

# Configuraciones principales

## Vista
Para que thymleaf pueda reconocer nuestros elementos personalizados es necesario importarlo de la siguiete manera:
```bash
<html lang="en" xmlns:th="http://thymeleaf.org">
```

Ejemplo de uso:
```bash
// Archivo de la funcion del controlador
model.addAttribute("titulo", "Servidor en linea")

// Archivo HTML
<title th:text="${titulo}">Pagina Spring Boot</title>
```
Este model debe ser injectado en la funcion, como: Model model

-------------

# Controller
 Un controlador es una clase que maneja las solicitudes http entrantes y define como deben tratarse para dar una respuesta.

 La respuesta puede ser:
 - .json
 - .xml
 - .html

 Es importate cada controlador deber de tener su Bean
```bash
@controller
```

Un request puede ser GET POST PUT DELETE, esto de mapea en el controlador de la siguiente manera, en caso de un GET y POST: 
```bash
@GetMapping("path")
@PostMapping("path")
```
Este mapeo tiene otra parte importante y esta en los parametros de la función en la que debemos definir como se reciben los datos:
```bash
 @RequestParams  // -> GET
 @RequestBody    // -> POST
 ```

### Ejemplo basico:
```bash
@Controller
public class EjemploController{
 public String index(){}
}
```

-------------

# API Rest Controller
Es un estilo de construcción de interfaces de programacion de aplicaciones que permite la comunicacion entre sistemas mediante solicitudes de http. Nuestro handler tambien pasaria a ser  un RestHandler.

### Ejemplo basico:
```bash
@RestController
public class EjemploController{

    @GetMapping("path")
    @RequestMapping("/api")
    public Map<String, Object> info(){
        // Para pasar informacion a la vista (sin usar model)
        Map<String, Object> respuesta = new HasMap<>();
        respuesta.put("titulo", "servidor en línea")

        return respuesta;
    }
}
```
Como respuesta envia un archivo json, con los valores dados.

## PathVariable
Basicamente es una ruta variable

```bash
@RestController
@RequestMapping("/api/variable")
public class ReqParamController {

    @GetMapping("/page1/{mensaje}")
    public ParametroDTO Empleados(@PathVariable String mensaje){
        ParametroDTO param = new ParametroDTO();
        param.setInformacion(mensaje);
        return param;
    }
}
```

-------------

# Models
Son clases que definen algo, como una interfaz. Ejemplo

### Ejemplo basico:
```bash
public class Empleado {
    private String nombre;
    private int edad;

    public Empleados(string nombre, int edad){
        // Inicializar valores
    }

    // Getters and Setters
}
```

-------------

# DTO
Es una clase diseñada para transferir datos entre las diferentes capas de una aplicacion, eje, controlador-servicio, actua como un contenedor para los datos, sirve para la separacion de "preocupaciones" -> funcionalidad o requisito que debe implementarse en una aplicacion, eje, Logica de un negocio, persistencia de datos, seguridad, etc.

En caso de la BD, reduce datos expuestos, solo se pueden acceder a los datos que nosotros definimos.

Diferencias con Entidades

| Caracteristica | DTO                            | Entidad                                      |
|--------------- |------------------------------- | ---------------------------------------------|
| Proposito      | Transferir datos entre capas   | Representar una tabla en la base de datos    |
| Uso            | Interfaz de usuario o API      | Persistencia de la base de datos             |
| Relaciones     | Normalmente no tienen relaciones complejas   | Puede incluir relaciones entre entidades    |
| Framework      | No depende de JPA              | Generalmente incluye anotaciones de JPA como @Entity    |

## Como se implementa
#### Ruta -> src/main/java/dtos -> Se crea el paquete DTOS
Se crean las clases necesarias ejemplo:
```bash
public class ClaseDTO {
    private String titulo, usuario;

    // Getters and Setters
}
```

-------------

# Service