import { Navbar } from "./navbar";
import { Footer } from "./footer";
import hood4 from "../Bilder/hood4.jpg";
import { Link } from "react-router-dom";
import { Payment } from "./payment";



function Input() {
    return (
        <>
 <><Navbar />
    <div className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${hood4})` }}>

    
            <section className="py-22  dark:text-gray-50">
            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6  m-20 p-12 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="text-xs dark:text-gray-400">Note! The information is not saved.</p>
                        <p className="font-medium">Delivery Inormation</p>
                        <p className="text-xs">Savastano Milano </p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        
                    </div>
                    <div className="">
                    <Link to={"/Payment"} element={<Payment/>}>
                    <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-green-700 dark:text-gray-800">Continue</button>
                    </Link>
                    </div>
                </fieldset>
                
            </form>
            </section>
            </div>
        <Footer /></>
        </>
        
    );
  }
  
  export {Input};