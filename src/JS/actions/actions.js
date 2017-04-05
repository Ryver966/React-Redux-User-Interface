import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqIUB8HJgAMfX0D2Bkbwv9Es8eEr_5oIQ",
    authDomain: "user-interface-71a76.firebaseapp.com",
    databaseURL: "https://user-interface-71a76.firebaseio.com",
    projectId: "user-interface-71a76",
    storageBucket: "user-interface-71a76.appspot.com",
    messagingSenderId: "121168709462"
};
  firebase.initializeApp(config);

  const Users = firebase.database().ref('Users');
  const usersArr = []

export function fetchUsers(user) {
  return {
    type: 'FETCH_USERS',
    payload: user
  }
}
export function subscribeUsers() {
  return function(dispatch) {
    Users.on('child_added', snap => {
      dispatch(fetchUsers(snap.val()))
    })
  }
}