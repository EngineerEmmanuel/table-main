"use client"
import eyeIcon from "../../public/eye.svg";
import infoCircle from "../../public/info-circle.svg";
import copyImage from "../../public/copy.svg";
import Image from 'next/image';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";


const Table = () => {
    const [copiedMessage, setCopiedMessage]= useState("");
    const handleCopy = ()=>{
        // setCopiedMessage("Copied")
        // setTimeout(()=>{
        //     setCopiedMessage("")
        // },1000)
        // alert("God dey")
        // alert("Tech")
    }
    
    const mockData = [
        {
            id:1,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr1",
            to:"tofghg1",
            value:"0.49867 PWR",
            block:"b12341"
        },
        {
            id:2,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr2",
            to:"tofghg2",
            value:"0.49867 PWR",
            block:"b12342"
        },
        {
            id:3,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr3",
            to:"tofghg3",
            value:"0.49867 PWR",
            block:"b12343"
        },
        {
            id:4,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr4",
            to:"tofghg4",
            value:"0.49867 PWR",
            block:"b12344"
        },
        {
            id:5,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr5",
            to:"tofghg5",
            value:"0.49867 PWR",
            block:"b12345"
        },
        {
            id:6,
            number:"0x1234567890abcdef",
            status:"Transfer",
            time:"12 secs ago",
            from:"0xfhgrhr6",
            to:"tofghg6",
            value:"0.49867 PWR",
            block:"b2346"
        }


       
    ]

    



    return ( 
        <section>
             <div class="outer-wrapper mt-10">
    <div class="table-wrapper ">
    <table>
        <thead>
            <th className="text-blackColor font-medium mt-5">Txn Hash <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">Status <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">Block <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">Timestamp <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">From <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">To <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
            <th className="text-blackColor font-medium mt-5">Value <Image src={infoCircle} className="ml-1 mr-1 inline "/></th>
           
        </thead>
        <tbody>
            {mockData.map((dat,key)=>{
                return(
                    <tr key={key} className="roll">
                        <td className="text-txnHashColor"><Image src={eyeIcon} className="ml-1 mr-1 inline "/>{dat.number}</td>
                        <td>{dat.status}</td>
                        <td className="text-txnHashColor">{dat.block}</td>
                        <td>{dat.time}</td>
                        <td className="text-fromToColor">{dat.from} <CopyToClipboard text={dat.from} ><Image src={copyImage} className="ml-1 mr-1 inline cursor-pointer " onClick={handleCopy}/></CopyToClipboard> <p className="z-10 inline text-black">{copiedMessage}</p> </td>
                        <td className="text-fromToColor">{dat.to} <CopyToClipboard text={dat.to} ><Image src={copyImage} className="ml-1 mr-1 inline cursor-pointer " onClick={handleCopy}/></CopyToClipboard> <p className="z-10 inline text-black">{copiedMessage}</p></td>
                        <td> <span className="bg-valueBg rounded-md p-1">{dat.value}</span> </td>
                        
                    </tr>
                )
            })}
           

        </tbody>
    </table>
</div>
</div>
        </section>
     );
}
 
export default Table;