import checkIfSmallScreen from '@/core/checkIfSmallScreen';
import splitArrayInChunks from '@/core/splitArrayInChunks';
import {Grid, Search, Table} from '@alifd/next';
import {useResponsive} from 'ahooks';

const renderSmallScreenDataBrowser = (rows, renderer) => <>
    {rows.map((row, rowKey) => <Grid.Row key={rowKey}
                                         gutter={16}
                                         style={{marginBottom: '1ch'}}>
        {row.map((column, columnKey) => <Grid.Col key={columnKey}
                                                  span={12}>
            {renderer && renderer(column, columnKey)}
        </Grid.Col>)}
    </Grid.Row>)}
</>;

/**
 *
 * @param {Array} props.columns - Data Columns
 * @param {Array} props.dataSource - Data Source
 * @param {function} props.smallScreenRenderer - Data Source
 * @returns {JSX.Element}
 * @constructor
 */
const DataBrowser = props =>
{
    const {columns, dataSource, searchPrompt = 'type here to search', smallScreenRenderer} = props;

    const responsive = useResponsive();

    return <>
        <Search placeholder={searchPrompt}
                shape={'simple'}/>
        <div style={{marginTop: '16px'}}>
            {!checkIfSmallScreen(responsive) && <Table columns={columns}
                                                       dataSource={dataSource}/>}

            {checkIfSmallScreen(responsive) && renderSmallScreenDataBrowser(splitArrayInChunks(dataSource, 2), smallScreenRenderer)}
        </div>
    </>;
};

export default DataBrowser;