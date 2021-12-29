import createDataList from './createDataList';
import getData from '../API/getData';

const appendData = (tabName, container) => {
  getData(tabName)
  .then((resp) => {
    const itemsData = resp.results;
    const dataList = createDataList(itemsData);
    container.innerHTML = '';
    container.appendChild(dataList);

  }).catch(e => {
    console.log(e.message)
    container.innerHTML = 'Something went wrong, please try again later...';
  });
}

export default appendData;