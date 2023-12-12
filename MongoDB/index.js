const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/MongoDBtest")
  .then(() => console.log("connection is successful"))
  .catch((e) => console.log(e, "connection falied"));

const courseSchema = new mongoose.Schema({
  title: String,
  noVideos: Number,
  cType: String,
  author: String,
  active: Boolean,
});

const courseRecord = new mongoose.model("courseRecord", courseSchema);

// create document
// const Reactdata=new courseRecord({
//     title:"React Js",
//     noVideos:47,
//     cType:'Front End',
//     active:true
// })

// Reactdata.save();

//async await

// const createDocument = async () => {
//     try {
//         const Vuedata = new courseRecord({
//             title: "Vue Js",
//             noVideos: 37,
//             cType: 'Front End',
//             active: true,
//             author:'Not availble'
//         })
//         const result=await Vuedata.save();

//     }
//     catch(e){
//         console.log(e);
//     }
// }
// createDocument();

//multiple data store

// const createDocument = async () => {
//         try {
//             const Jsdata = new courseRecord({
//                 title: "Javascript",
//                 noVideos: 45,
//                 cType: 'Front End',
//                 active: true
//             })
//             const Nodedata = new courseRecord({
//                 title: "Node Js",
//                 noVideos: 30,
//                 cType: 'Back End',
//                 active: true
//             })
//             const Expressdata = new courseRecord({
//                 title: "Express Js",
//                 noVideos: 37,
//                 cType: 'Front End',
//                 active: true
//             })
//             const CSSdata = new courseRecord({
//                 title: "CSS Js",
//                 noVideos: 37,
//                 cType: 'Front End',
//                 active: true
//             })
//             const result=await courseRecord.insertMany([Jsdata,Nodedata,Expressdata,CSSdata]);

//         }
//         catch(e){
//             console.log(e);
//         }
//     }
//     createDocument();

//one more way
// const createDocument = async () => {
//   try {
//     const alldata = await courseRecord.create([
//       {
//         title: "HTML Js",
//         noVideos: 27,
//         cType: "Front End",
//         active: true,
//       },
//       {
//         title: "Mongodb Js",
//         noVideos: 30,
//         cType: "Database",
//         active: true,
//       },
//     ]);
//   } catch (e) {
//     console.log(e);
//   }
// };
// createDocument();

//read queries

// const getDocument = async () => {
//   try {
    // const result1=await courseRecord.find();
    // const result1=await courseRecord.find({title:'Vue Js'},{title:1,_id:0});
    // const result1=await courseRecord.find({title:'React Js'}).select({title:1,_id:0});
    // const result1=await courseRecord.find().limit(1).skip(1);
    // const result1=await courseRecord.find({noVideos:{$gt:30}}).select({_id:0,title:1});
    // const result1=await courseRecord.find({noVideos:{$gt:30}}).count();
//     const result1 = await courseRecord
//       .find({ title: /react Js/i })
//       .select({ title: 1, _id: 0 });

//     console.log(result1);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getDocument();

//update
const updateDocument = async (_id) => {
  try {
    const result1 = await courseRecord.updateOne(
      { _id },
      {
        $set: { cType: "Design" },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
updateDocument("657829454a0f3fd10cf361e2");
