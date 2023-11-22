import React, { useState } from 'react'
import info from "../DB.json"

const Dates = () => {

    const [personData , setPersonData] = useState(info.data) 

    const deleteData = () => {
        setPersonData([])
    }

    const viewData = () => {
        setPersonData(info.data)
    }


    return (
        <div className='container mx-auto mt-10'>
            <div className='all mx-auto max-w-md'>
                <div className='title my-2 text-black'>
                    {
                        personData.length ? 
                        <p>لديك  {personData.length} من المواعيد</p>
                        : <p>ليس لديك مواعيد اليوم</p>
                    }
                </div>
                <div className=' overflow-auto  rectangle p-2 h-[600px] rounded-[15px] bg-[#ffffff] shadow-3xl'>
                    {
                        personData.length ? 
                        personData.map((appointment , index) => {
                            return(
                                <div key={index} className='info flex items-center mx-3 py-2 border-b'>
                                    <img className='w-[60px] h-[60px] rounded-[50%]' src={appointment.img} alt="pic"/>
                                    <div className='text px-3'>
                                        <p className=' text-lg'>{appointment.name}</p>
                                        <p className=' text-xs'>{appointment.date}</p>
                                    </div>
                                </div>
                            )
                        }) : <h2 className=' text-2xl font-bold text-center mt-[20%]'> لا يوجد مواعيد اليوم </h2>
                    }
                </div>
                <div className='buttons sm:flex justify-between'>
                    <button onClick={deleteData} className='py-3 my-3 w-full sm:w-[200px] rounded-[8px] text-white bg-[#224f61]'>مسح الكل</button>
                    <button onClick={viewData} className='py-3 my-3 w-full sm:w-[200px] rounded-[8px] text-white bg-[#224f61]'>عرض البيانات</button>
                </div>
            </div>
        </div>
    )
}

export default Dates