import React from "react";

const icons = {
  map: (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 19.1666L2.875 16.2916V3.83331L8.625 6.70831M8.625 19.1666L14.375 16.2916M8.625 19.1666V6.70831M8.625 6.70831L14.375 3.83331M14.375 16.2916L20.125 19.1666V6.70831L14.375 3.83331M14.375 16.2916V3.83331"
        stroke="currentColor" // Use `currentColor` for dynamic color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  property: (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_70)">
        <path
          d="M17.4167 0.791687H7.91666C7.70669 0.791687 7.50533 0.875094 7.35686 1.02356C7.2084 1.17203 7.12499 1.37339 7.12499 1.58335V3.95835H1.58332C1.37336 3.95835 1.172 4.04176 1.02353 4.19023C0.875064 4.33869 0.791656 4.54006 0.791656 4.75002V17.4167C0.791656 17.6267 0.875064 17.828 1.02353 17.9765C1.172 18.1249 1.37336 18.2084 1.58332 18.2084H17.4167C17.6266 18.2084 17.828 18.1249 17.9765 17.9765C18.1249 17.828 18.2083 17.6267 18.2083 17.4167V1.58335C18.2083 1.37339 18.1249 1.17203 17.9765 1.02356C17.828 0.875094 17.6266 0.791687 17.4167 0.791687ZM10.2917 16.625H2.37499V5.54169H10.2917V16.625ZM16.625 16.625H11.875V4.75002C11.875 4.54006 11.7916 4.33869 11.6431 4.19023C11.4947 4.04176 11.2933 3.95835 11.0833 3.95835H8.70832V2.37502H16.625V16.625ZM3.95832 7.91669C3.95832 7.70672 4.04173 7.50536 4.1902 7.35689C4.33866 7.20843 4.54003 7.12502 4.74999 7.12502H7.91666C8.12662 7.12502 8.32798 7.20843 8.47645 7.35689C8.62492 7.50536 8.70832 7.70672 8.70832 7.91669C8.70832 8.12665 8.62492 8.32801 8.47645 8.47648C8.32798 8.62495 8.12662 8.70835 7.91666 8.70835H4.74999C4.54003 8.70835 4.33866 8.62495 4.1902 8.47648C4.04173 8.32801 3.95832 8.12665 3.95832 7.91669ZM3.95832 11.0834C3.95832 10.8734 4.04173 10.672 4.1902 10.5236C4.33866 10.3751 4.54003 10.2917 4.74999 10.2917H7.91666C8.12662 10.2917 8.32798 10.3751 8.47645 10.5236C8.62492 10.672 8.70832 10.8734 8.70832 11.0834C8.70832 11.2933 8.62492 11.4947 8.47645 11.6431C8.32798 11.7916 8.12662 11.875 7.91666 11.875H4.74999C4.54003 11.875 4.33866 11.7916 4.1902 11.6431C4.04173 11.4947 3.95832 11.2933 3.95832 11.0834ZM3.95832 14.25C3.95832 14.0401 4.04173 13.8387 4.1902 13.6902C4.33866 13.5418 4.54003 13.4584 4.74999 13.4584H7.91666C8.12662 13.4584 8.32798 13.5418 8.47645 13.6902C8.62492 13.8387 8.70832 14.0401 8.70832 14.25C8.70832 14.46 8.62492 14.6613 8.47645 14.8098C8.32798 14.9583 8.12662 15.0417 7.91666 15.0417H4.74999C4.54003 15.0417 4.33866 14.9583 4.1902 14.8098C4.04173 14.6613 3.95832 14.46 3.95832 14.25Z"
          fill="currentColor" // Use currentColor for dynamic fill color
        />
      </g>
      <defs>
        <clipPath id="clip0_5_70">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  users: (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
};

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
};

function Icon({ name, size = 23, color = "currentColor", className }: IconProps) {
  const IconSVG = icons[name];

  if (!IconSVG) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        color,
      }}
      className={className}
    >
      {React.cloneElement(IconSVG, {
        width: size,
        height: size,
        stroke: color,
      })}
    </div>
  );
}

export default Icon;
