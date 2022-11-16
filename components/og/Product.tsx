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
  description: string
}

export const OgProduct: FC<OgProductProps> = ({comments,
  qty,
  url,
  title,
  image,
  site,
  description}) => {
    return (
      <div className={styles.card}>
        <a href={url} target='_blank' rel="noreferrer">
          <h4>{site} - {title}</h4>
          <img src={image} alt={title} width={250} height={250}/>
          <p>{description}</p>
          <h4>Qty: {qty}</h4>
        </a>
      </div>
    )

}