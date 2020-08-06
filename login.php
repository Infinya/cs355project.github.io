<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>
<body>
<div id="topnav">
      <ul>
	      <li><a href="index.php" >Home</a></li>
	      <li><a href="history.php">History</a></li>
	      <li><a href="rules.php" >Rule</a></li>
	      <li><a href="bio-page.php" >Meet the Developers</a></li>
	      <li><a href="contact-us.php" >Contact-us</a></li>
	      <li class="dropdown">
          <a href="#" class="dropbtn">External Links</a>
          <div class="dropdown-content">
            <a href="https://www.google.com/search?q=connect+4&rlz=1C1JZAP_enUS747US747&oq=connect+4+&aqs=chrome..69i57j69i59l2j0l5.3243j0j8&sourceid=chrome&ie=UTF-8" target="_blank">Link to Google search</a>
            <a href="https://www.mathsisfun.com/games/connect4.html" target="_blank">Link1 to Connect4 game</a>
            <a href="https://papergames.io/en/connect4" target="_blank">Link2 to Connect4 game</a>
            <a href="https://poki.com/en/g/connect-4" target="_blank">Link3 to Connect4 game</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Login/Register</a>
          <div class="dropdown-content">
            <a href="login.php" >Login</a>
            <a href="register.php">Register</a>
          </div>
        </li>
      </ul>
</div> 
    <div class="form-body">
            <form action= "registration.php" method = "POST" >
                <label for="email">E-mail</label>
                <input class="form-control" type="email" name="email" id="emailID" placeholder="E-mail Address" required>
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" placeholder="Password" required>
                <input type="checkbox" id="chk1"><label for="chk1">Remember me</label>
                <div class="form-button">
                <button type="submit" id = "login" name = "login" class="ibtn">Login</button>
            </form>
    </div>
	    
</body>
</html> 
