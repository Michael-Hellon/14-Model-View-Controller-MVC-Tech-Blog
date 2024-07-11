const { Comment } = require("../models");

const commentData = [

    {
        comment: "Comment 1",
        date_created: "April 25, 2024",
        user_id: 1,
        blogPost_id: 1
    },
    {
        comment: "Comment 2",
        date_created: "May 2, 2024",
        user_id: 2,
        blogPost_id: 2
    },
    {
        comment: "Comment 3",
        date_created: "May 15, 2024",
        user_id: 3,
        blogPost_id: 3
    },
    {
        comment: "Comment 4",
        date_created: "July 8, 2024",
        user_id: 1,
        blogPost_id: 4
    },
];

    const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;