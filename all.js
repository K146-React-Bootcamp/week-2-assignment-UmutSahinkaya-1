const data = [
  { name: "ahmet", age: 30, gender: "erkek" },
  { name: "ayşe", age: 26, gender: "kadın" },
  { name: "ali", age: 35, gender: "erkek" },
  { name: "ege", age: 17, gender: "erkek" }
];

const todosUrl = "https://jsonplaceholder.typicode.com/todos"
const root = document.querySelector("#root");

const errorLogger = (error) => {
  console.log({ error });
}
//render();
const renderTodos = () => {
  // todoları listele
  const ul = document.createElement("ul");
  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.id} ${item.title} ${item.userId}`;
    ul.appendChild(li);
  }

  // todosları api'dan al
  fetch(todosUrl).then(resp => resp.json()).then((todos = []) => {
    todos.forEach(item => {
      renderItem(item);
    });
    root.appendChild(ul);
  }).catch(error => {
    errorLogger(error);
  })
}

renderTodos();