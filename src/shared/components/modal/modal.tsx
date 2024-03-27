import { FC, PropsWithChildren, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import { Icon } from "../icon-component";
import { useNavigate } from "react-router-dom";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const modalRoot = document.getElementById("root_modal");
  if (!modalRoot) return null;

  const handleClose = () => {
    navigate(-1);
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div ref={ref} className={styles.modalContainer}>
        <button onClick={handleClose} className={styles.btnClose}>
          <Icon title={"close"} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
