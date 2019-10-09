import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
export class Index extends Component {
	constructor(props) {
		super(props);
	}
	static async getInitialProps() {
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const { data } = res;
		return { posts: data };
	}
	render() {
		const { posts } = this.props;
		return (
			<div>
				<h1>Our Index Page</h1>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</div>
		);
	}
}

export default Index;
