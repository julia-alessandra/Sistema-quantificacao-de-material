
document.addEventListener("DOMContentLoaded", function () {
    // Elementos para controle do Backbone Primário
    const radioPrimarioSim = document.getElementById("possui-primario-sim");
    const radioPrimarioNao = document.getElementById("possui-primario-nao");
    const containerBackbonePrimario = document.getElementById("container-backbone-primario");

    // Elementos para controle do Backbone Secundário
    const radioSecundarioSim = document.getElementById("possui-secundario-sim");
    const radioSecundarioNao = document.getElementById("possui-secundario-nao");
    const containerBackboneSecundario = document.getElementById("container-backbone-secundario");

    // Função para mostrar/ocultar o container de Backbone Primário
    function toggleBackbonePrimario() {
        if (radioPrimarioSim.checked) {
            containerBackbonePrimario.classList.remove("hidden");
        } else {
            containerBackbonePrimario.classList.add("hidden");
        }
    }

    // Função para mostrar/ocultar o container de Backbone Secundário
    function toggleBackboneSecundario() {
        if (radioSecundarioSim.checked) {
            containerBackboneSecundario.classList.remove("hidden");
        } else {
            containerBackboneSecundario.classList.add("hidden");
        }
    }

    // Adicionando eventos de mudança (change) aos rádios de Backbone Primário
    radioPrimarioSim.addEventListener("change", toggleBackbonePrimario);
    radioPrimarioNao.addEventListener("change", toggleBackbonePrimario);

    // Adicionando eventos de mudança (change) aos rádios de Backbone Secundário
    radioSecundarioSim.addEventListener("change", toggleBackboneSecundario);
    radioSecundarioNao.addEventListener("change", toggleBackboneSecundario);

    // Inicializar a visibilidade com base no estado atual dos rádios
    toggleBackbonePrimario();
    toggleBackboneSecundario();
});

