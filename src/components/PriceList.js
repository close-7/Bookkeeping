import React from 'react'
import { Pinwheel, Edit,Clear } from '@icon-park/react'
import PropTypes from 'prop-types'
const PriceList = ({ items, onDeleteItem, onModifyItem}) => {
    return (
        <ul className="list-group">
            {
                items.map((item) => 
                    <li className="list-group-item justify-content-between align-items-center d-flex"
                        key={item.id}
                    >
                        <span className="col-1">
                            <Pinwheel theme="two-tone" size="30" fill={['#333', '#2F88FF']} />
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type === 'income') ? '+' : '-'}
                            {item.price}元
                        </span>
                        <span className="col-2">{item.date}</span>
                        <div
                            role="button" 
                            className="col-1 btn btn-primary"
                            onClick={(event) => { event.preventDefault();onModifyItem(item)}}
                        >
                            <Edit theme="outline" size="30" fill="#fff" strokeLinejoin="bevel" strokeLinecap="square" />
                        </div>
                        <div
                            className="col-1 btn btn-danger"
                            onClick={(event) => { event.preventDefault();onDeleteItem(item) }}
                        >
                            <Clear theme="outline" size="30" fill="#fff" />
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}

PriceList.defaultProps = { // 先默认调用defaultProps
    onModifyItem: () => { },
    onDeleteItem: () => { },
}; 

export default PriceList