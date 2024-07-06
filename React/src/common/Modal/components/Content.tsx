import React, {FC, HTMLAttributes, PropsWithChildren, useContext} from 'react';
import ModalContext from "shared/common/Modal/context/ModalContext.ts";
import {twMerge} from "tailwind-merge";
import {createPortal} from "react-dom";

type ContentProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren
const Content: FC<ContentProps> = ({className, children, ...props}) => {
    const {closeOutside, setOpen, open} = useContext(ModalContext)

    if (!open) {
        return null
    }

    return createPortal(
        (
            <div
                {...props}
                className={twMerge("fixed inset-0 p-5 z-30 flex justify-center items-center", className)}
                onClick={closeOutside ? () => setOpen(false) : undefined}
            >
                {children}
            </div>
        ),
        document.body
    )
};

export default Content;