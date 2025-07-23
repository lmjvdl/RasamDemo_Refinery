import { ReactNode } from "react";
import MaterialProvider from "./MaterialProvider";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <ReactQueryProvider>
      <MaterialProvider>{children}</MaterialProvider>;
    </ReactQueryProvider>
  );
};

export default Providers;
