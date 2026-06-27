var characteristic_TestSubmit = Array(
  [
    "characteristic",
    "ADD",
    1,
    "Alta correcta con todos los campos válidos",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: {
        name: "datos.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    true
  ],

  [
    "characteristic",
    "ADD",
    2,
    "Alta incorrecta por nombre corto",
    {
      id_characteristic: "1",
      name_characteristic: "Nombre",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: {
        name: "datos.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    "name_characteristic_min_size_KO"
  ],

  [
    "characteristic",
    "ADD",
    3,
    "Alta incorrecta por tipo de dato no permitido",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "boolean",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: {
        name: "datos.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    "data_type_characteristic_value_KO"
  ],

  [
    "characteristic",
    "ADD",
    4,
    "Alta incorrecta por categoría no permitida",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_wrong",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: {
        name: "datos.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    "category_characteristic_value_KO"
  ],

  [
    "characteristic",
    "ADD",
    5,
    "Alta incorrecta por fichero obligatorio",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: null
    },
    "file_characteristic_not_exist_file_KO"
  ],

  [
    "characteristic",
    "EDIT",
    6,
    "Edición correcta con todos los campos válidos",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: {
        name: "datos.pdf",
        type: "application/pdf",
        size: 1000
      }
    },
    true
  ],

  [
    "characteristic",
    "EDIT",
    7,
    "Edición correcta con fichero vacío permitido",
    {
      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: null
    },
    true
  ],

  [
    "characteristic",
    "EDIT",
    8,
    "Edición incorrecta por identificador vacío",
    {
      id_characteristic: "",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: null
    },
    "id_characteristic_min_size_KO"
  ],

  [
    "characteristic",
    "SEARCH",
    9,
    "Búsqueda vacía permitida",
    {},
    true
  ],

  [
    "characteristic",
    "SEARCH",
    10,
    "Búsqueda correcta por tipo de dato",
    {
      data_type_characteristic: "number"
    },
    true
  ],

  [
    "characteristic",
    "SEARCH",
    11,
    "Búsqueda incorrecta por tipo de dato no permitido",
    {
      data_type_characteristic: "boolean"
    },
    "data_type_characteristic_value_KO"
  ],

  [
    "characteristic",
    "SEARCH",
    12,
    "Búsqueda incorrecta por nombre de fichero",
    {
      file_characteristic: "archivo malo.pdf"
    },
    "file_characteristic_format_name_file_KO"
  ]
);