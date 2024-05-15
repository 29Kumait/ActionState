module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    settings: {react: {version: '18.2'}},
    plugins: ['react-refresh', '@stylexjs', '@typescript-eslint'], // Add '@typescript-eslint'
    rules: {
        "@stylexjs/valid-styles": "error",
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
    },
    overrides: [
        {
            files: ['**/*.jsx'],
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
            parser: '@typescript-eslint/parser',
        },
    ],
}