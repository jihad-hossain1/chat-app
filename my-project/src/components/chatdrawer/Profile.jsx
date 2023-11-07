import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FaSignOutAlt, FaUserCog } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import ModalP from "./ModalP";

const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        <FaUserCog size={27} />
      </button>
      {toggle && (
        <div className="fixed bg-zinc-600 p-3 z-10 right-4 mt-5 flex flex-col gap-5">
          <button onClick={onOpen} className="text-center">
            <ModalP isOpen={isOpen} onClose={onClose} />
          </button>
          <button onClick={handleLogout} className="flex gap-2">
            <FaSignOutAlt size={27} /> <span>Sign out</span>
          </button>
        </div>
      )}

      {/* modal component  */}
    </div>
  );
};

export default Profile;
