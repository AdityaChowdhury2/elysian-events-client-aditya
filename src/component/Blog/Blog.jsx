import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
	// console.log(blog);
	const { author, content, date, id, image, title } = blog || {};
	return (
		<>
			<div className="flex flex-col rounded-xl bg-base-100 shadow-xl ">
				<div className="h-96">
					<img
						src={blog.image}
						alt="Album"
						className="rounded-t-xl h-full w-full"
					/>
				</div>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{author}</p>
					<p>
						{content.slice(0, 100)}...{' '}
						<Link
							to=""
							className="text-orange-500 duration-600 transition ease-in-out hover:text-orange-600 underline underline-offset-2 font-medium"
						>
							Read more
						</Link>{' '}
					</p>
				</div>
			</div>
		</>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default Blog;
