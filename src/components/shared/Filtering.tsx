import React from "react";
import { Users, Calendar, MoveDown } from "lucide-react";

function App() {
  return (
    <div className="bg-gradient-to-l from-primary/30 to-primary/10 flex items-center justify-center p-4">
      <div className="container flex flex-wrap items-center justify-between gap-4 rounded-2xl">
        {/* Guests Filter */}
        <div className="flex items-center gap-5 text-center ">
          <p className="font-medium font-outfit">Guests</p>
          <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full transition-colors cursor-pointer">
            <Users size={18} className="" />
            <span>2 Guests</span>
            <MoveDown
              size={16}
              className="w-6 h-6 border border-black p-1 rounded-full"
            />
          </button>
        </div>

        {/* Travel Period Filter */}
        <div className="flex items-center gap-5 text-center">
          <p className="font-medium font-outfit">Date</p>
          <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full transition-colors cursor-pointer">
            <Calendar size={18} className="" />
            <span>Travel period</span>
            <MoveDown
              size={16}
              className="w-6 h-6 border border-black p-1 rounded-full"
            />
          </button>
        </div>

        {/* Criteria Filter */}
        <div className="flex items-center gap-5 text-center">
          <p className="font-medium font-outfit">Criteria</p>
          <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full transition-colors cursor-pointer">
            <span>Criteria</span>
            <MoveDown
              size={16}
              className="w-6 h-6 border border-black p-1 rounded-full"
            />
          </button>
        </div>

        {/* City Filter */}
        <div className="flex items-center gap-5 text-center">
          <p className="font-medium font-outfit">City</p>
          <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full transition-colors cursor-pointer">
            <span>City</span>
            <MoveDown
              size={16}
              className="w-6 h-6 border border-black p-1 rounded-full"
            />
          </button>
        </div>

        {/* Find Now Button */}
        <div className="text-center">
          <button className="flex items-center gap-2 px-14 py-3 bg-primary hover:bg-primary/50 cursor-pointer text-black font-medium rounded-full transition-colors">
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
