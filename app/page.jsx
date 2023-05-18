import Features from "@components/Features";
import About from "@components/About";
import Services from "@components/Services";
import Faq from "@components/FAQ";
import Contact from "@components/Contact";
const Home = () => {
  return (
    <>
    
    <section className='w-full flex-center flex-col md:mt-[100px]  md:mb-[100px] py-5'>
    <h1 className='head_text text-center'>
      Welcome to
      <br className='max-md:hidden' />
      <span className= 'text-center indigo_gradient'> All In One Management System</span>
    </h1>
    <p className='desc text-center'>
    Library Management System, Inventory Management System, Attendance
            Management System
    </p>

    
  </section>
  <Services/>
    <Features/>
    <About />
    <Faq/>
    <Contact />
  </>
);
}

export default Home