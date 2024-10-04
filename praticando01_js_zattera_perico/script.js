function exibirMenu() {
    let continuar = true;
    let pedido = "";

    while (continuar) {
        // Exibir menu
        let opcao = prompt(
            "--- MENU DA LANCHONETE ---\n1. Escolher Lanche\n2. Escolher Bebida\n3. Escolher Sobremesa\n4. Sair\nEscolha uma opção:"
        );

        // Converter entrada para número
        opcao = parseInt(opcao);

        switch (opcao) {
            case 1:
                let lanches = ["Hambúrguer", "Sanduíche", "Hot Dog"];
                let lancheEscolha = prompt(
                    "Escolha um lanche:\n1. Hambúrguer\n2. Sanduíche\n3. Hot Dog"
                );
                lancheEscolha = parseInt(lancheEscolha);

                if (lancheEscolha >= 1 && lancheEscolha <= lanches.length) {
                    pedido += `Lanche: ${lanches[lancheEscolha - 1]}<br>`;
                } else {
                    alert("Opção inválida de lanche.");
                }
                break;

            case 2:
                let bebidas = ["Refrigerante", "Suco", "Água"];
                let bebidaEscolha = prompt(
                    "Escolha uma bebida:\n1. Refrigerante\n2. Suco\n3. Água"
                );
                bebidaEscolha = parseInt(bebidaEscolha);

                if (bebidaEscolha >= 1 && bebidaEscolha <= bebidas.length) {
                    pedido += `Bebida: ${bebidas[bebidaEscolha - 1]}<br>`;
                } else {
                    alert("Opção inválida de bebida.");
                }
                break;

            case 3:
                let sobremesas = ["Sorvete", "Torta", "Mousse"];
                let sobremesaEscolha = prompt(
                    "Escolha uma sobremesa:\n1. Sorvete\n2. Torta\n3. Mousse"
                );
                sobremesaEscolha = parseInt(sobremesaEscolha);

                if (sobremesaEscolha >= 1 && sobremesaEscolha <= sobremesas.length) {
                    pedido += `Sobremesa: ${sobremesas[sobremesaEscolha - 1]}<br>`;
                } else {
                    alert("Opção inválida de sobremesa.");
                }
                break;

            case 4:
                continuar = false;
                document.getElementById("pedido").innerHTML = `<h2>Seu pedido:</h2>${pedido}`;
                break;

            default:
                alert("Opção inválida! Tente novamente.");
                break;
        }
    }
}
