/**
 * Created by zzl028 on 2017/3/1.
 */
import * as types from './types.js'
export default {
    increment:({
        commit
    })=>{
        commit(types.INCREMENT);
    }
}