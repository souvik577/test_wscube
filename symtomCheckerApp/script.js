document.addEventListener("DOMContentLoaded", function () {
    function checkSymptoms() {
        const symptomsInput = document.getElementById("symptoms").value.toLowerCase();
        const result = document.getElementById("result");

        // Convert user input into an array of symptoms
        const userSymptoms = symptomsInput.split(",").map(symptom => symptom.trim());

        // Predefined symptoms and diagnoses
        const diagnoses = [
            { symptoms: ["fever", "cough"], diagnosis: "You may have the flu or COVID-19. Consider consulting a doctor." },
            { symptoms: ["headache", "nausea"], diagnosis: "Possible migraine or food poisoning. Stay hydrated." },
            { symptoms: ["chest pain", "shortness of breath"], diagnosis: "Seek emergency medical help. Possible heart issue." },
            { symptoms: ["sore throat", "runny nose"], diagnosis: "Likely a common cold. Rest and stay hydrated." }
        ];

        let diagnosis = "No matching diagnosis found. Please consult a healthcare professional.";

        // Check if any predefined symptoms match the user's input
        for (const entry of diagnoses) {
            if (entry.symptoms.some(symptom => userSymptoms.includes(symptom))) {
                diagnosis = entry.diagnosis;
                break;  // Stop checking once a match is found
            }
        }

        result.innerText = diagnosis;
    }

    document.querySelector("button").addEventListener("click", checkSymptoms);
});
