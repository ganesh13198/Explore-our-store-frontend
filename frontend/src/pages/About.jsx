import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Forver was born out of a passion for innovation and a desire to revelution the way people shop online.Our journy begon with a simple idea to provide plateform where customers can easily discover,explore and purches a wide range of products from the comfort of the homes </p>
        <p>Since our inception,we worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and performence.From fassion and beauty to electronics and home essantials,we offer an extesive collection sourced from trusted branded and suppliers </p>
        <b className="text-gray-800">Our Mission</b>
        <p>Our mission at Forever is to empower customers with choice,convinience,and confidence.We are dedicated to providing a seamless shopping experiece that exceeds expectations,from browsing and ordering to delivery and beyond</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p>with our user-frindly interface and hassle-free ordering process,shopping has never been easier</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p>Our teams of dedicated professionals is here to assists you the way,ensuring satisfication is our top priority</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
