// Background random color change
document.getElementById('theme-color-change').addEventListener('click', function () {        
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Current date setup
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});
document.getElementById('current-date').innerText = formattedDate;

const formattedWeekday = currentDate.toLocaleDateString('en-US', {
    weekday: 'short'
});
document.getElementById('current-weekday').innerText = formattedWeekday;

// Redirect on button click
document.getElementById('discover-btn').addEventListener('click', function () {
    window.location.href = 'another-page.html';
});

// Checkbox count increase and decrease
document.querySelectorAll('#first-complete-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        const countIncrease = document.getElementById('nav-checkbox-count');
        const headerCountDecrease = document.getElementById('header-checkbox-count');

        let countQuantity = parseInt(countIncrease.innerText);
        let headerCountQuantity = parseInt(headerCountDecrease.innerText);

        // Decrease assigned tasks, increase completed count
        countIncrease.innerText = Math.max(0, countQuantity + 1);
        headerCountDecrease.innerText = Math.max(0, headerCountQuantity - 1);

        // Disable button after click
        this.disabled = true;

        // Get task title
        const taskCard = this.closest("#massage-part");
        if (taskCard) {
            const taskTitle = taskCard.querySelector("#massage-part-title").innerText;

            // Get current time
            const currentTime = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            // Append task completion message with time to Activity Log
            const messageBox = document.getElementById('massage-box');
            const message = document.createElement("p");
            message.innerText = `You have completed the task "${taskTitle}" at ${currentTime}`;
            messageBox.appendChild(message);
        }

        alert('Board updated successfully!');
    });
});

// Clear history button event
document.getElementById('clear-history-btn').addEventListener("click", function () {
    document.getElementById('massage-box').innerHTML = ""; // Remove all messages
});


