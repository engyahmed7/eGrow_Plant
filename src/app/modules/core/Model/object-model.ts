export class User{
    name!:string;
    email!:string;
    password!:string;
    role!:string;
    mobNumber!:string;
    age!:number;
    address!:Address;
    gender!:string;
    language!:string;
    agreetc!:boolean;
    aboutYou!:string;
    uploadImage!:string;
}


export class Address{
  id!:number;
  addressLine1!:string;
  addressLine2!:string;
  city!:string;
  state!:string;
  zipCode!:string;
}


export class Product{
  id!:number;
  name!:string;
  price!:number;
  description!:string;
  image!:string;
  category!:string;
}

//  "order": [
//   {
//     "id": 1,
//     "userId": 3,
//     "sellerId": 2,
//     "product": {
//       "id": 1,
//       "name": "Aloe Vera",
//       "price": 50,
//       "description": "Aloe Vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world.",
//       "image": "assets/images/product1.jpg",
//       "category": "plants"
//     },
//     "quantity": 2,
//     "total": 100,
//     "status": "pending",
//     "date": "2021-09-01",
//     "deliveryAddress": {
//       "city": "Cairo",
//       "street": "El-Mahata",
//       "building": "5",
//       "floor": "3",
//       "apartment": "6",
//       "zip": "12345"
//     },
//     "paymentMethod": "cash",
//     "dateTime": "2024-09-01",
//     "contact": "01114621092"
//   }
// ]


export class Order{
  id!:number;
  userId!:number;
  sellerId!:number;
  product!:Product;
  quantity!:number;
  total!:number;
  status!:string;
  date!:string;
  deliveryAddress!:Address;
  paymentMethod!:string;
  dateTime!:string;
  contact!:string;
}

