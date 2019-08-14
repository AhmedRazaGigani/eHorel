import { Product } from '../models/newProduct';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  categories = ['sukienki', 'bluzki', 'spodnie', 'kombinezony', 'dodatki'];
  products = [];

  constructor(private firebase: AngularFirestore) { }

  getDressys() {
    return this.firebase.collection('sukienki').snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  createNewProduct(product: Product) {
    let p: Product;
    p =  {
      category: product.category,
      name: product.name,
      description: product.description,
      price: product.price,
      size: product.size,
      storage: product.storage,
      photos: product.photos,
      isNew: product.isNew,
      promotion: product.promotion,
    };
    this.firebase.collection('products').add(p);
  }

  getNews() {
    return this.firebase.collection('products', ref => ref.where('isNew', '==', true)).valueChanges();
  }
  getAll() {
    return this.firebase.collection('products').valueChanges();
  }
  getAllToMemory() {
    this.firebase.collection('products').valueChanges().subscribe( res => { this.products = res; console.log(this.products) });
  }
}
