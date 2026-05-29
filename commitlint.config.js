module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'hot-fix', 'chore', 'docs', 'style', 'refactor', 'test', 'revert']
        ],
    },
    helpUrl: 'Commit message must follow the format: type(scope): description\nAllowed examples:\n  - feat(tabs): design custom bar background\n  - fix(auth): resolve login session timeout\n  - hot-fix(api): fix server crash on payload',
};