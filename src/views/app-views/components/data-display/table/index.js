/** @jsxImportSource @emotion/react */
import { Component } from "react";
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import IndexMd from "./markdown/index.en-US.md";
import BasicMd from "./markdown/basic.md";
import AjaxMd from "./markdown/ajax.md";
import BorderedMd from "./markdown/bordered.md";
import ColspanRowspanMd from "./markdown/colspan-rowspan.md";
import CustomFilterPanelMd from "./markdown/custom-filter-panel.md";
import DragSortingMd from "./markdown/drag-sorting.md";
import DynamicSettingsMd from "./markdown/dynamic-settings.md";
import EditCellMd from "./markdown/edit-cell.md";
import EditRowMd from "./markdown/edit-row.md";
import EllipsisMd from "./markdown/ellipsis.md";
import ExpandChildrenMd from "./markdown/expand-children.md";
import ExpandMd from "./markdown/expand.md";
import FixedColumnsHeaderMd from "./markdown/fixed-columns-header.md";
import FixedColumnsMd from "./markdown/fixed-columns.md";
import FixedHeaderMd from "./markdown/fixed-header.md";
import GroupingColumnsMd from "./markdown/grouping-columns.md";
import HeadMd from "./markdown/head.md";
import JsxMd from "./markdown/jsx.md";
import MultipleSorterMd from "./markdown/multiple-sorter.md";
import NestedTableMd from "./markdown/nested-table.md";
import ResetFilterMd from "./markdown/reset-filter.md";
import RowSelectionAndOperationMd from "./markdown/row-selection-and-operation.md";
import RowSelectionCustomMd from "./markdown/row-selection-custom.md";
import RowSelectionMd from "./markdown/row-selection.md";
import SizeMd from "./markdown/size.md";
import SummaryMd from "./markdown/summary.md";
import VirtualListMd from "./markdown/virtual-list.md";
import Basic from "./Basic";
import Ajax from "./Ajax";
import Bordered from "./Bordered";
import ColspanRowspan from "./ColspanRowspan";
import CustomFilterPanel from "./CustomFilterPanel";
import DragSorting from "./DragSorting";
import DynamicSettings from "./DynamicSettings";
import EditCell from "./EditCell";
import EditRow from "./EditRow";
import Ellipsis from "./Ellipsis";
import ExpandChildren from "./ExpandChildren";
import Expand from "./Expand";
import FixedColumnsHeader from "./FixedColumnsHeader";
import FixedColumns from "./FixedColumns";
import FixedHeader from "./FixedHeader";
import GroupingColumns from "./GroupingColumns";
import Head from "./Head";
import Jsx from "./Jsx";
import MultipleSorter from "./MultipleSorter";
import NestedTable from "./NestedTable";
import ResetFilter from "./ResetFilter";
import RowSelectionAndOperation from "./RowSelectionAndOperation";
import RowSelectionCustom from "./RowSelectionCustom";
import RowSelection from "./RowSelection";
import Size from "./Size";
import Summary from "./Summary";
import VirtualList from "./VirtualList";
import { css } from "@emotion/react";

export class TableComponent extends Component {
  render() {
    const handleCopy = (content) => {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log("Content copied to clipboard!");
        })
        .catch((error) => {
          console.error("Unable to copy content: ", error);
        });
    };

    const copyContent = (type) => {
      switch (type) {
        case "tableContent":
          console.log("tableContent");
          handleCopy(tableContent);
          break;
        case "paginationContent":
          console.log("paginationContent");
          handleCopy(paginationContent);
          break;
        case "autocomplateContent":
          console.log("autocomplateContent");
          handleCopy(autocomplateContent);
          break;
        case "filterContent":
          console.log("filterContent");
          handleCopy(filterContent);
          break;
        case "checkBoxContent":
          console.log("checkBoxContent");
          handleCopy(checkBoxContent);
          break
        case "ReduxContent":
          console.log("ReduxContent");
          handleCopy(ReduxContent);
          break;
        default:
          break;
      }
    };

    return (
      <div
        css={css`
          tr.drop-over-downward td {
            border-bottom: 2px dashed #1890ff;
          }

          tr.drop-over-upward td {
            border-top: 2px dashed #1890ff;
          }

          .react-resizable {
            position: relative;
            background-clip: padding-box;
          }

          .react-resizable-handle {
            position: absolute;
            width: 10px;
            height: 100%;
            bottom: 0;
            right: -5px;
            cursor: col-resize;
            z-index: 1;
          }
        `}
      >
        <DemoCard code={BasicMd}>
          <div
            onClick={() => {
              copyContent("tableContent");
            }}
          >
            <Basic />
          </div>
        </DemoCard>

        <DemoCard code={JsxMd}>
          <div
            onClick={() => {
              copyContent("paginationContent");
            }}
          >
            <Jsx />
          </div>
        </DemoCard>

        <DemoCard code={RowSelectionMd}>
          <div
            onClick={() => {
              copyContent("autocomplateContent");
            }}
          >
            <RowSelection />
          </div>
        </DemoCard>

        <DemoCard code={RowSelectionAndOperationMd}>
          <div
            onClick={() => {
              copyContent("filterContent");
            }}
          >
            <RowSelectionAndOperation />
          </div>
        </DemoCard>

        <DemoCard code={RowSelectionCustomMd}>
        
          <div
            onClick={() => {
              copyContent("checkBoxContent");
            }}
          >
    <RowSelectionCustom />
  </div>{" "}
        </DemoCard>

        <DemoCard code={HeadMd}>
   <div
            onClick={() => {
              copyContent("ReduxContent");
            }}
          >
          <Head /> </div>{" "}
        </DemoCard>
        <DemoCard code={MultipleSorterMd}>
          <MultipleSorter />
        </DemoCard>
        <DemoCard code={ResetFilterMd}>
          <ResetFilter />
        </DemoCard>
        <DemoCard code={CustomFilterPanelMd}>
          <CustomFilterPanel />
        </DemoCard>
        <DemoCard code={AjaxMd}>
          <Ajax />
        </DemoCard>
        <DemoCard code={SizeMd}>
          <Size />
        </DemoCard>
        <DemoCard code={BorderedMd}>
          <Bordered />
        </DemoCard>
        <DemoCard code={ExpandMd}>
          <Expand />
        </DemoCard>
        <DemoCard code={ColspanRowspanMd}>
          <ColspanRowspan />
        </DemoCard>
        <DemoCard code={ExpandChildrenMd}>
          <ExpandChildren />
        </DemoCard>
        <DemoCard code={FixedHeaderMd}>
          <FixedHeader />
        </DemoCard>
        <DemoCard code={FixedColumnsMd}>
          <FixedColumns />
        </DemoCard>
        <DemoCard code={FixedColumnsHeaderMd}>
          <FixedColumnsHeader />
        </DemoCard>
        <DemoCard code={GroupingColumnsMd}>
          <GroupingColumns />
        </DemoCard>
        <DemoCard code={EditCellMd}>
          <EditCell />
        </DemoCard>
        <DemoCard code={EditRowMd}>
          <EditRow />
        </DemoCard>
        <DemoCard code={NestedTableMd}>
          <NestedTable />
        </DemoCard>
        <DemoCard code={DragSortingMd}>
          <DragSorting />
        </DemoCard>
        <DemoCard code={EllipsisMd}>
          <Ellipsis />
        </DemoCard>
        <DemoCard code={SummaryMd}>
          <Summary />
        </DemoCard>
        <DemoCard code={VirtualListMd}>
          <VirtualList />
        </DemoCard>
        <DemoCard code={DynamicSettingsMd}>
          <DynamicSettings />
        </DemoCard>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default TableComponent;

const tableContent = `import React, { useEffect, useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
const TableData = [
  { fName: "Mark", lName: "Otto", handleBy: "@mdo" },
  { fName: "Jacob", lName: "Thornton", handleBy: "@fat" },
  { fName: "Larry", lName: "the Bird", handleBy: "@twitter" },
];
const ColumnHeader = [
  { title: "First Name", key: "fName" },
  { title: "Last Name", key: "lName" },
  { title: "Handle By", key: "handleBy" },
];
const TablePage = () => {
  const [tableData, setTableData] = useState(TableData);
  const [filters, setFilters] = useState({
    fName: "",
    lName: "",
    handleBy: "",
  });

  //   const setFilterData = (e) => {
  //     setFilters({ ...filters, [e.target.name]: e.target.value });
  //   };
  const autoComplateFunction = (value, columnID, e) => {
     console.log("go11 autoComplateFunctionvalue1",value,columnID,e )
    if (!value) {
      if (e.target.innerText) {
        setFilters({ ...filters, [columnID]: e.target.innerText });
        console.log("autoComplateFunction2", e.target.innerText);
      } else {
        setFilters({ ...filters, [columnID]: "" });
        console.log("autoComplateFunction3", e.target.innerText);
      }
    } else {
      if (typeof value == "number") {
        console.log("autoComplateFunction4", e.target.innerText);
        setFilters({ ...filters, [columnID]: e.target.innerText });
      }else{
         setFilters({ ...filters, [columnID]: value });
      }
    }
  };
  const onHandlekeydown = (value, columnId, e) => {
    const autoSearchOption = extractKeyFromArray(tableData, [columnId]);
    const isElementOfOption = autoSearchOption.includes(e.target.value);

    if (e.key == "Enter") {
        console.log("autoComplateFunctionEnter value",e);
      if (isElementOfOption) {
        console.log("go toFilter,",columnId,value);
        autoComplateFunction(value,columnId,{target:{value:value}})
      } else {
        console.log("go to search",columnId,value);
        autoComplateFunction(value,columnId,{target:{value:value}})
      }

    }
  };
  const IsAllChacked = tableData.every((i, index) => i?.isChacked === true);

  const OnhandleCheckBox = ({ target }) => {
    const { checked, id } = target;
    if (id == "#") {
      if (IsAllChacked) {
        const tempData = tableData.map((i, index) => {
          return { ...i, isChacked: false };
        });
        console.log("test1254 allChacked", IsAllChacked, tempData);
        setTableData(tempData);
      } else {
        const tempData = tableData.map((i, index) => {
          return { ...i, isChacked: true };
        });
        setTableData(tempData);
      }
    } else {
      const tempData = tableData.map((i, index) => {
        return index + 1 == id ? { ...i, isChacked: checked } : { ...i };
      });
      setTableData(tempData);
    }
  };


  useEffect(() => {
    setTableData([]);
    let fnameFilterWord = filters?.fName.length > 0 ? filters?.fName : "";
    let lnameFilterWord = filters?.lName.length > 0 ? filters?.lName : "";
    let handleByFilterWord =
      filters?.handleBy.length > 0 ? filters?.handleBy : "";

    let filterKeyWords = [
      { fName: fnameFilterWord },
      { lName: lnameFilterWord },
      { handleBy: handleByFilterWord },
    ];

    function filterObjectsByKeywords(objectArray, filterKeywords) {
      console.log(objectArray, filterKeywords);
      return objectArray.filter((object) => {
        for (let filterObj of filterKeywords) {
          const field = Object.keys(filterObj)[0];
          const keyword = filterObj[field];

          if (
            !String(object[field]).toLowerCase().includes(keyword.toLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });
    }

    // Filter objects based on keywords
    const filteredObjects = filterObjectsByKeywords(TableData, filterKeyWords);

    // Output the filtered objects
    setTableData(filteredObjects);
  }, [filters]);

  useEffect(() => {
    console.log("tableData", tableData);
    console.log(
      "tableData.every ",
      tableData.some((i, index) => i?.isChacked === true)
    );
  }, [tableData]);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              <div>
                <input
                  type="checkbox"
                  checked={IsAllChacked}
                  name="all"
                  id="#"
                  onChange={OnhandleCheckBox}
                />
              </div>
            </th>
            {ColumnHeader.map((i, index) => {
              return (
                <>
                  <th scope="col">
                    <div>
                      <div>{i.title}</div>
                      <div>
                        <MuiThemeProvider>
                          <Autocomplete
                            style={{ width: "70%" }}
                            options={extractKeyFromArray(tableData, [i.key])}
                            value={""}
                            //   onDoubleClick={() =>
                            //     setFilters({ ...filters, [column.id]: "" })
                            //   }

                            freeSolo
                            onChange={(e) =>
                              autoComplateFunction(e.target.value, i.key, e)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Search..."
                                //   onChange={setFilterData}
                                name={i.key}
                                variant="filled"
                                size="small"
                                //   value={""}
                                onKeyDown={(e) => {
                                  onHandlekeydown(e.target.value, i.key, e);
                                //   console.log("autoComplateFunction54",e.target.value, i.key,)
                                }}

                                InputLabelProps={{
                                  shrink: false,
                                  focused: false,
                                }}
                              />
                            )}
                          />
                        </MuiThemeProvider>
                      </div>
                    </div>
                  </th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((i, index) => {
            return (
              <>
                <tr key={index + 1}>
                  <th scope="row">
                    <div>
                      <input
                        checked={i.isChacked}
                        type="checkbox"
                        name={"record$&{index + 1}"}
                        id={index + 1}
                        onChange={OnhandleCheckBox}
                      />
                    </div>
                  </th>
                  <td>{i.fName}</td>
                  <td>{i.lName}</td>
                  <td>{i.handleBy}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablePage;

function extractKeyFromArray(arr, key) {
  return arr.map((item) => item[key]);
}
`;

const paginationContent = `.pageSpotBox{
    display: flex;
    width: 25rem;
    justify-content: space-around;
}

.displayNone{
    display: none;
}

.squre{
    -webkit-text-security: square;
}

.test{
    color: red;
}

.pageElement{
    font-size: 2rem;
}

.PageBox{
    height: 40vw;
}
.paginationDiv{
    width: 100%;
    display: flex;
    justify-content: center;
}
.pointer{
    cursor: pointer;
}









export const pageData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed ac dui aliquam, efficitur sapien ut, consectetur nunc.",
  "Integer euismod purus vel libero vehicula congue.",
  "Vivamus ultrices quam eget dui eleifend, eu placerat tellus suscipit.",
  "Praesent ut felis ac mi congue ultrices.",
  "Fusce dignissim turpis eu ante fermentum cursus.",
  "Donec non sem non nisl tristique hendrerit.",
  "Nullam volutpat magna vitae nibh feugiat, id volutpat sapien ullamcorper.",
  "Cras tincidunt nunc id ipsum mattis, eget interdum mi commodo.",
  "Vestibulum in quam nec orci aliquet pellentesque.",
  "Maecenas consectetur velit nec odio commodo, et volutpat mauris lobortis.",
  "Phasellus vitae risus sed lorem elementum tincidunt.",
  "Ut non sapien malesuada, consequat nisi vitae, luctus sapien.",
  "Aenean vitae nunc dapibus, maximus nunc at, efficitur lacus.",
  "Quisque luctus elit at erat efficitur fringilla.",
  "In tincidunt leo non volutpat mattis.",
  "Morbi bibendum quam in enim varius ullamcorper.",
  "Vivamus pharetra felis et tincidunt vehicula.",
  "Suspendisse eget lorem vel nisi commodo bibendum.",
  "Pellentesque eleifend dui a ultrices congue.",
  "Nam et urna a ipsum efficitur dapibus.",
  "Curabitur fringilla risus sit amet justo consequat eleifend.",
  "Proin auctor enim sit amet turpis hendrerit iaculis.",
  "Aliquam rhoncus augue ac purus cursus, nec tristique eros consectetur.",
  "Vivamus a metus sed dolor consectetur cursus.",
  "Nulla sollicitudin odio vitae metus interdum consectetur.",
  "Fusce tristique ex vitae risus mattis, ut consectetur ligula tempus.",
  "Nunc et purus tristique, faucibus ipsum vel, feugiat ex.",
  "Sed fermentum lectus sed consectetur dignissim.",
  "Etiam sed urna sed ipsum dapibus sagittis.",
  "Phasellus vulputate libero sed ex tincidunt feugiat.",
];



import React, { useState } from "react";
import "./pagination.css";
import { pageData as data } from "./pageData";
const itemsPerPage = 2; // Number of items to display per page

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  let halfLength = (pageNumbers.length / 2) | 0;
  const dotElement =
    pageNumbers.indexOf(currentPage) <= halfLength
      ? currentPage + 2
      : currentPage - 2;
  return (
    <div>
      {/* Render the current items */}
      <div className="PageBox">
        <ul>
          {currentItems.map((item) => (
            <li className="pageElement" key={item.id}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="paginationDiv">
        <div className="pageSpotBox">
          <div>
            <span className="pointer" onClick={() => setCurrentPage(1)}>
              ⏪
            </span>
            <span
              className="pointer"
              onClick={() =>
                setCurrentPage(
                  currentPage === 1 ? currentPage : currentPage - 1
                )
              }
            >
              ◀️
            </span>
          </div>

          {pageNumbers.map((pageNumber) => (
            <div
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              style={{
                fontWeight: pageNumber === currentPage ? "bold" : "normal",
                cursor: "pointer",
              }}
              className={"$&{
                [
                  1,
                  currentPage + 2,
                  currentPage - 2,
                  pageNumbers[pageNumbers.length - 1],
                  currentPage,
                  currentPage - 1,
                  currentPage + 1
                ].includes(pageNumber)
                  ? ''
                  : 'displayNone'
              } "}
            >
              {[currentPage + 2, currentPage - 2].includes(pageNumber) ? (
                <>
                  {[1, pageNumbers[pageNumbers.length - 1]].includes(
                    pageNumber
                  ) ? (
                    pageNumber
                  ) : (
                    <div>o o o</div>
                  )}
                </>
              ) : (
                pageNumber
              )}
            </div>
          ))}
          <div>
            <span
              className="pointer"
              onClick={() =>
                setCurrentPage(
                  currentPage === pageNumbers[pageNumbers.length - 1]
                    ? pageNumbers[pageNumbers.length - 1]
                    : currentPage + 1
                )
              }
            >
              ▶️
            </span>
            <span
              className="pointer"
              onClick={() =>
                setCurrentPage(pageNumbers[pageNumbers.length - 1])
              }
            >
              ⏩
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
`;

const autocomplateContent = `

import { MuiThemeProvider } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function extractKeyFromArray(arr, key) {
  return arr.map((item) => item[key]);
}

const autoComplateFunction = (value, columnID, e) => {
     console.log("go11 autoComplateFunctionvalue1",value,columnID,e )
    if (!value) {
      if (e.target.innerText) {
        setFilters({ ...filters, [columnID]: e.target.innerText });
        console.log("autoComplateFunction2", e.target.innerText);
      } else {
        setFilters({ ...filters, [columnID]: "" });
        console.log("autoComplateFunction3", e.target.innerText);
      }
    } else {
      if (typeof value == "number") {
        console.log("autoComplateFunction4", e.target.innerText);
        setFilters({ ...filters, [columnID]: e.target.innerText });
      }else{
         setFilters({ ...filters, [columnID]: value });
      }
    }
  };
  const onHandlekeydown = (value, columnId, e) => {
    const autoSearchOption = extractKeyFromArray(tableData, [columnId]);
    const isElementOfOption = autoSearchOption.includes(e.target.value);

    if (e.key == "Enter") {
        console.log("autoComplateFunctionEnter value",e);
      if (isElementOfOption) {
        console.log("go toFilter,",columnId,value);
        autoComplateFunction(value,columnId,{target:{value:value}})
      } else {
        console.log("go to search",columnId,value);
        autoComplateFunction(value,columnId,{target:{value:value}})
      }

    }
  };

   <div>
                        <MuiThemeProvider>
                          <Autocomplete
                            style={{ width: "70%" }}
                            options={extractKeyFromArray(tableData, [i.key])}
                            value={""}
                            //   onDoubleClick={() =>
                            //     setFilters({ ...filters, [column.id]: "" })
                            //   }

                            freeSolo
                            onChange={(e) =>
                              autoComplateFunction(e.target.value, i.key, e)
                            }
                            //    onKeyDown={(e)=>{onHandlekeydown(e.target.value,i.key,e)}}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Search..."
                                //   onChange={setFilterData}
                                name={i.key}
                                variant="filled"
                                size="small"
                                //   value={""}
                                onKeyDown={(e) => {
                                  onHandlekeydown(e.target.value, i.key, e);
                                //   console.log("autoComplateFunction54",e.target.value, i.key,)
                                }}

                                InputLabelProps={{
                                  shrink: false,
                                  focused: false,
                                }}
                              />
                            )}
                          />
                        </MuiThemeProvider>
                      </div>
  `;

const filterContent = `
  const [tableData, setTableData] = useState(TableData);
const [filters, setFilters] = useState({
    fName: "",
    lName: "",
    handleBy: "",
  });
  useEffect(() => {
    setTableData([]);
    let fnameFilterWord = filters?.fName.length > 0 ? filters?.fName : "";
    let lnameFilterWord = filters?.lName.length > 0 ? filters?.lName : "";
    let handleByFilterWord =
      filters?.handleBy.length > 0 ? filters?.handleBy : "";

    let filterKeyWords = [
      { fName: fnameFilterWord },
      { lName: lnameFilterWord },
      { handleBy: handleByFilterWord },
    ];

    function filterObjectsByKeywords(objectArray, filterKeywords) {
      console.log(objectArray, filterKeywords);
      return objectArray.filter((object) => {
        for (let filterObj of filterKeywords) {
          const field = Object.keys(filterObj)[0];
          const keyword = filterObj[field];

          if (
            !String(object[field]).toLowerCase().includes(keyword.toLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });
    }

    // Filter objects based on keywords
    const filteredObjects = filterObjectsByKeywords(TableData, filterKeyWords);

    // Output the filtered objects
    setTableData(filteredObjects);
  }, [filters]);`;

const checkBoxContent = `
  const IsAllChacked = tableData.every((i, index) => i?.isChacked === true);
const OnhandleCheckBox = ({ target }) => {
    const { checked, id } = target;
    if (id == "#") {
      if (IsAllChacked) {
        const tempData = tableData.map((i, index) => {
          return { ...i, isChacked: false };
        });
        console.log("test1254 allChacked", IsAllChacked, tempData);
        setTableData(tempData);
      } else {
        const tempData = tableData.map((i, index) => {
          return { ...i, isChacked: true };
        });
        setTableData(tempData);
      }
    } else {
      const tempData = tableData.map((i, index) => {
        return index + 1 == id ? { ...i, isChacked: checked } : { ...i };
      });
      setTableData(tempData);
    }
  };`;



const ReduxContent  =`//App.js////////////////////////////////////////////////////////////////////////////

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { ApiCall } from "./action";
import TablePage from "./CRUD/Table";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter App</h1>
      <div>
        <button onClick={() => dispatch(ApiCall())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <TablePage/>
      </div>
    </div>
  );
}

export default App;
 


//Slice///////////////////////////////////////////////////////////////////////////////////

import { createSlice } from '@reduxjs/toolkit';
import { ApiCall } from './action';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {
      state.value=action.payload
      console.log("action",action)
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;



//Action////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { increment, decrement } from "./counterSlice";
export const ApiCall = (params)=>(dispatch)=>{
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY"
});
// return "$&{"result"}"
var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

   fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
//   .then(response => response.text())
  .then(result =>result.json())
  .then(response =>{ console.log("result",response[0].height); dispatch(increment(response[0].height))})
  .catch(error => console.log('error', error)); 
}


//Reducer/////////////////////////////////////////////////////////////////////////////////////////////
// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 
import { combineReducers } from 'redux'; 
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
 
    counter: counterReducer,
  
}); 

const store = createStore(
  rootReducer, // Combine all your reducers here
  applyMiddleware(thunk)
);

export default store;

// reducers/index.js

 ;

`


