const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector(".task-list");


button.addEventListener('click', (e) =>{
  e.preventDefault();
  if(input.value !== ''){
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const xIcon = document.createElement("span");
  
    li.textContent = input.value;
    
    xIcon.textContent = "x";
    li.append(xIcon);
    ul.append(li);
    div.append(ul);
  
    input.value = "";
  }else{
    input.style.border = "2px solid red"
  }
 
});