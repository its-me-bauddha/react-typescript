  
import { ProductTemplate } from "../protemplates/ProductTemplate";


export class ProductComponent  extends ProductTemplate{


        Name = "Samsung Tv";
        Price = 4533533.45;
        Qty = 100;
        CategoryName = "Electronics";

        public Total(): number {
             return this.Qty *this.Price;
        }

        public Print(): void {
            console.log(`Name : ${this.Name}\n Price : ${this.Price}\n  Qty : ${this.Qty}\n 
            Category : ${this.CategoryName}\n total : ${this.Total()}\n` )
        }

}