class TestForm {

  constructor(nombreEntidad) {
    this.nombreEntidad = nombreEntidad;
    this.estructura = window[nombreEntidad + "_estructura"];
    this.defTests = window[nombreEntidad + "_def_tests"];
    this.pruebas = window[nombreEntidad + "_pruebas"];
    this.validador = new ValidateFieldsForm();
    this.instanciaEntidad = this.crearInstanciaEntidad();
  }

  ejecutar() {
    const infoEstructura = this.analizarEstructura();
    const infoDefiniciones = this.analizarDefinicionesTest();
    const resultadosPruebas = this.ejecutarPruebas();
    const infoPruebas = this.analizarPruebas(resultadosPruebas);

    this.abrirVentanaResumen(infoEstructura, infoDefiniciones, infoPruebas, resultadosPruebas);
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

  analizarEstructura() {
    const resultado = {
      correcta: true,
      errores: [],
      numeroAtributos: 0,
      atributos: []
    };

    if (!this.estructura) {
      resultado.correcta = false;
      resultado.errores.push("No existe la variable " + this.nombreEntidad + "_estructura");
      return resultado;
    }

    if (typeof this.estructura !== "object") {
      resultado.correcta = false;
      resultado.errores.push("La estructura no es un objeto.");
      return resultado;
    }

    if (this.estructura.entity !== this.nombreEntidad) {
      resultado.correcta = false;
      resultado.errores.push("El campo entity no coincide con el nombre de la entidad.");
    }

    if (!Array.isArray(this.estructura.attributes)) {
      resultado.correcta = false;
      resultado.errores.push("El campo attributes no existe o no es un array.");
      return resultado;
    }

    resultado.numeroAtributos = this.estructura.attributes.length;

    this.estructura.attributes.forEach(atributo => {
      const infoAtributo = {
        name: atributo.name,
        type: atributo.type,
        element: atributo.element,
        correcta: true
      };

      if (typeof atributo.name !== "string") {
        infoAtributo.correcta = false;
        resultado.correcta = false;
      }

      if (typeof atributo.type !== "string") {
        infoAtributo.correcta = false;
        resultado.correcta = false;
      }

      if (typeof atributo.element !== "string") {
        infoAtributo.correcta = false;
        resultado.correcta = false;
      }

      if (typeof atributo.required !== "object") {
        infoAtributo.correcta = false;
        resultado.correcta = false;
      }

      if (typeof atributo.validations !== "object") {
        infoAtributo.correcta = false;
        resultado.correcta = false;
      }

      resultado.atributos.push(infoAtributo);
    });

    return resultado;
  }

  analizarDefinicionesTest() {
    const resultado = {
      total: 0,
      correctasTipo: 0,
      incorrectasTipo: 0,
      porAtributo: {}
    };

    if (!Array.isArray(this.defTests)) {
      return resultado;
    }

    resultado.total = this.defTests.length;

    this.defTests.forEach(definicion => {
      const campo = definicion[1];

      if (!resultado.porAtributo[campo]) {
        resultado.porAtributo[campo] = 0;
      }

      resultado.porAtributo[campo]++;

      if (this.definicionTestCorrecta(definicion)) {
        resultado.correctasTipo++;
      } else {
        resultado.incorrectasTipo++;
      }
    });

    return resultado;
  }

  definicionTestCorrecta(definicion) {
    if (!Array.isArray(definicion)) {
      return false;
    }

    if (definicion.length !== 8) {
      return false;
    }

    if (typeof definicion[0] !== "string") {
      return false;
    }

    if (typeof definicion[1] !== "string") {
      return false;
    }

    if (typeof definicion[2] !== "string") {
      return false;
    }

    if (typeof definicion[3] !== "number") {
      return false;
    }

    if (typeof definicion[4] !== "string") {
      return false;
    }

    if (!["ADD", "EDIT", "SEARCH"].includes(definicion[5])) {
      return false;
    }

    if (!(typeof definicion[6] === "string" || typeof definicion[6] === "boolean")) {
      return false;
    }

    if (typeof definicion[7] !== "string") {
      return false;
    }

    return true;
  }

  analizarPruebas(resultadosPruebas) {
    const resultado = {
      total: 0,
      correctasTipo: 0,
      incorrectasTipo: 0,
      pruebasOK: 0,
      pruebasKO: 0,
      porDefinicion: {}
    };

    if (!Array.isArray(this.pruebas)) {
      return resultado;
    }

    resultado.total = this.pruebas.length;

    this.pruebas.forEach(prueba => {
      const numDef = prueba[2];

      if (!resultado.porDefinicion[numDef]) {
        resultado.porDefinicion[numDef] = {
          error: 0,
          exito: 0
        };
      }

      if (prueba[6] === true) {
        resultado.porDefinicion[numDef].exito++;
      } else {
        resultado.porDefinicion[numDef].error++;
      }

      if (this.pruebaCorrectaTipo(prueba)) {
        resultado.correctasTipo++;
      } else {
        resultado.incorrectasTipo++;
      }
    });

    resultadosPruebas.forEach(resultadoPrueba => {
      if (resultadoPrueba.correcta) {
        resultado.pruebasOK++;
      } else {
        resultado.pruebasKO++;
      }
    });

    return resultado;
  }

  pruebaCorrectaTipo(prueba) {
    if (!Array.isArray(prueba)) {
      return false;
    }

    if (prueba.length !== 7) {
      return false;
    }

    if (typeof prueba[0] !== "string") {
      return false;
    }

    if (typeof prueba[1] !== "string") {
      return false;
    }

    if (typeof prueba[2] !== "number") {
      return false;
    }

    if (typeof prueba[3] !== "number") {
      return false;
    }

    if (!["ADD", "EDIT", "SEARCH"].includes(prueba[4])) {
      return false;
    }

    if (!(typeof prueba[5] === "object")) {
      return false;
    }

    if (!(typeof prueba[6] === "string" || typeof prueba[6] === "boolean")) {
      return false;
    }

    return true;
  }

  ejecutarPruebas() {
    if (!Array.isArray(this.pruebas)) {
      return [];
    }

    const resultados = [];

    this.pruebas.forEach(prueba => {
      resultados.push(this.ejecutarUnaPrueba(prueba));
    });

    return resultados;
  }

  ejecutarUnaPrueba(prueba) {
    const entidad = prueba[0];
    const campo = prueba[1];
    const numeroDefinicion = prueba[2];
    const numeroPrueba = prueba[3];
    const accion = prueba[4];
    const valoresOriginales = prueba[5];
    const esperado = prueba[6];

    const valores = this.extraerValoresPrueba(campo, valoresOriginales);
    const atributo = this.obtenerAtributo(campo);

    let obtenido = "ATRIBUTO_NO_EXISTE";

    if (atributo) {
      this.validador.prepararCampos(this.estructura, valores);
      obtenido = this.validador.ejecutarValidacionesAtributo(atributo, accion, this.instanciaEntidad);
    }

    const correcto = JSON.stringify(obtenido) === JSON.stringify(esperado);

    return {
      entidad: entidad,
      campo: campo,
      accion: accion,
      numeroDefinicion: numeroDefinicion,
      numeroPrueba: numeroPrueba,
      valorProbado: valores,
      esperado: esperado,
      obtenido: obtenido,
      correcta: correcto
    };
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

  obtenerAtributo(nombreCampo) {
    if (!this.estructura || !Array.isArray(this.estructura.attributes)) {
      return null;
    }

    return this.estructura.attributes.find(atributo => atributo.name === nombreCampo) || null;
  }

  abrirVentanaResumen(infoEstructura, infoDefiniciones, infoPruebas, resultadosPruebas) {
    const detallesJSON = JSON.stringify(resultadosPruebas).replace(/</g, "\\u003c");

    const ventana = window.open("", "_blank", "width=1200,height=800,scrollbars=yes");

    ventana.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Test de atributos - ${this.nombreEntidad}</title>
        <link rel="stylesheet" href="css/IU.css">
      </head>
      <body>
        <div class="ventana-scroll">
          <h1>Test de atributos - ${this.nombreEntidad}</h1>

          <section class="api-card">
            <h2>1. Información sobre la estructura de la entidad</h2>
            <p><strong>Estructura correcta:</strong> ${infoEstructura.correcta ? "Sí" : "No"}</p>
            <p><strong>Número de atributos:</strong> ${infoEstructura.numeroAtributos}</p>

            <table class="tabla-resultados">
              <tr>
                <th>Atributo</th>
                <th>Tipo</th>
                <th>Elemento</th>
                <th>Correcto</th>
              </tr>
              ${infoEstructura.atributos.map(attr => `
                <tr>
                  <td>${this.escapeHTML(attr.name)}</td>
                  <td>${this.escapeHTML(attr.type)}</td>
                  <td>${this.escapeHTML(attr.element)}</td>
                  <td class="${attr.correcta ? "ok" : "ko"}">${attr.correcta ? "OK" : "KO"}</td>
                </tr>
              `).join("")}
            </table>
          </section>

          <section class="api-card">
            <h2>2. Información sobre la definición de los test</h2>
            <p><strong>Definiciones de test existentes:</strong> ${infoDefiniciones.total}</p>
            <p><strong>Definiciones bien definidas a nivel de tipo:</strong> ${infoDefiniciones.correctasTipo}</p>
            <p><strong>Definiciones mal definidas a nivel de tipo:</strong> ${infoDefiniciones.incorrectasTipo}</p>

            <table class="tabla-resultados">
              <tr>
                <th>Atributo</th>
                <th>Número de definiciones</th>
              </tr>
              ${Object.keys(infoDefiniciones.porAtributo).map(campo => `
                <tr>
                  <td>${this.escapeHTML(campo)}</td>
                  <td>${infoDefiniciones.porAtributo[campo]}</td>
                </tr>
              `).join("")}
            </table>
          </section>

          <section class="api-card">
            <h2>3. Información sobre la definición de pruebas</h2>
            <p><strong>Pruebas existentes:</strong> ${infoPruebas.total}</p>
            <p><strong>Pruebas bien definidas a nivel de tipo:</strong> ${infoPruebas.correctasTipo}</p>
            <p><strong>Pruebas mal definidas a nivel de tipo:</strong> ${infoPruebas.incorrectasTipo}</p>
            <p><strong>Pruebas que dan el resultado esperado:</strong> ${infoPruebas.pruebasOK}</p>
            <p><strong>Pruebas que no dan el resultado esperado:</strong> ${infoPruebas.pruebasKO}</p>

            <table class="tabla-resultados">
              <tr>
                <th>Definición de test</th>
                <th>Pruebas de error</th>
                <th>Pruebas de éxito</th>
              </tr>
              ${Object.keys(infoPruebas.porDefinicion).map(numDef => `
                <tr>
                  <td>${numDef}</td>
                  <td>${infoPruebas.porDefinicion[numDef].error}</td>
                  <td>${infoPruebas.porDefinicion[numDef].exito}</td>
                </tr>
              `).join("")}
            </table>

            <button type="button" onclick="abrirDetallePruebas()">Ver detalle de pruebas</button>
          </section>
        </div>

        <script>
          const detallesPruebas = ${detallesJSON};

          function escapeHTML(valor) {
            return String(valor)
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
          }

          function abrirDetallePruebas() {
            const detalle = window.open("", "_blank", "width=1300,height=800,scrollbars=yes");

            detalle.document.write(\`
              <!DOCTYPE html>
              <html lang="es">
              <head>
                <meta charset="UTF-8">
                <title>Detalle de pruebas de atributos</title>
                <link rel="stylesheet" href="css/IU.css">
              </head>
              <body>
                <div class="ventana-scroll">
                  <h1>Detalle de pruebas de atributos</h1>

                  <table class="tabla-resultados">
                    <tr>
                      <th>Entidad</th>
                      <th>Campo</th>
                      <th>Acción</th>
                      <th>Nº definición</th>
                      <th>Nº prueba</th>
                      <th>Valor probado</th>
                      <th>Esperado</th>
                      <th>Obtenido</th>
                      <th>Resultado</th>
                    </tr>
                    \${detallesPruebas.map(prueba => \`
                      <tr>
                        <td>\${escapeHTML(prueba.entidad)}</td>
                        <td>\${escapeHTML(prueba.campo)}</td>
                        <td>\${escapeHTML(prueba.accion)}</td>
                        <td>\${prueba.numeroDefinicion}</td>
                        <td>\${prueba.numeroPrueba}</td>
                        <td><pre>\${escapeHTML(JSON.stringify(prueba.valorProbado, null, 2))}</pre></td>
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
        </script>
      </body>
      </html>
    `);

    ventana.document.close();
  }

  escapeHTML(valor) {
    return String(valor)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}