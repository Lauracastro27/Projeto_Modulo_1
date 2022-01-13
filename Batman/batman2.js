//fase: batman2
var mensagem;

        function Batman1() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele deve fazer? \n  1 - Granada de fumaça.  \n 2 - Bater em todos");

        if (mensagem == 1) 
        {
            location.replace("https://github.com/Lauracastro27/Projeto_Modulo_1/blob/main/Batman/batman_2.html");
        }
        else if (mensagem == 2)
        {
            location.replace("");
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return Batman1();
        }
    }

}