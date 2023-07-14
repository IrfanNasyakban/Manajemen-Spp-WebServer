/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BayarEdit = () => {
  const [nama, setnama] = useState("");
  const [kelas, setkelas] = useState("");
  const [semester, setsemester] = useState("");
  const [jumlah, setjumlah] = useState("");
  const [status, setstatus] = useState("");
  const [file, setfile] = useState("");
  const [preview, setpreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBayarById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateBayar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kelas", kelas);
    formData.append("semester", semester);
    formData.append("jumlah", jumlah);
    formData.append("status", status);
    formData.append("file", file);
    try {
      await axios.patch(`http://localhost:5000/bayar/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/bayar");
    } catch (error) {
      console.log(error);
    }
  };

  const getBayarById = async () => {
    const response = await axios.get(`http://localhost:5000/bayar/${id}`);
    setnama(response.data.nama);
    setkelas(response.data.kelas);
    setsemester(response.data.semester);
    setjumlah(response.data.jumlah);
    setstatus(response.data.status);
    setfile(response.data.image);
    setpreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setfile(image);
    setpreview(URL.createObjectURL(image));
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBayar}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                placeholder="Nama"
              />
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
              />
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
              />
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
              />
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
              />
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
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
          {preview ? (
            <figure className="image is-fullwidth">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default BayarEdit;
