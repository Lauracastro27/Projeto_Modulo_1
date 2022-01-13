var mensagem;

        function coringa4() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Qual o melhor lugar? \n  1 - Direto no Batman.  \n 2 - No Jardim Botânico.");

        if (mensagem == 1) 
        {
            window.location.href="../Coringa/coringaGameOver4.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Coringa/coringa_5.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return coringa4();
        }
    }

}