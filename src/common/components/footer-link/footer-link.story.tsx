import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterLink from './footer-link.component';

export default {
    title: 'Common/Footer link',
    component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => <FooterLink {...args}/>;

export const View = Template.bind({});

View.args = {
    href: "tel:+374123123123123",
    children: '044 123 45 67'
}
