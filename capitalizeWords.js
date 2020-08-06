const capitalizeWords = (str) => {
str2 = str.split(" ");
for (let index = 0; index < str2.length; index++) {
    str2[index] = str2[index][0].toUpperCase() + str2[index].substr(1);    
}
return str2.join(' ');
}


module.exports = capitalizeWords;