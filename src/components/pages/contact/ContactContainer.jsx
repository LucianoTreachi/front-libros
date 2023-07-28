import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

export default function ContactContainer() {
  // Crear un estado para rellenar los inputs
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  // Crear una función para rellenar los inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Crear un estado para mostrar el modal loader
  const [loaderModal, setLoaderModal] = useState(false);

  // Crear un estado para mostrar el modal success
  const [successModal, setSuccessModal] = useState(false);

  // Crear una función para cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaderModal(true);

    setTimeout(() => {
      setLoaderModal(false);
      setSuccessModal(true);
    }, 4000);
  };

  // Crear una función que me permite volver a la parte superior del Home
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Contact
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      loaderModal={loaderModal}
      successModal={successModal}
      navigateToHome={navigateToHome}
    />
  );
}
