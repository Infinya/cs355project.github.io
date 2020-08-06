<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CS 355 Term Project</title>
  <link rel="icon" href="connect4.png">
  <link rel="stylesheet" type="text/css" href="index.css">
    <link rel="stylesheet" type="text/css" href="logsign.css">
  <style>
</style>
</head>
<body>
  <div id="topnav">
      <ul>
	      <li><a href="indexLogged.php" >Home</a></li>
	      <li><a href="historyLogged.php" >History</a></li>
	      <li><a href="rulesLogged.php" >Rule</a></li>
	      <li><a href="bio-pageLogged.php" >Meet the Developers</a></li>
	      <li><a href="contact-usLogged.php" >Contact-us</a></li>
	      	      <li><a href="userPageLogged.php" >User Page</a></li>
	      <li class="dropdown">
          <a href="#" class="dropbtn">External Links</a>
          <div class="dropdown-content">
            <a href="https://www.google.com/search?q=connect+4&rlz=1C1JZAP_enUS747US747&oq=connect+4+&aqs=chrome..69i57j69i59l2j0l5.3243j0j8&sourceid=chrome&ie=UTF-8" target="_blank">Link to Google search</a>
            <a href="https://www.mathsisfun.com/games/connect4.html" target="_blank">Link1 to Connect4 game</a>
            <a href="https://papergames.io/en/connect4" target="_blank">Link2 to Connect4 game</a>
            <a href="https://poki.com/en/g/connect-4" target="_blank">Link3 to Connect4 game</a>
          </div>
        </li>
      </ul>
</div> 
<h1>Connect 4</h1>
<!--7columns X 6 rows-->
<div id="gamepanel">
  <table id="gametable"  onmousedown="myFunction(event)" onmouseup="isWin()">
    <tr id="row0" class="row">
      <td id="slot00" class="col0"></td>
      <td id="slot01" class="col1"></td>
      <td id="slot02" class="col2"></td>
      <td id="slot03" class="col3"></td>
      <td id="slot04" class="col4"></td>
      <td id="slot05" class="col5"></td>
      <td id="slot06" class="col6"></td>
    </tr>
    <tr id="row1" class="row">
      <td id="slot10" class="col0"></td>
      <td id="slot11" class="col1"></td>
      <td id="slot12" class="col2"></td>
      <td id="slot13" class="col3"></td>
      <td id="slot14" class="col4"></td>
      <td id="slot15" class="col5"></td>
      <td id="slot16" class="col6"></td>
    </tr>
    <tr id="row2" class="row">
      <td id="slot20" class="col0"></td>
      <td id="slot21" class="col1"></td>
      <td id="slot22" class="col2"></td>
      <td id="slot23" class="col3"></td>
      <td id="slot24" class="col4"></td>
      <td id="slot25" class="col5"></td>
      <td id="slot26" class="col6"></td>
    </tr>
    <tr id="row3" class="row">
      <td id="slot30" class="col0"></td>
      <td id="slot31" class="col1"></td>
      <td id="slot32" class="col2"></td>
      <td id="slot33" class="col3"></td>
      <td id="slot34" class="col4"></td>
      <td id="slot35" class="col5"></td>
      <td id="slot36" class="col6"></td>
    </tr>
    <tr id="row4" class="row">
      <td id="slot40" class="col0"></td>
      <td id="slot41" class="col1"></td>
      <td id="slot42" class="col2"></td>
      <td id="slot43" class="col3"></td>
      <td id="slot44" class="col4"></td>
      <td id="slot45" class="col5"></td>
      <td id="slot46" class="col6"></td>
    </tr>
    <tr id="row5" class="row">
      <td id="slot50" class="col0"></td>
      <td id="slot51" class="col1"></td>
      <td id="slot52" class="col2"></td>
      <td id="slot53" class="col3"></td> 
      <td id="slot54" class="col4"></td>
      <td id="slot55" class="col5"></td>
      <td id="slot56" class="col6"></td>
    </tr>
  </table>
</div>
<div class="button">
  <button onclick="reset()" >New game</button>
  <button onclick="takeback()">Reverse</button>
	<!--<button onclick="databaseSave()">Save</button>-->
	
    <button onclick= "save()">Download Json</button>
       <label class="custom-file-upload">
    <input id="file" type="file"/>
    Upload 
</label>
</div>
<form method="POST" id="winUpdate"></form>
<table style=" border: 1px solid black">
  <tr>
    <th style=" border: 1px solid black">Red Wins</th>
    <th style=" border: 1px solid black">Yellow Wins</th>
  </tr>
  <tr>
    <td id = "redWinH" style=" border: 1px solid black"><input type="text" name="redWin" form="winUpdate" /></td>
    <td id="yellowWinH" style=" border: 1px solid black"><input type="text" name="yellowWin" form="winUpdate"/></td>
  </tr>
</table>
<?php
$redWin = $_POST[redWin];
$yellowWin = $_POST[yellowWin];
$sql = "UPDATE users SET redWin = $redWin  WHERE UserEmail= '$email'";
 $sql = "UPDATE users SET yellowWin = $yellowWin  WHERE UserEmail= '$email'";
	/*
$content = '<div id="redWinH"></div>';
$doc = new DomDocument();
$doc->loadHTML($content); // That's the addition
$redWin = $doc->getElementById('tablename');
echo $redWin->textContent;
	
$content2 = '<div id="yellowWinH"></div>';
$doc = new DomDocument();
$doc->loadHTML($content2); // That's the addition
$yellowWin = $doc->getElementById('tablename');
echo $yellowWin->textContent;
	
$conn = new mysqli($servernam$db = mysqli_connect('mars.cs.qc.cuny.edu' , 'duan7325' , '23627325' , 'duan7325') or die("could not connect to database" ) ;
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE users SET redWin = $redWin WHERE UserEmail='$email'";
$sql = "UPDATE users SET yellowWin = $yellowWin WHERE UserEmail='$email'";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();*/
?>
	<script src="index.js"></script>
</body>
	</html>
