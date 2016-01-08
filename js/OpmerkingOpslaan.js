var ref = new Firebase("https://resplendent-fire-3146.firebaseio.com/");
        var leerling;
        var opmerking;
        var num;
        var newnum;
        function Save() {
            ref.once("value", function(snapshot) {
               leerling = document.getElementById("Leerling").value;
               leerling = leerling.split(' ').join('_');
               
               opmerking = document.getElementById("Opmerking").value;
               opmerking = opmerking.split(' ').join('_');
               
               num = snapshot.child("comments/" + window.leerling + "/" + window.name).numChildren();
               newnum = num + 1;
               if (leerling == "Maak_een_keuze...") {
                   alert("Selecteer een leerling!");
               } else if (opmerking == "") {
                   alert("schrijf een opmerking!");
               } else {
                   ref.child("comments/" + window.leerling + "/" + window.name + "/" + window.newnum).set({comment: opmerking});
                }
            });
            
            
        }