import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";


const BayarList = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [bayar, setBayar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getBayar();
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

  const getBayar = async () => {
    const response = await axiosJwt.get("http://localhost:5000/bayar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBayar(response.data);
  };

  const handleDeletePlatform = (id) => {
    axios.delete(`http://localhost:5000/bayar/${id}`).then((response) => {
      console.log("Data deleted:", response.data);
      getBayar();
    });
  };

  return (
    <div className="container mt-5">
      <button
        type="button"
        className="button is-info"
        onClick={() => {
          window.location.href = `/bayar/add`;
        }}
      >
        Tambah Bayar
      </button>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Semester</th>
            <th>Jumlah</th>
            <th>Status</th>
            <th>Tanggal</th>
            <th>Bukti</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bayar.map((bayar, index) => (
            <tr key={bayar.id}>
              <td>{index + 1}</td>
              <td>{bayar.nama}</td>
              <td>{bayar.kelas}</td>
              <td>{bayar.semester}</td>
              <td>{bayar.jumlah}</td>
              <td>{bayar.status}</td>
              <td>{moment(bayar.createdAt).format("YYYY-MM-DD")}</td>
              <td>
                <a href={bayar.url} target="_blank" rel="noreferrer">
                  Lihat
                </a>
              </td> 
              <td>
              <Link to={`edit/${bayar.id}`} className='button is-small is-info mr-2'>Edit</Link>
                <button
                  type="button"
                  className="button is-small is-danger"
                  onClick={() => handleDeletePlatform(bayar.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BayarList;
