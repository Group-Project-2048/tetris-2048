

module.exports = {

    getPlayers: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_Players().then(dbResult => {
            res.status(200).send(dbResult);
            
        }).catch(err => console.log('11111111', err))
    },

    register: (req, res, next) => {
        // const {id} = req.params;
        // console.log(req.params)
        const db = req.app.get('db');
        const {

            username,
            score,
            time_stamp

        } = req.body

        console.log(username, score, time_stamp,)

        db.register_User([username, score, time_stamp]).then(dbResult => {
            res.status(200).send(dbResult)
        })
    },
    
}