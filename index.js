import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true}));

const porta = 3000;
const host = 'localhost';

var listar = [];

function cadastroView(req, resp)
{
    resp.send(`
        <html>
                <head>
                    <title>Cadastro Simples</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <style>
                        .container {
                        max-width: 700px;
                        margin: 0 auto;
                        background-color: white;
                        margin-top: 50px;
                    }
                    </style>
                   
                </head>
                <body>
                <div class="container">
                <h1>Cadastro de Usuários</h1>
                <hr>
                <br>
                <br>
                    <form method="POST" action="/cadastrar" novalidate>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" size="20" style="width: 270px">
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" size="20">
                        <br>
                        <br>
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço" size="40" style="width: 550px">
                        <br>
                        <br>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" size="40" style="width: 330px" required="true">
                        <label for="senha"> Senha: </label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" size="20" required="true">
                        <br>
                        <br>
                        <label for="sexo">Sexo:</label>
                        <input type="radio" id="sexo" name="sexo" value="F">Feminino
                        <input type="radio" id="sexo" name="sexo" value="M">Masculino
                        <input type="radio" id="sexo" name="sexo" value="P">Prefiro Não Responder
                        <br>
                        <br>
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" required  style="width: 430px">
                        <label for="estados">UF:</label>
                        <select name="estado" id="estado">
                            <option value="selecione">Selecione...</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                        </select>
                        <br>
                        <br>
                        <br>
                        <hr>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
        `);
}
function menuView(req, resp){
    resp.send(`
        <html>
            <head>
                <title>Cadastro</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <style>
                        .body {
                        background-color: red;
                    }
                    </style>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">MENU</a>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/cadastrar">Cadastrar</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
        `);
}

function cadastrar(req, resp){
    const nome      = req.body.nome;
    const cpf       = req.body.cpf;
    const endereco  = req.body.endereco;
    const email     = req.body.email;
    const senha     = req.body.senha;
    const sexo      = req.body.sexo;    
    const cidade    = req.body.cidade;
    const estado    = req.body.estado;

    const pessoa = {nome, cpf, endereco, email, senha, sexo, cidade, estado};

    listar.push(pessoa);
    
    resp.write(`
        <html>
            <head>
                <title>Lista de Usuários</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta charset="utf-8">
                <style>
                        .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        background-color: white;
                        margin-top: 50px;
                    }
                    </style>
            </head>
            <body>
            <div class="container">
            <h1>Lista de Usuários</h1>
            <hr>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Email</th>
                        <th scope="col">Senha</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>`);
                for (var i = 0; i < listar.length; i++){
                    resp.write(`<tr>
                                    <td>${listar[i].nome}</td>
                                    <td>${listar[i].cpf}</td>
                                    <td>${listar[i].endereco}</td>
                                    <td>${listar[i].email}</td>
                                    <td>${listar[i].senha}</td>
                                    <td>${listar[i].sexo}</td>
                                    <td>${listar[i].cidade}</td>
                                    <td>${listar[i].estado}</td>
                                </tr>
                        `);
                }

    resp.write(`</tbody> 
            </table>
            <a class="btn btn-primary" href="/cadastrar">Continuar Cadastrando</a>
            <a class="btn btn-secondary" href="/">Voltar para o Menu</a>
             </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
            `);

    resp.end();
}

app.get('/', menuView);
app.get('/cadastrar', cadastroView);

app.post('/cadastrar',cadastrar);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`);
});