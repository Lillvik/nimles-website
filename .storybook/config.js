import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import theme from '../src/theme';


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);

const themes = [theme];
addDecorator(withThemesProvider(themes));
