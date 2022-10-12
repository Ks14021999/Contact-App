import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [picture, setpicture] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [groupName, setGroupName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setpicture(res.data.picture);
      setName(res.data.name);
      setGender(res.data.gender);
      setPhone(res.data.phone);
      setGroupName(res.data.groupName);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    picture: picture,
    name: name,
    gender: gender,
    phone: phone,
    groupName: groupName,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
      <input
          value={picture}
          onChange={(e) => setpicture(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="url"
          placeholder="Enter your picture url"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
          required='true'
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your gender"
          required='true'
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
          required='true'
        />
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your Group Name."
          required='true'
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Add;
