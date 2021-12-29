import TAB_NAMES from '../utils/constants';
import appendData from './appendData';

const changeContainerContent = (name) => {
  const CONTAINER = document.querySelector('.main-content');

  switch(name) {
    case TAB_NAMES.NEWS:
      appendData(TAB_NAMES.NEWS, CONTAINER);
      break;
    case TAB_NAMES.FOOTBALL:
      appendData(TAB_NAMES.FOOTBALL, CONTAINER);
      break;
    case TAB_NAMES.TRAVEL:
      appendData(TAB_NAMES.TRAVEL, CONTAINER);
      break;
    default:
      console.log('Haven\'t got such case');
  }
}

export default changeContainerContent;