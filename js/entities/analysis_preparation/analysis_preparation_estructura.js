var analysis_preparation_estructura = {
  entity: "analysis_preparation",

  attributes: [
    {
      name: "id_analysis_preparation",
      type: "int",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 1, error: "id_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 11, error: "id_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_analysis_preparation_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 1, error: "id_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 11, error: "id_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_analysis_preparation_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 11, error: "id_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[0-9]*$", error: "id_analysis_preparation_format_KO" }
        ]
      }
    },

    {
      name: "name_analysis_preparation",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 8, error: "name_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 100, error: "name_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_analysis_preparation_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 8, error: "name_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 100, error: "name_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_analysis_preparation_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 100, error: "name_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]*$", error: "name_analysis_preparation_format_KO" }
        ]
      }
    },

    {
      name: "description_analysis_preparation",
      type: "varchar",
      element: "textarea",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 80, error: "description_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 5000, error: "description_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "description_analysis_preparation_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 80, error: "description_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 5000, error: "description_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "description_analysis_preparation_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 5000, error: "description_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]*$", error: "description_analysis_preparation_format_KO" }
        ]
      }
    },

    {
      name: "bib_analysis_preparation",
      type: "varchar",
      element: "textarea",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 6, error: "bib_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 200, error: "bib_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]+$", error: "bib_analysis_preparation_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 6, error: "bib_analysis_preparation_min_size_KO" },
          { method: "max_size", param: 200, error: "bib_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]+$", error: "bib_analysis_preparation_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 200, error: "bib_analysis_preparation_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ .,;:¿?¡!()\\-]*$", error: "bib_analysis_preparation_format_KO" }
        ]
      }
    },

    {
      name: "file_analysis_preparation",
      type: "file",
      element: "inputfile",
      required: {
        ADD: true,
        EDIT: false,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "fichero", param: null, error: "file_analysis_preparation_not_exist_file_KO" },
          { method: "type_file", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_analysis_preparation_type_file_KO" },
          { method: "max_size_file", param: 2000000, error: "file_analysis_preparation_max_size_file_KO" },
          { method: "format_name_file", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_analysis_preparation_format_name_file_KO" }
        ],
        EDIT: [
          { method: "type_file_optional", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_analysis_preparation_type_file_KO" },
          { method: "max_size_file_optional", param: 2000000, error: "file_analysis_preparation_max_size_file_KO" },
          { method: "format_name_file_optional", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_analysis_preparation_format_name_file_KO" }
        ],
        SEARCH: [
          { method: "format", param: "^[A-Za-z]*(\\.(pdf|doc|docx))?$", error: "file_analysis_preparation_format_name_file_KO" }
        ]
      }
    }
  ]
};