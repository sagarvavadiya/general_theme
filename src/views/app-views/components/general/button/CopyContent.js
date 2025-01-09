import React from 'react';
import { Button } from 'antd';
import {
  ApiCall,
  CRUD,
  horizontalTree,
  ReduxData,
  Routing,
  verticalTree,
} from './Content';

class CopyContent extends React.Component {
  render() {
    const handleCopy = content => {
      navigator.clipboard
        .writeText(content)
        .then(() => {})
        .catch(error => {});
    };

    const copyContent = type => {
      switch (type) {
        case 'Rtr':
          handleCopy(Routing);
          break;
        case 'ApiC':
          handleCopy(ApiCall);
          break;
        case 'paginationContent':
          handleCopy(paginationContent);
          break;
        case 'crd':
          handleCopy(CRUD);
          break;
        case 'filterContent':
          handleCopy(filterContent);
          break;
        case 'checkBoxContent':
          handleCopy(checkBoxContent);
          break;

        case 'RDX data':
          handleCopy(ReduxData);
          break;
        case 'SearchFilter':
          handleCopy(SearchFilter);
          break;
        case 'vtree':
          handleCopy(verticalTree);
          break;
        case 'htree':
          handleCopy(horizontalTree);
          break;
        case 'Smartbutton':
          handleCopy(
            Routing +
              ApiCall +
              CRUD +
              checkBoxContent +
              ReduxData +
              verticalTree +
              horizontalTree,
          );
          break;
        default:
          break;
      }
    };

    const buttonArray = [
      { title: 'RDX data' },
      { title: 'Rtr' },
      { title: 'ApiC' },
      { title: 'crd' },
      { title: 'vtree' },
      { title: 'htree' },
      { title: 'paginationContent' },
      { title: 'filterContent' },
      { title: 'checkBoxContent' },
      { title: 'SearchFilter' },
      { title: 'Smartbutton' },
    ];
    return (
      <div>
        {buttonArray.map(i => {
          return (
            <>
              <Button
                type='primary'
                block
                onClick={() => {
                  copyContent(i.title);
                }}
              >
                {i.title}
              </Button>
            </>
          );
        })}
      </div>
    );
  }
}

export default CopyContent;

const TodoContent = `function updateOrDeleteFromDatabase(database, newRecord, action) {
    // Step 1: Check if the new record has all required keys
    const requiredKeys = ['id', 'name', 'description', 'status', 'parentTask', 'createdAt'];
    const missingKeys = requiredKeys.filter(key => !Object.keys(newRecord).includes(key));
    if (missingKeys.length > 0) {
        console.error('Missing keys in new record: %{missingKeys.join(', ')}');
        return;
    }
    const parentId = newRecord.parentTask;
    // Step 2: Perform action based on the provided action parameter
    switch(action) {
        case 'add':
            // If parentTask is null, add as new record with an empty childTask array
            if (newRecord.parentTask === null) {
                database[newRecord.id] = {...newRecord, childTask: []};
            } else {
                // If parentTask is not null, find the corresponding parent record and append as a sub-record

                if (!database[parentId]) {
                    console.error('Parent task with ID $%{parentId} not found.');
                    // return;
                }
                if (!Array.isArray(database[parentId].childTask)) {
                    console.error('Child task for parent task with ID $%{parentId} is not an array.');
                    // return;
                }
                database[parentId].childTask.push(newRecord);
            }
            break;
        case 'update':
            // Find the record by ID and update it
            if (newRecord.parentTask === null){
            if (database[newRecord.id]) {
                database[newRecord.id] = {...database[newRecord.id], ...newRecord};
            } else {
                console.error('Record with ID $%{newRecord.id} not found.');
            }}else{
              database[parentId].childTask[newRecord.id] = newRecord;
            }
            break;
        case 'delete':
            // Find the record by ID and delete it
              if (newRecord.parentTask === null){
            if (database[newRecord.id]) {
                delete database[newRecord.id];
            } else {
                console.error('Record with ID $%{newRecord.id} not found.');
            }
            }else{
              delete database[parentId].childTask[newRecord.id];
            }
            break;
        default:
            console.error('Invalid action: $%{action}');
    }
    return database
}

// Example usage:
const database = {
    1: {id: 1, name: 'Main Task 1', description: 'Description 1', status: 'Pending', parentTask: null, createdAt: '2024-03-05', childTask: []},
    2: {id: 2, name: 'Main Task 2', description: 'Description 2', status: 'Completed', parentTask: null, createdAt: '2024-03-06', childTask: []}
};

const newRecord1 = {id: 1, name: 'Sub Task 1__', description: 'Description 1', status: 'Pending', parentTask: 1, createdAt: '2024-03-07'};
const newRecord2 = {id: 4, name: 'Sub Task 2', description: 'Description 2', status: 'Pending', parentTask: 1, createdAt: '2024-03-08'};
const newRecord3 = {id: 5, name: 'Sub Task 3', description: 'Description 3', status: 'Pending', parentTask: 2, createdAt: '2024-03-09'};


// console.log(updateOrDeleteFromDatabase(database, newRecord1, "add")[1]);
// console.log(updateOrDeleteFromDatabase(database, newRecord1, "update")[1]);
console.log(updateOrDeleteFromDatabase(database, newRecord1, "delete")[1]);
 `;

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

const paginationContent = `

import React, { useEffect } from 'react';

const Pagination = ({
  setCurrentPageData,
  setCurrentPage,
  currentPage,
  data,
  itemsPerPage,
}) => {
  // Calculate the index range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Change the current page
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Generate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentPageData(currentItems);
  }, [currentPage]);
  return (
    <>
      <style jsx>
        {
          .pageSpotBox {
            display: flex;
            width: 25rem;
            justify-content: space-around;
          }

          .displayNone {
            display: none;
          }

          .squre {
            -webkit-text-security: square;
          }

          .test {
            color: red;
          }

          .pageElement {
            font-size: 2rem;
          }

          .PageBox {
            height: 40vw;
          }
          .paginationDiv {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .pointer {
            cursor: pointer;
          }
        }
      </style>
      <div>
        {/* Render the current items */}

        <div className='paginationDiv'>
          <div className='pageSpotBox'>
            <div>
              <span className='pointer' onClick={() => setCurrentPage(1)}>
                ⏪
              </span>
              <span
                className='pointer'
                onClick={() =>
                  setCurrentPage(
                    currentPage === 1 ? currentPage : currentPage - 1,
                  )
                }
              >
                ◀️
              </span>
            </div>

            {pageNumbers.map(pageNumber => (
              <div
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  fontWeight: pageNumber === currentPage ? 'bold' : 'normal',
                  cursor: 'pointer',
                }}
                className={{
                  [
                    1,
                    currentPage + 2,
                    currentPage - 2,
                    pageNumbers[pageNumbers.length - 1],
                    currentPage,
                    currentPage - 1,
                    currentPage + 1,
                  ].includes(pageNumber)
                    ? ''
                    : 'displayNone'
                } }
              >
                {[currentPage + 2, currentPage - 2].includes(pageNumber) ? (
                  <>
                    {[1, pageNumbers[pageNumbers.length - 1]].includes(
                      pageNumber,
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
                className='pointer'
                onClick={() =>
                  setCurrentPage(
                    currentPage === pageNumbers[pageNumbers.length - 1]
                      ? pageNumbers[pageNumbers.length - 1]
                      : currentPage + 1,
                  )
                }
              >
                ▶️
              </span>
              <span
                className='pointer'
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
    </>
  );
};

export default Pagination;


import React, { useState } from 'react';
import Pagination from '../components/pagination';
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const itemsPerPage = 2; // Number of items to display per page
  const data = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed ac dui aliquam, efficitur sapien ut, consectetur nunc.',
    'Integer euismod purus vel libero vehicula congue.',
    'Vivamus ultrices quam eget dui eleifend, eu placerat tellus suscipit.',
    'Praesent ut felis ac mi congue ultrices.',
    'Fusce dignissim turpis eu ante fermentum cursus.',
    'Donec non sem non nisl tristique hendrerit.',
    'Nullam volutpat magna vitae nibh feugiat, id volutpat sapien ullamcorper.',
    'Cras tincidunt nunc id ipsum mattis, eget interdum mi commodo.',
    'Vestibulum in quam nec orci aliquet pellentesque.',
    'Maecenas consectetur velit nec odio commodo, et volutpat mauris lobortis.',
    'Phasellus vitae risus sed lorem elementum tincidunt.',
    'Ut non sapien malesuada, consequat nisi vitae, luctus sapien.',
    'Aenean vitae nunc dapibus, maximus nunc at, efficitur lacus.',
    'Quisque luctus elit at erat efficitur fringilla.',
    'In tincidunt leo non volutpat mattis.',
    'Morbi bibendum quam in enim varius ullamcorper.',
    'Vivamus pharetra felis et tincidunt vehicula.',
    'Suspendisse eget lorem vel nisi commodo bibendum.',
    'Pellentesque eleifend dui a ultrices congue.',
    'Nam et urna a ipsum efficitur dapibus.',
    'Curabitur fringilla risus sit amet justo consequat eleifend.',
    'Proin auctor enim sit amet turpis hendrerit iaculis.',
    'Aliquam rhoncus augue ac purus cursus, nec tristique eros consectetur.',
    'Vivamus a metus sed dolor consectetur cursus.',
    'Nulla sollicitudin odio vitae metus interdum consectetur.',
    'Fusce tristique ex vitae risus mattis, ut consectetur ligula tempus.',
    'Nunc et purus tristique, faucibus ipsum vel, feugiat ex.',
    'Sed fermentum lectus sed consectetur dignissim.',
    'Etiam sed urna sed ipsum dapibus sagittis.',
    'Phasellus vulputate libero sed ex tincidunt feugiat.',
  ];
  return (
    <div>
      <div className='PageBox'>
        <ul>
          {currentPageData.map(item => (
            <li className='pageElement' key={item.id}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        setCurrentPageData={setCurrentPageData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        data={data}
      />
    </div>
  );
};

export default Home;

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
 const data = [
  { name: 'Sagar', email: 'admin@ds.com', date: 1698787200000 },
  { name: 'Arya', email: 'arya@xyz.com', date: 1698873600000 },
  { name: 'Maya', email: 'maya@abc.com', date: 1698960000000 },
  { name: 'John', email: 'john@company.com', date: 1699046400000 },
  { name: 'Sagar', email: 'sagar@company.com', date: 1699132800000 },
  { name: 'Sophia', email: 'sophia@mail.com', date: 1699219200000 },
  { name: 'Ryan', email: 'ryan@network.com', date: 1699305600000 },
  { name: 'Liam', email: 'liam@web.com', date: 1699392000000 },
  { name: 'Emma', email: 'emma@tech.com', date: 1699478400000 },
  { name: 'Olivia', email: 'olivia@edu.com', date: 1699564800000 },
];

function filterSearch(option, filterValue) {
  const { name, email, startDate, endDate } = filterValue;

  if (option === 'filter') {
    // Filter objects based on exact match
    return data.filter(
      item =>
        (name ? item.name === name : true) &&
        (email ? item.email === email : true) &&
        (startDate ? item.date >= startDate : true) &&
        (endDate ? item.date <= endDate : true),
    );
  } else if (option === 'search') {
    // Search objects based on inclusion of keyword or exact date match
    return data.filter(
      item =>
        (name ? item.name.toLowerCase().includes(name.toLowerCase()) : false) ||
        (email
          ? item.email.toLowerCase().includes(email.toLowerCase())
          : false) ||
        (startDate && item.date === startDate) || // Exact match for startDate
        (endDate && item.date === endDate), // Exact match for endDate
    );
  } else {
    return [];
  }
}

// Example usage
const filterValue = {
  name: 'Sagar',
  email: 'admin@ds.com',
  startDate: 1698787200000,
  endDate: 1699132800000,
};
console.log('Filter Results:', filterSearch('filter', filterValue)); // Filter example
console.log(
  'Search Results:',
  filterSearch('search', { name: 'Sagar', startDate: 1698787200000 }),
); // Search example

 `;

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

const SearchFilter = `

"@mui/material": "^5.15.12",
    "@mui/styled-engine-sc": "^6.0.0-alpha.17",
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StoreSearchFilterValue } from "../../reduxStore/Action/bookApiAction";

function TransformData(array) {
  let transformedArray = [];

  array.forEach((obj) => {
    for (let key in obj) {
      let value = obj[key];
      let lable = obj[key];


      transformedArray.push({ label: lable, value: value });
    }
  });

  // Remove duplicates from the array
  transformedArray = transformedArray.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((o) => o.label === obj.label && o.value === obj.value)
  );

  return transformedArray;
}
const demoData = [
  {
    _id: "65e15cb07628745bacc07367",
    name: "test",
    author: "teradasda",
    currentAvailability: false,
    createdAt: "2024-03-01T04:42:24.264Z",
    updatedAt: "2024-03-11T21:39:52.081Z",
  },
  {
    _id: "65e07055ad4db737345399b4",
    name: "dadadddd",
    author: "dadada",
    currentAvailability: true,
    createdAt: "2024-02-29T11:53:57.063Z",
    updatedAt: "2024-03-10T16:01:06.192Z",
  },
  {
    _id: "65e06fefad4db737345399ae",
    name: "ljkl",
    author: "tjko",
    currentAvailability: true,
    createdAt: "2024-02-29T11:52:15.522Z",
    updatedAt: "2024-03-01T05:01:14.284Z",
  },
];

export default function AutoComplatete() {
  const dispatch = useDispatch();
  const BookListState = useSelector((state) => state.book);
  const [bookData, setBookData] = React.useState([]);
  const onHandleClick = (e) => {
    dispatch(StoreSearchFilterValue({ type: "search", data: e.target.value }));
  };

  const onHandleChange = (e) => {
    if (!e.target.value) {
      dispatch(StoreSearchFilterValue({ type: "search", data: "" }));
    }
  };

  const onHandleKey = (e) => {
    if (e.key === "Enter") {
      dispatch(
        StoreSearchFilterValue({
          type: "search",
          data: e.target.value.trim(),
        })
      );
    }
  };

  React.useEffect(() => {
    console.log("React.useEffect", BookListState);
    const bookList = BookListState?.BookResponse?.data?.data ?? [];
    TransformData(bookList);
    setBookData(TransformData(demoData));
  }, [BookListState]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={bookData}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
      onChange={onHandleChange}
      onKeyDown={onHandleKey}
      onSelect={onHandleClick}
    />
  );
}


//////////////////////////////////////////////////// FILTER //////////////////////////////////////////////////////


import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StoreSearchFilterValue } from "../../../reduxStore/Action/bookApiAction";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MultipleSelectCheckmarks({ allPropsData }) {
  const [personName, setPersonName] = React.useState([]);
  const { filterData, setFilterData, data } = allPropsData;
  const { title, valueList } = data;

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;
    const dataForStore = typeof value === "string" ? value.split(",") : value;
    setPersonName(dataForStore);
    setFilterData({ ...filterData, [title]: dataForStore });
  };

  const checkBoxValue = (name) => {
    const valueArray = filterData[title] || [];
    return valueArray.indexOf(name);
  };

  const ReturnName = (value) => {
    const newValue = value;

    if (typeof newValue == "boolean") {
      if (newValue) {
        return "Available";
      } else {
        return "Unavailable";
      }
    } else {
      return newValue;
    }
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          {$title.toUpperCase()}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          name={title}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {valueList?.map((name) => (
            <MenuItem key={name} value={name}>
              {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
              <Checkbox checked={checkBoxValue(name) > -1} />
              <ListItemText primary={ReturnName(name)} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
function RemoveDuplicates(array) {
  return Array.from(new Set(array));
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const demoData = [
  {
    _id: "65e15cb07628745bacc07367",
    name: "test",
    author: "teradasda",
    currentAvailability: false,
    createdAt: "2024-03-01T04:42:24.264Z",
    updatedAt: "2024-03-11T21:39:52.081Z",
  },
  {
    _id: "65e07055ad4db737345399b4",
    name: "dadadddd",
    author: "dadada",
    currentAvailability: true,
    createdAt: "2024-02-29T11:53:57.063Z",
    updatedAt: "2024-03-10T16:01:06.192Z",
  },
  {
    _id: "65e06fefad4db737345399ae",
    name: "ljkl",
    author: "tjko",
    currentAvailability: true,
    createdAt: "2024-02-29T11:52:15.522Z",
    updatedAt: "2024-03-01T05:01:14.284Z",
  },
];

function CollectValuesByKey(array) {
  let result = [];

  // Iterate over each object in the array
  array.forEach((obj) => {
    // Iterate over each key in the object
    Object.keys(obj).forEach((key) => {
      // Check if the title already exists in the result array
      let existingTitleIndex = result.findIndex((item) => item.title === key);
      if (existingTitleIndex === -1) {
        // If the title doesn't exist, add it with the current value as an array
        result.push({ title: key, valueList: [obj[key]] });
      } else {
        // If the title already exists, push the current value to its array
        result[existingTitleIndex].valueList.push(obj[key]);
      }
    });
  });

  return result;
}

export default function FilterComponent() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [bookData, setBookData] = React.useState([]);
  const [filterData, setFilterData] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const BookListState = useSelector((state) => state.book);
  const allPropsData = {
    filterData: filterData,
    setFilterData: setFilterData,
  };

  const onHandleFilter = () => {
    dispatch(StoreSearchFilterValue({ type: "filter", data: filterData }));
    handleClose();
  };
  React.useEffect(() => {
    const OptionObject = CollectValuesByKey(demoData ?? []);
    setBookData(OptionObject);
  }, [BookListState]);

  React.useEffect(() => {
    console.log(filterData);
  }, [open]);
  return (
    <div>
      <ul className="cs_mp0">
        <li className={"active"}>
          <span onClick={handleOpen}>Filter</span>
        </li>
      </ul>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter
          </Typography>
          {bookData?.map((i, index) => {
            return (
              <>
                <div key={index}>
                  <MultipleSelectCheckmarks
                    allPropsData={{
                      ...allPropsData,
                      data: {
                        ...i,
                        valueList: RemoveDuplicates(i?.valueList ?? []),
                      },
                    }}
                  />
                </div>
              </>
            );
          })}
          <div className="d-flex justify-content-end">
            <button className="btn btn-success" onClick={onHandleFilter}>
              Click For Filter
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
////////////////////////////////////// Function To return filter data ///////////////////////////////////////

const filteredData = FilterAndSearchData({
      data: BookListState?.BookResponse?.data?.data ?? [],
      filterObject: filterObject ?? {},
      searchString: searchString,
      priority: "filter", // or "search", depending on your preference
    });
    setBookList(filteredData);

export function FilterAndSearchData({
  data,
  filterObject,
  searchString,
  priority,
}) {
  console.log(
    "data125456",
    data,
    "filterObject",
    filterObject,
    "searchString",
    searchString,
    "priority",
    priority
  );
  let filteredData = [...data];

  // Apply filtering based on filterObject
  if (priority.toLowerCase() === "filter") {
    filteredData = filteredData.filter((obj) => {
      for (let key in filterObject) {
        if (!filterObject[key].includes(obj[key])) {
          return false;
        }
      }
      return true;
    });

    // Apply searching based on searchString
    if (searchString.trim() !== "") {
      filteredData = filteredData.filter((obj) => {
        for (let key in obj) {
          if (
            typeof obj[key] === "string" &&
            obj[key].toLowerCase().includes(searchString.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
    }
  } else if (priority.toLowerCase() === "search") {
    // Apply searching based on searchString
    if (searchString.trim() !== "") {
      filteredData = filteredData.filter((obj) => {
        for (let key in obj) {
          if (
            typeof obj[key] === "string" &&
            obj[key].toLowerCase().includes(searchString.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
    }

    // Apply filtering based on filterObject
    filteredData = filteredData.filter((obj) => {
      for (let key in filterObject) {
        if (!filterObject[key].includes(obj[key])) {
          return false;
        }
      }
      return true;
    });
  }

  return filteredData;
}



`;

const EditObject = `function updateNestedObjectByRef(rootObject, updateValues) {
  // Helper function to recursively update nested objects
  function updateObjectByRef(obj, ref, value) {
    const keys = ref.split("/");
    let currentObj = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!currentObj[keys[i]]) {
        // If the intermediate key does not exist, create an empty object
        currentObj[keys[i]] = {};
      }
      currentObj = currentObj[keys[i]];
    }
    currentObj[keys[keys.length - 1]] = value;
  }

  // Iterate over the update values and update the root object
  for (let ref in updateValues) {
    if (ref.includes("/")) {
      // If the reference contains "/", update the nested object
      updateObjectByRef(rootObject, ref, updateValues[ref]);
    } else {
      // Otherwise, update the root object directly
      rootObject[ref] = updateValues[ref];
    }
  }

  return rootObject;
}

// Example usage:
const rootObject = {
  a: {
    child1: 10,
    child2: {
      grandchild1: 5,
      grandchild2: { nestedchild1: { grandchild_c1: 5 } },
    },
  },
  b: 4,
  c: { child_c1: 10, child_c2: { grandchild_c1: 5 } },
};

const updateValues = {
  b: 20,
  "a/child2/grandchild2/nestedchild1/grandchild_c1": 5000,
  "c/child_c1": 30,
};

const updatedObject = updateNestedObjectByRef(rootObject, updateValues);
console.log(updatedObject["a"]["child2"]);
`;

const crudApp = `

import React, { useEffect, useState } from "react";
import DataTable from "./table";
import { API_END_POINT } from "../../Helper/constant";
import {
  GET_API,
  POST_API,
  PUT_API,
  DELETE_API,
} from "../../Helper/functionHelper";

const ManageData = () => {
  const [data, setData] = useState([]);
  const GetData = () => {
    GET_API(API_END_POINT.get_employees)
      .then((res) => {
        setData(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const AddData = (body) => {
    POST_API(API_END_POINT.get_employees, body)
      .then((res) => {
        // setData(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const UpdateData = (id) => {
    const sData = {
      email: "lllllllllllll",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    };
    PUT_API({API_END_POINTget_employees}/{id}, sData)
      .then((res) => {
        GetData();
        // setData(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const DeletData = (id) => {
    DELETE_API(API_END_POINTl.get_employees}/{id})
      .then((res) => {
        GetData();
        // setData(res.data.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetData();
  }, []);

  const allProps = {
    data: data,
    AddData: AddData,
    UpdateData: UpdateData,
    DeletData: DeletData,
  };
  return (
    <div>
      <DataTable allProps={allProps} />
    </div>
  );
};

export default ManageData;


//////////////////////////////////////////////Table //////////////////////////////////
import React from "react";

const DataTable = ({ allProps }) => {
  const { data, AddData, UpdateData, DeletData } = allProps;

  const tableColumn = [
    { title: "Id", field: "id" },
    { title: "Email", field: "email" },
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Avatar", field: "avatar" },
    { title: "Action", field: "action" },
  ];
  const test = () => {
    console.log(data);
  };
  return (
    <div className="TableComponent">
      <div className="container">
        <h1 onClick={test}>Responsive Table</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
              {tableColumn.map((i, index) => {
                return (
                  <>
                    <th key={ }>{i.title}</th>
                  </>
                );
              })}
            </tr>
            {data.map((i, index) => {
              return (
                <>
                  <tr key={ }>
                    <td> {i.id}</td>
                    <td>{i.email}</td>
                    <td>{i.first_name}</td>
                    <td>{i.last_name}</td>
                    <td>{i.avatar}</td>
                    <td>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => UpdateData(i.id)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => DeletData(i.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <h3>Resize Me</h3>
      </div>
    </div>
  );
};

export default DataTable;
//////////////////////////////////////////////helper/////////////////////////////////////////////////////
import axios from "axios";

export const POST_API = (url, body) => {
  return new Promise((Response, Reject) => {
    axios
      .post(url, body)
      .then((res) => Response(res))
      .catch((err) => Reject(err));
  });
};

export const GET_API = (url) => {
  return new Promise((Response, Reject) => {
    axios
      .get(url)
      .then((res) => Response(res))
      .catch((err) => Reject(err));
  });
};

export const PUT_API = (url, body) => {
  return new Promise((Response, Reject) => {
    axios
      .put(url, body)
      .then((res) => Response(res))
      .catch((err) => Reject(err));
  });
};

export const DELETE_API = (url) => {
  return new Promise((Response, Reject) => {
    axios
      .delete(url)
      .then((res) => Response(res))
      .catch((err) => Reject(err));
  });
};

`;
