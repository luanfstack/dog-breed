import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getPhotos } from "./api";
import Modal from "./Modal";

const token = sessionStorage.getItem("token");

function List() {
  const [breed, setBreed] = useState("chihuahua");
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState("");

  if (!token) return <Navigate to="/register" replace={true} />;

  useEffect(() => {
    getPhotos(breed, token).then((result) => setPhotos(result));
  }, [breed]);

  return (
    <div className="flex bg-gray-200">
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
      <div className="container m-auto">
        <div className="sticky top-0 left-0 bg-gray-200 py-2 text-center">
          <button
            className="px-4 py-2 text-xl mx-8"
            onClick={() => setBreed("chihuahua")}
          >
            Chihuahua
          </button>
          <button
            className="px-4 py-2 text-xl mx-8"
            onClick={() => setBreed("husky")}
          >
            Husky
          </button>
          <button
            className="px-4 py-2 text-xl mx-8"
            onClick={() => setBreed("labrador")}
          >
            Labrador
          </button>
          <button
            className="px-4 py-2 text-xl mx-8"
            onClick={() => setBreed("pug")}
          >
            Pug
          </button>
        </div>
        <div className="grid gap-2 grid-cols-2 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
          {photos.map((photo, index) => {
            return (
              <img
                className="rounded m-auto"
                src={photo}
                key={index}
                onClick={() => {
                  setModal(photo);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
