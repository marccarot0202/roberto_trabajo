var project_estructura = {
  entity: "project",

  attributes: [
    {
      name: "id_project",
      type: "int",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 1, error: "id_project_min_size_KO" },
          { method: "max_size", param: 11, error: "id_project_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 1, error: "id_project_min_size_KO" },
          { method: "max_size", param: 11, error: "id_project_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 11, error: "id_project_max_size_KO" },
          { method: "format", param: "^[0-9]*$", error: "id_project_format_KO" }
        ]
      }
    },

    {
      name: "name_project",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 15, error: "name_project_min_size_KO" },
          { method: "max_size", param: 100, error: "name_project_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 15, error: "name_project_min_size_KO" },
          { method: "max_size", param: 100, error: "name_project_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]+$", error: "name_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 100, error: "name_project_max_size_KO" },
          { method: "format", param: "^[A-Za-z ]*$", error: "name_project_format_KO" }
        ]
      }
    },

    {
      name: "start_date_project",
      type: "date",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "date_format", param: null, error: "start_date_project_format_KO" }
        ],
        EDIT: [
          { method: "date_format", param: null, error: "start_date_project_format_KO" }
        ],
        SEARCH: [
          { method: "date_format_or_empty", param: null, error: "start_date_project_format_KO" }
        ]
      }
    },

    {
      name: "end_date_project",
      type: "date",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "date_format", param: null, error: "end_date_project_format_KO" },
          { method: "personalized", param: null, error: "end_date_project_date_greater_than_KO", personalize: true }
        ],
        EDIT: [
          { method: "date_format", param: null, error: "end_date_project_format_KO" },
          { method: "personalized", param: null, error: "end_date_project_date_greater_than_KO", personalize: true }
        ],
        SEARCH: [
          { method: "date_format_or_empty", param: null, error: "end_date_project_format_KO" }
        ]
      }
    },

    {
      name: "responsable_project",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 6, error: "responsable_project_min_size_KO" },
          { method: "max_size", param: 60, error: "responsable_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$", error: "responsable_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 6, error: "responsable_project_min_size_KO" },
          { method: "max_size", param: 60, error: "responsable_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$", error: "responsable_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 60, error: "responsable_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]*$", error: "responsable_project_format_KO" }
        ]
      }
    },

    {
      name: "organization_project",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 6, error: "organization_project_min_size_KO" },
          { method: "max_size", param: 100, error: "organization_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$", error: "organization_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 6, error: "organization_project_min_size_KO" },
          { method: "max_size", param: 100, error: "organization_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$", error: "organization_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 100, error: "organization_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]*$", error: "organization_project_format_KO" }
        ]
      }
    },

    {
      name: "description_project",
      type: "varchar",
      element: "textarea",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 30, error: "description_project_min_size_KO" },
          { method: "max_size", param: 500, error: "description_project_max_size_KO" },
          { method: "format", param: "^[\\x00-\\x7F]+$", error: "description_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 30, error: "description_project_min_size_KO" },
          { method: "max_size", param: 500, error: "description_project_max_size_KO" },
          { method: "format", param: "^[\\x00-\\x7F]+$", error: "description_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 500, error: "description_project_max_size_KO" },
          { method: "format", param: "^[\\x00-\\x7F]*$", error: "description_project_format_KO" }
        ]
      }
    },

    {
      name: "file_project",
      type: "file",
      element: "file",
      required: {
        ADD: true,
        EDIT: false,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "fichero", param: null, error: "file_project_not_exist_file_KO" },
          { method: "type_file", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_project_type_file_KO" },
          { method: "max_size_file", param: 2000000, error: "file_project_max_size_file_KO" },
          { method: "format_name_file", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_project_format_name_file_KO" }
        ],
        EDIT: [
          { method: "type_file_optional", param: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error: "file_project_type_file_KO" },
          { method: "max_size_file_optional", param: 2000000, error: "file_project_max_size_file_KO" },
          { method: "format_name_file_optional", param: "^[A-Za-z]+\\.(pdf|doc|docx)$", error: "file_project_format_name_file_KO" }
        ],
        SEARCH: [
          { method: "format", param: "^[A-Za-z]*(\\.(pdf|doc|docx))?$", error: "file_project_format_name_file_KO" }
        ]
      }
    },

    {
      name: "code_project",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 6, error: "code_project_min_size_KO" },
          { method: "max_size", param: 50, error: "code_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ .,;:!?]+$", error: "code_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 6, error: "code_project_min_size_KO" },
          { method: "max_size", param: 50, error: "code_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ .,;:!?]+$", error: "code_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 50, error: "code_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ .,;:!?]*$", error: "code_project_format_KO" }
        ]
      }
    },

    {
      name: "acronym_project",
      type: "varchar",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 6, error: "acronym_project_min_size_KO" },
          { method: "max_size", param: 15, error: "acronym_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ.,;:!?]+$", error: "acronym_project_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 6, error: "acronym_project_min_size_KO" },
          { method: "max_size", param: 15, error: "acronym_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ.,;:!?]+$", error: "acronym_project_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 15, error: "acronym_project_max_size_KO" },
          { method: "format", param: "^[A-Za-zÑñ.,;:!?]*$", error: "acronym_project_format_KO" }
        ]
      }
    },

    {
      name: "id_sampling_methodology",
      type: "int",
      element: "input",
      required: {
        ADD: true,
        EDIT: true,
        SEARCH: false
      },
      validations: {
        ADD: [
          { method: "min_size", param: 1, error: "id_sampling_methodology_min_size_KO" },
          { method: "max_size", param: 11, error: "id_sampling_methodology_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_sampling_methodology_format_KO" }
        ],
        EDIT: [
          { method: "min_size", param: 1, error: "id_sampling_methodology_min_size_KO" },
          { method: "max_size", param: 11, error: "id_sampling_methodology_max_size_KO" },
          { method: "format", param: "^[0-9]+$", error: "id_sampling_methodology_format_KO" }
        ],
        SEARCH: [
          { method: "max_size", param: 11, error: "id_sampling_methodology_max_size_KO" },
          { method: "format", param: "^[0-9]*$", error: "id_sampling_methodology_format_KO" }
        ]
      }
    }
  ]
};