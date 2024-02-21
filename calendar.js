let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const events = [ 
    {Date: "2024-03-15", description:"DJ Hippo & DJ DropDoc", url:"dropdoc.html"},
    {Date: "2024-03-22", description:"Flow Faire Dallas Bass Festival", url:"dropdoc.html"}
];

//add event detection in function 
function generateCalendar(month, year) {
    calendarDays.innerHTML = "";
    monthYear.innerText = `${months[month]} ${year}`;
    
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += "<div></div>"; // Empty divs for spacing
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        let cellHTML = `<div>${day}`;
        
        const event = events.find(e => e.Date === fullDate);
        let cellContent;
        if (event) {
           
            cellContent = `<a href="${event.url}" title="${event.description}">
                               <div>${day}<img src="${event.imageUrl}" alt="${event.description}" style="width: 20px; height: 20px; display: block; margin-top: 5px;"></div>
                           </a>`;
        } else {
            
            cellContent = `<div>${day}</div>`;
        }
        
        calendarDays.innerHTML += cellContent;
    }
}

    


prevMonth.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

generateCalendar(currentMonth, currentYear);
