import {Box, Icon} from '@alifd/next';
import {Link as UmiLink} from 'umi';

const Link = props =>
{
	const {icon, to = '#', children} = props;
	return <Box direction={'row'}
				align={'center'}>
		<UmiLink to={to}
				 className={'next-btn next-btn-normal next-btn-text'}><Icon type={icon}/><span className={'ml-xxl'}>{children}</span></UmiLink>
	</Box>;
};

export default Link;