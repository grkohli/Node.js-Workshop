//Output a prompt

const pwdFunc = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //remove newline

    if(cmd === "pwd"){
        pwdFunc();
    }else if (cmd ==="ls"){
        ls();//don't really need to assign to a  valuable.just need to call the func()
    } else if(cmd.substring(0, 3) === 'cat') {
        let fileName = cmd.substring(3, cmd.length);
        cat(fileName.trim());
   } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});


