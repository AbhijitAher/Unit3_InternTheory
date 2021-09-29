const mongoose = require("mongoose");

const connect = () => {

    return mongoose.connect('mongodb+srv://AbhijitAher:Atlas_Abhi28@interntheoryclone.ficx7.mongodb.net/interntheory?retryWrites=true&w=majority');
}
module.exports = connect;


// let connect = {
//     dbUrl:
//       "mongodb+srv://AbhijitAher:Atlas_Abhi28@interntheoryclone.ficx7.mongodb.net/interntheory?retryWrites=true&w=majority",
//   };
  
//   module.exports = connect;