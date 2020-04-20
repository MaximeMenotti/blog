module.exports = {
  apps : [
    {
      name          : 'lama-backend',
      script        : 'npm',
      interpreter   : 'none',
      args          : 'start',
      env : {
        NODE_ENV: 'production',
      }
    }
  ],
};
