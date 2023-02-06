import {atom} from "jotai";
import Pop_up_box from "../components/pop_up_box";

//选择角色弹出框
const  Select_RoleList = atom(false)
//登陆状态
const  Select_LoginState = atom(false)
//加载状态
const LoadingState = atom(false)
//战斗弹出框
const BattleResultState = atom(false)
//交易弹出框
const SellPop_up_boxState = atom(false)
//交易是否成功
const SellState = atom(false)
//战斗是否成功
const BattleResultDetail = atom(
    {
        state:false,
    })
//更新角色信息
const RoleDetails = atom({name:"",hp:"",ex:"",lv:"",weapons:""})
//更新怪物信息
const MonsterDetails = atom([{
    title:"",
    detail: {
        lv:"",
        power: "",
        hp:"",
        ex:"",
    }
}])



export {SellState,SellPop_up_boxState,Select_RoleList,Select_LoginState,RoleDetails,MonsterDetails,LoadingState,BattleResultState,BattleResultDetail}
