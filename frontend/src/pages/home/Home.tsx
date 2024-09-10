import Button from "../../components/button/Button";
import React, { useEffect } from "react";
import {
  loadFacebookSDK,
  loginWithFacebook,
  getUserPosts,
} from "../../utils/FacebookLogin";

const Home: React.FC = () => {
  useEffect(() => {
    // Load the Facebook SDK and mark it as loaded
    loadFacebookSDK(process.env.REACT_APP_FACEBOOK_APP_ID, () => {
      console.log("hit");
    });
  }, []);
  const handleLoginButtonClick = () => {
    loginWithFacebook((response: any) => {
      console.log("Facebook login response:", response);
    });
  };

  //   const handleGetPostsButtonClick = () => {
  //     getUserPosts();
  //   };

  return (
    <div className="w-2/5 m-auto">
      <h1 className="text-5xl font-bold">Home</h1>
      <Button handleClick={handleLoginButtonClick} label="Login"></Button>
      {/* <Button
        handleClick={handleGetPostsButtonClick}
        label="Get Posts"
      ></Button> */}
      <a
        href="https://www.instagram.com/oauth/authorize?client_id=97563852873&redirect_uri=https://my.m.redirect.net/&response_type=code&scope=business_basic%2Cbusiness_manage_messages%2Cbusiness_manage_comments%2Cbusiness_content_publish
"
      >
        Click me
      </a>
    </div>
  );
};

export default Home;
