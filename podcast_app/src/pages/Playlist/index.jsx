import { useState, Fragment } from "react";
import podcast from "../../components/podcast";
import PlaylistModel from "../../components/PlaylistModel";
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";

const playlist = {
	_id: 1,
	name: "Today's Top podcasts"
};

const podcasts = [
	{ _id: 1, name: "Peaches", artist: "Justin Bieber" },
];

const Playlist = () => {
	const [model, setModel] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				

				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>{playlist.name}</h1>
					<span>{playlist.desc}</span>
				</div>

				<div className={styles.actions_container}>
					<IconButton onClick={() => setModel(true)}>
						<EditIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
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
				{podcasts.map((podcast) => (
					<Fragment key={podcast._id}>
						<podcast podcast={podcast} playlist={playlist} />
					</Fragment>
				))}
			</div>
			{model && (
				<PlaylistModel closeModel={() => setModel(false)} playlist={playlist} />
			)}
		</div>
	);
};

export default Playlist;