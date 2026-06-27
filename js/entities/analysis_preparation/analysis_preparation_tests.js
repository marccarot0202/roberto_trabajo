var analysis_preparation_def_tests = Array();
var analysis_preparation_pruebas = Array();

let analysis_preparation_num_def = 1;
let analysis_preparation_num_prueba = 1;

function analysis_preparation_add_test(campo, elemento, descripcion, accion, esperado, mensaje, valores) {
  analysis_preparation_def_tests.push([
    "analysis_preparation",
    campo,
    elemento,
    analysis_preparation_num_def,
    descripcion,
    accion,
    esperado,
    mensaje
  ]);

  analysis_preparation_pruebas.push([
    "analysis_preparation",
    campo,
    analysis_preparation_num_def,
    analysis_preparation_num_prueba,
    accion,
    valores,
    esperado
  ]);

  analysis_preparation_num_def++;
  analysis_preparation_num_prueba++;
}

/* id_analysis_preparation */

analysis_preparation_add_test("id_analysis_preparation", "input", "ADD id vacío", "ADD", "id_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { id_analysis_preparation: "" });
analysis_preparation_add_test("id_analysis_preparation", "input", "ADD id largo", "ADD", "id_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { id_analysis_preparation: "1".repeat(12) });
analysis_preparation_add_test("id_analysis_preparation", "input", "ADD id formato incorrecto", "ADD", "id_analysis_preparation_format_KO", "Formato incorrecto", { id_analysis_preparation: "ABC" });
analysis_preparation_add_test("id_analysis_preparation", "input", "ADD id correcto", "ADD", true, "Valor correcto", { id_analysis_preparation: "1" });

analysis_preparation_add_test("id_analysis_preparation", "input", "EDIT id vacío", "EDIT", "id_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { id_analysis_preparation: "" });
analysis_preparation_add_test("id_analysis_preparation", "input", "EDIT id largo", "EDIT", "id_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { id_analysis_preparation: "1".repeat(12) });
analysis_preparation_add_test("id_analysis_preparation", "input", "EDIT id formato incorrecto", "EDIT", "id_analysis_preparation_format_KO", "Formato incorrecto", { id_analysis_preparation: "ABC" });
analysis_preparation_add_test("id_analysis_preparation", "input", "EDIT id correcto", "EDIT", true, "Valor correcto", { id_analysis_preparation: "1" });

analysis_preparation_add_test("id_analysis_preparation", "input", "SEARCH id vacío permitido", "SEARCH", true, "Valor correcto", { id_analysis_preparation: "" });
analysis_preparation_add_test("id_analysis_preparation", "input", "SEARCH id largo", "SEARCH", "id_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { id_analysis_preparation: "1".repeat(12) });
analysis_preparation_add_test("id_analysis_preparation", "input", "SEARCH id formato incorrecto", "SEARCH", "id_analysis_preparation_format_KO", "Formato incorrecto", { id_analysis_preparation: "ABC" });

/* name_analysis_preparation */

analysis_preparation_add_test("name_analysis_preparation", "input", "ADD name corto", "ADD", "name_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { name_analysis_preparation: "Nombre" });
analysis_preparation_add_test("name_analysis_preparation", "input", "ADD name largo", "ADD", "name_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { name_analysis_preparation: "A".repeat(101) });
analysis_preparation_add_test("name_analysis_preparation", "input", "ADD name formato incorrecto", "ADD", "name_analysis_preparation_format_KO", "Formato incorrecto", { name_analysis_preparation: "Nombre 123" });
analysis_preparation_add_test("name_analysis_preparation", "input", "ADD name correcto", "ADD", true, "Valor correcto", { name_analysis_preparation: "Preparation Name" });

analysis_preparation_add_test("name_analysis_preparation", "input", "EDIT name corto", "EDIT", "name_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { name_analysis_preparation: "Nombre" });
analysis_preparation_add_test("name_analysis_preparation", "input", "EDIT name largo", "EDIT", "name_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { name_analysis_preparation: "A".repeat(101) });
analysis_preparation_add_test("name_analysis_preparation", "input", "EDIT name formato incorrecto", "EDIT", "name_analysis_preparation_format_KO", "Formato incorrecto", { name_analysis_preparation: "Nombre 123" });
analysis_preparation_add_test("name_analysis_preparation", "input", "EDIT name correcto", "EDIT", true, "Valor correcto", { name_analysis_preparation: "Preparation Name" });

analysis_preparation_add_test("name_analysis_preparation", "input", "SEARCH name vacío permitido", "SEARCH", true, "Valor correcto", { name_analysis_preparation: "" });
analysis_preparation_add_test("name_analysis_preparation", "input", "SEARCH name largo", "SEARCH", "name_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { name_analysis_preparation: "A".repeat(101) });
analysis_preparation_add_test("name_analysis_preparation", "input", "SEARCH name formato incorrecto", "SEARCH", "name_analysis_preparation_format_KO", "Formato incorrecto", { name_analysis_preparation: "Nombre 123" });

/* description_analysis_preparation */

analysis_preparation_add_test("description_analysis_preparation", "textarea", "ADD description corto", "ADD", "description_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { description_analysis_preparation: "A".repeat(79) });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "ADD description largo", "ADD", "description_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { description_analysis_preparation: "A".repeat(5001) });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "ADD description formato incorrecto", "ADD", "description_analysis_preparation_format_KO", "Formato incorrecto", { description_analysis_preparation: "A".repeat(79) + "á" });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "ADD description correcto", "ADD", true, "Valor correcto", { description_analysis_preparation: "A".repeat(80) });

analysis_preparation_add_test("description_analysis_preparation", "textarea", "EDIT description corto", "EDIT", "description_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { description_analysis_preparation: "A".repeat(79) });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "EDIT description largo", "EDIT", "description_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { description_analysis_preparation: "A".repeat(5001) });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "EDIT description formato incorrecto", "EDIT", "description_analysis_preparation_format_KO", "Formato incorrecto", { description_analysis_preparation: "A".repeat(79) + "á" });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "EDIT description correcto", "EDIT", true, "Valor correcto", { description_analysis_preparation: "A".repeat(80) });

analysis_preparation_add_test("description_analysis_preparation", "textarea", "SEARCH description vacío permitido", "SEARCH", true, "Valor correcto", { description_analysis_preparation: "" });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "SEARCH description largo", "SEARCH", "description_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { description_analysis_preparation: "A".repeat(5001) });
analysis_preparation_add_test("description_analysis_preparation", "textarea", "SEARCH description formato incorrecto", "SEARCH", "description_analysis_preparation_format_KO", "Formato incorrecto", { description_analysis_preparation: "A".repeat(79) + "á" });

/* bib_analysis_preparation */

analysis_preparation_add_test("bib_analysis_preparation", "textarea", "ADD bib corto", "ADD", "bib_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { bib_analysis_preparation: "AAAAA" });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "ADD bib largo", "ADD", "bib_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { bib_analysis_preparation: "A".repeat(201) });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "ADD bib formato incorrecto", "ADD", "bib_analysis_preparation_format_KO", "Formato incorrecto", { bib_analysis_preparation: "Referencia 123 invalida" });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "ADD bib correcto", "ADD", true, "Valor correcto", { bib_analysis_preparation: "Pérez, Manual." });

analysis_preparation_add_test("bib_analysis_preparation", "textarea", "EDIT bib corto", "EDIT", "bib_analysis_preparation_min_size_KO", "Longitud mínima incorrecta", { bib_analysis_preparation: "AAAAA" });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "EDIT bib largo", "EDIT", "bib_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { bib_analysis_preparation: "A".repeat(201) });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "EDIT bib formato incorrecto", "EDIT", "bib_analysis_preparation_format_KO", "Formato incorrecto", { bib_analysis_preparation: "Referencia 123 invalida" });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "EDIT bib correcto", "EDIT", true, "Valor correcto", { bib_analysis_preparation: "Pérez, Manual." });

analysis_preparation_add_test("bib_analysis_preparation", "textarea", "SEARCH bib vacío permitido", "SEARCH", true, "Valor correcto", { bib_analysis_preparation: "" });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "SEARCH bib largo", "SEARCH", "bib_analysis_preparation_max_size_KO", "Longitud máxima incorrecta", { bib_analysis_preparation: "A".repeat(201) });
analysis_preparation_add_test("bib_analysis_preparation", "textarea", "SEARCH bib formato incorrecto", "SEARCH", "bib_analysis_preparation_format_KO", "Formato incorrecto", { bib_analysis_preparation: "Referencia 123 invalida" });

/* file_analysis_preparation */

analysis_preparation_add_test("file_analysis_preparation", "inputfile", "ADD file obligatorio", "ADD", "file_analysis_preparation_not_exist_file_KO", "Fichero obligatorio", { file_analysis_preparation: null });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "ADD file tipo incorrecto", "ADD", "file_analysis_preparation_type_file_KO", "Tipo incorrecto", { file_analysis_preparation: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "ADD file tamaño incorrecto", "ADD", "file_analysis_preparation_max_size_file_KO", "Tamaño incorrecto", { file_analysis_preparation: { name: "archivo.pdf", type: "application/pdf", size: 2000001 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "ADD file nombre incorrecto", "ADD", "file_analysis_preparation_format_name_file_KO", "Nombre incorrecto", { file_analysis_preparation: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "ADD file correcto", "ADD", true, "Valor correcto", { file_analysis_preparation: { name: "archivo.pdf", type: "application/pdf", size: 1000 } });

analysis_preparation_add_test("file_analysis_preparation", "inputfile", "EDIT file vacío permitido", "EDIT", true, "Valor correcto", { file_analysis_preparation: null });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "EDIT file tipo incorrecto", "EDIT", "file_analysis_preparation_type_file_KO", "Tipo incorrecto", { file_analysis_preparation: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "EDIT file tamaño incorrecto", "EDIT", "file_analysis_preparation_max_size_file_KO", "Tamaño incorrecto", { file_analysis_preparation: { name: "archivo.pdf", type: "application/pdf", size: 2000001 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "EDIT file nombre incorrecto", "EDIT", "file_analysis_preparation_format_name_file_KO", "Nombre incorrecto", { file_analysis_preparation: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "EDIT file correcto", "EDIT", true, "Valor correcto", { file_analysis_preparation: { name: "archivo.pdf", type: "application/pdf", size: 1000 } });

analysis_preparation_add_test("file_analysis_preparation", "inputfile", "SEARCH file vacío permitido", "SEARCH", true, "Valor correcto", { file_analysis_preparation: "" });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "SEARCH file nombre incorrecto", "SEARCH", "file_analysis_preparation_format_name_file_KO", "Nombre incorrecto", { file_analysis_preparation: "archivo malo.pdf" });
analysis_preparation_add_test("file_analysis_preparation", "inputfile", "SEARCH file correcto", "SEARCH", true, "Valor correcto", { file_analysis_preparation: "archivo.pdf" });