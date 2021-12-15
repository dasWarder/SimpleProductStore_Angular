import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProductsData} from "../data/products";
import {IProduct} from "../data/iProduct.type";
import Swal from 'sweetalert2';
import {SwalAlert} from "../data/customAlert.type";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productData: ProductsData) {
  }

  products: Array<IProduct> = this.productData.products;
  shareAlert: SwalAlert = this.productData.shareAlert;
  notifyAlert: SwalAlert = this.productData.notifyAlert;

  ngOnInit(): void {
  }

  share = () => {
    Swal.fire({
      icon: this.shareAlert.type,
      title: this.shareAlert.title,
      text: this.shareAlert.description,
      showConfirmButton: false,
      timer: 1500
    });
  }

  onNotify = () => {
    Swal.fire({
      icon: this.notifyAlert.type,
      title: this.notifyAlert.title,
      text: this.notifyAlert.description,
      showConfirmButton: true
    });
  }

}
