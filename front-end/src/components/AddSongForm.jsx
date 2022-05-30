import React, { useContext, useEffect } from "react";

import Select from "react-select";

import Modal from "../components/shared/Modal";
import { useState } from "react";
import AddArtistSection from "./AddArtistSection";
import Axios from "axios";
import DataContext from "../contexts/DataContext";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function AddSongForm() {
  // Add artist modal
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);

  const addSongModalCloseHandler = () => {
    setAddSongModalOpen(false);
  };

  const addSongBtnClickHandler = (e) => {
    e.preventDefault();
    setAddSongModalOpen(true);
  };

  // Add songs
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [songName, setSongName] = useState("");
  const [dateReleased, setDateReleased] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [artists, setArtists] = useState([]);

  const { artistsList, setArtistsList } = useContext(DataContext);

  useEffect(() => {
    if (!artistsList || artistsList.length === 0) {
      Axios.get(SERVER_URL + "artists?filters=dob,bio").then((res) => {
        setArtistsList(res.data);
      });
    }
  });

  const artistListToSelectOption = (artistsList) => {
    return artistsList.map((a) => {
      const b = {};
      b.value = a.artist_id;
      b.label = a.name;

      return b;
    });
  };

  const coverImageChangeHandler = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Validate data

    const formdata = new FormData();
    formdata.append("song_name", songName);
    formdata.append("release_date", dateReleased);
    formdata.append("cover_image", coverImage);
    formdata.append(
      "artists_id_list",
      artists.map((a) => a.value)
    );

    Axios.post(SERVER_URL + "songs", formdata).catch((err) => console.log(err));
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <div className="input-group">
          <label htmlFor="song-name">Song name</label>
          <input
            type="text"
            name="song-name"
            value={songName}
            onChange={(e) => {
              setSongName(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="song-release-date">Release date</label>
          <input
            type="date"
            name="song-release-date"
            value={dateReleased}
            onChange={(e) => {
              setDateReleased(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="song-cover-image">Cover image</label>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            name="song-cover-image"
            onChange={coverImageChangeHandler}
          />
        </div>

        <div className="artists-input-section">
          <div className="input-group">
            <label htmlFor="song-artists">Artists</label>
            <Select
              isMulti
              options={artistListToSelectOption(artistsList)}
              value={artists}
              onChange={(val) => {
                setArtists(val);
              }}
            />
          </div>
          <button id="add-artists" onClick={addSongBtnClickHandler}>
            Add artist
          </button>
        </div>
        <button type="submit" onClick={SubmitHandler}>
          Submit
        </button>
      </form>
      <Modal
        name="add-artist"
        isOpen={addSongModalOpen}
        onCloseHandler={addSongModalCloseHandler}
      >
        <AddArtistSection />
      </Modal>
    </div>
  );
}
