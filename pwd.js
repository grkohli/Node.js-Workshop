module.exports = () => {
  console.log('You typed:', process.cwd());
  process.stdout.write('\nprompt > ');
};