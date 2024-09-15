document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();


    //Informações
    let tamParTrancado = 25;
    let portasPachPanel = 24;

    // Coletando os dados de entrada
    let pontosTelecomPavimento = document.getElementById('ptsTelecomPorPavimento').value;
    let PtsVoIPPavimento = document.getElementById('ptsVoIPPorPavimento').value;
    let PtsCameraPavimento = document.getElementById('ptsCameraPorPavimento').value;


    let quantidadeBackbone = document.getElementById('quantidadeBackbone').value;
    let paresFibra = document.getElementById('paresFibraDisponiveis').value;
    let distanciaSEQ = document.getElementById('distanciaSEQs').value;
    let numPavimentos = document.getElementById('numPavimentos').value;
    let peDireito = document.getElementById('peDireito').value;


    //CABO UTP
    //Cálculo dos pontos de rede
    if (numPavimentos == 0) {
        numPavimentos = 1;
    }
    let pontosTelecomTotal = pontosTelecomPavimento * numPavimentos;
    let pontosRede = pontosTelecomTotal * 2;

    //Calculo cabo UTP par trançado
    let caixasCaboUtp = Math.ceil((pontosRede * tamParTrancado) / 305);

    //Tomadas e espelhos
    let tomadaRj45Femea = pontosRede;
    let espelhos4x4 = pontosTelecomTotal;

    //Patch panel
    let pachPanel = Math.ceil(pontosRede / portasPachPanel);

    //Patch Cord
    let patchCordAzul = pontosRede;

    //Outros
    let organizadoresFrontais = pachPanel * 2;

    //Pach cables
    let patchCableAzul = pontosRede;
    let pachCableAmarelo = Math.ceil(pontosRede * 0.5);

    
    //Tamanho Rack
    let tamanhoRack = pachPanel + organizadoresFrontais;
    let quantidadeRack = Math.ceil(tamanhoRack/36)
    let bandejas = quantidadeRack * 2;
    let exaustor = quantidadeRack;

    tamanhoRack = (tamanhoRack + bandejas + exaustor) * 1.5;
    quantidadeRack = Math.ceil(tamanhoRack/36)


    //BACKBONE OPTICO
    if (PtsVoIPPavimento !=0)paresFibra++;
    if(PtsCameraPavimento)paresFibra++;

    //DIO
    let qntDio = Math.ceil(numPavimentos/2);
    let caixasEmenda = qntDio * 2;


    //Chassi DIO com 24 portas - 1U - 19"
    let ChassiDIO = Math.ceil(paresFibra / 24); // Um chassi para cada 24 portas


    //Acoplador óptico
    let acopladorSM = Math.ceil(paresFibra / 8); // Um acoplador para cada 8 fibras


    //Terminador óptico para 8 fibras
    let terminadorOptico;
    if(paresFibra<=8)terminadorOptico = 1
    else terminadorOptico = Math.ceil(paresFibra/8);

    //Pig tail 50 x 125µm - Conector LC
    let pigTailMMSimples = paresFibra * numPavimentos;

    //Cordão óptico 50 x 125µm - 3m - duplo -conector LC
    let cordaoOptico = paresFibra * 2; // Dois cordões por par de fibra

    //outros
    let capacidadeBandeja = 12; // Capacidade da bandeja de emenda
    let bandejaEmendaFibraDio = Math.ceil(paresFibra / capacidadeBandeja);


    //MISCELANEA
    //Etiquetas de identificação
    let etiquetaPortaPachPanel = pachPanel * 24;
    let etiquetaPortaPachCable = pontosRede * 2;
    let etiquetaTomadaEspelho = tomadaRj45Femea + espelhos4x4;
    let etiquetasCabosUTP = pontosRede * 2;
    let etiquetaCordoesPigtail = pigTailMMSimples; 
    let etiquetaPortaDIO = qntDio * 24; // Supondo que cada DIO tenha 24 portas

    //abraçadeira
    let abracadeiraPlastica = pontosRede;
    let abracadeiraVelcro = pontosRede;


    //reguas
    let regua6Tomadas = Math.ceil(pontosRede / 6); // Uma régua para cada 6 pontos de rede
    let reguaFechamento = quantidadeRack;

    //outros
    let porcaGaiola = Math.ceil(quantidadeRack / 10);


    // Gerando o resultado para exibir na página como tabela
    const resultTable = `
        <h2>Lista de Materiais:</h2>
        <caption>Materiais de Cabeamento de Rede</caption>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cabo UTP par trançado categoria 6 (MH)</td>
                    <td>${caixasCaboUtp} caixas</td>
                </tr>
                <tr>
                    <td>Tomada RJ45 femêa categoria 6</td>
                    <td>${tomadaRj45Femea} unidades</td>
                </tr>
                <tr>
                    <td>Espelhos 4x4 - 2 furações/entradas</td>
                    <td>${espelhos4x4} unidades</td>
                </tr>
                <tr>
                    <td>Patch Cord cat.6, azul, 3m</td>
                    <td>${patchCordAzul} unidades</td>
                </tr>

                <tr>
                    <td>Patch Panel cat.6, 24 portas</td>
                    <td>${pachPanel} unidades</td>
                </tr>
                <tr>
                    <td>Organizador de cabo frontal - 1U</td>
                    <td>${organizadoresFrontais} unidades</td>
                </tr>
                <tr> 
                    <td>Bandeja fixa</td>
                    <td>${bandejas} unidades</td>
                </tr>
                <tr>
                    <td>Patch Cable cat.6, azul - 2,5m</td>
                    <td>${patchCableAzul} unidades</td>
                </tr>
                <tr>
                    <td>Patch Cable cat.6, amarelo - 2,5m</td>
                    <td>${pachCableAmarelo} unidades</td>
                </tr>
                <tr>
                    <td>Rack fechado - tamanho ${tamanhoRack}</td>
                    <td>${quantidadeRack} unidades</td>
                </tr>
                <tr>
                    <td>Exaustor</td>
                    <td>${exaustor} unidades</td>
                </tr>


                <tr>
                    <th colspan="3">Backbone optico</th>
                </tr>
                <tr>
                    <td>Cabo de Fibra Óptica Tight Buffer (FOMMIG) 50 x 125µm - com 8 fibras</td>
                    <td>${paresFibra} metros</td>
                </tr>
                <tr>
                    <td>Chassi DIO com 24 portas - 1U - 19"</td>
                    <td>${ChassiDIO} unidades</td>
                </tr>
                <tr>
                    <td>Acessórios: caixa de emenda ou bandeja de emenda (12 fibras), Protetores de emenda, abraçadeiras plásticas.</td>
                    <td>${caixasEmenda} unidades</td>
                </tr>
                <tr>
                    <td>Acoplador óptico 9 x 125µm - SM - LC - duplo  </td>
                    <td>${acopladorSM} unidades</td>
                </tr>
                <tr>
                    <td>Bandeja para emenda de fibra no DIO - (comporta até 12 emendas)</td>
                    <td>${bandejaEmendaFibraDio} unidades</td>
                </tr>
                <tr>
                    <td>Terminador Óptico para 8 fibras</td>
                    <td>${terminadorOptico} unidades</td>
                </tr>
                <tr>
                    <td>Pig tail 50 x 125µm - MM - 1,5m - simples - conector LC</td>
                    <td>${pigTailMMSimples} unidades</td>
                </tr>
                <tr>
                    <td>Cordão Óptico 9 x 125µm - 3m - duplo - conector LC</td>
                    <td>${cordaoOptico} unidades</td>
                </tr>

                
                <tr>
                    <th colspan="3">Miscelânea</th>
                </tr>
                <tr>
                    <td>Etiquetas de identficação da porta do Patch Panel</td>
                    <td>${etiquetaPortaPachPanel} unidades</td>
                </tr>
                <tr>
                    <td>Etiquetas de identificação Patch Cable</td>
                    <td>${etiquetaPortaPachCable} unidades</td>
                </tr>
                <tr>
                    <td>Etiquetas de identficação do Patch Panel</td>
                    <td>${pachPanel} unidades</td>
                </tr>
                <tr>
                    <td>Etiquetas de identificação Tomadas e Espelhos</td>
                    <td>${etiquetaTomadaEspelho} unidades</td>
                </tr>
                <tr>
                    <td>Etiquetas de identificação Cabos UTP - MH</td>
                    <td>${etiquetasCabosUTP} unidades</td>
                </tr>
                <tr>
                    <td>Etiqueta para os cordões ópticos e pigtail´s (TO)</td>
                    <td>${etiquetaCordoesPigtail} unidades</td>
                </tr>
                <tr>
                    <td>Etiqueta para Portas do DIO</td>
                    <td>${etiquetaPortaDIO} unidades</td>
                </tr>
                <tr>
                    <td>Abraçadeiras plásticas, pacote 100 unidades</td>
                    <td>${abracadeiraPlastica} unidades</td>
                </tr>
                <tr>
                    <td>Abraçadeiras de velcro, rolo 3 m</td>
                    <td>${abracadeiraVelcro} unidades</td>
                </tr>
                <tr>
                    <td>Régua com 6 tomadas - filtro de linha</td>
                    <td>${regua6Tomadas} unidades</td>
                </tr>
                <tr>
                    <td>Régua de fechamento - 1U</td>
                    <td>${reguaFechamento} unidades</td>
                </tr>
                <tr>
                    <td>Porca Gaiola - pacote com 10 unidades</td>
                    <td>${porcaGaiola} unidades</td>
                </tr>
            </tbody>

        </table>
    `;

    document.getElementById('result').innerHTML = resultTable;

});