module.exports = {

//  schema: true,

  attributes: {

    category: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string',
      required: true,
      unique: true
   
    },

    price: {
      type: 'string',
      required: true
     
    }

  //   thingSearch: {
      
  //     type: 'string',
  //     required : true

  // }

     },

    
    
  };