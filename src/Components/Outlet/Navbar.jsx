import style from "./style/Navbar.module.css";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <nav>
        <form>
          <div id={style.search}>
            <CiSearch />
            <input type="text" />
          </div>
        </form>

        <div>
          <h3 id={style.nome_empresa}>Nome Empresa</h3>
        </div>
      </nav>
    </>
  );
}
