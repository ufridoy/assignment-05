//  bg random color code section 
document.getElementById('theme-color-change').addEventListener('click', 
    function () {        
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    })


document.getElementById('first-complete-btn').addEventListener('click', 
    function (event) {

        const count = event.target.innerText === "+" ? -1 : 1; // 1 || -1
        const countIncrease = document.getElementById("nav-checkbox-count");
    const countQuantity = parseInt(countIncrease.innerText);
    const newQuantity = Math.max(0, countQuantity + count);
    countIncrease.innerText = newQuantity;
    
})
