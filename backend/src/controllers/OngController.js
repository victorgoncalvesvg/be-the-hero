const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
   
   //usar um metodo do crypto para gerar id aleatório, com 4 bytes de caracteres, e depois converter de hexadecimal para string   
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({ //await faz com que só retorne o valor após a inserção dos dados
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })  


    return response.json({ id });

    }

};