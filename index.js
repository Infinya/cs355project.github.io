var currentSlotId="";
var tableCells=document.getElementsByTagName("td");
var slotNum=42;
var index=-1;
var colorMatched=0;
// all column elements
var colNum=-1;
var col0=document.getElementsByClassName("col0");
var col1=document.getElementsByClassName("col1");
var col2=document.getElementsByClassName("col2");
var col3=document.getElementsByClassName("col3");
var col4=document.getElementsByClassName("col4");
var col5=document.getElementsByClassName("col5");
var col6=document.getElementsByClassName("col6");
var col0Color=[];
var col1Color=[];
var col2Color=[];
var col3Color=[];
var col4Color=[];
var col5Color=[];
var col6Color=[];
var col0AvlSpot=6, col1AvlSpot=6,col2AvlSpot=6,col3AvlSpot=6,col4AvlSpot=6,col5AvlSpot=6,col6AvlSpot=6;
//All row elements
var rowNum=-1;
var row0=["slot00","slot01","slot02","slot03","slot04","slot05","slot06"];
var row1=["slot10","slot11","slot12","slot13","slot14","slot15","slot16"];
var row2=["slot20","slot21","slot22","slot23","slot24","slot25","slot26"];
var row3=["slot30","slot31","slot32","slot33","slot34","slot35","slot36"];
var row4=["slot40","slot41","slot42","slot43","slot44","slot45","slot46"];
var row5=["slot50","slot51","slot52","slot53","slot54","slot55","slot56"];
var row0Color=["white","white","white","white","white","white","white"];
var row1Color=["white","white","white","white","white","white","white"];
var row2Color=["white","white","white","white","white","white","white"];
var row3Color=["white","white","white","white","white","white","white"];
var row4Color=["white","white","white","white","white","white","white"];
var row5Color=["white","white","white","white","white","white","white"];

var board=["white","white","white","white","white","white","white",
                "white","white","white","white","white","white","white",
                "white","white","white","white","white","white","white",
                "white","white","white","white","white","white","white",
                "white","white","white","white","white","white","white",
                "white","white","white","white","white","white","white",
            ]
       


var moves=[];

var colorOrder=[];

function takeback(){
   
    var undoId=moves.pop();
    colorOrder.pop();
    document.getElementById(undoId).style.setProperty("background-color","white");
    slotNum++;
    for(var i=0;i<tableCells.length;i++){
        var slotId=tableCells[i].getAttribute("id");
        if(undoId==slotId){
            index=i;
            break;
        }
    }
    colNum=index%7;
    switch(colNum){
        case 0:
            col0AvlSpot++
            col0Color.pop()
			//console.log(colNum, col0AvlSpot);
			gameBoard.col0[col0AvlSpot-1]="white";
            break;
        case 1:
            col1AvlSpot++
            col1Color.pop()
			console.log(colNum);
			gameBoard.col1[col1AvlSpot-1]="white";
            break;
        case 2:
            col2AvlSpot++
            col2Color.pop()
		gameBoard.col2[col2AvlSpot-1]="white";
            break;
        case 3:
            col3AvlSpot++
            col3Color.pop()
			gameBoard.col3[col3AvlSpot-1]="white";
            break;
        case 4:
            col4AvlSpot++
            col4Color.pop()
			gameBoard.col4[co40AvlSpot-1]="white";
            break;
        case 5:
            col5AvlSpot++
            col5Color.pop()
			gameBoard.col5[col5AvlSpot-1]="white";
            break;
        case 6:
            col6AvlSpot++
            col6Color.pop()
			gameBoard.col6[col6AvlSpot-1]="white";
            break;
        default:
            break;
    }
    rowNum=Math.floor(index/7);
    var color="white"
    switch(rowNum){
        case 0:
            row0Color[colNum]=color;
            break;
        case 1:
            row1Color[colNum]=color;
            break;
        case 2:
            row2Color[colNum]=color;
            break;
        case 3:
            row3Color[colNum]=color;
            break;
        case 4:
            row4Color[colNum]=color;
            break;
        case 5:
            row5Color[colNum]=color;
            break;
        default:
            return; 
    }
}
function reset(){
    for(var i=0;i<tableCells.length;i++){
        tableCells[i].style.setProperty("background-color","white")
    }
    slotNum=42;
    col0AvlSpot=6;
    col1AvlSpot=6;
    col2AvlSpot=6;
    col3AvlSpot=6;
    col4AvlSpot=6;
    col5AvlSpot=6;
    col6AvlSpot=6;

    col0Color=[];
    col1Color=[];
    col2Color=[];
    col3Color=[];
    col4Color=[];
    col5Color=[];
    col6Color=[];

    row0Color=["white","white","white","white","white","white","white"];
    row1Color=["white","white","white","white","white","white","white"];
    row2Color=["white","white","white","white","white","white","white"];
    row3Color=["white","white","white","white","white","white","white"];
    row4Color=["white","white","white","white","white","white","white"];
    row5Color=["white","white","white","white","white","white","white"];

    board=["white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            ]

    moves=[];
    colorOrder=[];
	for(var i =0 ; i<6 ; i++){
		gameBoard.col0[i]="white";
		gameBoard.col1[i]="white";
		gameBoard.col2[i]="white";
		gameBoard.col3[i]="white";
		gameBoard.col4[i]="white";
		gameBoard.col5[i]="white";
		gameBoard.col6[i]="white";

	}

} 
function myFunction(event) { 
    
    var s=event.target.getAttribute("id");
    if(s=="gametable") return;
    for(var i=0;i<tableCells.length;i++){
        var slotId=tableCells[i].getAttribute("id");
        if(s==slotId){
            index=i;
            break;
        }
    }
    colNum=index%7;
    rowNum=Math.floor(index/7);
    switch(colNum){
        case 0:
            var slot=col0[col0AvlSpot-1].getAttribute("id");
            currentSlotId=col0[col0AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col0[col0AvlSpot-1]="red";
                slotNum--;
                col0AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col0[col0AvlSpot-1]="yellow";
                slotNum--;
                col0AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 1:
            var slot=col1[col1AvlSpot-1].getAttribute("id");
            currentSlotId=col1[col1AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col1[col1AvlSpot-1]="red";
                slotNum--;
                col1AvlSpot--;
                colorOrder.push("red");
				
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col1[col1AvlSpot-1]="yellow";
                slotNum--;
                col1AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 2:
            var slot=col2[col2AvlSpot-1].getAttribute("id");
            currentSlotId=col2[col2AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col2[col2AvlSpot-1]="red";
                slotNum--;
                col2AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col2[col2AvlSpot-1]="yellow";
                slotNum--;
                col2AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 3:
            var slot=col3[col3AvlSpot-1].getAttribute("id");
            currentSlotId=col3[col3AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col3[col3AvlSpot-1]="red";
                slotNum--;
                col3AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col3[col3AvlSpot-1]="yellow";
                slotNum--;
                col3AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 4:
            var slot=col4[col4AvlSpot-1].getAttribute("id");
            currentSlotId=col4[col4AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col4[col4AvlSpot-1]="red";
                slotNum--;
                col4AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col4[col4AvlSpot-1]="yellow";
                slotNum--;
                col4AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 5:
            var slot=col5[col5AvlSpot-1].getAttribute("id");
            currentSlotId=col5[col5AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col5[col5AvlSpot-1]="red";	
                slotNum--;
                col5AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col5[col5AvlSpot-1]="yellow";
                slotNum--;
                col5AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        case 6:
            var slot=col6[col6AvlSpot-1].getAttribute("id");
            currentSlotId=col6[col6AvlSpot-1].getAttribute("id");
            moves.push(currentSlotId);
            if(slotNum%2==0){
                document.getElementById(slot).style.setProperty("background-color","red");
				gameBoard.col6[col6AvlSpot-1]="red";
                slotNum--;
                col6AvlSpot--;
                colorOrder.push("red");
            }
            else{
                document.getElementById(slot).style.setProperty("background-color","yellow");
				gameBoard.col6[col6AvlSpot-1]="yellow";
                slotNum--;
                col6AvlSpot--;
                colorOrder.push("yellow")
            }
            break;
        default:
            return; 
    }
}
function isWin(){
    checkVertically();
    checkHorizontally();
    checkDiagonally();
}
function checkVertically(){
    var slotEle=document.getElementById(currentSlotId);
    var color=slotEle.style.getPropertyValue("background-color");
    //if(slotNum===0) alert("Draw play again!");
    if(slotNum==0){
        window.confirm("It is draw! Start a new game");                
        if( Button.confirm() ) restart();
        else return;
    }
    // Check vertical
    switch(colNum){
        case 0:
            col0Color.push(color);
            break;
        case 1:
            col1Color.push(color);
            break;
        case 2:
            col2Color.push(color);
            break;
        case 3:
            col3Color.push(color);
            break;
        case 4:
            col4Color.push(color);
            break;
        case 5:
            col5Color.push(color);
            break;
        case 6:
            col6Color.push(color);
            break;
        default:
            return; 
    }
    switch(colNum){
        case 0:
            colorMatched=0;
            for(var i=1;i<=col0Color.length;i++){
                var temp=col0[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 1:
            colorMatched=0;
            for(i=1;i<=col1Color.length;i++){
                var temp=col1[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 2:
            colorMatched=0;
            for(i=1;i<=col2Color.length;i++){
                var temp=col2[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 3:
            colorMatched=0;
            for(i=1;i<=col3Color.length;i++){
                var temp=col3[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 4:
            colorMatched=0;
            for(i=1;i<=col4Color.length;i++){
                var temp=col4[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 5:
            colorMatched=0;
            for(i=1;i<=col5Color.length;i++){
                var temp=col5[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        case 6:
            colorMatched=0;
            for(i=1;i<=col6Color.length;i++){
                var temp=col6[6-i].getAttribute("id");
                var colorChecking=document.getElementById(temp).style.getPropertyValue("background-color");
                if(color==colorChecking) colorMatched++;
                else colorMatched=0;
            }
            break;
        default:
            return; 
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
       // window.alert(color+" wins the game!");
        console.log("Vertical 4 in a row!");
        var val=window.confirm("It is "+color+" wins the game! Start a new game?")
        if(val==true) restart();
        else return;
    }
}
function checkHorizontally(){
    var slotEle=document.getElementById(currentSlotId);
    var color=slotEle.style.getPropertyValue("background-color");
  //  if(slotNum===0) alert("Draw play again!");
    for(var i=0;i<tableCells.length;i++){
        var slotId=tableCells[i].getAttribute("id");
        if(currentSlotId==slotId){
            index=i;
            break;
        }
    }
    rowNum=Math.floor(index/7);
    switch(rowNum){
        case 0:
            row0Color[colNum]=color;
            break;
        case 1:
            row1Color[colNum]=color;
            break;
        case 2:
            row2Color[colNum]=color;
            break;
        case 3:
            row3Color[colNum]=color;
            break;
        case 4:
            row4Color[colNum]=color;
            break;
        case 5:
            row5Color[colNum]=color;
            break;
        default:
            return; 
    }
    switch(rowNum){
        case 0:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row0Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 1:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row1Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 2:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row2Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 3:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row3Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 4:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row4Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 5:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(color==row5Color[i]) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        default:
            return; 
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
      //  window.alert(color+" wins the game!");
      console.log("Horizantal 4 in a row!");
        var val=window.confirm("It is "+color+" wins the game! Start a new game?")
        if(val==true) restart();
        else return;
    }
}
function checkDiagonally(){
    
    var diagonalSet=[]; //  represent \
    var diagonalSet2=[]; // represent /
    var slotEle=document.getElementById(currentSlotId);
    var color=slotEle.style.getPropertyValue("background-color");
    for(i=0;i<tableCells.length;i++){
        var slotId=tableCells[i].getAttribute("id");
        if(currentSlotId==slotId){
            index=i;
            break;
        }
    }
    board[index]=color;
    //  \ diagonal with given index
    colNum=index%7;
    rowNum=Math.floor(index/7);
    var temp=index;
    while(rowNum>=0&&colNum>=0){
        diagonalSet.unshift(temp)
        rowNum--;
        colNum--;
        temp-=8;
    }
    var temp=index+8;
    colNum=(index%7)+1;
    rowNum=(Math.floor(index/7))+1;
    while(rowNum<=5&&colNum<=6){
        diagonalSet.push(temp);
        colNum++;
        rowNum++;
        temp+=8;
    }  
    // / diagonal with given index
    colNum=index%7;
    rowNum=Math.floor(index/7);
    var temp=index;
    while(rowNum>=0&&colNum<=6){
        diagonalSet2.unshift(temp)
        rowNum--;
        colNum++;
        temp-=6;
    }
    var temp=index+6;
    colNum=(index%7)+1;
    rowNum=(Math.floor(index/7))+1;
    while(rowNum<=5&&colNum>=0){
        diagonalSet2.push(temp);
        colNum--;
        rowNum++;
        temp+=6;
    } 
    //  \ diagonal check
    colorMatched=0;
    for(i=0;i<diagonalSet.length;i++){
        if(color==board[diagonalSet[i]]) colorMatched++;
        else colorMatched=0;
        if(colorMatched==4) break;
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
    //    alert(color+" wins the game!");
        console.log("Left diagonal 4 in a row!");
        var val=window.confirm("It is "+color+" wins the game! Start a new game?")
        if(val==true) restart();
        else return;
    } 
    // / diagonal check
    colorMatched=0;
    for(var i=0;i<diagonalSet2.length;i++){
        if(color==board[diagonalSet2[i]]) colorMatched++;
        else colorMatched=0;
        if(colorMatched==4) break;
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
    //     alert(color+" wins the game!");
        console.log("Right diagonal 4 in a row!");
        var val=window.confirm("It is "+color+" wins the game! Start a new game?")
        if(val==true) restart();
        else return;
    }
}
function restart(){
    console.log("Restart function begins");
    for(var i=0;i<tableCells.length;i++){
        tableCells[i].style.setProperty("background-color","white")
    }
	
    slotNum=42;
    col0AvlSpot=6;
    col1AvlSpot=6;
    col2AvlSpot=6;
    col3AvlSpot=6;
    col4AvlSpot=6;
    col5AvlSpot=6;
    col6AvlSpot=6;

    col0Color=[];
    col1Color=[];
    col2Color=[];
    col3Color=[];
    col4Color=[];
    col5Color=[];
    col6Color=[];
	
    row0Color=["white","white","white","white","white","white","white"];
    row1Color=["white","white","white","white","white","white","white"];
    row2Color=["white","white","white","white","white","white","white"];
    row3Color=["white","white","white","white","white","white","white"];
    row4Color=["white","white","white","white","white","white","white"];
    row5Color=["white","white","white","white","white","white","white"];

    board=["white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            ]
    moves=[];
    colorOrder=[];
    colorMatched=0;

   // color="";
}
/*function showMove(){
    console.log("Testing..... ");
    for(var i=1;i<=moves.length;i++){
        console.log("Move : "+i+" "+moves[i-1]+" with color: "+colorOrder[i-1]);
    }
}*/
var gameBoard={
    "col0":[ "white", "white", "white", "white", "white", "white" ],
	  "col1":[ "white", "white", "white", "white", "white", "white" ],
    "col2":[ "white", "white", "white", "white", "white", "white" ],
    "col3":[ "white", "white", "white", "white", "white", "white" ],
    "col4":[ "white", "white", "white", "white", "white", "white" ],
    "col5":["white",  "white", "white", "white", "white", "white"],
    "col6":[ "white","white",  "white", "white", "white", "white" ]
}
console.log(gameBoard);
var name = "SavedB";
function save(){
  var savedBoard = JSON.stringify(gameBoard);
  console.log(savedBoard);
  document.cookie = name + encodeURIComponent(savedBoard); "max-age=" + 30*24*60*60;
}
function restore(){
  
  console.log(getCookie(name));
}
function getCookie(name) {
//  console.log(decodeURIComponent(document.cookie));
  var original = decodeURIComponent(document.cookie);
  var newString = original.toString();
  newString = newString.replace(/[\[\]"]+/g, '');
  newString = newString.replace(/,/g, " ");
  newString = newString.replace(/col0:/g,'');
  newString = newString.replace(/col1:/g,'');
  newString = newString.replace(/col2:/g,'');
  newString = newString.replace(/col3:/g,'');
  newString = newString.replace(/col4:/g,'');
  newString = newString.replace(/col5:/g,'');
  newString = newString.replace(/col6:/g,'');
  newString = newString.replace("SavedB{", '');
  newString = newString.replace("}", '');
  newString = newString.split(" ");


        tableCells[0].style.setProperty("background-color",newString[0])
        tableCells[1].style.setProperty("background-color",newString[6])
        tableCells[2].style.setProperty("background-color",newString[12])
        tableCells[3].style.setProperty("background-color",newString[18])
        tableCells[4].style.setProperty("background-color",newString[24])
        tableCells[5].style.setProperty("background-color",newString[30])
        tableCells[6].style.setProperty("background-color",newString[36])
        tableCells[7].style.setProperty("background-color",newString[1])
        tableCells[8].style.setProperty("background-color",newString[7])
        tableCells[9].style.setProperty("background-color",newString[13])
        tableCells[10].style.setProperty("background-color",newString[19])
        tableCells[11].style.setProperty("background-color",newString[25])
        tableCells[12].style.setProperty("background-color",newString[31])
        tableCells[13].style.setProperty("background-color",newString[37])
        tableCells[14].style.setProperty("background-color",newString[2])
        tableCells[15].style.setProperty("background-color",newString[8])
        tableCells[16].style.setProperty("background-color",newString[14])
        tableCells[17].style.setProperty("background-color",newString[20])
        tableCells[18].style.setProperty("background-color",newString[26])
        tableCells[19].style.setProperty("background-color",newString[32])
        tableCells[20].style.setProperty("background-color",newString[38])
        tableCells[21].style.setProperty("background-color",newString[3])
        tableCells[22].style.setProperty("background-color",newString[9])
        tableCells[23].style.setProperty("background-color",newString[15])
        tableCells[24].style.setProperty("background-color",newString[21])
        tableCells[25].style.setProperty("background-color",newString[27])
        tableCells[26].style.setProperty("background-color",newString[33])
        tableCells[27].style.setProperty("background-color",newString[39])
        tableCells[28].style.setProperty("background-color",newString[4])
        tableCells[29].style.setProperty("background-color",newString[10])
        tableCells[30].style.setProperty("background-color",newString[16])
        tableCells[31].style.setProperty("background-color",newString[22])
        tableCells[32].style.setProperty("background-color",newString[28])
        tableCells[33].style.setProperty("background-color",newString[34])
        tableCells[34].style.setProperty("background-color",newString[40])
        tableCells[35].style.setProperty("background-color",newString[5])
        tableCells[36].style.setProperty("background-color",newString[11])
        tableCells[37].style.setProperty("background-color",newString[17])
        tableCells[38].style.setProperty("background-color",newString[23])
        tableCells[39].style.setProperty("background-color",newString[29])
        tableCells[40].style.setProperty("background-color",newString[35])
        tableCells[41].style.setProperty("background-color",newString[41])
    
}
