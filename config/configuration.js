
// mongodb+srv://KartikJaiswal:<password>@blog.smyeg.mongodb.net/<dbname>?retryWrites=true&w=majority 
// l13yFSWpb2YU1qR5
// KartikJaiswal


module.exports = {
    mongoDbUrl : 'mongodb+srv://KartikJaiswal:l13yFSWpb2YU1qR5@blog.smyeg.mongodb.net/MyBlogkartiks?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        res.locals.user = req.user || null;
        next();
    },


};


// module.exports = {
//     mongoDbUrl : 'mongodb://localhost:27017/KartikBlog',
//     PORT: process.env.PORT || 3000,
//     globalVariables: (req, res, next) => {
//         res.locals.success_message = req.flash('success-message');
//         res.locals.error_message = req.flash('error-message');
//         res.locals.user = req.user || null;
//         next();
//     },


// };
