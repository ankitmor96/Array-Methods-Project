let users = [];


function display(data) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((u, i) => {
    output.innerHTML += `<div class="card">${i} - ${u.name} (${u.age})</div>`;
  });
}


function showResult(text) {
  document.getElementById("result").innerText = text;
}


function clearInput() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("searchName").value = "";
}


function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    return showResult("Enter all details");
  }

  users.push({ name, age: Number(age) });
  clearInput();
  display(users);
}


function addFirst() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    return showResult("Enter data");
  }

  users.unshift({ name, age: Number(age) });
  clearInput();
  display(users);
}


function removeLast() {
  if (users.length === 0) {
    return showResult("No data");
  }
  users.pop();
  display(users);
}


function removeFirst() {
  if (users.length === 0) {
    return showResult("No data");
  }
  users.shift();
  display(users);
}


function spliceData() {
  if (users.length < 2) {
    return showResult("Need at least 2 users");
  }
  users.splice(1, 1);
  display(users);
}


function sliceData() {
  display(users.slice(0, 2));
}


function concatData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    return showResult("Enter data");
  }

  const newUser = { name, age: Number(age) };
  display(users.concat([newUser]));
}


function checkIncludes() {
  const search = document.getElementById("searchName").value;
  const names = users.map(u => u.name);
  showResult(names.includes(search));
}


function checkIndex() {
  const search = document.getElementById("searchName").value;
  const names = users.map(u => u.name);
  showResult(names.indexOf(search));
}


function findUser() {
  const search = document.getElementById("searchName").value;
  const user = users.find(u => u.name === search);

  if (user) {
    display([user]);
  } else {
    showResult("Not Found");
  }
}


function mapData() {
  const newData = users.map(u => ({
    name: u.name.toUpperCase(),
    age: u.age
  }));
  display(newData);
}


function filterData() {
  display(users.filter(u => u.age >= 18));
}


function reduceData() {
  if (users.length === 0) {
    return showResult("No data");
  }
  const total = users.reduce((sum, u) => sum + u.age, 0);
  showResult("Total Age = " + total);
}


function sortData() {
  users.sort((a, b) => a.age - b.age);
  display(users);
}


function reverseData() {
  users.reverse();
  display(users);
}


function joinData() {
  showResult(users.map(u => u.name).join(" / "));
}

function convertToString() {
  showResult(users.map(u => u.name).toString());
}


function flatData() {
  showResult([1, 2, [3, 4]].flat());
}

function SomeData() {
  const result = users.some(u => u.age <= 18);
  showResult(result);
}

function showValues() {
  let text = "";
  for (let v of users.values()) {
    text += v.name + " ";
  }
  showResult(text);
}

function EveryData() {
  const result = users.every(u => u.age > 18);
  showResult(result);
}

function LengthData() {
  const result = users.length;
  showResult(result);
}
