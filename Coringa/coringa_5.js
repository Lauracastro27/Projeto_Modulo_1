var mensagem;

        function coringa5() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Como vamos derrotar o Batman? \n  1 -Helicóptero .  \n 2 - Enormes garras.");

        if (mensagem == 1) 
        {
            window.location.href="../Coringa/coringaGameOver5.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Coringa/coringaFinal.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return coringa5();
        }
    }

}