<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f5426737fae2cc523b229223bfb791e86305d18f
// Toggle profile description
$('.card-profile-stats-more-link').click(function(event) {
  event.preventDefault();
  if ($('.card-profile-stats-more-content').is(':hidden')) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});
<<<<<<< HEAD
=======
// use information captured above
// alert('hi');
// document.getElementById('picture').innerHTML = '<img src="' + localStorage.photo + '" />';
document.getElementById('pic').setAttribute('src', localStorage.profilePhoto);
document.getElementById('name').innerHTML = localStorage.fname + ' ' + localStorage.lname;
document.getElementById('intro').innerHTML = localStorage.headline;
document.getElementById('email').innerHTML = localStorage.email;
document.getElementById('location').innerHTML = localStorage.locationName ;
document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';
=======
>>>>>>> f5426737fae2cc523b229223bfb791e86305d18f
// use information captured above
// alert('hi');
// document.getElementById('picture').innerHTML = '<img src="' + localStorage.photo + '" />';
document.getElementById('pic').setAttribute('src', localStorage.profilePhoto);
document.getElementById('name').innerHTML = localStorage.fname + ' ' + localStorage.lname;
document.getElementById('intro').innerHTML = localStorage.headline;
document.getElementById('email').innerHTML = localStorage.email;
document.getElementById('location').innerHTML = localStorage.locationName ;
document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';
<<<<<<< HEAD
=======
document.getElementById('profileData').style.display = 'block';
/* 
function logout() {
  IN.User.logout();
}

document.getElementById('button-logout').addEventListener('click',logout);
 */
>>>>>>> 33bfef65b46a837ba3795c9a09e12e566c4413d3
>>>>>>> f5426737fae2cc523b229223bfb791e86305d18f
