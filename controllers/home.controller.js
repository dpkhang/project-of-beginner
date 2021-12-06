class Home{
    showListOfFish(req, res) {
        const list_fish = [{
                id: 1,
                name: "Lia thia fish",
                quantity: 10,
                price: 10,
                description: "this is beutiful",
                image: "./image/cavang.png",
            },
            {
                id: 2,
                name: "Lia thia fish",
                quantity: 20,
                price: 20,
                description: "this is beutiful",
                image: "./image/ca2.png",
            },
            {
                id: 3,
                name: "Lia thia fish",
                quantity: 30,
                price: 30,
                description: "this is beutiful",
                image: "./image/ca3.png",
            },
            {
                id: 4,
                name: "Lia thia fish",
                quantity: 40,
                price: 40,
                description: "this is beutiful",
                image: "./image/ca4.png",
            },
            {
                id: 4,
                name: "Lia thia fish",
                quantity: 40,
                price: 40,
                description: "this is beutiful",
                image: "./image/ca1.png",
            },
        ];
        res.render("pages/home", {
            //array:name
            css: 'home.css',
            title: 'Home | Fishes Shop',
            manage_fish: list_fish
        });
        // res.status(200).json ({
        //     list_fish
        // })
    }
}
module.exports = new Home();