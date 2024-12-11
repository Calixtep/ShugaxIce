import { Children } from "react";

export default function Modal ({isVisible, boogaloo, children}) {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') boogaloo()
    }

    return (
        <div className="fixed bg-black bg-opacity-50 inset-0 backdrop-blur-none flex justify-center items-center z-10" id="wrapper" onClick={handleClose}>
            <div className="w-auto flex flex-col">
                {/* <button className="flex place-self-end text-xl" onClick={() => boogaloo()}>X</button> */}
                <div className="bg-white text-black p-12 rounded-md">{children}</div>
            </div>
        </div>
    )
}