// Função para alternar a visibilidade das linhas com base na seleção do rádio
function toggleRowsVisibility(completeChecked) {
    const principalRow = document.getElementById('principalRow');
    const jurosRow = document.getElementById('jurosRow');
    const totalRow = document.getElementById('totalRow');
    const simplifacadoROW= document.getElementById('simplifacadoROW');
    const completoROW = document.getElementById('completoROW');
    const elementosOcultarCompl = document.querySelectorAll('.ocultarcompl');

    if (completeChecked) {
        principalRow.style.display = 'none';
        jurosRow.style.display = 'none';
        totalRow.style.display = 'none';
        simplifacadoROW.style.display='none';
        completoROW.style.display = 'table-cell';
        elementosOcultarCompl.forEach(function(elemento) {
            elemento.style.display = 'table-row';
        });
    } else {
        principalRow.style.display = 'table-row';
        jurosRow.style.display = 'table-row';
        totalRow.style.display = 'table-row';
        simplifacadoROW.style.display = 'table-cell';
        completoROW.style.display = 'none';
        elementosOcultarCompl.forEach(function(elemento) {
            elemento.style.display = 'none';
        });
    }
    
}


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
}

document.addEventListener('DOMContentLoaded', function() {
    const inputPrincipal = document.getElementById('valprin');
    const inputJuros = document.getElementById('valjur');
    const radioCompleto = document.getElementById('calculoCompleto');
    const radioReduzido = document.getElementById('calculoReduzido');

    // Event listener para o radio 'Cálculo Completo'
    radioCompleto.addEventListener('change', function() {
        if (this.checked) {
            toggleRowsVisibility(true);
            updateTotal();
            limparValoresModuloSimplificado();
        }
    });

    // Event listener para o radio 'Cálculo Reduzido'
    radioReduzido.addEventListener('change', function() {
        if (this.checked) {
            toggleRowsVisibility(false);
            updateTotal();
        }
    });

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

    // Função para limpar os valores do módulo simplificado
    function limparValoresModuloSimplificado() {
        document.getElementById('valprin').value = '';
        document.getElementById('valjur').value = '';
    }


    // Atualiza o total ao carregar a página
    updateTotal();
    toggleRowsVisibility(false);
});

//criar linha no modulo completo
document.addEventListener('DOMContentLoaded', function() {
    const addValorButton = document.getElementById('addValorButton');
    const tabela = document.querySelector('.tabela');
    let inputsAdded = false; // Flag para controlar se os inputs já foram adicionados

    addValorButton.addEventListener('click', function() {
        const lastRow = tabela.rows[tabela.rows.length - 1]; // Obtém a última linha existente na tabela
        const newRow = tabela.insertRow(lastRow.rowIndex + 1); // Insere a nova linha abaixo da última linha existente

        // Célula para mes e ano
        const tdMesAno = document.createElement('td');

        // Título para mês
        const labelMes = document.createElement('label');
        labelMes.textContent = 'Mês: ';
        tdMesAno.appendChild(labelMes);

        // Select para o mês
        const selectMes = document.createElement('select');
        selectMes.name = 'mes';
        selectMes.id = 'mes';
        
        // Adiciona a opção "Selecione" desabilitada
        const optionSelecione = document.createElement('option');
        optionSelecione.value = '';
        optionSelecione.textContent = 'Selecione';
        optionSelecione.disabled = true;
        optionSelecione.selected = true;
        selectMes.appendChild(optionSelecione);
        
        // Adiciona opções para os meses
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "13º Salario", "Férias"];
        meses.forEach(mes => {
            const option = document.createElement('option');
            option.value = mes;
            option.textContent = mes;
            selectMes.appendChild(option);
        });

        tdMesAno.appendChild(selectMes);

        // Título para ano
        const labelAno = document.createElement('label');
        labelAno.textContent = ' Ano: ';
        tdMesAno.appendChild(labelAno);

        // Input para o ano
        const inputAno = document.createElement('input');
        inputAno.type = 'number';
        inputAno.id = 'ano';
        inputAno.placeholder = 'Ano';
        tdMesAno.appendChild(inputAno);

        newRow.appendChild(tdMesAno); // Adiciona a célula à nova linha

        // Célula para o valor
        const tdValor = document.createElement('td');

        // Rótulo para o valor
        const labelValor = document.createElement('label');
        labelValor.textContent = 'Valor:';
        tdValor.appendChild(labelValor);

        // Input para o valor
        const inputValor = document.createElement('input');
        inputValor.type = 'text';
        tdValor.appendChild(inputValor);

        // Botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            tabela.deleteRow(newRow.rowIndex);
        });
        tdValor.appendChild(deleteButton);

        newRow.appendChild(tdValor); // Adiciona a célula à nova linha

        inputsAdded = true; // Define a flag como true para indicar que os inputs foram adicionados
    });
});








