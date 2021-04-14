export const GithubLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/github?successRedirectUri=${process.env.REACT_APP_DOMAIN}loginLoading&signupRedirectUri=${process.env.REACT_APP_DOMAIN}signup`;
export const GoogleLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/google?successRedirectUri=${process.env.REACT_APP_DOMAIN}loginLoading&signupRedirectUri=${process.env.REACT_APP_DOMAIN}signup`;
export const SignUpRequest = `${process.env.REACT_APP_API_URL}api/v1/members/signup`;
