# Sistema de Gobierno de Datos (GDN8N)

Este proyecto es un sistema de gobierno de datos diseñado para automatizar y visualizar flujos de trabajo clave, asegurando la calidad, seguridad y usabilidad de la información.

**Autor:** [mjmc4498](https://github.com/mjmc4498)
**Repositorio:** [GDN8N](https://github.com/mjmc4498/GDN8N)
**Demo en vivo:** [https://mjmc4498.github.io/GDN8N](https://mjmc4498.github.io/GDN8N)

---

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/mjmc4498/GDN8N.git
    cd GDN8N
    ```

2.  **Instala las dependencias del servidor:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor:**
    ```bash
    npm start
    ```
    El servidor se ejecutará en `http://localhost:3000`.

---

## Manual del Sistema y Uso

### Flujo 1: Validación de Calidad al Subir Archivos

Esta es la primera funcionalidad implementada en el sistema. Permite a los usuarios cargar archivos y recibir una validación básica.

**Cómo usar:**

1.  Abre la aplicación en tu navegador (localmente en `http://localhost:3000` o en la [demo en vivo](https://mjmc4498.github.io/GDN8N)).
2.  En la sección "Flujo 1: Validación de Calidad de Archivos", haz clic en el botón para seleccionar un archivo de tu computadora.
3.  Una vez seleccionado el archivo, haz clic en "Subir y Validar".
4.  El sistema procesará el archivo y mostrará un resumen con el resultado de la validación, incluyendo el nombre del archivo, el tamaño y el estado.

---
