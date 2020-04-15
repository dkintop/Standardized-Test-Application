export const login = (data) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          //success
          dispatch({ type: "LOGIN", data: data });
          window.localStorage.setItem("ST_APP", data.token);
        } else {
          //   failure;
          alert("Invalid Credentials, please try again or sign up");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
};
