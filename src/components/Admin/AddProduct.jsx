import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {  Navigate } from 'react-router-dom'
import { collection, documentId, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import Swal from "sweetalert2";

const schema = Yup.object().shape({
    name: Yup.string()
                .required("This field is required")
                .min(3, "The name is too short")
                .max(100, "The name is too long"),
    code: Yup.string()
                .required("This field is required"),               
    description: Yup.string()
                .required("This field is required")
                .min(3, "The description is too short")
                .max(1000, "The description is too long"),
    brand: Yup.string()
                .min(2, "The brand is too short")
                .max(50, "The brand is too long"),
    price: Yup.number()
                .required("This field is required"),               
    img: Yup.string()
                .required("This field is required"),
    category: Yup.string()
                .required("This field is required"), 
    stock: Yup.number()
                .required("This field is required")
            
}) 


const AddProduct = () => {
    const { isAdmin, user } = useContext(AuthContext)

    const [productId, setProductId] = useState(null)

    const AddP = async (values) => {
        const productosRef = collection(db, "products")

        await addDoc(productosRef, values)
        .then((doc) => {
            setProductId(doc.id)
            document.getElementById("myForm").reset();
        })
    }
        
    if (user.logged && isAdmin) { 

        if (productId) {
            Swal.fire({
                title: `A New Product was succesfully added  with ID ${productId}`,
                icon: "success",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }

    return (
        <div className="container mt-20">
            <h2>Add New Product</h2>
            <hr/>
            <div className="b-background">
                <div className="my-form">

            <Formik
                initialValues={{
                    name: '',
                    code: '',
                    description: '',
                    brand: '',
                    price: '',
                    img: '',
                    category: '',
                    stock: '',
                    power: '',
                    tone: ''
                }}
                onSubmit={AddP}
                validationSchema={schema}
            >
                {({values, errors, handleChange, handleSubmit}) => (
                    <Form id="myForm">
                        <Field type="text" name="name" placeholder="Product Name"/>
                        <ErrorMessage name="name" component={"p"}/>
                        <Field type="text" name="code" placeholder="Product Code"/>
                        <ErrorMessage name="code" component={"p"}/>
                        <Field type="text" name="description" placeholder="Product Description"/>
                        <ErrorMessage name="description" component={"p"}/>
                        <Field type="text" name="brand" placeholder="Brand"/>
                        <ErrorMessage name="brand" component={"p"}/>
                        <Field type="number" name="price" placeholder="Price"/>
                        <ErrorMessage name="price" component={"p"}/>
                        <Field type="text" name="img" placeholder="URL Image"/>
                        <ErrorMessage name="img" component={"p"}/>
                        <Field type="text" name="category" placeholder="Category"/>
                        <ErrorMessage name="category" component={"p"}/>
                        <Field type="number" name="stock" placeholder="Stock"/>
                        <ErrorMessage name="stock" component={"p"}/>
                        <Field type="text" name="power" placeholder="Power"/>
                        <ErrorMessage name="power" component={"p"}/>
                        <Field type="text" name="tone" placeholder="Tone"/>
                        <ErrorMessage name="tone" component={"p"}/>
                        <button className="btn btn-primary" type="submit">Insert</button>
                    </Form>
                )}

            </Formik>   
            </div> 
            </div>         
        </div>
    )

    } else {
        return <Navigate to="/"/>
    }
}

export default AddProduct

