import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./App.css";
import IconArrowSource from "./assets/images/icon-arrow.svg";

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
  console.log("rendering");

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setDate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = () => {
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
  };
  return (
    <main>
      {/* Input */}
      <div>
        <span>Day</span>
        <input
          onKeyDown={onKeyPress}
          type="number"
          name="day"
          onChange={onChange}
          value={date.day}
          placeholder="DD"
        />
      </div>
      <div>
        <span>Month</span>
        <input
          onKeyDown={onKeyPress}
          type="number"
          name="month"
          onChange={onChange}
          value={date.month}
          placeholder="MM"
        />
      </div>
      <div>
        <span>Year</span>
        <input
          onKeyDown={onKeyPress}
          name="year"
          onChange={onChange}
          value={date.year}
          placeholder="YYYY"
        />
      </div>
      <button
        type="button"
        className="bg-c-purple flex items-center justify-center rounded-full p-5"
        onClick={onClick}
      >
        {" "}
        <img src={IconArrowSource} className="w-8 h-8" />
      </button>
      <div>
        <div>{age.year || "--"} years</div>
        <div>{age.month || "--"} months</div>
        <div>{age.day || "--"} days</div>
      </div>
    </main>
  );
}

export default App;
