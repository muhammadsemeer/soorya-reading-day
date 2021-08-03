import React from "react";

export default function Alert({msg}) {
  return (
    <div className="w-full border bg-yellow-100 bg-opacity-30 border-yellow-500 text-yellow-600 border-opacity-40 rounded-md h-12 flex items-center justify-center text-sm">
      <strong>Oops! &nbsp;</strong> {msg}
    </div>
  );
}
