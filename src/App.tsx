import { ChangeEvent, useState } from "react";
import IconArrowSource from "./assets/images/icon-arrow.svg";
import Input from "./components/Input";

type Date = {
  day: string;
  month: string;
  year: string;
};
function App() {
  const [date, setDate] = useState<Date>({
    day: "",
    month: "",
    year: "",
  });

  const [age, setAge] = useState<Date>({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setDate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = () => {
    try {
      const birthday = new Date(`${date.month} ${date.day} ${date.year}`);
      if (birthday.toString() == "Invalid Date") {
        setError(true);
        return;
      }
      const currentDate = new Date();

      const diffTime = Math.abs(Number(currentDate) - Number(birthday));
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const diffMonths = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const diffDays = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );

      setAge({
        day: diffDays.toString(),
        month: diffMonths.toString(),
        year: diffYears.toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-[100vh] bg-c-light-grey flex justify-center">
      <main className="bg-c-white w-[90%] p-5 py-12 rounded-[25px_25px_90px_25px] h-[420px] mt-16">
        {/* Input */}
        <div className="flex justify-center flex-row gap-6">
          <div>
            <span className="font-poppins font-bold text-sm text-c-smokey-grey tracking-widest">
              Day
            </span>
            <div className="w-20">
              <Input
                placeholder="DD"
                name="day"
                value={date.day}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <span className="font-poppins font-bold text-sm text-c-smokey-grey tracking-widest">
              Month
            </span>
            <div className="w-20">
              <Input
                placeholder="MM"
                name="month"
                value={date.month}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <span className="font-poppins font-bold text-sm text-c-smokey-grey tracking-widest">
              Year
            </span>
            <div className="w-20">
              <Input
                placeholder="YYYY"
                name="year"
                value={date.year}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-5 flex items-center justify-center relative">
          <span className="w-full absolute border-t-2 border-c-light-grey h-1"></span>
          <button
            type="button"
            className="bg-c-purple h-14 w-14 z-10 flex items-center justify-center rounded-full "
            onClick={onClick}
          >
            {" "}
            <img src={IconArrowSource} className="w-8 h-7" />
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-6 font-poppins">
          <span className="text-5xl text-c-off-black font-extrabold">
            <span className="text-c-purple">{age.year || "--"}</span> years
          </span>
          <span className="text-5xl text-c-off-black font-extrabold">
            <span className="text-c-purple">{age.month || "--"}</span> months
          </span>
          <span className="text-5xl text-c-off-black font-extrabold">
            <span className="text-c-purple">{age.day || "--"}</span> days
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
