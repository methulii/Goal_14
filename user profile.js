const totalSteps = 5;

function nextStep(currentStep) {
    updateDetails(currentStep);

    const currentStepDiv = document.getElementById('step' + currentStep);
    const nextStepDiv = document.getElementById('step' + (currentStep + 1));

    currentStepDiv.classList.remove('active');
    if (nextStepDiv) {
        nextStepDiv.classList.add('active');
    } else {
        document.getElementById('details').classList.add('active');
    }
    updateProgressBar(currentStep + 1);
}

function previousStep(currentStep) {
    const currentStepDiv = document.getElementById('step' + currentStep);
    const previousStepDiv = document.getElementById('step' + (currentStep - 1));

    currentStepDiv.classList.remove('active');
    if (previousStepDiv) {
        previousStepDiv.classList.add('active');
    }
    updateProgressBar(currentStep - 1);
}

function skipStep(currentStep) {
    nextStep(currentStep);
}

function updateDetails(step) {
    if (step === 1) {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const privacy = document.getElementById('privacy').checked ? 'Agreed' : 'Not Agreed';

        document.getElementById('outputName').textContent = name;
        document.getElementById('outputSurname').textContent = surname;
        document.getElementById('outputAge').textContent = age;
        document.getElementById('outputGender').textContent = gender;
        document.getElementById('outputPrivacy').textContent = privacy;
    } else if (step === 2) {
        const reason = document.getElementById('reason').value;
        const doa = document.getElementById('DOA').value;
        const task = document.getElementById('Task').value;
        const assignmentType = document.getElementById('assignmentType').value;

        document.getElementById('outputReason').textContent = reason;
        document.getElementById('outputDOA').textContent = doa;
        document.getElementById('outputTask').textContent = task;
        document.getElementById('outputAssignmentType').textContent = assignmentType;
    } else if (step === 3) {
        const study = document.getElementById('study').value;
        const highestDegree = document.getElementById('highestDegree').value;
        const university = document.getElementById('university').value;
        const year = document.getElementById('year').value;
        const country = document.getElementById('country').value;

        document.getElementById('outputStudy').textContent = study;
        document.getElementById('outputHighestDegree').textContent = highestDegree;
        document.getElementById('outputUniversity').textContent = university;
        document.getElementById('outputYear').textContent = year;
        document.getElementById('outputCountry').textContent = country;
    } else if (step === 4) {
        const volunteering = document.getElementById('volunteering').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;

        document.getElementById('outputVolunteering').textContent = volunteering;
        document.getElementById('outputTel').textContent = tel;
        document.getElementById('outputEmail').textContent = email;
    }
}

function updateProgressBar(step) {
    const progress = (step / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar(0);
});
