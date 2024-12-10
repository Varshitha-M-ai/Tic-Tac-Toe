let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset-btn");
let win_msg=document.querySelector(".win_msg");
let msg=document.querySelector("#msg");
let new_btn=document.querySelector("#newgame-btn");

let turnO=true;
let count=0;

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enablebtn();
    win_msg.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        
        let winner=checkWinner();
        if(count===9 && !winner){
            gamedraw();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    if( pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            console.log("Winner is",pos1Val);
            showWinner(pos1Val);
        }
      }
    }
};

const gamedraw=()=>{
    msg.innerText="It's a Draw.";
    win_msg.classList.remove("hide");
    disablebtn();

}

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    win_msg.classList.remove("hide");
    disablebtn();
}

new_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);