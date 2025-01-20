// Função que será executada quando clicar no botão
document.getElementById('botaoLogin').addEventListener('click', function() {
    // Pegando os valores dos campos
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    
    // Pegando os elementos de erro
    const emailError = document.getElementById('emailError')
    const senhaError = document.getElementById('senhaError')
    const mensagem = document.getElementById('mensagem')
    
    // Limpa mensagens anteriores
    emailError.style.display = 'none'
    senhaError.style.display = 'none'
    mensagem.textContent = ''
    
    // Validação simples
    let temErro = false
    
    // Verifica se o email está vazio, tem @ e pelo menos um ponto após o @
    if (!email || !email.includes('@') || !email.split('@')[1].includes('.')) {
        emailError.textContent = 'Por favor, digite um email válido (exemplo@dominio.com)'
        emailError.style.display = 'block'
        temErro = true
    }
    
    // Verifica se a senha tem pelo menos 6 caracteres
    if (!senha || senha.length < 6) {
        senhaError.textContent = 'A senha deve ter no mínimo 6 caracteres'
        senhaError.style.display = 'block'
        temErro = true
    }
    
    // Se não tiver erros, mostra mensagem de sucesso
    if (!temErro) {
        mensagem.textContent = 'Login realizado com sucesso!'
        mensagem.style.color = '#9FE870' // Verde
        
        // Limpa os campos
        document.getElementById('email').value = ''
        document.getElementById('senha').value = ''
    } else {
        mensagem.textContent = 'Por favor, corrija seus dados'
        mensagem.style.color = '#FF9F1C' // Laranja
    }
}) 