//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
  return  console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');

/*db.collection('Todos').find({
    _id: new ObjectID('5c14d65927774377ff830b54')
}).toArray().then((docs) => {
console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));
},(err) => {
    console.log('Unable to fetch todos', err);
});*/

/*db.collection('Todos').find().count().then((count) => {
console.log(`Todos count: ${count}`);
console.log(JSON.stringify(docs, undefined, 2));
},(err) => {
    console.log('Unable to fetch todos', err);
});*/

db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
})

//client.close();
});