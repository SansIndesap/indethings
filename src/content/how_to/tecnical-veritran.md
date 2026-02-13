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
El middleware Core server es el encargado de la comunicación entre el middleware Comm server y el servidor, es decir, es el encargado de enviar y recibir datos entre el middleware Comm server y el servidor. Compuesto por la VtNet, es decir, por una capa de aplicacion y otra de servicios.

Esta primera capa se compone de los siguientes componentes:

1. El *Device Handler*
2. El *Authorizator*
3. El *Host Interface*


### Host Interface
Tiene la logica de integracion es decir: Transformacion de datos y Orquestacion de servicios.
- Transformacion de datos: Recibir token o arrays y devolver una respuesta, por ejemplo un Json.
- Orquestacion de servicios: Por la naturaleza de la integracion de transacciones en la plataforma, se pueden llamar diferentes servicios, e ir validando la respuesta de cada uno, para devolver la respuesta final, o devolver un error si alguno de los servicios falla.