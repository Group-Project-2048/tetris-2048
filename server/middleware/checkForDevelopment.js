const imposter = {
    id: 68,
    username: 'SuperUser'
}

module.exports = {
    bypassAuthInDevelop: (req, res, next) => {
        if(!req.session.user && process.env.NODE_ENV === 'development') {
            req.session.user = imposter
        }
        next()
    }
}