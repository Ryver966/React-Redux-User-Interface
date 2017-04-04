
export default function(state=null, action) {
  switch(action.type) {
    case 'FETCH_USERS':
    return Object.assign({}, state, {
      users: state.users.concat([action.payload])
    })
    break;
  }
  return state;
}