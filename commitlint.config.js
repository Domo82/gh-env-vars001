module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
        'subject-case': [1, 'never'],
        'subject-full-stop': [1, 'never', ['.']],
        'subject-empty': [1, 'never'],
        'body-leading-blank': [1, 'never'],
        'body-max-line-length': [1, 'always', 255],
        'header-max-length': [1, 'always', 255],
        'header-trim': [1, 'always'],
        'footer-max-line-length': [1, 'always', 255],
        'footer-leading-blank': [1, 'never'],
    },
};