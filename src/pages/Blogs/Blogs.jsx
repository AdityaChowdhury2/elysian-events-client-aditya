import { Helmet } from 'react-helmet-async';
import PageHeader from '../../component/PageHeader/PageHeader';
import Blog from '../../component/Blog/Blog';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SmallContainer from '../../component/SmallContainer/SmallContainer';

const Blogs = () => {
	const {
		data: blogs,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ['blog'],
		queryFn: async () => {
			const response = await axios.get('/blog');
			return response.data;
		},
	});

	return (
		<div>
			<Helmet>
				<title>Elysian Events | Blog</title>
			</Helmet>
			<PageHeader title="Blogs From Us" page="Blog" />
			{isLoading ? (
				<SmallContainer>
					<span className="loading loading-spinner loading-lg text-orange-500"></span>
				</SmallContainer>
			) : isError ? (
				<SmallContainer>
					<p className="text-red-500 font-bold text-2xl">No data found</p>
				</SmallContainer>
			) : (
				<div className="container p-4 my-12 flex flex-col md:flex-row gap-20 ">
					<div className="md:w-2/3 space-y-8">
						{blogs.map(blog => (
							<Blog key={blog._id} blog={blog} />
						))}
					</div>
					<div></div>
				</div>
			)}
		</div>
	);
};

export default Blogs;
