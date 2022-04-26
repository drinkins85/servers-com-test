import axios from 'axios';

const url = window.location.pathname;
const rootPath = url.slice(0, url.indexOf('dashboard_front'));

export const ROOT_URL = location.protocol + '//' + location.host + rootPath;

export default (store) => (dispatch) => (action) => {
    const isRequestAction = action.url && action.method;

    if (!isRequestAction) {
        return dispatch(action);
    }

    let headers = {};

    if (action.headers) {
        headers = {
            ...headers,
            ...action.headers,
        };
    }

    dispatch({
        ...action,
        type: action.type + '_START',
    });

    axios({
        method: action.method,
        baseURL: ROOT_URL,
        url: action.url,
        headers: headers,
        data: action.method !== 'get' ? action.query : {},
        params: action.method === 'get' ? action.query : {},
        onUploadProgress: function (progressEvent) {
            dispatch({
                type: action.type + '_PROGRESS',
                progress: progressEvent,
            });
        },
    })
        .then(function (response) {
            dispatch({
                type: action.type + '_SUCCESS',
                data: response.data,
                headers: response.headers,
                prevAction: action,
            });
        })
        .catch(function (error) {
            if (axios.isCancel(error)) {
                dispatch({
                    type: action.type + '_CANCEL',
                    status: error.status,
                });
            } else {
                dispatch({
                    type: action.type + '_FAILED',
                    status: error.status || error.response?.status,
                });
            }
        });
};
