//Output a prompt

const pwdFunc=require('./pwd');
const {ls} = require('./ls')
//const fs=require('fs');
process.stdout.write('prompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //remove newline

    // if(cmd === 'pwd') {
    //     //cmd = __dirname;
    //     //OR can use process.cwd()
    //     cmd = process.cwd();
    // }
    if(cmd==="pwd"){
        cmd=pwdFunc;
    }else if (cmd ==="ls"){
        ls();//don't really need to assign to a  valuable.just need to call the func()
       
    }
    
   process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

});


