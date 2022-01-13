//fase: batman4
var mensagem;

        function Batman1() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("O que ele vai fazer agora? \n  1 - Deixar ele na cela.  \n 2 - Soltar ele da cela.");

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