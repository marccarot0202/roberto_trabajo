class TestSubmit {

  constructor(nombreEntidad) {
    this.nombreEntidad = nombreEntidad;
    this.estructura = window[nombreEntidad + "_estructura"];
    this.pruebasSubmit = window[nombreEntidad + "_TestSubmit"];
    this.pruebasAtributos = window[nombreEntidad + "_pruebas"];
    this.validador = new ValidateFieldsForm();
    this.instanciaEntidad = this.crearInstanciaEntidad();
  }

  ejecutar() {
    const pruebasFisicas = Array.isArray(this.pruebasSubmit) ? this.pruebasSubmit : [];
    const pruebasGeneradas = this.generarSubmitAutomatico();

    const resultadosFisicos = pruebasFisicas.map(prueba => this.ejecutarUnaPruebaSubmit(prueba, "FÍSICA"));
    const resultadosGenerados = pruebasGeneradas.map(prueba => this.ejecutarUnaPruebaSubmit(prueba, "GENERADA"));

    const resultados = resultadosFisicos.concat(resultadosGenerados);
    const resumen = this.generarResumenPorAccion(resultados);

    this.abrirVentanaResumenSubmit(resumen, resultados, pruebasGeneradas);
  }

  crearInstanciaEntidad() {
    try {
      if (typeof window[this.nombreEntidad] === "function") {
        return new window[this.nombreEntidad](true);
      }

      const claseEntidad = eval(this.nombreEntidad);

      if (typeof claseEntidad === "function") {
        return new claseEntidad(true);
      }

    } catch (error) {
      return null;
    }

    return null;
  }

  CheckSubmit(accion, valores) {
    const errores = [];

    if (!this.estructura || !Array.isArray(this.estructura.attributes)) {
      return ["estructura_no_valida"];
    }

    this.validador.prepararCampos(this.estructura, valores);

    this.estructura.attributes.forEach(atributo => {
      const valor = valores[atributo.name];
      const valorVacio = this.valorEstaVacio(valor);
      const requerido = atributo.required && atributo.required[accion] === true;

      if (accion === "SEARCH" && valorVacio) {
        return;
      }

      if (!requerido && valorVacio) {
        return;
      }

      const resultado = this.validador.ejecutarValidacionesAtributo(atributo, accion, this.instanciaEntidad);

      if (resultado !== true) {
        errores.push(resultado);
      }
    });

    return errores.length === 0 ? true : errores;
  }

  valorEstaVacio(valor) {
    if (valor === undefined || valor === null || valor === "") {
      return true;
    }

    if (typeof valor === "object" && valor !== null) {
      return false;
    }

    return false;
  }

  ejecutarUnaPruebaSubmit(prueba, origen) {
    const entidad = prueba[0];
    const accion = prueba[1];
    const numeroPrueba = prueba[2];
    const descripcion = prueba[3];
    const valores = prueba[4];
    const esperado = prueba[5];

    const obtenido = this.CheckSubmit(accion, valores);
    const correcto = this.compararResultadoSubmit(esperado, obtenido);

    return {
      origen: origen,
      entidad: entidad,
      accion: accion,
      numeroPrueba: numeroPrueba,
      descripcion: descripcion,
      valores: valores,
      esperado: esperado,
      obtenido: obtenido,
      correcta: correcto
    };
  }

  compararResultadoSubmit(esperado, obtenido) {
    if (esperado === true && obtenido === true) {
      return true;
    }

    if (Array.isArray(esperado) && Array.isArray(obtenido)) {
      return esperado.every(error => obtenido.includes(error));
    }

    if (typeof esperado === "string" && Array.isArray(obtenido)) {
      return obtenido.includes(esperado);
    }

    return JSON.stringify(esperado) === JSON.stringify(obtenido);
  }

  generarResumenPorAccion(resultados) {
    const acciones = ["ADD", "EDIT", "SEARCH"];
    const resumen = {};

    acciones.forEach(accion => {
      resumen[accion] = {
        total: 0,
        correctas: 0,
        incorrectas: 0
      };
    });

    resultados.forEach(resultado => {
      if (!resumen[resultado.accion]) {
        resumen[resultado.accion] = {
          total: 0,
          correctas: 0,
          incorrectas: 0
        };
      }

      resumen[resultado.accion].total++;

      if (resultado.correcta) {
        resumen[resultado.accion].correctas++;
      } else {
        resumen[resultado.accion].incorrectas++;
      }
    });

    return resumen;
  }

  generarSubmitAutomatico() {
    if (!Array.isArray(this.pruebasAtributos)) {
      return [];
    }

    const pruebasGeneradas = [];
    let contador = 10000;

    this.pruebasAtributos.forEach(pruebaAtributo => {
      const entidad = pruebaAtributo[0];
      const campo = pruebaAtributo[1];
      const accion = pruebaAtributo[4];
      const valoresAtributo = this.extraerValoresPrueba(campo, pruebaAtributo[5]);
      const esperadoAtributo = pruebaAtributo[6];

      const valoresCorrectos = this.obtenerValoresCorrectosBase(accion);
      const valoresSubmit = Object.assign({}, valoresCorrectos, valoresAtributo);

      const esperadoSubmit = esperadoAtributo;

      pruebasGeneradas.push([
        entidad,
        accion,
        contador,
        "Submit automático para " + campo + " en acción " + accion,
        valoresSubmit,
        esperadoSubmit
      ]);

      contador++;
    });

    return pruebasGeneradas;
  }

  obtenerValoresCorrectosBase(accion) {
    const valores = {};

    if (!this.estructura || !Array.isArray(this.estructura.attributes)) {
      return valores;
    }

    this.estructura.attributes.forEach(atributo => {
      valores[atributo.name] = this.valorCorrectoParaAtributo(atributo, accion);
    });

    return valores;
  }

  valorCorrectoParaAtributo(atributo, accion) {
    const nombre = atributo.name;

    const valores = {
      id_project: "1",
      name_project: "Proyecto Ambiental Valido",
      start_date_project: "01/01/2026",
      end_date_project: "02/01/2026",
      responsable_project: "José Pérez",
      organization_project: "Universidade Vigo",
      description_project: "Descripcion ascii valida del proyecto ambiental",
      file_project: { name: "documento.pdf", type: "application/pdf", size: 1000 },
      code_project: "Codigo Proyecto",
      acronym_project: "PROYEC",
      id_sampling_methodology: "1",

      id_analysis_preparation: "1",
      name_analysis_preparation: "Preparation Name",
      description_analysis_preparation: "A".repeat(80),
      bib_analysis_preparation: "Pérez, Manual.",
      file_analysis_preparation: { name: "archivo.pdf", type: "application/pdf", size: 1000 },

      id_characteristic: "1",
      name_characteristic: "Soil Site Name",
      description_characteristic: "A".repeat(80),
      data_type_characteristic: "number",
      category_characteristic: "soil_site",
      bibref_characteristic: "Pérez, referencia válida.",
      file_characteristic: { name: "datos.pdf", type: "application/pdf", size: 1000 }
    };

    if (accion === "SEARCH") {
      return "";
    }

    if (valores[nombre] !== undefined) {
      return valores[nombre];
    }

    if (atributo.type === "int") {
      return "1";
    }

    if (atributo.type === "file") {
      return { name: "archivo.pdf", type: "application/pdf", size: 1000 };
    }

    if (atributo.type === "enum") {
      const lista = atributo.validations &&
        atributo.validations.ADD &&
        atributo.validations.ADD[0] &&
        Array.isArray(atributo.validations.ADD[0].param)
          ? atributo.validations.ADD[0].param
          : ["valor"];

      return lista[0];
    }

    return "A".repeat(20);
  }

  extraerValoresPrueba(campo, valoresOriginales) {
    const valores = {};

    if (Array.isArray(valoresOriginales)) {
      valoresOriginales.forEach(objeto => {
        Object.keys(objeto).forEach(clave => {
          valores[clave] = objeto[clave];
        });
      });
    } else if (typeof valoresOriginales === "object" && valoresOriginales !== null) {
      Object.keys(valoresOriginales).forEach(clave => {
        valores[clave] = valoresOriginales[clave];
      });
    } else {
      valores[campo] = valoresOriginales;
    }

    if (
      valores.format_name_file !== undefined ||
      valores.type_file !== undefined ||
      valores.max_size_file !== undefined
    ) {
      valores[campo] = {
        name: valores.format_name_file || "",
        type: valores.type_file || "",
        size: valores.max_size_file || 0
      };

      delete valores.format_name_file;
      delete valores.type_file;
      delete valores.max_size_file;
    }

    return valores;
  }

  abrirVentanaResumenSubmit(resumen, resultados, pruebasGeneradas) {
    const resultadosJSON = JSON.stringify(resultados).replace(/</g, "\\u003c");
    const pruebasGeneradasJSON = JSON.stringify(pruebasGeneradas, null, 2).replace(/</g, "\\u003c");

    const ventana = window.open("", "_blank", "width=1200,height=800,scrollbars=yes");

    ventana.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Test de submit - ${this.nombreEntidad}</title>
        <link rel="stylesheet" href="css/IU.css">
      </head>
      <body>
        <div class="ventana-scroll">
          <h1>Test de submit - ${this.nombreEntidad}</h1>

          <section class="api-card">
            <h2>Resumen por acción</h2>

            <table class="tabla-resultados">
              <tr>
                <th>Acción</th>
                <th>Pruebas realizadas</th>
                <th>Correctas</th>
                <th>Incorrectas</th>
              </tr>

              ${Object.keys(resumen).map(accion => `
                <tr>
                  <td>${accion}</td>
                  <td>${resumen[accion].total}</td>
                  <td class="ok">${resumen[accion].correctas}</td>
                  <td class="${resumen[accion].incorrectas === 0 ? "ok" : "ko"}">${resumen[accion].incorrectas}</td>
                </tr>
              `).join("")}
            </table>

            <button type="button" onclick="abrirDetalleSubmit()">Ver detalle de pruebas submit</button>
            <button type="button" onclick="abrirJSONSubmit()">Ver JSON generado automáticamente</button>
          </section>
        </div>

        <script>
          const resultadosSubmit = ${resultadosJSON};
          const pruebasSubmitGeneradas = ${pruebasGeneradasJSON};

          function escapeHTML(valor) {
            return String(valor)
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
          }

          function abrirDetalleSubmit() {
            const detalle = window.open("", "_blank", "width=1400,height=850,scrollbars=yes");

            detalle.document.write(\`
              <!DOCTYPE html>
              <html lang="es">
              <head>
                <meta charset="UTF-8">
                <title>Detalle submit</title>
                <link rel="stylesheet" href="css/IU.css">
              </head>
              <body>
                <div class="ventana-scroll">
                  <h1>Detalle de pruebas submit</h1>

                  <table class="tabla-resultados">
                    <tr>
                      <th>Origen</th>
                      <th>Entidad</th>
                      <th>Acción</th>
                      <th>Nº prueba</th>
                      <th>Descripción</th>
                      <th>Valores</th>
                      <th>Esperado</th>
                      <th>Obtenido</th>
                      <th>Resultado</th>
                    </tr>

                    \${resultadosSubmit.map(prueba => \`
                      <tr>
                        <td>\${escapeHTML(prueba.origen)}</td>
                        <td>\${escapeHTML(prueba.entidad)}</td>
                        <td>\${escapeHTML(prueba.accion)}</td>
                        <td>\${prueba.numeroPrueba}</td>
                        <td>\${escapeHTML(prueba.descripcion)}</td>
                        <td><pre>\${escapeHTML(JSON.stringify(prueba.valores, null, 2))}</pre></td>
                        <td><pre>\${escapeHTML(JSON.stringify(prueba.esperado))}</pre></td>
                        <td><pre>\${escapeHTML(JSON.stringify(prueba.obtenido))}</pre></td>
                        <td class="\${prueba.correcta ? "ok" : "ko"}">\${prueba.correcta ? "OK" : "KO"}</td>
                      </tr>
                    \`).join("")}
                  </table>
                </div>
              </body>
              </html>
            \`);

            detalle.document.close();
          }

          function abrirJSONSubmit() {
            const jsonWindow = window.open("", "_blank", "width=1200,height=850,scrollbars=yes");

            jsonWindow.document.write(\`
              <!DOCTYPE html>
              <html lang="es">
              <head>
                <meta charset="UTF-8">
                <title>JSON submit generado</title>
                <link rel="stylesheet" href="css/IU.css">
              </head>
              <body>
                <div class="ventana-scroll">
                  <h1>JSON de pruebas submit generado automáticamente</h1>
                  <p>El usuario puede copiar este contenido e incluirlo en un fichero físico de exportación.</p>
                  <pre>\${escapeHTML("var ${this.nombreEntidad}_TestSubmit = Array(\\n" + pruebasSubmitGeneradas.map(p => "  " + JSON.stringify(p)).join(",\\n") + "\\n);")}</pre>
                </div>
              </body>
              </html>
            \`);

            jsonWindow.document.close();
          }
        </script>
      </body>
      </html>
    `);

    ventana.document.close();
  }
}