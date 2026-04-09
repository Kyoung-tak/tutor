import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

function buildCalendar(dateValue: string) {
  const target = new Date(dateValue);
  const year = target.getFullYear();
  const month = target.getMonth();
  const weddingDay = target.getDate();

  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  const startDay = start.getDay();
  const totalDays = end.getDate();

  const cells: Array<number | null> = [];

  for (let i = 0; i < startDay; i += 1) cells.push(null);
  for (let i = 1; i <= totalDays; i += 1) cells.push(i);
  while (cells.length % 7 !== 0) cells.push(null);

  return { year, month, weddingDay, cells };
}

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

export function CalendarSection() {
  const { year, month, weddingDay, cells } = buildCalendar(weddingData.wedding.datetime);

  return (
    <SectionShell
      id={sectionIds.calendar}
      eyebrow="Calendar"
      title={`${year}년 ${month + 1}월`}
      description="예식 날짜를 달력에서 강조 표시했습니다."
    >
      <div className="glass-panel mx-auto max-w-3xl rounded-[1.75rem] p-5 shadow-soft sm:p-8">
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekdays.map((day) => (
            <div
              key={day}
              className={`pb-2 text-xs font-semibold ${day === "일" ? "text-rose-500" : "text-stone"}`}
            >
              {day}
            </div>
          ))}
          {cells.map((day, index) => {
            const isWeddingDay = day === weddingDay;

            return (
              <div
                key={`${day}-${index}`}
                className={`flex aspect-square items-center justify-center rounded-2xl text-sm sm:text-base ${
                  !day
                    ? "bg-transparent"
                    : isWeddingDay
                      ? "bg-cocoa text-white shadow-soft"
                      : "bg-white/60 text-cocoa"
                }`}
              >
                {day ? (
                  <span className={isWeddingDay ? "font-semibold" : ""}>{day}</span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
