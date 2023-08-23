import React from "react";

function MainButton({text,onClick}) {
  return (
    <div>
      <button onClick={onClick} className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
        {text}
      </button>
    </div>
  );
}

export default MainButton;
