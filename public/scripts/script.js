$(document).ready(function() {
	$('#nav-placeholder').load('/pages/nav.html');
});

$("#tab-content-box").click(function() {
	$('#tab-content-box').load('pages/add-row.html');
});
$("#tab-content-box").click(function() {
	alert("This is an alert");

});
$("#new-tab-button").click(function(){
  alert("The paragraph was clicked.");
});
