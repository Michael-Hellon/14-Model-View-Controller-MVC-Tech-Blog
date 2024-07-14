const { Post } = require("../models");

const postData = [

    {
        title: "Growing Zucchini",
        content: "blah blah blah",
        user_id : 1 
    },
    {
        title: "Brewing Cider",
        content: "Clean everything really well. blah blah blah",
        user_id : 2 
    },
    {
        title: "Building a Deck",
        content: "First, make sure you get a permit blah blah blah",
        user_id: 3
    },
    {
        title: "Nvida's Explosive Growth",
        content: "NVDA's stock price has grown over 3000% in the last 5 years. As of July 8, 2024, NVDA's stock price is $131/share. If this growth continues, that could mean a future stock price of $4314.6/share without another stock split. ",
        user_id : 1 
    },

]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;