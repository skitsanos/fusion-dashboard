import Link from '@/components/Link';
import {Avatar, Box, Menu, Overlay} from '@alifd/next';

const ProfileMenu = props =>
{
    const {
        name,
        backgroundColor = '#333'
    } = props;

    return <Overlay.Popup v2={true}
                          triggerType={'click'}
                          trigger={
                              <Box direction={'row'}
                                   style={{
                                       cursor: 'pointer'
                                   }}
                                   align={'center'}>
                                  <Avatar icon={'account'}
                                          size={'small'}
                                          shape={'square'}
                                          style={{
                                              ...backgroundColor && {backgroundColor}
                                          }}/>
                                  <span className={'ml'}>{name}</span>
                              </Box>
                          }>
        <Menu>
            <Menu.Item><Link to={'/profile'}
                             icon={'detail'}>Profile ...</Link></Menu.Item>
            <Menu.Divider key={'devider'}/>
            <Menu.Item><Link to={'/logout'}
                             icon={'lock'}>Logout</Link></Menu.Item>
        </Menu>
    </Overlay.Popup>;
};

export default ProfileMenu;