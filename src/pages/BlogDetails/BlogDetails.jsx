import { useEffect, useState } from 'react';
import PageHeader from '../../component/PageHeader/PageHeader';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcShare } from 'react-icons/fc';
import parse from 'html-react-parser';

const BlogDetails = () => {
	const [singleBlog, setSingleBlog] = useState(null);
	const blogs = useLoaderData();
	const [loading, setLoading] = useState(true);
	const { blogId } = useParams();

	useEffect(() => {
		const blog = blogs.find(blog => blog.id === Number(blogId));
		setSingleBlog(blog);
		setLoading(false);
	}, [blogId, blogs]);
	console.log(singleBlog);
	console.log(loading);

	return (
		<div>
			<PageHeader title="Read The Full Blog" page={'BlogDetails'} />
			{loading ? (
				<div className="flex items-center justify-center h-[30vh]">
					<span className="loading loading-spinner loading-lg text-orange-500"></span>
				</div>
			) : (
				<div className="container p-4 my-12 flex flex-col md:flex-row gap-20 ">
					<div className="md:w-2/3 space-y-8">
						<h2
							className=" font-bold text-2xl md:text-5xl
                        leading-normal"
						>
							{singleBlog.title}
						</h2>
						<img src={singleBlog.image} alt="" className="rounded-lg" />
						<div className="flex justify-between items-center">
							<div className="flex gap-4">
								<div className="avatar">
									<div className="w-10 rounded-full ">
										<img src="https://randomuser.me/api/portraits/men/24.jpg" />
									</div>
								</div>
								<div>
									<p>{singleBlog.author}</p>
									<p>{singleBlog.date}</p>
								</div>
							</div>
							<div className="cursor-pointer">
								<FcShare size={30} />
							</div>
						</div>
						<div className="text-justify whitespace-pre-wrap">
							{parse(singleBlog.content)}
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
