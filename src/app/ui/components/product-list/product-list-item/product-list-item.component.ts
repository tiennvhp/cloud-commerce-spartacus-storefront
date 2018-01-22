import { Component, Input } from '@angular/core';

@Component({
    selector: 'y-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {

    @Input() product;

}