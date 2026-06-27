var characteristic_def_tests = Array();
var characteristic_pruebas = Array();

let characteristic_num_def = 1;
let characteristic_num_prueba = 1;

function characteristic_add_test(campo, elemento, descripcion, accion, esperado, mensaje, valores) {
  characteristic_def_tests.push([
    "characteristic",
    campo,
    elemento,
    characteristic_num_def,
    descripcion,
    accion,
    esperado,
    mensaje
  ]);

  characteristic_pruebas.push([
    "characteristic",
    campo,
    characteristic_num_def,
    characteristic_num_prueba,
    accion,
    valores,
    esperado
  ]);

  characteristic_num_def++;
  characteristic_num_prueba++;
}

/* id_characteristic */

characteristic_add_test("id_characteristic", "input", "ADD id vacío", "ADD", "id_characteristic_min_size_KO", "Longitud mínima incorrecta", { id_characteristic: "" });
characteristic_add_test("id_characteristic", "input", "ADD id largo", "ADD", "id_characteristic_max_size_KO", "Longitud máxima incorrecta", { id_characteristic: "1".repeat(12) });
characteristic_add_test("id_characteristic", "input", "ADD id formato incorrecto", "ADD", "id_characteristic_format_KO", "Formato incorrecto", { id_characteristic: "ABC" });
characteristic_add_test("id_characteristic", "input", "ADD id correcto", "ADD", true, "Valor correcto", { id_characteristic: "1" });

characteristic_add_test("id_characteristic", "input", "EDIT id vacío", "EDIT", "id_characteristic_min_size_KO", "Longitud mínima incorrecta", { id_characteristic: "" });
characteristic_add_test("id_characteristic", "input", "EDIT id largo", "EDIT", "id_characteristic_max_size_KO", "Longitud máxima incorrecta", { id_characteristic: "1".repeat(12) });
characteristic_add_test("id_characteristic", "input", "EDIT id formato incorrecto", "EDIT", "id_characteristic_format_KO", "Formato incorrecto", { id_characteristic: "ABC" });
characteristic_add_test("id_characteristic", "input", "EDIT id correcto", "EDIT", true, "Valor correcto", { id_characteristic: "1" });

characteristic_add_test("id_characteristic", "input", "SEARCH id vacío permitido", "SEARCH", true, "Valor correcto", { id_characteristic: "" });
characteristic_add_test("id_characteristic", "input", "SEARCH id largo", "SEARCH", "id_characteristic_max_size_KO", "Longitud máxima incorrecta", { id_characteristic: "1".repeat(12) });
characteristic_add_test("id_characteristic", "input", "SEARCH id formato incorrecto", "SEARCH", "id_characteristic_format_KO", "Formato incorrecto", { id_characteristic: "ABC" });

/* name_characteristic */

characteristic_add_test("name_characteristic", "input", "ADD name corto", "ADD", "name_characteristic_min_size_KO", "Longitud mínima incorrecta", { name_characteristic: "Nombre" });
characteristic_add_test("name_characteristic", "input", "ADD name largo", "ADD", "name_characteristic_max_size_KO", "Longitud máxima incorrecta", { name_characteristic: "A".repeat(101) });
characteristic_add_test("name_characteristic", "input", "ADD name formato incorrecto", "ADD", "name_characteristic_format_KO", "Formato incorrecto", { name_characteristic: "Nombre 123" });
characteristic_add_test("name_characteristic", "input", "ADD name correcto", "ADD", true, "Valor correcto", { name_characteristic: "Soil Site Name" });

characteristic_add_test("name_characteristic", "input", "EDIT name corto", "EDIT", "name_characteristic_min_size_KO", "Longitud mínima incorrecta", { name_characteristic: "Nombre" });
characteristic_add_test("name_characteristic", "input", "EDIT name largo", "EDIT", "name_characteristic_max_size_KO", "Longitud máxima incorrecta", { name_characteristic: "A".repeat(101) });
characteristic_add_test("name_characteristic", "input", "EDIT name formato incorrecto", "EDIT", "name_characteristic_format_KO", "Formato incorrecto", { name_characteristic: "Nombre 123" });
characteristic_add_test("name_characteristic", "input", "EDIT name correcto", "EDIT", true, "Valor correcto", { name_characteristic: "Soil Site Name" });

characteristic_add_test("name_characteristic", "input", "SEARCH name vacío permitido", "SEARCH", true, "Valor correcto", { name_characteristic: "" });
characteristic_add_test("name_characteristic", "input", "SEARCH name largo", "SEARCH", "name_characteristic_max_size_KO", "Longitud máxima incorrecta", { name_characteristic: "A".repeat(101) });
characteristic_add_test("name_characteristic", "input", "SEARCH name formato incorrecto", "SEARCH", "name_characteristic_format_KO", "Formato incorrecto", { name_characteristic: "Nombre 123" });

/* description_characteristic */

characteristic_add_test("description_characteristic", "textarea", "ADD description corto", "ADD", "description_characteristic_min_size_KO", "Longitud mínima incorrecta", { description_characteristic: "A".repeat(79) });
characteristic_add_test("description_characteristic", "textarea", "ADD description largo", "ADD", "description_characteristic_max_size_KO", "Longitud máxima incorrecta", { description_characteristic: "A".repeat(5001) });
characteristic_add_test("description_characteristic", "textarea", "ADD description formato incorrecto", "ADD", "description_characteristic_format_KO", "Formato incorrecto", { description_characteristic: "A".repeat(79) + "á" });
characteristic_add_test("description_characteristic", "textarea", "ADD description correcto", "ADD", true, "Valor correcto", { description_characteristic: "A".repeat(80) });

characteristic_add_test("description_characteristic", "textarea", "EDIT description corto", "EDIT", "description_characteristic_min_size_KO", "Longitud mínima incorrecta", { description_characteristic: "A".repeat(79) });
characteristic_add_test("description_characteristic", "textarea", "EDIT description largo", "EDIT", "description_characteristic_max_size_KO", "Longitud máxima incorrecta", { description_characteristic: "A".repeat(5001) });
characteristic_add_test("description_characteristic", "textarea", "EDIT description formato incorrecto", "EDIT", "description_characteristic_format_KO", "Formato incorrecto", { description_characteristic: "A".repeat(79) + "á" });
characteristic_add_test("description_characteristic", "textarea", "EDIT description correcto", "EDIT", true, "Valor correcto", { description_characteristic: "A".repeat(80) });

characteristic_add_test("description_characteristic", "textarea", "SEARCH description vacío permitido", "SEARCH", true, "Valor correcto", { description_characteristic: "" });
characteristic_add_test("description_characteristic", "textarea", "SEARCH description largo", "SEARCH", "description_characteristic_max_size_KO", "Longitud máxima incorrecta", { description_characteristic: "A".repeat(5001) });
characteristic_add_test("description_characteristic", "textarea", "SEARCH description formato incorrecto", "SEARCH", "description_characteristic_format_KO", "Formato incorrecto", { description_characteristic: "A".repeat(79) + "á" });

/* data_type_characteristic */

characteristic_add_test("data_type_characteristic", "select", "ADD data_type no permitido", "ADD", "data_type_characteristic_value_KO", "Valor no permitido", { data_type_characteristic: "boolean" });
characteristic_add_test("data_type_characteristic", "select", "ADD data_type correcto number", "ADD", true, "Valor correcto", { data_type_characteristic: "number" });
characteristic_add_test("data_type_characteristic", "select", "ADD data_type correcto text", "ADD", true, "Valor correcto", { data_type_characteristic: "text" });

characteristic_add_test("data_type_characteristic", "select", "EDIT data_type no permitido", "EDIT", "data_type_characteristic_value_KO", "Valor no permitido", { data_type_characteristic: "boolean" });
characteristic_add_test("data_type_characteristic", "select", "EDIT data_type correcto set", "EDIT", true, "Valor correcto", { data_type_characteristic: "set" });

characteristic_add_test("data_type_characteristic", "select", "SEARCH data_type vacío permitido", "SEARCH", true, "Valor correcto", { data_type_characteristic: "" });
characteristic_add_test("data_type_characteristic", "select", "SEARCH data_type no permitido", "SEARCH", "data_type_characteristic_value_KO", "Valor no permitido", { data_type_characteristic: "boolean" });
characteristic_add_test("data_type_characteristic", "select", "SEARCH data_type correcto", "SEARCH", true, "Valor correcto", { data_type_characteristic: "text" });

/* category_characteristic */

characteristic_add_test("category_characteristic", "select", "ADD category no permitida", "ADD", "category_characteristic_value_KO", "Valor no permitido", { category_characteristic: "soil_wrong" });
characteristic_add_test("category_characteristic", "select", "ADD category correcta soil_site", "ADD", true, "Valor correcto", { category_characteristic: "soil_site" });
characteristic_add_test("category_characteristic", "select", "ADD category correcta soil_chem", "ADD", true, "Valor correcto", { category_characteristic: "soil_chem" });

characteristic_add_test("category_characteristic", "select", "EDIT category no permitida", "EDIT", "category_characteristic_value_KO", "Valor no permitido", { category_characteristic: "soil_wrong" });
characteristic_add_test("category_characteristic", "select", "EDIT category correcta soil_bio", "EDIT", true, "Valor correcto", { category_characteristic: "soil_bio" });

characteristic_add_test("category_characteristic", "select", "SEARCH category vacía permitida", "SEARCH", true, "Valor correcto", { category_characteristic: "" });
characteristic_add_test("category_characteristic", "select", "SEARCH category no permitida", "SEARCH", "category_characteristic_value_KO", "Valor no permitido", { category_characteristic: "soil_wrong" });
characteristic_add_test("category_characteristic", "select", "SEARCH category correcta", "SEARCH", true, "Valor correcto", { category_characteristic: "soil_site" });

/* bibref_characteristic */
characteristic_add_test("bibref_characteristic", "textarea", "ADD bibref corto", "ADD", "bibref_characteristic_min_size_KO", "Longitud mínima incorrecta", { bibref_characteristic: "Referencia cort" });
characteristic_add_test("bibref_characteristic", "textarea", "ADD bibref largo", "ADD", "bibref_characteristic_max_size_KO", "Longitud máxima incorrecta", { bibref_characteristic: "A".repeat(201) });
characteristic_add_test("bibref_characteristic", "textarea", "ADD bibref formato incorrecto", "ADD", "bibref_characteristic_format_KO", "Formato incorrecto", { bibref_characteristic: "Referencia 123 invalida" });
characteristic_add_test("bibref_characteristic", "textarea", "ADD bibref correcto", "ADD", true, "Valor correcto", { bibref_characteristic: "Pérez, referencia válida." });

characteristic_add_test("bibref_characteristic", "textarea", "EDIT bibref corto", "EDIT", "bibref_characteristic_min_size_KO", "Longitud mínima incorrecta", { bibref_characteristic: "Referencia cort" });
characteristic_add_test("bibref_characteristic", "textarea", "EDIT bibref largo", "EDIT", "bibref_characteristic_max_size_KO", "Longitud máxima incorrecta", { bibref_characteristic: "A".repeat(201) });
characteristic_add_test("bibref_characteristic", "textarea", "EDIT bibref formato incorrecto", "EDIT", "bibref_characteristic_format_KO", "Formato incorrecto", { bibref_characteristic: "Referencia 123 invalida" });
characteristic_add_test("bibref_characteristic", "textarea", "EDIT bibref correcto", "EDIT", true, "Valor correcto", { bibref_characteristic: "Pérez, referencia válida." });

characteristic_add_test("bibref_characteristic", "textarea", "SEARCH bibref vacío permitido", "SEARCH", true, "Valor correcto", { bibref_characteristic: "" });
characteristic_add_test("bibref_characteristic", "textarea", "SEARCH bibref largo", "SEARCH", "bibref_characteristic_max_size_KO", "Longitud máxima incorrecta", { bibref_characteristic: "A".repeat(201) });
characteristic_add_test("bibref_characteristic", "textarea", "SEARCH bibref formato incorrecto", "SEARCH", "bibref_characteristic_format_KO", "Formato incorrecto", { bibref_characteristic: "Referencia 123 invalida" });

/* file_characteristic */

characteristic_add_test("file_characteristic", "inputfile", "ADD file obligatorio", "ADD", "file_characteristic_not_exist_file_KO", "Fichero obligatorio", { file_characteristic: null });
characteristic_add_test("file_characteristic", "inputfile", "ADD file tipo incorrecto", "ADD", "file_characteristic_type_file_KO", "Tipo incorrecto", { file_characteristic: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
characteristic_add_test("file_characteristic", "inputfile", "ADD file tamaño incorrecto", "ADD", "file_characteristic_max_size_file_KO", "Tamaño incorrecto", { file_characteristic: { name: "archivo.pdf", type: "application/pdf", size: 200001 } });
characteristic_add_test("file_characteristic", "inputfile", "ADD file nombre incorrecto", "ADD", "file_characteristic_format_name_file_KO", "Nombre incorrecto", { file_characteristic: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
characteristic_add_test("file_characteristic", "inputfile", "ADD file correcto", "ADD", true, "Valor correcto", { file_characteristic: { name: "datos.pdf", type: "application/pdf", size: 1000 } });

characteristic_add_test("file_characteristic", "inputfile", "EDIT file vacío permitido", "EDIT", true, "Valor correcto", { file_characteristic: null });
characteristic_add_test("file_characteristic", "inputfile", "EDIT file tipo incorrecto", "EDIT", "file_characteristic_type_file_KO", "Tipo incorrecto", { file_characteristic: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
characteristic_add_test("file_characteristic", "inputfile", "EDIT file tamaño incorrecto", "EDIT", "file_characteristic_max_size_file_KO", "Tamaño incorrecto", { file_characteristic: { name: "archivo.pdf", type: "application/pdf", size: 200001 } });
characteristic_add_test("file_characteristic", "inputfile", "EDIT file nombre incorrecto", "EDIT", "file_characteristic_format_name_file_KO", "Nombre incorrecto", { file_characteristic: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
characteristic_add_test("file_characteristic", "inputfile", "EDIT file correcto", "EDIT", true, "Valor correcto", { file_characteristic: { name: "datos.pdf", type: "application/pdf", size: 1000 } });

characteristic_add_test("file_characteristic", "inputfile", "SEARCH file vacío permitido", "SEARCH", true, "Valor correcto", { file_characteristic: "" });
characteristic_add_test("file_characteristic", "inputfile", "SEARCH file nombre incorrecto", "SEARCH", "file_characteristic_format_name_file_KO", "Nombre incorrecto", { file_characteristic: "archivo malo.pdf" });
characteristic_add_test("file_characteristic", "inputfile", "SEARCH file correcto", "SEARCH", true, "Valor correcto", { file_characteristic: "datos.pdf" });