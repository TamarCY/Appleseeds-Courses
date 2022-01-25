// How to create a collection 

// Creat schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
})

// Compile it to a model that gives us a class
const Course = mongoose.model("Course", courseSchema)


const createCourse = async () => {
// Creat an object from that class and 
//   this objects map to a document in our data base
const course = new Course ({
    name: "node",
    author: "mosh",
    tags: ["node", "backend"],
    isPublished: true
});

// Save it to the data base
const result = await course.save();
}

createCourse()

