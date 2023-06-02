export const sidebar = [
    {
        key: '/',
        label: 'Dashboard',
        icon: 'dashboard'
    },
    {
        label: 'Operations',
        type: 'group',
        items: [
            {
                key: '/inventory',
                label: 'Inventory',
                icon: 'list'
            },
            {
                key: '/reports',
                label: 'Reports',
                icon: 'chart-pie'
            }
        ]
    },
    {
        label: 'Yours only',
        type: 'group',
        items: [
            {
                key: '/mailbox',
                label: 'Mailbox',
                icon: 'email'
            },
            {
                key: '/settings',
                label: 'Settings',
                icon: 'set',

                items: [
                    {
                        key: '/profile',
                        label: 'Profile',
                        icon: 'account'
                    }
                ]
            }
        ]
    }
];

