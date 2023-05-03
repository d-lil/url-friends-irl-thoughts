const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Hacking the Mainframe...');
    await Thought.deleteMany({});
    await User.deleteMany({});
   
    const users = [
            { username: 'JimJones666', email: 'cultleader@ded.com' },
            { username: 'SlimThick420', email: 'jigglestick@moneymaker.com' },
            { username: 'QtPie', email: 'bigeyes@sokawaii.com' },
            { username: 'LeonKennedy', email: 'mrofficer@raccooncitypd.com' },
            { username: 'Jennifer69Lawrence', email: 'her@jlaw.com' },
            { username: 'CloudStrife7', email: 'finalfantasy@seven.com' },
        ];
    await User.collection.insertMany(users);
    console.table(users);
    console.info('Users planted');

    const thoughts = [
            { thoughtText: 'I love Kool-Aid', username: 'JimJones666' },
            { thoughtText: 'Wiggle-wittit, wiggle-wittit, wiggle-wittit', username: 'SlimThick420' },
            { thoughtText: 'I look good in everything!!! (✿◠‿◠)', username: 'QtPie' },
            { thoughtText: 'Where is everyone going? Bingo?', username: 'LeonKennedy' },
            { thoughtText: 'I volunteer as tribute!', username: 'Jennifer69Lawrence' },
            { thoughtText: 'You owe me a pizza', username: 'CloudStrife7' },
        ];
    await Thought.collection.insertMany(thoughts);
    console.table(thoughts);
    console.info('Thoughts planted');

    process.exit(0);
});