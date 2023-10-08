import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPenNib } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';

const Blog = ({ blog }) => {
	// console.log(blog);
	const { author, content, date, id, image, title } = blog || {};
	return (
		<>
			<div className="flex flex-col rounded-xl bg-base-100 shadow-xl ">
				<div className="h-96">
					<img src={image} alt="Album" className="rounded-t-xl h-full w-full" />
				</div>
				<div className="card-body">
					<h2 className="card-title text-3xl">{title}</h2>
					<div className="flex justify-between">
						<p className="flex items-center gap-4">
							<FaPenNib />
							{author}
						</p>
						<p className="flex items-center justify-end gap-4">
							{date}
							<BsCalendarDate size={'18px'} />
						</p>
					</div>
					<p>
						{content?.slice(0, 100)}...
						<Link
							to={`/blog/${id}`}
							className="text-orange-500 duration-600 transition ease-in-out hover:text-orange-600 underline underline-offset-2 font-semibold"
						>
							Read more
						</Link>
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
