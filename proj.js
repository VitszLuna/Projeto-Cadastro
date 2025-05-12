let clientes = [
    {
        nome: "Anna",
        idade: 25,
        email: "anna01@gmail.com",
    },
    {
        nome: "Gabriel",
        idade: 17,
        email: "gabgou@gmail.com",
    },
    {
        nome: "Isabella",
        idade: 18,
        email: "isafreitascruz@gmail.com",
    },
];

function filtrarclientesAdultos(cliente) {
    return cliente.idade >= 18;
}

function mostrarclientesAdultos() {
    let clientesAdultos = clientes.filter(filtrarclientesAdultos);

    let lista = document.getElementById("listaclientesAdultos"); 
    lista.innerHTML = "";

    for (let i = 0; i < clientesAdultos.length; i++) {
        let item = document.createElement("li");
        item.textContent = `${clientesAdultos[i].nome} (${clientesAdultos[i].idade} anos) - ${clientesAdultos[i].email}`;
        lista.appendChild(item);
    }
}

function cadastrarCliente() {
    let nome = document.getElementById("nomeCliente").value;
    let idade = parseInt(document.getElementById("idadeCliente").value);
    let email = document.getElementById("emailCliente").value;

    if (nome && idade && email) {
        clientes.push({ nome: nome, idade: idade, email: email });

        document.getElementById("mensagemCadastro").textContent = "Cliente cadastrado com sucesso!";
        document.getElementById("nomeCliente").value = "";
        document.getElementById("idadeCliente").value = "";
        document.getElementById("emailCliente").value = "";

        mostrarclientesAdultos(); // Atualiza a lista automaticamente
    } else {
        document.getElementById("mensagemCadastro").textContent = "Por favor, preencha todos os dados!";
    }
}
