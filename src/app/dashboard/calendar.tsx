// components/Calendar.tsx
'use client';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'tailwindcss/tailwind.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface DayProps {
  date: Date;
  isCompleted: boolean;
  onClick: () => void;
}

const Day: React.FC<DayProps> = ({ date, isCompleted, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-10 border flex items-center justify-center rounded-md cursor-pointer ${
        isCompleted ? 'bg-primary text-white' : 'bg-gray-200'
      }`}
    >
      {dayjs(date).date()}
    </div>
  );
};

const Calendar: React.FC = () => {
  const [completedDays, setCompletedDays] = useState<string[]>([
    '2024-10-01',
    '2024-10-02',
  ]); // 初始完成的日期

  const toggleDayCompletion = (date: Date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    setCompletedDays(
      (prev) =>
        prev.includes(formattedDate)
          ? prev.filter((day) => day !== formattedDate) // 如果已完成，点击后移除
          : [...prev, formattedDate], // 如果未完成，点击后添加
    );
  };

  const generateCalendar = (year: number, month: number) => {
    const firstDayOfMonth = dayjs(`${year}-${month}-01`).startOf('month').day();
    const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();

    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //增加日期标示
    for (let index = 0; index < 7; index++) {
      days.push(
        <div key={`week-${index}`} className="text-center">
          {weekdays[index]}
        </div>,
      );
    }

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = dayjs(`${year}-${month}-${day}`).toDate();
      const isCompleted = completedDays.includes(
        dayjs(date).format('YYYY-MM-DD'),
      );

      days.push(
        <Day
          key={day}
          date={date}
          isCompleted={isCompleted}
          onClick={() => toggleDayCompletion(date)} // 点击事件，切换完成状态
        />,
      );
    }

    return days;
  };

  return (
    <Card className="p-5">
      <CardHeader>
        <CardTitle className="flex justify-between">学习日历</CardTitle>
        <CardDescription>努力全部点亮它们吧！</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {generateCalendar(2024, 10)}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
