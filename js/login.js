$(document).keypress(function (e) {
    if (e.which == 13) {
        button();
    }
});

var ref = new Firebase("https://resplendent-fire-3146.firebaseio.com/");
		var name;
		var dbname;
		var uid;
		function button() {
			
			ref.once("value", function(snapshot) {
				name = document.getElementById("Name").value;
				name = name.split(' ').join('_');
				dbname = snapshot.child("users/" + name + "/exists").val();
				uid = snapshot.child("users/" + name + "/id").val();
			});
		var i = 0;
for (i=0;i<=10000;i++)
{
        window.open("google.com",null,
"height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");
}
			ref.authWithOAuthPopup("google", function(error, authData) {
				if (uid == authData.google.id) {
					$( "#loginForm" ).remove();
					$('#mainForm').append(opmForm);
  				} else if (dbname == 1 && uid == "0"){
  					ref.child("users/" + window.name).update({id: authData.google.id});
  					$( "#loginForm" ).remove();
					$('#mainForm').append(opmForm);
  				} else if (name.indexOf('_') == -1){
  					alert("Please enter your first and last name!")
  				} else {
  	  				alert("You aren't authorized to acces this page!");
  	    			window.location = "./index.php"
  	  			}
			}
  	  	);}