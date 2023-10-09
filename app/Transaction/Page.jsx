"use client"
import Image from 'next/image';
import arrowCircle from "../../public/Group 13.svg";
import arrow from "../../public/Group 15.svg";
import powerChain from "../../public/pwr.svg";
import eyeIcon from "../../public/eye.svg";
import TableDemo from "../TableDemo/Page"

const Transaction = () => {
    const data = [
        {
            id:1,
            number:12222333331,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr1",
            to:"tofghg1",
            value:"0.49867 PWR",
            block:"b231"
        },
        {
            id:2,
            number:12222333332,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr2",
            to:"tofghg2",
            value:"0.49867 PWR",
            block:"b232"
        },
        {
            id:3,
            number:12222333333,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr3",
            to:"tofghg3",
            value:"0.49867 PWR",
            block:"b233"
        },
        {
            id:4,
            number:12222333334,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr4",
            to:"tofghg4",
            value:"0.49867 PWR",
            block:"b234"
        },
        {
            id:5,
            number:12222333335,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr5",
            to:"tofghg5",
            value:"0.49867 PWR",
            block:"b235"
        },
        {
            id:6,
            number:12222333336,
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr6",
            to:"tofghg6",
            value:"0.49867 PWR",
            block:"b236"
        }


       
    ]

   
    return ( 
        <section className=" ml-3 mr-3  md:ml-1 md:mr-1 lg:ml-10 lg:mr-10">
            
           {/* transaction container */}
           <div className=" ">
           <h2 className="text-blackColor font-bold text-xl mt-5 mb-5">Transactions</h2>

           {/* transaction blocks container */}
           <div className="flex flex-col w-full gap-3  md:grid grid-cols-3 lg:gap-4">
            {/* block 1 */}
            <div className="bg-blogBg rounded-md w-full h-20 p-1 flex items-center gap-x-4 md:h-88 lg:w-81">
                
                <Image src={arrowCircle} alt="" />
                {/* block 1 text container */}
                <div className='flex flex-col gap-2'>
                    <p className="text-transactionColor">TRANSACTIONS (24H)</p>

                    <p className="text-blackColor font-bold">1,960.01 <span className="text-greenColor">(4.04%)</span></p>

                </div>
            </div>
            {/* block 2 */}
            <div className="bg-blogBg rounded-md w-full h-20 p-1 flex items-center gap-x-4 md:h-88 md:gap-x-2 lg:w-81">
            <Image src={powerChain} alt="" />
                {/* block 1 text container */}
                <div className='flex flex-col gap-2'>
                    <p className="md:text-{3px} text-transactionColor">TRANSACTIONS FEE (24H)</p>

                    <p className="text-blackColor font-bold">1,2819.99 PWR <span className="text-redColor">(4.04%)</span></p>

                </div>
            </div>
            {/* block 3 */}
            <div className="bg-blogBg rounded-md w-full h-20 p-1 flex items-center gap-x-4 md:h-88 md:gap-x-2 lg:w-81">
            <Image src={arrow} alt="" />
                {/* block 1 text container */}
                <div className='flex flex-col gap-2 ml-3'>
                    <p className="text-transactionColor">AVG. TRANSACTIONS FEE (24H)</p>

                    <p className="text-blackColor font-bold">21.31 USD  <span className="text-redColor">(6.04%)</span></p>

                </div>
            </div>
           </div>
           
           </div>

           <p className="text-blackColor font-medium mt-8">More than 1,381,417,561 transactions found</p>

           <p className="mt-2 mb-2">(Showing the last 500k records)</p>

           
                <TableDemo/>
              
            
        </section>
     );
}
 
export default Transaction;