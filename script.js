window.addEventListener("load", () => {
  const list_el = document.querySelector("#tasks");
  const input = document.querySelector("#new-task-input");
  const form = document.querySelector("#new-task-form");

  showTask();

  form.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault(); // prevented refreshing on submit

    const task = input.value;
    if (!task) {
      alert("Please select a task");
      return;
    }

    let webtask = localStorage.getItem("localtask"); // localStorage
    
    if (webtask) {
      taskObj = JSON.parse(webtask);
    } else {
      taskObj = [];
    }

    taskObj.push(task);
    localStorage.setItem("localtask", JSON.stringify(taskObj)); // localStorage

    const task_el = document.createElement("div");
    task_el.classList.add("task");
    list_el.appendChild(task_el);

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "true");
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);
    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText == "EDIT") {
        task_input_el.removeAttribute("readonly");
        // console.log(webtask);
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "true");
        task_edit_el.innerText = "Edit";
      }
    });
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
      console.log("success");
        input.focus();
    });
  });

  function showTask(){
    let webtask = localStorage.getItem("localtask"); // localStorage
    
    if (webtask) {
      taskObj = JSON.parse(webtask);
    } else {
      taskObj = [];
    }

    taskObj.forEach((task, key) => {
      
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    list_el.appendChild(task_el);

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("text");
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "true");
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);
    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText == "EDIT") {
        task_input_el.removeAttribute("readonly");
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "true");
        task_edit_el.innerText = "Edit";
      }
    });
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
      console.log("success");
        input.focus();
    });
    });

  };
});
