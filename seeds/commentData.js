const { Comment } = require("../models");

const commentData = [

    {
        comment: "AI will bring Skynet!!!",
        user_id: 2,
        post_id: 1
    },
    {
        comment: "Maybe QC will help develop FTL travel and a wormhole based transport system .",
        user_id: 4,
        post_id: 2
    },
    {
        comment: "My favorite is the space mod!!! ",
        user_id: 1,
        post_id: 3
    },
    {
        comment: "Nvidia is bad news.",
        user_id: 5,
        post_id: 4
    },
];

    const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;