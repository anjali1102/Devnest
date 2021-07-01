var arr = new Array();
const box = document.getElementById("box");
const score = document.querySelector("#scoring");

let emojis = ["./images/cat.4001.jpg", "./images/cat.4002.jpg", "./images/cat.4003.jpg", "./images/cat.4004.jpg", "./images/cat.4005.jpg", "./images/cat.4006.jpg"];
let original_emojis = emojis.length;
const delay = 150;

emojis = [...emojis, ...emojis];
emojis.sort(() => 0.5 - Math.random());

score.innerHTML = 0;
let selection_Stack = [];


for (let i = 0; i < original_emojis * 2; i++) {
  let ele = document.createElement("img");
  ele.src = "./images/placeholder.jpg";
  
  ele.classList.add("content");
  box.appendChild(ele);

  
  let random_emoji_index = Math.floor((Math.random() * emojis.length) / 2);
  
  ele.custom_attr = emojis[random_emoji_index];
  emojis.splice(random_emoji_index, 1);

  ele.addEventListener("click", () => {
    
    if (selection_Stack.length < 2 && !ele.classList.contains('cleared')){
      ele.classList.toggle('onToggle1');
      ele.src = ele.custom_attr;
      
      selection_Stack.push(ele);
    }

    if (selection_Stack.length == 2){
      //mismatch condition
      if(ele.custom_attr != selection_Stack[0].custom_attr || ele == selection_Stack[0]){
        
        setTimeout( () => {
          selection_Stack[0].classList.toggle('onToggle1');
          selection_Stack[0].src = "./images/placeholder.jpg";
          
          ele.src = "./images/placeholder.jpg";
          ele.classList.toggle('onToggle1');
          
          selection_Stack = [];
        }, delay); 
      }

      //clear condition
      else{
        setTimeout( () => {
        selection_Stack[0].classList.toggle('onToggle1');
        selection_Stack[0].classList.toggle('cleared');
        
        ele.classList.toggle('cleared');
        score.innerHTML = Number(score.innerHTML) + 2;
        selection_Stack = [];
      }, delay);
    }
  }

  });

  
  arr.push(ele);
}

//lets pretend click spam bug doesnt exist :)
