const isValid = require('isvalid')

exports.postValid = async (req, res, next) => {
    try {
        let data = req.body
        data = await isValid(data, {
            'user_id': {
                type: String,
                required: true,
                errors: {
                    type: ' user_id must be a string.',
                    required: ' user_id is required, can not be empty',
                }
            },
            'title': {
                type: String,
                required: true,
                errors: {
                    type: ' title must be a string.',
                    required: ' title is required, can not be empty',
                }
            },
            'text': {
                type: String,
                required: true,
                errors: {
                    type: ' title must be a string.',
                    required: ' title is required, can not be empty',
                }
            },
            'country_id': {
                type: String,
                required: true,
                errors: {
                    type: 'country_id must be a string.',
                    required: 'country_id is required, can not be empty',
                }
            },
            'language_id': {
                type: String,
                required: true,
                errors: {
                    type: 'language_id must be a string.',
                    required: 'language_id required, can not be empty',
                }
            },
            'date': {
                type: Date,
             }
            
        })

        next()
    } catch (e) {
        console.log(e);
        next(e)
    }
}