function addTask() {
  const gameInput = document.getElementById("gameInput");
  const gameCategoria = document.getElementById("gameCategoria");
  const taskList = document.getElementById("gameList");

  if (gameInput.value.trim() !== "" && gameCategoria.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = gameInput.value + " - " + gameCategoria.value;

    const mark = document.createElement("input");
    mark.type = "checkbox";
    mark.className = "mark";
    li.appendChild(mark);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "X";
    deleteButton.className = "deleteBtn";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    gameInput.value = "";
    gameCategoria.value = "";
  }
}
