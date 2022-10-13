import PageContent from '@/components/PageContent';
import {Box, Card} from '@alifd/next';
import chance from 'chance';

const generateProfile = function* ()
{
    yield {
        name: chance().name(),
        avatar: chance().avatar(),
        memo: chance().paragraph({sentences: 1})
    };
};

const Page = () =>
{
    const {avatar, name, memo} = generateProfile().next().value;

    return <PageContent title={'My profile'}
                        breadcrumbs={[
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

        <Box direction={'row'}>
            <Card free={true}>
                <Card.Media image={avatar}/>

                <Card.Header title={name}/>

                <Card.Content>
                    {memo}
                </Card.Content>
            </Card>
        </Box>

    </PageContent>;
};

export default Page;