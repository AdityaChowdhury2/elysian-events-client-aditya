import { Helmet } from 'react-helmet-async';
import PageHeader from '../../component/PageHeader/PageHeader';
import { useLoaderData } from 'react-router-dom';
import Blog from '../../component/Blog/Blog';

const Blogs = () => {
	const blogs = useLoaderData();
	console.log(blogs);
	return (
		<div>
			<Helmet>
				<title>Elysian Events | Blog</title>
			</Helmet>
			<PageHeader title="Blogs From Us" />
			<div className="container p-4 my-12 flex flex-col md:flex-row gap-20 ">
				<div className="md:w-2/3 space-y-8">
					{blogs.map(blog => (
						<Blog key={blog.id} blog={blog} />
					))}
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Blogs;
