import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'

const ListItem = (props) => {
    return (
        <div
            className={styles.component}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ListItem
