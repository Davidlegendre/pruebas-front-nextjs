import s404 from "../styles/404.module.css";
import L404 from '../components/svgs/l404.svg'

const NotFoundPage = () => {
  return (
    <div className={s404.page404}>
      <div className={s404.cuerpo}>
        <L404 className={s404.img} ></L404>
       
        <div className={s404.descriptiontriste}>
          <p>Problemas con el Servidor Oooops!!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
