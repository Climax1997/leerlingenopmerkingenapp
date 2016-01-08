<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
		<title>Assink Leerlingopmerkingenapp</title>
		<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="https://rawgit.com/firebase/firebase-token-generator-node/master/dist/firebase-token-generator.js"></script>
		<script src="js/opmForm.js"></script>
		<link rel="stylesheet" href="css/opmerkingform.css" />
		<!-- <script src="js/login.js"></script> -->
		<script src="js/login.js"></script>
		<script src="js/OpmerkingOpslaan.js"></script>
	</head>
	<body> 
		
		<div id="mainForm">
			<!-- <h2>Assink Leerlingopmerkingenapp</h2> -->
			<!-- Required div starts here -->
			<img id='logo' src='images/logo-het-assink.png'>
			<div id="loginForm">
				<div id="logincontainer">
					<fieldset>
						<legend>Login:</legend>
						<p class="loginlabel">Naam</p><input type="text" id="Name" class="loginfield"/>
					</fieldset>
					<br/>
					<div class="buttoncontainer">
						<input type="button" id="login" value="Login" onclick="button();"/>
						<!-- <input type="button" id="logout" value="Logout"/> -->
					</div>
				</div>
			</div>
		</div>
	</body>
</html>