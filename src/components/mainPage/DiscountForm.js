import React , { useState } from 'react'
import discount_img from "./discount_img.png"
import styles from './DiscountForm.module.css';


function DiscountForm() {

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value  } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted with data:", formData);

        setFormData({
            name:"",
            phoneNumber:"",
            email:""
        });
    };




  return (
    <div>
        <div className= {styles['discount-container']}>

        <div className={styles['discount-text']}>
            <p>5% off on the first order</p>
        </div>

        <div className={styles['discount-form-image']}>
        
            <img src={discount_img} alt={"Discount image"} className='discount-img'/>
        
         </div>
      
        <div className={styles['discount-form']}>
       
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type='text' 
                        id='name' 
                        name="name"
                        placeholder='Name' 
                        value={formData.name}
                        onChange={handleChange}/>
                </div>
                <div>
                    <input 
                        type='tel' 
                        id='phoneNumber' 
                        name="phoneNumber"
                        placeholder='Phone number' 
                        value={formData.phoneNumber}
                        onChange={handleChange}/>
                </div>
                <div>
                    <input 
                        type='email' 
                        id='email' 
                        name="email"
                        placeholder='Email' 
                        value={formData.email}
                        onChange={handleChange}/>
                </div>
                <button type='submit'> Get a Discount</button>
            </form>

        </div>

        </div>
     
    </div>
  )
}

export default DiscountForm;
