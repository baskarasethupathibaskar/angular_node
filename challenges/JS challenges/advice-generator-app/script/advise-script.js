const id = document.getElementById('id');
const advice = document.getElementById('advice');
const url = 	"https://api.adviceslip.com/advice";

async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    showData(data);
}
getData(url);
function showData (data){
    id.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
}


document.querySelector('button').addEventListener('click',(e)=>{
    getData(url);
})