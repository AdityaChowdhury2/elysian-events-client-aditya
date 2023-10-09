import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const createUser = ({ email, password }) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signIn = ({ email, password }) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	const updateNameAndDisplayPicture = ({ displayName }) => {
		return updateProfile(auth.currentUser, { displayName });
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setLoading(false);
			setUser(user);
		});
		return () => unSubscribe();
	}, []);
	const AuthData = {
		googleSignIn,
		createUser,
		signIn,
		user,
		logOut,
		loading,
		updateNameAndDisplayPicture,
	};
	return (
		<AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
