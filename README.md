# Entrega Julio - Interfaces de Usuario

Proyecto web realizado en HTML, JavaScript y CSS para la recuperación de la asignatura Interfaces de Usuario.

El sistema permite seleccionar una entidad y ejecutar pruebas automáticas sobre:

- La estructura de la entidad.
- Las definiciones de test de atributos.
- Las pruebas de validación de atributos.
- Las pruebas de submit para las acciones ADD, EDIT y SEARCH.

## Cómo ejecutar el proyecto

Se recomienda ejecutar el proyecto con un servidor local.

Desde una terminal, entrar en la carpeta `CODIGO`:
`cd Julio_DiegoBonomeGarrido/CODIGO`

Levantar el servidor:
`python -m http.server 8000`

Acceder al navegador:
`http://localhost:8000`

## Entidades incluidas

El proyecto incluye las siguientes entidades:

- `project`
- `analysis_preparation`
- `characteristic`

Cada entidad dispone de sus propios ficheros de estructura, tests de atributos, pruebas de submit y clase de entidad.

## Estructura del proyecto

```text
CODIGO/
├── index.html
├── API.html
├── Julio_Datos_DiegoBonomeGarrido.js
├── README.md
├── css/
│   └── IU.css
└── js/
    ├── menu_entidades.js
    ├── core/
    │   ├── Gestor_Class.js
    │   ├── TestForm_Class.js
    │   ├── TestSubmit_Class.js
    │   ├── ValidateFieldsForm_Class.js
    │   └── Validations_Class.js
    └── entities/
        ├── project/
        ├── analysis_preparation/
        └── characteristic/