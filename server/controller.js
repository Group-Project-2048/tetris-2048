

module.exports = {

    getPlayers: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_Players().then(dbResult => {
            res.status(200).send(dbResult);
            
        }).catch(err => console.log('11111111', err))
    },
    
}