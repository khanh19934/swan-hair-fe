import React, {useEffect, useState} from 'react'
import {pathOr} from "ramda"

import {getBanner} from '../../services/Common.service'
import {getImageUrl} from "../../utils/common.util"
import Button from "../../components/GenericButton/GennericButton.component"
import {ReactComponent as DownArrow} from "../../assets/icons/down-arrow.svg"

interface IBanner {
    id: number
    data: {
        url: string
    }
}

const Banner: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<IBanner | any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBanner()
            setData(res)
            setLoading(false)
        }

        fetchData()

    }, [])

    return loading ? <p>Loading</p> : (
        <div className="image__container">
            <img className="image__banner" src={getImageUrl(pathOr("",[ 0, 'data', 0, 'url'])(data))} alt=""/>
            <div className="image__overlay">
                <div className="image__caption">
                    <h1 className="mb-4">Swain Hair Salon</h1>
                    <Button title="Dịch vụ của chúng tôi" buttonClassName="banner-button" titleClassName="banner-button__text"/>
                </div>
                <div className="see-more">
                    <p className="see-more__text">Xem Thêm</p>
                    <DownArrow className="see-more__icon"/>

                </div>
            </div>
        </div>
    )
}

export default Banner