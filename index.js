let redboxchecker=0;
let box= new Array();
let m=15
let size=m*16;
let length=size+"px";
let upm=-m;
let downm=m;
let leftm=-1;
let rightm=1;
let uxxi=rightm;
let odziglux=3;
let odz= new Array();


function uxxutyun(){
  return uxxi;
}
function odzglux(){
  return odziglux;
}
function redboxch(){
  return redboxchecker;
}

const change=ms=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(),ms)
  })
}

function odzizro(){
  odz.splice(0,odz.length);
odz.push({
  index:3,
  color: "darkgreen",
});
odz.push({
  index:2,
  color: "black",
});
odz.push({
  index:1,
  color: "black",
});
odz.push({
  index:0,
  color:"black",
})
}
odzizro();

function odzpush(){
  odz.push({
    index: odz[odz.length-1].index,
  color:"black",
})
}

function odzmove(){
  if(odz[odz.length-1].index!=redboxch()){
    box[odz[odz.length-1].index].style.backgroundColor="seagreen";
  }
  for(let i=odz.length-1;i>0;i--){
    odz[i].index=odz[i-1].index;
  }
  odz[0].index=odz[0].index+uxxutyun();
  odzchek();
  for (let i=0;i<odz.length;i++){
    if(odz[i].index!=redboxch()){
    box[odz[i].index].style.backgroundColor=odz[i].color;
  }}
}




let body=document.createElement("section");
body.style.backgroundColor="seagreen";
body.style.width=length;
body.style.height=length;
body.style.display="flex";
body.style.flexWrap="wrap";
body.style.margin="50px";
body.style.padding="0";
body.style.boxSizing="border-box";
document.body.appendChild(body);


for(let i=0;i<m*m;i++){
  box[i]=document.createElement("div");
  box[i].style.width="16px";
  box[i].style.height="16px";
  box[i].style.border="1px solid black";
  box[i].style.margin="0";
  box[i].style.boxSizing="border-box";
 
  body.appendChild(box[i]);
}



function randoom(){
  
  let k=Math.floor( m*m*Math.random())
  if(k==redboxch()){
    randoom();
  }
  if(k!=redboxch()){
  box[redboxch()].style.backgroundColor=odz[0].color;
  box[k].style.backgroundColor="red";
  redboxchecker=k;
  }
  
}


function odzchek(){
 
  if(odz[0].index%15==0 && odz[1].index%15==14){
    odz[0].index-=m;
  }
  if(odz[0].index%15==14 && odz[1].index%15==0 ){
    odz[0].index+=m;
  }
  if(odz[0].index>m*m-1){
    odz[0].index=odz[0].index-(m*m);
  }
  if(odz[0].index<0){
    odz[0].index=m*m+odz[0].index;
  }
}

function losecheck(){
  for(let i=1;i<odz.length;i++){
    if(odz[i].index==odz[0].index){
      return true;
    }
  }
return false;
}

function redblockcheck(){
  if(odz[0].index==redboxch()){
    odzpush();
    randoom();
  }
}
function boardzero(){
  for(let i=0;i<m*m;i++)
  {
    box[i].style.backgroundColor="seagreen";
  }
}



function move(){
change(100).then(()=>{
  if(losecheck()){
    let asker=confirm("You lose if you want to play again press yes");
    if (asker){
      boardzero();
      uxxi=rightm;
      odzizro();
      randoom();
      move();
    }
    else{
      body.style.display="none";
      alert("Thank you to playing game");
    }

    
  }
  else{
    redblockcheck();
    odzmove();
    move();

  }
 })

}

randoom();
move();

document.addEventListener("keydown",(tar)=>{
 switch(tar.key){
  case 'ArrowDown':
    if(uxxi!=upm)
    uxxi=downm;
    break;
    case 'ArrowUp':
      if(uxxi!=downm)
      uxxi=upm;
      break;
      case 'ArrowLeft':
        if(uxxi!=rightm)
        uxxi=leftm;
        break;
        case 'ArrowRight':
          if(uxxi!=leftm)
        uxxi=rightm;
        break;
 }    
  }

);