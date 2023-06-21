import React from "react";

interface EditButtonProps {
  setEditMode: (bool: boolean) => void;
  setEditMode: (bool: boolean) => void;
}

const EditButton: React.FC<EditButtonProps> = ({
    setEditMode,
  handleEditHover,
}) => {
  return (
    <span
      onClick={() => setEditMode(false)}
      onMouseEnter={onMouseEnter(true)}
      onMouseLeave={() => handleEditHover(false)}
      className={isHovered ? "edit-icon" : "edit-icon hidden"}
    ></span>
  );
};

export default EditButton;
