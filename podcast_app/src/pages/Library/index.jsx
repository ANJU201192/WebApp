import { Link } from "react-router-dom";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, name: "Today's Top Podcasts" },
];

const Library = () => {
	return (
		<div className={styles.container}>
			<h1>Playlists</h1>
			<div className={styles.playlists_container}>
				<Link to="/collection/tracks">
					<div className={styles.liked_Podcasts}>
						<h1>Liked Podcasts</h1>
						<p>1 Liked Podcasts</p>
					</div>
				</Link>
				<Playlists playlists={playlists} />
			</div>
		</div>
	);
};

export default Library;