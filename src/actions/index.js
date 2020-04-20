export const login = (data) => {
  return (dispatch) => {
    console.log("hit");
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

export const persistLogin = (data) => {
  return { type: "LOGIN", data: data };
};

export const registerUser = (data) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    }).then((response) => {
      if (response.status === 201) {
        dispatch(login({ email: data.email, password: data.password }));
        //login defined above, logs user in after registering account
      } else {
        console.log("bad");
      }
    });
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
