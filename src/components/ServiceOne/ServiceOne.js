import serviceOne from "@/data/serviceOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import ServiceOneSingle from "./ServiceOneSingle";

const { title, services } = serviceOne;

const ServiceOne = () => {
  const ref = useActive("#services");

  return (
    
    <section ref={ref} className="service-one" id="services">
 
    
      <Container>
      <div className="container">
     <p >Hello World!</p>
     <h1 >About Us</h1>
     <p >Magazinecrm  was established in 2010  with the intention of helping magazine publishers to manage their </p>
     <p > subscribers,advertisers  And also increase their profits by saving time and energy.</p>
      <p >The first client was a  magazine publisher with single magazine and it was  </p> 
     <p >a company who needed the software to just run on their Local are network.</p>
     
     <p >The next customer we had was a magazine publisher that had a single magazine. </p>
     <p >  and was a 30 year old  magazine company. Their data was moved from excel to our system.</p>
    <p >  And they have been using our software for more than 8 years. They were able to save time and energy.</p>
     <p > The third client was an editor of several magazines that did not just need a subscription system, </p>
     <p >plus an advertisement management system.</p>
     <p >They had 10 employees doing the job and right now only 2 employees are doing the same job.This was done in 2012 and</p>
     <p >they still using our product.</p>

     <p >We have enhanced our subscription system for multiple magazines. Also companies have customisation work to be done,</p>
     <p >like integrating our software programme with mailgun, mailchimp, or their website, or acessing subscribers data via mobile.</p>
     <p >We are looking for premium clients in Switzerland who will require our help too, automate their work, whose focus is to improve </p>
     <p > their subscription process to save time, create efficiency, also haveHappy subscribers and advertisers.So if you a magazine publisher who will like to manage the subscribers, increase subscribers,Manage advertisers please feel free to contact us.Send a mail to info@magazinecrm.ch</p>

     <style jsx>{`
        .container {
          margin: 80px;
        }
        p {
          color: green;
        }
        h1 {
          color: blue;
        }
      `}</style>
      </div>
        <div className="block-title text-center">
          <h2 className="block-title__title black-text-color">
            <TextSplit text={title} />
          </h2>
        </div>
    
      </Container>
    </section>
  );
};

export default ServiceOne;
