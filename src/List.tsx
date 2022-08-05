import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getPhotos } from "./api";
import Modal from "./Modal";

function List() {
  const [breed, setBreed] = useState("chihuahua");
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState("");
  const token = sessionStorage.getItem("token");

  if (!token) return <Navigate to="/register" replace={true} />;

  useEffect(() => {
    setPhotos([]);
    getPhotos(breed, token).then((result) => setPhotos(result));
  }, [breed]);

  return (
    <div className="flex bg-gray-200">
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
      <div className="container m-auto">
        <div className="sticky top-0 left-0 bg-gray-200 py-1 text-center">
          <button
            className={`px-2 py-1 text-xl mx-8 rounded-lg ${
              breed == "chihuahua" && "border bg-black text-white"
            }`}
            onClick={() => {
              setBreed("chihuahua");
            }}
          >
            Chihuahua
          </button>
          <button
            className={`px-2 py-1 text-xl mx-8 rounded-lg ${
              breed == "husky" && "border bg-black text-white"
            }`}
            onClick={() => setBreed("husky")}
          >
            Husky
          </button>
          <button
            className={`px-2 py-1 text-xl mx-8 rounded-lg ${
              breed == "labrador" && "border bg-black text-white"
            }`}
            onClick={() => setBreed("labrador")}
          >
            Labrador
          </button>
          <button
            className={`px-2 py-1 text-xl mx-8 rounded-lg ${
              breed == "pug" && "border bg-black text-white"
            }`}
            onClick={() => setBreed("pug")}
          >
            Pug
          </button>
        </div>
        <div className="grid gap-2 grid-cols-2 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
          {photos.map((photo, index) => {
            return (
              <img
                className="rounded m-auto w-auto"
                src={photo}
                alt="a dog picture"
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
