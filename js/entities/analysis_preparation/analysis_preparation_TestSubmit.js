var analysis_preparation_TestSubmit = Array(
  [
    "analysis_preparation",
    "ADD",
    1,
    "Alta correcta con todos los campos válidos",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: {
        name: "archivo.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    true
  ],

  [
    "analysis_preparation",
    "ADD",
    2,
    "Alta incorrecta por nombre corto",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Nombre",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: {
        name: "archivo.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    "name_analysis_preparation_min_size_KO"
  ],

  [
    "analysis_preparation",
    "ADD",
    3,
    "Alta incorrecta por descripción con formato incorrecto",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(79) + "á",
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: {
        name: "archivo.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    "description_analysis_preparation_format_KO"
  ],

  [
    "analysis_preparation",
    "ADD",
    4,
    "Alta incorrecta por tipo de fichero",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: {
        name: "archivo.exe",
        type: "application/x-msdownload",
        size: 1000
      }
    },
    "file_analysis_preparation_type_file_KO"
  ],

  [
    "analysis_preparation",
    "EDIT",
    5,
    "Edición correcta con todos los campos válidos",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: {
        name: "archivo.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    true
  ],

  [
    "analysis_preparation",
    "EDIT",
    6,
    "Edición correcta con fichero vacío permitido",
    {
      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: null
    },
    true
  ],

  [
    "analysis_preparation",
    "EDIT",
    7,
    "Edición incorrecta por identificador vacío",
    {
      id_analysis_preparation: "",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: null
    },
    "id_analysis_preparation_min_size_KO"
  ],

  [
    "analysis_preparation",
    "SEARCH",
    8,
    "Búsqueda vacía permitida",
    {},
    true
  ],

  [
    "analysis_preparation",
    "SEARCH",
    9,
    "Búsqueda correcta por nombre",
    {
      name_analysis_preparation: "Preparation Name"
    },
    true
  ],

  [
    "analysis_preparation",
    "SEARCH",
    10,
    "Búsqueda incorrecta por formato de nombre",
    {
      name_analysis_preparation: "Nombre 123"
    },
    "name_analysis_preparation_format_KO"
  ],

  [
    "analysis_preparation",
    "SEARCH",
    11,
    "Búsqueda incorrecta por nombre de fichero",
    {
      file_analysis_preparation: "archivo malo.pdf"
    },
    "file_analysis_preparation_format_name_file_KO"
  ]
);