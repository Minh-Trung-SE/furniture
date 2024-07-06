import React, {FC, HTMLAttributes, useContext} from 'react';
import ModalContext from "shared/common/Modal/context/ModalContext.ts";
import {twMerge} from "tailwind-merge";

type OverlayProps = HTMLAttributes<HTMLDivElement>
const Overlay:FC<OverlayProps> = ({className, ...props}) => {
    const {closeOutside, setOpen, open} = useContext(ModalContext)
    return open ? (
        <div
            {...props}
            className={twMerge("bg-black/40 z-30 backdrop-blur-sm fixed inset-0", className)}
            onClick={closeOutside ? () =>  setOpen(false) : undefined}
        >
        </div>
    ) : null
};

export default Overlay;