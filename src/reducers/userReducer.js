export default function userReducer(
  state = {
    currentUser: null,
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.data,
      };
      break;

    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
}
