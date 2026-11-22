# E-Waste Doorstep Pickup and Electronics Recycling System

A responsive frontend website where households can select their old electronic items, calculate eco-reward points, and book a doorstep e-waste pickup. It also teaches users why e-waste is hazardous.

This is a first-semester **Internet Programming** project built with **HTML, CSS and JavaScript only**. It has no backend and no database.

## Problem Statement

Households with broken smartphones, old laptop chargers, damaged keyboards and obsolete batteries do not know how to recycle toxic electronic waste safely. They often throw it in the regular garbage. This website schedules doorstep pickups and rewards people for recycling.

## Features

1. **E-waste item selector**: quantity inputs for Old Smartphones, Laptops, Keyboards/Mice, Power Banks and Cables.
2. **Eco-reward points calculator**: points are calculated per item category, with a 10% bonus for 5 or more items. A level message is shown (Starter Recycler, Green Hero or Eco Champion).
3. **Doorstep pickup request form**: captures Customer Name, Address, Contact Number and Preferred Pickup Date, with validation and a confirmation message.
4. **Hazardous e-waste education section**: expandable topics on lead and mercury, lithium batteries, cadmium and heavy metals, and what to do before handing over a device.
5. **Responsive design**: the layout adjusts for desktop and mobile screens.

## Reward Points Table

| Item | Points per item |
|---|---|
| Old Smartphones | 50 |
| Laptops | 120 |
| Keyboards / Mice | 20 |
| Power Banks | 40 |
| Cables | 10 |

| Total points | Level |
|---|---|
| Less than 100 | Starter Recycler |
| 100 to 299 | Green Hero |
| 300 or more | Eco Champion |

## Project Structure

```
ewaste-project/
├── index.html    - page structure (HTML)
├── style.css     - styling and responsive layout (CSS)
├── script.js     - calculator and form logic (JavaScript)
└── README.md     - project documentation
```

## How to Run

1. Keep `index.html`, `style.css` and `script.js` in the same folder.
2. Double-click `index.html` to open it in any web browser (Chrome, Edge or Firefox).
3. No installation or internet connection is needed.

## How to Use

1. Enter the quantity of each item you want to recycle.
2. Click **Calculate Points** to see your reward points and level.
3. Fill in the pickup form and click **Book Pickup**.
4. Read the hazard topics at the bottom to learn about safe recycling.

## Technologies and Concepts Used

**HTML**
- Semantic tags: `header`, `nav`, `main`, `section`, `footer`
- Lists, a table, a form with `label`, `input` and `textarea`
- Text tags such as `strong` and `em`
- `details` and `summary` for the expandable topics

**CSS**
- Selectors: universal `*`, element, class, id, grouping, descendant (`nav ul`), attribute `[type="text"]`
- Pseudo-classes and pseudo-elements: `:hover`, `:focus`, `:first-child`, `::before`
- Box model: `border`, `padding`, `margin`, `border-radius`, `box-sizing`, `box-shadow`
- Flexbox: `display: flex`, `justify-content`, `align-items`, `flex-direction`
- Text styling and colors
- `transition` and `transform` for hover effects
- `@media` query for mobile screens

**JavaScript (Unit IV)**
- Variables: `const` and `let`
- Arrays of objects and an object constructor with `new` and `this`
- Function declaration, function expression and arrow function
- Array methods: `push`, `map`, `filter`, `forEach`
- `if`, `else if` and `else` statements
- `try`, `catch`, `finally` and `throw` for form validation
- Template literals and `console.log()`
- Basic DOM commands (`getElementById`, `.value`, `.innerHTML`) to read inputs and show results

## Form Validation Rules

- All fields are required.
- Contact number must be exactly 10 digits.
- At least one e-waste item must be selected.

## Limitations

- It is a frontend-only demo. Bookings are not saved after the page is refreshed.
- There is no real pickup scheduling or reward redemption.
- The pickup date is checked only for being filled in, not for being a future date.

## Possible Future Improvements

- Save bookings using `localStorage`
- Check that the pickup date is in the future
- Add a login page and a reward redemption page
- Connect to a backend server to manage real pickups


