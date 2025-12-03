import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const monthsInRussian = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const Booking: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay() || 7;

  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const prevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const isDateSelectable = (date: Date) => {
    const day = date.getDay();
    // 0 = Sunday, 2 = Tuesday, 4 = Thursday, 6 = Saturday
    return day === 0 || day === 2 || day === 4 || day === 6;
  };

  const handleDateClick = (date: Date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(new Date(date.setHours(0, 0, 0, 0)));
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    for (let i = 1; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelectable = isDateSelectable(date);
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      days.push(
        <div
          key={day}
          onClick={() => isSelectable && handleDateClick(date)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors ${
            isSelected
              ? 'bg-primary-light bg-opacity-40 text-text-primary'
              : isSelectable
              ? 'hover:bg-primary-light hover:bg-opacity-40 bg-accent-light bg-opacity-20'
              : 'cursor-not-allowed opacity-50'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <section id="booking" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Выберите дату поездки</h2>

        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-medium md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={prevMonth}
              className="rounded-full p-2 text-text-primary hover:bg-gray-100"
              aria-label="Предыдущий месяц"
            >
              <ChevronLeft size={24} />
            </button>

            <h3 className="text-center text-xl font-semibold md:text-2xl">
              {monthsInRussian[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>

            <button
              onClick={nextMonth}
              className="rounded-full p-2 text-text-primary hover:bg-gray-100"
              aria-label="Следующий месяц"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mb-4 grid grid-cols-7 gap-1">
            {daysOfWeek.map(day => (
              <div key={day} className="flex h-10 w-10 items-center justify-center font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center text-text-secondary">
              <Calendar size={20} className="mr-2" />
              <span>
                {selectedDate
                  ? `Выбрана дата: ${selectedDate.getDate()} ${monthsInRussian[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
                  : 'Выберите дату поездки'}
              </span>
            </div>

            <a
              href={
                selectedDate
                  ? `https://t.me/learnx1000?text=${encodeURIComponent(
                      `Здравствуйте! Хочу забронировать визаран на ${selectedDate.getDate()} ${monthsInRussian[selectedDate.getMonth()]} ${selectedDate.getFullYear()}.`
                    )}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${!selectedDate ? 'pointer-events-none opacity-70' : ''}`}
            >
              Забронировать через Telegram
            </a>
          </div>

          <div className="mt-6 rounded-lg bg-primary-light bg-opacity-10 p-4 text-center text-sm">
            <p className="text-text-secondary">
              Для получения актуальной информации о доступных датах и местах, пожалуйста, свяжитесь с нами через Telegram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;