import { TelefoneCliente } from '../telefoneCliente.model';
import { TelefoneClienteService } from '../telefoneCliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-TelefoneCliente-criar',
  templateUrl: './TelefoneCliente-criar.component.html',
  styleUrls: ['./TelefoneCliente-criar.component.scss']
})
export class TelefoneClienteCreateComponent implements OnInit {

  telefoneCliente: TelefoneCliente = {
    cliente: null!,
    numero: ""
    //necessário criar a classe Cliente
    //o Número tem que vir da classe Telefone.
  }

  constructor(private TelefoneClienteService: TelefoneClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  CreateTelefoneCliente(): void {
    this.TelefoneClienteService.create(this.telefoneCliente).subscribe(() => {
      this.TelefoneClienteService.ShowOMessage('TelefoneCliente criado!')
      this.router.navigate(['/TelefoneCliente'])

    })

  }
  cancel(): void {
    this.router.navigate(['/TelefoneCliente'])
  }


}
