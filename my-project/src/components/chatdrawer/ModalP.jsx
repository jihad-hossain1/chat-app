import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";

const ModalP = ({ isOpen, onOpen, onClose }) => {
  const { user } = ChatState();
  // console.log(user);
  return (
    <div>
      <Button onClick={onOpen}>Profile</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className="flex justify-center">
              <img src={user?.pic} alt="" />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalP;
