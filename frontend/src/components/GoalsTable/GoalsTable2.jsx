import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import useAuth from './hooks/useAuth';
import axios from 'axios';

const GoalsTable = (props) => {
  const { goals } = props;
  const [user, token] = useAuth();
  const [data, setData] = useState([])

  const navigate = useNavigate();


  async function fetchGoals() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/goals/').then((res) => {
        setData(res.data.data)
      }), {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setGoals(response.data);
      console.log('Goal data: ', response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const columns =  [
    {field: "title", headerName: "Title", width: 90},
    {field: "", headerName: "", width: 100},
    {field: "", headerName: "", width: 100},
    {field: "", headerName: "", width: 100},
  ]

  const rows = data.map((row) => ({
    id: row.id,
    
  })


  return <div></div>;
};
export default GoalsTable;
