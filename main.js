// C R U D - Create Read Update Delete

// Global
var row = null;
var msg = document.getElementById("msg");

// CREATE
// Submit function

function Submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style = "color: red;">Please enter data !</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: yellow;">Data Inserted !</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style = "color: orange;">Data Updated !</h3>`;
    }
  }

  document.getElementById("form").reset();
}

// READ
// Retrieve data
function retrieveData() {
  var name1 = document.getElementById("name").value;
  var address1 = document.getElementById("address").value;
  var empid1 = document.getElementById("empid").value;
  var designation1 = document.getElementById("designation").value;

  var arr = [name1, address1, empid1, designation1];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {
  // Storing data in local storage
        var n = localStorage.setItem("Name", dataEntered[0]);
        var a = localStorage.setItem("Address", dataEntered[1]);
        var e = localStorage.setItem("Empid", dataEntered[2]);
        var d = localStorage.setItem("Designation", dataEntered[3]);


    // Show data in table (Getting item from localStorage)
        var n1 = localStorage.getItem("Name", n);
        var a1 = localStorage.getItem("Address", a);
        var e1 = localStorage.getItem("Empid", e);
        var d1 = localStorage.getItem("Designation", d);


    var arr = [n1, a1, e1, d1];
    return arr;
}

// INSERT
function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  // row.insertCell(5).innerHTML = "JJJ"
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = readData[3];
  cell5.innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Edit</a></button> &nbsp
<button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none;">Delete</a></button>`;
}


//EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("address").value = row.cells[1].innerHTML;
  document.getElementById("empid").value = row.cells[2].innerHTML;
  document.getElementById("designation").value = row.cells[3].innerHTML;
}

// UPDATE
function update(td) {
  row = td.parentElement.parentElement;
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("address").value;
  row.cells[2].innerHTML = document.getElementById("empid").value;
  row.cells[3].innerHTML = document.getElementById("designation").value;
  row = null;
}

// DELETE
function remove(td) {
  var ans = confirm("Are you sure you want to delete the record?");
  if (ans == true) {
    var row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML = `<h3 style = "color: red;">Data Deleted !</h3>`;
  }
}
