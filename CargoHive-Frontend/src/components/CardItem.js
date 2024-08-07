import React from 'react';

function CardItem(props) {
    const { src, text, label, path } = props;
    return (
        <li className='cards__item'>
            <a className='cards_item_link' href={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <figure className='cards_item_pic-wrap' data-category={label}>
                    <img src={src} className='cards_item_img' alt='dubai' />
                </figure>
                <div className='cards_item_info'>
                    <h5 className='cards_item_text' style={{ textDecoration: 'none' }}>{text}</h5>
                </div>
            </a>
        </li>
    );
}

export default CardItem;
