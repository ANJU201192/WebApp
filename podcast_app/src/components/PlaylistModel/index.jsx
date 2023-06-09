import { useState, useEffect } from "react";
import TextField from "../Inputs/TextField";
import FileInput from "../Inputs/FileInput";
import Button from "../Button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.scss";

const PlaylistModel = ({ closeModel, playlist }) => {
	const [data, setData] = useState({
		name: "",
	});

	useEffect(() => {
		setData({ name: playlist.name, desc: playlist.desc });
	}, [playlist]);

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<div className={styles.model_container}>
			<IconButton className={styles.close_btn} onClick={closeModel}>
				<CloseIcon />
			</IconButton>
			<div className={styles.form_container}>
				<h1>Edit Details</h1>
				<div className={styles.input_container}>
					<TextField
						label="Name"
						name="name"
						value={data.name}
						handleInputState={handleInputState}
					/>
				</div>
				<div className={styles.input_container}>
					<TextField
						label="Description"
						name="desc"
						value={data.desc}
						handleInputState={handleInputState}
					/>
				</div>
				
				<Button
					label="Submit"
					onClick={handleSubmit}
					style={{
						position: "absolute",
						bottom: "0",
						right: "0",
						margin: "1rem",
					}}
				/>
			</div>
		</div>
	);
};

export default PlaylistModel;