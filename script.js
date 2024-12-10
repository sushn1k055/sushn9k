// Логика регистрации
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    // Сохраняем пользователя в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Регистрация успешна! Теперь можете войти.');

    // Перенаправление на страницу логина
    window.location.href = 'index.html';
});

// Логика входа
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Вход успешен!');
        window.location.href = 'login.html'; // Перенаправление на главную страницу
    } else {
        alert('Неверный логин или пароль!');
    }
});
