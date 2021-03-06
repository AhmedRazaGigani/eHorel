import { DbService } from '../../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<any>;
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.products$ = this.db.getAll();
  }
}
