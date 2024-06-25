function adicionarInteresse(){
    const input_interesse = document.getElementById('input-interesse´');
    const valorInput_interesse=input_interesse.value.trim();

    if(valorInput_interesse){
        const item = document.createElement('li');
        item.textContent = valorInput_interesse;
        let interesses = pegarDados();
        interesses.push(item.textContent);
        localStorage.setItem("meus-interesses", JSON.stringfy(interesses));
        mostrarInteresses();
        input_interesse.value = "";
    }else{
        alert("Digite um interesse ou hobbie")
    }
}