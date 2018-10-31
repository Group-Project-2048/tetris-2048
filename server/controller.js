

module.exports = {

    getPlayers: (req, res, next) => {
        const db = req.app.get('db');
        
        db.get_Players().then(dbResult => {
            res.status(200).send(dbResult);
            
        }).catch(err => console.log('11111111', err))
    },

    register: (req, res, next) => {
        // const {id} = req.params;
        
        const db = req.app.get('db');
        let {session} = req;
        const {

            username,
            score,
            time_stamp

        } = req.body

        // if(session.user.username === username)

        db.register_User([username, score, time_stamp]).then(dbResult => {

            db.get_1user([username]).then(dbResult => {

                console.log(dbResult)
                session.user.id = dbResult[0].id;
                session.user.username = dbResult[0].name;
                res.status(200).send(dbResult)
            })

        })
    },

    checkSession: (req, res, next) => {
        let {session} = req;
        const db = req.app.get('db');
        console.log(session)
        
        
        // if(session.user.id === 0){
        //     return
        // }else{
        
        // db.get_user([session.user.id, session.user.username]).then(dbResult => {
            

        //     res.status(200).send(dbResult);

        // }).catch(err => console.log(err))

        // }
    }
    
}