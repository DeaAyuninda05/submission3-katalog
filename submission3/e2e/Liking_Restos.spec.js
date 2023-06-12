const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async({ I }) => {
    I.amOnPage('/#/resto');
    I.waitForElement('.resto-item__content a', 10);
    I.seeElement(".resto-item__content a");

    const firstRestaurant = locate(".resto-item__content a").first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.resto-item__content');
    const likedRestaurantName = await I.grabTextFrom('.resto-item__content');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// Scenario('unliking one favorite restaurant', async({ I }) => {
//     I.amOnPage('/');

//     // I.seeElement('.content-item-title a');
//     I.waitForElement(".content-item a", 10);
//     I.click(locate(".resto-item__content a").first());

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/favorite');
//     I.seeElement(".resto-item__content a");

//     I.click(locate(".resto-item__content a").first());
//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     I.amOnPage('/#/favorite');
//     I.dontSeeElement('.content-item');
//     I.dontSeeElement(".resto-item__content a");
// });
