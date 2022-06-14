const {TEST_LIST} = require('../common/constants.common')

exports.test = async (req, res, next) => {
    try{
        res.status(200).json({message: TEST_LIST})
    }catch(err){
        res.status(500).json({message: err.message ? err.message : 'Something went wrong!'})
    }
}