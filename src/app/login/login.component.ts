import { Component } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormModel: { nome: string; senha: string; confirmaSenha: string; } = {
    nome: "",
    senha: "",
    confirmaSenha: "",
};

constructor(
  private localStorageService: LocalStorageService,

  ) {}

ngOnInit(): void {
  this.criarForm();
}

  criarForm(){
    this.loginFormModel = {
      nome: "",
      senha: "",
      confirmaSenha: "",
    }
  }

  login(){
          
    if (!this.mesmaSenha()){
      window.alert('Senhas não compatíveis')
      return;
    } 
          
    const usuario: any = {nome: this.loginFormModel.nome, senha: this.loginFormModel.senha}

    this.loginFormModel.nome = "";
    this.loginFormModel.senha = "";
    this.loginFormModel.confirmaSenha = "";
    
    this.localStorageService.registroUsuario(usuario);

  }

  mesmaSenha() {
    return this.loginFormModel.senha === this.loginFormModel.confirmaSenha
  };
}

