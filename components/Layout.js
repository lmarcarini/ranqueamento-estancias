import TopMenu from "./TopMenu/TopMenu";

export default ({ children }) => (
  <>
    <TopMenu></TopMenu>
    <div>{children}</div>
  </>
);
