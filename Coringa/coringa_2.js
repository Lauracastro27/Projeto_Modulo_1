var mensagem;

        function coringa2() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Oque fazer? \n  1 - Mandar.  \n 2 - Dizer que espera por ele.");

        if (mensagem == 1) 
        {
            window.location.href="../Coringa/coringaGameOver2.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Coringa/coringa_3.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return coringa2();
        }
    }

}