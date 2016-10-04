(function() {
    var gems = [{
        name: "Test1",
        price: 2.95,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        canPurchase: true,
        soldOut: false,
        images: [
            "img/1.jpg",
            "img/2.jpg",
            "img/3.jpg"
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: "Test2",
        price: 4.05,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        canPurchase: true,
        soldOut: true,
        images: [
            "img/4.jpg",
            "img/2.jpg",
            "img/3.jpg"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: "Test3",
        price: 4.05,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        canPurchase: false,
        soldOut: false,
        images: [
            "img/1.jpg",
            "img/4.jpg",
            "img/3.jpg"
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }];

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });


	app.directive('panelTab', function() {
	    return {
	        restrict: 'E',
	        templateUrl: 'html/panel-tab.html',
	        controller: function() {
	             this.tab = 1;

        this.selectedTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
	        },
	        controllerAs: 'panel'
	    };
	});


})();