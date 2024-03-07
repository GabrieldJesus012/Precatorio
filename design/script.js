// Função para alternar a visibilidade das linhas com base na seleção do rádio
function toggleRowsVisibility(completeChecked) {
    const principalRow = document.getElementById('principalRow');
    const jurosRow = document.getElementById('jurosRow');
    const totalRow = document.getElementById('totalRow');
    const simplifacadoROW= document.getElementById('simplifacadoROW')

    if (completeChecked) {
        principalRow.style.display = 'none';
        jurosRow.style.display = 'none';
        totalRow.style.display = 'none';
        simplifacadoROW.style.display='none';
    } else {
        principalRow.style.display = 'table-row';
        jurosRow.style.display = 'table-row';
        totalRow.style.display = 'table-row';
        simplifacadoROW.style.display = 'table-cell';
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

    // Atualiza o total ao carregar a página
    updateTotal();
});
