const connection = require('../database/connection');

module.exports = {
   
   async index(request, response){
//paginação
 const { page = 1 } = request.query;
 
 const [count] = await connection('incidents').count();  //conta quantos casos registrados
 

       const incidents = await connection('incidents')
       .join('ongs','ongs.id', '=', 'incidents.ong_id') //trazer junto dados da tabela de ongs/ comparando id_ong trazer dados da ong relacionada ao incident
       .limit(5) //limitar os dados exibidos pra 5
       .offset((page-1) * 5) //quantidade de itens a se pular, e pegar os proximos 5 BUSCAR na barra como http://localhost:3333/incidents?page=1
       .select([
            'incidents.*', 
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp', 
            'ongs.city',
            'ongs.uf'
        ]);
   
       response.header('X-Total-Count', count['count(*)']); //mostrar quantos casos tem

       return response.json(incidents);
   },
   
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request .headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params; //pegar o id que vem do request parms
        const ong_id = request.headers.authorization; //buscar o id da ong logada através do header

        const incident = await connection('incidents') //buscando por um incidente especifico onde o id for igual o id acima
        .where('id', id)
        .select('ong_id') //selecionar apenas essa coluna
        .first(); //vai retornar apenas um resultado

        //se o ong_id do incidente buscado for diferente do ong id logado na app
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.'}); //.json pq quer enviar uma resposta nesse formato
        }

        //se deu tudo certo vai ser deletado
        await connection('incidents').where('id', id).delete(); //na tabela incidentes onde o id que vai de cima

        return response.status(204).send(); //quando vai retornar uma resposta pro frontend que não tem conteudo o status pode ser o 204
    }
}