//Output a prompt
process.stdout.write('prompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //remove newline

    if(cmd === 'pwd') {
        //cmd = __dirname;
        //OR can use process.cwd()
        cmd = process.cwd();
    }
    
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

});