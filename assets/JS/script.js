// JavaScript Document

// Hamburger Icon
function sidebar() {

	var sidebar = document.getElementById('sidebar-mobile');
	
	// activates sidebar, changes icon to nav-x
	if (sidebar.getAttribute('style') === null || sidebar.getAttribute('style') === "") {
		document.getElementById('sidebar-mobile').style.display = "block";
		document.getElementById('nav-icons').innerHTML = '<i class="nav-x fas fa-times" onclick="sidebar()"></i>';
	} 
	
	// deactivates sidebar, changes icon to nav-icon
	else {
		document.getElementById('sidebar-mobile').style.display = "";
		document.getElementById('nav-icons').innerHTML = '<i class="nav-icon fas fa-bars" onclick="sidebar()"></i>';
	}
}

// Search Icon
function searchbar() {
	
	var searchbar = document.getElementById('searchbar');
	
	// activates searchbar
	if (searchbar.getAttribute('style') === null || searchbar.getAttribute ('style') === "") {
		document.getElementById('searchbar').style.display = "block";
	}
	
	// deactivates searchbar
	else {
		document.getElementById('searchbar').style.display = "";
		
	}
}