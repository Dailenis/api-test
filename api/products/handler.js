'use strict';



module.exports = {
    get: async(req, res) => {
        console.log(req)
        return  {message: req.query.test};
    }
}

