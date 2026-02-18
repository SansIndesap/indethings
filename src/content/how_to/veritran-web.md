---
title: "Desarrollo de aplicaciones web con Veritran"
date: 2026-02-01
tags: ["veritran", "web"]
description: "Guía rápida de desarrollo de aplicaciones web con Veritran"
---

# Introducción
Las aplicaciones web en veritran son muy parecidas a las aplicaciones moviles, con la diferencia que se ejecutan en el navegador del usuario, y hacemos uso de webfly para levantar un servidor en lugar de mobile builder o los binarios.

## WebFly
### Como ejecutar webfly

Para ejecutar web fly es necesario tener java instalado en el sistema y haber hecho todo el proceso de configuración.

Para levantar web fly se debe ejecutar el siguiente comando:
```bash
java -jar -Dfile.encoding=utf-8 -Dlogging.config=log4j2.xml /c/Webfly/Bancoppel/webfly-2.11.2-dev.war
```


## Conexion SSH - MobaXterm
Ingresas con tu usuario de veritran, y te pedira la contraseña de tu usuario, la primera vez, luego lo puedes configurar para que entre automaticamente.

### Codigos
- `cd /c/Webfly/Bancoppel/` - Entrar al directorio de webfly
- `sudo su - vt724` - Es el usuario adecuado para operar en la red de VT-NET
- `exit` - Salir de la sesión de MobaXterm
- `ls` - Listar archivos y directorios
- `pwd` - Mostrar la ruta actual
- `clear` - Limpiar la pantalla
- `cd ..` - Regresar al directorio anterior
- `cd /c/` - Entrar al directorio raíz
- `cd /c/Users/` - Entrar al directorio de usuarios

### Mas codigos y comandos en la seccion de How To - Veritran VT-NET