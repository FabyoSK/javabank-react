import { CustomerList } from "../components/CustomerList";
import { Header } from "../components/Header";
import "../styles/global.scss";

export function Landing() {
  return (
    <>
      <Header />
      <CustomerList />
    </>
  );
}
