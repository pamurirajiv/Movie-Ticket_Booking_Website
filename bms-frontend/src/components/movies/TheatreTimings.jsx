 import {useState} from 'react'
 import dayjs from 'dayjs'
const TheatreTimings = () => {
    const today = dayjs();
    const [selectedDate, setSelectedDate] = useState(today);
    const formattedDate = selectedDate.format("DD MMM YYYY");

    const next7days = Array.from({length: 7}, (_, i) => today.add(i, "day"));
  return (
 <>
        <hr className='my-2 border-gray-200'/>
        <div className='flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2'>
            {
                next7days.map((date,i) => {
                    const isSelected = selectedDate.isSame(date, "day");    
                    return (
                        <button 
                            key={i}
                            className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${isSelected? "bg-black text-white font-semibold": "text-black hover:bg-gray-100"}`}>
                                <span className='text-sm font-black'>{date.format("D")}</span>
                                <span className='text-xs'>{date.format("ddd")}</span>
                                <span className='text-xs'>{date.format("MMM").toUpperCase()}</span>
                            </button>
                )
                })
            }
        </div>

 </>
  )
}

export default TheatreTimings
