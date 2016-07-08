import {observable} from 'mobx'

class TabStore {
  @observable selected = 'welcome';
}

const tabStore = new TabStore;
export default tabStore;
