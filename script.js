var todolist = document.getElementById("list");
var iteration = todolist.getElementsByTagName("li").length;
var editButtons = [];

function newListItem(listID) {
  listID.innerHTML +=
    '<li id="listitem' +
    iteration +
    '" nmbr="' +
    iteration +
    '" class="listItem"> <input type="text" autofocus required /><button id="resetBtn">x</button><button id="submitBtn">►</button> </li>';
  iteration++;

  document.getElementById("submitBtn").onclick = setListitem;
  document.getElementById("resetBtn").onclick = function() {
    this.previousElementSibling.value = "";
  };
}

function editListItem(btn) {
  console.log(btn);
}

function setListitem() {
  let i = iteration - 1;
  let li = document.getElementById("listitem" + i);
  let liValue = li.getElementsByTagName("input")[0].value;

  li.innerHTML =
    '<p class="liText">' +
    liValue +
    '</p> <button class="editBtn" nmbr="' +
    i +
    '" >edit</button>';

  editButtons = document.getElementsByClassName("editBtn");

  editButtons.forEach(function() {
    console.log(this);
  });

  // for (var j = 0; j < editButtons.length; j++) {
  //   console.log("forloop " + j);
  //   console.log(editButtons[j]);
  //   editButtons[j].onclick = function() {
  //     console.log("I'm in");
  //     editListItem(this);
  //   };
  // }

  newListItem(todolist);
}

newListItem(todolist);
