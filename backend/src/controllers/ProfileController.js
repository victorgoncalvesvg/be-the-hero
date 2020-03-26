const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization; //acessando os dados da ong q está logada

        //buscar os incidentes
        const incidents = await connection('incidents')
        .where('ong_id', ong_id) //que a ong criou
        .select('*');

        return response.json(incidents); 
    }
}