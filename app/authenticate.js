

module.exports=function(express, pool, jwt, secret, bcrypt){


    let authRouter = express.Router();

    authRouter.post('/', async function(req,res){

        try {

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM users WHERE username=?', req.body.username);
            conn.release();

            //pri registraciji   let hash = await bcrypt.hash(req.body.credentials.password,10);

            let compare = await bcrypt.compare(req.body.password, rows[0].password);

            if (rows.length>0 && compare){

                const token = jwt.sign({
                    username: rows[0].username,
                    admin: rows[0].admin
                }, secret, {
                    expiresIn:1440
                });

                res.json({ status: 'OK', user:rows[0], token: token });

            } else if (rows.length>0){

                res.json( { status: 'NOT OK', description:'Wrong password'} );

            }


        } catch (e){

            return res.json( { status: 'NOT OK', description: "Username doesn't exist" } );

        }



    });

    authRouter.post('/register', async function(req,res){



        try {

            let hash = await bcrypt.hash(req.body.password, 10)
            let conn = await pool.getConnection();
            let q = await conn.query('INSERT INTO users (username, password, name, email) VALUES ?', [[[req.body.username, hash, req.body.name, req.body.email]]]);
            conn.release();
            res.json({ status: 'OK', insertId:q.insertId });


        } catch (e){

            return res.json({"code" : 100, "status" : "Error with query"});

        }



    });

    return authRouter;

};
