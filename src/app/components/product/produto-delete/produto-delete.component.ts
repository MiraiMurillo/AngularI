import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss']
})
export class ProdutoDeleteComponent implements OnInit {

  produto!: Produto;

  constructor(private ProdutoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProdutoService.findById(id!).subscribe(produto =>
      this.produto = produto
    )
  }

  deleteProduto(): void{
    this.ProdutoService.delete(this.produto.id!).subscribe(() => {
      this.ProdutoService.ShowOMessage('Produto Excluido com sucesso')
      this.router.navigate(['/product'])
    })

  }

  cancel(): void{
    this.router.navigate(['/product'])
  }

}
