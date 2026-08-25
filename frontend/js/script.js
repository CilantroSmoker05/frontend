const heroImages = ["img/1.avif", "img/2.avif", "img/3.avif", "img/4.avif"]
let currentImage = 0;

const heroImage = document.getElementById("heroImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    heroImage.src = heroImages[currentImage];
}

prevBtn.addEventListener("click", () => {
    currentImage = (currentImage - 1 + heroImages.length) % heroImages.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentImage = (currentImage + 1) % heroImages.length;
    updateImage();
});

const contactForm = document.getElementById("contactform");

const fields = [
    { input: document.getElementById("contactName"), error: document.getElementById("ContactNameError"), message: "el nombre es obligatorio" },
    { input: document.getElementById("contactPhone"), error: document.getElementById("ContactPhoneError"), message: "el teléfono es obligatorio" },
    { input: document.getElementById("contactEmail"), error: document.getElementById("ContactEmailError"), message: "el correo electrónico es obligatorio" },
    { input: document.getElementById("contactSubject"), error: document.getElementById("ContactSubjectError"), message: "el asunto es obligatorio" },
    { input: document.getElementById("contactMessage"), error: document.getElementById("ContactMessageError"), message: "el mensaje es obligatorio" }
];

function validateFields(field){
    if (field.input.value.trim() === ""){
        field.error.textContent = field.message;
        field.input.classList.add("is-invalid");
        return false;
    }

    field.error.textContent = "";
    field.input.classList.remove("is-invalid");
    return true;

}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach(field => {
        if (!validateFields(field)){
            isValid = false;
        }
    });

});