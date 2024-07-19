import style from "./style/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div id={style.container_coded}>
          <p>Coded by Luiz Antônio Ponciano Costa Bezerra</p>
        </div>
        <div id={style.container_info}>
          <div>
            <h3 className={style.titulo}>Dúdivas? Entre em contato conosco.</h3>
          </div>

          <div>
            <h3 className={style.titulo}>Contatos:</h3>
            <ul className={style.lista}>
              <li>emailexemplo@empresa.com.br</li>
              <li>(48) 3444-6789</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
