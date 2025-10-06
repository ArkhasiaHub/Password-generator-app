const copy_password_button = document.getElementById('copy-password');

async function copyClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Clipboard API failed: ', error);
        return false;
    }
}

async function copyPassword() {
    const password_content = document.getElementById('password');
    await copyClipboard(password_content.textContent);
}

copy_password_button.addEventListener('click', copyPassword);
