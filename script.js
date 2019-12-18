var todolist = document.getElementById("list");
var iteration = todolist.getElementsByTagName("li").length;
//var editButtons = [];
var pValues = []; //Stores the values of each list item

function newListItem(func, liNmbr, value) {
  if (func === "new") {
    todolist.innerHTML +=
      '<li id="listitem' +
      iteration +
      '" nmbr="' +
      iteration +
      '" class="listItem"></li>';
  } else if (func === "edit") {
    let li = document.getElementById("listitem" + liNmbr);
  } else {
    alert("something went wrong :(");
  }
  console.log("newlistitem 1 " + iteration);
  editListItem(iteration, false);

  iteration++;
  console.log("newlistitem 2 " + iteration);
}

function editListItem(liNmbr, fromBtn) {
  console.log("editlistitem 1 " + iteration);
  let listItem = document.getElementById("listitem" + liNmbr);
  console.log(listItem);
  let lastListItem = document.getElementById("listitem" + iteration);
  let value = "";

  if (fromBtn) {
    value = pValues[liNmbr];
    Array.from(lastListItem.children).forEach(element =>
      element.setAttribute("disabled", "")
    );
  }

  listItem.innerHTML =
    '<input type="text" autofocus required value="' +
    value +
    '" /><button id="resetBtn">x</button><button id="submitBtn">►</button>';

  document.getElementById("submitBtn").onclick = function() {
    console.log(this.parentElement.firstChild.value);
    if (value === "") {
      setListitem("new", liNmbr, this.parentElement.firstChild.value);
    } else {
      setListitem("edit", liNmbr, this.parentElement.firstChild.value);
    }
  };
  document.getElementById("resetBtn").onclick = function() {
    this.previousElementSibling.value = "";
  };
}

function setListitem(func, liNmbr, value) {
  let li = document.getElementById("listitem" + liNmbr);
  pValues[liNmbr] = value; //li.getElementsByTagName("input")[0].value;

  li.innerHTML =
    '<p class="liText">' +
    pValues[liNmbr] +
    '</p> <button class="editBtn" onclick="editListItem(' +
    liNmbr +
    ', true)" >edit</button>';

  //editButtons = document.getElementsByClassName("editBtn");

  newListItem(func, liNmbr, value);
}

newListItem("new");
