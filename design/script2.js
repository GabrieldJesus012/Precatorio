//section calc
function atualizarValor() {
    // Obtém o valor inserido pelo usuário
    var valorInserido = document.getElementById("valprin").value;
    // Atualiza o conteúdo do segundo td com o valor inserido
    document.getElementById("valorprincinformado").innerText = valorInserido;
}

function atualizarValor2() {
    // Obtém o valor inserido pelo usuário
    var valorInserido2 = document.getElementById("valjur").value;
    // Atualiza o conteúdo do segundo td com o valor inserido
    document.getElementById("valorjuroinformado").innerText = valorInserido2;
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
        // Exibir o valor do índice na tabela
        document.getElementById("indice").textContent = valorIndice;
        document.getElementById("indice2").textContent = valorIndice;
    } else {
        // Remover o valor do índice da tabela
        document.getElementById("indice").textContent = "";
        document.getElementById("indice2").textContent = "";

        // Criar um input para permitir que o usuário insira o valor manualmente
        var inputIndice = document.createElement("input");
        inputIndice.type = "number";
        inputIndice.id = "indiceInput";
        inputIndice.placeholder = "Informe o índice";
        inputIndice.style.marginTop = "5px";

        // Adicionar o input no lugar do valor do índice na tabela
        var elementoIndice = document.getElementById("indice");
        elementoIndice.appendChild(inputIndice);

        // Adicionar o input também ao elemento com id "indice2"
        var elementoIndice2 = document.getElementById("indice2");
        elementoIndice2.appendChild(inputIndice.cloneNode(true));
    }
}

