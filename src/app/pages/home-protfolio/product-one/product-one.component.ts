import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss']
})
export class ProductOneComponent implements OnInit {
  quantity: number = 1;
  productImages: string[] = [
    'https://picsum.photos/1920/700?random=1',
    'https://picsum.photos/1920/700?random=2',
    'https://picsum.photos/1920/700?random=3',
    'https://picsum.photos/1920/700?random=4'
  ];

  product = {
    name: 'Màn hình ô tô Android Zestech Z800 Pro',
    price: 0,
    gift: 'Quà tặng 3.450.000 khi mua Z800 Pro',
    features: [
      'Cam hành trình trước',
      'Sim 4G',
      'Bộ phát wifi',
      'Bản quyền Vietmap S1 trọn đời',
      'Thẻ nhớ 16GB',
      'Bảo hành 24 tháng',
      'Lỗi 1 đổi 1 trong vòng 12 tháng'
    ]
  };


  constructor() { }

  ngOnInit(): void {

  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
