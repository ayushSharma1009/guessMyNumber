let table = document.createElement('table');
table.style.border = '2px solid black';
table.style.color = 'red';
table.style.width = '500px';
table.style.height = '300px';
table.style.textAlign = 'center';
function createRow() {
  for (let i = 0; i <= 2; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j <= 2; j++) {
      let td = document.createElement('td');

      td.textContent = `${j}`;
      td.style.border = '1px solid black';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.querySelector('body').appendChild(table);
}
createRow();
