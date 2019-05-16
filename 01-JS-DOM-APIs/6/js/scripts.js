matrix = [
    ['carrot', 'chicken', 'allspice', 40],
    ['potato', 'steak', 'oregano', 790],
    ['cabbage', 'fish', 'cillantro', 10],
    ['spinach', 'pork', 'cumin', 180]
  ];


function loadTable() {
    console.log(matrix.length);
    
    for (let col = 0; col < matrix.length; col++) {
        let rowTable = document.createElement('tr');
        for (let row = 0; row < matrix[col].length; row++) {
            let element = matrix[col][row];
            console.log(element);
            let node =  document.createElement('td');
            let text = element;
            let textNode = document.createTextNode(text);
            node.appendChild(textNode);
            rowTable.appendChild(node);            
        }

        document.getElementById('table').appendChild(rowTable);
    }    
}

document.addEventListener('DOMContentLoaded', loadTable);

