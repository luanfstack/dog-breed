import type { Dispatch, SetStateAction } from "react";

function Modal({
  modal,
  setModal,
}: {
  modal: string;
  setModal: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
      <div className="bg-white w-fit h-fit mx-auto mt-32 p-4 rounded">
        <div className="pt-2 text-center">
          <img className="rounded" src={modal} />
          <button
            className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={() => setModal("")}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
