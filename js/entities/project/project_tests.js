var project_def_tests = Array();
var project_pruebas = Array();

let project_num_def = 1;
let project_num_prueba = 1;

function project_add_test(campo, elemento, descripcion, accion, esperado, mensaje, valores) {
  project_def_tests.push([
    "project",
    campo,
    elemento,
    project_num_def,
    descripcion,
    accion,
    esperado,
    mensaje
  ]);

  project_pruebas.push([
    "project",
    campo,
    project_num_def,
    project_num_prueba,
    accion,
    valores,
    esperado
  ]);

  project_num_def++;
  project_num_prueba++;
}

/* ============================= */
/* id_project                    */
/* ============================= */

project_add_test("id_project", "input", "ADD id_project vacío", "ADD", "id_project_min_size_KO", "Longitud mínima incorrecta", { id_project: "" });
project_add_test("id_project", "input", "ADD id_project demasiado largo", "ADD", "id_project_max_size_KO", "Longitud máxima incorrecta", { id_project: "1".repeat(12) });
project_add_test("id_project", "input", "ADD id_project no numérico", "ADD", "id_project_format_KO", "Formato incorrecto", { id_project: "ABC" });
project_add_test("id_project", "input", "ADD id_project correcto", "ADD", true, "Valor correcto", { id_project: "1" });

project_add_test("id_project", "input", "EDIT id_project vacío", "EDIT", "id_project_min_size_KO", "Longitud mínima incorrecta", { id_project: "" });
project_add_test("id_project", "input", "EDIT id_project demasiado largo", "EDIT", "id_project_max_size_KO", "Longitud máxima incorrecta", { id_project: "1".repeat(12) });
project_add_test("id_project", "input", "EDIT id_project no numérico", "EDIT", "id_project_format_KO", "Formato incorrecto", { id_project: "ABC" });
project_add_test("id_project", "input", "EDIT id_project correcto", "EDIT", true, "Valor correcto", { id_project: "1" });

project_add_test("id_project", "input", "SEARCH id_project vacío permitido", "SEARCH", true, "Valor correcto", { id_project: "" });
project_add_test("id_project", "input", "SEARCH id_project demasiado largo", "SEARCH", "id_project_max_size_KO", "Longitud máxima incorrecta", { id_project: "1".repeat(12) });
project_add_test("id_project", "input", "SEARCH id_project no numérico", "SEARCH", "id_project_format_KO", "Formato incorrecto", { id_project: "ABC" });

/* ============================= */
/* name_project                  */
/* ============================= */

project_add_test("name_project", "input", "ADD name_project corto", "ADD", "name_project_min_size_KO", "Longitud mínima incorrecta", { name_project: "Proyecto Corto" });
project_add_test("name_project", "input", "ADD name_project largo", "ADD", "name_project_max_size_KO", "Longitud máxima incorrecta", { name_project: "A".repeat(101) });
project_add_test("name_project", "input", "ADD name_project formato incorrecto", "ADD", "name_project_format_KO", "Formato incorrecto", { name_project: "Proyecto 123 Invalido" });
project_add_test("name_project", "input", "ADD name_project correcto", "ADD", true, "Valor correcto", { name_project: "Proyecto Ambiental Valido" });

project_add_test("name_project", "input", "EDIT name_project corto", "EDIT", "name_project_min_size_KO", "Longitud mínima incorrecta", { name_project: "Proyecto Corto" });
project_add_test("name_project", "input", "EDIT name_project largo", "EDIT", "name_project_max_size_KO", "Longitud máxima incorrecta", { name_project: "A".repeat(101) });
project_add_test("name_project", "input", "EDIT name_project formato incorrecto", "EDIT", "name_project_format_KO", "Formato incorrecto", { name_project: "Proyecto 123 Invalido" });
project_add_test("name_project", "input", "EDIT name_project correcto", "EDIT", true, "Valor correcto", { name_project: "Proyecto Ambiental Valido" });

project_add_test("name_project", "input", "SEARCH name_project vacío permitido", "SEARCH", true, "Valor correcto", { name_project: "" });
project_add_test("name_project", "input", "SEARCH name_project largo", "SEARCH", "name_project_max_size_KO", "Longitud máxima incorrecta", { name_project: "A".repeat(101) });
project_add_test("name_project", "input", "SEARCH name_project formato incorrecto", "SEARCH", "name_project_format_KO", "Formato incorrecto", { name_project: "Proyecto 123 Invalido" });

/* ============================= */
/* start_date_project            */
/* ============================= */

project_add_test("start_date_project", "input", "ADD start_date_project formato incorrecto", "ADD", "start_date_project_format_KO", "Formato incorrecto", { start_date_project: "2026-01-01" });
project_add_test("start_date_project", "input", "ADD start_date_project correcto", "ADD", true, "Valor correcto", { start_date_project: "01/01/2026" });

project_add_test("start_date_project", "input", "EDIT start_date_project formato incorrecto", "EDIT", "start_date_project_format_KO", "Formato incorrecto", { start_date_project: "2026-01-01" });
project_add_test("start_date_project", "input", "EDIT start_date_project correcto", "EDIT", true, "Valor correcto", { start_date_project: "01/01/2026" });

project_add_test("start_date_project", "input", "SEARCH start_date_project vacío permitido", "SEARCH", true, "Valor correcto", { start_date_project: "" });
project_add_test("start_date_project", "input", "SEARCH start_date_project formato incorrecto", "SEARCH", "start_date_project_format_KO", "Formato incorrecto", { start_date_project: "2026-01-01" });

/* ============================= */
/* end_date_project              */
/* ============================= */

project_add_test("end_date_project", "input", "ADD end_date_project formato incorrecto", "ADD", "end_date_project_format_KO", "Formato incorrecto", {
  start_date_project: "01/01/2026",
  end_date_project: "2026-01-01"
});

project_add_test("end_date_project", "input", "ADD end_date_project menor que start_date_project", "ADD", "end_date_project_date_greater_than_KO", "Fecha final incorrecta", {
  start_date_project: "02/01/2026",
  end_date_project: "01/01/2026"
});

project_add_test("end_date_project", "input", "ADD end_date_project correcto", "ADD", true, "Valor correcto", {
  start_date_project: "01/01/2026",
  end_date_project: "02/01/2026"
});

project_add_test("end_date_project", "input", "EDIT end_date_project formato incorrecto", "EDIT", "end_date_project_format_KO", "Formato incorrecto", {
  start_date_project: "01/01/2026",
  end_date_project: "2026-01-01"
});

project_add_test("end_date_project", "input", "EDIT end_date_project menor que start_date_project", "EDIT", "end_date_project_date_greater_than_KO", "Fecha final incorrecta", {
  start_date_project: "02/01/2026",
  end_date_project: "01/01/2026"
});

project_add_test("end_date_project", "input", "EDIT end_date_project correcto", "EDIT", true, "Valor correcto", {
  start_date_project: "01/01/2026",
  end_date_project: "02/01/2026"
});

project_add_test("end_date_project", "input", "SEARCH end_date_project vacío permitido", "SEARCH", true, "Valor correcto", { end_date_project: "" });
project_add_test("end_date_project", "input", "SEARCH end_date_project formato incorrecto", "SEARCH", "end_date_project_format_KO", "Formato incorrecto", { end_date_project: "2026-01-01" });

/* ============================= */
/* responsable_project           */
/* ============================= */

project_add_test("responsable_project", "input", "ADD responsable_project corto", "ADD", "responsable_project_min_size_KO", "Longitud mínima incorrecta", { responsable_project: "AAAAA" });
project_add_test("responsable_project", "input", "ADD responsable_project largo", "ADD", "responsable_project_max_size_KO", "Longitud máxima incorrecta", { responsable_project: "A".repeat(61) });
project_add_test("responsable_project", "input", "ADD responsable_project formato incorrecto", "ADD", "responsable_project_format_KO", "Formato incorrecto", { responsable_project: "Jose123" });
project_add_test("responsable_project", "input", "ADD responsable_project correcto", "ADD", true, "Valor correcto", { responsable_project: "José Pérez" });

project_add_test("responsable_project", "input", "EDIT responsable_project corto", "EDIT", "responsable_project_min_size_KO", "Longitud mínima incorrecta", { responsable_project: "AAAAA" });
project_add_test("responsable_project", "input", "EDIT responsable_project largo", "EDIT", "responsable_project_max_size_KO", "Longitud máxima incorrecta", { responsable_project: "A".repeat(61) });
project_add_test("responsable_project", "input", "EDIT responsable_project formato incorrecto", "EDIT", "responsable_project_format_KO", "Formato incorrecto", { responsable_project: "Jose123" });
project_add_test("responsable_project", "input", "EDIT responsable_project correcto", "EDIT", true, "Valor correcto", { responsable_project: "José Pérez" });

project_add_test("responsable_project", "input", "SEARCH responsable_project vacío permitido", "SEARCH", true, "Valor correcto", { responsable_project: "" });
project_add_test("responsable_project", "input", "SEARCH responsable_project largo", "SEARCH", "responsable_project_max_size_KO", "Longitud máxima incorrecta", { responsable_project: "A".repeat(61) });
project_add_test("responsable_project", "input", "SEARCH responsable_project formato incorrecto", "SEARCH", "responsable_project_format_KO", "Formato incorrecto", { responsable_project: "Jose123" });

/* ============================= */
/* organization_project          */
/* ============================= */

project_add_test("organization_project", "input", "ADD organization_project corto", "ADD", "organization_project_min_size_KO", "Longitud mínima incorrecta", { organization_project: "AAAAA" });
project_add_test("organization_project", "input", "ADD organization_project largo", "ADD", "organization_project_max_size_KO", "Longitud máxima incorrecta", { organization_project: "A".repeat(101) });
project_add_test("organization_project", "input", "ADD organization_project formato incorrecto", "ADD", "organization_project_format_KO", "Formato incorrecto", { organization_project: "Universidade123" });
project_add_test("organization_project", "input", "ADD organization_project correcto", "ADD", true, "Valor correcto", { organization_project: "Universidade Vigo" });

project_add_test("organization_project", "input", "EDIT organization_project corto", "EDIT", "organization_project_min_size_KO", "Longitud mínima incorrecta", { organization_project: "AAAAA" });
project_add_test("organization_project", "input", "EDIT organization_project largo", "EDIT", "organization_project_max_size_KO", "Longitud máxima incorrecta", { organization_project: "A".repeat(101) });
project_add_test("organization_project", "input", "EDIT organization_project formato incorrecto", "EDIT", "organization_project_format_KO", "Formato incorrecto", { organization_project: "Universidade123" });
project_add_test("organization_project", "input", "EDIT organization_project correcto", "EDIT", true, "Valor correcto", { organization_project: "Universidade Vigo" });

project_add_test("organization_project", "input", "SEARCH organization_project vacío permitido", "SEARCH", true, "Valor correcto", { organization_project: "" });
project_add_test("organization_project", "input", "SEARCH organization_project largo", "SEARCH", "organization_project_max_size_KO", "Longitud máxima incorrecta", { organization_project: "A".repeat(101) });
project_add_test("organization_project", "input", "SEARCH organization_project formato incorrecto", "SEARCH", "organization_project_format_KO", "Formato incorrecto", { organization_project: "Universidade123" });

/* ============================= */
/* description_project           */
/* ============================= */

project_add_test("description_project", "textarea", "ADD description_project corto", "ADD", "description_project_min_size_KO", "Longitud mínima incorrecta", { description_project: "A".repeat(29) });
project_add_test("description_project", "textarea", "ADD description_project largo", "ADD", "description_project_max_size_KO", "Longitud máxima incorrecta", { description_project: "A".repeat(501) });
project_add_test("description_project", "textarea", "ADD description_project formato incorrecto", "ADD", "description_project_format_KO", "Formato incorrecto", { description_project: "Descripción con acento no ascii valida" });
project_add_test("description_project", "textarea", "ADD description_project correcto", "ADD", true, "Valor correcto", { description_project: "Descripcion ascii valida del proyecto ambiental" });

project_add_test("description_project", "textarea", "EDIT description_project corto", "EDIT", "description_project_min_size_KO", "Longitud mínima incorrecta", { description_project: "A".repeat(29) });
project_add_test("description_project", "textarea", "EDIT description_project largo", "EDIT", "description_project_max_size_KO", "Longitud máxima incorrecta", { description_project: "A".repeat(501) });
project_add_test("description_project", "textarea", "EDIT description_project formato incorrecto", "EDIT", "description_project_format_KO", "Formato incorrecto", { description_project: "Descripción con acento no ascii valida" });
project_add_test("description_project", "textarea", "EDIT description_project correcto", "EDIT", true, "Valor correcto", { description_project: "Descripcion ascii valida del proyecto ambiental" });

project_add_test("description_project", "textarea", "SEARCH description_project vacío permitido", "SEARCH", true, "Valor correcto", { description_project: "" });
project_add_test("description_project", "textarea", "SEARCH description_project largo", "SEARCH", "description_project_max_size_KO", "Longitud máxima incorrecta", { description_project: "A".repeat(501) });
project_add_test("description_project", "textarea", "SEARCH description_project formato incorrecto", "SEARCH", "description_project_format_KO", "Formato incorrecto", { description_project: "Descripción con acento no ascii valida" });

/* ============================= */
/* file_project                  */
/* ============================= */

project_add_test("file_project", "file", "ADD file_project obligatorio", "ADD", "file_project_not_exist_file_KO", "Fichero obligatorio", { file_project: null });
project_add_test("file_project", "file", "ADD file_project tipo incorrecto", "ADD", "file_project_type_file_KO", "Tipo incorrecto", { file_project: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
project_add_test("file_project", "file", "ADD file_project tamaño incorrecto", "ADD", "file_project_max_size_file_KO", "Tamaño incorrecto", { file_project: { name: "archivo.pdf", type: "application/pdf", size: 2000001 } });
project_add_test("file_project", "file", "ADD file_project nombre incorrecto", "ADD", "file_project_format_name_file_KO", "Nombre incorrecto", { file_project: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
project_add_test("file_project", "file", "ADD file_project correcto", "ADD", true, "Valor correcto", { file_project: { name: "documento.pdf", type: "application/pdf", size: 1000 } });

project_add_test("file_project", "file", "EDIT file_project vacío permitido", "EDIT", true, "Valor correcto", { file_project: null });
project_add_test("file_project", "file", "EDIT file_project tipo incorrecto", "EDIT", "file_project_type_file_KO", "Tipo incorrecto", { file_project: { name: "archivo.exe", type: "application/x-msdownload", size: 1000 } });
project_add_test("file_project", "file", "EDIT file_project tamaño incorrecto", "EDIT", "file_project_max_size_file_KO", "Tamaño incorrecto", { file_project: { name: "archivo.pdf", type: "application/pdf", size: 2000001 } });
project_add_test("file_project", "file", "EDIT file_project nombre incorrecto", "EDIT", "file_project_format_name_file_KO", "Nombre incorrecto", { file_project: { name: "archivo malo.pdf", type: "application/pdf", size: 1000 } });
project_add_test("file_project", "file", "EDIT file_project correcto", "EDIT", true, "Valor correcto", { file_project: { name: "documento.pdf", type: "application/pdf", size: 1000 } });

project_add_test("file_project", "file", "SEARCH file_project vacío permitido", "SEARCH", true, "Valor correcto", { file_project: "" });
project_add_test("file_project", "file", "SEARCH file_project nombre incorrecto", "SEARCH", "file_project_format_name_file_KO", "Nombre incorrecto", { file_project: "archivo malo.pdf" });
project_add_test("file_project", "file", "SEARCH file_project correcto", "SEARCH", true, "Valor correcto", { file_project: "documento.pdf" });

/* ============================= */
/* code_project                  */
/* ============================= */

project_add_test("code_project", "input", "ADD code_project corto", "ADD", "code_project_min_size_KO", "Longitud mínima incorrecta", { code_project: "AAAAA" });
project_add_test("code_project", "input", "ADD code_project largo", "ADD", "code_project_max_size_KO", "Longitud máxima incorrecta", { code_project: "A".repeat(51) });
project_add_test("code_project", "input", "ADD code_project formato incorrecto", "ADD", "code_project_format_KO", "Formato incorrecto", { code_project: "Código" });
project_add_test("code_project", "input", "ADD code_project correcto", "ADD", true, "Valor correcto", { code_project: "Codigo Proyecto" });

project_add_test("code_project", "input", "EDIT code_project corto", "EDIT", "code_project_min_size_KO", "Longitud mínima incorrecta", { code_project: "AAAAA" });
project_add_test("code_project", "input", "EDIT code_project largo", "EDIT", "code_project_max_size_KO", "Longitud máxima incorrecta", { code_project: "A".repeat(51) });
project_add_test("code_project", "input", "EDIT code_project formato incorrecto", "EDIT", "code_project_format_KO", "Formato incorrecto", { code_project: "Código" });
project_add_test("code_project", "input", "EDIT code_project correcto", "EDIT", true, "Valor correcto", { code_project: "Codigo Proyecto" });

project_add_test("code_project", "input", "SEARCH code_project vacío permitido", "SEARCH", true, "Valor correcto", { code_project: "" });
project_add_test("code_project", "input", "SEARCH code_project largo", "SEARCH", "code_project_max_size_KO", "Longitud máxima incorrecta", { code_project: "A".repeat(51) });
project_add_test("code_project", "input", "SEARCH code_project formato incorrecto", "SEARCH", "code_project_format_KO", "Formato incorrecto", { code_project: "Código" });

/* ============================= */
/* acronym_project               */
/* ============================= */

project_add_test("acronym_project", "input", "ADD acronym_project corto", "ADD", "acronym_project_min_size_KO", "Longitud mínima incorrecta", { acronym_project: "AAAAA" });
project_add_test("acronym_project", "input", "ADD acronym_project largo", "ADD", "acronym_project_max_size_KO", "Longitud máxima incorrecta", { acronym_project: "A".repeat(16) });
project_add_test("acronym_project", "input", "ADD acronym_project formato incorrecto", "ADD", "acronym_project_format_KO", "Formato incorrecto", { acronym_project: "PRO YEC" });
project_add_test("acronym_project", "input", "ADD acronym_project correcto", "ADD", true, "Valor correcto", { acronym_project: "PROYEC" });

project_add_test("acronym_project", "input", "EDIT acronym_project corto", "EDIT", "acronym_project_min_size_KO", "Longitud mínima incorrecta", { acronym_project: "AAAAA" });
project_add_test("acronym_project", "input", "EDIT acronym_project largo", "EDIT", "acronym_project_max_size_KO", "Longitud máxima incorrecta", { acronym_project: "A".repeat(16) });
project_add_test("acronym_project", "input", "EDIT acronym_project formato incorrecto", "EDIT", "acronym_project_format_KO", "Formato incorrecto", { acronym_project: "PRO YEC" });
project_add_test("acronym_project", "input", "EDIT acronym_project correcto", "EDIT", true, "Valor correcto", { acronym_project: "PROYEC" });

project_add_test("acronym_project", "input", "SEARCH acronym_project vacío permitido", "SEARCH", true, "Valor correcto", { acronym_project: "" });
project_add_test("acronym_project", "input", "SEARCH acronym_project largo", "SEARCH", "acronym_project_max_size_KO", "Longitud máxima incorrecta", { acronym_project: "A".repeat(16) });
project_add_test("acronym_project", "input", "SEARCH acronym_project formato incorrecto", "SEARCH", "acronym_project_format_KO", "Formato incorrecto", { acronym_project: "PRO YEC" });

/* ============================= */
/* id_sampling_methodology       */
/* ============================= */

project_add_test("id_sampling_methodology", "input", "ADD id_sampling_methodology vacío", "ADD", "id_sampling_methodology_min_size_KO", "Longitud mínima incorrecta", { id_sampling_methodology: "" });
project_add_test("id_sampling_methodology", "input", "ADD id_sampling_methodology largo", "ADD", "id_sampling_methodology_max_size_KO", "Longitud máxima incorrecta", { id_sampling_methodology: "1".repeat(12) });
project_add_test("id_sampling_methodology", "input", "ADD id_sampling_methodology no numérico", "ADD", "id_sampling_methodology_format_KO", "Formato incorrecto", { id_sampling_methodology: "ABC" });
project_add_test("id_sampling_methodology", "input", "ADD id_sampling_methodology correcto", "ADD", true, "Valor correcto", { id_sampling_methodology: "1" });

project_add_test("id_sampling_methodology", "input", "EDIT id_sampling_methodology vacío", "EDIT", "id_sampling_methodology_min_size_KO", "Longitud mínima incorrecta", { id_sampling_methodology: "" });
project_add_test("id_sampling_methodology", "input", "EDIT id_sampling_methodology largo", "EDIT", "id_sampling_methodology_max_size_KO", "Longitud máxima incorrecta", { id_sampling_methodology: "1".repeat(12) });
project_add_test("id_sampling_methodology", "input", "EDIT id_sampling_methodology no numérico", "EDIT", "id_sampling_methodology_format_KO", "Formato incorrecto", { id_sampling_methodology: "ABC" });
project_add_test("id_sampling_methodology", "input", "EDIT id_sampling_methodology correcto", "EDIT", true, "Valor correcto", { id_sampling_methodology: "1" });

project_add_test("id_sampling_methodology", "input", "SEARCH id_sampling_methodology vacío permitido", "SEARCH", true, "Valor correcto", { id_sampling_methodology: "" });
project_add_test("id_sampling_methodology", "input", "SEARCH id_sampling_methodology largo", "SEARCH", "id_sampling_methodology_max_size_KO", "Longitud máxima incorrecta", { id_sampling_methodology: "1".repeat(12) });
project_add_test("id_sampling_methodology", "input", "SEARCH id_sampling_methodology no numérico", "SEARCH", "id_sampling_methodology_format_KO", "Formato incorrecto", { id_sampling_methodology: "ABC" });