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


## MobaXterm
Ingresas con tu usuario de veritran, y te pedira la contraseña de tu usuario, la primera vez, luego lo puedes configurar para que entre automaticamente.

### Codigos
- `cd /c/Webfly/Bancoppel/` - Entrar al directorio de webfly
- `sudo su - vt724` - Entrar al servidor?
- `exit` - Salir de la sesión de MobaXterm
- `ls` - Listar archivos y directorios
- `pwd` - Mostrar la ruta actual
- `clear` - Limpiar la pantalla
- `cd ..` - Regresar al directorio anterior
- `cd /c/` - Entrar al directorio raíz
- `cd /c/Users/` - Entrar al directorio de usuarios

### Comando para subir nivel del log:
```bash
/veritran/vt-net/bin/vtNetQShell -e BCMD -n NDA1 -c "logger proc P1IRI.*, level=9"
```

### Comando para bajar nivel del log:
Después de subir el nivel y validar lo que se necesita, se recomienda regresar a nivel 6, osea:
 
```bash
/veritran/vt-net/bin/vtNetQShell -e BCMD -n NDA1 -c "logger proc P1IRI.*, level=6"
```
 
### Comando para reiniciar el host:
Después de cambiar un BP, se debe reiniciar el host, de la siguiente forma:
 
```bash
/veritran/vt-net/bin/vtNetQShell -e BCMD -n NDA1 -c "stop proc P1IRI.*"
```
 
```bash
/veritran/vt-net/bin/vtNetQShell -e BCMD -n NDA1 -c "start proc P1IRI.*"
```
 
### Comando para abrir el log para validar:
```bash
vim /veritran/vt-net/log/BCMD_NDA1.log
```
 
 