export default function testReducer(
  state = {
    something: "something",
  },
  action
) {
  switch (action.type) {
    case "caseExample":
      return {
        something: "something else",
      };

    default:
      return state;
  }
}
