// import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../ui/select"
const AnnouncementBar = () => {
  return (
    <div className="flex justify-evenly items-center w-full h-auto min-h-[48px] bg-black mx-auto gap-[231px]">
      <div></div>
      <div className="flex gap-2">
        <div>
          <p className="text-[#FAFAFA] text-[14px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>

        </div>
        <div>
          <p className="text-white text-[14px] font-semibold">ShopNow</p>

        </div>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="zh">Chinese (Mandarin)</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
            <SelectItem value="bn">Bengali</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectContent>

        </Select>
      </div>
    </div>
  )
}

export default AnnouncementBar