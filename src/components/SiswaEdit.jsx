/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SiswaEdit = () => {
  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [kelas, setkelas] = useState("");
  const [semester, setsemester] = useState("");
  const [nis, setnis] = useState("");
  const [ttl, setttl] = useState("");
  const [alamat, setalamat] = useState("");
  const [wali_kelas, setwali_kelas] = useState("");
  const [ayah, setayah] = useState("");
  const [pekerjaan_ayah, setpekerjaan_ayah] = useState("");
  const [ibu, setibu] = useState("");
  const [pekerjaan_ibu, setpekerjaan_ibu] = useState("");
  const [no_hp, setno_hp] = useState("");
  const [file, setfile] = useState("");
  const [preview, setpreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSiswaById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSiswa = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("kelas", kelas);
    formData.append("semester", semester);
    formData.append("nis", nis);
    formData.append("ttl", ttl);
    formData.append("alamat", alamat);
    formData.append("wali_kelas", wali_kelas);
    formData.append("ayah", ayah);
    formData.append("pekerjaan_ayah", pekerjaan_ayah);
    formData.append("ibu", ibu);
    formData.append("pekerjaan_ibu", pekerjaan_ibu);
    formData.append("no_hp", no_hp);
    formData.append("file", file);
    try {
      await axios.patch(`http://localhost:5000/siswa/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/siswa");
    } catch (error) {
      console.log(error);
    }
  };

  const getSiswaById = async () => {
    const response = await axios.get(`http://localhost:5000/siswa/${id}`);
    setnama(response.data.nama);
    setemail(response.data.email);
    setkelas(response.data.kelas);
    setsemester(response.data.semester);
    setnis(response.data.nis);
    setttl(response.data.ttl);
    setalamat(response.data.alamat);
    setwali_kelas(response.data.wali_kelas);
    setayah(response.data.ayah);
    setpekerjaan_ayah(response.data.pekerjaan_ayah);
    setibu(response.data.ibu);
    setpekerjaan_ibu(response.data.pekerjaan_ibu);
    setno_hp(response.data.no_hp);
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
      <div className="column is-two-thirds">
        <form onSubmit={updateSiswa}>
          <div className="columns">
            {/* Bagian Kiri */}
            <div className="column">
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
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Email"
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
                <label className="label">Nis</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nis}
                    onChange={(e) => setnis(e.target.value)}
                    placeholder="Nis"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tempat Tanggal Lahir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={ttl}
                    onChange={(e) => setttl(e.target.value)}
                    placeholder="Tempat Tanggal Lahir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setalamat(e.target.value)}
                    placeholder="Alamat"
                  />
                </div>
              </div>
            </div>
            {/* Bagian Kanan */}
            <div className="column">
              <div className="field">
                <label className="label">Wali Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={wali_kelas}
                    onChange={(e) => setwali_kelas(e.target.value)}
                    placeholder="Wali Kelas"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Ayah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={ayah}
                    onChange={(e) => setayah(e.target.value)}
                    placeholder="Nama Ayah"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pekerjaan Ayah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pekerjaan_ayah}
                    onChange={(e) => setpekerjaan_ayah(e.target.value)}
                    placeholder="Pekerjaan Ayah"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Ibu</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={ibu}
                    onChange={(e) => setibu(e.target.value)}
                    placeholder="Nama Ibu"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pekerjaan Ibu</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pekerjaan_ibu}
                    onChange={(e) => setpekerjaan_ibu(e.target.value)}
                    placeholder="Pekerjaan Ibu"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Hp</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={no_hp}
                    onChange={(e) => setno_hp(e.target.value)}
                    placeholder="No Hp"
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
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
          {preview ? (
            <figure className="image is-128x128">
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

export default SiswaEdit;
