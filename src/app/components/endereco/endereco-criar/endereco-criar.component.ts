import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Endereco-criar',
  templateUrl: './Endereco-criar.component.html',
  styleUrls: ['./Endereco-criar.component.scss']
})
export class EnderecoCreateComponent implements OnInit {

  endereco: Endereco = {
    id: 0,
    logradouro: "",
    cidade: "",
    bairro: "",
    complemento: "",
    cep: "",
    numero: "",
    coordenadaX: 0,
    coordenadaY: 0
  }

  constructor(private EnderecoService: EnderecoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateEndereco(): void {
    this.EnderecoService.create(this.endereco).subscribe(() => {
      this.EnderecoService.ShowOMessage('Endereco criado!')
      this.router.navigate(['/Endereco'])

    })

  }
  cancel(): void {
    this.router.navigate(['/Endereco'])
  }


}
