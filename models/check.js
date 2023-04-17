const mongo = require('mongoose');


const slideSchema = mongo.Schema({
  leftImage: {
    type: String,
    required: true,
  },

  rightImage: {
    type: String,
    required: true,

  },

  leftVotes: {
    type: Number,
    default: 0,
  },

  rightVotes: {
    type: Number,
    default: 0,
  },
  caption : {
     type: String,
     required:true
  },

  ip :{
    type :Number,
    default:0
  }
   



  // votes:[{
  //   ipAddress:{
  //       type:String,
  //       required:true,
  //   },

  //   vote:{
  //       type:String,
  //       enum:['left','right'],
  //       required:true,
  //   },
  // }],
});
module.exports = mongo.model('Check', slideSchema);