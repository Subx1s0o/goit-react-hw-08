import { modal } from "./modalInfo.module.css";

export default function ModalInfoUser({ isOpen, onMouseLeave, info }) {
  return (
    isOpen && (
      <div className={modal} onMouseLeave={onMouseLeave}>
        <p>{info}</p>
      </div>
    )
  );
}
