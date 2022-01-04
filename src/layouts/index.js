import {Avatar, Box, ConfigProvider, Divider, Nav, Search, Shell} from '@alifd/next';
import enUS from '@alifd/next/es/locale/en-us';

const layout = props =>
{
	const {children} = props;

	return <ConfigProvider locale={enUS} device={'tabel'}>
		<Shell>
			<Shell.Branding>
				<div>App name</div>
			</Shell.Branding>

			<Shell.Action>
				<Box direction={'row'}
					 align={'center'}>
					<Search shape={'simple'}/>

					<Divider direction={'ver'}/>

					<Box direction={'row'}
						 align={'center'}>
						<Avatar size={'small'}>ME</Avatar>
						<span className={'ml'}>My name</span>
					</Box>
				</Box>

			</Shell.Action>

			<Shell.Navigation>
				<Nav embeddable={true}>
					<Nav.Item icon={'account'}>Dashboard</Nav.Item>
				</Nav>
			</Shell.Navigation>

			<Shell.Content>
				<div id={'workspace'}>
					{children}
				</div>
			</Shell.Content>

			<Shell.Ancillary>

			</Shell.Ancillary>
		</Shell>
	</ConfigProvider>;
};

export default layout;