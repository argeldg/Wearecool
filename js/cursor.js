document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { duration: 0.2, left: e.pageX, top: e.pageY });

    // Ajusta el brillo del cursor al pasar sobre los elementos
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

    // Restablece el tamaño del cursor si no está sobre un elemento específico
    if (
      !hoveredElement ||
      !hoveredElement.matches("p, h1, h2, h3, h4, h5, h6, img, a")
    ) {
      gsap.to(cursor, {
        duration: 0.1,
        scale: 1,
        backgroundColor: primaryBlue,
      });
      return;
    }
    gsap.to(cursor, { duration: 0.2, scale: 3, backgroundColor: "#0325FF" });
  });
  // Por ejemplo, cambiar el tamaño del cursor al hacer clic
  document.addEventListener("mousedown", () => {
    gsap.to(cursor, { duration: 0.2, scale: 0.8 });
  });
  document.addEventListener("mouseup", () => {
    gsap.to(cursor, { duration: 0.2, scale: 1 });
  });
});
