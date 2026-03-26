function checkAnswers(event) {
	event.preventDefault();

	let corrette = 0;
	let totalQuestions = 3;
	let resultText = "";

	// Controllo risposta numero 1
	let risposta1 = document.querySelector('input[name="giocatori"]:checked');
	if (risposta1 && risposta1.value === "5") {
		corrette++;
	}

	// Controllo risposta numero 2
	let risposta2 = document.querySelectorAll('input[name="elementi"]:checked');
	let risposta2Valori = Array.from(risposta2).map(el => el.value);
	if (risposta2Valori.includes("palla") && risposta2Valori.includes("tabellone") && !risposta2Valori.includes("mazza")) {
		corrette++;
	}

	// Controllo risposta numero 3
	let risposta3 = document.querySelector('input[name="citta"]:checked');
	if (risposta3 && risposta3.value === "Chicago") {
		corrette++;
	}

	// Mostra il risultato
	if (corrette === totalQuestions) {
		resultText = "Complimenti! Hai risposto correttamente a tutte le domande.";
	} else {
		resultText = `Hai risposto correttamente a ${corrette} domande su ${totalQuestions}. Riprova!`;
	}

	document.getElementById("risultato").innerText = resultText;
}