/* eslint-disable no-undef */
/*
 * Socket集成
 * @Author: Jiang
 * @Date: 2019-08-27 18:00:15
 * @Last Modified by: Jiang
 * @Last Modified time: 2021-02-20 10:49:47
 */

// import io from 'socket.io-client';

let SOCKET: any = '';

// 服务器断开链接
const serverDisconnect = () => {
    if (!SOCKET) {
        return;
    }
    SOCKET.on('disconnect');
};

// 断开链接
const disconnect = () => {
    if (!SOCKET) {
        return;
    }
    SOCKET.disconnect();
};

const offConnect = () => {
    if (!SOCKET) {
        return;
    }
    SOCKET.off('connect');
};

const onConnect = () => {
    if (!SOCKET) {
        return;
    }
    SOCKET.on('connect', () => {});
};

// 移出所有监听
const removeAllListeners = () => {
    if (!SOCKET) {
        return;
    }
    SOCKET.removeAllListeners();
};

// 关闭socket
const close = () => {
    offConnect();
    disconnect();
    removeAllListeners();
};

export { disconnect, serverDisconnect, offConnect, onConnect, removeAllListeners, close };
