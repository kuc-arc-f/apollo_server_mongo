var ObjectID = require('mongodb').ObjectID;
import LibCommon from "../lib/LibCommon"
import LibMongo from "../lib/LibMongo"

export default {
  get_items :async function(){
    try {
      var items = await LibMongo.get_array("tasks" )
      items = LibCommon.convert_items(items)
//console.log( items )            
      return items
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },    
  get_item :async function(id){
    try {
      var where = { _id: new ObjectID(id) }
      var item = await LibMongo.get_item("tasks" , where ) 
      var ret ={
        item: item
      } 
      item.id = item._id     
//console.log( item ) 
      return item
    } catch (err) {
      throw new Error('Error , get_item');
    }          
  },
  add_item :async function(args){
    try {
      var item = {
        title: args.title ,  
        created_at: new Date(),
      };
      const itemOne = await LibMongo.add_item("tasks" ,item )
      itemOne.id = itemOne._id
//console.log( itemOne )  
      return itemOne
    } catch (err) {
      throw new Error('Error , add_item');
    }          
  },
  update_item :async function(args){
    try {
      var id = args.id
      var item = {
        title: args.title ,  
      };
  //console.log(item);
      var where = {"_id": new ObjectID( id )};
      await LibMongo.update_item("tasks" , where, item )
      var ret ={
        item: item
      }      
      return args
    } catch (err) {
      throw new Error('Error , update_item');
    }          
  },
  delete_item :async function(args){
    try {
      var id = args.id
      var where = { "_id": new ObjectID( id ) };
      await LibMongo.delete_item("tasks" , where )
      var ret ={
        id: id
      }      
      return args
    } catch (err) {
      throw new Error('Error , delete_item');
    }          
  },  
}
