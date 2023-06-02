import {Nav} from '@alifd/next';

export const navItemRenderer = el => <Nav.Item key={el.key}
                                               icon={el.icon}>{el.label}</Nav.Item>;

export const subNavItemRenderer = el => <Nav.SubNav key={el.key}
                                                    icon={el.icon}
                                                    label={el.label}>
    {el?.items.map(subEl => navItemRenderer(subEl))}
</Nav.SubNav>;

export const navGroupRenderer = group => <Nav.Group key={`group-${group.label}`}
                                                    label={group.label}>
    {group.items.map(el => !el.items
                           ? navItemRenderer(el)
                           : subNavItemRenderer(el))}
</Nav.Group>;