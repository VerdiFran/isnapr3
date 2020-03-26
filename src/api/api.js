import * as axios from 'axios'

const instance = axios.create({
    baseURL: ''
})

export const getResult = (min, max, count, a, b, c, sl, ft) => {
    return instance.get(`?min=${min}&max=${max}&count=${count}&a=${a}&b=${b}&c=${c}&sl=${sl}&ft=${ft}`)
}
