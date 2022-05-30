const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { AddSong, GetSong } = require("../../../controllers/SongController");

const storage = multer.diskStorage({
  destination: "public/uploads/cover-images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}); // 10 MB limit

router.get("/", (req, res) => {
  GetSong(res);
});

router.post("/", upload.single("cover_image"), (req, res) => {
  // Validation
  const { song_name, release_date, artists_id_list } = req.body;
  const cover_image = req.file;

  if (!req.file || !song_name || !release_date || !artists_id_list)
    res.sendStatus(400).send({ message: "Bad request!" });

  const song = {
    name: song_name,
    release_date: release_date,
    cover_image_path: "public/uploads/cover-images/" + cover_image.filename,
    artists_id_list,
  };
  // Register new songs

  AddSong(song, res);
});

module.exports = router;
