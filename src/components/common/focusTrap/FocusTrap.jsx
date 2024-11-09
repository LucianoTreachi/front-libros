import { useEffect, useRef, cloneElement } from "react";

export default function FocusTrap({ children, onCancel, onConfirm }) {
  // Referencia al contenedor del enfoque de trampa
  const trapRef = useRef(null);

  // Referencias para el primer y último elementos enfocables dentro del modal
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    // Verificar si trapRef tiene un valor y capturar todos los posibles elementos enfocables
    if (trapRef.current) {
      const focusableElements = trapRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      // Si hay elementos enfocables, asignar el primero y el último
      if (focusableElements.length > 0) {
        firstElementRef.current = focusableElements[0];
        lastElementRef.current =
          focusableElements[focusableElements.length - 1];

        // Enfocar en el contenedor del modal
        trapRef.current.focus();

        // Manejo de navegación de foco usando Tab y Shift+Tab
        const handleKeyDown = (e) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElementRef.current) {
                e.preventDefault();
                lastElementRef.current.focus();
              }
            } else {
              if (document.activeElement === lastElementRef.current) {
                e.preventDefault();
                firstElementRef.current.focus();
              }
            }
          }

          // Cerrar el modal con la tecla Escape, usando onCancel o onConfirm
          if (e.key === "Escape") {
            e.preventDefault();
            if (onCancel) {
              onCancel();
            } else if (onConfirm) {
              onConfirm();
            }
          }
        };

        // Agregar el evento para escuchar la tecla
        document.addEventListener("keydown", handleKeyDown);

        return () => {
          // Eliminar el evento al desmontar el componente
          document.removeEventListener("keydown", handleKeyDown);
        };
      }
    }
  }, [onCancel, onConfirm]);

  // Clonar el elemento hijo y asignarle la referencia de trapRef y tabIndex
  return cloneElement(children, { ref: trapRef, tabIndex: "-1" });
}
