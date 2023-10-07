import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuthData = () => {
	const allAuthData = useContext(AuthContext);
	return allAuthData;
};

export default useAuthData;
