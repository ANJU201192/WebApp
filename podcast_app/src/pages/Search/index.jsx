import { Fragment, useState } from "react";
import podcast from "../../components/podcast";
import Playlists from "../../components/Playlists";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, name: "Today's Top podcasts" },
];

const podcasts = [
	{ _id: 1, name: "Today's Top podcasts" },
];

const Search = () => {
	const [search, setSearch] = useState("");
	const handleSearch = async ({ currentTarget: input }) => {
		setSearch(input.value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.search_input_container}>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input
					type="text"
					placeholder="Search for podcasts and playlists"
					onChange={handleSearch}
					value={search}
				/>
				<IconButton onClick={() => setSearch("")}>
					<ClearIcon />
				</IconButton>
			</div>
			<div className={styles.results_container}>
				<div className={styles.podcasts_container}>
					{podcasts.map((podcast) => (
						<Fragment key={podcast._id}>
							<podcast podcast={podcast} />
						</Fragment>
					))}
				</div>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</div>
	);
};

export default Search;