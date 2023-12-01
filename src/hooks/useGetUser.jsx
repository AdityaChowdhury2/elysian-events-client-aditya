import axios from 'axios';
import useAuthData from './useAuthData';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
	const { user, loading } = useAuthData();
	const { data: userDetails, refetch } = useQuery({
		queryKey: ['singleUser'],
		queryFn: async () => {
			const response = await axios.get(`/user/${user.email}`);
			return response.data;
		},
		enabled: !!user && !loading,
	});
	return { userDetails, refetch };
};

export default useGetUser;
