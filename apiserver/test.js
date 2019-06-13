const bcrypt = require('bcrypt');
let isOk = bcrypt.compareSync('4567','$2b$10$udjcVaUZdiENaLMwOMjnCuJ42wP/SPn4uO2tWETh.2aBCBR55M0ee');
console.log(isOk);