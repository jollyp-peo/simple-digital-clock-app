# Digital Clock

## Overview
This is a simple digital clock web application that displays the current time and date dynamically. The clock updates every second and shows the time in a 12-hour format with AM/PM indicators. Additionally, the date is displayed in a readable format including the day of the week, date, month, and year.

## Features
- Displays current time in a 12-hour format (HH:MM:SS AM/PM)
- Shows the current date with the day, month, and year
- Automatically updates every second
- Responsive design

## Technologies Used
- HTML
- CSS
- JavaScript

## Project Structure
```
/digital-clock
│── index.html    # Main HTML structure
│── style.css     # Styles for the clock and date display
│── index.js      # JavaScript for updating time and date
```

## How to Run
1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. The clock and date will be displayed and updated in real time.

## JavaScript Logic
- The script selects the clock and date elements using `document.getElementById()`.
- It retrieves the current time using `new Date()` and extracts hours, minutes, and seconds.
- The time is formatted to a 12-hour format with `AM` and `PM` indicators.
- The date is displayed with the abbreviated day and month names.
- `setInterval(updateTime, 1000);` ensures the clock updates every second.

## Future Enhancements
- Add user-customizable themes (dark mode, light mode, etc.)
- Include an option to switch between 12-hour and 24-hour formats
- Display time zones based on user preference

## Author
peter | [GitHub](https://github.com/jollyp-peo)

## License
This project is open-source and available under the MIT License.

