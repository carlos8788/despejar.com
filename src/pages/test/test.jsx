import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyComponent = () => {
    const columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ];

    return (
        <div className="" style={{ height: 400, width: 600 }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
        </div>
    );
};

export default MyComponent;
