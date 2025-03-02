//  bg random color code section 
document.getElementById('theme-color-change').addEventListener('click', 
    function () {        
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    })

    // current date setup
const currentDate = new Date();
const formateDate =currentDate.toLocaleDateString('en-US',{
    month: 'short',
    day: 'numeric',
    year: 'numeric', 
})
document.getElementById('current-date').innerText=formateDate;

// current weekday
const currentWeekday = new Date();
const formateWeekday =currentWeekday.toLocaleDateString('en-Us',{
    weekday: 'short'
})
document.getElementById('current-weekday').innerText=formateWeekday;

// new file location
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discover-btn').addEventListener('click', function () {   
        window.location.href = 'another-page.html';
    });

    // document.getElementById('home-bac').addEventListener('onclick', function () {   
    //     window.location.href = 'index.html';
    // });
});



// checkbox count increase and decrease
document.querySelectorAll('.complete-btn').forEach(button => {button.addEventListener('click', 
    function (event) {
        const count = event.target.innerText === "+" ? -1 : 1;
        const countIncrease = document.getElementById('nav-checkbox-count');
        const countQuantity = parseInt(countIncrease.innerText);
        const newQuantity = Math.max(0, countQuantity + count);
        countIncrease.innerText = newQuantity;

        const headerCountDecrese = document.getElementById('header-checkbox-count');
        const headerCountQuantity = parseInt(headerCountDecrese.innerText);
        const headerNewQuantity = Math.max(0, headerCountQuantity - count);
        headerCountDecrese.innerText = headerNewQuantity;

        

        const massageBox = document.getElementById('massage-box');
        const clearHistoryBtn = document.getElementById('clear-history-btn');


        const massageMidleTitle = this.closest("#massage-part").querySelector("#massage-part-title").innerText;

        // current time
         const currentTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        // Append message
        const message = document.createElement("p");
        message.classList.add('mb-10');
        message.innerText = `You have completed the task ${massageMidleTitle} at ${currentTime}`;
        massageBox.appendChild(message);
        

        // Clear history button
        clearHistoryBtn.addEventListener("click", function () {
        massageBox.innerHTML = ""; // Remove all messages
        });

        alert('board alert successfully');
        
        this.disabled = true;
        this.classList.add("bg-gray-300", "cursor-not-allowed");
    });  
});



