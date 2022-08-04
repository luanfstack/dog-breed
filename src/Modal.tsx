import type { Dispatch, SetStateAction } from "react";

function Modal({
  modal,
  setModal,
}: {
  modal: string;
  setModal: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0"
      onClick={() => setModal("")}
    >
      <div className="bg-white w-fit h-fit mx-auto mt-16 p-3 rounded border border-black z-50">
        <div className="text-center">
          <img className="rounded " src={modal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
