
console.log("in popup2");
exportButton = document.getElementById("exportNow");
//console.log(exportButton);
exportButton.addEventListener('click', function() {
	console.log("Try to find this console message! :)");
	console.log("calling on Success now");
	loadURL();
	console.log("past loadURL");
});

//prints url of spreadhseet
  function onSuccess(url) {
    console.log(url);
    console.log("on success");      
    $('#output').text('Your spreadsheet is here: ' + url);    
    //$('#outputlink').href('Link here: ', url);
  }

  //calls export gcal to gsheets
  function loadURL() {
  	console.log("in loadURL");
  	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://script.google.com/macros/d/1eydgiLo6PD4JB5Nfdv-rNP9L-vW43busr5fUBo6DZ9HEew5JnmRIQImH/edit?template=app", true);
	console.log("hi");  
    google.script.run.withSuccessHandler(onSuccess)
        .export_gcal_to_gsheet();    
    return false;
  }
  
  //use this method if don't want spreadsheet url
  function respondToExportButton() {  
    google.script.run.export_gcal_to_gsheet();    
    return false;
  }
  
  /**
   * Logs an error message and shows an alert to the user.
   */
  function showError(error) {
    //console.log(error);
    window.alert('An error has occurred, please try again.');
  }



/*
console.log("1");	
$(function() {
	console.log("2");
    $('#new-task').bind('submit', loadURL);  //calls export method
  });
  
  //prevents page from going blank after pressing export button
  $( '#new-task' ).on(function( event ) { 
    event.preventDefault();
  });
  
  */
  
  