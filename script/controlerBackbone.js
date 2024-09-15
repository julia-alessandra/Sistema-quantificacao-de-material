
document.addEventListener("DOMContentLoaded", function () {
    // Elementos para controle do Backbone Primário
    const radioPrimarioSim = document.getElementById("possui-primario-sim");
    const radioPrimarioNao = document.getElementById("possui-primario-nao");
    const containerBackbonePrimario = document.getElementById("container-backbone-primario");

    // Função para mostrar/ocultar o container de Backbone Primário
    function toggleBackbonePrimario() {
        if (radioPrimarioSim.checked) {
            containerBackbonePrimario.classList.remove("hidden");
        } else {
            containerBackbonePrimario.classList.add("hidden");
        }
    }



    // Adicionando eventos de mudança (change) aos rádios de Backbone Primário
    radioPrimarioSim.addEventListener("change", toggleBackbonePrimario);
    radioPrimarioNao.addEventListener("change", toggleBackbonePrimario);


    // Inicializar a visibilidade com base no estado atual dos rádios
    toggleBackbonePrimario();
});

