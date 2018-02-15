// Funcion que detecta el evento para realizar una llamada a la API una vez se complete la autenticación
function OnLinkedInFrameworkLoad() {
  IN.Event.on(IN, 'auth', OnLinkedInAuth);
}
// Función que permite usar la llamada para solicitar los datos del perfil del miembro
function OnLinkedInAuth() {
  IN.API.Profile('me').result(ShowProfileData);
}
// Funcion que permite mostrar información de perfil de miembro en la página web.
function ShowProfileData(profiles) {
  var member = profiles.values[0];
  var id = member.id;
  var firstName = member.firstName; 
  var lastName = member.lastName; 
  var photo = member.pictureUrl; 
  var headline = member.headline; 

  // use information captured above
}
 
/*  */
// Setup an event listener to make an API call once auth is complete
/* function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
}

alert('hi'); */