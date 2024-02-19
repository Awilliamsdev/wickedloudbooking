let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function generateCalendar(month, year) {
    calendarDays.innerHTML = "";
    monthYear.innerText = `${months[month]} ${year}`;
    
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += "<div></div>"; // Empty divs for spacing
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.innerHTML += `<div>${day}</div>`;
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
