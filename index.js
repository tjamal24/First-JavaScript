// Get the current hour
const today = new Date();
const currentHour = today.getHours();
let message = "Hello"

// Check the current hour and set the message 
if (currentHour <= 12) {
    message = "Good morning, beautiful world!";
} else if (currentHour > 12 && currentHour <= 17) {
    message = "Hello, beautiful world!";
} else if (currentHour > 17) {
    message = "Good evening, beautiful world!";
}

// Handle the button click event
const handleClick = () => {
    alert(message);
};