import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SiswaList = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [siswa, setSiswa] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getSiswa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getSiswa = async () => {
    const response = await axiosJwt.get("http://localhost:5000/siswa", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSiswa(response.data);
  };

  const handleDeleteSiswa = (id) => {
    axios.delete(`http://localhost:5000/siswa/${id}`).then((response) => {
      console.log("Data deleted:", response.data);
      getSiswa();
    });
  };

  return (
    <div className="mr-5 ml-5 mt-5">
      <button
        type="button"
        className="button is-info"
        onClick={() => {
          window.location.href = `/siswa/add`;
        }}
      >
        Tambah Siswa
      </button>
      <div className="columns is-multiline mt-2">
        {siswa.map((siswa) => (
          <div className="column is-one-quarter" key={siswa.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={siswa.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title is-4">{siswa.nama}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <button
                  type="button"
                  className="button card-footer-item is-info me-2"
                  onClick={() => {
                    // Logika atau tindakan yang ingin Anda jalankan saat tombol diklik
                    // Misalnya, pengalihan ke halaman edit
                    window.location.href = `/siswa/edit/${siswa.id}`;
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="button card-footer-item is-danger"
                  onClick={() => handleDeleteSiswa(siswa.id)}
                >
                  Hapus
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiswaList;
