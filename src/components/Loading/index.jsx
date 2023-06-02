import React from 'react';

export default props =>
{
    const {
        isLoading,
        children/*, timedOut, error, retry*/
    } = props;

    return <>
        {isLoading && <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
                <div>
                    <img src={'/loading.svg'}/>
                    <div style={{
                        textAlign: 'center'
                    }}>{children}</div>
                </div>
            </div>
        </div>}
    </>;
};