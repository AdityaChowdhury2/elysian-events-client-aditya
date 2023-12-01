import PageHeader from '../../component/PageHeader/PageHeader';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FcShare } from 'react-icons/fc';
import parse from 'html-react-parser';
import axios from 'axios';
import SmallContainer from '../../component/SmallContainer/SmallContainer';

const BlogDetails = () => {
	const { blogId } = useParams();
	const {
		data: blog,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['blog', blogId],
		queryFn: async () => {
			const response = await axios.get(`/blog/${blogId}`);
			return response.data;
		},
	});
	const { title, image, author, date, content } = blog || {};
	return (
		<div>
			<PageHeader title="Read The Full Blog" page={'BlogDetails'} />
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
						<h2
							className=" font-bold text-2xl md:text-5xl
                        leading-normal"
						>
							{title}
						</h2>
						<img src={image} alt="" className="rounded-lg" />
						<div className="flex justify-between items-center">
							<div className="flex gap-4">
								<div className="avatar">
									<div className="w-10 rounded-full ">
										<img src="https://randomuser.me/api/portraits/men/24.jpg" />
									</div>
								</div>
								<div>
									<p>{author}</p>
									<p>{date}</p>
								</div>
							</div>
							<div className="cursor-pointer">
								<FcShare size={30} />
							</div>
						</div>
						<div className="text-justify whitespace-pre-wrap">
							{parse(content)}
						</div>
					</div>
					<div></div>
				</div>
			)}
		</div>
	);
};

BlogDetails.propTypes = {};

export default BlogDetails;
