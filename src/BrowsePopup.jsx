/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BrowsePopup({
  open,
  handleClose,
  dropdownData,
  selectedValues,
  setSelectedValues,
  browsePopupTitle,
}) {
  const [data, setData] = useState([]);
  const [browseSelectedValues, setBrowseSelectedValues] = useState([]);

  const modifyDropdownData = () => {
    const newData = [];

    for (let index = 0; index < dropdownData.length; index += 1) {
      let isGroupFound = false;
      for (let j = 0; j < newData.length; j += 1) {
        if (newData[j].groupName === dropdownData[index].groupName) {
          isGroupFound = true;
          newData[j].child.push({
            id: dropdownData[index].id,
            name: dropdownData[index].name,
            groupName: dropdownData[index].groupName,
          });
        }
      }
      if (isGroupFound) {
        // eslint-disable-next-line no-continue
        continue;
      }

      newData.push({
        groupName: dropdownData[index].groupName,
        isChecked: false,
        child: [
          {
            id: dropdownData[index].id,
            name: dropdownData[index].name,
            groupName: dropdownData[index].groupName,
          },
        ],
      });
    }

    return newData;
  };

  const onValueClick = (child) => {
    const currentIndex = browseSelectedValues.findIndex(
      (d) => d.name === child.name
    );

    if (currentIndex >= 0) {
      browseSelectedValues.splice(currentIndex, 1);
      setBrowseSelectedValues([...browseSelectedValues]);
      return;
    }

    browseSelectedValues.push(child);
    setBrowseSelectedValues([...browseSelectedValues]);
  };

  const onGroupCheckClick = (e, groupName) => {
    e.stopPropagation();

    const foundGroupIndex = data.findIndex((d) => d.groupName === groupName);
    const groupValues = data[foundGroupIndex].child;

    for (let j = 0; j < groupValues.length; j += 1) {
      const currentIndex = browseSelectedValues.findIndex(
        (d) => d.name === groupValues[j].name
      );

      if (e.target.checked) {
        if (currentIndex < 0) {
          browseSelectedValues.push(groupValues[j]);
        }
      } else {
        browseSelectedValues.splice(currentIndex, 1);
      }
    }

    setBrowseSelectedValues([...browseSelectedValues]);
  };

  const onCancelClick = () => {
    setBrowseSelectedValues([]);
    handleClose();
  };

  const onConfirmClick = () => {
    setSelectedValues([]);
    setSelectedValues(() => [...browseSelectedValues]);
    handleClose();
  };

  const onClearAllClick = () => {
    setBrowseSelectedValues([]);
    setSelectedValues([]);
  };

  const onSelectAllClick = () => {
    if (browseSelectedValues.length === 0) {
      setBrowseSelectedValues(() => []);
      setBrowseSelectedValues(() => [...dropdownData]);
      return;
    }

    setBrowseSelectedValues(() => []);
  };

  const checkGroup = (group) => {
    const groupLength = data.find((c) => c.groupName === group).child?.length;
    const selectedGroupLength = browseSelectedValues.filter(
      (c) => c.groupName === group
    ).length;
    return groupLength === selectedGroupLength;
  };

  const checkGroupIndeterminate = (group) => {
    if (data.length === 0 || browseSelectedValues.length === 0) {
      return false;
    }

    const groupLength = data.find((c) => c.groupName === group).child?.length;
    const selectedGroupLength = browseSelectedValues.filter(
      (c) => c.groupName === group
    ).length;

    if (selectedGroupLength === 0) {
      return false;
    }
    return groupLength !== selectedGroupLength;
  };

  useEffect(() => {
    setData(modifyDropdownData());
    setBrowseSelectedValues([...selectedValues]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownData, selectedValues]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandedChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "0.75rem",
          boxShadow: "none",
        },
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "5px",
      }}
      open={open}
      onClose={onCancelClick}
      fullWidth
      maxWidth="md"
    >
      <div>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div className="flex justify-center items-center my-4">
            <h1 className="text-[#344054] font-semibold">{browsePopupTitle}</h1>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="w-full max-h-[350px]">
            <div className="mx-3">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      dropdownData.length === browseSelectedValues.length
                    }
                    indeterminate={
                      browseSelectedValues.length > 0 &&
                      dropdownData.length !== browseSelectedValues.length
                    }
                  />
                }
                label="Select All"
                onChange={onSelectAllClick}
              />
            </div>
            {data?.map((item) => (
              <Accordion
                key={item.groupName}
                expanded={expanded === item.groupName}
                onChange={handleExpandedChange(item?.groupName)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <FormControlLabel
                    onClick={(e) => e.stopPropagation()}
                    control={
                      <Checkbox
                        checked={checkGroup(item.groupName)}
                        indeterminate={checkGroupIndeterminate(item.groupName)}
                        onChange={(e) => {
                          onGroupCheckClick(e, item.groupName);
                        }}
                      />
                    }
                    label={item.groupName}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col mx-4">
                    {item?.child?.map((option) => (
                      <FormControlLabel
                        key={option.id}
                        control={
                          <Checkbox
                            checked={
                              !!browseSelectedValues.find(
                                (value) => option.name === value.name
                              )
                            }
                            onChange={() => onValueClick(option)}
                          />
                        }
                        label={option.name}
                      />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </DialogContent>
        {/* <DialogActions disableSpacing> */}
        <div className="flex justify-between m-3">
          <button
            className="ml-[-2px] rounded-s-none border-0
               rounded-[0.5rem] py-[0.5rem] px-[0.875rem] justify-center items-center border-solid"
            type="submit"
            onClick={onCancelClick}
          >
            Cancel
          </button>
          <div className="flex justify-between gap-4">
            <button
              className="ml-[-2px] rounded-s-none bg-[#E9EAF2] border-[#E9EAF2] shadow-[0_0.063rem_0.125rem_0rem_rgba(16,24,40,0.05)] hover:bg-primary-100 hover:cursor-pointer
               rounded-[0.5rem] py-[0.5rem] px-[0.875rem] justify-center items-center border-solid"
              type="submit"
              onClick={onClearAllClick}
            >
              Clear All
            </button>
            <button
              className="ml-[-2px] rounded-s-none bg-[#20276F] border-[#20276F] text-white
              shadow-[0_0.063rem_0.125rem_0rem_rgba(16,24,40,0.05)] hover:cursor-pointer hover:bg-[#191F57] rounded-[0.5rem] py-[0.5rem] px-[0.875rem] justify-center items-center border-solid"
              type="submit"
              onClick={onConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
        {/* </DialogActions> */}
      </div>
    </Dialog>
  );
}
