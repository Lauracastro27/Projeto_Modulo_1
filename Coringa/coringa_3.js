var mensagem;

        function coringa3() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Quem é o convidado especial da festa? \n  1 - luke Oliver.  \n 2 - Batman.");

        if (mensagem == 1) 
        {
            window.location.href="../Coringa/coringaGameOver3.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Coringa/coringa_4.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return coringa3();
        }
    }

}