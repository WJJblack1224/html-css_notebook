const textfield =  document.querySelector(".text_input");
const checklist = document.querySelector(".check_list");
const button = document.querySelector(".button");

function newtask(){
    if (textfield.value === ""){
        return;
    }
    const task = document.createElement("li");
    task.innerHTML = `
        <input type="checkbox" class="check_box">
        <label>${textfield.value}</label>
        <button class="garbage_can">🗑️</button>
    `
    const garbagecan = task.querySelector(".garbage_can");
    const checkbox = task.querySelector(".check_box");

    garbagecan.addEventListener("click",function(){
        task.remove();
    });

    checkbox.addEventListener("click",function(){
        if (checkbox.checked){
            task.style.textDecoration = "line-through";
            task.style.color = "#999";
            checklist.append(task);
        }else{
            task.style.textDecoration = "none";
            task.style.color = "";
            checklist.prepend(task);
        }
    });

    checklist.append(task);
    textfield.value = ""; 
}

button.addEventListener("click",newtask);

textfield.addEventListener("keyup",function(e){
    if (e.key === "Enter"){
        newtask();
    }
});