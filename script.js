function insert_Row() {
    //Write your code here
  let table=document.getElementById("sampleTable");
	let firstRow = table.rows[0];
let newRow = document.createElement("tr");

      let cell1 = document.createElement("td");
      cell1.textContent = "New Cell1";
      newRow.appendChild(cell1);

      let cell2 = document.createElement("td");
      cell2.textContent = "New Cell2";
      newRow.appendChild(cell2);

	
table.insertBefore(newRow,table.firstChild);
  
}
