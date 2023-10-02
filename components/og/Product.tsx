/* eslint-disable @next/next/no-img-element */
import type { FC } from 'react';
import styles from '../../styles/Home.module.css'

export type OgProductProps = {
  comments?: string,
  qty: number,
  url: string,
  title: string,
  image: string,
  site: string,
  description: string,
  price: string;
  icon: string;
  origin: string,
}

export const OgProduct: FC<OgProductProps> = ({
  comments,
  qty,
  url,
  title,
  image,
  site,
  description,
  price,
  icon,
  origin
}) => {
    console.log(icon, origin);
    const urlRegex = new RegExp(/^\/\/.*/);
    const iconPath = urlRegex.test(icon) ? icon : `${origin}${icon}`
    return (
      <div className={styles.card}>
        <a href={url} target='_blank' rel="noreferrer">
          <img src={iconPath} alt={title} width={35} height={35}/>
          <h2>{site} - {title}</h2>
          <img src={image} alt={title} width={250} height={250}/>
          <p>{description}</p>
          <h2>Price: {price}</h2>
          <h2>Qty: {qty}</h2>
          {comments && (<h2>Info:</h2>)}
          {comments &&(<p>{comments}</p>)}
        </a>
      </div>
    )

}