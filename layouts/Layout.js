import TopMenu from "../components/TopMenu/TopMenu";

export default ({ children }) => (
  <>
    <TopMenu></TopMenu>
    <div>{children}</div>
  </>
);
