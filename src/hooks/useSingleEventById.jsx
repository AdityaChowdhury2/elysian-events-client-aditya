import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useSingleEventById = eventId => {
	const {
		data: event,
		isError,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['singleEvent', eventId],
		queryFn: async () => {
			const response = await axios.get(`/event/${eventId}`);
			return response.data;
		},
		retry: 5,
	});
	return { event, isError, isLoading, refetch };
};

export default useSingleEventById;
