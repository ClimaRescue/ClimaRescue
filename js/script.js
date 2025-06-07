// Validação de formulário de contato
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let nome = document.getElementById('nome').value.trim();
            let email = document.getElementById('email').value.trim();
            let mensagem = document.getElementById('mensagem').value.trim();
            let erro = '';
            if (nome === '' || email === '' || mensagem === '') {
                erro = 'Por favor, preencha todos os campos.';
            } else if (!email.includes('@')) {
                erro = 'E-mail inválido.';
            }
            document.getElementById('mensagemErro').textContent = erro;
            if (erro === '') {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            }
        });
    }
});



document.getElementById("site").addEventListener("click", function () {
    window.location.href = "https://portal.inmet.gov.br/";
});

