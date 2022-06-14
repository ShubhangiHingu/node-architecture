const Test = require('../models/test.model')

exports.testList = async () => {
    return await Test.find();
}