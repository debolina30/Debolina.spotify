import React from "react";

import Select from "react-select";

import Modal from "../components/shared/Modal";
import { useState } from "react";
import AddArtistSection from "./AddArtistSection";

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
  const [dateReleased, setDateReleased] = useState();
  const [coverImage, setCoverImage] = useState();
  const [artists, setArtists] = useState([]);

  return (
    <div>
      <form>
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
            value={coverImage}
            onChange={(e) => {
              setCoverImage(e.target.value);
            }}
          />
        </div>

        <div className="artists-input-section">
          <div className="input-group">
            <label htmlFor="song-artists">Artists</label>
            <Select
              isMulti
              options={options}
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
        <button type="submit">Submit</button>
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
