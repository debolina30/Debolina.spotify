const { db } = require("../utils/Database");

const AddArtist = (artist, res) => {
  let sql = "INSERT INTO artists (name, dob, bio) VALUES (?, ?, ?);";
  console.log(typeof artist.dob);
  db.query(sql, [artist.name, artist.dob, artist.bio], (err, rows) => {
    if (err) {
      res.status(500).send({
        message: "Error! Artists not created!",
      });
      throw err;
    }

    sql = "SELECT * FROM artists WHERE artist_id = " + rows.insertId;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(200).send({
          message: "Created the new artist",
          newArtist: null,
        });
      }

      res.status(200).send({
        message: "Created the new artist",
        newArtist: rows[0],
      });
    });
  });
  return null;
};

const GetArtists = (req, res) => {
  let filters = req.query.filters.split(",");
  const artistColumns = ["artist_id", "name", "dob", "bio"];
  let neededColumns = artistColumns.filter((x) => !filters.includes(x));

  if (neededColumns.length <= 0) {
    res.status(400).send({ message: "All coloumns are filtered" });
  }

  let sql = `SELECT ${neededColumns.toString(",")} FROM artists`;
  db.query(sql, filters, (err, rows) => {
    if (err) {
      res.status(500);
      throw err;
    }
    res.status(200).send(rows);
  });
};

module.exports = { AddArtist, GetArtists };
