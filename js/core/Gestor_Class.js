class Gestor {
  constructor(nombreEntidad) { this.nombreEntidad = nombreEntidad; }

  iniciar() {
    const errores = this.comprobarVariablesEntidad();
    if (errores.length > 0) { mostrarModal(errores.join(' | ')); return; }
    this.mostrarPanelEntidad();
  }

  comprobarVariablesEntidad() {
    const n = this.nombreEntidad;
    const variables = [
      `${n}_estructura`,
      `${n}_def_tests`,
      `${n}_pruebas`,
      `${n}_TestSubmit`
    ];
    return variables.filter(v => typeof window[v] === 'undefined').map(v => `No existe la variable ${v}`);
  }

  mostrarPanelEntidad() {
    const zona = document.getElementById('zona_trabajo');
    zona.innerHTML = `
      <section class="panel-entidad">
        <h2>Entidad: ${this.nombreEntidad}</h2>
        <p>Variables de estructura, tests y submit localizadas correctamente.</p>
        <div class="acciones">
          <button class="boton-test" onclick="new TestForm('${this.nombreEntidad}').ejecutar()">Test de atributos</button>
          <button class="boton-submit" onclick="new TestSubmit('${this.nombreEntidad}').ejecutar()">Test de formulario</button>
        </div>
      </section>`;
  }
}
