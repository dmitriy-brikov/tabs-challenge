import changeContainerContent from './helpers/changeContainerContent';
import TAB_NAMES from './utils/constants';
import handleTabClick from './handlers/handleTabClick';
import './styles.css';

const main = () => {
  const TABS = document.querySelectorAll('.nav-tab');
  changeContainerContent(TAB_NAMES.NEWS);

  TABS.forEach(tab => tab.addEventListener('click', (e) => handleTabClick(e, TABS)));
}

window.addEventListener('load', main);