import styles from "./App.module.css";
import Comment from "./components/comment";

import woman from "./assets/woman.png";
import man from "./assets/person.png";

import "./global.css";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
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
