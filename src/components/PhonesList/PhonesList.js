import React, { useState, useEffect } from 'react'
import axios from 'axios'
import delayAdapterEnhancer from 'axios-delay'
import ClipLoader from 'react-spinners/ClipLoader'

import * as Routes from 'constants/Routes'
import { API_URL } from 'config'
import ListItem from 'components/ListItem/ListItem'
import styles from './PhonesList.module.scss'

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter)
})

const PhonesList = (props) => {
    const { history } = props
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handlePhoneOnClick = (phone) => {
        history.push(`${Routes.PHONE}/${phone.id}`)
    }

    useEffect( () => {
        setLoading(true)

        api.get(`${API_URL}phones`, { delay: 500 })
            .then(res => setPhones(res.data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className={styles.component}>
            <ClipLoader size={50} color='#333' loading={loading} />
            {error && (<div>Whoops, something went wrong, please try again later.</div>)}
            {phones.map((phone, i) => (
                <ListItem key={i} onClick={() => handlePhoneOnClick(phone)}>
                    {phone.name}
                </ListItem>
            ))}
        </div>
    )
}

export default PhonesList

