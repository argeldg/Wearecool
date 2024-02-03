<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si los campos están establecidos y no están vacíos
    if (isset($_POST['email']) && isset($_POST['message']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        
        // Recoger los datos del formulario
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Destinatario del correo electrónico
        $to = "argel.dgg@gmail.com";

        // Asunto del correo electrónico
        $subject = "Nuevo mensaje del formulario";

        // Contenido del correo electrónico
        $email_content = "Has recibido un nuevo mensaje del formulario:\n\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Mensaje:\n$message\n";

        // Cabeceras del correo electrónico
        $headers = "From: $email\n";
        $headers .= "Reply-To: $email\n";

        // Enviar el correo electrónico
        mail($to, $subject, $email_content, $headers);

        // Redireccionar después de enviar el formulario (opcional)
        header("Location: gracias.html");
        exit;
    }
}
?>