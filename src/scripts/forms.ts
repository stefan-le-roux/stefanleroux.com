const contactForm = document.getElementById("contactForm") as HTMLFormElement;
const statusMessage = document.getElementById("statusMessage") as HTMLOutputElement;

contactForm.onsubmit = async (event) => {
	event.preventDefault();
	statusMessage.dataset.status = "processing";
	statusMessage.value = "Processing";

	try {
		const res = await fetch("https://lab.vivtec.co.za/mailer/process.php", {
			method: "POST",
			headers: { Accept: "application/json" },
			body: new FormData(contactForm),
		});

		let result: any = null;
		try {
			result = await res.json();
		} catch {}

		if (!res.ok) {
			statusMessage.dataset.status = "error";
			statusMessage.value = result?.message || "Sorry, something went wrong.";
			return;
		}

		if (result?.success) {
			statusMessage.dataset.status = "completed";
			statusMessage.value = result.message || "Thanks!";
			setTimeout(() => {
				contactForm.reset();
				statusMessage.value = "";
				statusMessage.removeAttribute("data-status");
			}, 3000);
		} else {
			statusMessage.dataset.status = "error";
			statusMessage.value = result?.message || "You made a mistake.";
		}
	} catch {
		statusMessage.dataset.status = "error";
		statusMessage.value = "Network/CORS error. Please try again.";
	}
};
