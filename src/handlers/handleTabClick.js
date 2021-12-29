import changeContainerContent from "../helpers/changeContainerContent";

const handleTabClick = (event, tabs) => {
  tabs.forEach(tab => tab.classList.remove('active'));
  
  const currentTab = event.currentTarget;
  currentTab.classList.add('active');
  
  const tabName = currentTab.dataset.name;
  changeContainerContent(tabName);
}

export default handleTabClick;