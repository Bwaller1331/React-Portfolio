
const projects =[
    {
        id: 1,
        name: "React Google Book Search and Save",
        imgURL:"https://github.com/Bwaller1331/Google-React-Books/blob/main/client/src/assets/reactHomePage.png?raw=true",
        description:"App designed to aid the user in searching for books using the Google books API and then allowing the user to save the books to a MongoDB database for viewing or purchasing later, links to purchase through Google Books are on every book result. ",
        deploy:"https://react-app-google-books-13.herokuapp.com/",
        github:"https://github.com/Bwaller1331/Google-React-Books",
        tech:[
            "MongoDB",
            "Express",
            "React",
            "NodeJs",
            "Axios",
            "Google Books API",
            "Bootstrap",
            "React-Router",
            "Mongoose"
        ]
    },
    {
        id: 2,
        name: "Tech Blog",
        imgURL:"https://github.com/Bwaller1331/Tech-Blog/blob/main/img/tech_blog_screenshot.png?raw=true",
        description:"A blog app that allows users to sign up, login, create and delete posts that are then viewable on the main page of the website, each post has its own page as well",
        deploy:"https://tech-blog-app-brandon.herokuapp.com",
        github:"https://github.com/Bwaller1331/Tech-Blog",
        tech:[
            "MySQL",
            "Express",
            "Express-Handlebars",
            "Express-Sessions",
            "NodeJs",
            "BootStrap",
            "Bcrypt",
            "Sequelize"
        ]
    },
    {
        id: 3,
        name: "User-Directory",
        imgURL:"https://raw.githubusercontent.com/Bwaller1331/User-Directory/master/src/assets/user-directory-screenshot-home.png",
        description:"This app is a User-Directory that is organizing data from the Randomuser.me API. The data is retrieved and then displayed in a table where the user can then search for users by name, or organize them by a variety of options.",
        deploy:"https://user-directory-brandon.herokuapp.com/",
        github:"https://github.com/Bwaller1331/User-Directory",
        tech:[
            "React",
            "NodeJs",
            "Axios",
            "Bootstrap",
            "Randomuser.me API"
        ]
    }

];

export default projects;