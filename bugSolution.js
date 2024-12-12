```javascript
//Correct usage of $set and $inc operator
db.collection.updateOne({name:"John"},{$set:{age:10}}); //For creating new field and setting value
db.collection.updateOne({name:"John"},{$inc:{age:10}});//For updating existing field

//Alternative approach using upsert option
db.collection.updateOne({name:"John"},{$inc:{age:10}}, {upsert: true}); //Creates the document if it doesn't exist and update if exists
```