
// Toggle profile 
$('.card-profile-stats-more-link').click(function(event) {
  event.preventDefault();
  if ($('.card-profile-stats-more-content').is(':hidden')) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});

document.getElementById('pic').setAttribute('src', localStorage.profilePhoto);
document.getElementById('name').innerHTML = localStorage.fname + ' ' + localStorage.lname;
document.getElementById('intro').innerHTML = localStorage.headline;
document.getElementById('email').innerHTML = localStorage.email;
document.getElementById('location').innerHTML = localStorage.locationName ;
document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';

