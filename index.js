var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product").find().toArray(function (err, docs) {
//         if(err){
//             return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//         }
//         console.log(docs);
//         db.close();
//     })
// });

// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .limit(5)
//         .toArray(function (err, docs) {
//         if(err){
//             return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//         }
//         console.log(docs);
//         db.close();
//     })
// });

// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .skip(5)
//         .limit(5)
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             console.log(docs);
//             db.close();
//         })
// });


// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .sort({id:-1})
//         .limit(20)
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             console.log(docs);
//             db.close();
//         })
// });



// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .sort({discount:-1})
//         .limit(15)
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             console.log(docs);
//             db.close();
//         })
// });

// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .sort({position:-1})
//         .limit(3)
//         .project({name:true})
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             console.log(docs);
//             db.close();
//         })
// });


// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find()
//         .sort({price:-1})
//         .limit(10)
//         .project({name:true, price:true})
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             console.log(docs);
//             db.close();
//         })
// });

// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//
//
//     db.collection("product")
//         .find()
//         .project({position:true})
//         .sort({position:-1})
//         .limit(1)
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             var position = ++docs[0].position
//             next(position);
//         });
//
//     function next(position) {
//         db.collection("product").insertOne({
//             "position":position,
//             "available":true,
//             "name":"kinder",
//             "short":"Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//             "description":"Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//             "price":144,
//             "discount":12,
//             "category":"chocklet",
//             "date":"2016-04-04T06:10:58 +05:00",
//             "tags":["qui","voluptate","labore","sit"]
//
//         },function (err) {
//             if (err){
//                 return console.log("eeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrr",err);
//             }
//             console.log("success");
//             db.close();
//         })
//     }
// });




// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product").deleteMany({category:"magna"}, function (err) {
//         if(err){
//             return console.log(err);
//         }
//         console.log("success!");
//          db.close();
//     })
// });


// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product").updateMany({available: true}, {$set:{sold:true}}, function (err) {
//         if(err){
//             return console.log(err);
//         }
//         console.log("success!");
//         db.close();
//     });
// });



// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//     db.collection("product")
//         .find({available:true})
//         .count(function (err, docs) {
//         if(err){
//             return console.log(err);
//         }
//         console.log("success!", docs);
//         db.close();
//     });
// });




// MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
//     console.log("Connected correctly to server");
//
//     db.collection("product")
//         .find()
//         .project({position:true})
//         .sort({position:-1})
//         .limit(1)
//         .toArray(function (err, docs) {
//             if(err){
//                 return console.log(err, "eeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrrrr");
//             }
//             var position = docs[0].position;
//
//             db.collection("product").insertMany([{
//                 "position": ++position,
//                 "available": false,
//                 "name": "kinder",
//                 "short": "Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//                 "description": "Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//                 "price": 144,
//                 "discount": 12,
//                 "category": "chocklet",
//                 "date": "2016-04-04T06:10:58 +05:00",
//                 "tags": ["qui", "voluptate", "labore", "sit"]
//
//             }, {
//                 "position": ++position,
//                 "available": false,
//                 "name": "kinder",
//                 "short": "Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//                 "description": "Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//                 "price": 144,
//                 "discount": 12,
//                 "category": "chocklet",
//                 "date": "2016-04-04T06:10:58 +05:00",
//                 "tags": ["qui", "voluptate", "labore", "sit"]
//
//             }, {
//                 "position": ++position,
//                 "available": true,
//                 "name": "kinder",
//                 "short": "Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//                 "description": "Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//                 "price": 144,
//                 "discount": 12,
//                 "category": "chocklet",
//                 "date": "2016-04-04T06:10:58 +05:00",
//                 "tags": ["qui", "voluptate", "labore", "sit"]
//
//             }, {
//                 "position": ++position,
//                 "available": true,
//                 "name": "kinder",
//                 "short": "Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//                 "description": "Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//                 "price": 144,
//                 "discount": 12,
//                 "category": "chocklet",
//                 "date": "2016-04-04T06:10:58 +05:00",
//                 "tags": ["qui", "voluptate", "labore", "sit"]
//
//             }, {
//                 "position": ++position,
//                 "available": true,
//                 "name": "kinder",
//                 "short": "Veniam excepteur sunt minim irure est laboris pariatur irure aute nostrud excepteur elit do. Enim aliquip excepteur reprehenderit nulla ullamco incididunt.\r\n",
//                 "description": "Fugiit ipsum sint eiusmod in Lorem magna deserunt eiusmod officia sunt veniam.\r\nTempor reprehendedrit aliqua.\r\n",
//                 "price": 144,
//                 "discount": 12,
//                 "category": "chocklet",
//                 "date": "2016-04-04T06:10:58 +05:00",
//                 "tags": ["qui", "voluptate", "labore", "sit"]
//
//             }], function (err) {
//                 if (err) {
//                     return console.log("eeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrroooooooooooorrrrrrrrrrr", err);
//                 }
//                 console.log("success");
//                 db.close();
//             })
//         });
// });
//

