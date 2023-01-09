import logo from "@/images/Signature.png";

const footerData = {
  logo,
  author: "Magazine crm",
  year: new Date().getFullYear(),
  links: [
    {
      id: 1,
      name: "Managing_Subscribers",
      href: "subscriber_manager",
    },
    {
      id: 2,
      name: "Managing advertisers",
      href: "advertiser_manager",
    },
    {
      id: 3,
      name: "Marketing Module with leadmodule",
      href: "lead_manager",
    },
   
  ],
  socials: [
    {
      id: 1,
      icon: "fa fa-facebook-square",
      href: "https://www.facebook.com/magazinecrmsoftware/",
      
    },
    {
      id: 2,
      icon: "fa fa-twitter",
      href: "https://twitter.com/magmaxpro",
    },
    {
      id: 3,
      icon: "fa fa-instagram",
      href: "#",
    },
    {
      id: 4,
      icon: "fa fa-pinterest-p",
      href: "#",
    },
  ],
};

export default footerData;
