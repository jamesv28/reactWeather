function getTempPromis(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(88);
            reject("City not found"); 
        },1000);
       
    });
}

getTempPromis("philadelphia").then(function (temp) {
    console.log("success", temp);
},function (err) {
    console.log("failure",err);
    }
);