import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeBtn = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === 'dark') {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme" , "dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme" , "light")
        }
    },[darkMode]);
    
    return(
        // <label className="relative inline-flex items-center cursor-pointer">
        //     <input 
        //         type="checkbox"
        //         value=""
        //         className="sr-only peer"
        //         />
        //     <div className="w-11 h-6 bg-gray-200
        //     peer-focus:outline-none peer-focus:ring-4
        //     peer-focus:ring-blue-300 
        //     dark:peer-focus:ring-blue-800 rounded-full peer
        //     dark:bg-gray-700
        //     peer-checked:after:translate-x-full
        //     peer-checked:after:border-white 
        //     after:content-[''] after:absolute
        //     after:top-[2px] after:left-[2px]
        //     after:bg-white after:border-gray-300
        //     after:border after:rounded-full after:h-5
        //     after:w-5 after:transition-all
        //     dark:border-gray-600 peer-checked:bg-blue-600">
        //     </div>
        //     <span className="ml-3 text-sm font-medium text-gray-900">
        //         Toggle Theme
        //     </span>
        // </label>
        <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 
        bg-teal-500 cursor-pointer rounded-full p-1"
        onClick={() => setDarkMode(!darkMode)}>
            <FaMoon className="text-white" size={18}/>
            <div className={`${darkMode ? "left-[2px]" : "right-[2px]"} absolute bg-white dark:bg-medium w-6 h-6 rounded-full
            shadow-md transform transition-transform duration-320`}></div>
            <BsSunFill className="ml-auto text-yellow-400" size={18}/>
        </div>
    )
}
export default ThemeBtn;