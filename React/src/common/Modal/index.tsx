import Root from "common/Modal/components/Root.tsx";
import Overlay from "common/Modal/components/Overlay.tsx";
import Content from "common/Modal/components/Content.tsx";
import ModalContext from "common/Modal/context/ModalContext.ts";
import useModal from "common/Modal/hooks/UseModal.ts";
import Trigger from "common/Modal/components/Trigger.tsx";

const Modal = {
    Root,
    Consumer: ModalContext.Consumer,
    Trigger,
    Overlay,
    Content,
    useModal
}

export default Modal;