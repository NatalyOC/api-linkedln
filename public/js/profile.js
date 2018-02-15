 // use information captured above
 alert('hi');
 //document.getElementById('picture').innerHTML = '<img src="' + localStorage.photo + '" />';
 document.getElementById('name').innerHTML = localStorage.firstName + ' ' + localStorage.lastName;
 document.getElementById('intro').innerHTML = localStorage.headline;
 document.getElementById('email').innerHTML = localStorage.emailAddress;
 document.getElementById('location').innerHTML = localStorage.locationName;
 document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';
 document.getElementById('profileData').style.display = 'block';