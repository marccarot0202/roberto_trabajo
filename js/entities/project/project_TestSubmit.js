var project_TestSubmit = Array(
  [
    "project",
    "ADD",
    1,
    "Alta correcta con todos los campos válidos",
    {
      "id_project": "1",
      "name_project": "Proyecto Ambiental Valido",
      "start_date_project": "01/01/2026",
      "end_date_project": "02/01/2026",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/pdf",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    true
  ],

  [
    "project",
    "ADD",
    2,
    "Alta incorrecta por nombre corto y fecha final anterior",
    {
      "id_project": "1",
      "name_project": "Corto",
      "start_date_project": "01/01/2026",
      "end_date_project": "01/01/2025",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/pdf",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    "name_project_min_size_KO"
  ],

  [
    "project",
    "ADD",
    3,
    "Alta incorrecta por tipo de fichero no permitido",
    {
      "id_project": "1",
      "name_project": "Proyecto Ambiental Valido",
      "start_date_project": "01/01/2026",
      "end_date_project": "02/01/2026",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/x-msdownload",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    "file_project_type_file_KO"
  ],

  [
    "project",
    "ADD",
    4,
    "Alta incorrecta por identificador no numérico",
    {
      "id_project": "ABC",
      "name_project": "Proyecto Ambiental Valido",
      "start_date_project": "01/01/2026",
      "end_date_project": "02/01/2026",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/pdf",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    "id_project_format_KO"
  ],

  [
    "project",
    "EDIT",
    5,
    "Edición correcta con todos los campos válidos",
    {
      "id_project": "1",
      "name_project": "Proyecto Ambiental Valido",
      "start_date_project": "01/01/2026",
      "end_date_project": "02/01/2026",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/pdf",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    true
  ],

  [
    "project",
    "EDIT",
    6,
    "Edición incorrecta por identificador vacío",
    {
      "id_project": "",
      "name_project": "Proyecto Ambiental Valido",
      "start_date_project": "01/01/2026",
      "end_date_project": "02/01/2026",
      "responsable_project": "José Pérez",
      "organization_project": "Universidade Vigo",
      "description_project": "Descripcion ascii valida del proyecto ambiental",
      "file_project": {
        "name": "documento.pdf",
        "type": "application/pdf",
        "size": 1000
      },
      "code_project": "Codigo Proyecto",
      "acronym_project": "PROYEC",
      "id_sampling_methodology": "1"
    },
    "id_project_min_size_KO"
  ],

  [
    "project",
    "SEARCH",
    7,
    "Búsqueda vacía permitida",
    {},
    true
  ],

  [
    "project",
    "SEARCH",
    8,
    "Búsqueda correcta por nombre de proyecto",
    {
      "name_project": "Proyecto Ambiental Valido"
    },
    true
  ],

  [
    "project",
    "SEARCH",
    9,
    "Búsqueda incorrecta por formato de nombre",
    {
      "name_project": "Proyecto 123 Invalido"
    },
    "name_project_format_KO"
  ]
);