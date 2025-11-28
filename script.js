//1. Selecionando os elementos do HTML
const form = document.querySelector('.register-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

//2. Adicionando o "Ouvinte" (Event Listener) no formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    // Pegamos os valores e usamos .trim() para remover espaços em branco desnecessários
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // --- VALIDAÇÃO DO FIRST NAME ---
    if(firstNameValue === '') {
        setError(firstName);
    } else {
        setSuccess(firstName);
    }

    // --- VALIDAÇÃO DO LAST NAME ---
    if(lastNameValue === '') {
        setError(lastName);
    } else {
        setSuccess(lastName);
    }

    // --- VALIDAÇÃO DO EMAIL ---
    if(emailValue === '') {
        setError(email);
    } else if (!isValidEmail(emailValue)) {
        // Se não estiver vazio, mas o email for inválido (ex: não tem @)
        setError(email);
    } else {
        setSuccess(email);
    }

    // --- VALIDAÇÃO DA SENHA ---
    if(passwordValue === '') {
        setError(password);
    } else {
        setSuccess(password);
    }
}

// Função auxiliar para ativar o erro
function setError(input) {
    const inputGroup = input.parentElement; // Pega a div pai (.input-group)
    inputGroup.classList.add('error'); // Adiciona a classe que criamos no CSS
}

// Função auxiliar para remover o erro (caso o usuário tenha corrigido)
function setSuccess(input) {
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('error');
}

// Função regular expression (Regex) para validar formato de email
// Não precisa decorar isso, é um padrão da internet para checar se tem @ e .com
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}