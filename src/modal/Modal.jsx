import { Fragment } from "react";
import ReactDOM from "react-dom";
import Form from "../layout/Form";
import styles from "./modalstyle.module.css";

const BackDrop = ({ hideModal, show }) => {
  return (
    <div
      className={`${styles.backdrop} ${show && styles.showBackdrop}`}
      onClick={hideModal}
    ></div>
  );
};

const Overlay = ({ hideModal, show }) => {
  return (
    <div className={`${styles.overlay} ${show && styles.showMOverlay}`}>
      <button
        onClick={hideModal}
        className="btn btn-outline-danger"
        style={{ position: "absolute", top: "-35px", right: "-30px" }}
      >
        X
      </button>
      <Form>
        <Form.Controller>
          <label htmlFor="name"> Name </label>
          <input type="name" id="name" placeholder="Enter your name....." />
        </Form.Controller>
      </Form>
    </div>
  );
};
const modalContainer = document.getElementById("modal");
console.log(modalContainer);

const Modal = ({ show, hideModal }) => {
  return (
    show && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <BackDrop show={show} hideModal={hideModal} />
            <Overlay show={show} hideModal={hideModal} />
          </Fragment>,
          modalContainer
        )}
      </Fragment>
    )
  );
};

export default Modal;
