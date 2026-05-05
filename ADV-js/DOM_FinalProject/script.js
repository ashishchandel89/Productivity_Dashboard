function openFeatures() {
  let allElem = document.querySelectorAll(".elem");
  let allFullElemPage = document.querySelectorAll(".fullElem");
  let fullElemPageBackButton = document.querySelectorAll(".fullElem .back");

  let obj = {
    img1: "https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZjF4cDFpemx6ZW92cnJleTFza2d3NHgxZ283b295cHRxc3dzZXgzNCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/IGL5GFRvVTtK8O9l7h/giphy.webp",
    img2: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdoNHltMmd4dmo2bW41MzBkNzVtYzBoOHlnd3o1ZWJoZng1NzRqMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iBlgTxSS20NLdCxvDW/giphy.webp",
    img3: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I1d2pqNXlhN3p1bmI2MzltbWViamp4Z3Z4MWQ3MjI1cXpoYWMyOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmvU3GAJay6F60g/giphy.webp",
    img4: "https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXJ1d2xiODgxcjlyZnM2YXNudTQzbmJ2MG5iZzRkam1leXhkOW12ZiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/2DpqiyUXjK8sG45anH/giphy.webp",
    img5: "https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWJlZnVxeDVud2hkdjk1b2l3MGg5bWhlYTM2cmFnajhpdHhtYWNiMSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/sWz7nJgmjpUHE61MW8/giphy.webp",
  };
  let images = Object.values(obj);

  allElem.forEach(function (elem, index) {
    if (index == 2) {
      elem.style.backgroundImage = `url(${images[index]})`;
      elem.style.backgroundSize = "cover";
    }
    elem.addEventListener("mouseenter", function () {
      elem.style.backgroundImage = `url(${images[index]})`;
      elem.style.backgroundSize = "cover";
    });
    elem.addEventListener("mouseleave", function () {
      if (index !== 2) {
        elem.style.backgroundImage = "";
      }
    });
    elem.addEventListener("click", function () {
      allFullElemPage[elem.id].style.display = "block";
    });
  });
  fullElemPageBackButton.forEach(function (back) {
    back.addEventListener("click", function () {
      allFullElemPage[back.id].style.display = "none";
    });
  });
}
openFeatures();

function todoList() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form input");
  let taskDetails = document.querySelector(".addTask form textarea");
  let taskCheckBox = document.querySelector(".addTask form #check");
  var currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task List is Empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");
    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task"> 
       <div class="top-task">  
        <h5>${elem.task} <span class="${elem.imp}">imp !</span></h5>
        <button id=${idx}>Mark as Completed</button>  
    </div>
     <div class="detail">
      <p>${elem.details}</p>
    </div>
    </div>`;
    });
    allTask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });

    document.querySelectorAll(".top-task").forEach(function (top) {
      top.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") return;
        let detail = top.parentElement.querySelector(".detail");
        if (detail.innerText.trim() === "") {
          detail.style.display = "none";
          return;
        }
        if (detail.style.display === "block") {
          detail.style.display = "none";
        } else {
          detail.style.display = "block";
        }
      });
    });
  }
  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      details: taskDetails.value,
      imp: taskCheckBox.checked,
    });
    renderTask();

    taskInput.value = "";
    taskDetails.value = "";
    taskCheckBox.checked = false;
  });
}
todoList();

function dailyPlanner() {
  let bottom = document.querySelector(".bottom-planner");
  let plan = document.querySelector(".bottom-planner .plan");
  let plannerSum = "";
  let plannerObject = {};
  let planData = JSON.parse(localStorage.getItem("planData")) || {};
  let hrs = Array.from({ length: 18 }, function (dets, idx) {
    return `${6 + idx}:00 - ${7 + idx}:00`;
  });
  hrs.forEach(function (elem, idx) {
    let savedData = planData[idx] || "";
    plannerSum =
      plannerSum +
      `<div class="plan">
              <h4>${elem}</h4>
              <input type="text" placeholder="..." id="${idx}" class="plan-placeholder" value="${savedData}">
            </div>
      `;
  });
  bottom.innerHTML = plannerSum;

  let plannerInput = document.querySelectorAll(".plan input");
  plannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      planData[elem.id] = elem.value;
      localStorage.setItem("planData", JSON.stringify(planData));
    });
  });
}
dailyPlanner();

function motivationalQuotes() {
  let motivation_paragraph = document.querySelector(".motivational-thought  p");
  let motivation_author = document.querySelector(".motivational-thought  h4");
  async function fetch_MotivationalQuotes() {
    try {
      let response = await fetch(`https://api.api-ninjas.com/v2/randomquotes`, {
        method: "GET",
        headers: { "X-Api-Key": "zV6HDbQnr07qWFdrqStXQ8rDB3QH1awXph60cU5q" },
      });
      let data = await response.json();
      console.log(data);
      motivation_paragraph.innerHTML = data[0].quote;
      motivation_author.innerHTML = "<b>-</b> " + data[0].author;
    } catch (Exception) {
      console.log(Exception);
    }
  }
  fetch_MotivationalQuotes();
}
motivationalQuotes();

function pomodoroTimer() {
  let h2 = document.querySelector(".under-pomo-timer h2");
  let btnStartPause = document.querySelector(".btn-timer"); 
  let toggleImg = document.querySelector(".btn-timer img"); 
  let underTimer = document.querySelector(".under-pomo-timer");
  let bottomTimer = document.querySelector(".bottom-timer");
  let btnReset=document.querySelector(".reset-timer");
  let h3=document.querySelector(".under-pomo-timer h3");
  let interval = null;
  let isRunning = false;
  let totalSeconds = 25 * 60;
  let isWorkSession=true;
  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    h2.innerHTML = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`;
  }
  function startTimer() {
    clearInterval(interval);
    if(isWorkSession){
    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        clearInterval(interval);
        totalSeconds = 5 * 60;
        updateTimer();
        isWorkSession = false;
        isRunning = false;
        h3.innerHTML="Break Session"
        toggleImg.src = "./start3.png"; 
        underTimer.classList.remove("active"); 
        bottomTimer.classList.remove("active");

      interval = null;
      }
    }, 1000);
  }
  else{
     interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        clearInterval(interval);
        totalSeconds = 25 * 60;
        updateTimer();
        isWorkSession = true;
        h3.innerHTML="Work Session";
        isRunning = true;
        toggleImg.src = "./start3.png"; 
        underTimer.classList.remove("active"); 
        bottomTimer.classList.remove("active");
      }
    }, 1000);
  }
}


  btnStartPause.addEventListener("click", function () {
    if (!isRunning) {
      startTimer();
      isRunning = true;
      toggleImg.src = "./pause3.png"; 
      underTimer.classList.add("active"); 
      bottomTimer.classList.add("active");
    } 
    else {
      clearInterval(interval);
      interval = null;
      isRunning = false;
      toggleImg.src = "./start3.png"; 
      underTimer.classList.remove("active"); 
      bottomTimer.classList.remove("active");

    }
  });
  
  btnReset.addEventListener('click',function(){
    totalSeconds=25*60;
    clearInterval(interval);
    updateTimer();
    toggleImg.src="./start3.png";
    underTimer.classList.remove("active");
     bottomTimer.classList.remove("active");

  })

}
pomodoroTimer();
