import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!email || !password) {
      toast.error("all filed are required");
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
        `http://localhost:5000/api/user/login`,
        { email, password },
        config
      );

      toast.success("login successfull");
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
      <h4 className="my-10 text-center text-xl font-bold">login user</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

        <input
          type="submit"
          value="login"
          className="inpt cbtn hover:bg-gray-700 cursor-pointer transition-all duration-500 rounded"
        />
      </form>
    </div>
  );
};

export default SignUp;
