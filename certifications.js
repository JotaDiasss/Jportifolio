function typingEffect(element, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

const nameTitle = document.getElementById('certification-title');
const nameToType = "Minhas certificações";

const typingSpeed = 100;

typingEffect(nameTitle, nameToType, typingSpeed);

setTimeout(() => {
    typingEffect(devElement, devToType, typingSpeed);
}, nameToType.length * typingSpeed + 100);