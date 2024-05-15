const daysContainer = document.getElementById("daysContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const monthYear = document.getElementById("monthYear");
const dateInput = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");

let currentDate = new Date();
let selectedDate = null;

function handleDayClick(day) {
    selectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
    );
    dateInput.value = selectedDate.toLocaleDateString("en-US");
    calendar.style.display = "none";
    renderCalendar();
}

function createDayElement(day) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");

    if (date.toDateString() === new Date().toDateString()) {
        dayElement.classList.add("current");
    }
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
        dayElement.classList.add("selected");
    }

    dayElement.textContent = day;
    dayElement.addEventListener("click", () => {
        handleDayClick(day);
    });
    daysContainer.appendChild(dayElement);
}

function renderCalendar() {
    daysContainer.innerHTML = "";
    const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );
    const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );

    monthYear.textContent = `${currentDate.toLocaleString("default", {
        month: "long"
    })} ${currentDate.getFullYear()}`;

    for (let day = 1; day <= lastDay.getDate(); day++) {
        createDayElement(day);
    }
}

prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

dateInput.addEventListener("click", () => {
    calendar.style.display = "block";
    positionCalendar();
});

document.addEventListener("click", (event) => {
    if (!dateInput.contains(event.target) && !calendar.contains(event.target)) {
        calendar.style.display = "none";
    }
});

function positionCalendar() {
    const inputRect = dateInput.getBoundingClientRect();
    calendar.style.top = inputRect.bottom + "px";
    calendar.style.left = inputRect.left + "px";
}

window.addEventListener("resize", positionCalendar);

renderCalendar();


// modify search box start
document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code

    // Function to show the search details container
    function showSearchDetails(from, to, departureDate, passengerCount) {
        document.getElementById("fromLocation").textContent = from;
        document.getElementById("toLocation").textContent = to;
        document.getElementById("departureDate").textContent = departureDate;
        document.getElementById("passengerCount").textContent =
            passengerCount;
        document
            .getElementById("searchDetailsContainer")
            .classList.add("active");
    }

    // Function to modify the search
    function modifySearch() {
        // Implement your modify search logic here
        // For example, you can reset input fields or show/hide search options
        // You can customize this function according to your requirements
    }

    // Event listener for the search button
    document
        .querySelector(".btn_theme")
        .addEventListener("click", function () {
            var fromLocation = document.getElementById("input1").value;
            var toLocation = document.getElementById("input2").value;
            var departureDate = document.querySelector(
                ".Journey_date input[type='date']"
            ).value;
            var passengerCount = document.querySelector(
                ".numberOfPassenger b"
            ).textContent;

            showSearchDetails(
                fromLocation,
                toLocation,
                departureDate,
                passengerCount
            );
        });
});
// modify search box ends
document.addEventListener("DOMContentLoaded", function () {
    var inputElements = document.querySelectorAll(".input-container input");
    var dropdowns = document.querySelectorAll(".dropdown");

    inputElements.forEach(function (input, index) {
        var dropdown = dropdowns[index];
        var items = dropdown.getElementsByTagName("li");

        input.addEventListener("click", function () {
            dropdown.style.display = "block";
        });

        input.addEventListener("input", function () {
            var filter = input.value.toLowerCase();
            for (var i = 0; i < items.length; i++) {
                var text = items[i].textContent.toLowerCase();
                if (text.indexOf(filter) > -1) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
            dropdown.style.display = "block";
        });

        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target) && e.target !== input) {
                dropdown.style.display = "none";
            }
        });

        dropdown.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                input.value = e.target.textContent;
                dropdown.style.display = "none";
            }
        });
    });
});

const inputBox = document.querySelector(".input-box");
const options = document.querySelector(".options");

inputBox.addEventListener("click", function () {
    options.style.display =
        options.style.display === "block" ? "none" : "block";
});


// function updateSelectedStyle(input) {
//   input.classList.add("input-selected-style");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var inputElements = document.querySelectorAll(".input-box-text");
//   var dropdowns = document.querySelectorAll(".dropdown");

//   inputElements.forEach(function (input, index) {
//     var dropdown = dropdowns[index];
//     var items = dropdown.getElementsByTagName("li");

//     input.addEventListener("click", function () {
//       dropdown.style.display = "block";
//     });

//     input.addEventListener("input", function () {
//       var filter = input.value.toLowerCase();
//       for (var i = 0; i < items.length; i++) {
//         var text = items[i].textContent.toLowerCase();
//         if (text.indexOf(filter) > -1) {
//           items[i].style.display = "";
//         } else {
//           items[i].style.display = "none";
//         }
//       }
//       dropdown.style.display = "block";
//     });

//     document.addEventListener("click", function (e) {
//       if (!dropdown.contains(e.target) && e.target !== input) {
//         dropdown.style.display = "none";
//       }
//     });

//     dropdown.addEventListener("click", function (e) {
//       if (e.target.tagName === "LI") {
//         input.value = e.target.textContent;
//         dropdown.style.display = "none";
//         updateSelectedStyle(input);
//       }
//     });
//   });
// });

const numberOfPassenger = document
    .getElementsByClassName("numberOfPassenger")[0]
    .innerText.match(/\d/g)[0];

const cross = document.getElementById("crossCalender");
const calendarInput = document.getElementById("calendarInput");

calendarInput.addEventListener("click", () => {
    const roundTrip = document.getElementById("roundtrip-tab");
    const oneway = document.getElementById("oneway-tab");
    const tabToActivate = document.querySelector(".open-it");
    const tabToClose = document.querySelector(".close-it");
    activateTab(tabToActivate, tabToClose, roundTrip, oneway);
});

function activateTab(open, close, roundTrip, oneway) {
    open.classList.remove("fade");
    open.classList.add("active");
    close.classList.add("fade");
    close.classList.remove("active");
    roundTrip.classList.add("active");
    oneway.classList.remove("active");
}

cross.addEventListener("click", () => {
    const roundTrip = document.getElementById("roundtrip-tab");
    const oneway = document.getElementById("oneway-tab");
    const tabToClose = document.querySelector(".open-it");
    const tabToActivate = document.querySelector(".close-it");
    closeTab(tabToClose, tabToActivate, oneway, roundTrip);
});

function closeTab(close, open, oneway, roundTrip) {
    close.classList.remove("active");
    close.classList.add("fade");
    open.classList.add("active");
    open.classList.remove("fade");
    oneway.classList.add("active");
    roundTrip.classList.remove("active");
}

function updateSelectedStyle(input) {
    var options = document
        .getElementById("city")
        .getElementsByTagName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].value === input.value) {
            input.classList.add("selected");
            return;
        }
    }
    input.classList.remove("selected");
}

// akbar travel list
input.onfocus = function () {
    city.style.display = "block";
    input.style.borderRadius = "5px 5px 0 0";
};
for (let option of city.options) {
    option.onclick = function () {
        input.value = option.value;
        city.style.display = "none";
        input.style.borderRadius = "5px";
    };
}

input.oninput = function () {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (let option of city.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
};
var currentFocus = -1;
input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++;
        addActive(city.options);
    } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(city.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (city.options) city.options[currentFocus].click();
        }
    }
};

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}
