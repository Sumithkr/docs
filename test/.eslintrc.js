module.exports = {
    'parser': 'babel-eslint',
    plugins: ['ghost', 'react'],
    extends: [
        'plugin:ghost/test',
        'plugin:react/recommended'
    ],
    "globals": {
        "cy": true
    }
};
