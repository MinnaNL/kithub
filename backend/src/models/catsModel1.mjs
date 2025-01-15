// //ItemsModel
// catsLisr 
// export class catsModel {
//     constructor(id, name, price, description, amount_in_stock, image_url) {
//       this.id = id;
//       this.name = name;
//       this.price = price;
//       this.description= description;
//       this.amount_in_stock = amount_in_stock;
//       this.image_url = image_url;
//     }
//   }

  
//   export class CatDetailsModel extends CatModel {
//     constructor(
//       id,
//       name,
//       price, 
//       age,
//       sex,
//       description, 
//       amount_in_stock,
//       image_url
//     ) {
//       super(id, title, posterImage, releaseDate);
  
//       this.backgroundImage = backgroundImage;
//       this.genre = genre;
//       this.runtime = runtime;
//     }
//   }

//   export interface CatModel {
//     id: number; // Random number for unique identification
//     name: string; // Name of the cat
//     age: string; // Age category: "young", "adult", "senior"
//     gender: string; // Gender: "female", "male", "mixed", "female's", "male's"
//     price: number; // Price of the cat
//     description: string; // Description of the cat
//     image: string; // Image URL (link to your assets folder)
//     stock: number; // Stock: If the cat is adoptable, it will have stock > 0; 0 if not adoptable
//     adoptable: boolean; // If the cat is adoptable, it will be true; otherwise false
//   }