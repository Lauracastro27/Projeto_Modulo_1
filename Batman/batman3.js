//fase: batman3
var mensagem;

        function batman3() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele deve fazer? \n  1 - Tentar conversar.  \n 2 - Neutraliza-lo");

        if (mensagem == 1) 
        {
            window.location.href="../Batman/batman_gameover2.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Batman/Batman_4.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return batman3();
        }
    }

}