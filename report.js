const newman = require('newman');
// require('dotenv').config();

newman.run({
    // collection:`api key with dynamic secret key`
    collection:require('./Collection/teachercollection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', //if not specified the file will be written to  'newman/'
        }
    }
}, function(err){
    if(err){ throw err;}
    console.log('collection run complete!');
})