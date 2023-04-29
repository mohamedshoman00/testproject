import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAsyncDebounce } from "react-table";

const GloblaFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChangeHandler = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);
  return (
    <>
      <div>
        <Form.Control
          className="ps-3"
          style={{ width: "220px", borderRadius: "20px" }}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChangeHandler(e.target.value);
          }}
          placeholder={`Search Data`}
        />
      </div>
    </>
  );
};

export default GloblaFilter;
