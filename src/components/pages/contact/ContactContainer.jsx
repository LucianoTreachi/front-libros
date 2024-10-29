import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

export default function ContactContainer() {
  // Estado para rellenar los inputs
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  // Función para rellenar los inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Estado para mostrar el modal loader
  const [isLoaderModal, setIsLoaderModal] = useState(false);

  // Estado para mostrar el modal success
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  // Función para cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoaderModal(true);

    setTimeout(() => {
      setIsLoaderModal(false);
      setIsSuccessModal(true);
    }, 4000);
  };

  // Función que redirige a Home, a la parte superior
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Contact
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isLoaderModal={isLoaderModal}
      isSuccessModal={isSuccessModal}
      navigateToHome={navigateToHome}
    />
  );
}
