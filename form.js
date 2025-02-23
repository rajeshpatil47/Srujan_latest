

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIOjJBd45eJg3B6iV15vJucbtRLlytpH0",
    authDomain: "medicene-9b4be.firebaseapp.com",
    databaseURL: "https://medicene-9b4be-default-rtdb.firebaseio.com",
    projectId: "medicene-9b4be",
    storageBucket: "medicene-9b4be.firebasestorage.app",
    messagingSenderId: "496474678855",
    appId: "1:496474678855:web:5f4d54d360b7b908307362",
    measurementId: "G-J8YZRZDMQW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("patientForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const patientData = {
            Patient_Name: document.getElementById("patientName").value,
            Blood_Pressure_Systolic: parseInt(document.getElementById("bps").value),
            Blood_Pressure_Diastolic: parseInt(document.getElementById("bpd").value),
            Cholesterol_Level: parseFloat(document.getElementById("cholesterol").value),
            Triglycerides: parseFloat(document.getElementById("triglycerides").value),
            HDL_Cholesterol: parseFloat(document.getElementById("hdl").value),
            LDL_Cholesterol: parseFloat(document.getElementById("ldl").value),
            Glucose_Level: parseFloat(document.getElementById("glucose").value),
            Insulin_Level: parseFloat(document.getElementById("insulin").value),
            C_Reactive_Protein: parseFloat(document.getElementById("crp").value),
            Tumor_Marker_1: parseFloat(document.getElementById("tm1").value),
            Tumor_Marker_2: parseFloat(document.getElementById("tm2").value),
            Genetic_Mutation_1: parseInt(document.getElementById("gm1").value),
            Genetic_Mutation_2: parseInt(document.getElementById("gm2").value),
            Vitamin_D_Level: parseFloat(document.getElementById("vitaminD").value),
            Liver_Enzymes: parseFloat(document.getElementById("liver").value)
        };

        const patientRef = ref(database, "patientinfo");
        const newPatientRef = push(patientRef);

        set(newPatientRef, patientData)
            .then(() => {
                alert("Patient Data Saved Successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Error saving data:", error);
                alert("Failed to save data. Please try again.");
            });
    });
});




   