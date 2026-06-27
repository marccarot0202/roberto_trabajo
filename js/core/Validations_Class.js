class Validations {

  constructor() {}

  getElement(id) {
    return document.getElementById(id);
  }

  getValue(id) {
    const elemento = this.getElement(id);

    if (!elemento) {
      return "";
    }

    if (elemento._testValue !== undefined) {
      return elemento._testValue;
    }

    if (elemento.tagName === "TEXTAREA") {
      return elemento.value || elemento.innerHTML || "";
    }

    if (elemento.tagName === "SELECT") {
      return elemento.value || "";
    }

    return elemento.value || "";
  }

  getFile(id) {
    const elemento = this.getElement(id);

    if (!elemento) {
      return null;
    }

    if (elemento._testFile) {
      return elemento._testFile;
    }

    if (elemento.files && elemento.files.length > 0) {
      return elemento.files[0];
    }

    return null;
  }

  min_size(id, minsize) {
    const valor = this.getValue(id);
    return String(valor).length >= minsize;
  }

  max_size(id, maxsize) {
    const valor = this.getValue(id);
    return String(valor).length <= maxsize;
  }

  format(id, exprreg) {
    const valor = this.getValue(id);
    const expresionregular = new RegExp(exprreg);
    return expresionregular.test(String(valor));
  }

  value(id, valoresPermitidos) {
    const valor = this.getValue(id);
    return valoresPermitidos.includes(valor);
  }

  value_or_empty(id, valoresPermitidos) {
    const valor = this.getValue(id);

    if (valor === "") {
      return true;
    }

    return valoresPermitidos.includes(valor);
  }

  date_format(id) {
    const valor = this.getValue(id);

    if (!/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(valor)) {
      return false;
    }

    const partes = valor.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const anio = parseInt(partes[2], 10);

    const fecha = new Date(anio, mes, dia);

    return (
      fecha.getFullYear() === anio &&
      fecha.getMonth() === mes &&
      fecha.getDate() === dia
    );
  }

  date_format_or_empty(id) {
    const valor = this.getValue(id);

    if (valor === "") {
      return true;
    }

    return this.date_format(id);
  }

  not_exist_file(id) {
    const fichero = this.getFile(id);
    return fichero !== null;
  }

  fichero(id) {
    return this.not_exist_file(id);
  }

  max_size_file(id, maxsize) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return false;
    }

    return fichero.size <= maxsize;
  }

  type_file(id, array_tipos) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return false;
    }

    return array_tipos.includes(fichero.type);
  }

  format_name_file(id, exprreg) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return false;
    }

    const expresionregular = new RegExp(exprreg);
    return expresionregular.test(fichero.name);
  }

  max_size_file_optional(id, maxsize) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return true;
    }

    return fichero.size <= maxsize;
  }

  type_file_optional(id, array_tipos) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return true;
    }

    return array_tipos.includes(fichero.type);
  }

  format_name_file_optional(id, exprreg) {
    const fichero = this.getFile(id);

    if (!fichero) {
      return true;
    }

    const expresionregular = new RegExp(exprreg);
    return expresionregular.test(fichero.name);
  }

  date_greater_than(idFechaFin, idFechaInicio) {
    if (!this.date_format(idFechaFin) || !this.date_format(idFechaInicio)) {
      return false;
    }

    const valorInicio = this.getValue(idFechaInicio);
    const valorFin = this.getValue(idFechaFin);

    const partesInicio = valorInicio.split("/");
    const partesFin = valorFin.split("/");

    const fechaInicio = new Date(
      parseInt(partesInicio[2], 10),
      parseInt(partesInicio[1], 10) - 1,
      parseInt(partesInicio[0], 10)
    );

    const fechaFin = new Date(
      parseInt(partesFin[2], 10),
      parseInt(partesFin[1], 10) - 1,
      parseInt(partesFin[0], 10)
    );

    return fechaFin > fechaInicio;
  }
}