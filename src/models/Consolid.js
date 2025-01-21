import {reactive} from "vue";


const empty = {

  name: '',
  orders: [],




  created_at: new Date().toLocaleString(),
}


class Consolid {

  constructor() {
    this.state = reactive(empty)
  }


  // COMPUTED


  // METHODS

  share_consolid() {
    return ""
  }
}


export default Consolid;
