import React from "react";

export const HashtagIcon = props => (
  <svg
    {...props}
    width="10px"
    height="10px"
    viewBox="0 0 10 10"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M2.25416667,7.75 L2.55,6.08333333 L0.883333333,6.08333333 L1.02916667,5.25 L2.69583333,5.25 L3.1375,2.75 L1.47083333,2.75 L1.61666667,1.91666667 L3.28333333,1.91666667 L3.57916667,0.25 L4.4125,0.25 L4.11666667,1.91666667 L6.61666667,1.91666667 L6.9125,0.25 L7.74583333,0.25 L7.45,1.91666667 L9.11666667,1.91666667 L8.97083333,2.75 L7.30416667,2.75 L6.8625,5.25 L8.52916667,5.25 L8.38333333,6.08333333 L6.71666667,6.08333333 L6.42083333,7.75 L5.5875,7.75 L5.88333333,6.08333333 L3.38333333,6.08333333 L3.0875,7.75 L2.25416667,7.75 L2.25416667,7.75 Z M3.97083333,2.75 L3.52916667,5.25 L6.02916667,5.25 L6.47083333,2.75 L3.97083333,2.75 Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const HomeIcon = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const ChevronRight = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
  >
    <path
      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      fill="currentColor"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const ArticleIcon = props => (
  <svg
    {...props}
    width="12px"
    height="16px"
    viewBox="0 0 12 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M1.5,0.5 C0.675,0.5 0.0075,1.175 0.0075,2 L0,14 C0,14.825 0.6675,15.5 1.4925,15.5 L10.5,15.5 C11.325,15.5 12,14.825 12,14 L12,5 L7.5,0.5 L1.5,0.5 Z M6.75,5.75 L6.75,1.625 L10.875,5.75 L6.75,5.75 Z"
      fillRule="nonzero"
      fill="currentColor"
    />
  </svg>
);

export const CategoryIcon = ({ category, ...props }) => {
  switch (category) {
    case "getting-started":
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="currentColor"
          />
        </svg>
      );
    case "messaging":
      return (
        <svg
          {...props}
          width="16"
          height="16"
          viewBox="0 0 16 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M12.825,2.7 L11.475,2.7 L11.475,8.775 L2.7,8.775 L2.7,10.125 C2.7,10.49625 3.00375,10.8 3.375,10.8 L10.8,10.8 L13.5,13.5 L13.5,3.375 C13.5,3.00375 13.19625,2.7 12.825,2.7 Z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
          <path
            d="M10.125,6.75 L10.125,0.675 C10.125,0.30375 9.82125,0 9.45,0 L0.675,0 C0.30375,0 0,0.30375 0,0.675 L0,10.125 L2.7,7.425 L9.45,7.425 C9.82125,7.425 10.125,7.12125 10.125,6.75 Z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </svg>
      );

    case "extending-ui":
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
            fill="currentColor"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      );

    case "management":
      return (
        <svg
          {...props}
          width="15"
          height="15"
          viewBox="0 0 15 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M7,5 C5.9,5 5,5.9 5,7 C5,8.1 5.9,9 7,9 C8.1,9 9,8.1 9,7 C9,5.9 8.1,5 7,5 Z M12.25,7 C12.25,7.23 12.23,7.46 12.2,7.68 L13.68,8.84 C13.81,8.95 13.85,9.14 13.76,9.29 L12.36,11.71 C12.27,11.86 12.09,11.92 11.93,11.86 L10.19,11.16 C9.83,11.44 9.43,11.67 9.01,11.85 L8.75,13.7 C8.72,13.87 8.57,14 8.4,14 L5.6,14 C5.43,14 5.28,13.87 5.25,13.71 L4.99,11.86 C4.56,11.68 4.17,11.45 3.81,11.17 L2.07,11.87 C1.91,11.93 1.73,11.87 1.64,11.72 L0.24,9.3 C0.15,9.15 0.19,8.96 0.32,8.85 L1.8,7.69 C1.77,7.46 1.75,7.23 1.75,7 C1.75,6.77 1.77,6.54 1.8,6.32 L0.32,5.16 C0.19,5.05 0.15,4.86 0.24,4.71 L1.64,2.29 C1.73,2.14 1.91,2.08 2.07,2.14 L3.81,2.84 C4.17,2.56 4.57,2.33 4.99,2.15 L5.25,0.3 C5.28,0.13 5.43,5.32907052e-15 5.6,5.32907052e-15 L8.4,5.32907052e-15 C8.57,5.32907052e-15 8.72,0.13 8.75,0.29 L9.01,2.14 C9.44,2.32 9.83,2.55 10.19,2.83 L11.93,2.13 C12.09,2.07 12.27,2.13 12.36,2.28 L13.76,4.7 C13.85,4.85 13.81,5.04 13.68,5.15 L12.2,6.31 C12.23,6.54 12.25,6.77 12.25,7 Z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </svg>
      );

    case "data-reporting":
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 18 24"
        >
          <path
            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
            fill="currentColor"
          />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      );

    case "monetization":
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
            fill="currentColor"
          />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      );

    default:
      return null;
  }
};

export const LiveChatLogo = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 122.5">
    <path
      d="M49.2 120.7c-0.6 0-1.3-0.2-1.8-0.5 -1-0.6-1.7-1.8-1.7-3l0.1-21.3H22.6c-14.3 0-20.1-5.8-20.1-20.1V22.5C2.5 8.2 8.3 2.4 22.6 2.4h176.9c15.8 0 18.9 7.4 18.9 20.1v53.4c0 14.3-5.8 20.1-20.1 20.1H99.7l-49 24.5C50.2 120.6 49.7 120.7 49.2 120.7z"
      fill="#FFF"
    />
    <path
      d="M49.2 120.7c-0.6 0-1.3-0.2-1.8-0.5 -1-0.6-1.7-1.8-1.7-3l0.1-21.3H22.6c-14.3 0-20.1-5.8-20.1-20.1V22.5C2.5 8.2 8.3 2.4 22.6 2.4h176.9c15.8 0 18.9 7.4 18.9 20.1v53.4c0 14.3-5.8 20.1-20.1 20.1H99.7l-49 24.5C50.2 120.6 49.7 120.7 49.2 120.7zM22.6 9.4c-10.4 0-13.1 2.7-13.1 13.1v53.4c0 10.4 2.7 13.1 13.1 13.1h26.6c0.9 0 1.8 0.4 2.5 1 0.7 0.7 1 1.6 1 2.5l0 19.1 44.6-22.3c0.5-0.2 1-0.4 1.6-0.4h99.4c10.4 0 13.1-2.7 13.1-13.1V22.5c0-5.6-0.7-8.9-2.2-10.6 -0.9-1.1-3-2.5-9.7-2.5H22.6z"
      fill="#3A3A3A"
    />
    <path
      d="M38 62.2H24.9V29.8c-1.3-0.2-2.6-0.3-3.8-0.3 -1.2 0-2.4 0.1-3.7 0.3v39.3H38c0.1-0.6 0.2-1.2 0.2-1.8 0-0.6 0.1-1.1 0.1-1.7 0-0.5 0-1-0.1-1.6C38.2 63.4 38.1 62.8 38 62.2zM37.8 43.7c0 0.5 0 1 0.1 1.5 0.1 0.5 0.1 1 0.2 1.5h3.5v22.3c1.3 0.2 2.5 0.3 3.6 0.3 1.2 0 2.4-0.1 3.7-0.3V40.9H38.1C37.9 41.8 37.8 42.8 37.8 43.7zM42.4 36.3c0.7 0 1.3 0.1 1.9 0.1 0.6 0 1.2 0 1.9-0.1 0.7 0 1.3-0.1 1.9-0.2 0.1-0.6 0.2-1.2 0.2-1.9 0-0.6 0.1-1.2 0.1-1.8 0-0.6 0-1.2-0.1-1.8 0-0.6-0.1-1.2-0.2-1.8 -0.6-0.1-1.2-0.2-1.9-0.2 -0.7-0.1-1.3-0.1-1.9-0.1 -0.6 0-1.2 0-1.9 0.1 -0.7 0.1-1.3 0.1-1.9 0.2 -0.2 1.3-0.3 2.5-0.3 3.7 0 1.2 0.1 2.4 0.3 3.7C41.1 36.2 41.7 36.3 42.4 36.3zM75.4 40.6c-0.7 0-1.3-0.1-1.8-0.1 -0.7 0-1.3 0-2 0.1 -0.7 0.1-1.3 0.1-1.9 0.2l-5.8 21 -5.9-21c-0.6-0.1-1.2-0.2-1.9-0.3 -0.7 0-1.4-0.1-2.1-0.1 -0.5 0-1.1 0-1.9 0.1 -0.7 0-1.5 0.1-2.3 0.3L59.8 69c0.6 0.1 1.2 0.2 1.9 0.3 0.7 0 1.3 0.1 1.8 0.1 0.5 0 1.1 0 1.8-0.1 0.7 0 1.4-0.1 2.1-0.2l10.3-28.2C76.8 40.7 76 40.6 75.4 40.6zM101.3 48.4c-0.5-1.7-1.3-3.1-2.3-4.3 -1-1.2-2.3-2.1-3.8-2.8 -1.5-0.7-3.1-1-5-1 -2.2 0-4.1 0.4-5.7 1.2 -1.6 0.8-3 1.8-4.1 3.2 -1.1 1.3-1.9 2.9-2.5 4.8 -0.6 1.8-0.8 3.8-0.8 5.8 0 2.1 0.3 4.1 0.8 5.8 0.5 1.8 1.4 3.3 2.5 4.6 1.1 1.3 2.6 2.3 4.4 3 1.8 0.7 4 1.1 6.5 1.1 3.4 0 6.5-0.5 9.2-1.6 0-1.2-0.2-2.3-0.5-3.3 -0.3-1-0.6-1.9-1-2.6 -1.1 0.4-2.3 0.8-3.5 1 -1.2 0.2-2.5 0.4-3.6 0.4 -2.2 0-3.9-0.5-5.3-1.5 -1.3-1-2.1-2.6-2.2-4.8h17.4c0.1-0.4 0.1-0.9 0.2-1.6 0.1-0.7 0.1-1.4 0.1-2C102.1 51.8 101.9 50 101.3 48.4zM84.5 51.9c0.2-1.9 0.7-3.3 1.6-4.3 0.9-1 2.2-1.5 4-1.5 1.5 0 2.7 0.5 3.6 1.6 0.9 1.1 1.3 2.5 1.4 4.2H84.5z"
      fill="#3A3A3A"
    />
    <path
      d="M129.8 61.7c-1.2 0.4-2.3 0.7-3.3 0.9 -1 0.2-2.1 0.3-3.4 0.3 -7.2 0-10.9-4.4-10.9-13.3 0-4.5 0.9-7.9 2.7-10.1 1.8-2.3 4.4-3.4 7.7-3.4 1.3 0 2.4 0.1 3.4 0.3 0.9 0.2 2 0.5 3.3 0.9 0.4-1.1 0.8-2.1 1.2-3.1 0.3-1 0.6-2.1 0.6-3.2 -1.6-0.7-3.2-1.1-4.6-1.4 -1.4-0.2-3-0.3-4.6-0.3 -2.8 0-5.4 0.5-7.6 1.5 -2.2 1-4.1 2.4-5.6 4.3 -1.5 1.8-2.7 4-3.5 6.5 -0.8 2.5-1.2 5.2-1.2 8.1 0 2.9 0.4 5.6 1.2 8.1 0.8 2.5 1.9 4.6 3.4 6.4 1.5 1.8 3.4 3.2 5.6 4.2 2.2 1 4.8 1.5 7.8 1.5 1.7 0 3.2-0.1 4.7-0.3 1.5-0.2 3.1-0.7 4.9-1.4 -0.1-1.1-0.4-2.2-0.7-3.2C130.6 63.7 130.2 62.7 129.8 61.7zM148.9 40.2c-1.1 0-2 0.1-2.9 0.4 -0.8 0.3-1.6 0.6-2.2 1.1 -0.6 0.4-1.1 0.9-1.5 1.3 -0.4 0.5-0.7 0.8-1 1.2v-15c-0.6-0.1-1.3-0.2-1.9-0.2 -0.6 0-1.2-0.1-1.8-0.1 -0.6 0-1.2 0-1.8 0.1 -0.6 0-1.2 0.1-1.8 0.2v40c0.6 0.1 1.3 0.2 1.9 0.2 0.6 0 1.2 0.1 1.8 0.1 0.6 0 1.2 0 1.8-0.1 0.6 0 1.3-0.1 1.9-0.2V54.3c0-1.5 0.2-2.8 0.5-3.7 0.3-0.9 0.8-1.7 1.3-2.2 0.5-0.5 1.1-0.9 1.7-1.1 0.6-0.2 1.2-0.3 1.8-0.3 1.4 0 2.5 0.5 3 1.6 0.6 1.1 0.9 2.6 0.9 4.5v16c0.6 0.1 1.3 0.2 1.9 0.2 0.6 0 1.2 0.1 1.8 0.1 0.6 0 1.2 0 1.8-0.1 0.6 0 1.3-0.1 1.9-0.2V51.1c0-3.8-0.8-6.5-2.3-8.2C154.2 41.1 152 40.2 148.9 40.2zM170.9 40.2c-1.3 0-2.8 0.1-4.3 0.4 -1.5 0.3-3.1 0.7-4.6 1.2 0 1.2 0.1 2.2 0.4 3 0.2 0.8 0.6 1.7 1.1 2.7 2.1-0.8 4.1-1.1 6-1.1 0.9 0 1.7 0.1 2.4 0.2 0.7 0.1 1.3 0.3 1.8 0.6 0.5 0.3 0.9 0.7 1.2 1.3 0.3 0.5 0.4 1.3 0.4 2.1v0.7c-1.2-0.1-2.3-0.2-3.4-0.2 -1.4 0-2.8 0.2-4.2 0.5 -1.4 0.3-2.7 0.8-3.8 1.5 -1.1 0.7-2.1 1.7-2.8 2.8 -0.7 1.2-1.1 2.6-1.1 4.4 0 1.7 0.3 3.2 0.9 4.4 0.6 1.2 1.4 2.2 2.5 2.9 1.1 0.8 2.3 1.3 3.8 1.6 1.5 0.3 3.1 0.5 4.9 0.5 2.2 0 4.2-0.2 5.9-0.5 1.7-0.4 3.2-0.7 4.5-1.1V51.7c0-4-1-6.9-3.1-8.7C177.4 41.1 174.6 40.2 170.9 40.2zM175.3 63.4c-0.4 0.1-0.8 0.2-1.4 0.2 -0.5 0.1-1.1 0.1-1.6 0.1 -0.5 0-1 0-1.6-0.1 -0.6-0.1-1.2-0.2-1.7-0.4 -0.5-0.2-1-0.6-1.4-1.1 -0.4-0.5-0.6-1.2-0.6-2.2 0-1.4 0.5-2.4 1.5-3.1 1-0.6 2.4-1 4.1-1 0.4 0 0.8 0 1.3 0.1 0.5 0.1 0.9 0.1 1.4 0.2V63.4zM201.5 65c-0.1-0.7-0.3-1.5-0.5-2.2 -0.4 0.1-0.8 0.2-1.3 0.2 -0.5 0.1-1 0.1-1.5 0.1 -0.7 0-1.2-0.1-1.7-0.2 -0.5-0.1-0.9-0.4-1.2-0.8 -0.3-0.4-0.6-0.9-0.8-1.6 -0.2-0.7-0.3-1.6-0.3-2.7V46.8h6.4c0.1-0.6 0.2-1.1 0.2-1.6 0-0.5 0.1-1 0.1-1.5 0-0.5 0-0.9-0.1-1.4 0-0.4-0.1-0.9-0.2-1.5h-6.4v-8.2h-1.2l-9.8 13.1 0.3 1.1h3.4v12.8c0 3.5 0.8 6 2.5 7.6 1.7 1.5 4.1 2.3 7.3 2.3 1.7 0 3.4-0.2 5-0.6 0-0.3 0.1-0.5 0.1-0.8 0-0.3 0-0.6 0-1C201.7 66.4 201.6 65.8 201.5 65z"
      fill="#D46D39"
    />
  </svg>
);

export const LinkIcon = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      fill="currentColor"
    />
  </svg>
);

export const WarningIcon = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      fill="currentColor"
    />
  </svg>
);
