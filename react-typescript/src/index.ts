// // // let username ;
// // // username = "john";

// // // username = 56000;


// // //let username :string | null = prompt("Enter name");

// // let username :string|number | boolean = "John";
// // username = 0;
// // username = true;

// // let n :any = prompt("Enter name");


// // let values :any[] = [10 ,"joh" , true ,2 ,false ,"A"];  //valid
// // let cat : any []= new Array ("john" , true ,1 , "A")  // invalid 


// //let c: string []|number[] = [4  ,"A", 4 ];


// // let product :any = {
// //         "name" : "Tv" ,
// //         "price" : 54333,
// //         "stock" :true,
// //         "city" :[],
// //         "Rating" :{}

// // }


// // function ProductDetails (id :number , name ?: string){
// //     if(name == undefined ){
// //         console.log("Id" + id);

// //     }
// //     else{
// //         console.log(`Id = ${id} and name = ${name}`);

// //     }

// // }

// // ProductDetails(10, "jon");



// // class Employee {
// //     public firstName :string ="";
// //     public lastName :string ="";
// //     public designation : string ="";
// //     public  Print () :void {
// //             document.write(`${this.firstName} - ${this.lastName} - ${this.designation}`);
// //     } 
// // }

// // class Developer extends Employee
// // {
// //    firstName = "Aman";
// //    lastName = "kr";
// //    designation = "developer";
// //    DeveloperRole= "Build ,Debug ,test ";

// //   Print(){
// //     super.Print();
// //     document.write(`${this.DeveloperRole}`);
// //   }

// // }

// // class Admin extends Employee
// // {
// //    firstName = "John ";
// //    lastName = "k";
// //    designation = "Admin";
// //    AdminRole= " login signup";

// //   Print(){
// //     super.Print();
// //     document.write(`${this.AdminRole}`);
// //   }

// // }

// // class Manager  extends Employee
// // {
// //    firstName = "JohnWick";
// //    lastName = "kite";
// //    designation = "Manager";
// //    ManagerRole= " Manage Data and Files APprove";

// //   Print(){
// //     super.Print();
// //     document.write(`${this.ManagerRole}`);
// //   }

// // }


// // let employees = [new Developer() , new Admin(),new Manager()];


// interface IOracle {
//         UserName: string;
//         Passward :string;
//         Database : string;
// }

// interface IMySql {
//     host :string;
//     user:string ;
//     passward :string;
//     database : string;
// }

// interface IMongoDb{
//     url : string;
// }

// class Database < T >
// {
//         public ConnectionString : T | null  = null;
//         public Connect(){
//             for(var property in this.ConnectionString){
//                 console.log(`${property} : ${this.ConnectionString[property]}`)
//             }
//         }
// }

// console.log(`==========Printing Oracle============`);

// let oracle = new Database <IOracle>();
// oracle.ConnectionString = {
//         UserName  :"harsh",
//         Passward : "134",
//         Database : "dbOracleSt"


// }
// oracle.Connect();

// console.log(`==========Printing mYSQL============`);

// let mYSQL = new Database <IMySql>();
// mYSQL.ConnectionString = {
//     host :"abc localhost",
//     user : "xyz crazy",
//     passward:"qwerty",
//     database  : "mySql Db cone"
// }
// mYSQL.Connect();

// console.log(`==========Printing Mongodb============`);

// let mongoDB = new Database <IMongoDb>();
// mongoDB.ConnectionString ={
//     url:"localhost :mongodb:// 127.0.0.1:27017"
// }
// mongoDB.Connect();


// function sum (a :any , b :any){
//     return a + b ;

// }

// class Demo{

//     public Add<T>( a : T , b :T) :T{
//          return sum (a,b);
//     }
// }

// let obj = new Demo ();
// obj.Add<number>(10,30);
// obj.Add <string> ("aaa" ,"bb")


// enum WeekDays {
//     sun ,mon,tue,wed,thu,fre,sat
// }
// enum Months{
//     jan, feb,mar,apr,mat,jun,jul,aug,sept,oct,nov,dec
// }
// let Dat : any = new Date();

// console.log(`
//         Today M ${Dat.getMonth()};
//         Today D : ${Dat.getDay()};
//         Month : ${Months[Dat.getMonth()]};
//         Day : ${WeekDays[Dat.getDay()]};

// `)


// enum StringValues {
//     a , 
//     b = "Hello !! GGGG ",
//     c = "ABC"
// }

enum ExpressionValues {
    A = 10 ,

    B = 20 ,
    C = A +   B
}

console.log (`Addition  :${ExpressionValues.C}`);