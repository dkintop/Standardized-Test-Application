import decode from "jwt-decode";
export function checkLoginStatus() {
  let token = window.localStorage.getItem("ST_APP");
  if (token) {
    let user = decode(token);

    return user; //returns user object
  } else {
    return false; //returns false if ST_APP token not found in local storage
  }
}
