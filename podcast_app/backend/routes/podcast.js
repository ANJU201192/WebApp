const router = require("express").Router();
const { User } = require("../models/user");
const { podcast, validate } = require("../models/podcast");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");

// Create podcast
router.post("/", admin, async (req, res) => {
	const { error } = validate(req.body);
	if (error) res.status(400).send({ message: error.details[0].message });

	const podcast = await podcast(req.body).save();
	res.status(201).send({ data: podcast, message: "podcast created successfully" });
});

// Get all podcasts
router.get("/", async (req, res) => {
	const podcasts = await podcast.find();
	res.status(200).send({ data: podcasts });
});

// Update podcast
router.put("/:id", [validateObjectId, admin], async (req, res) => {
	const podcast = await podcast.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.send({ data: podcast, message: "Updated podcast successfully" });
});

// Delete podcast by ID
router.delete("/:id", [validateObjectId, admin], async (req, res) => {
	await podcast.findByIdAndDelete(req.params.id);
	res.status(200).send({ message: "podcast deleted sucessfully" });
});

// Like podcast
router.put("/like/:id", [validateObjectId, auth], async (req, res) => {
	let resMessage = "";
	const podcast = await podcast.findById(req.params.id);
	if (!podcast) return res.status(400).send({ message: "podcast does not exist" });

	const user = await User.findById(req.user._id);
	const index = user.likedpodcasts.indexOf(podcast._id);
	if (index === -1) {
		user.likedpodcasts.push(podcast._id);
		resMessage = "Added to your liked podcasts";
	} else {
		user.likedpodcasts.splice(index, 1);
		resMessage = "Removed from your liked podcasts";
	}

	await user.save();
	res.status(200).send({ message: resMessage });
});

// Get liked podcasts
router.get("/like", auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	const podcasts = await podcast.find({ _id: user.likedpodcasts });
	res.status(200).send({ data: podcasts });
});

module.exports = router;