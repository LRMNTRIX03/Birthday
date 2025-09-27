import { useState } from "react"
import { Link } from "react-router-dom"
import {motion, AnimatePresence } from "framer-motion"

export default function CakeComponent() {
  const [isLit, setIsLit] = useState(true)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 via-pink-100 to-pink-200">
          <div className="flex items-center justify-center">
      <Link 
            to="/" 
            className="text-pink-700 hover:underline font-medium text-lg"
          >
            ← Kembali ke Home
          </Link>
          </div>
     
 

    
      <div className="relative w-80 h-96 flex flex-col items-center">
       
        <div className="flex flex-col items-center relative z-20">
        
          <AnimatePresence>
            {isLit && (
              <motion.div
                className="w-8 h-12 bg-gradient-to-t from-yellow-500 via-orange-400 to-yellow-100 rounded-full shadow-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </AnimatePresence>

       
          <AnimatePresence>
            {!isLit && (
              <motion.div
                className="absolute -top-6 text-3xl text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 0], y: [-10, -30] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💨
              </motion.div>
            )}
          </AnimatePresence>

         
          <div className="w-5 h-16 bg-pink-600 rounded" />
        </div>

      
        <div className="mt-4 w-48 h-28 bg-pink-300 rounded-t-2xl border-4 border-pink-400 shadow-lg relative z-10">
         
          <div className="w-full h-6 bg-white rounded-t-2xl flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-red-400 rounded-full border-2 border-white shadow-sm"
              />
            ))}
          </div>
        </div>

       
        <div className="w-80 h-52 bg-pink-400 rounded-t-3xl border-4 border-pink-500 shadow-xl relative -top-6">
      
          <div className="w-full h-8 bg-white rounded-t-3xl flex justify-center items-center gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-pink-200 rounded-full border border-pink-300 shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>

   
      <button
        onClick={() => setIsLit(!isLit)}
        className="mt-10 px-8 py-3 bg-pink-600 text-white text-lg rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
      >
        {isLit ? "Tiup Lilin 🎂" : "Nyalakan Lilin 🔥"}
      </button>
    </div>
  )
}
