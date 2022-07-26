import { createPortal } from 'react-dom';
import s from './ConfirmModal.module.css';
import Sprite from '../../images/sprite.svg';

export default function ConfirmModal({
  title = 'Do you confirm the action?',
  onClickYes,
  onClickNo,
}) {
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button className={s.crossBtn} onClick={onClickNo} type="button">
          <svg className={s.crossIcon} width="12" height="12">
            <use href={`${Sprite}#close-icon`}></use>
          </svg>
        </button>
        <p className={s.title}>{title}</p>
        <div className={s.btnsBox}>
          <button
            className={s.confirmBtnYes}
            onClick={onClickYes}
            type="button"
          >
            Yes
          </button>
          <button className={s.confirmBtnNo} onClick={onClickNo} type="button">
            No
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
}
