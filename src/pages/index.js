import PageHeader from '@/components/PageHeader';
import {Button} from '@alifd/next';

const page = () =>
{
	return <div>
		<PageHeader title={'Welcome'}
					description={'You are logged as demo'}
					breadcrumbs={[
						{
							name: 'Home'
						},
						{
							path: '/dashboard',
							name: 'Dashboard'
						}
					]}/>

		<Button type={'primary'}>Ok</Button>
	</div>;
};

export default page;