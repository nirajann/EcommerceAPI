const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(

    () => {
        console.log("connectted to mongodbs server")
    }).catch(
    (err) => console.log(err)
)
// connection to mongoose
