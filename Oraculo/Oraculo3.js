//fase: oraculo3
var mensagem;

        function oraculo3() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt(" O que você vai fazer agora?\n 1 - Avisar. \n 2 - Deixar quieto. ");

        if (mensagem == 1) 
        {
            window.location.href="../Oraculo/oraculo4.html"  
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Oraculo/OraculoGameOver3.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return oraculo3();
        }
    }

}