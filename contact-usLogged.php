<!DOCTYPE html>
<head>
  <title>Contact us</title>
  <link rel="icon" href="connect4.png">
  <link rel="stylesheet" href="contact-us.css">
  <link rel="stylesheet" type="text/css" href="logsign.css">
        <script src="logsign.js"></script>
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
  <h1>Contact us</h1>
  <h3>Contact Form</h3>
    <div class="contactform">
      <form action="mailto:anjalidutt@outlook.com" method="POST" enctype="text/plain" >
    	  <label for="fname">First Name</label>
    	  <input type="text" id="fname" name="firstname" placeholder="Your first name..">
        <label for="lname">Last Name</label>
    	  <input type="text" id="lname" name="lastname" placeholder="Your last name..">
	      <label for="email">E-mail</label>
    	  <input type="text" id="email" name="email" placeholder="Your e-mail address..">
	      <label for="subject">Message</label>
	      <textarea id="subject" name="subject" placeholder="Messages..." rows="12" cols="20"></textarea>
	      <input type="submit" value="Submit">
      </form>
    </div>
</body>
