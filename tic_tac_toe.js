console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let gameoverresult=false;

//Function to change the turn
const changeTurn=()=>{
    return turn==="X"? "0" : "X";
    
}
// 0 1 2
// 3 4 5 
// 6 7 8
//Function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    
    let outerWidth=window.outerWidth;
    // console.log("outer Width "+outerWidth);
    let wins;
    if(outerWidth>900)
    { 
        wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
         ]
   }
   else{
    wins=[
        [0,1,2,9,9,0],
        [3,4,5,9,27,0],
        [6,7,8,9,45,0],
        [0,3,6,-9,27,90],
        [1,4,7,9,27,90],
        [2,5,8,27,27,90],
        [0,4,8,9,27,45],
        [2,4,6,9,27,135]
    ]
   }
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText===boxtexts[e[2]].innerText)&&boxtexts[e[0]].innerText!=='')
        {
            gameover.play();
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" won";
            gameoverresult=true;
            
            document.querySelector(".img").getElementsByTagName("img")[0].style.width="15vw";
            if(outerWidth>900)
            { 
            document.querySelector(".line").style.width="20vw";
            }
            else{
                document.querySelector(".line").style.width="36vw"; 
            }
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }

    })
}

//Game Logic
// music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    // element is selected box
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(gameoverresult===false)
            {
                //[0] first element of class name of info
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})

//Add onclick listener to reset
// let reset=document.querySelector("#reset");
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    document.querySelector(".img").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0";
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;


})