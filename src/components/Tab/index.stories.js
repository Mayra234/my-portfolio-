import { Tab } from './index';

export default {
  title: 'Components/Tab',
};

export const Overview = () => {
  return /*html*/ `
    <div>
        ${Tab({ text: 'Estudios' })}
    </div>
    `;
};
