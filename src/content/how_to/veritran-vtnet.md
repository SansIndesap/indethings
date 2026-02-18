---
title: "Sistema funcional de Veritran VT-NET"
date: 2026-02-15
tags: ["veritran", "vtnet"]
description: "Guía técnica del sistema funcional de Veritran VT-NET"
---


## Conexion SSH - MobaXterm - Putty
Ingresas con tu usuario de veritran, y te pedira la contraseña de tu usuario, la primera vez, luego lo puedes configurar para que entre automaticamente como en el caso de MobaXterm.

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

### Comando para abrir el log del flujo de las cajas en transacciones:
```bash
clear;cat /veritran/vt-net/log/BCMD_NDA1.log | grep "TRACE_FLOW_IRIS" | cut -b 257-450
```
 
 