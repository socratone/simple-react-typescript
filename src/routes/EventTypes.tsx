import React, { useState } from "react";

const EventTypes = () => {
  const [value, setValue] = useState("");

  return (
    <main>
      <div
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          console.log(event.target);
        }}
      >
        클릭
      </div>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          console.log(event.target);
        }}
      >
        클릭
      </button>
      <input
        value={value}
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </main>
  );
};

export default EventTypes;
