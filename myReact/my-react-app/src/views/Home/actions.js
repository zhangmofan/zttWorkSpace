import store from '../../store/index'
import {
  addAction,
  reduceAction,
} from '../../store/actionCreators'
export function action() {
  return {
    increament : ()=>{
      store.dispatch(addAction(1))
    },
  addnumber : (num)=>{
      store.dispatch(addAction(num))
    },
  reducenumber:(num)=>{
      store.dispatch(reduceAction(num))
    }
  }
}
