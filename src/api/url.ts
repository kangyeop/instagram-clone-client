export const GithubLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/github?successRedirectUri=${process.env.REACT_APP_DOMAIN}loginloading&signupRedirectUri=${process.env.REACT_APP_DOMAIN}loginloading`;
export const GoogleLoginRequest = `${process.env.REACT_APP_API_URL}oauth2/authorization/google?successRedirectUri=${process.env.REACT_APP_DOMAIN}loginloading&signupRedirectUri=${process.env.REACT_APP_DOMAIN}loginloading`;
export const SignUpRequest = `${process.env.REACT_APP_API_URL}api/v1/members/signup`;
