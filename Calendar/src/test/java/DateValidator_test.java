import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class DateValidator_test {
    @Test 
    void validDate(){
        assertTrue(DateValidator.ValidateDate(2025, 10, 30));
        assertTrue(DateValidator.ValidateDate(2004, 5, 9));
        assertTrue(DateValidator.ValidateDate(1997, 8, 20));
        assertTrue(DateValidator.ValidateDate(2024, 2, 29));
    }
    
    @Test
    void invalidDueToYear() {
        assertFalse(DateValidator.ValidateDate(1919, 3, 1));
        assertFalse(DateValidator.ValidateDate(2222, 2, 22));
    }

    @Test
    void invalidDueToMonth() {
        assertFalse(DateValidator.ValidateDate(2025, 0, 1));
        assertFalse(DateValidator.ValidateDate(2025, 13, 17));
    }

    @Test
    void invalidDueTDay() {
        assertFalse(DateValidator.ValidateDate(2025, 4, 31));
        assertFalse(DateValidator.ValidateDate(2017, 7, 0));
        assertFalse(DateValidator.ValidateDate(2033, 3, 33));
    }

    @Test
    void invalidDueToLeapYear() {
        assertFalse(DateValidator.ValidateDate(2001, 2, 29));
        assertFalse(DateValidator.ValidateDate(2100, 2, 29));
    }
}
