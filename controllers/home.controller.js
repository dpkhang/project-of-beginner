class Home{
    showListOfFish(req, res) {
        const list_fish = [{
                id: 1,
                name: "Bảy màu",
                quantity: 10,
                price: 1000000,
                description: "this is beutiful",
                image: "./image/cavang.png",
            },
            {
                id: 2,
                name: "Bảy màu",
                quantity: 20,
                price: 2000000,
                description: "this is beutiful",
                image: "./image/ca2.png",
            },
            {
                id: 3,
                name: "Bảy màu",
                quantity: 30,
                price: 3000000,
                description: "this is beutiful",
                image: "./image/ca3.png",
            },
            {
                id: 4,
                name: "Bảy màu",
                quantity: 40,
                price: 4000000,
                description: "this is beutiful",
                image: "./image/ca4.png",
            },
            {
                id: 4,
                name: "Bảy màu",
                quantity: 40,
                price: 4000000,
                description: "this is beutiful",
                image: "./image/ca1.png",
            },
        ];
        res.render("pages/home", {
            //array:name
            manage_fish: list_fish
        });
    }
}
module.exports = new Home();