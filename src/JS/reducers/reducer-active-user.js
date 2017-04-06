const initialState = [
  {
    firstName: '',
    lastName: '',
    age: '',
    gender: ''
  }
]

export default function(state=initialState, action) {
  switch(action.type) {
    case 'SELECT_USER':
    return action.payload
    break;
  }
  return state;
}