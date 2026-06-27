class ValidateFieldsForm {

  constructor() {
    this.validations = new Validations();
  }

  limpiarCamposTemporales() {
    const campos = document.querySelectorAll('[data-test-field="true"]');

    campos.forEach(campo => {
      campo.remove();
    });
  }

  prepararCampos(estructura, valores) {
    this.limpiarCamposTemporales();

    estructura.attributes.forEach(atributo => {
      const valor = valores[atributo.name] !== undefined ? valores[atributo.name] : "";
      this.prepararCampo(atributo.name, atributo.element, valor);
    });
  }

  prepararCampo(campo, elemento, valor) {
    let anterior = document.getElementById(campo);

    if (anterior && anterior.getAttribute("data-test-field") === "true") {
      anterior.remove();
    }

    let nuevoElemento;

    if (elemento === "textarea") {
      nuevoElemento = document.createElement("textarea");
      nuevoElemento.value = valor || "";
    } else if (elemento === "select") {
      nuevoElemento = document.createElement("select");

      const option = document.createElement("option");
      option.value = valor || "";
      option.textContent = valor || "";
      option.selected = true;

      nuevoElemento.appendChild(option);
      
      } else if (elemento === "file" || elemento === "inputfile") {
      nuevoElemento = document.createElement("input");
      nuevoElemento.type = "file";

      if (valor && typeof valor === "object") {
        nuevoElemento._testFile = valor;
        nuevoElemento._testValue = valor.name || "";
      } else {
        nuevoElemento._testValue = valor || "";
      }
    }   else {
      nuevoElemento = document.createElement("input");
      nuevoElemento.type = "text";
      nuevoElemento.value = valor || "";
    }

    nuevoElemento.id = campo;
    nuevoElemento.name = campo;
    nuevoElemento.setAttribute("data-test-field", "true");
    nuevoElemento.style.display = "none";

    document.body.appendChild(nuevoElemento);

    return nuevoElemento;
  }

  ejecutarValidacionesAtributo(atributo, accion, instanciaEntidad) {
    const validacionesAccion = atributo.validations && atributo.validations[accion]
      ? atributo.validations[accion]
      : [];

    for (let validacion of validacionesAccion) {
      const resultado = this.ejecutarValidacion(atributo, validacion, instanciaEntidad);

      if (resultado !== true) {
        return resultado;
      }
    }

    return true;
  }

  ejecutarValidacion(atributo, validacion, instanciaEntidad) {
    const metodo = validacion.method;
    const parametro = validacion.param;
    const error = validacion.error;

    if (validacion.personalize === true || metodo === "personalized") {
      return this.ejecutarValidacionPersonalizada(atributo, instanciaEntidad, error);
    }

    if (typeof this.validations[metodo] !== "function") {
      return atributo.name + "_" + metodo + "_NO_EXISTE";
    }

    let resultado;

    if (parametro === null || parametro === undefined) {
      resultado = this.validations[metodo](atributo.name);
    } else {
      resultado = this.validations[metodo](atributo.name, parametro);
    }

    if (resultado === true) {
      return true;
    }

    return error;
  }

  ejecutarValidacionPersonalizada(atributo, instanciaEntidad, error) {
    if (!instanciaEntidad) {
      return error;
    }

    const nombreMetodo = atributo.name + "_personalized_validation";

    if (typeof instanciaEntidad[nombreMetodo] !== "function") {
      return error;
    }

    const resultado = instanciaEntidad[nombreMetodo]();

    if (resultado === true) {
      return true;
    }

    if (typeof resultado === "string") {
      return resultado;
    }

    return error;
  }
}