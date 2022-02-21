// Selecting Element 
let rowSub = document.querySelector('.rowSub');
let rowAdd = document.querySelector('.rowAdd');
let colSub = document.querySelector('.colSub');
let colAdd = document.querySelector('.colAdd');
let inputRows = document.querySelector('.inputRows');
let inputColumns = document.querySelector('.inputColumns');
let tableBtn = document.querySelector('#tableBtn');
let tableOutput = document.getElementById('tableOutput');
let tableVisible = document.querySelector('.tableVisible');

// Row Subtraction 
rowSub.addEventListener('click', () => {
    if(inputRows.value > 1){
        inputRows.value = parseInt(inputRows.value) - 1;
        onVisible(inputRows.value, inputColumns.value);
    }
})

// Row Addition 
rowAdd.addEventListener('click', () => {
    inputRows.value = parseInt(inputRows.value) + 1;
    onVisible(inputRows.value, inputColumns.value);
})

// Column Subtraction 
colSub.addEventListener('click', () => {
    if(inputColumns.value > 1){
        inputColumns.value = parseInt(inputColumns.value) - 1;
        onVisible(inputRows.value, inputColumns.value);
    }
})

// Column Addition 
colAdd.addEventListener('click', () => {
    inputColumns.value = parseInt(inputColumns.value) + 1;
    onVisible(inputRows.value, inputColumns.value);
})

// Visible table click to show 
function onVisible(row, column){
    row = Number(row);
    column = Number(column);
    visibleTable = document.createElement('table');

    for(let r = 1; r <= row; r++){
        visibleTr = document.createElement('tr');
        for(let c = 1; c <= column; c++){
            visibleTd = document.createElement('td');
            visibleTr.appendChild(visibleTd);
        }
        visibleTable.appendChild(visibleTr);
    }
    tableVisible.innerHTML = '';
    tableVisible.appendChild(visibleTable);
}

// Generate Table 
tableBtn.addEventListener('click', () => {
    table = document.createElement('table');
    let rowIndex = inputRows.value;
    let colIndex = inputColumns.value;

    for(let r = 1; r <= rowIndex; r++){
        tr = document.createElement('tr');
        for(let c = 1; c <= colIndex; c++){
            td = document.createElement('td');
            textNode = document.createTextNode('Table Data');
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableOutput.innerHTML = '';
    tableOutput.appendChild(table);

})