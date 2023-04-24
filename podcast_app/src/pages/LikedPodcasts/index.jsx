import { Fragment } from "react";
import Podcasts from "../../components/Podcasts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import peaches from "../../images/peaches.jpg";

const podcasts = [
	{ _id: 1, name: "Peaches", artist: "Justin Bieber" },
];

const LikedPodcasts = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>Liked Podcasts</h1>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body_nav}>
					<div className={styles.left}>
						<span>#</span>
						<p>Title</p>
					</div>
					<div className={styles.center}>
						<p>Artist</p>
					</div>
					<div className={styles.right}>
						<AccessTimeIcon />
					</div>
				</div>

				{podcasts.map((song) => (
					<Fragment key={song._id}>
						<Podcasts song={song} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default LikedPodcasts;