/**
 * Created by boochoo on 09/06/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new Schema({

    // connect this Schema to the main Schema

    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    content : String,
    created : {
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model('Story', StorySchema);