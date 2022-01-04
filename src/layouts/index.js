import ProfileMenu from '@/components/ProfileMenu';
import {Avatar, Box, ConfigProvider, Divider, Nav, Search, Shell} from '@alifd/next';
import enUS from '@alifd/next/es/locale/en-us';

const layout = props =>
{
	const {children} = props;

	return <ConfigProvider locale={enUS}
						   device={'tablet'}
						   defaultPropsConfig={{
							   //Button: {size: 'large'}
						   }}>
		<Shell>
			<Shell.Branding>
				<div>App name</div>
			</Shell.Branding>

			<Shell.Action>
				<Box direction={'row'}
					 align={'center'}>
					<Search shape={'simple'}/>

					<Divider direction={'ver'}/>

					<ProfileMenu name={'demo'} backgroundColor={'#87d068'}/>
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