const { Post } = require("../models");

const postData = [

    {
        title: "AI",
        content: "With advances in AI and Machine Learning over the last several year, I see AI as a Pandora's Box, but more evil than good.",
        user_id : 1 
    },
    {
        title: "Quantum Computing",
        content: "As quantum computing becomes more advanced, their increased speed will help scientist to peel back the mysteries of the universe.",
        user_id : 2 
    },
    {
        title: "Minecraft Mods",
        content: "What is your favorite Minecraft Mod, or what mod do you wish was available? Mine was the dinosaur mod that allowed you to create, hatch and grow dinosaurs",
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