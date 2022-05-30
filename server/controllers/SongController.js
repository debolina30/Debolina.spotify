const { db } = require("../utils/Database");

const AddSong = (songs, res) => {
  let sql = `INSERT INTO songs (name, release_date, cover_image_path) VALUES (?,?, ?);`; // Run into some trouble where the date was given as a string
  db.query(
    sql,
    [songs.name, songs.release_date, songs.cover_image_path],
    (err, rows) => {
      if (err) {
        res.status(500).send({
          message: "Error! Song not created!",
        });
        throw err;
      }

      // Populate song_artists table with necessary entries
      const added_song_id = rows.insertId;

      songs.artists_id_list.forEach((artist) => {
        sql = `INSERT INTO song_artists SELECT artists.artist_id, songs.song_id FROM artists, songs WHERE artists.artist_id = ${artist} and songs.song_id = ${added_song_id};`;
        db.query(sql, (err, rows) => {
          if (err) {
            if (err.errno !== 1062) {
              // Duplicate error;
              console.log("Duplicate error is disregarded");
            } else throw err;
          }
        });
      });

      res.status(200).send({ message: "Created the new song!" });

      // sql = "SELECT * FROM artists WHERE artist_id = " + rows.insertId;
      // db.query(sql, (err, rows) => {
      //   if (err) {
      //     res.status(200).send({
      //       message: "Created the new artist",
      //       newArtist: null,
      //     });
      //   }

      //   res.status(200).send({
      //     message: "Created the new artist",
      //     newArtist: rows[0],
      //   });
      // });
    }
  );
  return null;

  res.status(200).send(song);
};

const GetSong = (res) => {
  let sql = `SELECT songs.*, GROUP_CONCAT(artists.name SEPARATOR ', ') from songs LEFT JOIN song_artists ON songs.song_id = song_artists.song_id LEFT JOIN artists ON song_artists.artist_id = artists.artist_id GROUP BY songs.song_id;`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send({
        message: "Error!",
      });
      throw err;
    }

    res.status(200).send(rows);
  });
};
module.exports = { AddSong, GetSong };
