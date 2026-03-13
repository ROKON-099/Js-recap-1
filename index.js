function changetext(){
          document.getElementById("text").innerText="text changed";
}

function increment(){
  let number = document.getElementById("count").innerText;
  number++;
  document.getElementById("count").innerText = number;
}


function increase(run){
    let score = document.getElementById("score");
    score.innerText = Number(score.innerText) + run;
}