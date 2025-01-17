document.getElementById("reservation-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const response = await fetch("guardar_reserva.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById("reservation-form").classList.add("hidden");
            document.getElementById("confirmation").classList.remove("hidden");
        } else {
            alert("Error al guardar la reserva: " + result.message);
        }
    } catch (error) {
        alert("Error al procesar la solicitud. Inténtalo de nuevo más tarde.");
    }
});
