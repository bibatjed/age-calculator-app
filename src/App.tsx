import { ChangeEvent, useState } from "react";
import IconArrowSource from "./assets/images/icon-arrow.svg";
import Input from "./components/Input";

type Date = {
  day: string;
  month: string;
  year: string;
};

type Error = {
  day: string;
  month: string;
  year: string;
  allForm: boolean;
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
  const [error, setError] = useState<Error>({
    day: "",
    month: "",
    year: "",
    allForm: false,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = () => {
    try {
      setError({
        day: "",
        month: "",
        year: "",
        allForm: false,
      });
      const birthday = new Date(`${date.month} ${date.day} ${date.year}`);
      const currentDate = new Date();
      const formError: Omit<Error, "allForm"> = {
        day: "",
        month: "",
        year: "",
      };

      if (!date.day) {
        formError.day = "This field is required";
      }

      if (!date.month) {
        formError.month = "This field is required";
      }

      if (!date.year) {
        formError.year = "This field is required";
      }

      if ((!formError.day && Number(date.day) < 1) || Number(date.day) > 31) {
        formError.day = "Must be a valid day";
      }
      if (
        (!formError.month && Number(date.month) < 1) ||
        Number(date.month) > 12
      ) {
        formError.month = "Must be a valid month";
      }
      if (
        !formError.year &&
        Number(date.year) > Number(currentDate.getFullYear())
      ) {
        formError.year = "Must be in the past";
      }

      if (formError.day && formError.month && formError.year) {
        setError({
          day: "Must be a valid date",
          month: "true",
          year: "true",
          allForm: true,
        });
        return;
      }

      if (formError.day || formError.month || formError.year) {
        setError({
          ...formError,
          allForm: false,
        });
        return;
      }

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
      <main className="bg-c-white w-[90%] max-w-[490px] p-7 py-12 rounded-[25px_25px_90px_25px] h-[440px] mt-16 flex flex-col justify-center">
        {/* Input */}
        <div className="flex justify-center md:justify-start flex-row gap-6">
          <div>
            <span
              className={`${
                error.day ? "text-c-light-red" : "text-c-smokey-grey"
              } font-poppins font-bold text-sm  tracking-widest`}
            >
              Day
            </span>
            <div className="w-20">
              <Input
                error={error.day}
                placeholder="DD"
                name="day"
                value={date.day}
                showErrorMessage={error.allForm}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <span
              className={`${
                error.month ? "text-c-light-red" : "text-c-smokey-grey"
              } font-poppins font-bold text-sm  tracking-widest`}
            >
              Month
            </span>
            <div className="w-20">
              <Input
                placeholder="MM"
                name="month"
                value={date.month}
                error={error.month}
                showErrorMessage={!error.allForm}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <span
              className={`${
                error.year ? "text-c-light-red" : "text-c-smokey-grey"
              } font-poppins font-bold text-sm  tracking-widest`}
            >
              Year
            </span>
            <div className="w-20">
              <Input
                placeholder="YYYY"
                name="year"
                value={date.year}
                error={error.year}
                showErrorMessage={!error.allForm}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-11 flex items-center justify-center relative">
          <span className="w-full absolute md:relative border-t-2 border-c-light-grey h-1"></span>
          <button
            type="button"
            className="hover:bg-c-off-black bg-c-purple h-14 w-14 z-10 flex md:flex-shrink-0 items-center justify-center rounded-full "
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
