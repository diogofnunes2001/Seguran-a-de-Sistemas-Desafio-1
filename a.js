//imports
var crypto = require('crypto');

//variables
var hash_to_find = "66a9f822e36e48f8aab3cfe952e59d06c2c065e94f6c67dd897576012b1530e5";
//char array to through during the search
var char_array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÇÈÉÊÌÍÒÓÔÕÙÚÛàáâãçèéêìíîòóôõùúû';

//code
//go through all conbinations of characters with 2 for cycles
for (var i = 50; i < char_array.length; i++) {
    for (var j = 0; j < char_array.length; j++) {
        //saving both characters as key
        var key = char_array[i] + char_array[j];
        
        //running trough all possible secrets
        for (var z = 1000; z < 9999; z++) {
            //parsing z to string to became a secret
            var secret = z.toString();
            
            //creating a hash with the key
            var hmac_hash = crypto.createHmac('sha256', key);
            //updating the hash with the secret
            hmac_hash.update(secret);
            //getting the hash
            var hash = hmac_hash.digest('hex');
            
            console.log(key + "," + secret + " " + hash);
            
            //checking if the hash is the one we are looking for
            if (hash == hash_to_find) {
                console.log("--------------------FOUND RESULT--------------------");
                console.log(key + "," + secret + " " + hash);
                console.log("--------------------FOUND RESULT--------------------");
                process.exit();
            }
        }
    }
}

//----------------------TESTE DE HASH FORNECIDA----------------------
var key = 'AA';
var secret = '1000';
var hmac_hash = crypto.createHmac('sha256', key);
hmac_hash.update(secret);
var result = hmac_hash.digest('hex');
console.log("----------------------TESTE DE HASH FORNECIDA----------------------");
console.log(key + "," + secret + " " + result);
console.log("-------------------------------------------------------------------");
//-------------------------------------------------------------------

//----------------------TESTE DE HASH ENCONTRADA----------------------
var key = 'Âî';
var secret = '4964';
var hmac_hash = crypto.createHmac('sha256', key);
hmac_hash.update(secret);
var d = hmac_hash.digest('hex');
console.log("----------------------TESTE DE HASH ENCONTRADA----------------------");
console.log(key + "," + secret + " " + result);
console.log("--------------------------------------------------------------------");
//---------------------------------------------------------------------
