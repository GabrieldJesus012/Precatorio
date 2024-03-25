//DADOS DO CÁLCULO

document.addEventListener('DOMContentLoaded', function() {
    const selectTipoCalculo = document.getElementById('tipoCalculo');

    selectTipoCalculo.addEventListener('change', function() {
        if (selectTipoCalculo.value === "") {
            return;
        }
    });

    selectTipoCalculo.value = "";
});

function mostrarOcultar() {
    var select = document.getElementById("tipoCalculo");
    var option = select.options[select.selectedIndex].text;
    var tr = document.getElementById("ocultnorm");

    if (option === "Normal" || option === "Acordo") {
        tr.style.display = "table-row";
    } else {
        tr.style.display = "none";
    }
}

function mostrarOcultar1() {
    var select = document.getElementById("tipoCalculo");
    var option = select.options[select.selectedIndex].text;
    var tr = document.getElementById("ocultnorm1");

    if (option === "Normal" || option === "Acordo") {
        tr.style.display = "table-row";
    } else {
        tr.style.display = "none";
    }
}

function mostrarOcultar2() {
    var select = document.getElementById("tipoCalculo");
    var option = select.options[select.selectedIndex].text;
    var tr = document.getElementById("ocultpref");

    if (option === "Preferencial") {
        tr.style.display = "table-row";
    } else {
        tr.style.display = "none";
    }
}

function formatarParaReal(valor) {
    valor = valor.replace(/[^\d.,]/g, '');

    if (valor.trim() === "") return "R$ 0,00"; 

    valor = valor.replace(",", ".");

    valor = parseFloat(valor).toFixed(2);

    var partes = valor.split('.');
    var inteiro = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var decimal = partes[1];

    valor = inteiro + "," + decimal;

    return "R$ " + valor;
}


function formatarCampoInput() {
    var campoInput = document.getElementById("pag");
    var prefInput = document.getElementById("pref");
    campoInput.value = formatarParaReal(campoInput.value);
    prefInput.value = formatarParaReal(prefInput.value);
}


//BASE DE CÁLCULO

// Função para formatar o valor para moeda brasileira
function formatCurrency(value) {
    return parseFloat(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function handleInput(event) {
    const input = event.target;
    let value = input.value;
    // Substitui ponto por vírgula apenas se não houver outra vírgula presente
    if (value.indexOf(',') === -1 && value.indexOf('.') !== -1) {
        value = value.replace('.', ',');
    }
    // Remove caracteres não numéricos
    value = value.replace(/[^\d,]/g, '');
    // Atualiza o valor no input
    input.value = value;
}

function updateTotal() {
    const principalValue = parseFloat(document.getElementById('valprin').value.replace(',', '.')) || 0;
    const jurosValue = parseFloat(document.getElementById('valjur').value.replace(',', '.')) || 0;

    const totalValue = principalValue + jurosValue;
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = formatCurrency(totalValue.toFixed(2));
    
    const totalTd = document.getElementById('tot');
    totalTd.textContent = formatCurrency(totalValue.toFixed(2));
}

document.addEventListener('DOMContentLoaded', function() {
    const inputPrincipal = document.getElementById('valprin');
    const inputJuros = document.getElementById('valjur');

    // Event listeners para input de principal e juros
    inputPrincipal.addEventListener('input', function(event) {
        handleInput(event);
        updateTotal();
    });

    inputPrincipal.addEventListener('blur', updateTotal);

    inputJuros.addEventListener('input', function(event) {
        handleInput(event);
        updateTotal();
    });

    inputJuros.addEventListener('blur', updateTotal);

    
    updateTotal();
    toggleRowsVisibility(false);
});

//section1 config Atualização Monetária

document.addEventListener('DOMContentLoaded', function() {
    const button2 = document.getElementById('calcular-button'); 
    const section = document.getElementById('section'); 
    const section2 = document.getElementById('section2'); 
    const section3 = document.getElementById('section3'); 
    const section4 = document.getElementById('section4'); 

    section2.style.display = 'none'; 
    section3.style.display = 'none'; 
    section4.style.display = 'none'; 

    button2.addEventListener('click', function() {
        const sectionDisplayStyle = window.getComputedStyle(section).getPropertyValue('display');
        if (sectionDisplayStyle === 'none') {
            section.style.display = 'block';
            section2.style.display = 'block'; 
            section3.style.display = 'block'; 
            section4.style.display = 'block'; 
        } else {
            section.style.display = 'none';
            section2.style.display = 'none'; 
            section3.style.display = 'none'; 
            section4.style.display = 'none'; 
        }
    });
});



function atualizarValor() {
    var valorInserido = document.getElementById("valprin").value;
    document.getElementById("valorprincinformado").innerText = valorInserido;
    calcularIndice();
}

function atualizarValor2() {
    var valorInserido2 = document.getElementById("valjur").value;
    document.getElementById("valorjuroinformado").innerText = valorInserido2;
    calcularIndice();
}

function calcularIndice() {
    var mesSelecionado = document.getElementById("mes").value;
    var anoSelecionado = document.getElementById("ano").value;
    var tabelaIndices = {
        "janeiro, 2005":	1.8826605,
        "fevereiro, 2005":	1.8699449,
        "março, 2005":	1.8562089,
        "abril, 2005":	1.8497348,
        "maio, 2005":	1.8361474,
        "junho, 2005":	1.8210328,
        "julho, 2005":	1.8188502,
        "agosto, 2005":	1.8168516,
        "setembro, 2005":	1.8117786,
        "outubro, 2005":	1.8088844,
        "novembro, 2005":	1.7988111,
        "dezembro, 2005":	1.7848890,
        "janeiro, 2006":	1.7781321,
        "fevereiro, 2006":	1.7691096,
        "março, 2006":	1.7599578,
        "abril, 2006":	1.7534700,
        "maio, 2006":	1.7504941,
        "junho, 2006":	1.7457805,
        "julho, 2006":	1.7484031,
        "agosto, 2006":	1.7487529,
        "setembro, 2006":	1.7454366,
        "outubro, 2006":	1.7445643,
        "novembro, 2006":	1.7395197,
        "dezembro, 2006":	1.7331072,
        "janeiro, 2007":	1.7270625,
        "fevereiro, 2007":	1.7181282,
        "março, 2007":	1.7102610,
        "abril, 2007":	1.7032775,
        "maio, 2007":	1.6995386,
        "junho, 2007":	1.6951312,
        "julho, 2007":	1.6902296,
        "agosto, 2007":	1.6861827,
        "setembro, 2007":	1.6791304,
        "outubro, 2007":	1.6742750,
        "novembro, 2007":	1.6702663,
        "dezembro, 2007":	1.6664335,
        "janeiro, 2008":	1.6548496,
        "fevereiro, 2008":	1.6433462,
        "março, 2008":	1.6328956,
        "abril, 2008":	1.6291486,
        "maio, 2008":	1.6195930,
        "junho, 2008":	1.6105738,
        "julho, 2008":	1.5962079,
        "agosto, 2008":	1.5862148,
        "setembro, 2008":	1.5806824,
        "outubro, 2008":	1.5765832,
        "novembro, 2008":	1.5718676,
        "dezembro, 2008":	1.5642031,
        "janeiro, 2009":	1.5596800,
        "fevereiro, 2009":	1.5534661,
        "março, 2009":	1.5437406,
        "abril, 2009":	1.5420443,
        "maio, 2009":	1.5365129,
        "junho, 2009":	1.5275006,
        "julho, 2009":	1.5217181,
        "agosto, 2009":	1.5183776,
        "setembro, 2009":	1.5148934,
        "outubro, 2009":	1.5120205,
        "novembro, 2009":	1.5093038,
        "dezembro, 2009":	1.5026920,
        "janeiro, 2010":	1.5004707,
        "fevereiro, 2010":	1.5004707,
        "março, 2010":	1.5004707,
        "abril, 2010":	1.4992832,
        "maio, 2010":	1.4992832,
        "junho, 2010":	1.4985190,
        "julho, 2010":	1.4976369,
        "agosto, 2010":	1.4959151,
        "setembro, 2010":	1.4945565,
        "outubro, 2010":	1.4935081,
        "novembro, 2010":	1.4928035,
        "dezembro, 2010":	1.4923021,
        "janeiro, 2011":	1.4902069,
        "fevereiro, 2011":	1.4891421,
        "março, 2011":	1.4883622,
        "abril, 2011":	1.4865605,
        "maio, 2011":	1.4860122,
        "junho, 2011": 1.4836828,
        "julho, 2011":	1.4820318,
        "agosto, 2011":	1.4802126,
        "setembro, 2011":	1.4771461,
        "outubro, 2011":	1.4756660,
        "novembro, 2011":	1.4747516,
        "dezembro, 2011":	1.4738010,
        "janeiro, 2012": 1.4724214,
        "fevereiro, 2012":	1.4711503,
        "março, 2012":	1.4711503,
        "abril, 2012": 1.4695808,
        "maio, 2012":	1.4692473,
        "junho, 2012":	1.4685600,
        "julho, 2012": 1.4685600,
        "agosto, 2012":	1.4683485,
        "setembro, 2012":	1.4681679,
        "outubro, 2012":	1.4681679,
        "novembro, 2012":	1.4681679,
        "dezembro, 2012":	1.4681679,
        "janeiro, 2013":	1.4681679,
        "fevereiro, 2013":	1.4681679,
        "março, 2013":	1.4681679,
        "abril, 2013":	1.4681679,
        "maio, 2013":	1.4681679,
        "junho, 2013":	1.4681679,
        "julho, 2013":	1.4681679,
        "agosto, 2013":	1.4678612,
        "setembro, 2013":	1.4678612,
        "outubro, 2013":	1.4677452,
        "novembro, 2013":	1.4663961,
        "dezembro, 2013":	1.4660926,
        "janeiro, 2014":	1.4653688,
        "fevereiro, 2014":	1.4637206,
        "março, 2014":	1.4629350,
        "abril, 2014":	1.4625460,
        "maio, 2014":	1.4618750,
        "junho, 2014":	1.4609925,
        "julho, 2014":	1.4603135,
        "agosto, 2014":	1.4587759,
        "setembro, 2014":	1.4578983,
        "outubro, 2014":	1.4566266,
        "novembro, 2014":	1.4551162,
        "dezembro, 2014":	1.4544138,
        "janeiro, 2015":	1.4528839,
        "fevereiro, 2015":	1.4516094,
        "março, 2015":	1.4513655,
        "abril, 2015":	1.4463963,
        "maio, 2015":	1.4310837,
        "junho, 2015":	1.4225484,
        "julho, 2015":	1.4086032,
        "agosto, 2015":	1.4003412,
        "setembro, 2015":	1.3943455,
        "outubro, 2015":	1.3889287,
        "novembro, 2015":	1.3798219,
        "dezembro, 2015":	1.3681922,
        "janeiro, 2016":	1.3522358,
        "fevereiro, 2016":	1.3399087,
        "março, 2016":	1.3211484,
        "abril, 2016":	1.3154918,
        "maio, 2016":	1.3088168,
        "junho, 2016":	1.2976569,
        "julho, 2016":	1.2924870,
        "agosto, 2016":	1.2855451,
        "setembro, 2016":	1.2797860,
        "outubro, 2016":	1.2768493,
        "novembro, 2016":	1.2744279,
        "dezembro, 2016":	1.2711229,
        "janeiro, 2017":	1.2687124,
        "fevereiro, 2017":	1.2647915,
        "março, 2017":	1.2579983,
        "abril, 2017":	1.2561142,
        "maio, 2017": 1.2534819,
        "junho, 2017":	1.2504807,
        "julho, 2017":	1.2484831,
        "agosto, 2017":	1.2507344,
        "setembro, 2017":	1.2463721,
        "outubro, 2017":	1.2450026,
        "novembro, 2017":	1.2407840,
        "dezembro, 2017":	1.2368261,
        "janeiro, 2018":	1.2325123,
        "fevereiro, 2018":	1.2277242,
        "março, 2018":	1.2230765,
        "abril, 2018":	1.2218547,
        "maio, 2018":	1.2192942,
        "junho, 2018":	1.2175895,
        "julho, 2018":	1.2042227,
        "agosto, 2018":	1.1965646,
        "setembro, 2018":	1.1950111,
        "outubro, 2018":	1.1939366,
        "novembro, 2018":	1.1870517,
        "dezembro, 2018":	1.1848006,
        "janeiro, 2019":	1.1866993,
        "fevereiro, 2019":	1.1831498,
        "março, 2019": 1.1791408,
        "abril, 2019":	1.1728076,
        "maio, 2019":	1.1644237,
        "junho, 2019":	1.1603625,
        "julho, 2019": 1.1596667,
        "agosto, 2019":	1.1586239,
        "setembro, 2019":	1.1576978,
        "outubro, 2019":	1.1566568,
        "novembro, 2019":	1.1556167,
        "dezembro, 2019":	1.1540011,
        "janeiro, 2020": 1.1420100,
        "fevereiro, 2020":	1.1339589,
        "março, 2020":	1.1314697,
        "abril, 2020":	1.1312434,
        "maio, 2020":	1.1313565,
        "junho, 2020":	1.1380712,
        "julho, 2020":	1.1378436,
        "agosto, 2020":	1.1344403,
        "setembro, 2020":	1.1318371,
        "outubro, 2020":	1.1267666,
        "novembro, 2020":	1.1162736,
        "dezembro, 2020": 1.1073045,
        "janeiro, 2021": 1.0956901,
        "fevereiro, 2021":	1.0872099,
        "março, 2021":	1.0820162,
        "abril, 2021":	1.0720462,
        "maio, 2021":	1.0656523,
        "junho, 2021":	1.0609840,
        "julho, 2021":	1.0522503,
        "agosto, 2021":	1.0447282,
        "setembro, 2021": 1.0355122,
        "outubro, 2021":	1.0238404,
        "novembro, 2021":	1.0117000,
        "dezembro, 2021":	1.0000000,
    };

    var chave = mesSelecionado + ", " + anoSelecionado;
    var valorIndice = tabelaIndices[chave];

    if (valorIndice !== undefined) {
        document.getElementById("indice").textContent = valorIndice.toFixed(7).replace(".", ",");
        document.getElementById("indice2").textContent = valorIndice.toFixed(7).replace(".", ",");

        var valorPrincipal = parseFloat(document.getElementById("valprin").value.replace(",", ".")).toFixed(2);
        var valorJuros = parseFloat(document.getElementById("valjur").value.replace(",", ".")).toFixed(2);

        var multiplicacaoPrincipal = parseFloat(valorIndice.toFixed(7)) * parseFloat(valorPrincipal);
        document.getElementById("multindice").textContent = multiplicacaoPrincipal.toFixed(2).replace(".", ",");

        var multiplicacaoJuros = parseFloat(valorIndice.toFixed(7)) * parseFloat(valorJuros);
        document.getElementById("multindice2").textContent = multiplicacaoJuros.toFixed(2).replace(".", ",");

        var valorJuros = parseFloat(document.getElementById("valjur").value.replace(",", "."));
        document.getElementById("jur").textContent = multiplicacaoJuros.toFixed(2).replace(".", ",");

        var soma = parseFloat(multiplicacaoPrincipal) + parseFloat(multiplicacaoJuros);
        document.getElementById("totatt").textContent = "R$ " + soma.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        calcularMultiplicacao();
        calcularPrev();
    } else {
        document.getElementById("indice").textContent = "";
        document.getElementById("indice2").textContent = "";

        var inputIndicePrincipal = document.createElement("input");
        inputIndicePrincipal.type = "number";
        inputIndicePrincipal.id = "indicePrincipalInput";
        inputIndicePrincipal.placeholder = "Informe o índice";
        inputIndicePrincipal.style.marginTop = "5px";

        inputIndicePrincipal.addEventListener("input", function() {
            var novoValorIndice = parseFloat(this.value.replace(",", "."));
            var valorPrincipal = parseFloat(document.getElementById("valprin").value.replace(",", "."));
            var valorJuros = parseFloat(document.getElementById("valjur").value.replace(",", "."));
    
            var novaMultiplicacaoPrincipal = novoValorIndice * valorPrincipal;
            document.getElementById("multindice").textContent = novaMultiplicacaoPrincipal.toFixed(2).replace(".", ",");

            var valorIndiceJuros = parseFloat(document.getElementById("indiceJurosInput").value.replace(",", "."));
            var novaMultiplicacaoJuros = valorIndiceJuros * valorJuros;
            document.getElementById("multindice2").textContent = novaMultiplicacaoJuros.toFixed(2).replace(".", ",");
    
            var novaSoma = novaMultiplicacaoPrincipal + novaMultiplicacaoJuros;
            document.getElementById("totatt").textContent = "R$ " + novaSoma.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            calcularMultiplicacao();
            calcularPrev();
        });
    
        var elementoIndicePrincipal = document.getElementById("indice");
        elementoIndicePrincipal.appendChild(inputIndicePrincipal);

        var inputIndiceJuros = document.createElement("input");
        inputIndiceJuros.type = "number";
        inputIndiceJuros.id = "indiceJurosInput";
        inputIndiceJuros.placeholder = "Informe o índice";
        inputIndiceJuros.style.marginTop = "5px";
    
        inputIndiceJuros.addEventListener("input", function() {
            var novoValorIndiceJuros = parseFloat(this.value.replace(",", "."));
            var valorPrincipal = parseFloat(document.getElementById("valprin").value.replace(",", "."));
            var valorJuros = parseFloat(document.getElementById("valjur").value.replace(",", "."));
    
            var valorIndicePrincipal = parseFloat(document.getElementById("indicePrincipalInput").value.replace(",", "."));
    
            var novaMultiplicacaoPrincipal = valorIndicePrincipal * valorPrincipal;
            document.getElementById("multindice").textContent = novaMultiplicacaoPrincipal.toFixed(2).replace(".", ",");
    
            var novaMultiplicacaoJuros = novoValorIndiceJuros * valorJuros;
            document.getElementById("multindice2").textContent = novaMultiplicacaoJuros.toFixed(2).replace(".", ",");
    
            var novaSoma = novaMultiplicacaoPrincipal + novaMultiplicacaoJuros;
            document.getElementById("totatt").textContent = "R$ " + novaSoma.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        var elementoJur = document.getElementById("jur");

        elementoJur.textContent = novaMultiplicacaoJuros.toFixed(2).replace(".", ",");

        calcularMultiplicacao();
        calcularPrev();
        });
    
        var elementoIndiceJuros = document.getElementById("indice2");
        elementoIndiceJuros.appendChild(inputIndiceJuros);
    }
}

function calcularJuros() {
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    var plano= document.getElementById("planoO").value;
    const dataSelecionada = `${mes.charAt(0).toUpperCase() + mes.slice(1)}, ${ano}`;

    var dadosJuros = {
        "Outubro, 1964": 0.5000,
        "Novembro, 1964": 0.5000,
        "Dezembro, 1964": 0.5000,
        "Janeiro, 1965": 0.5000,
        "Fevereiro, 1965": 0.5000,
        "Março, 1965": 0.5000,
        "Abril, 1965": 0.5000,
        "Maio, 1965": 0.5000,
        "Junho, 1965": 0.5000,
        "Julho, 1965": 0.5000,
        "Agosto, 1965": 0.5000,
        "Setembro, 1965": 0.5000,
        "Outubro, 1965": 0.5000,
        "Novembro, 1965": 0.5000,
        "Dezembro, 1965": 0.5000,
        "Janeiro, 1966": 0.5000,
        "Fevereiro, 1966": 0.5000,
        "Março, 1966": 0.5000,
        "Abril, 1966": 0.5000,
        "Maio, 1966": 0.5000,
        "Junho, 1966": 0.5000,
        "Julho, 1966": 0.5000,
        "Agosto, 1966": 0.5000,
        "Setembro, 1966": 0.5000,
        "Outubro, 1966": 0.5000,
        "Novembro, 1966": 0.5000,
        "Dezembro, 1966": 0.5000,
        "Janeiro, 1967": 0.5000,
        "Fevereiro, 1967": 0.5000,
        "Março, 1967": 0.5000,
        "Abril, 1967": 0.5000,
        "Maio, 1967": 0.5000,
        "Junho, 1967": 0.5000,
        "Julho, 1967": 0.5000,
        "Agosto, 1967": 0.5000,
        "Setembro, 1967": 0.5000,
        "Outubro, 1967": 0.5000,
        "Novembro, 1967": 0.5000,
        "Dezembro, 1967": 0.5000,
        "Janeiro, 1968": 0.5000,
        "Fevereiro, 1968": 0.5000,
        "Março, 1968": 0.5000,
        "Abril, 1968": 0.5000,
        "Maio, 1968": 0.5000,
        "Junho, 1968": 0.5000,
        "Julho, 1968": 0.5000,
        "Agosto, 1968": 0.5000,
        "Setembro, 1968": 0.5000,
        "Outubro, 1968": 0.5000,
        "Novembro, 1968": 0.5000,
        "Dezembro, 1968": 0.5000,
        "Janeiro, 1969": 0.5000,
        "Fevereiro, 1969": 0.5000,
        "Março, 1969": 0.5000,
        "Abril, 1969": 0.5000,
        "Maio, 1969": 0.5000,
        "Junho, 1969": 0.5000,
        "Julho, 1969": 0.5000,
        "Agosto, 1969": 0.5000,
        "Setembro, 1969": 0.5000,
        "Outubro, 1969": 0.5000,
        "Novembro, 1969": 0.5000,
        "Dezembro, 1969": 0.5000,
        "Janeiro, 1970": 0.5000,
        "Fevereiro, 1970": 0.5000,
        "Março, 1970": 0.5000,
        "Abril, 1970": 0.5000,
        "Maio, 1970": 0.5000,
        "Junho, 1970": 0.5000,
        "Julho, 1970": 0.5000,
        "Agosto, 1970": 0.5000,
        "Setembro, 1970": 0.5000,
        "Outubro, 1970": 0.5000,
        "Novembro, 1970": 0.5000,
        "Dezembro, 1970": 0.5000,
        "Janeiro, 1971": 0.5000,
        "Fevereiro, 1971": 0.5000,
        "Março, 1971": 0.5000,
        "Abril, 1971": 0.5000,
        "Maio, 1971": 0.5000,
        "Junho, 1971": 0.5000,
        "Julho, 1971": 0.5000,
        "Agosto, 1971": 0.5000,
        "Setembro, 1971": 0.5000,
        "Outubro, 1971": 0.5000,
        "Novembro, 1971": 0.5000,
        "Dezembro, 1971": 0.5000,
        "Janeiro, 1972": 0.5000,
        "Fevereiro, 1972": 0.5000,
        "Março, 1972": 0.5000,
        "Abril, 1972": 0.5000,
        "Maio, 1972": 0.5000,
        "Junho, 1972": 0.5000,
        "Julho, 1972": 0.5000,
        "Agosto, 1972": 0.5000,
        "Setembro, 1972": 0.5000,
        "Outubro, 1972": 0.5000,
        "Novembro, 1972": 0.5000,
        "Dezembro, 1972": 0.5000,
        "Janeiro, 1973": 0.5000,
        "Fevereiro, 1973": 0.5000,
        "Março, 1973": 0.5000,
        "Abril, 1973": 0.5000,
        "Maio, 1973": 0.5000,
        "Junho, 1973": 0.5000,
        "Julho, 1973": 0.5000,
        "Agosto, 1973": 0.5000,
        "Setembro, 1973": 0.5000,
        "Outubro, 1973": 0.5000,
        "Novembro, 1973": 0.5000,
        "Dezembro, 1973": 0.5000,
        "Janeiro, 1974": 0.5000,
        "Fevereiro, 1974": 0.5000,
        "Março, 1974": 0.5000,
        "Abril, 1974": 0.5000,
        "Maio, 1974": 0.5000,
        "Junho, 1974": 0.5000,
        "Julho, 1974": 0.5000,
        "Agosto, 1974": 0.5000,
        "Setembro, 1974": 0.5000,
        "Outubro, 1974": 0.5000,
        "Novembro, 1974": 0.5000,
        "Dezembro, 1974": 0.5000,
        "Janeiro, 1975": 0.5000,
        "Fevereiro, 1975": 0.5000,
        "Março, 1975": 0.5000,
        "Abril, 1975": 0.5000,
        "Maio, 1975": 0.5000,
        "Junho, 1975": 0.5000,
        "Julho, 1975": 0.5000,
        "Agosto, 1975": 0.5000,
        "Setembro, 1975": 0.5000,
        "Outubro, 1975": 0.5000,
        "Novembro, 1975": 0.5000,
        "Dezembro, 1975": 0.5000,
        "Janeiro, 1976": 0.5000,
        "Fevereiro, 1976": 0.5000,
        "Março, 1976": 0.5000,
        "Abril, 1976": 0.5000,
        "Maio, 1976": 0.5000,
        "Junho, 1976": 0.5000,
        "Julho, 1976": 0.5000,
        "Agosto, 1976": 0.5000,
        "Setembro, 1976": 0.5000,
        "Outubro, 1976": 0.5000,
        "Novembro, 1976": 0.5000,
        "Dezembro, 1976": 0.5000,
        "Janeiro, 1977": 0.5000,
        "Fevereiro, 1977": 0.5000,
        "Março, 1977": 0.5000,
        "Abril, 1977": 0.5000,
        "Maio, 1977": 0.5000,
        "Junho, 1977": 0.5000,
        "Julho, 1977": 0.5000,
        "Agosto, 1977": 0.5000,
        "Setembro, 1977": 0.5000,
        "Outubro, 1977": 0.5000,
        "Novembro, 1977": 0.5000,
        "Dezembro, 1977": 0.5000,
        "Janeiro, 1978": 0.5000,
        "Fevereiro, 1978": 0.5000,
        "Março, 1978": 0.5000,
        "Abril, 1978": 0.5000,
        "Maio, 1978": 0.5000,
        "Junho, 1978": 0.5000,
        "Julho, 1978": 0.5000,
        "Agosto, 1978": 0.5000,
        "Setembro, 1978": 0.5000,
        "Outubro, 1978": 0.5000,
        "Novembro, 1978": 0.5000,
        "Dezembro, 1978": 0.5000,
        "Janeiro, 1979": 0.5000,
        "Fevereiro, 1979": 0.5000,
        "Março, 1979": 0.5000,
        "Abril, 1979": 0.5000,
        "Maio, 1979": 0.5000,
        "Junho, 1979": 0.5000,
        "Julho, 1979": 0.5000,
        "Agosto, 1979": 0.5000,
        "Setembro, 1979": 0.5000,
        "Outubro, 1979": 0.5000,
        "Novembro, 1979": 0.5000,
        "Dezembro, 1979": 0.5000,
        "Janeiro, 1980": 0.5000,
        "Fevereiro, 1980": 0.5000,
        "Março, 1980": 0.5000,
        "Abril, 1980": 0.5000,
        "Maio, 1980": 0.5000,
        "Junho, 1980": 0.5000,
        "Julho, 1980": 0.5000,
        "Agosto, 1980": 0.5000,
        "Setembro, 1980": 0.5000,
        "Outubro, 1980": 0.5000,
        "Novembro, 1980": 0.5000,
        "Dezembro, 1980": 0.5000,
        "Janeiro, 1981": 0.5000,
        "Fevereiro, 1981": 0.5000,
        "Março, 1981": 0.5000,
        "Abril, 1981": 0.5000,
        "Maio, 1981": 0.5000,
        "Junho, 1981": 0.5000,
        "Julho, 1981": 0.5000,
        "Agosto, 1981": 0.5000,
        "Setembro, 1981": 0.5000,
        "Outubro, 1981": 0.5000,
        "Novembro, 1981": 0.5000,
        "Dezembro, 1981": 0.5000,
        "Janeiro, 1982": 0.5000,
        "Fevereiro, 1982": 0.5000,
        "Março, 1982": 0.5000,
        "Abril, 1982": 0.5000,
        "Maio, 1982": 0.5000,
        "Junho, 1982": 0.5000,
        "Julho, 1982": 0.5000,
        "Agosto, 1982": 0.5000,
        "Setembro, 1982": 0.5000,
        "Outubro, 1982": 0.5000,
        "Novembro, 1982": 0.5000,
        "Dezembro, 1982": 0.5000,
        "Janeiro, 1983": 0.5000,
        "Fevereiro, 1983": 0.5000,
        "Março, 1983": 0.5000,
        "Abril, 1983": 0.5000,
        "Maio, 1983": 0.5000,
        "Junho, 1983": 0.5000,
        "Julho, 1983": 0.5000,
        "Agosto, 1983": 0.5000,
        "Setembro, 1983": 0.5000,
        "Outubro, 1983": 0.5000,
        "Novembro, 1983": 0.5000,
        "Dezembro, 1983": 0.5000,
        "Janeiro, 1984": 0.5000,
        "Fevereiro, 1984": 0.5000,
        "Março, 1984": 0.5000,
        "Abril, 1984": 0.5000,
        "Maio, 1984": 0.5000,
        "Junho, 1984": 0.5000,
        "Julho, 1984": 0.5000,
        "Agosto, 1984": 0.5000,
        "Setembro, 1984": 0.5000,
        "Outubro, 1984": 0.5000,
        "Novembro, 1984": 0.5000,
        "Dezembro, 1984": 0.5000,
        "Janeiro, 1985": 0.5000,
        "Fevereiro, 1985": 0.5000,
        "Março, 1985": 0.5000,
        "Abril, 1985": 0.5000,
        "Maio, 1985": 0.5000,
        "Junho, 1985": 0.5000,
        "Julho, 1985": 0.5000,
        "Agosto, 1985": 0.5000,
        "Setembro, 1985": 0.5000,
        "Outubro, 1985": 0.5000,
        "Novembro, 1985": 0.5000,
        "Dezembro, 1985": 0.5000,
        "Janeiro, 1986": 0.5000,
        "Fevereiro, 1986": 0.5000,
        "Março, 1986": 0.5000,
        "Abril, 1986": 0.5000,
        "Maio, 1986": 0.5000,
        "Junho, 1986": 0.5000,
        "Julho, 1986": 0.5000,
        "Agosto, 1986": 0.5000,
        "Setembro, 1986": 0.5000,
        "Outubro, 1986": 0.5000,
        "Novembro, 1986": 0.5000,
        "Dezembro, 1986": 0.5000,
        "Janeiro, 1987": 0.5000,
        "Fevereiro, 1987": 0.5000,
        "Março, 1987": 0.5000,
        "Abril, 1987": 0.5000,
        "Maio, 1987": 0.5000,
        "Junho, 1987": 0.5000,
        "Julho, 1987": 0.5000,
        "Agosto, 1987": 0.5000,
        "Setembro, 1987": 0.5000,
        "Outubro, 1987": 0.5000,
        "Novembro, 1987": 0.5000,
        "Dezembro, 1987": 0.5000,
        "Janeiro, 1988": 0.5000,
        "Fevereiro, 1988": 0.5000,
        "Março, 1988": 0.5000,
        "Abril, 1988": 0.5000,
        "Maio, 1988": 0.5000,
        "Junho, 1988": 0.5000,
        "Julho, 1988": 0.5000,
        "Agosto, 1988": 0.5000,
        "Setembro, 1988": 0.5000,
        "Outubro, 1988": 0.5000,
        "Novembro, 1988": 0.5000,
        "Dezembro, 1988": 0.5000,
        "Janeiro, 1989": 0.5000,
        "Fevereiro, 1989": 0.5000,
        "Março, 1989": 0.5000,
        "Abril, 1989": 0.5000,
        "Maio, 1989": 0.5000,
        "Junho, 1989": 0.5000,
        "Julho, 1989": 0.5000,
        "Agosto, 1989": 0.5000,
        "Setembro, 1989": 0.5000,
        "Outubro, 1989": 0.5000,
        "Novembro, 1989": 0.5000,
        "Dezembro, 1989": 0.5000,
        "Janeiro, 1990": 0.5000,
        "Fevereiro, 1990": 0.5000,
        "Março, 1990": 0.5000,
        "Abril, 1990": 0.5000,
        "Maio, 1990": 0.5000,
        "Junho, 1990": 0.5000,
        "Julho, 1990": 0.5000,
        "Agosto, 1990": 0.5000,
        "Setembro, 1990": 0.5000,
        "Outubro, 1990": 0.5000,
        "Novembro, 1990": 0.5000,
        "Dezembro, 1990": 0.5000,
        "Janeiro, 1991": 0.5000,
        "Fevereiro, 1991": 0.5000,
        "Março, 1991": 0.5000,
        "Abril, 1991": 0.5000,
        "Maio, 1991": 0.5000,
        "Junho, 1991": 0.5000,
        "Julho, 1991": 0.5000,
        "Agosto, 1991": 0.5000,
        "Setembro, 1991": 0.5000,
        "Outubro, 1991": 0.5000,
        "Novembro, 1991": 0.5000,
        "Dezembro, 1991": 0.5000,
        "Janeiro, 1992": 0.5000,
        "Fevereiro, 1992": 0.5000,
        "Março, 1992": 0.5000,
        "Abril, 1992": 0.5000,
        "Maio, 1992": 0.5000,
        "Junho, 1992": 0.5000,
        "Julho, 1992": 0.5000,
        "Agosto, 1992": 0.5000,
        "Setembro, 1992": 0.5000,
        "Outubro, 1992": 0.5000,
        "Novembro, 1992": 0.5000,
        "Dezembro, 1992": 0.5000,
        "Janeiro, 1993": 0.5000,
        "Fevereiro, 1993": 0.5000,
        "Março, 1993": 0.5000,
        "Abril, 1993": 0.5000,
        "Maio, 1993": 0.5000,
        "Junho, 1993": 0.5000,
        "Julho, 1993": 0.5000,
        "Agosto, 1993": 0.5000,
        "Setembro, 1993": 0.5000,
        "Outubro, 1993": 0.5000,
        "Novembro, 1993": 0.5000,
        "Dezembro, 1993": 0.5000,
        "Janeiro, 1994": 0.5000,
        "Fevereiro, 1994": 0.5000,
        "Março, 1994": 0.5000,
        "Abril, 1994": 0.5000,
        "Maio, 1994": 0.5000,
        "Junho, 1994": 0.5000,
        "Julho, 1994": 0.5000,
        "Agosto, 1994": 0.5000,
        "Setembro, 1994": 0.5000,
        "Outubro, 1994": 0.5000,
        "Novembro, 1994": 0.5000,
        "Dezembro, 1994": 0.5000,
        "Janeiro, 1995": 0.5000,
        "Fevereiro, 1995": 0.5000,
        "Março, 1995": 0.5000,
        "Abril, 1995": 0.5000,
        "Maio, 1995": 0.5000,
        "Junho, 1995": 0.5000,
        "Julho, 1995": 0.5000,
        "Agosto, 1995": 0.5000,
        "Setembro, 1995": 0.5000,
        "Outubro, 1995": 0.5000,
        "Novembro, 1995": 0.5000,
        "Dezembro, 1995": 0.5000,
        "Janeiro, 1996": 0.5000,
        "Fevereiro, 1996": 0.5000,
        "Março, 1996": 0.5000,
        "Abril, 1996": 0.5000,
        "Maio, 1996": 0.5000,
        "Junho, 1996": 0.5000,
        "Julho, 1996": 0.5000,
        "Agosto, 1996": 0.5000,
        "Setembro, 1996": 0.5000,
        "Outubro, 1996": 0.5000,
        "Novembro, 1996": 0.5000,
        "Dezembro, 1996": 0.5000,
        "Janeiro, 1997": 0.5000,
        "Fevereiro, 1997": 0.5000,
        "Março, 1997": 0.5000,
        "Abril, 1997": 0.5000,
        "Maio, 1997": 0.5000,
        "Junho, 1997": 0.5000,
        "Julho, 1997": 0.5000,
        "Agosto, 1997": 0.5000,
        "Setembro, 1997": 0.5000,
        "Outubro, 1997": 0.5000,
        "Novembro, 1997": 0.5000,
        "Dezembro, 1997": 0.5000,
        "Janeiro, 1998": 0.5000,
        "Fevereiro, 1998": 0.5000,
        "Março, 1998": 0.5000,
        "Abril, 1998": 0.5000,
        "Maio, 1998": 0.5000,
        "Junho, 1998": 0.5000,
        "Julho, 1998": 0.5000,
        "Agosto, 1998": 0.5000,
        "Setembro, 1998": 0.5000,
        "Outubro, 1998": 0.5000,
        "Novembro, 1998": 0.5000,
        "Dezembro, 1998": 0.5000,
        "Janeiro, 1999": 0.5000,
        "Fevereiro, 1999": 0.5000,
        "Março, 1999": 0.5000,
        "Abril, 1999": 0.5000,
        "Maio, 1999": 0.5000,
        "Junho, 1999": 0.5000,
        "Julho, 1999": 0.5000,
        "Agosto, 1999": 0.5000,
        "Setembro, 1999": 0.5000,
        "Outubro, 1999": 0.5000,
        "Novembro, 1999": 0.5000,
        "Dezembro, 1999": 0.5000,
        "Janeiro, 2000": 0.5000,
        "Fevereiro, 2000": 0.5000,
        "Março, 2000": 0.5000,
        "Abril, 2000": 0.5000,
        "Maio, 2000": 0.5000,
        "Junho, 2000": 0.5000,
        "Julho, 2000": 0.5000,
        "Agosto, 2000": 0.5000,
        "Setembro, 2000": 0.5000,
        "Outubro, 2000": 0.5000,
        "Novembro, 2000": 0.5000,
        "Dezembro, 2000": 0.5000,
        "Janeiro, 2001": 0.5000,
        "Fevereiro, 2001": 0.5000,
        "Março, 2001": 0.5000,
        "Abril, 2001": 0.5000,
        "Maio, 2001": 0.5000,
        "Junho, 2001": 0.5000,
        "Julho, 2001": 0.5000,
        "Agosto, 2001": 0.5000,
        "Setembro, 2001": 0.5000,
        "Outubro, 2001": 0.5000,
        "Novembro, 2001": 0.5000,
        "Dezembro, 2001": 0.5000,
        "Janeiro, 2002": 0.5000,
        "Fevereiro, 2002": 0.5000,
        "Março, 2002": 0.5000,
        "Abril, 2002": 0.5000,
        "Maio, 2002": 0.5000,
        "Junho, 2002": 0.5000,
        "Julho, 2002": 0.5000,
        "Agosto, 2002": 0.5000,
        "Setembro, 2002": 0.5000,
        "Outubro, 2002": 0.5000,
        "Novembro, 2002": 0.5000,
        "Dezembro, 2002": 0.5000,
        "Janeiro, 2003": 0.5000,
        "Fevereiro, 2003": 0.5000,
        "Março, 2003": 0.5000,
        "Abril, 2003": 0.5000,
        "Maio, 2003": 0.5000,
        "Junho, 2003": 0.5000,
        "Julho, 2003": 0.5000,
        "Agosto, 2003": 0.5000,
        "Setembro, 2003": 0.5000,
        "Outubro, 2003": 0.5000,
        "Novembro, 2003": 0.5000,
        "Dezembro, 2003": 0.5000,
        "Janeiro, 2004": 0.5000,
        "Fevereiro, 2004": 0.5000,
        "Março, 2004": 0.5000,
        "Abril, 2004": 0.5000,
        "Maio, 2004": 0.5000,
        "Junho, 2004": 0.5000,
        "Julho, 2004": 0.5000,
        "Agosto, 2004": 0.5000,
        "Setembro, 2004": 0.5000,
        "Outubro, 2004": 0.5000,
        "Novembro, 2004": 0.5000,
        "Dezembro, 2004": 0.5000,
        "Janeiro, 2005": 0.5000,
        "Fevereiro, 2005": 0.5000,
        "Março, 2005": 0.5000,
        "Abril, 2005": 0.5000,
        "Maio, 2005": 0.5000,
        "Junho, 2005": 0.5000,
        "Julho, 2005": 0.5000,
        "Agosto, 2005": 0.5000,
        "Setembro, 2005": 0.5000,
        "Outubro, 2005": 0.5000,
        "Novembro, 2005": 0.5000,
        "Dezembro, 2005": 0.5000,
        "Janeiro, 2006": 0.5000,
        "Fevereiro, 2006": 0.5000,
        "Março, 2006": 0.5000,
        "Abril, 2006": 0.5000,
        "Maio, 2006": 0.5000,
        "Junho, 2006": 0.5000,
        "Julho, 2006": 0.5000,
        "Agosto, 2006": 0.5000,
        "Setembro, 2006": 0.5000,
        "Outubro, 2006": 0.5000,
        "Novembro, 2006": 0.5000,
        "Dezembro, 2006": 0.5000,
        "Janeiro, 2007": 0.5000,
        "Fevereiro, 2007": 0.5000,
        "Março, 2007": 0.5000,
        "Abril, 2007": 0.5000,
        "Maio, 2007": 0.5000,
        "Junho, 2007": 0.5000,
        "Julho, 2007": 0.5000,
        "Agosto, 2007": 0.5000,
        "Setembro, 2007": 0.5000,
        "Outubro, 2007": 0.5000,
        "Novembro, 2007": 0.5000,
        "Dezembro, 2007": 0.5000,
        "Janeiro, 2008": 0.5000,
        "Fevereiro, 2008": 0.5000,
        "Março, 2008": 0.5000,
        "Abril, 2008": 0.5000,
        "Maio, 2008": 0.5000,
        "Junho, 2008": 0.5000,
        "Julho, 2008": 0.5000,
        "Agosto, 2008": 0.5000,
        "Setembro, 2008": 0.5000,
        "Outubro, 2008": 0.5000,
        "Novembro, 2008": 0.5000,
        "Dezembro, 2008": 0.5000,
        "Janeiro, 2009": 0.5000,
        "Fevereiro, 2009": 0.5000,
        "Março, 2009": 0.5000,
        "Abril, 2009": 0.5000,
        "Maio, 2009": 0.5000,
        "Junho, 2009": 0.5000,
        "Julho, 2009": 0.5000,
        "Agosto, 2009": 0.5000,
        "Setembro, 2009": 0.5000,
        "Outubro, 2009": 0.5000,
        "Novembro, 2009": 0.5000,
        "Dezembro, 2009": 0.5000,
        "Janeiro, 2010": 0.5000,
        "Fevereiro, 2010": 0.5000,
        "Março, 2010": 0.5000,
        "Abril, 2010": 0.5000,
        "Maio, 2010": 0.5000,
        "Junho, 2010": 0.5000,
        "Julho, 2010": 0.5000,
        "Agosto, 2010": 0.5000,
        "Setembro, 2010": 0.5000,
        "Outubro, 2010": 0.5000,
        "Novembro, 2010": 0.5000,
        "Dezembro, 2010": 0.5000,
        "Janeiro, 2011": 0.5000,
        "Fevereiro, 2011": 0.5000,
        "Março, 2011": 0.5000,
        "Abril, 2011": 0.5000,
        "Maio, 2011": 0.5000,
        "Junho, 2011": 0.5000,
        "Julho, 2011": 0.5000,
        "Agosto, 2011": 0.5000,
        "Setembro, 2011": 0.5000,
        "Outubro, 2011": 0.5000,
        "Novembro, 2011": 0.5000,
        "Dezembro, 2011": 0.5000,
        "Janeiro, 2012": 0.5000,
        "Fevereiro, 2012": 0.5000,
        "Março, 2012": 0.5000,
        "Abril, 2012": 0.5000,
        "Maio, 2012": 0.5000,
        "Junho, 2012": 0.4828,
        "Julho, 2012": 0.4973,
        "Agosto, 2012": 0.4675,
        "Setembro, 2012": 0.4273,
        "Outubro, 2012": 0.4273,
        "Novembro, 2012": 0.4134,
        "Dezembro, 2012": 0.4134,
        "Janeiro, 2013": 0.4134,
        "Fevereiro, 2013": 0.4134,
        "Março, 2013": 0.4134,
        "Abril, 2013": 0.4134,
        "Maio, 2013": 0.4273,
        "Junho, 2013": 0.4551,
        "Julho, 2013": 0.4761,
        "Agosto, 2013": 0.4828,
        "Setembro, 2013": 0.5000,
        "Outubro, 2013": 0.5000,
        "Novembro, 2013": 0.5000,
        "Dezembro, 2013": 0.5000,
        "Janeiro, 2014": 0.5000,
        "Fevereiro, 2014": 0.5000,
        "Março, 2014": 0.5000,
        "Abril, 2014": 0.5000,
        "Maio, 2014": 0.5000,
        "Junho, 2014": 0.5000,
        "Julho, 2014": 0.5000,
        "Agosto, 2014": 0.5000,
        "Setembro, 2014": 0.5000,
        "Outubro, 2014": 0.5000,
        "Novembro, 2014": 0.5000,
        "Dezembro, 2014": 0.5000,
        "Janeiro, 2015": 0.5000,
        "Fevereiro, 2015": 0.5000,
        "Março, 2015": 0.5000,
        "Abril, 2015": 0.5000,
        "Maio, 2015": 0.5000,
        "Junho, 2015": 0.5000,
        "Julho, 2015": 0.5000,
        "Agosto, 2015": 0.5000,
        "Setembro, 2015": 0.5000,
        "Outubro, 2015": 0.5000,
        "Novembro, 2015": 0.5000,
        "Dezembro, 2015": 0.5000,
        "Janeiro, 2016": 0.5000,
        "Fevereiro, 2016": 0.5000,
        "Março, 2016": 0.5000,
        "Abril, 2016": 0.5000,
        "Maio, 2016": 0.5000,
        "Junho, 2016": 0.5000,
        "Julho, 2016": 0.5000,
        "Agosto, 2016": 0.5000,
        "Setembro, 2016": 0.5000,
        "Outubro, 2016": 0.5000,
        "Novembro, 2016": 0.5000,
        "Dezembro, 2016": 0.5000,
        "Janeiro, 2017": 0.5000,
        "Fevereiro, 2017": 0.5000,
        "Março, 2017": 0.5000,
        "Abril, 2017": 0.5000,
        "Maio, 2017": 0.5000,
        "Junho, 2017": 0.5000,
        "Julho, 2017": 0.5000,
        "Agosto, 2017": 0.5000,
        "Setembro, 2017": 0.5000,
        "Outubro, 2017": 0.4690,
        "Novembro, 2017": 0.4273,
        "Dezembro, 2017": 0.4273,
        "Janeiro, 2018": 0.3994,
        "Fevereiro, 2018": 0.3994,
        "Março, 2018": 0.3855,
        "Abril, 2018": 0.3715,
        "Maio, 2018": 0.3715,
        "Junho, 2018": 0.3715,
        "Julho, 2018": 0.3715,
        "Agosto, 2018": 0.3715,
        "Setembro, 2018": 0.3715,
        "Outubro, 2018": 0.3715,
        "Novembro, 2018": 0.3715,
        "Dezembro, 2018": 0.3715,
        "Janeiro, 2019": 0.3715,
        "Fevereiro, 2019": 0.3715,
        "Março, 2019": 0.3715,
        "Abril, 2019": 0.3715,
        "Maio, 2019": 0.3715,
        "Junho, 2019": 0.3715,
        "Julho, 2019": 0.3715,
        "Agosto, 2019": 0.3434,
        "Setembro, 2019": 0.3434,
        "Outubro, 2019": 0.3153,
        "Novembro, 2019": 0.2871,
        "Dezembro, 2019": 0.2871,
        "Janeiro, 2020": 0.2588,
        "Fevereiro, 2020": 0.2588,
        "Março, 2020": 0.2446,
        "Abril, 2020": 0.2162,
        "Maio, 2020": 0.2162,
        "Junho, 2020": 0.1733,
        "Julho, 2020": 0.1303,
        "Agosto, 2020": 0.1303,
        "Setembro, 2020": 0.1159,
        "Outubro, 2020": 0.1159,
        "Novembro, 2020": 0.1159,
        "Dezembro, 2020": 0.1159,
        "Janeiro, 2021": 0.1159,
        "Fevereiro, 2021": 0.1159,
        "Março, 2021": 0.1159,
        "Abril, 2021": 0.1590,
        "Maio, 2021": 0.1590,
        "Junho, 2021": 0.2019,
        "Julho, 2021": 0.2446,
        "Agosto, 2021": 0.2446,
        "Setembro, 2021": 0.3012,
        "Outubro, 2021": 0.3575,
        "Novembro, 2021": 0.4412
    };

    let jurosAcumulados = 0; 
    let somar = false; // Controla se devemos começar a somar
    
        // Verifica se deve deduzir algum valor com base no plano selecionado
        let deducao = 0;
        if (plano === '2018') {
            deducao = 7.351400; //soma julho de 2017 a dez/2018
        } else if (plano === '2019') {
            deducao = 6.405800; //soma julho de 2018 a dez/2019
        } else if (plano === '2020') {
            deducao = 4.039900; //soma julho de 2019 a dez/2020 
        } else if (plano === '2021') {
            deducao = 3.180900; //soma julho de 2020 a nov/2021 
        } else if (plano === '2022') {
            deducao = 1.589100; //soma julho de 2021 a nov 2021 
        }
    

    // Itera sobre os dados de juros a partir do mês e ano selecionados
    for (const [data, taxa] of Object.entries(dadosJuros)) {
        if (data === dataSelecionada) {
            somar = true; // Começa a somar a partir dessa data
        }
        if (somar) {
            jurosAcumulados += (parseFloat(taxa)); // somar a taxa
        }
    }

        // Deduz o valor calculado
        jurosAcumulados -= deducao;
    
    // Exibe o resultado na célula especificada
    const resultado = jurosAcumulados.toFixed(4).replace('.', ',') + '%'; // Ajuste para 4 casas decimais
    document.getElementById('juroscal').textContent = resultado;

    calcularMultiplicacao();
}


function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getLastMonthDate() {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    return formatDate(lastMonth);
}

const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json&dataInicial=01/12/2021&dataFinal=${getLastMonthDate()}`;
fetch(url)
.then(response => response.json())
.then(data => {
    const sum = data.reduce((acc, curr) => acc + parseFloat(curr.valor), 0);
    const result = 1 + sum / 100;
    document.getElementById('selic').textContent = result.toFixed(4).replace(".", ",");
    document.getElementById('selic1').textContent = result.toFixed(4).replace(".", ",");
    
    calcularMultiplicacao();
    calcularPrev();

})

.catch(error => {
    console.error('Erro ao obter os dados:', error);
    document.getElementById('selic').textContent = 'Erro ao obter os dados';
    document.getElementById('selic1').textContent = 'Erro ao obter os dados';
    document.getElementById("selic").textContent = "";
    document.getElementById("selic1").textContent = "";

    var inputSelic = document.createElement("input");
    inputSelic.type = "number";
    inputSelic.id = "selicInput";
    inputSelic.placeholder = "Informe a SELIC";
    inputSelic.style.marginTop = "5px";

    var inputSelicCopy = inputSelic.cloneNode(true);

    document.getElementById("selic").appendChild(inputSelic);

    document.getElementById("selic1").appendChild(inputSelicCopy);
});


function calcularMultiplicacao() {
    var valorIndice = parseFloat(document.getElementById("multindice").textContent.replace(",", "."));
    var valorJuros = parseFloat(document.getElementById("juroscal").textContent.replace("%", "").replace(",", "."));
    var somajuros= parseFloat(document.getElementById("jur").textContent.replace(",", "."));

    var multiplicacao = valorIndice * (valorJuros/100);
    
    document.getElementById("multjuros").textContent = multiplicacao.toFixed(2).replace(".", ",");
    document.getElementById("totjur").textContent = "R$ " + multiplicacao.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    var somaa = valorIndice + multiplicacao
    document.getElementById("somjur").textContent = somaa.toFixed(2).replace(".", ",");

    var atuali= somajuros + somaa
    document.getElementById("atuali").textContent = "R$ " + atuali.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    var valorSelic = parseFloat(document.getElementById("selic").textContent.replace(",", "."));

    var atualizacao = somaa * valorSelic;

    document.getElementById("atualizacao").textContent = atualizacao.toFixed(2).replace(".", ",");

    var atualizacao1 = somajuros * valorSelic;

    document.getElementById("atualizacao1").textContent = atualizacao1.toFixed(2).replace(".", ",");

    var totalat = atualizacao + atualizacao1
    document.getElementById("totatual").textContent = "R$ " + totalat.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    document.getElementById("valordev").textContent ="R$ " + totalat.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//Deduções Legais

document.addEventListener("DOMContentLoaded", function() {
    var baseprevInputElement = document.getElementById('baseprev');
    var baseirInputElement = document.getElementById('baseir');

    baseprevInputElement.addEventListener('input', function(event) {
        var value = event.target.value;

        value = value.replace(/[^\d.,]/g, '');
        value = value.replace(/\./g, ',');

        event.target.value = value;
    });

    baseirInputElement.addEventListener('input', function(event) {
        var value = event.target.value;

        value = value.replace(/[^\d.,]/g, '');
        value = value.replace(/\./g, ',');

        event.target.value = value;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const previdenciaInput = document.getElementById("previdencia");
    previdenciaInput.addEventListener('input', function() {
        let valor = this.value.trim(); 
        if (valor !== '') { 
            valor = valor.replace(/[^\d,]/g, '');
            valor = valor.replace(/,+/g, ',');
        }
        this.value = valor;
    });

    previdenciaInput.addEventListener('blur', function() {
        let valor = this.value.trim();
        if (valor !== '') { 
            if (!valor.endsWith('%')) { 
                valor += '%'; 
            }
        }
        this.value = valor; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var basePrevInput = document.getElementById('baseprev');
    var previdenciaInput = document.getElementById('previdencia');
    var prevdevInput = document.getElementById('prevdev');
    var prevpagTd = document.getElementById('prevpag');

    function calcularResultado() {
        var basePrev = parseFloat(basePrevInput.value.replace(',', '.'));
        var previdencia = parseFloat(previdenciaInput.value.replace(',', '.'));

        var resultado = basePrev * (previdencia / 100);
        prevdevInput.value = 'R$ ' + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        prevpagTd.textContent = 'R$ ' + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    basePrevInput.addEventListener('input', function() {
        calcularResultado();
    });

    previdenciaInput.addEventListener('input', function() {
        calcularResultado();
    });
});

function calcularPrev() {
    var multindiceText = document.getElementById("multindice").textContent.trim();
    var selicText = document.getElementById("selic").textContent.trim();

    // Verifica se os valores de multindice e selic são válidos
    if (multindiceText !== "" && selicText !== "") {
        var multindice = parseFloat(multindiceText.replace(",", "."));
        var selic = parseFloat(selicText.replace(",", "."));

        var valorBasePrev = multindice * selic;
        document.getElementById("baseprev").value = valorBasePrev.toFixed(2).replace(".", ",");
    } else {
        // Caso não haja valor calculado, exibe o placeholder
        document.getElementById("baseprev").placeholder = "Informe o Valor";
        document.getElementById("baseprev").value = ""; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var baseirInputElement = document.getElementById('baseir');
    var rraInputElement = document.getElementById('rra');
    var irdevElement = document.getElementById('irdev');
    var irpagTd = document.getElementById('irpag');

    var aliqirElement = document.getElementById('aliqir');

    baseirInputElement.addEventListener('input', calcularImposto);
    rraInputElement.addEventListener('input', calcularImposto);

    function formatarNumero(numero) {
        return 'R$ ' + numero.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function calcularImposto() {
        var baseirValue = parseFloat(baseirInputElement.value.replace(',', '.'));
        var rraValue = parseInt(rraInputElement.value, 10);

        if (isNaN(baseirValue) || isNaN(rraValue) || rraValue === 0) {
            irdevElement.value = formatarNumero(0);
            aliqirElement.value = '';
            return;
        }

        var valorCalculado = baseirValue / rraValue;
        var imposto = 0;
        var alquota = '';

        if (valorCalculado >= 4664.69) {
            imposto = 0.275 * (valorCalculado - 896);
            alquota = '27,5%';
        } else if (valorCalculado >= 3751.06) {
            imposto = 0.225 * (valorCalculado - 662.77);
            alquota = '22,5%';
        } else if (valorCalculado >= 2826.66) {
            imposto = 0.15 * (valorCalculado - 381.44);
            alquota = '15%';
        } else if (valorCalculado >= 2259.21) {
            imposto = 0.075 * (valorCalculado - 169.44);
            alquota = '7,5%';
        }else {
            alquota = 'FAIXA ISENTA';
        }

        imposto = Math.max(0, imposto); 

        irdevElement.value = formatarNumero(imposto);

        aliqirElement.value = alquota;

        irpagTd.textContent = irdevElement.value;
    }
});



//Deduções Acessórias

function formatPorcentagem(input) {
    let valor = input.value.trim(); 
    if (valor !== '') { 
        valor = valor.replace(/[^\d,]/g, '');
        valor = valor.replace(/,+/g, ',');
        valor += '%';
    }
    input.value = valor; 
    input.classList.add('formatted');
}

//H.contratual

function toggleAdvogadoInputs() {
    var numAdvogados = document.getElementById("numAdvogados").value;
    var hcontInputs = document.getElementById("hcontInputs");
    var tabela = document.getElementById("tabela2");

    // Armazenar valores anteriores
    var valoresAnteriores = [];
    for (var i = 1; i <= numAdvogados; i++) {
        var nomeInput = document.getElementById(`nomeadv${i}`);
        var tipoDocumentoInput = document.getElementById(`tipoDocumento${i}`);
        var porcentagemInput = document.getElementById(`porcentagemadv${i}`);

        valoresAnteriores.push({
            nome: nomeInput ? nomeInput.value : '',
            tipoDocumento: tipoDocumentoInput ? tipoDocumentoInput.value : '',
            porcentagem: porcentagemInput ? porcentagemInput.value : ''
        });
    }

    // Limpar conteúdo
    hcontInputs.innerHTML = '';

    // Reconstruir elementos e preencher a tabela
    for (var i = 1; i <= numAdvogados; i++) {
        var advogadoInputs = `
            <div>
                <label for="nomeadv${i}">Nome do Advogado ${i}:</label>
                <input type="text" name="nomeadv${i}" id="nomeadv${i}" placeholder="Nome do Advogado ${i}" value="${valoresAnteriores[i-1].nome}" autocomplete="off">
                <select name="tipoDocumento${i}" id="tipoDocumento${i}">
                    <option value="CNPJ" ${valoresAnteriores[i-1].tipoDocumento === 'CNPJ' ? 'selected' : ''}>CNPJ</option>
                    <option value="CPF" ${valoresAnteriores[i-1].tipoDocumento === 'CPF' ? 'selected' : ''}>CPF</option>
                </select>
                <label for="porcentagemadv${i}"> Porcentagem do Advogado ${i}:</label>
                <input type="text" name="porcentagemadv${i}" id="porcentagemadv${i}" placeholder="Valor em %" onblur="formatPorcentagem(this)" value="${valoresAnteriores[i-1].porcentagem}" autocomplete="off">
                <button type="button" class="check-button" onclick="preencherTabela(${i})">✔</button>
            </div>`;
        hcontInputs.innerHTML += advogadoInputs;
    }

    // Remover linhas extras da tabela se necessário
    var numRows = tabela.rows.length;
    for (var j = numRows - 1; j > parseInt(numAdvogados) + 1; j--) {
        tabela.deleteRow(j);
    }
    
    if (numAdvogados === "0") {
        var valorOriginal = parseFloat(document.getElementById("totatual").textContent.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
        document.getElementById("valordev").textContent = "R$ " + valorOriginal.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}



function calcularMultiplicacaoPorcentagem(porcentagem) {
    // Obter o valor total atual removendo o símbolo de moeda e qualquer separador de milhar
    var valorTotAtual = parseFloat(document.getElementById("totatual").textContent.replace("R$ ", "").replace(/\./g, "").replace(",", "."));

    // Calcular a multiplicação
    var multiplicacao = (valorTotAtual * porcentagem) / 100;

    // Formatar o resultado com exatamente duas casas decimais
    var multiplicacaoFormatada = 'R$ ' + multiplicacao.toFixed(2).replace(".", ",");

    return multiplicacaoFormatada;
}



function calcularImpostoRenda(tipoDocumento, multiplicacaoPorcentagemStr) {
    // Converter o valor de string para número
    var multiplicacaoPorcentagem = parseFloat(multiplicacaoPorcentagemStr.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
    
    if (!isNaN(multiplicacaoPorcentagem)) {
        if (tipoDocumento === 'CNPJ') {
            var imposto = multiplicacaoPorcentagem * 0.015;
            return 'R$ ' + imposto.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else if (tipoDocumento === 'CPF') {
            if (multiplicacaoPorcentagem >= 4664.69) {
                return 'R$ ' + (0.275 * (multiplicacaoPorcentagem - 896)).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else if (multiplicacaoPorcentagem >= 3751.06) {
                return 'R$ ' + (0.225 * (multiplicacaoPorcentagem - 662.77)).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else if (multiplicacaoPorcentagem >= 2826.66) {
                return 'R$ ' + (0.15 * (multiplicacaoPorcentagem - 381.44)).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else if (multiplicacaoPorcentagem >= 2259.21) {
                return 'R$ ' + (0.075 * (multiplicacaoPorcentagem - 169.44)).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else {
                return 'R$ 0,00';
            }
        }
    }

    return 'R$ 0,00';
}

function preencherTabela(index) {
    var tabela = document.getElementById("tabela2");
    var row = tabela.insertRow(-1); 
    var cellNome = row.insertCell(0); 
    var cellPorcentagem = row.insertCell(1); 
    var cellPrevPag = row.insertCell(2); 
    var cellIrPag = row.insertCell(3); 
    var cellTotExeq = row.insertCell(4); 

    // Define o conteúdo das células
    var nomeAdvogado = document.getElementById(`nomeadv${index}`).value;
    var porcentagemAdvogado = parseFloat(document.getElementById(`porcentagemadv${index}`).value);
    var tipoDocumentoAdvogado = document.getElementById(`tipoDocumento${index}`).value;
    var multiplicacaoPorcentagem = calcularMultiplicacaoPorcentagem(porcentagemAdvogado);
    var impostoRenda = calcularImpostoRenda(tipoDocumentoAdvogado, multiplicacaoPorcentagem);
    
     // Função para converter valores monetários em números
    function valorMonetarioParaNumero(valorMonetario) {
        return parseFloat(valorMonetario.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
    }

    // Convertendo valores para números
    var valorPorcentagem = valorMonetarioParaNumero(multiplicacaoPorcentagem);
    var valorIrPag = valorMonetarioParaNumero(impostoRenda);

    // Calculando o total exequente
    var totalExequente = valorPorcentagem - valorIrPag;
    
    cellNome.innerHTML = nomeAdvogado;
    cellPorcentagem.innerHTML = multiplicacaoPorcentagem.replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
    cellPrevPag.innerHTML = '-'; 
    cellIrPag.innerHTML = impostoRenda; 
    cellTotExeq.innerHTML = 'R$ ' + totalExequente.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    cellTotExeq.classList.add("total-adv");

    // Atualizar o valordev subtraindo a multiplicação da porcentagem do advogado
    var valorDevAtual = parseFloat(document.getElementById("valordev").textContent.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
    var novaMultiplicacaoPorcentagem = valorMonetarioParaNumero(multiplicacaoPorcentagem);
    var novoValorDev = valorDevAtual - novaMultiplicacaoPorcentagem;

    document.getElementById("valordev").textContent = "R$ " + novoValorDev.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


//H.sucumencial

/*

function toggleSuccessLawyerInputs() {
    var numAdvogados = document.getElementById("numAdvogadosSuccess").value;
    toggleInputs("hsucumInputs", numAdvogados);
}

function toggleInputs(inputId, numAdvogados) {
    var inputsContainer = document.getElementById(inputId);
    inputsContainer.innerHTML = ''; 

    var advogadossucumb = [];

    for (var i = 1; i <= numAdvogados; i++) {
        var advogadoInputs = `
            <div>
                <label for="nomeadvsuc${i}">Nome do Advogado ${i}:</label>
                <input type="text" name="nomeadvsuc${i}" id="nomeadvsuc${i}" placeholder="Nome do Advogado ${i}">
                <select name="tipoDocumentosuc${i}" id="tipoDocumentosuc${i}">
                    <option value="CNPJ">CNPJ</option>
                    <option value="CPF">CPF</option>
                </select>
                <label for="porcentagemadvsuc${i}"> Porcentagem do Advogado de Sucesso ${i}:</label>
                <input type="text" name="porcentagemadvsuc${i}" id="porcentagemadvsuc${i}" placeholder="Valor em %" onblur="formatPorcentagem(this)">
            </div>`;
        inputsContainer.innerHTML += advogadoInputs;
    }

    // Agora que os elementos foram adicionados ao HTML, coletamos os valores e os armazenamos no objeto
    for (var i = 1; i <= numAdvogados; i++) {
        var nomesuc = document.getElementById(`nomeadvsuc${i}`).value;
        var tipoDocumentosuc = document.getElementById(`tipoDocumentosuc${i}`).value;
        var porcentagemsuc = document.getElementById(`porcentagemadvsuc${i}`).value;

        var advogadosuc = {
            nome: nomesuc,
            tipoDocumento: tipoDocumentosuc,
            porcentagem: porcentagemsuc
        };
        advogadossucumb.push(advogadosuc);
    }

    // Aqui fazer o que quiser com o array advogadossucumb
}

*/

//resumo

document.addEventListener("DOMContentLoaded", function() {

    var inputNome = document.getElementById("inome");
    
    var tdNome = document.getElementById("nameex");
    
    inputNome.addEventListener("blur", function() {
        tdNome.textContent = inputNome.value;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var valordevElement = document.getElementById('valordev');
    var prevpagElement = document.getElementById('prevpag');
    var irpagElement = document.getElementById('irpag');
    var totexeqElement = document.getElementById('totexeq');

    function extrairValor(element) {
        if (element) {
            var textoValor = element.textContent.trim().replace(/[^\d,-]/g, ''); 
            var valor = parseFloat(textoValor.replace(',', '.')); 
            return isNaN(valor) ? 0 : valor; 
        }
        return 0;
    }

    function calcularDiferenca() {
        var valordev = extrairValor(valordevElement);
        var prevpag = extrairValor(prevpagElement);
        var irpag = extrairValor(irpagElement);

        var diferenca = valordev - prevpag - irpag;

        totexeqElement.textContent = 'R$ ' + diferenca.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    calcularDiferenca(); 

    if (valordevElement) valordevElement.addEventListener('DOMSubtreeModified', calcularDiferenca);
    if (prevpagElement) prevpagElement.addEventListener('DOMSubtreeModified', calcularDiferenca);
    if (irpagElement) irpagElement.addEventListener('DOMSubtreeModified', calcularDiferenca);
});


