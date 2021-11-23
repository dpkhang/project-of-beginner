class Home{
    showListOfFish(req, res) {
        const list_fish = [{
                id: 1,
                name: "Bảy màu",
                quantity: 10,
                price: 1000000,
                description: "this is beutiful",
                image: "",
            },
            {
                id: 2,
                name: "Bảy màu",
                quantity: 20,
                price: 2000000,
                description: "this is beutiful",
                image: "",
            },
            {
                id: 3,
                name: "Bảy màu",
                quantity: 30,
                price: 3000000,
                description: "this is beutiful",
                image: "",
            },
            {
                id: 4,
                name: "Bảy màu",
                quantity: 40,
                price: 4000000,
                description: "this is beutiful",
                image: "",
            },
            {
                id: 4,
                name: "Bảy màu",
                quantity: 40,
                price: 4000000,
                description: "this is beutiful",
                image: "",
            },
        ];
        res.render("pages/home", {
            //array:name
            manage_fish: list_fish
        });
    }
}
module.exports = new Home();