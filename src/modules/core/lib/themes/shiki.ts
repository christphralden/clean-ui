import {createHighlighter} from 'shiki';

export const cleanUiHighlighter = await createHighlighter({
	langs: ['javascript', 'astro', 'typescript'],
	themes: [
		{
			name: 'clean-ui',
			type: 'dark',
			colors: {
				'editor.background': '#00000000', 
			},
			tokenColors: [
				{
					scope: ['comment'],
					settings: {
						foreground: '#6a9955', 
						fontStyle: 'italic',
					},
				},
				{
					scope: ['keyword', 'storage'],
					settings: {
						foreground: '#1b263b', 
					},
				},
				{
					scope: ['variable', 'parameter'],
					settings: {
						foreground: '#1b263b', 
					},
				},
				{
					scope: ['string'],
					settings: {
						foreground: '#415a77', 
					},
				},
				{
					scope: ['constant.numeric'],
					settings: {
						foreground: '#b5cea8', 
					},
				},
				{
					scope: ['entity.name.function', 'entity.name.class'],
					settings: {
						foreground: '#0466c8', 
					},
				},
				{
					scope: ['punctuation', 'operator'],
					settings: {
						foreground: '#adb5bd', 
					},
				},
				{
					scope: ['tag'],
					settings: {
						foreground: '#dcdcaa', 
					},
				},
				{
					scope: ['attribute.name'],
					settings: {
						foreground: '#9cdcfe', 
					},
				},
				{
					scope: ['attribute.value'],
					settings: {
						foreground: '#ce9178', 
					},
				},
				{
					scope: ['meta', 'annotation'],
					settings: {
						foreground: '#d4d4d4',
					},
				},
				{
					scope: ['support.type'],
					settings: {
						foreground: '#0353a4', 
					},
				},
				{
					scope: ['entity.name.type'],
					settings: {
						foreground: '#0353a4', 
					},
				},
				{
					scope: ['entity.other.inherited-class'],
					settings: {
						foreground: '#0353a4', // Turquoise for inherited class names
					},
				},
			],
		},
	],
});

