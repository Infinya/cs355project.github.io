// color represents the color of checker that been place to the slot at this turn.
var color="";
// all table cell elements total 42 
var tableCells=document.getElementsByTagName("td");
// initialized to 42 because table is 6*7 total has 42 slots 
var slotNum=42; 
// for win condition check
var colorMatched=0;

var index=-1;
var colNum=-1;
var rowNum=-1;
// game table with default background-color white
var board=["white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            ]
var movesIndex=[];

function takeback(){
    var undoIndex=movesIndex.pop();
    tableCells[undoIndex].style.setProperty("background-color","white");
    board[undoIndex]="white";
    slotNum++;
    switch(colNum){
        case 0:
            gameBoard.col0[rowNum]="white";
            break;
        case 1:
            gameBoard.col1[rowNum]="white";
            break;
        case 2:
            gameBoard.col2[rowNum]="white";
            break;
        case 3:
            gameBoard.col3[rowNum]="white";
            break;
        case 4:
            gameBoard.col4[rowNum]="white";
            break;
        case 5:
            gameBoard.col5[rowNum]="white";
            break;
        case 6:
            gameBoard.col6[rowNum]="white";
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

    board=["white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            "white","white","white","white","white","white","white",
            ]

    movesIndex=[];
 
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
   // rowNum=Math.floor(index/7);
    switch(colNum){
        case 0:
            for(i=5;i>=0;i--){
                if(board[(i*7)]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)]="red";
                        tableCells[(i*7)].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col0[i]="red";
                    }
                    else{
                        board[(i*7)]="yellow";
                        tableCells[(i*7)].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col0[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 1:
            for(i=5;i>=0;i--){
                if(board[(i*7)+1]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+1]="red";
                        tableCells[(i*7)+1].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col1[i]="red";
                    }
                    else{
                        board[(i*7)+1]="yellow";
                        tableCells[(i*7)+1].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col1[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 2:
            for(i=5;i>=0;i--){
                if(board[(i*7)+2]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+2]="red";
                        tableCells[(i*7)+2].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col2[i]="red";
                    }
                    else{
                        board[(i*7)+2]="yellow";
                        tableCells[(i*7)+2].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col2[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 3:
            for(i=5;i>=0;i--){
                if(board[(i*7)+3]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+3]="red";
                        tableCells[(i*7)+3].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col3[i]="red";
                    }
                    else{
                        board[(i*7)+3]="yellow";
                        tableCells[(i*7)+3].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col3[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 4:
            for(i=5;i>=0;i--){
                if(board[(i*7)+4]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+4]="red";
                        tableCells[(i*7)+4].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col4[i]="red";
                    }
                    else{
                        board[(i*7)+4]="yellow";
                        tableCells[(i*7)+4].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col4[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 5:
            for(i=5;i>=0;i--){
                if(board[(i*7)+5]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+5]="red";
                        tableCells[(i*7)+5].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col5[i]="red";
                    }
                    else{
                        board[(i*7)+5]="yellow";
                        tableCells[(i*7)+5].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col5[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        case 6:
            for(i=5;i>=0;i--){
                if(board[(i*7)+6]=="white"){
                    if(slotNum%2==0){
                        board[(i*7)+6]="red";
                        tableCells[(i*7)+6].style.setProperty("background-color","red");
                        color="red";
                        gameBoard.col6[i]="red";
                    }
                    else{
                        board[(i*7)+6]="yellow";
                        tableCells[(i*7)+6].style.setProperty("background-color","yellow");
                        color="yellow";
                        gameBoard.col6[i]="yellow";
                    }
                    rowNum=i;
                    slotNum--;
                    break;
                }
            }
            break;
        default:
            return;
    }
    movesIndex.push((rowNum*7)+colNum);
    console.log(gameBoard);
}
function isWin(){
    checkVertically();
    checkHorizontally();
    checkDiagonally();
}
function checkVertically(){
// when slotNum == 0 means in the gametable there is no more slot can be place a checker.
// so it's draw
    if(slotNum==0){
        window.confirm("It's a draw! Play again?");                
        if( Button.confirm() ) restart();
        else return;
    }
    // Check vertical 
    // since we know the column number that the checker is place
    // so use switch loop to check that column instead of all columns in the table.-
    switch(colNum){
        case 0:
            colorMatched=0;
            for(var i=5;i>=0;i--){
                if(board[(i*7)]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 1:
            colorMatched=0;
            for(i=5;i>=0;i--){
                if(board[(i*7)+1]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 2:
            colorMatched=0;
            for(i=5;i>=0;i--){
                if(board[(i*7)+2]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 3:
            colorMatched=0;
            for(i=5;i>=0;i--){
                if(board[(i*7)+3]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 4:
            colorMatched=0;
            for(i=5;i>=0;i--){
                if(board[(i*7)+4]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 5:
            colorMatched=0;
            for(i=5;i>=0;i--){
               
                if(board[(i*7)+5]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 6:
            colorMatched=0;
            for(i=5;i>=0;i--){
                if(board[(i*7)+6]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        default:
            return; 
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
        console.log("Vertical 4 in a row!");
        var val=window.confirm("The "+color+" player wins! Start a new game?")
	/*
	   <?php
	if ($conn->connect_error) {
 		 die();
		}
	$trueWin = "<script>document.write(color)</script>"

	if($trueWin=="red"){
	$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (1, 0, '0')";
    }
	elseif($trueWin =="yellow"){
		$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (0, 1, '0')
	}
	?>*/
        if(val==true) restart();
        else return;
       
    }
}
function checkHorizontally(){
    switch(rowNum){
        case 0:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(board[i]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 1:
            colorMatched=0;
            for(var i=0;i<7;i++){
                if(board[i+7]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 2:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(board[i+14]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 3:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(board[i+21]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 4:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(board[i+28]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        case 5:
            colorMatched=0;
            for(i=0;i<7;i++){
                if(board[i+35]==color) colorMatched++;
                else colorMatched=0;
                if(colorMatched==4) break;
            }
            break;
        default:
            return; 
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
        console.log("Horizantal 4 in a row!");
        var val=window.confirm("The "+color+" player wins! Play again?")
	/*<?php
	if ($conn->connect_error) {
 		 die();
		}
	$trueWin = "<script>document.write(color)</script>"

	if($trueWin=="red"){
	$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (1, 0, '0')";
    }
	elseif($trueWin =="yellow"){
		$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (0, 1, '0')
	}
	?>*/
        if(val==true) restart();
        else return;
    }
}
function checkDiagonally(){
    
    var diagonalSet=[]; //  represent \
    var diagonalSet2=[]; // represent /
    //  \ diagonal with given index
    var idx=(rowNum*7)+colNum;
    var tempRow=rowNum;
    var tempCol=colNum;
    while(tempRow>=0&&tempCol>=0){
        diagonalSet.unshift(idx);
        tempRow--;
        tempCol--;
        idx-=8;
    }
    idx=(rowNum*7)+colNum+8;
    tempRow=rowNum+1;
    tempCol=colNum+1;
    while(tempRow<=5&&tempCol<=6){
        diagonalSet.push(idx);
        tempCol++;
        tempRow++;
        idx+=8;
    } 
    // / diagonal with given index
    idx=(rowNum*7)+colNum;
    tempRow=rowNum;
    tempCol=colNum;
    while(tempRow>=0&&tempCol<=6){
        diagonalSet2.unshift(idx)
        tempRow--;
        tempCol++;
        idx-=6;
    }
    idx=(rowNum*7)+colNum+6;
    tempRow=rowNum+1;
    tempCol=colNum+1;
    while(tempRow<=5&&tempCol>=0){
        diagonalSet2.push(idx);
        tempCol--;
        tempRow++;
        idx+=6;
    } 
 //  \ diagonal check
    colorMatched=0;
    for(var i=0;i<diagonalSet.length;i++){
        if(color==board[diagonalSet[i]]) colorMatched++;
        else colorMatched=0;
        if(colorMatched==4) break;
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
        console.log("Left diagonal 4 in a row!");
        var val=window.confirm("The "+color+" player wins! Play again?")
	/*<?php
	if ($conn->connect_error) {
 		 die();
		}
	$trueWin = "<script>document.write(color)</script>"

	if($trueWin=="red"){
	$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (1, 0, '0')";
    }
	elseif($trueWin =="yellow"){
		$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (0, 1, '0')
	}
	?>*/
        if(val==true) restart();
        else return;
    } 
    
    // / diagonal check
    for(i=0;i<diagonalSet2.length;i++){
        if(color==board[diagonalSet2[i]]) colorMatched++;
        else colorMatched=0;
        if(colorMatched==4) break;
    }
    if(colorMatched==4&&(color=="red"||color=="yellow")){
       
        console.log("Right diagonal 4 in a row!");
        var val=
	    
	    dow.confirm("The "+color+" player wins! Start a new game?")
	/*<?php
	if ($conn->connect_error) {
 		 die();
		}
	$trueWin = "<script>document.write(color)</script>"

	if($trueWin=="red"){
	$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (1, 0, '0')";
    }
	elseif($trueWin =="yellow"){
		$sql = "INSERT INTO ".$email." (redWin,yellowWin, gameJson)
		VALUES (0, 1, '0')
	}
	?>*/
        if(val==true) restart();
        else return;
    }
}
function restart(){
  location.reload();

  

  
}
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

function save(){
    
  var dataStr = encodeURIComponent(JSON.stringify(gameBoard));
   var gameSaved = {
        numOfSlot: 0,
        gameCol0 : [],
        gameCol1 : [],
        gameCol2 : [],
        gameCol3 : [],
        gameCol4 : [],
        gameCol5 : [],
        gameCol6 : [],
        myBoard : []
    }
    gameSaved.numOfSlot = slotNum;
    gameSaved.gameCol0 = gameBoard.col0;
    gameSaved.gameCol1 = gameBoard.col1;
    gameSaved.gameCol2 = gameBoard.col2;
    gameSaved.gameCol3 = gameBoard.col3;
    gameSaved.gameCol4 = gameBoard.col4;
    gameSaved.gameCol5 = gameBoard.col5;
    gameSaved.gameCol6 = gameBoard.col6;
    gameSaved.myBoard = board;
    var a = document.createElement("a");
    var download = new Blob([JSON.stringify(gameSaved)], {
        type: 'file'
    });
    a.href = URL.createObjectURL(download);
    a.download = 'Connect4Saved.JSON';
    a.click();
}
(function(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        setData(obj.numOfSlot, obj.gameCol0, obj.gameCol1, obj.gameCol2 , obj.gameCol3, obj.gameCol4 ,obj.gameCol5, obj.gameCol6, obj.myBoard);
    }
    
    function setData(slotN, mCol0, mCol1, mCol2, mCol3, mCol4, mCol5, mCol6, myBoard){
      var NslotNum = slotN;
      var Ncol0 = mCol0;
      var Ncol1 = mCol1;
      var Ncol2 = mCol2;
      var Ncol3 = mCol3;
      var Ncol4 = mCol4;
      var Ncol5 = mCol5;
      var Ncol6 = mCol6;
      var Nboard = myBoard;
      update(NslotNum, Ncol0, Ncol1, Ncol2, Ncol3, Ncol4, Ncol5, Ncol6, Nboard);
    }
  
    document.getElementById('file').addEventListener('change', onChange);

}());
function update(NslotNum, Ncol0, Ncol1, Ncol2, Ncol3, Ncol4, Ncol5, Ncol6, Nboard){
  slotNum = NslotNum;
  gameBoard.gameCol0 = Ncol0;
  gameBoard.gameCol1 = Ncol1;
  gameBoard.gameCol2 = Ncol2;
  gameBoard.gameCol3 = Ncol3;
  gameBoard.gameCol4 = Ncol4;
  gameBoard.gameCol5 = Ncol5;
  gameBoard.gameCol6 = Ncol6;
  board= Nboard;
  for(var i=0;i<42;i++){
    tableCells[i].style.setProperty("background-color", board[i])
  }
}
    
