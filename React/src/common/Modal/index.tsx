import Root from "shared/common/Modal/components/Root.tsx";
import Overlay from "shared/common/Modal/components/Overlay.tsx";
import Content from "shared/common/Modal/components/Content.tsx";
import ModalContext from "shared/common/Modal/context/ModalContext.ts";
import useModal from "shared/common/Modal/hooks/UseModal.ts";
import Trigger from "shared/common/Modal/components/Trigger.tsx";

const Modal = {
    Root,
    Consumer: ModalContext.Consumer,
    Trigger,
    Overlay,
    Content,
    useModal
}

export default Modal;