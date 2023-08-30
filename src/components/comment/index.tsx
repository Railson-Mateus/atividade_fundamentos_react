import styles from "./Comment.module.css";

import iconTrash from "../../assets/trash.png";

type IProps = {
  photo: string;
  comment: string;
};

const Comment = ({ comment, photo }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPhoto}>
        <img src={photo} alt="photo person" />
      </div>
      <div>
        <p className={styles.text}>{comment}</p>
      </div>
      <div className={styles.cardIcon}>
        <img src={iconTrash} alt="icon trash" />
      </div>
    </div>
  );
};

export default Comment;
