import { createContext } from 'react';
import PropTypes from 'prop-types';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const createUser = ({ email, password }) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const AuthData = { googleSignIn, createUser };
	return (
		<AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
