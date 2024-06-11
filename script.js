function openAnimalPage(animal) {
    window.location.href = `animal.html?animal=${animal}`;
}

function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animal = urlParams.get('animal');
    
    if (animal) {
        const animalContainer = document.getElementById('animal-container');
        const speakButton = document.getElementById('speak-button');
        let animalImage = '';
        let animalInfo = '';

        switch(animal) {
            case 'tiger':
                animalImage = 'Tigre.png';
                animalInfo = 'El tigre es el felino más grande del mundo, con machos que pueden alcanzar los 3.3 metros de longitud y pesar hasta 300 kg. Posee un pelaje rayado de naranja a blanco, único para cada individuo. Habitan en una variedad de entornos como bosques tropicales y manglares en países de Asia. Son carnívoros solitarios que cazan grandes presas y están en peligro de extinción debido a la pérdida de hábitat y la caza furtiva.';
                break;
            case 'lion':
                animalImage = 'Leon.png';
                animalInfo = 'El león es un gran felino africano, con machos que pueden medir hasta 3 metros de largo y pesar hasta 250 kg, caracterizados por su melena. Viven en sabanas y praderas de África y en una pequeña población en la India. Son carnívoros sociales que cazan en manadas y se alimentan de grandes mamíferos. Son vulnerables por la caza y la pérdida de hábitat..';
                break;
            case 'elephant':
                animalImage = 'Elefante.webp';
                animalInfo = 'El elefante africano, el animal terrestre más grande, puede alcanzar los 4 metros de altura y pesar hasta 6,000 kg, mientras que el elefante asiático es más pequeño. Con una piel gruesa y una trompa versátil, habitan en diversas regiones de África y Asia. Son herbívoros que comen una variedad de plantas y viven en grupos familiares matriarcales. Están amenazados por la caza furtiva y la pérdida de hábitat.';
                break;
            case 'camel':
                animalImage = 'Camello.webp';
                animalInfo = 'El camello, que puede medir hasta 2.1 metros de altura y pesar entre 450 y 1,000 kg, tiene una o dos jorobas según la especie (dromedario y bactriano). Adaptado a los desiertos del Medio Oriente, África del Norte y Asia Central, puede sobrevivir sin agua durante largos periodos. Son herbívoros resistentes que viven en manadas y transportan cargas pesadas. Los camellos domésticos no están en peligro, pero los bactrianos salvajes sí lo están.';
                break;
        }

        animalContainer.innerHTML = `<img src="${animalImage}" alt="${animal}"><p>${animalInfo}</p>`;

        speakButton.addEventListener('click', () => {
            speak(animalInfo);
        });
    }
});

function speak(text) {
    const speechSynthesis = window.speechSynthesis;
    if (speechSynthesis.speaking) {
        console.error('SpeechSynthesis is already speaking.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
    }

    speechSynthesis.speak(utterance);
}
