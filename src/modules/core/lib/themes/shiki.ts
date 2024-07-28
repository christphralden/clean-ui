import { createHighlighter } from 'shiki';

export const cleanUiHighlighter = await createHighlighter({
    langs: ['javascript', 'astro', 'typescript'],
    themes: [
        {
            name: 'clean-ui',
            type: 'light',
            colors: {
                'editor.background': '#ffffff00', // White background for light theme
            },
            tokenColors: [
                {
                    scope: ['comment'],
                    settings: {
                        foreground: '#7a889c', // Muted blue-grey for comments
                        fontStyle: 'italic',
                    },
                },
                {
                    scope: ['keyword', 'storage'],
                    settings: {
                        foreground: '#0000ff', // Primary blue color for keywords
                    },
                },
                {
                    scope: ['variable', 'parameter'],
                    settings: {
                        foreground: '#003366', // Dark blue for variables and parameters
                    },
                },
                {
                    scope: ['string'],
                    settings: {
                        foreground: '#00509e', // Medium blue for strings
                    },
                },
                {
                    scope: ['constant.numeric'],
                    settings: {
                        foreground: '#0073e6', // Light blue for numeric constants
                    },
                },
                {
                    scope: ['entity.name.function', 'entity.name.class'],
                    settings: {
                        foreground: '#0047ab', // Slightly darker blue for function and class names
                    },
                },
                {
                    scope: ['punctuation', 'operator'],
                    settings: {
                        foreground: '#5c7383', // Blue-grey for punctuation and operators
                    },
                },
                {
                    scope: ['tag'],
                    settings: {
                        foreground: '#003399', // Dark blue for tags
                    },
                },
                {
                    scope: ['attribute.name'],
                    settings: {
                        foreground: '#1a73e8', // Bright blue for attribute names
                    },
                },
                {
                    scope: ['attribute.value'],
                    settings: {
                        foreground: '#6699ff', // Light blue for attribute values
                    },
                },
                {
                    scope: ['meta', 'annotation'],
                    settings: {
                        foreground: '#4d5f77', // Muted blue-grey for meta and annotations
                    },
                },
                {
                    scope: ['support.type'],
                    settings: {
                        foreground: '#005cbf', // Medium blue for support types
                    },
                },
                {
                    scope: ['entity.name.type'],
                    settings: {
                        foreground: '#3366cc', // Modern blue for entity types
                    },
                },
                {
                    scope: ['entity.other.inherited-class'],
                    settings: {
                        foreground: '#002e5d', // Dark blue for inherited classes
                    },
                },
            ],
        },
    ],
});