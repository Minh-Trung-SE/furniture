import {useContext} from "react";
import ModalContext from "common/Modal/context/ModalContext.ts";

const useModal = () => {
    return useContext(ModalContext)
}

export default useModal;