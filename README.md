# fusion-dashboard
Blank layout for dashboards made with Alibaba's Fusion.Design


New features:

- [x] Application loading indicator
- [x] Link Component build around Umi.js Link and adopted for Fusion.Design
- [x] PageHeader component
- [x] PagecContent component (to hold page content)
- [x] ProfileMenu component
- [x] Localisation via `react-intl-universal`


#### Example of using `PageContent` component
```jsx
import PageContent from '@/components/PageContent';

const page = () =>
{
	return <PageContent title={'My profile'} breadcrumbs={[
		{
			path: '/',
			name: 'Home'
		},
		{
			path: '/dashboard',
			name: 'Dashboard'
		},
		{
			name: 'Profile'
		}
	]}>

	</PageContent>;
};

export default page;
```
