export const School = ({ color = "#fff", height = "27", width = "27" }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 32 32"
      class="text-3xl"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
    </svg>
  );
};

export const Delete = ({ color = "#fff", height = "27", width = "27" }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      class="text-3xl"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
      ></path>
      <path
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 112h352"
      ></path>
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"
      ></path>
    </svg>
  );
};
