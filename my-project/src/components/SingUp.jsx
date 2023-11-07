import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmpasword, setConfirmpasword] = useState();
  const [pic, setpic] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const hadleclick = () => setShow(!show);
  const postDetails = (pics) => {
    //
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!name || !email || !password || !confirmpasword) {
      toast.error("all filed are required");
      setLoading(false);
      return;
    }
    if (password !== confirmpasword) {
      toast.error("password not match");
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/user`,
        { name, email, password, pic },
        config
      );

      toast.success("wow your account is created");
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className=" ">
      <Toaster />
      {loading && <p>Loading......</p>}
      <h4 className="my-10 text-center text-xl font-bold">create user</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="">name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="inpt cbtn"
          id=""
          required
        />
        <label htmlFor="">email</label>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="inpt cbtn"
          id=""
        />
        <label htmlFor="">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="inpt cbtn"
          id=""
        />
        <label htmlFor="">c-password</label>
        <input
          onChange={(e) => setConfirmpasword(e.target.value)}
          type="password"
          name="c-password"
          className="inpt cbtn"
          id=""
        />

        <input
          onChange={(e) => setDetails(e.target.files[0])}
          type="file"
          name="image"
          accept="image/*"
          className="inpt cbtn"
          id=""
        />
        <input
          type="submit"
          value="create"
          className="inpt cbtn hover:bg-gray-700 cursor-pointer transition-all duration-500 rounded"
        />
      </form>
    </div>
  );
};

export default SingUp;
