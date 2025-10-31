import java.time.LocalDate;

public class DateValidator{
    public static boolean ValidateDate(int year, int month, int day) {
        int curr_year = LocalDate.now().getYear();
        if (year < (curr_year - 100) || year > (curr_year + 100)){
            return false;
        }
        if (month < 1 || month > 12){
            return false;
        }
        if (day < 1){
            return false;
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            if (day > 31){
                return false;
            }
        }
        if (month != 2){
            if (day > 30){
                return false;
            }
        }
        else{
            if ((year % 4) == 0){
                if ((year % 100) == 0 && (year % 400) != 0){
                    if (day > 28){
                        return false;
                    }
                }
                else{
                    if (day > 29){
                    return false;
                    }
                }    
            }
            else{
                if (day > 28){
                    return false;
                }
            }
        }
        return true;
    }
}