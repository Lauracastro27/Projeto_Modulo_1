//fase: batman4
var mensagem;

        function batman4() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele vai fazer? \n  1 - Derrotar todos.  \n 2 - Resgatar o Comissário");

        if (mensagem == 1) 
        {
            window.location.href="../Batman/Batman_5.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Batman/batman_gameover3.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return batman4();
        }
    }

}