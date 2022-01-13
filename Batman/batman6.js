//fase: batman2
var mensagem;

        function batman6() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Como o Batman vai enfrentar o Coringa TITAN? \n  1 - Eletricidade.  \n 2 - Gel Explosivo.");

        if (mensagem == 1) 
        {
            window.location.href="../Batman/batman_gameover5.html";
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Batman/BatmanFinal.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return batman6();
        }
    }

}