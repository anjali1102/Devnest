const box = document.getElementById("box");
const booked = document.getElementById("Booked-Seats");
const remaining = document.getElementById("Remaining-Seats");
const box_w = box.offsetWidth;
const box_h = box.offsetHeight;
let num_booked = 0;
box.style.backgroundColor = "#FFFFFF";
let spacers = 0;

let num_rows = 12;
let num_cols = 12;

let seat_h = Math.round(box_w / num_cols) - 8; //adjusting for borders
let seat_w = Math.round(box_h / num_rows) - 8; 

booked.innerText   = "Booked: 0";
remaining.innerText = "Remaining Seats: "+ (num_cols * num_rows) + "";

for (let i = 1; i <num_rows * num_cols +1; i++){
  let e = document.createElement('div');
  
  if (i%4 == 0 && i%12 != 0){
    e.classList.add("spacer");
  }
  
  else{
    e.classList.add("seats");
    e.innerText = " RIP ";

    e.addEventListener("click", () => {
      
      e.classList.toggle("booked");
      if (e.classList.contains("booked")){
        num_booked += 1;
        
        booked.innerText = `Booked: ${num_booked}`;
        remaining.innerText = `Remaining Seats: ${ (num_cols * num_rows ) - num_booked - spacers}`;
      }
    });

  }

  
  e.style.height = "" + seat_h  + "px";
  e.style.width = "" + seat_w + "px";
  box.appendChild(e);
  
}

spacers = document.querySelectorAll('.spacer').length;