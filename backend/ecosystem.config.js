export default {
  apps: [
    {
      name: 'ampri-backend',
      script: './main.js',
      cwd: '/home/deployuser/project/backend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 4001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4001
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      error_file: '/home/deployuser/project/backend/logs/error.log',
      out_file: '/home/deployuser/project/backend/logs/out.log'
    }
  ]
};

