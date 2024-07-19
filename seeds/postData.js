const { Post } = require("../models");

const postData = [

    {
        title: "Growing Zucchini",
        content: "Plant the seeds 1/2 an inch below the surface of a small hills in your garden. They grow best in direct sunlight. The soil needs to be rich in organic matter and well drained. They need at least 1 inch of water a week.  ",
        user_id : 1 
    },
    {
        title: "Brewing Cider",
        content: "After all your equipment is dry from being cleaned and sanitized. Mix 13, 12oz containers of frozen apple juice with 5 gallons of 80-90 degree F water. Then add 5 pounds of sugar and one packet of champagne yeast. Once fermented and bottled this will yield about 25-30 750 ml bottles of 15-18% ABC apple cider/wine",
        user_id : 2 
    },
    {
        title: "Building a Deck",
        content: "First, make sure you get a building permit from the proper authorities. Otherwise this causes delays and possible fines.",
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