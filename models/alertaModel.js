var pool = require("./connection");

module.exports.getAlertas = async function () {
    try {
        let sql = "Select * from alerta";
        let result = await pool.query(sql);
        let alertas = result.rows;
        return {
            status: 200,
            result: alertas
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.getAlertaById = async function (id) {
    try {
        let sql = "Select * from alerta where alerta_id = $1";
        let result = await pool.query(sql, [id]);
        let alerta = result.rows[0];
        return {
            status: 200,
            result: alerta
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}


module.exports.saveAlerta = async function (alerta) {
    try {
        let sql = "insert into alerta(alerta_nome, alerta_descricao, alerta_localizacao_lat, alerta_localizacao_lng, alerta_pessoa_id, alerta_ta_id) values ($1,$2,$3,$4,$5,$6)";
        let result = await pool.query(sql, [alerta.alerta_nome, alerta.alerta_descricao, alerta.alerta_localizacao_lat, alerta.alerta_localizacao_lng, alerta.alerta_pessoa_id, alerta.alerta_ta_id]);
        return {
            status: 200,
            result: result
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}


module.exports.saveAlertaPsa = async function (alerta) {
    try {
        let sql1 = "select max(alerta_id) from alerta";
        let result1 = await pool.query(sql1, []);
        let sql2 = "select max(psa_alerta_alerta_id) from psa_alerta";
        let result2 = await pool.query(sql2, []);
        let alertaId = result1.rows[0];
        let ultimoId = result2.rows[0];
        console.log(alertaId.max);
        while (alertaId.max == ultimoId.max) {
            console.log(alertaId.max);
            console.log(ultimoId.max);
            let sql3 = "select max(alerta_id) from alerta";
            let result3 = await pool.query(sql3, []);
            alertaId = result3.rows[0];
            
        }
        
            let sql = "insert into psa_alerta(psa_alerta_alerta_id,psa_alerta_psa_id) values ($1,$2)";
            let result = await pool.query(sql, [alertaId.max, alerta.caracteristicas_alerta_psa_id]);
            return {
                status: 200,
                result: result
            }
        
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}

module.exports.getTipoAlerta = async function () {
    try {
        let sql = "Select * from tipo_alerta";
        let result = await pool.query(sql, []);
        let alerta = result.rows;
        return {
            status: 200,
            result: alerta
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            result: err
        };
    }
}