export default function userReducer(
  state = {
    currentUser: null,
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      console.log(action.data);
      return {
        ...state,
        currentUser: action.data,
      };
      break;
    default:
      return state;
  }
}
