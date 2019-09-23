import axiosApi from "./Api.service"

import {pathOr} from "ramda"

interface IBanner {
    id: number
    data: {
        url: string
    }
}

const getBanner = (): Promise<IBanner[]> => axiosApi.get('/homebanners').then(pathOr([],['data']))

export {getBanner}