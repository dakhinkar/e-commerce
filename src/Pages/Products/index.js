import Card from '../../Components/Card';
import React, { useContext } from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';
const Products = () => {
    
    const {productList, loading} = useProduct();

    // console.log(productList);

  return (
    <div className={styles.cardGroup}>
        {
            !loading ? (
                productList?.map((item)=>{
                    return (
                        <Card item={item}/>
                    )
                })
            ) : (<h1>loading......</h1>)
        }
    </div>
  )
}

export default Products