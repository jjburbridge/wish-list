/* eslint-disable react/jsx-key */
import { useForm } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next/types'
import styles from '../../styles/Home.module.css'



export const Create: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => {
    console.log('submit', data);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const submitedData = await fetch(`/api/sanity/users/create`, requestOptions);
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to My Wish List
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <input placeholder="Dave" {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="dasve@email.com" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label>Username</label>
              <input placeholder="daveydave" {...register("_id", { required: true })} />
              {errors._id && <span>This field is required</span>}
            </div>
            <div>
              <label>Password</label>
              <input type="password" {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}
            </div>
            
            <input type="submit" />
          </form>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}


// export const getStaticProps: GetStaticProps<{}, ListParams> = async () => {

//   const sanityClient = getClient();
  
//   const products = await sanityClient.fetch(getAllPRoductsQuery);

//   const productPromieses = Promise.all(products.map(async (product: any) => {
//     const og = await scrape(product.url);
//     const origin = new URL(product.url).origin;
//     return {
//       ...product,
//       ...og,
//       origin
//     }
//   }))

//   const productData = await productPromieses;

//   return {
//     props: {
//       productData
//     }
//   }
// }

export default Create;