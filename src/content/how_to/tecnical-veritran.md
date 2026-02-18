---
title: "Sistema funcional de Veritran tecnico"
date: 2026-02-15
tags: ["veritran", "tecnico"]
description: "Guía técnica del sistema funcional de Veritran"
---


# Middleware
El middleware es un componente que se encuentra entre la app y el servidor, por asi decirlo, este esta compuesto por dos partes:

1. El middleware Comm server
2. El middleware Core server

## Middleware Comm server
El middleware Comm server es el encargado de la comunicación entre la app y el servidor, es decir, es el encargado de enviar y recibir datos entre la app y el servidor. Compuesto de el *Webfly* y el *Gateway*.

## Middleware Core server
El middleware Core server es el encargado de la comunicación entre el middleware Comm server y el servidor, es decir, es el encargado de enviar y recibir datos entre el middleware Comm server y el servidor. Compuesto por la VtNet, es decir, por una capa (procesos) de aplicacion y otra de servicios.

Esta primera capa (**Procesos de aplicacion**) se compone de los siguientes componentes, que nos permiten autorizar transacciones o comunicarse con dispositivos o sistemas externos.

1. El *Device Handler*
2. El *Authorizator*
3. El *Host Interface*


### Host Interface
Tiene la logica de integracion es decir: Transformacion de datos y Orquestacion de servicios.
- Transformacion de datos: Recibir token o arrays y devolver una respuesta de igual forma, por ejemplo un Json y que luego se pueden transformar en arrays o tokens.
- Orquestacion de servicios: Por la naturaleza de la integracion de transacciones en la plataforma, se pueden llamar diferentes servicios, e ir validando la respuesta de cada uno, para devolver la respuesta final, o devolver un error si alguno de los servicios falla.

En la segunda capa (**Procesos del sistema**) son los que deben estar operativos para garantizar que VTNET se ejecute correctamente, estos son los componentes:

1. Kernel
2. CMD Server
3. Sec Server
4. Model Server
5. Application Server

### El proceso Kernel
 Es central de un nodo de VT-NET. Lleva un control de todos los objetos y otros procesos. Ademas, efectua tareas de administracion de recursos como memoria, colas, y mensajes.

### El proceso CMD Server
 Ejecuta los distintos comandos propios de VT-NET necesarios para la gestion de los objetos internos.

### El proceso Model Server
Media las consultas a la base de datos provenientes de la consola de administracion del middleware.

### El proceso Security Server
Dirige la seguridad de los usuarios de VT-NEt, ya que impide la ejecucion de los comandos de control a aquellos ususarios que no esten habilitados.

## Comandos, logs y demas en la seccion de How To - Veritran VT-NET