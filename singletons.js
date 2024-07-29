class BlogService {
    constructor() {
        console.log("class in instantiated");
    }

    static get newInstance() {
        return new BlogService();
    }
}

// removing private on the constructor will allow the class to be instantiated
// const blogService = new BlogService();
// export { blogService };

// keeping private on the constructor will NOT allow the class to be instantiated unless from within the class
// using the static getter method newInstance
const blogService = BlogService.newInstance;
export { blogService };
