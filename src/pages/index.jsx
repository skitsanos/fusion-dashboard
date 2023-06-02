import PageHeader from '@/components/PageHeader';
import {LocalesContext} from '@/core/i8n';
import {Button} from '@alifd/next';
import {useContext} from 'react';

const Page = () =>
{
    const {label/*, locale, setLocale*/} = useContext(LocalesContext);

    return <>
        <PageHeader title={label('welcome')}
                    description={'You are logged as demo'}
                    breadcrumbs={[
                        {
                            name: 'Home'
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard'
                        }
                    ]}/>

        <Button type={'primary'}>Ok</Button>
    </>;
};

export default Page;