const connection = require('./connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Hacking the Mainframe...');
    await Thought.deleteMany({});
    await User.deleteMany({});
   
    const users = [
            { username: 'Jim Jones', email: 'cultleader@ded.com' },
            { username: 'Slim Thick', email: 'jigglestick@moneymaker.com' },
            { username: 'Qt Pie', email: 'bigeyes@sokawaii.com' },
            { username: 'Leon Kennedy', email: 'mrofficer@raccooncitypd.com' },
            { username: 'Grey Poupon', email: 'yella@mustard.com' },
            { username: 'Jennifer Lawrence', email: 'her@jlaw.com' },
            { username: 'Cloud Strife', email: 'finalfantasy@seven.com' },
        ];
    const thoughts = [
            { thoughtText: 'I love Kool-Aid', username: 'Jim Jones' },
            { thoughtText: 'Wiggle-wittit, wiggle-wittit, wiggle-wittit', username: 'Slim Thick' },
            { thoughtText: 'I look good in everything!!! (✿◠‿◠)', username: 'Qt Pie' },
            { thoughtText: 'Where is everyone going? Bingo?', username: 'Leon Kennedy' },
            { thoughtText: 'Pardon me...', username: 'Grey Poupon' },
            { thoughtText: 'I volunteer as tribute!', username: 'Jennifer Lawrence' },
            { thoughtText: 'You owe me a pizza', username: 'Cloud Strife' },
        ];
    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users)
    console.info('Users planted');
});