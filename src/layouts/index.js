import {apiGet, endpoints} from '@/api';
import Loading from '@/components/Loading';
import ProfileMenu from '@/components/ProfileMenu';
import {identifyLocale, LocalesContext, LocalizedApp} from '@/core/i8n';
import {navGroupRenderer, navItemRenderer, subNavItemRenderer} from '@/core/renderers/navItemRenderer';
import {sidebar} from '@/sidebar';
import {Box, ConfigProvider, Divider, Nav, Search, Shell} from '@alifd/next';
import enUS from '@alifd/next/es/locale/en-us';
import {useRequest, useSafeState} from 'ahooks';
import {useContext, useEffect} from 'react';
import {useHistory} from 'umi';

const layout = props =>
{
	const {children} = props;

	const history = useHistory();
	const [currentPath, setCurrentPath] = useSafeState('/');

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

	const navChange = ([selectedKey], item, extra) =>
	{
		setCurrentPath(selectedKey);
		history.push(selectedKey);
	};

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
							 defaultSelectedKeys={currentPath}
							 onSelect={navChange}>
							{sidebar.map(el =>
							{
								if (el?.type === 'group' && el?.items?.length > 0)
								{
									return navGroupRenderer(el);
								}
								else
								{
									return !el.items
										? navItemRenderer(el)
										: subNavItemRenderer(el);
								}
							})}
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