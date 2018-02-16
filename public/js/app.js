// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);

}
 
// Logout user
function logout() {
  IN.User.logout(onLogout);
}
 
function onLogout() {
  console.log('Logout successfully');
  window.location.href = 'views/profile.html';
}
 
// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address','specialties','positions').result(function(data) {
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
    let position = userdata.positions;
    let special = userdata.specialties;
    // console.log(position,special);
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
 
// Logout user
function logout() {
  IN.User.logout(onLogout);
}
 
function onLogout() {
  console.log('Logout successfully');
  window.location.href = 'views/profile.html';
}

