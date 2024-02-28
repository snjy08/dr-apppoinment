import React, { useState } from 'react'
import axios from 'axios'
import {Row ,Col} from 'react-bootstrap'
import RestCard from './RestCard'
import { useEffect } from 'react'

function Allrest() {
  const base_url='http://localhost:3001/docters'
  //to hold array of restaurant data
  const [AllRestData,setAllRestData] = useState([])

  //API fetching
  const fetchData=async()=>{
      const result = await axios.get(base_url)
      console.log(result.data);//array(10)
      setAllRestData(result.data)
  }

  console.log(AllRestData);//array(10)

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
        <Row>
        {
            AllRestData.map(item=>(
              <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard docters={item}/>
              </Col>
            ))
          }
      </Row>
    </div>
  )
}

export default Allrest