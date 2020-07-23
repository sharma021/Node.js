const exec = require('child_process').exec;  
exec('my.bat', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  
