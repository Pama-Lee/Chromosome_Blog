import axios from 'axios'

// 创建axios实例
export const http = (baseURL) => {
    return axios.create({
        baseURL: baseURL,
        timeout: 5000
    })
}
