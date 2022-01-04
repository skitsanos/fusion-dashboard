import {apiGet, endpoints} from '@/api';
import Loading from '@/components/Loading';
import ProfileMenu from '@/components/ProfileMenu';
import {identifyLocale, loadLocales, LocalesContext, LocalizedApp} from '@/core/i8n';
import {Box, ConfigProvider, Divider, Nav, Search, Shell} from '@alifd/next';
import enUS from '@alifd/next/es/locale/en-us';
import {useRequest, useSafeState} from 'ahooks';
import {useContext, useEffect} from 'react';

const layout = props =>
{
	const {children} = props;

	//Loading language pack
	const {data, loading} = useRequest(() => apiGet(endpoints.local.locales));

	const {setLocale} = useContext(LocalesContext);
	const [languageInstalled, setLanguageInstalled] = useSafeState(false);

	useEffect(async () =>
	{
		if (data)
		{
			window.__LOCALES__ = data;

			await setLocale(identifyLocale());

			setLanguageInstalled(true);
		}
	}, [data]);

	return <ConfigProvider locale={enUS}
						   defaultPropsConfig={{
							   //Button: {size: 'large'}
						   }}>
		<>
			{!languageInstalled && <Loading isLoading={true}>Loading languages...</Loading>}

			{languageInstalled && <LocalizedApp>
				<Shell>
					<Shell.Branding>
						<div>App name</div>
					</Shell.Branding>

					<Shell.Action>
						<Box direction={'row'}
							 align={'center'}>
							<Search shape={'simple'}/>

							<Divider direction={'ver'}/>

							<ProfileMenu name={'demo'}
										 backgroundColor={'#87d068'}/>
						</Box>

					</Shell.Action>

					<Shell.Navigation>
						<Nav embeddable={true}
							 mode={'popup'}>
							<Nav.Item icon={'dashboard'}>Dashboard</Nav.Item>
						</Nav>
					</Shell.Navigation>

					<Shell.Content>
						<div id={'workspace'}>
							{children}
						</div>
					</Shell.Content>

					{/*<Shell.Ancillary>

					 </Shell.Ancillary>*/}
				</Shell>
			</LocalizedApp>}
		</>
	</ConfigProvider>;
};

export default layout;