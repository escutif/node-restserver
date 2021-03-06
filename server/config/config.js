//Puerto

process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del Token
// ============================
//60 segundos * 60 minutos * 24 horas * 30 dias
//process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30
process.env.CADUCIDAD_TOKEN = '48h';

// ============================
//  SEED de autenticación
// ============================
process.env.SEED = 'este-es-el-seed-desarrollo' || process.env.SEED

// ============================
//  Base de datos
// ============================
let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //   urlDB = 'mongodb+srv://cafe-user:cafe-user24@cluster0-xsnum.mongodb.net/cafe';
}


process.env.URLDB = urlDB;

// ============================
//  Google ClientID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '990697488845-gbcav3nkpf2bi3chsc7meih3ondb2fg2.apps.googleusercontent.com';