import './modal.styles.scss';

const Modal = ({ handleAction, show, children, eventText }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="mondalButton">
                    <button onClick={handleAction} >
                        {eventText}
                    </button>
                </div>
                {children}
                
            </section>
        </div>
    );
}

export default Modal;