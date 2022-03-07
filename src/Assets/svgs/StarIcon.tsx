import React from "react";

const StarIcon = () => {
  return (
    <div
      style={
        {
          // backgroundColor: "#F6F6F7",
          // height: "34px",
          // width: "34px",
          // borderRadius: 8
        }
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "7px",
          width: "34px"
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 9L9 10.5L7.5 9L9 7.5L10.5 9ZM9 4.5L10.59 6.09L12.465 4.215L9 0.75L5.535 4.215L7.41 6.09L9 4.5ZM4.5 9L6.09 7.41L4.215 5.535L0.75 9L4.215 12.465L6.09 10.59L4.5 9ZM13.5 9L11.91 10.59L13.785 12.465L17.25 9L13.785 5.535L11.91 7.41L13.5 9ZM9 13.5L7.41 11.91L5.535 13.785L9 17.25L12.465 13.785L10.59 11.91L9 13.5Z"
            fill="#585F67"
          />
        </svg>
      </div>
    </div>
  );
};

export default StarIcon;
