const createDataList = (items) => {
  const listItems = document.createElement('ol');
  listItems.classList.add('list-items');

  items.forEach((item, index) => {
    if (index > 9) return;

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const ancor = document.createElement('a');
    ancor.setAttribute('target', '_blank');
    ancor.innerHTML = item.webTitle;
    ancor.href = item.webUrl;

    listItem.appendChild(ancor);
    listItems.appendChild(listItem);
  })

  return listItems;
}

export default createDataList;