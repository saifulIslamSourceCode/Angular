var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 52] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 53] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 54] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 55] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 56] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 57] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 58] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
console.log(day);
if (day == DaysOfTheWeek.MON)
    console.log('go to the work');
