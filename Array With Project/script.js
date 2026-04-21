let users = [];

//  Add User (push)
function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    alert("Enter all fields");
    return;
  }

  users.push({ name, age: Number(age) });
  display(users);
}

//  Display forEach
function display(data) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((u, i) => {
    output.innerHTML += `<div class="card">${i} - ${u.name} (${u.age})</div>`;
  });
}

//  pop
function removeLast() { users.pop(); display(users); }

//  shift
function removeFirst() { users.shift(); display(users); }

//  unshift
function addFirst() {
  users.unshift({ name: "FirstUser", age: 99 });
  display(users);
}

//  splice
function spliceData() {
  users.splice(1, 1);
  display(users);
}

//  slice
function sliceData() {
  display(users.slice(0, 2));
}

//  concat
function concatData() {
  display(users.concat([{ name: "Extra", age: 50 }]));
}

//  toString
function convertToString() {
  alert(users.map(u => u.name).toString());
}

//  join
function joinData() {
  alert(users.map(u => u.name).join(" - "));
}

//  flat
function flatData() {
  alert([1, 2, [3, 4]].flat());
}

//  some
function checkSome() {
  alert(users.some(u => u.age < 18));
}

//  every
function checkEvery() {
  alert(users.every(u => u.age >= 18));
}

//  includes
function checkIncludes() {
  const names = users.map(u => u.name);
  alert(names.includes("Ankit"));
}

//  indexOf
function checkIndex() {
  const names = users.map(u => u.name);
  alert(names.indexOf("Ankit"));
}

//  reverse
function reverseData() {
  users.reverse();
  display(users);
}

//  values
function showValues() {
  const iterator = users.values();
  let text = "";
  for (let v of iterator) {
    text += v.name + " ";
  }
  alert(text);
}

//  find
function findUser() {
  const user = users.find(u => u.age > 20);
  alert(user ? user.name : "Not Found");
}

//  map
function mapData() {
  const names = users.map(u => u.name.toUpperCase());
  display(names.map(n => ({ name: n, age: "-" })));
}

//  filter
function filterData() {
  display(users.filter(u => u.age >= 18));
}

//  reduce
function reduceData() {
  const total = users.reduce((sum, u) => sum + u.age, 0);
  alert("Total Age: " + total);
}

//  sort
function sortData() {
  users.sort((a, b) => a.age - b.age);
  display(users);
}

//  split
function splitData() {
  alert("Ankit,Rahul,Neha".split(","));
}