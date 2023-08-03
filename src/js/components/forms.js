const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const serviceInput = document.getElementById('service');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const service = serviceInput.value;
    const message = messageInput.value;

    if (!/^\+?\d+$/.test(phone)) {
        alert('Номер телефону має містити лише цифри та може починатися зі знаку "+".');
        return;
    }

    if (!name || !phone || !email || !service || !message) {
        alert('Будь ласка, заповніть усі поля форми.');
        return;
    }

    const formData = {
        name,
        phone,
        email,
        service,
        message,
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data);
        alert('Дані успішно надіслані на сервер.');

        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        serviceInput.value = '';
        messageInput.value = '';

    } catch (error) {
        console.error('Помилка при відправці форми:', error);
        alert('Сталася помилка під час відправки форми.');
    }
});
