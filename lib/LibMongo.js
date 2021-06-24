// LibMongo
const MongoClient = require('mongodb').MongoClient;

//
export default {
  init:function(){
      this.dbName = "apollo"
      this.url = "mongodb://localhost:27017"
  },
  get_client:async function(){
    try{
      this.init()
      let client = await MongoClient.connect(this.url);
      return client
    } catch (err) {
      console.log(err);
      throw new Error('Error, get_client');
    }
  },
  get_db_name: function(){
    this.init()
    return this.dbName
  },   
  get_array: async function(collectionName ){
    try{
      this.init()
      let client = await MongoClient.connect( this.url);
      const db = client.db( this.dbName);
      const collection = db.collection(collectionName);
      var items = await collection.find({}).sort({created_at: -1}).toArray()
      client.close();
      return items
    } catch (err) {
      console.log(err);
      throw new Error('Error, get_array');
    }
  },
  get_item: async function(collectionName , where ){
    try{
      this.init()
      let client = await MongoClient.connect( this.url);
      const db = client.db( this.dbName);
      const collection = db.collection(collectionName);
      var item = await collection.findOne(where) 
      client.close();
      return item
    } catch (err) {
      console.log(err);
      throw new Error('Error, get_item');
    }
  },
  add_item: async function(collectionName ,item ){
    try{
      this.init()
      let client = await MongoClient.connect( this.url);
      const db = client.db( this.dbName);
      const collection = db.collection(collectionName);
      await collection.insertOne(item); 
      client.close();
      return item
    } catch (err) {
      console.log(err);
      throw new Error('Error, add_item');
    }
  }, 
  update_item: async function(collectionName , where, item ){
    try{
      this.init()
      let client = await MongoClient.connect( this.url);
      const db = client.db( this.dbName);
      const collection = db.collection(collectionName);
      await collection.updateOne(where, { $set: item })
      client.close();
    } catch (err) {
      console.log(err);
      throw new Error('Error, update_item');
    }
  }, 
  delete_item: async function(collectionName , where ){
    try{
      this.init()
      let client = await MongoClient.connect( this.url);
      const db = client.db( this.dbName);
      const collection = db.collection(collectionName);
      await collection.deleteOne(where)   
      client.close();
    } catch (err) {
      console.log(err);
      throw new Error('Error, delete_item');
    }
  },   

}