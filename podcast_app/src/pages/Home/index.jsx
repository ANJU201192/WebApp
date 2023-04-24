import { Fragment } from "react";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, name: "Today's Top Podcasts"},
];

const Home = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<h1>Good afternoon</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
				<h1>Just the hits</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;