const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Meghna:Meghna@cluster0-iiwis.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology:true, useNewUrlParser:true}).then(res => console.log(res))
.catch(err =>console.log(err))

