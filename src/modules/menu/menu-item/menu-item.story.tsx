import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from "./menu-item.component";

export default {
    title: 'Menu/Menu Item',
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = () => <MenuItem />;

export const View = Template.bind({});
