import {Avatar, Box} from '@alifd/next';

const ProfileMenu = props =>
{
	const {name, backgroundColor='#333'} = props;
	return <Box direction={'row'}
				align={'center'}>
		<Avatar icon={'account'}
				size={'small'}
				shape={'square'}
				style={{
					...backgroundColor && {backgroundColor}
				}}/>
		<span className={'ml'}>{name}</span>
	</Box>;
};

export default ProfileMenu;