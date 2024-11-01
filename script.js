var selectedRow =null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//Retrieve the data
function readFormData(){
    var formData = {}
    formData["box1"] = document.getElementById("box1").value;
    formData["box2"] = document.getElementById("box2").value;
    formData["box3"] = document.getElementById("box3").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.box1;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.box2;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.box3;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`


}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('box1').value = selectedRow.cells[0].innerHTML;
    document.getElementById('box2').value = selectedRow.cells[1].innerHTML;
    document.getElementById('box3').value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.box1;
    selectedRow.cells[1].innerHTML = formData.box2;
    selectedRow.cells[2].innerHTML = formData.box3;
}

// Delete tha data
function onDelete(td){
    if(confirm("Do you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex)
    }
    resetForm();
}
// reset the data
function resetForm(){
    document.getElementById('box1').value = ' ';
    document.getElementById('box2').value = ' ';
    document.getElementById('box3').value = ' ';
}
