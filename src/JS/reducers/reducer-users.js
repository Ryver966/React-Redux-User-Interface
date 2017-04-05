const initialState = {
  users: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_USERS':
    return Object.assign({}, state, {
      users: state.users.concat([action.payload])
    })
    break;
  }
  return state;
}