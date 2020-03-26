const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        //para validar o loggin será verificado se a ong existe

        const { id } = request.body; //buscando o id atráves do corpo da requisição

        //buscar ong do banco de dados
        const ong = await connection('ongs')
        .where('id', id) //onde o id é igual ao id recebido acima
        .select('name') //informação que retornara para o frontend
        .first(); //como está buscando por id, irá retornar apenas uma ong - o primeiro resultado

        //se a ong não existir
        if(!ong){
            return response.status(400).json({error: 'No ONG found with this ID' }); //retornando uma resposta do status 400 (bad request), mostrar o erro com json

        }
        //se tudo deu certo
        return response.json(ong); //retorna os dados da ong
    }
}