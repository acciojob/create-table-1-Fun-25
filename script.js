function insert_Row() {
    //Write your code here
  let table=document.getElementById("sampleTable");
let newRow=document.createElement("tr");
	newRow.innerHTML="<td>New Cell1</td>" + "<td>New Cell2</td>";
	
table.insertBefore(newRow,table.firstChild);
  
}
