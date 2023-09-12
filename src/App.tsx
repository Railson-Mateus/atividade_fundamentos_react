import styles from "./App.module.css";
import Comment from "./components/comment";

import woman from "./assets/woman.png";
import man from "./assets/person.png";
import Phone from "./assets/phone.png";
import shield from "./assets/shield.png";

import "./global.css";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}></div>
        <div className={styles.cardText}>
          <h1 className={styles.text}>
            Encontre <span className={styles.textLilas}>Fábio</span> no local de
            partida
          </h1>
          <p className={styles.secondaruText}>
            Chega em 3 minutos (800 metros)
          </p>
        </div>
        <div className={styles.cardCar}>
          <div>
            <div className={styles.cardImg}>
              <img src={man} alt="man" />
              <div className={styles.rating}>
                <p>&#9733; 5.0</p>
              </div>
            </div>
            <p className={styles.name}>Fábio D.</p>
          </div>
          <div>
            <p className={styles.carId}>BCDOD19</p>
            <p className={styles.carName}>Honda Civic Roxo</p>
          </div>
        </div>
        <div className={styles.cardPublish}>
          <input type="text" value="Enviar mensagem para Fábio..." />
          <div>
            <button>Publicar</button>
            <div className={styles.icon}>
              <img src={Phone} alt="" />
            </div>
            <div className={styles.icon}>
              <img src={shield} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.cardComments}>
          <Comment
            comment="Boris estou no local já lhe esperando. estou com camisa azul e calça jeans"
            photo={woman}
          />
          <Comment
            comment="Acabei de lhe ver. Vou estacionar o carro próximo."
            photo={man}
          />
        </div>
      </div>
    </>
  );
};

export default App;
