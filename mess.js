const MessMenu={
    
    "Monday":    ["Poori", "Rice", "Noodles"],
    "Tuesday":   ["Idli", "Dal Chawal", "Chapati"],
    "Wednesday": ["Bread", "Rajma Rice", "Pasta"],
    "Thursday":  ["Dosa", "Chole Bhature", "Paratha"],
    "Friday":    ["Upma", "Rice", "Paneer"],
    "Saturday":  ["Pav Bhaji", "Veg Biryani", "Momos"],
    "Sunday":    ["Aloo Puri", "Fried Rice", "Pizza"]

}
function showAllCards() {
    document.querySelector(".container").innerHTML = "";
    for(let Day in MessMenu){
            const[bfs,ln,dn]=MessMenu[Day];
            addCard(Day,bfs,ln,dn);
        }
}

showAllCards();

document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector(".glow");
    const x = e.clientX;
    const y = e.clientY;
    glow.style.background = `
    radial-gradient(
      circle at ${x}px ${y}px,
     rgba(91, 79, 249, 0.2) 10%,
    transparent 40%,
    rgba(91, 79, 249, 0.4) 20%,
    transparent 20%,
     rgba(91, 79, 249, 0.6) 20%,
    transparent 20%
    )`;
});


function addCard(day, breakfast, lunch, dinner) {
    let newCard = ` <div class="card">
                <div class="Day">
                    <h2>${day}</h2>
                </div>
                <div class="breakfast">
                    <h2>BreakFast:</h2>
                    <p>${breakfast}</p>
                    <h2>Lunch:</h2>
                    <p>${lunch}</p>
                    <h2>Dinner:</h2>
                    <p>${dinner}</p>
                </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + newCard;
}


let option = document.querySelector("#DaySelect");
option.addEventListener("change", function () {
    const selectedDay = this.value;
    const container=document.querySelector(".container");
    container.innerHTML="";
    if (selectedDay == "All Days"||selectedDay=="None") {

        for(let Day in MessMenu){
            const[bfs,ln,dn]=MessMenu[Day];
            addCard(Day,bfs,ln,dn);
        }
    }
   else{
    const[bfs,ln,dn]=MessMenu[selectedDay];
    addCard(selectedDay,bfs,ln,dn);
   }

})



