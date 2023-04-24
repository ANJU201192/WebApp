import { useState } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.scss";
import PlaylistMenu from "../PlaylistMenu";

const Podcast = ({ podcast, playlist }) => {
	const [menu, setMenu] = useState(false);

	return (
		<div className={styles.podcast_container}>
			<div className={styles.left}>
				<IconButton className={styles.play_btn}>
					<PlayArrowIcon />
				</IconButton>
				<p>{podcast.name}</p>
			</div>
			<div className={styles.center}>
				<p>{podcast.artist}</p>
			</div>
			<div className={styles.right}>
				<Like podcastId={podcast._id} />
				<p>4.30</p>
				<IconButton className={styles.menu_btn} onClick={() => setMenu(true)}>
					<MoreHorizIcon />
				</IconButton>
				{menu && (
					<PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
				)}
			</div>
		</div>
	);
};

export default Podcast;