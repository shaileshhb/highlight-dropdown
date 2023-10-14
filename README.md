# HighlightDropdown

The **HighlightDropdown** is a React component that extends Material-UI (MUI) Autocomplete, offering additional features for creating parent-child dropdowns with built-in text highlighting. This makes selecting items from hierarchical data more user-friendly and visually appealing.

## Features

- **Parent-Child Dropdowns**: Easily set up cascading dropdowns with hierarchical data.
- **Search Highlighting**: Automatically highlights matching text as the user types, improving the user experience.
- **Customization**: Customize the component's appearance and behavior using various optional props.

## Demo
Check out the live demo of the HighlightDropdown [here](https://highlight-dropdown-01.vercel.app/). Experience its powerful features in action!

## Installation
To install the **HighlightDropdown** package, you can use npm or yarn:

```bash
npm install highlight-dropdown
# or
yarn add highlight-dropdown
```

# API Reference

## Props
- **dropdownData** (required): An array of objects with the following fields:
    - *id*: A unique identifier for the item.
    - *name*: The name of the item.
    - *groupName*: The group or category name to establish the hierarchy.

- **selectedValues** (required): An array of selected values. Initially empty or with pre-selected values.

- **setSelectedValues** (required): A function to set the selected values.

- **browsePopupTitle** (required): Title to be shown when popup is opened.

- **isReadOnly** (optional, default: false): Set to true to make the component read-only.

- **open** (optional, default: false): Set to true to initially open the dropdown.

- **size** (optional, default: 'medium'): Size of the component (options: 'small', 'medium').

- **placeholder** (optional, default: 'Select items...'): The placeholder text displayed when no item is selected.

- **className** (optional): Additional CSS classes for customization.

- **highlightColor** (optional, default: text-[#DE6A00]): Set colour for the hightlighted text.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/shaileshhb/highlight-dropdown/blob/main/LICENSE) file for details.

## Support
If you have any questions or need assistance, please open an issue on GitHub or reach out to us at [shaileshb.0720@gmail.com](mailto:shaileshb.0720@gmail.com).
