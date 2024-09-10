var userId;

export function loadFacebookSDK(appId, callback) {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: appId,
      cookie: true,
      xfbml: true,
      version: "v13.0",
    });
    if (callback) {
      callback();
    }
  };

  // Check if SDK has already been loaded
  if (!document.getElementById("facebook-jssdk")) {
    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    document.body.appendChild(script);
  }
}

export function loginWithFacebook(callback) {
  window.FB.login(function (response) {
    if (response.authResponse) {
      callback(response);
      userId = response.authResponse.userID;
      console.log(userId);
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  });
}

export function getUserPosts() {
  window.FB.api(`/${userId}/posts`, "GET", {}, function (response) {
    console.log(response); // Returns user's posts
  });
}
