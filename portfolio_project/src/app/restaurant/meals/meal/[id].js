import React from 'react'
import  classes from 'page.module.css'

const MealDetails = ({ meal }) => {

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <Image src={meal?.image} alt="" width={250} height={250} />
          </div>
          <div className={classes.right}>
            <h2 className={classes.title}>{meal?.title}</h2>
            <span className={classes.category}>
              Category: <span>{meal?.category}</span>
            </span>
            <p className={classes.desc}>
              Meal Description:{" "}
              {meal?.desc?.length > 70
                ? `${meal?.desc.slice(0, 70)}...`
                : meal.desc}
            </p>
            <span className={classes.price}>
              Price: $<span>{meal?.price}</span>
            </span>
            <button
              className={classes.orderButton}
              onClick={""}
            >
              Order Now
            </button>
            <span className={classes.readyIn}>
              Meals are prepared in 30 to 45 minutes...
            </span>
          </div>
        </div>
        {showForm && (
          <div className={classes.contactForm} onClick={""}>
            <div
              className={classes.contactFormWrapper}
              onClick={""}
            >
              <h2>Order Meal</h2>
              <form onSubmit={handleEmail} ref={formRef}>
                <input type="email" placeholder="Your email" name="to_email" onChange={""} />
                <textarea type="text" placeholder="Address..." name="message" onChange={""} />
                <button>Send</button>
              </form>
              <AiOutlineClose onClick={""} className={classes.removeIcon} />
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default MealDetails

export async function getServerSideProps() {
  const { data } = await axios.get(
    `http://localhost:3000/api/restaurant/meals/${id}`
  );

  return {
    props: {
      orders: data,
    },
  };
}


























































































































// first handling of button onclick
// () => setShowForm(true)

// 2nd handling of onClick
// handleCloseForm

// 3rd
// (e) => e.stopPropagation()

// 4th
// handleCloseForm

// 1st onChange
// (e) => setEmail(e.target.value)

// 2nd onChange
// (e) => setMessage(e.target.value)












  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [showForm, setShowForm] = useState(false);
  // const formRef = useRef();

  // const handleCloseForm = () => setShowForm(false);

  // const handleEmail = () => {
  //   e.preventDefault();

  //   // service id,template id, public key
  //   emailjs
  //     .sendForm(
  //       "service_5ljqjdl",
  //       "template_r3xrzr4",
  //       formRef.current,
  //       "4wD2RUQogp4xfM0Vr"
  //     )
  //     .then(
  //       () => {
  //         toast.success(
  //           "Email has been sent succesfully to your email" + email
  //         );
  //         handleCloseForm();
  //       },
  //       (err) => {
  //         toast.error(err.text);
  //       }
  //     );
  // };

