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