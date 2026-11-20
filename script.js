// JavaScript for E-Waste Pickup project

// ---------- 1. Reward points calculator ----------
function calculatePoints() {
    // get quantity of each item from the input boxes
    var phone = Number(document.getElementById("phone").value);
    var laptop = Number(document.getElementById("laptop").value);
    var keyboard = Number(document.getElementById("keyboard").value);
    var powerbank = Number(document.getElementById("powerbank").value);
    var cable = Number(document.getElementById("cable").value);

    // total number of items
    var totalItems = phone + laptop + keyboard + powerbank + cable;

    // points = quantity x points per item
    var points = (phone * 50) + (laptop * 120) + (keyboard * 20) + (powerbank * 40) + (cable * 10);

    // bonus of 10% if user gives 5 or more items
    if (totalItems >= 5) {
        points = points + points * 0.1;
    }

    document.getElementById("result").innerHTML =
        "Total items: " + totalItems + " | Reward points: " + points;

    // show a message based on the points
    var msg = document.getElementById("message");
    if (points == 0) {
        msg.innerHTML = "Please select some items first.";
    } else if (points < 100) {
        msg.innerHTML = "Good start! You are a Starter Recycler.";
    } else if (points < 300) {
        msg.innerHTML = "Great! You are a Green Hero.";
    } else {
        msg.innerHTML = "Awesome! You are an Eco Champion.";
    }
}

// ---------- 2. Pickup form validation ----------
function submitForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var date = document.getElementById("date").value;
    var confirmBox = document.getElementById("confirm");

    // check that no field is empty
    if (name == "" || address == "" || contact == "" || date == "") {
        confirmBox.className = "error";
        confirmBox.innerHTML = "Please fill all the fields.";
        return false;
    }

    // contact number must be exactly 10 digits
    if (contact.length != 10 || isNaN(contact)) {
        confirmBox.className = "error";
        confirmBox.innerHTML = "Contact number must be 10 digits.";
        return false;
    }

    // pickup date must be after today
    var today = new Date();
    var selected = new Date(date);
    if (selected <= today) {
        confirmBox.className = "error";
        confirmBox.innerHTML = "Please select a future date.";
        return false;
    }

    // everything is correct
    confirmBox.className = "";
    confirmBox.innerHTML = "Thank you " + name + "! Your pickup is booked for " + date + ".";
    document.getElementById("pickupForm").reset();
    return false;   // stop page from reloading
}

// ---------- 3. Accordion ----------
var buttons = document.getElementsByClassName("accordion");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // the panel is the element just after the button
        var panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}