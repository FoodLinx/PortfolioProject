import React, { useEffect, useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import classes from './addMeal.module.css';
import axios from 'axios';

const AddMeal = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("pizza")
  const [price, setPrice] = useState(50)
  const [photo, setPhoto] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault

    const status = await getServerSideProps()
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2>Add Meal</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Desc..." onChange={(e) => setDesc(e.target.value)} />
            <select onChange={(e) => setCategory(e.target.value)}>
              <option disabled>Select Category</option>
              <option value="pizza">Breakfast</option>
              <option value="burger">Burger</option>
              <option value="gyros">Pizza</option>
              <option value="spaghetti">Beef</option>
              <option value="bread">Chicken</option>
              <option value="seafood">Seafood</option>
            </select>
            <input type="number" placeholder="Price..." onChange={(e) => setPrice(e.target.value)} />
            <div className={classes.imageField}>
              <label htmlFor='image'>
                Photo <AiOutlineFileImage size={25} />
              </label>
              <input id="image" type='file' style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
            </div>
            <button>Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddMeal

// export async function getServerSideProps() {
//   const { data } = await axios.post(
//     "http://localhost:3000/api/restaurant/meal/addmeal",
//     {
//       title,
//       desc,
//       category,
//       price,
//       image: imageUrl
//     }
//   );

//   return {
//     props: {
//       meal: data,
//     },
//   };
// }

// (e) => setTitle(e.target.value)
// (e) => setDesc(e.target.value)
// (e) => setCategory(e.target.value)
// (e) => setPrice(e.target.value)
//  (e) => setPhoto(e.target.files[0])

// const [title, setTitle] = useState("")
  // const [desc, setDesc] = useState("")
  // const [category, setCategory] = useState("pizza")
  // const [price, setPrice] = useState(50)
  // const [photo, setPhoto] = useState("")
  // const router = useRouter()
  // const session = useSession()

  // useEffect(() => {
  //   if (session.status === 'loading') return

  //   if (session.status !== "authenticated") {
  //     signIn()
  //   }
  // }, [session.status])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const storage = getStorage(app)
  //   const filename = crypto.randomUUID() + photo.name
  //   const storageRef = ref(storage, filename)
  //   const uploadFile = uploadBytesResumable(storageRef, photo)

  //   uploadFile.on("state_changed",
  //     (snapshot) => {
  //       switch (snapshot.state) {
  //         case 'paused':
  //           console.log('upload is paused now')
  //           break

  //         case 'running':
  //           console.log('upload is paused now')
  //           break

  //         default:
  //           break
  //       }
  //     },
  //     (error) => {
  //       console.log(error)
  //     },
  //     async () => {
  //       const fileUrl = await getDownloadURL(uploadFile.snapshot.ref)
  //       postMeal(fileUrl)
  //     }
    // )
  // }

  // const postMeal = async (imageUrl) => {
  //   try {
  //     const { data } = await axios.post('http://localhost:3000/api/meal', { title, desc, category, price, image: imageUrl })
  //     router.push(`/meal/${data?._id}`)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }