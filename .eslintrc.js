module.exports = {
    extends: ['expo'],
    plugins: [],
    rules: {
        'curly': ['error', 'all'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    },
};