// tried modularizing editbutton

// import React from "react";

// interface EditButtonProps {
//   setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
//   isHovered: boolean;
//   handleEditHover: (bool: boolean) => void;
//   children: React.ReactNode;
// }

// const EditButton: React.FC<EditButtonProps> = ({
//   setEditMode,
//   handleEditHover,
//   isHovered,
//   children,
// }) => {
//   return (
//     <div
//       onClick={() => setEditMode(false)}
//       onMouseEnter={() => handleEditHover(true)}
//       onMouseLeave={() => handleEditHover(false)}
//       className={isHovered ? "edit-icon" : "edit-icon hidden"}
//     >
//       {children} {/* Render the children */}
//     </div>
//   );
// };

// export default EditButton;
