/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Autocomplete, Checkbox, Chip, TextField } from "@mui/material";
import parser from "html-react-parser";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BrowsePopup from "./BrowsePopup";

export default function HighlightDropdown({
  dropdownData,
  selectedValues,
  setSelectedValues,
  isReadOnly = false,
  open,
  size = "medium",
  placeholder = "Select items",
  className = "",
  highlightColor = "text-[#DE6A00]",
  browsePopupTitle,
}) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [broswePopupOpen, setBroswePopupOpen] = useState(false);

  const customOptionLabel = (label) => {
    const startIndex = label.toLowerCase().indexOf(search.toLowerCase());
    const endIndex = startIndex > -1 ? startIndex + search.length : 0;
    const highlightedLabel = `<span>${label.substring(
      0,
      startIndex
    )}<span className='font-semibold ${highlightColor}'>${label.substring(
      startIndex,
      endIndex
    )}</span>${label.substring(endIndex)}</span>`;

    return parser(highlightedLabel);
  };

  const checkGroup = (group) => {
    const groupLength = data.filter((c) => c.groupName === group).length;
    const selectedGroupLength = selectedValues.filter(
      (c) => c.groupName === group
    ).length;
    return groupLength === selectedGroupLength;
  };

  const checkGroupIndeterminate = (group) => {
    const groupLength = data.filter((c) => c.groupName === group).length;
    const selectedGroupLength = selectedValues.filter(
      (c) => c.groupName === group
    ).length;
    if (selectedGroupLength === 0) {
      return false;
    }
    return groupLength !== selectedGroupLength;
  };

  const checkOptions = (data) => {
    let dataIndex = -1;
    selectedValues.forEach((value, index) => {
      if (value.name === data.name) {
        dataIndex = index;
      }
    });

    if (dataIndex === -1) {
      selectedValues.push(data);
      setSelectedValues([...selectedValues]);
      return;
    }

    selectedValues.splice(dataIndex, 1);
    setSelectedValues([...selectedValues]);
  };

  const selectGroup = (group) => {
    const groupData = data.filter((c) => c.groupName === group);
    const selectedGroupFilms = selectedValues.filter(
      (c) => c.groupName === group
    );

    if (selectedGroupFilms.length > 0) {
      setSelectedValues((prevState) => [
        ...prevState.filter((c) => c.groupName !== group),
      ]);
    } else {
      setSelectedValues((prevState) => [
        ...prevState,
        ...groupData.filter(
          (c) =>
            c.groupName.toLowerCase().includes(search.toLowerCase()) ||
            c.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  };

  const onAutocompleteChange = (situation, option) => {
    switch (situation) {
      case "removeOption":
        setSelectedValues(
          selectedValues.filter((value) => option?.name !== value.name)
        );
        break;

      case "clear":
        setSelectedValues([]);
        break;
      default:
        break;
    }
  };

  const onChipDelete = (label) => {
    if (label.isGroup) {
      setSelectedValues(() => [
        ...selectedValues.filter((value) => label.value !== value.groupName),
      ]);
      return;
    }

    setSelectedValues(() => [
      ...selectedValues.filter(
        (value) => label.value !== `${value.groupName} - ${value.name}`
      ),
    ]);
  };

  const processLabels = (tagValues) => {
    const labels = [];
    // Create a Set to store unique years
    const uniqueGroups = new Set();

    // Iterate through the data and add unique years to the Set
    tagValues.forEach((item) => {
      uniqueGroups.add(item.groupName);
    });

    uniqueGroups.forEach((value) => {
      if (checkGroup(value.toString())) {
        labels.push({
          isGroup: true,
          value: value.toString(),
        });
      } else {
        tagValues.forEach((option) => {
          if (value === option.groupName) {
            labels.push({
              isGroup: false,
              value: `${option.groupName} - ${option.name}`,
            });
          }
        });
      }
    });

    return labels.map((option, index) => (
      <Chip
        key={index}
        style={{
          backgroundColor: "#EEF4FF",
          color: "#3538CD",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
        label={option.value}
        onDelete={() => onChipDelete(option)}
        className="m-1"
        disabled={isReadOnly}
      />
    ));
  };

  const onGroupExpandClick = (groupName) => {
    data.forEach((d) => {
      if (d.groupName === groupName) {
        d.isExpanded = !d.isExpanded;
      }
    });
    setData(() => [...data]);
  };

  const handleBrowseClick = (e) => {
    e.stopPropagation();
    setBroswePopupOpen(true);
  };

  const handleBrowsePopupClose = () => {
    setBroswePopupOpen(false);
  };

  useEffect(() => {
    dropdownData?.forEach((dropdownValue) => {
      dropdownValue.isExpanded = true;
    });

    dropdownData.sort((a, b) => a.groupName.localeCompare(b.groupName));

    setData([...dropdownData]);
  }, [dropdownData]);

  return (
    <>
      {data?.length > 0 && (
        <div className={`w-full flex items-start ${className}`}>
          <Autocomplete
            multiple
            isOptionEqualToValue={(option, value) => option.id === value.id}
            disableCloseOnSelect
            open={open === undefined ? search.length > 0 : open}
            size={size}
            className="w-full"
            inputValue={search}
            options={data}
            value={selectedValues}
            limitTags={1}
            onBlur={() => setSearch(() => "")}
            readOnly={isReadOnly}
            onChange={(_, __, situation, option) => {
              onAutocompleteChange(situation, option?.option);
            }}
            renderTags={(tagValues) => processLabels(tagValues)}
            groupBy={(option) => option.groupName}
            getOptionLabel={(value) => value.name}
            filterOptions={(options, state) => {
              if (state.inputValue?.length > 0) {
                return options.filter(
                  (option) =>
                    option.groupName
                      .toLowerCase()
                      .includes(state.inputValue.toLowerCase()) ||
                    option.name
                      .toLowerCase()
                      .includes(state.inputValue.toLowerCase())
                );
              }
              return options;
            }}
            renderGroup={(params) => {
              const groupName = params.group.split(",")[0];
              const isExpanded = data.find(
                (d) => d.groupName === groupName
              )?.isExpanded;
              return (
                <div
                  className="cursor-pointer"
                  key={params.key}
                  onClick={() => {
                    onGroupExpandClick(groupName);
                  }}
                >
                  <div className="flex justify-between align-middle">
                    <div
                      className="self-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        selectGroup(groupName);
                      }}
                    >
                      <Checkbox
                        key={params.key}
                        checked={checkGroup(groupName)}
                        indeterminate={checkGroupIndeterminate(groupName)}
                      />
                      <strong>{customOptionLabel(groupName)}</strong>
                    </div>
                    <div>
                      {!isExpanded && (
                        <button
                          type="button"
                          className="bg-transparent border-0"
                        >
                          <ArrowDown />
                          {/* <img src={ArrowDown} alt="arrow down" /> */}
                        </button>
                      )}
                      {isExpanded && (
                        <button
                          type="button"
                          className="bg-transparent border-0"
                        >
                          <ArrowUp />
                          {/* <img src={ArrowUp} alt="arrow up" /> */}
                        </button>
                      )}
                    </div>
                  </div>
                  {isExpanded && params.children}
                </div>
              );
            }}
            renderOption={(props, option, { index }) => (
              <li
                {...props}
                onClick={(e) => {
                  e.stopPropagation();
                  checkOptions(option);
                }}
              >
                <Checkbox
                  key={index}
                  id={option.id}
                  checked={
                    !!selectedValues.find((value) => value.name === option.name)
                  }
                />
                <label
                  className="hover:cursor-pointer"
                  htmlFor={option.id}
                  onClick={(e) => e.preventDefault()}
                >
                  {customOptionLabel(option.name)}
                </label>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder={placeholder}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
              />
            )}
          />
          <button
            className="ml-[-2px] rounded-s-none bg-[#20276F] border-[#20276F] text-white
            shadow-[0_0.063rem_0.125rem_0rem_rgba(16,24,40,0.05)] hover:cursor-pointer hover:bg-[#191F57] rounded-[0.5rem] py-[0.5rem] px-[0.875rem] justify-center items-center border-solid"
            disabled={isReadOnly}
            type="button"
            onClick={handleBrowseClick}
          >
            Browse
          </button>
        </div>
      )}
      {broswePopupOpen && (
        <BrowsePopup
          open={broswePopupOpen}
          handleClose={handleBrowsePopupClose}
          dropdownData={data}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          browsePopupTitle={browsePopupTitle}
        />
      )}
    </>
  );
}
