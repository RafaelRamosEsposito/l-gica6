const dados = {
    nome : "Rafael",
    idade : 36,
    email : "rafaramosesposito@gmail.com"
}
dados.time = "Flamengo"
delete dados.email
console.log (dados)
let cadastro = [
    {
        nome: "Rafael",
        idade : 36,
        telefone : 21969355565,
        amigos : ["Margareth","amigo2","amigo3","amigo4"]
    },
    {
        nome: "Pedro",
        idade : 35,
        telefone : 21969355566,
        amigos : ["Geraldo","amigo2","amigo3","amigo4"]
    },
    {
        nome: "Monica",
        idade : 34,
        telefone : 21969355567,
        amigos : ["amigo1","Marli","amigo3","amigo4"]
    },
    {
        nome: "Marcela",
        idade : 33,
        telefone : 21969355568,
        amigos : ["amigo1","amigo2","Vilma","amigo4"]
    },
    {
        nome: "Rodrigo",
        idade : 32,
        telefone : 21969355569,
        amigos : ["amigo1","amigo2","amigo3","Mercedes"]
    },
]
console.log(cadastro[0].amigos[0],cadastro[1].amigos[0],cadastro[2].amigos[1],cadastro[3].amigos[2],cadastro[4].amigos[3] )