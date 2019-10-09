import Link from 'next/link';
import { generateKeyPair } from 'crypto';

const NavBar = () => {
	const styles = {
		display: 'flex',
		background: 'grey',
		justifyContent: 'space-around',
		color: 'white',
		padding: 1
	};

	return (
		<div style={styles}>
			<Link href="/">
				<a>Home Page</a>
			</Link>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<Link href="/contact">
				<a>Contact Page</a>
			</Link>
		</div>
	);
};

export default NavBar;
