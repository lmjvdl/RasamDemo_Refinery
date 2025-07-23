import React from "react";

// Define the type for the props
interface IconProps {
  stroke: string;
}

// ***************************************************************************************************************************//

export const Layout: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-radioactive"
  >
    <path stroke={props.stroke} fill="none" />
    <path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6" />
    <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0" />
    <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
  </svg>
);

// ***************************************************************************************************************************//

export const Logout: React.FC<IconProps> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.90039 8.06023C9.21039 4.46023 11.0604 2.99023 15.1104 2.99023H15.2404C19.7104 2.99023 21.5004 4.78023 21.5004 9.25023V15.7702C21.5004 20.2402 19.7104 22.0302 15.2404 22.0302H15.1104C11.0904 22.0302 9.24039 20.5802 8.91039 17.0402"
      stroke={props.stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0001 12.5H3.62012"
      stroke={props.stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.85 9.15039L2.5 12.5004L5.85 15.8504"
      stroke={props.stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ***************************************************************************************************************************//

export const Reports: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-chart-infographic"
  >
    <path stroke={props.stroke} fill="none" />
    <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M7 3v4h4" />
    <path d="M9 17l0 4" />
    <path d="M17 14l0 7" />
    <path d="M13 13l0 8" />
    <path d="M21 12l0 9" />
  </svg>
);
