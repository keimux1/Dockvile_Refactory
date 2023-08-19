const mongoose = require('mongoose')

const conneectDB = async ()=>{
  try{
    conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected at: ${conn.connection.host}`)
    // Or console.log("MOngoDB connected at: "+conn.connection.host)
}
catch(error){
  console.log("MongoDB connected at: "+error)
  process.exit(1)
}
}

module.exports = conneectDB;