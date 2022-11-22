import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Textarea,
  Button,
} from "@chakra-ui/react";

const EditPreviewTextModal = ({ isOpen, onClose, postId, previewText }) => {
  const inputRef = useRef();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Preview Text</ModalHeader>
        <ModalBody>
          <Textarea rows={10} ref={inputRef} defaultValue={previewText} />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} mr="1rem">
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPreviewTextModal;
