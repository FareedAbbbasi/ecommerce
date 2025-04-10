import { Camera, Computer, Gamepad2, Headphones, Monitor, Smartphone, Watch } from 'lucide-react';
import { useState } from 'react';
import { JSX } from 'react/jsx-runtime';

type Category = {
  name: string;
  icon: JSX.Element;
};

const Categories: Category[] = [
  { name: 'Phones', icon: <Smartphone className='w-[56px] h-[56px]' /> },
  { name: 'Computers', icon: <Monitor className='w-[56px] h-[56px]' /> },
  { name: 'SmartWatch', icon: <Watch className='w-[56px] h-[56px]'/> },
  { name: 'Camera', icon: <Camera className='w-[56px] h-[56px]'/> },
  { name: 'HeadPhones', icon: <Headphones className='w-[56px] h-[56px]' /> },
  { name: 'Gaming', icon: <Gamepad2 className='w-[56px] h-[56px]' /> },
];

const CategoryCard = () => {
  const [selected, setSelected] = useState('Camera');

  return (
    <div className="w-full flex flex-wrap gap-3 sm:gap-5 md:gap-6 lg:gap-[30px] sm: justify-center">
      {Categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => setSelected(cat.name)}
          className={`flex flex-col justify-center items-center gap-4 border cursor-pointer transition-all w-full max-w-[170px] h-auto min-h-[145px] rounded-md 
          ${selected === cat.name ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
        >
          {cat.icon}
          <span className="text-sm">{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

