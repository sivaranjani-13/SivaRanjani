var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["emailid"] = document.getElementById("emailid").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["phoneno"] = document.getElementById("phoneno").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.emailid;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.empid;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.phoneno;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.gender;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('emailid').value = selectedRow.cells[1].innerHTML;
    document.getElementById('empid').value = selectedRow.cells[2].innerHTML;
    document.getElementById('phoneno').value = selectedRow.cells[3].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.emailid;
    selectedRow.cells[2].innerHTML = formData.empid;
    selectedRow.cells[3].innerHTML = formData.phoneno;
    selectedRow.cells[4].innerHTML = formData.gender;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('username').value = '';
    document.getElementById('emailid').value = '';
    document.getElementById('empid').value = '';
    document.getElementById('phoneno').value = '';
    document.getElementById('gender').value = '';
}
