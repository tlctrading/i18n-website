<template>
    <div id="content" class="site-main">
        <div class="contact-container">
            <h2>Contact Us</h2>
            <form @submit.prevent="submitForm" id="contact-form">
                <input v-model="formData.name" type="text" name="name" placeholder="Your Name" required>
                <input v-model="formData.email" type="email" name="email" placeholder="Your Email" required>
                <textarea v-model="formData.message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <div class="success-banner" v-if="showSuccess">
                ✅ Your message has been sent successfully!
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    message: ''
});

const showSuccess = ref(false);

const submitForm = () => {
    setTimeout(() => {
        showSuccess.value = true;
    }, 800);
};
</script>

<style scoped>
.success-banner {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #e0ffe0;
    border: 1px solid #00aa00;
    border-radius: 5px;
    color: #006600;
    font-weight: bold;
}

.contact-container {
    width: 100%;
    max-width: 768px;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    background: #fff;
    position: relative;
    margin: 16px auto;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 1.8rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

input,
textarea {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border: 1px solid #ddd;
    border-radius: 0.8rem;
    font-size: 1rem;
    transition: border 0.2s;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #111;
}

textarea {
    resize: vertical;
    min-height: 150px;
}

button {
    background: #111;
    color: #fff;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #333;
}

.success-banner {
    display: none;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background: #e6ffed;
    color: #064e3b;
    font-size: 0.95rem;
    text-align: center;
    border: 1px solid #a7f3d0;
}

.success-banner.show {
    display: block;
}
</style>
