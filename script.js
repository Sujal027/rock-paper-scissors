let ys = document.querySelector("#yourScore").innerText;
let cs = document.querySelector("#computerScore").innerText;
ys = Number(ys);
cs = Number(cs);
document.querySelector("#scissors").addEventListener("click", ()=>{
    let e =document.querySelector("#scissors");
   let n = Math.random()*10;
    if(  n <=3)
    {
      c = "scissors";   
    }
    else if( n > 3 && n <=7)
    {
        c = "rock";
    }
    else{
        c = "paper";
    }
 
    let e1 = document.querySelector("#currentStatus");
    if(c == "scissors")
    {
     e1.innerText = "you chose scissors and computer also chose scissors";
    }
    else if(c == "rock")
    {
        e1.innerText="you chose scissors and computer chose rock";

      cs++;
      document.querySelector("#computerScore").innerText = cs;

    }
else{
    e1.innerText= "you chose scissors and computer chose papers";
    ys++;
     document.querySelector("#yourScore").innerText = ys;
}
})
document.querySelector("#rock").addEventListener("click", ()=>{
    let e =document.querySelector("#scissors");
   let n = Math.random()*10;
    if( n <=3)
    {
      c = "scissors";   
    }
    else if( n > 3 && n <=7)
    {
        c = "rock";
    }
    else{
        c = "paper";
    }
 
    let e1 = document.querySelector("#currentStatus");
    if(c == "rock")
    {
     e1.innerText = "you chose rock and computer also chose rock";
    }
    else if(c == "paper")
    {
        e1.innerText="you chose rock and computer chose paper";

      cs++;
      document.querySelector("#computerScore").innerText = cs;

    }
else{
    e1.innerText= "you chose rock and computer chose scissors";
    ys++;
     document.querySelector("#yourScore").innerText = ys;
}
})
document.querySelector("#paper").addEventListener("click", ()=>{
    let e =document.querySelector("#scissors");
   let n = Math.random()*10;
    if(  n <=3)
    {
      c = "scissors";   
    }
    else if( n > 3 && n <=7)
    {
        c = "rock";
    }
    else{
        c = "paper";
    }
 
    let e1 = document.querySelector("#currentStatus");
    if(c == "paper")
    {
     e1.innerText = "you chose paper and computer also chose paper";
    }
    else if(c == "scissors")
    {
        e1.innerText="you chose paper and computer chose scissors";

      cs++;
      document.querySelector("#computerScore").innerText = cs;

    }
else{
    e1.innerText= "you chose paper and computer chose rock";
    ys++;
     document.querySelector("#yourScore").innerText = ys;
}
})
document.querySelector("#reset").addEventListener("click" , () => {
    document.querySelector("#yourScore").innerText = 0;
    document.querySelector("#computerScore").innerText = 0;
    document.querySelector("#currentStatus").innerText = "";
cs = 0;
    ys = 0;
})
