"use client";

import MainCard from "@/components/customContiner/MainCard";

interface Props {
  children: React.ReactNode;
}

const UserPanel = ({ children }: Props) => {
  return <MainCard>{children}</MainCard>;
};

export default UserPanel;
