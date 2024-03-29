const homeController = function () {

    const getHome = async function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const userName = JSON.parse(storage.getData('userInfo')).userName;
            context.loggedIn = loggedIn;
            context.userName = userName;
            try {
                let response = await eventModel.getAllEvents();
                context.events = await response.json();
            } catch (e) {
                console.log(e);
            }
        };

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            eventView: '../views/event/eventView.hbs'
        }).then(function () {
            this.partial('../views/home/homePage.hbs')
        })
    };

    return {
        getHome
    }
}();