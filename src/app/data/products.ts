import {IProduct} from "./iProduct.type";
import {Injectable} from "@angular/core";
import {SwalAlert} from "./customAlert.type";


@Injectable({
  providedIn: 'root'
})
export class ProductsData {

  products: Array<IProduct> = [
    { name: 'Phone XL', description: 'A large phone with one of the best screen', price: 1200.00 },
    { name: 'Phone Mini', description: 'A great phone with one of the best camera', price: 700.00 },
    { name: 'Phone Standard', description: 'Common implementation of the phone', price: 420.00 }
  ];

  shareAlert: SwalAlert = {
    title: 'Share',
    description: 'The product has been shared',
    type: 'info'
  };

  notifyAlert: SwalAlert = {
    title: 'Notify',
    description: 'You will be notified when the product goes on sale',
    type: 'info'
  };
}
