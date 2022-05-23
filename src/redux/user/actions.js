import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const signIn = (email, password) => dispatch => {
  // firestore()
  //   .collection('users')
  //   .get()
  //   .then(r => {
  //     console.log(r._docs);
  //   });
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
};

export const getMe = userId => dispatch => {
  console.log(userId);
};
