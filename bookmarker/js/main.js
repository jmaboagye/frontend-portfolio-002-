// liisten for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
	// Get form values
	var siteName =document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;
	
	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// Local Storage Test
	localStorage.setItem('test', 'Hello World');


// Prevent form from submitting
e.preventDefault();

}