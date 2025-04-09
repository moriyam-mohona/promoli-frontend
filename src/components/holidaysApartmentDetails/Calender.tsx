"use client";

import React, { useState } from "react";
import { Calendar as AntCalendar } from "antd";
import type { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, XCircle } from "lucide-react";
import dayjs from "dayjs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handleDateSelect = (date: Dayjs) => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      const newDates = [selectedDates[0], date].sort(
        (a, b) => a.valueOf() - b.valueOf()
      );
      setSelectedDates(newDates);
    } else {
      setSelectedDates([date]);
    }
  };

  const isDateSelected = (date: Dayjs) => {
    return selectedDates.some((selectedDate) =>
      selectedDate.isSame(date, "day")
    );
  };

  const isDateInRange = (date: Dayjs) => {
    if (selectedDates.length !== 2) return false;
    return (
      date.isAfter(selectedDates[0], "day") &&
      date.isBefore(selectedDates[1], "day")
    );
  };

  const dateCellRender = (date: Dayjs) => {
    const isSelected = isDateSelected(date);
    const isRange = isDateInRange(date);

    return (
      <div
        className={`
          h-10 w-10 flex items-center justify-center rounded-full transition-all
          ${isSelected ? "bg-[#17A5E6] text-white" : ""}
          ${isRange ? "bg-[#E6F7FF]" : ""}
          hover:bg-[#17A5E6] hover:text-white
        `}
      >
        {date.date()}
      </div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        variants={fadeIn}
        className="bg-[#F0F9FF] rounded-xl p-6 max-w-md mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">
            {currentMonth.format("MMMM-YYYY")}
          </h2>
          <button
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <AntCalendar
          fullscreen={false}
          value={currentMonth}
          onChange={(date) => handleDateSelect(date)}
          dateFullCellRender={dateCellRender}
          className="custom-calendar"
          headerRender={() => null}
        />

        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">Minimum Stay</span>
            </div>
            <button
              onClick={() => setSelectedDates([])}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XCircle className="w-4 h-4" />
              <span className="text-sm">Reset</span>
            </button>
          </div>

          <button className="w-full bg-[#17A5E6] text-white py-3 rounded-md hover:bg-[#1590C8] transition-colors flex items-center justify-center gap-2">
            Book Now
            <span className="text-xl">→</span>
          </button>

          {selectedDates.length === 2 && (
            <p className="text-xs text-gray-500 text-center">
              (If Different Minimum Stays Are Displayed For Your Selected Travel
              Time, The Longest Minimum Stay Applies.)
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Calendar;
