import React from "react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

interface FormButtonProps {
  size: number;
  add: () => void;
  remove: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ size, add, remove }) => {
  return (
    <div className="flex-wrap-gap-2 mb-2">
      <button
        type="button"
        onClick={add}
        aria-label="Add"
        className="p-2 text-white bg-fuchsia-700 rounded text-xl"
      >
        <MdAddCircle />
      </button>
      {size > 0 && (
        <button
          type="button"
          onClick={remove}
          aria-label="Remove"
          className="p-2 text-white bg-fuchsia-700 rounded text-xl"
        >
          <MdRemoveCircle />
        </button>
      )}
    </div>
  );
};

export default FormButton;
