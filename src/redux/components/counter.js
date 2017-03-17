/**
 * Created by warren on 3/16/17.
 */
import React, {Component, PropTypes} from 'react'
import {Button} from 'react-bootstrap'

const counter = ({count, incrementCounter}) => (
  <div>
    <h1>Counter</h1>
    <h1>{count}</h1>
    <Button bsSize="large" onClick={() => incrementCounter()}/>
  </div>
);

export default counter