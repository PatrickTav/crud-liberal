import { Navbar } from "./Navbar";

export const MainContainer = ({children}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
