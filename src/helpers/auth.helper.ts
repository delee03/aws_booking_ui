import { ACCESS_TOKEN, DEVICE_ID, REFRESH_TOKEN } from "@/configs/constants/common.constants";

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
 }
 export function setAccessToken(accesstoken: string) {
    localStorage.setItem(ACCESS_TOKEN, accesstoken);
 }
 
 export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
 }
 export function setRefreshToken(Refreshtoken: string) {
    localStorage.setItem(REFRESH_TOKEN, Refreshtoken);
 }

 export function setDeviceId(deviceId: string) {
    localStorage.setItem(DEVICE_ID, deviceId);
 }
 export function getDeviceId() {
    return localStorage.getItem(DEVICE_ID);
 }
 
 export function logOut() {
    // localStorage.clear();
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
 
    // const dispatch = store.dispatch;
    // dispatch(RESET_USER());
    // dispatch(UPDATE_IS_LOGIN());
 
    // rootRouter.navigate(ROUTER.LOGIN);
 }