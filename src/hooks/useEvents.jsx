import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useEvents = () => {
	const {
		data: events,
		isLoading,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['event'],
		queryFn: async () => {
			const response = await axios.get('/event');
			return response.data;
		},
		retry: 5,
	});
	return { events, isLoading, isError, refetch };
};

export default useEvents;
