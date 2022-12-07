import dynamic from "next/dynamic";
import BannerOne from "@/components/BannerOne/BannerOne";
import BlogOne from "@/components/BlogOne/BlogOne";
const BrandOneWithNoSSR = dynamic(
  () => import("@/components/BrandOne/BrandOne"),
  { ssr: false }
);
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaAbout from "@/components/CtaAbout/CtaAbout";
import CtaThree from "@/components/CtaThree/CtaThree";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";




  
const Home = () => 

  {
    const {
      register,
      handleSubmit,
      formState: { isSubmitting },
    } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    function onSubmit(data) {
      axios
        .post("https://eockr1qt61dbxzp.m.pipedream.net", data)
        .then((response) => {
          setSuccessMessage(
            `Thanks for signing up! Check your inbox for updates 😊`
          );
        })
        .catch((e) => console.error(e));
    }
   
  
   
  
   

  return (
    <Layout pageTitle="Software for Magazine Publishers . Magazinecrm">
     <BannerOne/>
     <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Join our newsletter!</h4>

      <input {...register("email")} defaultValue="me@gmail.com"></input>
    
     
     

      <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
    
     <CtaAbout isScrollActive />     
<ServiceOne /> 



     <CtaThree />
    
      <PricingOne />
 
      <div >
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>
     <h2 >.</h2>


      </div>
      <div className="container">
     <h2 >Integration Email, Cloud!</h2>

     <style jsx>{`
        .container {
          margin: 100px;
        }
        p {
          color: green;
        }
        h1 {
          color: green;
        }
      `}</style>
      </div>
      
      <BrandOneWithNoSSR />
    
      <BlogOne totalBlogs={1} isScrollActive />
   
      <CtaOne isScrollActive />
      
    </Layout>

  );
};

export default Home;
