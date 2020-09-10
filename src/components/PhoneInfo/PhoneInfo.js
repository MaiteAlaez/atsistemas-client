import React, { useState, useEffect } from 'react'
import axios from 'axios'
import delayAdapterEnhancer from 'axios-delay'
import ClipLoader from 'react-spinners/ClipLoader'

import { API_URL } from 'config'
import styles from './PhoneInfo.module.scss'

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter)
})

const PhoneInfo = (props) => {
    const { match } = props
    const [phone, setPhone] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect( () => {
        setLoading(true)

        api.get(`${API_URL}phones/${match.params.id}`, { delay: 500 })
            .then(res => setPhone(res.data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    return (
        <div className={styles.component}>
            <ClipLoader size={50} color='#333' loading={loading} />
            {error && (<div>Whoops, something went wrong, please try again later.</div>)}
            {phone && (
                <>
                    <div className={styles.base}>
                        <img className={styles.image} src={`${API_URL}images/${phone.imageFileName}`} />
                        <div className={styles.name}>{phone.name} - {phone.manufacturer}</div>
                    </div>
                    <div className={styles.info}>
                        <div><b>Description:</b> {phone.description}</div>
                        <div><b>Color:</b> {phone.color}</div>
                        <div><b>Price:</b> {phone.price} €</div>
                        <div><b>Processor:</b> {phone.processor}</div>
                        <div><b>Ram:</b> {phone.ram}</div>
                        <div><b>Screen:</b> {phone.screen}</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default PhoneInfo
