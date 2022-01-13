//fase: batman4
var mensagem;

        function batman5() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele vai fazer agora? \n 1 - Deixar ele na cela.  \n 2 - Soltar ele da cela.");

        if (mensagem == 1) 
        {
            window.location.href="../Batman/Batman_6.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Batman/batman_gameover4.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return batman5();
        }
    }

}