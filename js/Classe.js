class Usuario {
constructor(login, senha){
this.login = login;
this.senha = senha;

}
validarLogin(){
    return this.login.toString().includes('@')
&& this.login.toString().includes('.')
? 'Login válido'
: 'Login inválido';
}
} 
const usuario1 = new Usuario('rafael@verzel.com.br', '12345');
console.log(usuario1.login, usuario1.validarLogin());

const usuario2 = new Usuario('João', '12345');
console.log(usuario2.login, usuario2.validarLogin());

class Administrador extends Usuario{
    constructor(login, senha, resumoProfissional){
        super(login, senha);
        this.resumoProfissional = resumoProfissional;
    }
}
const administrador1 = new Administrador('administrador@admin.com', 'haahahahah', 'Resumo do administrador');
console.log(administrador1.login, administrador1.validarLogin());
console.log(usuario2.resumoProfissional, administrador1.resumoProfissional);