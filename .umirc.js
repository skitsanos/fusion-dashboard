import {defineConfig} from 'umi';

export default defineConfig({
	title: 'Fusion.Design demo',

	metas: [
		{
			name: 'keywords',
			content: 'umi, umijs, antd, fusiondesign, fusion.design, skitsanos'
		},
		{
			name: 'description',
			content: 'Fusion.Design Sample application'
		},
		{
			name: 'author',
			content: 'Skitsanos, https://skitsanos.com'
		}
	],

	nodeModulesTransform: {type: 'none'},

	fastRefresh: {},
	mfsu: {},
	//devtool: false,

	ignoreMomentLocale: true,

	dynamicImport: {
		loading: '@/components/Loading'
	}
});