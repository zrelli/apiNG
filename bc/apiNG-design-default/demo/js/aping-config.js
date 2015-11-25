"use strict";

apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        youtube : "AIzaSyAoZx2uwqnQ7WALp6lOuvWkBM6CfxCEJeA",
        instagram: "3283222.a492704.6c2d53acdc3e47e695dff5c89368597d",
        instagramClientId: "a492704dfef24d9ebcc8c3062a10daaf",
        facebook : "CAAMC6AyvDH0BAChyXyiSXINl6nAZCaOP0nXS1T67ngaZA0svefRAJyWx3Y5bzic47wE4iZAMHCAAoQCvhUMZB3SQufDyio9g4vZAj5BgQXuMVDjVvqDrajfm7IEvN0U1O2JfC1FA2VfqpnYgRa9fF5ZAQBW4vHc6ZAmXryyJvzPQd5TkIdqUC4n",
        twitter: "AAAAAAAAAAAAAAAAAAAAACs3iwAAAAAA%2BH8LdT7YfKIzk8fvQvqKvoePuxo%3DMKfXX2ojtacGL8aOLAhlBDUrEFpy0DUuiyebet22Wa2YVrX7cc",
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_default.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        type: "social",
    });

}]);