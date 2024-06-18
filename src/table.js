// table.js

import React from 'react';


const Table =({data}) => {


    return (
            <table>
          <thead>
            <tr>
              <th>name</th>
              <th>phone number</th>
              <th>last_seen</th>
              <th>register</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>{row.last_seen}</td>
                <td>{row.register}</td>
              </tr>
            ))}
          </tbody>
        </table>

    );
};


export default Table;