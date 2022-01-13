//fase: batman2
var mensagem;

        function Batman1() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Como o Batman vai enfrentar o Coringa TITAN? \n  1 - Eletricidade.  \n 2 - Gel Explosivo.");

        if (mensagem == 1) 
        {
            location.replace("");
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