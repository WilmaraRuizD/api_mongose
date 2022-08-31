import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tasksdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database es ' + db.connection.name);
    } catch (error) {
        console.error(error)
    }
})();