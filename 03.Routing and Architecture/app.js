const app = Sammy('#sammy-app', function () {
    const handleHome = () => {
        this.swap('<h1>I`m a "home" page</h1>');
    };

    const handleAbout = () => {
        this.swap('<h1>I`m "about" page</h1>');
    };

    const getLogin = () => {
        this.swap(`
       <form method = 'POST' action = '#/login'>
         <label for = 'user-email'>Email:</label>
         <input type = 'email' id = 'user-email' name = 'email'/>

         <label for = 'user-password'>Password:</label>
         <input type = 'password' id = 'user-password' name = 'password'/>

         <button type = 'submit'>Login</button>
         </form>
    `);
    };

    const handleLogin = ({ params }) => {
        const { email, password } = params;

        this.swap(`<div> My email is: ${email}, and my password is: ${password}</div>`);
    };

    this.get('/', handleHome);
    this.get('#/about', handleAbout);
    this.get('#/login', getLogin);
    this.post('#/login', handleLogin);
});

$(() => app.run());