const body = document.querySelector("body");
const handhour = document.querySelector(".hour")
const handMinute = document.querySelector(".minute")
const handSecond = document.querySelector(".second")
const changeMode = document.querySelector("#changeMode")


changeMode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    const isDarkMode = body.classList.contains("dark");
    // console.log(isDarkMode)
    changeMode.innerText = isDarkMode? "Light Mode":"Dark Mode"
})
function updateTime(){
    const date = new Date();
    const secondToDegree = date.getSeconds() / 60 * 360;
    const MinuteToDegree = date.getMinutes() / 60 * 360;
    const hourToDegree = date.getHours() / 60 * 360;
    // console.log(secondToDegree) 

    //update the rotation
    handSecond.style.transform = `rotate(${secondToDegree}deg)`
    handMinute.style.transform = `rotate(${MinuteToDegree}deg)`
    handhour.style.transform = `rotate(${hourToDegree}deg)`
}


setInterval(updateTime, 1000);
