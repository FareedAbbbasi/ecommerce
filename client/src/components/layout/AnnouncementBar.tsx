import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../ui/select"
const AnnouncementBar = () => {
  return (
    <div className="w-full h-auto flex justify-evenly items-center min-h-[48px] bg-black flex-col">
      <div className="w-full flex gap-2 justify-evenly items-center mx-auto flex-wrap p-5 sm:p-3 md:p-0">
        <div className="flex">
          <div className="text-white"></div>
          <div className="flex gap-2">
            <p className="text-[#FAFAFA] text-[14px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <p className="text-white text-[14px] font-semibold">ShopNow</p>
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="zh">Chinese</SelectItem>
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

    </div>
  )
}

export default AnnouncementBar