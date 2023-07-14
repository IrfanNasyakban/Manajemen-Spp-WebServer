/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BayarAdd() {
  const [nama, setnama] = useState("");
  const [kelas, setkelas] = useState("");
  const [semester, setsemester] = useState("");
  const [jumlah, setjumlah] = useState("");
  const [status, setstatus] = useState("");
  const [file, setfile] = useState("");
  const [preview, setpreview] = useState("");
  const navigate = useNavigate();

  const saveBayar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kelas", kelas);
    formData.append("semester", semester);
    formData.append("jumlah", jumlah);
    formData.append("status", status);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/bayar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/bayar");
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setfile(image);
    setpreview(URL.createObjectURL(image));
  };

  return (
    <div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={saveBayar}>
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setnama(e.target.value)}
                  placeholder="Nama"
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Kelas</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={kelas}
                  onChange={(e) => setkelas(e.target.value)}
                  placeholder="Kelas"
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Semester</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={semester}
                  onChange={(e) => setsemester(e.target.value)}
                  placeholder="Semester"
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Jumlah</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={jumlah}
                  onChange={(e) => setjumlah(e.target.value)}
                  placeholder="Jumlah"
                ></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={status}
                  onChange={(e) => setstatus(e.target.value)}
                  placeholder="Status"
                ></input>
              </div>
            </div>
            
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-success">Save</button>
              </div>
            </div>
            <h3>Preview</h3>
            {preview ? (
              <figure>
                <img
                  src={preview}
                  style={{ width: "40%" }}
                  alt="Preview Image"
                />
              </figure>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default BayarAdd;
