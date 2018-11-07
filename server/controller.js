

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
        // console.log(session)
        
        //The session id and username have been hardcoded to make sure that there is always something in session for development purposes.
        
        db.get_user([session.user.id, session.user.username ]).then(dbResult => {

            session.user.id = dbResult[0].id;
            session.user.username = dbResult[0].name;
            res.status(200).send(dbResult);

        }).catch(err => console.log(err))

    },

    getHighestScore: (req, res, next) => {
        let {session} = req;
        const db = req.app.get('db');
        console.log(session.user.id)

        db.get_highest_score([session.user.id]).then(dbResult => {

            res.status(200).send(dbResult);
        }).catch(err => (console.log(err)))
    },

    sendScoreOnLose: (req, res) => {
        let {id} = req.session.user;
        let {body} = req.body;
        const db = req.app.get('db');
        console.log('req.session.user.id', id)
        console.log('req.body', body)

        db.send_score([id, body])
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => (console.log(err)))
    },

    deleteUser: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.session.user;
        console.log(id)

        db.delete_user([id]).then(user => res.status(200).send(user)).catch(err => console.log(err))
    }
    
}