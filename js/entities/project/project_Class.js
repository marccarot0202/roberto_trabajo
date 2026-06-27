class project {

  constructor(esTest) {
    this.esTest = esTest;
  }

  end_date_project_personalized_validation() {
    const start = document.getElementById("start_date_project");
    const end = document.getElementById("end_date_project");

    if (!start || !end) {
      return true;
    }

    const startValue = start.value;
    const endValue = end.value;

    if (startValue === "" || endValue === "") {
      return true;
    }

    if (!this.esFechaValida(startValue) || !this.esFechaValida(endValue)) {
      return true;
    }

    const fechaInicio = this.convertirFecha(startValue);
    const fechaFin = this.convertirFecha(endValue);

    if (fechaFin <= fechaInicio) {
      return "end_date_project_date_greater_than_KO";
    }

    return true;
  }

  esFechaValida(valor) {
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

  convertirFecha(valor) {
    const partes = valor.split("/");

    return new Date(
      parseInt(partes[2], 10),
      parseInt(partes[1], 10) - 1,
      parseInt(partes[0], 10)
    );
  }
}


window.project = project;