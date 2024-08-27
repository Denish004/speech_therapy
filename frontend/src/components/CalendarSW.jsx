import React, { useMemo, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isSameYear,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function usePrevious(value) {
  const [tuple, setTuple] = useState([null, value]);

  if (tuple[1] !== value) {
    setTuple([tuple[1], value]);
  }

  return tuple[0] || value;
}

// Sample appointments data
const appointments = {
  "2024-08-25": ["Appointment with Dr. Smith", "Follow-up with Dr. Jones"],
 
  "2024-09-01": ["Consultation with Dr. White"],
};

export function Calendar() {
  const [ref, bounds] = useMeasure();
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMyyyy"));
  const prevMonth = usePrevious(currentMonth);
  const [selectedDate, setSelectedDate] = useState(null);

  const direction = prevMonth < currentMonth ? 1 : -1;

  const firstDayOfMonth = startOfMonth(
    parse(currentMonth, "MMyyyy", new Date())
  );

  const days = useMemo(() => {
    return eachDayOfInterval({
      start: startOfWeek(firstDayOfMonth),
      end: endOfWeek(endOfMonth(firstDayOfMonth)),
    });
  }, [firstDayOfMonth]);

  const showToday = useMemo(() => {
    return (
      !isSameMonth(today, parse(currentMonth, "MMyyyy", new Date())) ||
      !isSameYear(today, parse(currentMonth, "MMyyyy", new Date()))
    );
  }, [today, currentMonth]);

  const variants = {
    enter: ({ direction, width }) => {
      return {
        x: direction * width,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: ({ direction, width }) => {
      return {
        zIndex: 0,
        x: direction * -width,
        opacity: 0,
      };
    },
  };

  const dayPlacements = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const handleDateClick = (day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    setSelectedDate(appointments[formattedDate] ? formattedDate : null);
  };

  return (
    <div className="w-[300px] p-2 border rounded-lg shadow-lg">
      <div className="flex items-center px-2 mb-1 overflow-hidden">
        <h1 className="font-bold text-lg flex-1">
          {format(parse(currentMonth, "MMyyyy", new Date()), "MMMM yyyy")}
        </h1>
        <AnimatePresence>
          {showToday && (
            <motion.button
              initial={{ y: -30 }}
              animate={{
                y: 0,
              }}
              exit={{ y: -30 }}
              className="px-2 text-sm border rounded-md mr-2 text-gray-600 hover:bg-gray-100"
              onClick={() => {
                setCurrentMonth(format(today, "MMyyyy"));
              }}
            >
              Today
            </motion.button>
          )}
        </AnimatePresence>
        <div className="flex justify-between">
          <button
            className="text-gray-500"
            onClick={() => {
              setCurrentMonth(
                format(
                  addMonths(parse(currentMonth, "MMyyyy", new Date()), -1),
                  "MMyyyy"
                )
              );
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            className="text-gray-500 ml-2"
            onClick={() => {
              setCurrentMonth(
                format(
                  addMonths(parse(currentMonth, "MMyyyy", new Date()), 1),
                  "MMyyyy"
                )
              );
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        className="relative overflow-hidden"
        initial={false}
        animate={{
          height: bounds.height + 40,
        }}
        style={{
          height: bounds.height + 40,
        }}
      >
        <div className="grid grid-cols-7 place-content-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2">
              <span className="text-gray-500">{day}</span>
            </div>
          ))}
        </div>
        <AnimatePresence
          initial={false}
          custom={{
            direction,
            width: bounds.width,
          }}
        >
          <motion.div
            ref={ref}
            variants={variants}
            custom={{ direction, width: bounds.width }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                bounce: 0.3,
              },
              opacity: { duration: 0.2 },
            }}
            className="absolute left-0 right-0 grid grid-cols-7 place-content-center"
            key={currentMonth}
          >
            {days.map((day) => {
              const formattedDate = format(day, "yyyy-MM-dd");
              const hasAppointment = appointments[formattedDate];

              return (
                <div
                  key={day}
                  className={cn({
                    "p-2": true,
                    [dayPlacements[day.getDay()]]: true,
                  })}
                >
                  <button
                    className={cn({
                      "w-8 h-8 rounded-full flex items-center justify-center":
                        true,
                      "text-gray-400": !isSameMonth(day, firstDayOfMonth),
                      "text-gray-700": isSameMonth(day, firstDayOfMonth),
                      "bg-blue-500 text-white": isSameDay(day, today),
                      "bg-red-500 text-white": hasAppointment,
                    })}
                    onClick={() => handleDateClick(day)}
                  >
                    {format(day, "d")}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {selectedDate && (
        <div className="mt-4 p-2 border-t">
          <h2 className="text-lg font-semibold mb-2">
            Appointments on {selectedDate}:
          </h2>
          <ul>
            {appointments[selectedDate].map((appointment, index) => (
              <li key={index} className="text-sm text-gray-700">
                {appointment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Usage in App component
export default function App() {
  return (
    <div className="p-4">
      <Calendar />
    </div>
  );
}
