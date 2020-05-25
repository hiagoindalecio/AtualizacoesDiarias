// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();
    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const data = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();
    var hora = now.getHours();
    const horas = zeroFill(hora) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    // Exibe na tela usando a div#msg
    document.getElementById('msg').innerHTML =`Hoje é dia ` +  data + `<br>A hora atual na sua região é ` + horas;
    if(hora >= 0 && hora < 12)
    {
        //manhã
        msg.innerHTML += `<br> Bom dia!`
        document.getElementById('foto').src = 'manha.png'
        document.body.style.background = '#dccfc5'
    }
    else if(hora >=12 && hora < 19)
    {
        //tarde
        msg.innerHTML += `<br> Boa tarde!`
        document.getElementById('foto').src = 'tarde.png'
        document.body.style.background = '#ffb85c'
    }
    else
    {
        //noite
        msg.innerHTML += `<br> Boa noite!`
        document.getElementById('foto').src = 'noite.png'
        document.body.style.background = '#2d2c2d'
    }
}, 1000);