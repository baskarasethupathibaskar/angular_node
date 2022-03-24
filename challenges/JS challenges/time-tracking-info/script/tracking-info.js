let current = document.querySelector(".btn-1");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
let data = [];
fetch(
  "https://raw.githubusercontent.com/Sg108/time-tracking-dashboard/main/data.json"
)
  .then((res) => res.json())
  .then((dat) => {
    data = dat;
    const work1 = document.querySelector(".main-2 h1 span");
    const work2 = document.querySelector(".main-2 h5 span");
    const play1 = document.querySelector(".main-3 h1 span");
    const play2 = document.querySelector(".main-3 h5 span");
    const study1 = document.querySelector(".main-4 h1 span");
    const study2 = document.querySelector(".main-4 h5 span");
    const exercise1 = document.querySelector(".main-5 h1 span");
    const exercise2 = document.querySelector(".main-5 h5 span");
    const social1 = document.querySelector(".main-6 h1 span");
    const social2 = document.querySelector(".main-6 h5 span");
    const selfcare1 = document.querySelector(".main-7 h1 span");
    const selfcare2 = document.querySelector(".main-7 h5 span");

    current.classList.add("active");

    function f1() {
      console.log(data);
      work1.innerHTML = data[0].timeframes.daily.current;
      work2.innerHTML = data[0].timeframes.daily.previous;
      play1.innerHTML = data[1].timeframes.daily.current;
      play2.innerHTML = data[1].timeframes.daily.previous;
      study1.innerHTML = data[2].timeframes.daily.current;
      study2.innerHTML = data[2].timeframes.daily.previous;
      exercise1.innerHTML = data[3].timeframes.daily.current;
      exercise2.innerHTML = data[3].timeframes.daily.previous;
      social1.innerHTML = data[4].timeframes.daily.current;
      social2.innerHTML = data[4].timeframes.daily.previous;
      selfcare1.innerHTML = data[5].timeframes.daily.current;
      selfcare2.innerHTML = data[5].timeframes.daily.previous;
    }
    function f2() {
      work1.innerHTML = data[0].timeframes.weekly.current;
      work2.innerHTML = data[0].timeframes.weekly.previous;
      play1.innerHTML = data[1].timeframes.weekly.current;
      play2.innerHTML = data[1].timeframes.weekly.previous;
      study1.innerHTML = data[2].timeframes.weekly.current;
      study2.innerHTML = data[2].timeframes.weekly.previous;
      exercise1.innerHTML = data[3].timeframes.weekly.current;
      exercise2.innerHTML = data[3].timeframes.weekly.previous;
      social1.innerHTML = data[4].timeframes.weekly.current;
      social2.innerHTML = data[4].timeframes.weekly.previous;
      selfcare1.innerHTML = data[5].timeframes.weekly.current;
      selfcare2.innerHTML = data[5].timeframes.weekly.previous;
    }
    function f3() {
      work1.innerHTML = data[0].timeframes.monthly.current;
      work2.innerHTML = data[0].timeframes.monthly.previous;
      play1.innerHTML = data[1].timeframes.monthly.current;
      play2.innerHTML = data[1].timeframes.monthly.previous;
      study1.innerHTML = data[2].timeframes.monthly.current;
      study2.innerHTML = data[2].timeframes.monthly.previous;
      exercise1.innerHTML = data[3].timeframes.monthly.current;
      exercise2.innerHTML = data[3].timeframes.monthly.previous;
      social1.innerHTML = data[4].timeframes.monthly.current;
      social2.innerHTML = data[4].timeframes.monthly.previous;
      selfcare1.innerHTML = data[5].timeframes.monthly.current;
      selfcare2.innerHTML = data[5].timeframes.monthly.previous;
    }

    f1();

    btn1.addEventListener("click", () => {
      current.classList.remove("active");
      btn1.classList.add("active");
      current = btn1;
      f1();
    });

    btn2.addEventListener("click", () => {
      current.classList.remove("active");
      btn2.classList.add("active");
      current = btn2;
      f2();
    });

    btn3.addEventListener("click", () => {
      current.classList.remove("active");
      btn3.classList.add("active");
      current = btn3;
      f3();
    });
  })
  .catch((err) => console.log(err));
