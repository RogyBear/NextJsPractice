import axios from 'axios';
const Posts = ({ id, comments }) => (
	<div>
		<h1>YOU ARE LOOKING AT POST # {id}</h1>

		{comments.map((comment) => <Comment {...comment} key={comment.id} />)}
	</div>
);

const Comment = ({ email, body }) => (
	<div>
		<h4>{email}</h4>
		<p>{body}</p>
	</div>
);

Posts.getInitialProps = async ({ query }) => {
    
	const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
	const { data } = res;
	console.log(query.id);
	return { ...query, comments: data };
};

export default Posts;
