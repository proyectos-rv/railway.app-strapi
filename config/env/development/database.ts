export default ({ env }) => ({
    postgres: {
        connection: {
          host: env('DATABASE_HOST', 'localhost'), // Host del contenedor PostgreSQL
          port: env.int('DATABASE_PORT', 5432),    // Puerto de conexión
          database: env('DATABASE_NAME', 'postgres'), // Nombre de la base de datos
          user: env('DATABASE_USERNAME', 'postgres'), // Usuario de la base de datos
          password: env('DATABASE_PASSWORD', 'pablo1234'), // Contraseña del usuario
          ssl: env.bool('DATABASE_SSL', false),   // Desactiva SSL para una conexión local
          schema: env('DATABASE_SCHEMA', 'public'), // Usa el esquema 'public'
        },
        pool: { 
          min: env.int('DATABASE_POOL_MIN', 2),   // Tamaño mínimo del pool de conexiones
          max: env.int('DATABASE_POOL_MAX', 10)   // Tamaño máximo del pool de conexiones
        },
      },
});