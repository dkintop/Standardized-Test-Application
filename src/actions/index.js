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
        dispatch({ type: "LOGIN", data: data });
      })
      .catch((error) => console.log(error));
  };
};

// the above action is incomplete. next task is to store user information in redux store as opposed to simply console logging it.
