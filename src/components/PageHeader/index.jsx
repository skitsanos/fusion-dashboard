import {Box, Breadcrumb, Divider, Typography} from '@alifd/next';
import styles from './index.module.css';

const PageHeader = props =>
{
    const {
        breadcrumbs,
        title,
        description,
        ...others
    } = props;

    return <Box spacing={8} {...others}>
        {
            breadcrumbs && breadcrumbs.length > 0
            ? <>
                <Breadcrumb className={styles.breadcrumbs}
                            maxNode={3}
                            separator=" / ">
                    {
                        breadcrumbs.map((item, idx) => (
                            <Breadcrumb.Item key={idx}
                                             link={item.path}>{item.name}</Breadcrumb.Item>
                        ))
                    }
                </Breadcrumb>
                <Divider dashed={true}/>
            </>
            : null
        }

        {title && <Typography.Text className={styles.title}>{title}</Typography.Text>}

        {description && <Typography.Text className={styles.description}>{description}</Typography.Text>}
    </Box>;
};

export default PageHeader;