// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}
<<<<<<< HEAD
 
// Logout user
function logout() {
  IN.User.logout(onLogout);
=======
// Función que permite usar la llamada para solicitar los datos del perfil del miembro
function OnLinkedInAuth(e) {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(ShowProfileData).error(onError);
  // e.preventDefault();
  // window.location.href = '../views/profile.html';
>>>>>>> 33bfef65b46a837ba3795c9a09e12e566c4413d3
}
 
function onLogout() {
  console.log('Logout successfully');
  window.location.href = 'views/profile.html';
}
<<<<<<< HEAD
 
// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(function(data) {
    console.log(data);
    let userdata = data.values[0];
    let id = userdata.id;
    let fname = userdata.firstName;
    let lname = userdata.lastName;
    let email = userdata.emailAddress;
    let profilePhoto = userdata.pictureUrl;
    let headline = userdata.headline; 
    let locationName = userdata.location.name;
    let publicProfileUrl = userdata.publicProfileUrl;
    logout();
    localStorage.id = id;
    localStorage.fname = fname;
    localStorage.lname = lname;
    localStorage.email = email;
    localStorage.profilePhoto = profilePhoto;
    localStorage.locationName = locationName;
    localStorage.headline = headline;
    localStorage.publicProfileUrl = publicProfileUrl;
  }).error(function(data) {
    console.log(data);
  });
}
=======
// Funcion que permite mostrar información de perfil de miembro en la página web.
function ShowProfileData(profiles) {
  let member = profiles.values[0];
  let id = member.id;
  let firstName = member.firstName; 
  let lastName = member.lastName; 
  let photo = member.pictureUrl; 
  let headline = member.headline; 
  let locationName = member.location.name;
  let email = member.emailAddress;
  let publicProfileUrl = member.publicProfileUrl;
  // Persistencia de Data
  localStorage.firstName = firstName;
  localStorage.lastName = lastName;
  localStorage.photo = photo;
  localStorage.locationName = locationName;
  localStorage.headline = headline;
  localStorage.publicProfileUrl = publicProfileUrl;
  localStorage.email = email;
  console.log(id, locationName);
  
  document.getElementById('name').innerHTML = localStorage.firstName + ' ' + localStorage.lastName;
  document.getElementById('intro').innerHTML = localStorage.headline;
  document.getElementById('email').innerHTML = localStorage.emailAddress;
  document.getElementById('location').innerHTML = localStorage.locationName;
  document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';
  document.getElementById('profileData').style.display = 'block';
}
function logout() {
  IN.User.logout();
}
>>>>>>> 33bfef65b46a837ba3795c9a09e12e566c4413d3
