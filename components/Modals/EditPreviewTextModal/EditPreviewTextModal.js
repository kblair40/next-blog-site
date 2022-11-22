import React, { useRef, useState } from "react";
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

import api from "utils/api";

const EditPreviewTextModal = ({ isOpen, onClose, postId, previewText }) => {
  const [saving, setSaving] = useState(false);
  const inputRef = useRef();

  const handleClickSave = async () => {
    if (!inputRef.current?.value) return;
    setSaving(true);
    try {
      const response = await api.patch(`/posts/${postId}`, {
        preview_text: inputRef.current.value,
      });
      console.log("PREVIEW TEXT PATCH RESPONSE:", response.data);
      onClose();
    } catch (e) {
      console.log("FAILED TO SAVE PREVIEW TEXT:", e);
    }
    setSaving(false);
  };

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
          <Button
            isLoading={saving}
            colorScheme="blue"
            onClick={handleClickSave}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPreviewTextModal;
