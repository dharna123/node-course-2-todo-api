//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if(err){
  return  console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');

/*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c173142720090986a3d7478')
},{
    $set: {
        completed: true
    }
},{
    returnOriginal: false
}).then((result) => {
    console.log(result);
});
*/

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c14db0dd9596678a9298344')
},{
    $set: {
        name: 'Andrew'
    },
    $inc: {
        age: 1
    }
},{
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

});