let logger = {
    log: function (level, color) {
        return function write(message, resultant) {
            message = `<span style="color: ${color}"> <p>  [ ${level} ] ${message} </p></span>`;
            document.getElementById(resultant).innerHTML += message;
        }
    }
};

let l1 = logger.log('debug', 'red');
l1('This is my debug message!', 'result'); 
let l2 = logger.log('error', 'orange');
l2('Hello World!', 'result'); 
let l3 = logger.log('myCustomLog', 'green');
l3('This is my custom output log', 'result'); 
let l4 = logger.log('warn', 'purple');
l4('This is a warning message', 'result'); 

