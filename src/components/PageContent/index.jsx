import PageHeader from '@/components/PageHeader';
import {Box} from '@alifd/next';

const PageContent = props =>
{
	const {children, title, description, breadcrumbs} = props;
	return <Box>
		<PageHeader title={title}
					description={description}
					breadcrumbs={breadcrumbs}/>
		{children}
	</Box>;
};

export default PageContent;