var characteristic_estructura = {
  entity: "characteristic",

  attributes: [
    {
      name: "id_characteristic",
      type: "int",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 1, error: "id_characteristic_min_size_KO" },
          { method: "max_size", param: 11, error: "id_characteristic_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_characteristic_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 1, error: "id_characteristic_min_size_KO" },
          { method: "max_size", param: 11, error: "id_characteristic_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_characteristic_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 11, error: "id_characteristic_max_size_KO" },
          { method: "format", param: "^[0-9]*$", error: "id_characteristic_format_KO" }
        ]
      }
    },

    {
      name: "name_characteristic",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 8, error: "name_characteristic_min_size_KO" },
          { method: "max_size", param: 100, error: "name_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_characteristic_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 8, error: "name_characteristic_min_size_KO" },
          { method: "max_size", param: 100, error: "name_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_characteristic_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 100, error: "name_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]*$", error: "name_characteristic_format_KO" }
        ]
      }
    },

    {
      name: "description_characteristic",
      type: "varchar",
      element: "textarea",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 80, error: "description_characteristic_min_size_KO" },
          { method: "max_size", param: 5000, error: "description_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "description_characteristic_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 80, error: "description_characteristic_min_size_KO" },
          { method: "max_size", param: 5000, error: "description_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "description_characteristic_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 5000, error: "description_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]*$", error: "description_characteristic_format_KO" }
        ]
      }
    },

    {
      name: "data_type_characteristic",
      type: "enum",
      element: "select",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "value", param: ["number", "text", "set"], error: "data_type_characteristic_value_KO" }
        ],
        EDIT: [
          { method: "value", param: ["number", "text", "set"], error: "data_type_characteristic_value_KO" }
        ],
        SEARCH: [
          { method: "value_or_empty", param: ["number", "text", "set"], error: "data_type_characteristic_value_KO" }
        ]
      }
    },

    {
      name: "category_characteristic",
      type: "enum",
      element: "select",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "value", param: ["soil_site", "soil_chem", "soil_bio"], error: "category_characteristic_value_KO" }
        ],
        EDIT: [
          { method: "value", param: ["soil_site", "soil_chem", "soil_bio"], error: "category_characteristic_value_KO" }
        ],
        SEARCH: [
          { method: "value_or_empty", param: ["soil_site", "soil_chem", "soil_bio"], error: "category_characteristic_value_KO" }
        ]
      }
    },

    {
      name: "bibref_characteristic",
      type: "varchar",
      element: "textarea",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 16, error: "bibref_characteristic_min_size_KO" },
          { method: "max_size", param: 200, error: "bibref_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]+$", error: "bibref_characteristic_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 16, error: "bibref_characteristic_min_size_KO" },
          { method: "max_size", param: 200, error: "bibref_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]+$", error: "bibref_characteristic_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 200, error: "bibref_characteristic_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]*$", error: "bibref_characteristic_format_KO" }
        ]
      }
    },

    {
      name: "file_characteristic",
      type: "file",
      element: "inputfile",
      required: {
        ADD: true,
        EDIT: false,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "fichero", param: null, error: "file_characteristic_not_exist_file_KO" },
          { method: "type_file", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_characteristic_type_file_KO" },
          { method: "max_size_file", param: 200000, error: "file_characteristic_max_size_file_KO" },
          { method: "format_name_file", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_characteristic_format_name_file_KO" }
        ],
        EDIT: [
          { method: "type_file_optional", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_characteristic_type_file_KO" },
          { method: "max_size_file_optional", param: 200000, error: "file_characteristic_max_size_file_KO" },
          { method: "format_name_file_optional", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_characteristic_format_name_file_KO" }
        ],
        SEARCH: [
          { method: "format", param: "^[A-Za-z]*(\\.(pdf|doc|docx))?$", error: "file_characteristic_format_name_file_KO" }
        ]
      }
    }
  ]
};