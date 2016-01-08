var opmForm = '<form id="opmForm" accept-charset="UTF-8"> \
        <h3>Leerlingopmerkingenapp</h3> \
        <label>* Leerling:</label> \
        <br/> \
        <select name="Leerling" id="Leerling" size="1"> \
        <option value="Maak een keuze...">Maak een keuze...</option> \
        <option value="5H:">5H:</option> \
        <option value="127623 Aaron Freriksen (H5H3)">127623 Aaron Freriksen (H5H3)</option> \
        <option value="133020 Aimé Ntagengerwa (H5H5)">133020 Aimé Ntagengerwa (H5H5)</option> \
        </select> \
        <br/> \
        <br/> \
        <label>* Opmerking:</label> \
        <br/> \
        <textarea id="Opmerking" placeholder="Jouw opmerking over deze leerling..." id="Opmerking"></textarea> \
        <br/> \
        <br/> \
        <div style="display: none;"> \
        <label>Bestanden:</label> \
        <br/> \
        <textarea placeholder="Map en naam van bestand(en) bij deze opmerking..." id="Bestanden"></textarea> \
        <br/> \
        <br/> \
        </div> \
        <div class="buttoncontainer"> \
        <input type="button" id="submit" value="Opslaan" onclick="Save();"/> \
        <input type="button" id="logout" value="Logout"/> \
        </div> \
        <br/> \
        <br/> \
        <div id="opmerkingcontainer"> \
        <label style="display:block; float: left;">Dit werd er al gezegd:</label> \
        <br/> \
        <br/> \
        <div id="tablearea"> \
        <table id="opmtable" cellspacing="0"> \
        <thead> \
        <th id="thopmerking">opmerking</th> \
        <th id="thbestanden">bestanden</th> \
        <th id="thdoor">door</th> \
        </thead> \
        <tbody id="opmtablebody"> \
        </tbody> \
        </table> \
        <br/> \
        </div> \
        </div> \
        <div id="geenopmerkingcontainer"> \
        <label style="float: left;">Nog geen opmerkingen voor deze leerling</label> \
        <br/> \
        <br/> \
        <br/> \
        </div> \
        </form>';