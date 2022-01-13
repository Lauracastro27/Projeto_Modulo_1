//fase: batman2
var mensagem;

        function batman2() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele deve fazer? \n  1 - Granada de fumaça.  \n 2 - Bater em todos");

        if (mensagem == 1) 
        {
            window.location.href="../Batman/batman_3.html"  
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Batman/batman_gameover1.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return batman2();
        }
    }

}