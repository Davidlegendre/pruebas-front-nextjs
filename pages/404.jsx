import s404 from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <div className={s404.page404}>
      <div className={s404.cuerpo}>
        <p>404</p>
       
        <div className={s404.descriptiontriste}>
          <p>Problemas con el Servidor Oooops!!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
