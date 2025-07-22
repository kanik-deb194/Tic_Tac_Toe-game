let boxes=document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
 let msgContainer = document.querySelector(".msg-container");
 let msg =  document.querySelector("#msg");

let turn0 = true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBox = () =>{
    for(box of boxes){
        box.disabled =  true;
    }
    
}

const enableBox = () =>{
    for(box of boxes){
        box.disabled =  false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
    
}

const resetGame = ()=>{
    turn0 = true;
    enableBox();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = ()=>{
    for(let pattern of winpattern){

            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3!=""){
                if(pos1=== pos2 && pos2 === pos3){
                    console.log("winner",pos1);
                    disableBox();
                    showWinner(pos1);
                }
            }
    }
};

const showWinner = (winner) =>{
msg.innerHTML = `Congratulations,winner is ${winner}`;
msgContainer.classList.remove("hide") ;
}

reset.addEventListener("click",resetGame);

