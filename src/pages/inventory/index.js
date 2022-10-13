import DataBrowser from '@/components/DataBrowser';
import PageContent from '@/components/PageContent';
import {Avatar, Box, Button, Card, Divider, Icon} from '@alifd/next';

import Chance from 'chance';

const chance = new Chance('demo');

const columns = [
    {
        dataIndex: 'id',
        title: 'ID'
    },
    {
        dataIndex: 'title',
        title: 'Title'
    },
    {
        dataIndex: 'qnt',
        title: 'QNT'
    },
    {
        dataIndex: 'responsible',
        title: 'Responsible',
        cell: item => <Box direction={'row'}
                           spacing={8}
                           align={'center'}>
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${item.name}.svg`}
                    size={24}/>
            <Box direction={'column'}>
                {item.name}
                <br/>
                <span className={'silent'}>{item.company}</span>
            </Box>
        </Box>
    },
    {
        dataIndex: 'email',
        title: 'Contact'
    },
    {
        title: 'Actions',
        //lock: 'right',
        width: 200,
        cell: () => <Box direction={'row'}
                         spacing={8}>
            <Button text={true}><Icon type={'list'}/>Details..</Button>
            <Button text={true}><Icon type={'edit'}/>Modify</Button>
        </Box>
    }
];

const dataSource = Array.from({length: 20}, () => ({
    id: chance.fbid(),
    title: chance.string({length: 10, alpha: true, numeric: false, symbols: false}),
    qnt: chance.integer({min: 1, max: 999}),
    responsible: {
        name: chance.name(),
        company: chance.company()
    },
    email: chance.email({domain: 'acmecorp.zyx'})
}));

const page = () =>
{
    return <PageContent title={'Inventory'}
                        description={'Assets journal'}>

        <Divider/>

        <DataBrowser columns={columns}
                     dataSource={dataSource}
                     smallScreenRenderer={(item, itemKey) => <Card key={itemKey}
                                                                   free={false}
                                                                   hasBorder={true}>
                         <Card.Header title={item.title}
                                      subTitle={item.id}/>
                         <Card.Content>{columns.find(el => el.dataIndex === 'responsible').cell(item.responsible)}</Card.Content>
                     </Card>}/>
    </PageContent>;
};

export default page;