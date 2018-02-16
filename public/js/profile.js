// use information captured above
// Funcion que detecta el evento para realizar una llamada a la API una vez se complete la autenticación
function OnLinkedInFrameworkLoad() {
  IN.Event.on(IN, 'auth', OnLinkedInAuth);
}
// Función que permite usar la llamada para solicitar los datos del perfil del miembro
function OnLinkedInAuth(e) {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(ShowProfileData).error(onError);

  
}
function onError(error) {
  console.log(error);
}
// Funcion que permite mostrar información de perfil de miembro en la página web.
function ShowProfileData(profiles) {
  let member = profiles.values[0];
  let id = member.id;
  let firstName = member.firstName; 
  let lastName = member.lastName; 
  let photo = member.pictureUrl; 
  let headline = member.headline; 
  let locationName = member.location.name;
  let email=member.emailAddress;
  let publicProfileUrl = member.publicProfileUrl;
  // Persistencia de Data
  localStorage.firstName = firstName;
  localStorage.lastName = lastName;
  localStorage.photo = photo;
  localStorage.locationName = locationName;
  localStorage.headline = headline;
  localStorage.publicProfileUrl = publicProfileUrl;
  localStorage.email=email;
  console.log(id, locationName); 
}
function logout() {
  IN.User.logout();
}
// document.getElementById('picture').innerHTML = '<img src="' + localStorage.photo + '" />';
document.getElementById('name').innerHTML = localStorage.firstName + ' ' + localStorage.lastName;
document.getElementById('intro').innerHTML = localStorage.headline;
document.getElementById('email').innerHTML = localStorage.emailAddress;
document.getElementById('location').innerHTML = localStorage.locationName;
document.getElementById('link').innerHTML = '<a href="' + localStorage.publicProfileUrl + '" target="_blank">Visit profile</a>';
document.getElementById('profileData').style.display = 'block';
/* 
function logout() {
  IN.User.logout();
}

document.getElementById('button-logout').addEventListener('click',logout);
 */