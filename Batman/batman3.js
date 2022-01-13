//fase: batman3
var mensagem;

        function Batman1() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele deve fazer? \n  1 - Tentar conversar.  \n 2 - Neutraliza-lo");

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