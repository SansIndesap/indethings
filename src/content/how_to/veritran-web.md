---
title: "Desarrollo de aplicaciones web con Veritran"
date: 2026-02-01
tags: ["veritran", "web"]
description: "Guía rápida de desarrollo de aplicaciones web con Veritran"
---

# Introducción
Las aplicaciones web en veritran son muy parecidas a las aplicaciones moviles, con la diferencia que se ejecutan en el navegador del usuario, y hacemos uso de webfly para levantar un servidor en lugar de mobile builder o los binarios.

## Como ejecutar web fly

Para ejecutar web fly es necesario tener java instalado en el sistema y haber hecho todo el proceso de configuración.

Para levantar web fly se debe ejecutar el siguiente comando:
```bash
java -jar -Dfile.encoding=utf-8 -Dlogging.config=log4j2.xml /c/Webfly/Bancoppel/webfly-2.11.2-dev.war
```
