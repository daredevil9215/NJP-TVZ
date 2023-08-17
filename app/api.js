module.exports=function(express,pool, jwt, secret){

    const apiRouter = express.Router();

    apiRouter.get('/', (req, res) => {
        res.json({ message: 'Dobro dosli na nas API!' });
    });

    /* GETOVI */

    apiRouter.route('/posts')
    .get(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM posts');
            conn.release();
            res.json({ status: 'OK', posts:rows});

        } catch (e){
            console.log(e);
            return res.json({"code" : 100, "status" : "Error with query"});

        }

    });

    apiRouter.route('/books')
    .get(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM books');
            conn.release();
            res.json({ status: 'OK', books:rows});

        } catch (e){
            console.log(e);
            return res.json({"code" : 100, "status" : "Error with query"});

        }

    });

    apiRouter.route('/loans')
    .get(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM loans');
            conn.release();
            res.json({ status: 'OK', loans:rows});

        } catch (e){
            console.log(e);
            return res.json({"code" : 100, "status" : "Error with query"});

        }

    });

    apiRouter.route('/locations')
    .get(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let rows = await conn.query('SELECT * FROM locations');
            conn.release();
            res.json({ status: 'OK', locations:rows});

        } catch (e){
            console.log(e);
            return res.json({"code" : 100, "status" : "Error with query"});

        }

    });

    /* MIDDLEWARE */
    apiRouter.use(function(req, res, next){

        const token = req.body.token || req.params.token || req.headers['x-access-token'] || req.query.token

        if (token){

            jwt.verify(token, secret, function (err, decoded){

                if (err){

                    return res.status(403).send({
                        success:false,
                        message:'Wrong token'
                    });

                } else {
                    
                    req.decoded=decoded;
                    next();

                }

            });


        } else {

            return res.status(403).send({
                success:false,
                message:'No token'
            });

        }


    });

    /* POSTS */

    apiRouter.route('/posts').post(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('INSERT INTO posts (userid, comment, image, timestamp) VALUES ?', [[[req.body.userid, req.body.comment, req.body.image, req.body.timestamp]]]);
            conn.release();
            res.json({ status: 'OK', insertId:q.insertId });

        } catch (e){
            console.log(e);
            res.json({ status: 'NOT OK' });
        }
    });

    apiRouter.route('/posts/:id')
    .delete(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('DELETE FROM posts WHERE id = ?', req.params.id);
            conn.release();
            res.json({ status: 'OK', affectedRows :q.affectedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    })
    .patch(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('UPDATE posts SET comment = ?, image = ? WHERE id = ?', [req.body.comment, req.body.image, req.body.id]);
            conn.release();
            res.json({ status: 'OK', changedRows:q.changedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    });

    /* BOOKS */

    apiRouter.route('/books').post(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('INSERT INTO books (name, author, year, genre, available, image) VALUES ?', [[[req.body.name, req.body.author, req.body.year, req.body.genre, req.body.available, req.body.image]]]);
            conn.release();
            res.json({ status: 'OK', insertId:q.insertId });

        } catch (e){
            console.log(e);
            res.json({ status: 'NOT OK' });
        }
    });

    apiRouter.route('/books/:id')
    .delete(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('DELETE FROM books WHERE id = ?', req.params.id);
            conn.release();
            res.json({ status: 'OK', affectedRows :q.affectedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    })
    .patch(async function(req,res){

        try {
            let conn = await pool.getConnection();
            let q = await conn.query('UPDATE books SET name = ?, author = ?, year = ?, genre = ?, available = ?, image = ? WHERE id = ?', [req.body.name, req.body.author, req.body.year, req.body.genre, req.body.available, req.body.image, req.body.id]);
            conn.release();
            res.json({ status: 'OK', changedRows:q.changedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    });

    /* LOANS */

    apiRouter.route('/loans').post(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('INSERT INTO loans (userid, bookid) VALUES ?', [[[req.body.userid, req.body.bookid]]]);
            conn.release();
            res.json({ status: 'OK', insertId:q.insertId });

        } catch (e){
            console.log(e);
            res.json({ status: 'NOT OK' });
        }
    });

    apiRouter.route('/loans/:id')
    .delete(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('DELETE FROM loans WHERE id = ?', req.params.id);
            conn.release();
            res.json({ status: 'OK', affectedRows :q.affectedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    })

    /* LOCATIONS */

    apiRouter.route('/locations').post(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('INSERT INTO locations (name, address, contact, image) VALUES ?', [[[req.body.name, req.body.address, req.body.contact, req.body.image]]]);
            conn.release();
            res.json({ status: 'OK', insertId:q.insertId });

        } catch (e){
            console.log(e);
            res.json({ status: 'NOT OK' });
        }
    });

    apiRouter.route('/locations/:id')
    .delete(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('DELETE FROM locations WHERE id = ?', req.params.id);
            conn.release();
            res.json({ status: 'OK', affectedRows :q.affectedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    })
    .patch(async function(req,res){

        try {

            let conn = await pool.getConnection();
            let q = await conn.query('UPDATE locations SET name = ?, address = ?, contact = ?, image = ? WHERE id = ?', [req.body.name, req.body.address, req.body.contact, req.body.image, req.body.id]);
            conn.release();
            res.json({ status: 'OK', changedRows:q.changedRows });

        } catch (e){
            res.json({ status: 'NOT OK' });
        }

    });

    return apiRouter;


};