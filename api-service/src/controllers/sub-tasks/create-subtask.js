const uuid = require('uuid');
const connection = require('../../connection');

module.exports = {
    createSubTask(req, res) {
        connection.query(`INSERT INTO subTask (id, taskId, title) VALUES ($1, $2, $3)`, [uuid.v4(), req.params.taskId, req.body.title], (err, result) => {
            if (!err) {
                return res.send(result.rows);
            } else {
                return res.status(200).send({
                    status: false,
                    message: err.message
                })
            }
        });
    }
}