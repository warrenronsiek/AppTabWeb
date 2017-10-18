import React from 'react'
import {Collapse, FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col, Button} from 'react-bootstrap'
import centsIntToString from '../../common/centsIntToString'
import stringToCentsInt from '../../common/stringToCentsInt'
const tagProcessor = string => string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ');

const styles = {
  formGroup: {
    width: '50%',
    position: 'relative',
    margin: 'auto',
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '50px'
  },
  button: {
    marginRight: '10px',
    width: '130px'
  },
  collapseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
};

const ActiveItemForm = ({viewState, activeItem, editItem, updateOptionSetName, updateOption, addOption, updateItem, cancelEditing, addOptionSet}) => (
  <div style={styles.collapseContainer}>
    <Collapse in={viewState === 'editingMenuItem'}>
      <div>
        <form style={{width: '500px'}}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' value={activeItem.name}
                         onChange={text => editItem(activeItem.itemId, text.target.value, activeItem.description, activeItem.price, activeItem.category, activeItem.tags, activeItem.optionSets, activeItem.venueId)}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl type='text' value={activeItem.description}
                         onChange={text => editItem(activeItem.itemId, activeItem.name, text.target.value, activeItem.price, activeItem.category, activeItem.tags, activeItem.optionSets, activeItem.venueId)}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <FormControl type='text' value={activeItem.price ? centsIntToString(activeItem.price) : '0'}
                         onChange={text => editItem(activeItem.itemId, activeItem.name, activeItem.description, stringToCentsInt(text.target.value), activeItem.category, activeItem.tags, activeItem.optionSets, activeItem.venueId)}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Category</ControlLabel>
            <FormControl type='text' value={activeItem.category}
                         onChange={text => editItem(activeItem.itemId, activeItem.name, activeItem.description, activeItem.price, text.target.value, activeItem.tags, activeItem.optionSets, activeItem.venueId)}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Tags</ControlLabel>
            <FormControl type='text' value={activeItem.tags.reduce((accum, str) => accum + ' ' + str, '').slice(1)}
                         onChange={text => editItem(activeItem.itemId, activeItem.name, activeItem.description, activeItem.price, activeItem.category, tagProcessor(text.target.value), activeItem.optionSets, activeItem.venueId)}/>
            <HelpBlock>Enter tags separated by spaces.</HelpBlock>
          </FormGroup>
        </form>
        {activeItem.optionSets.map(optionSet => (
          <div key={optionSet.optionSetId}>
            <form style={{width: '450px', marginLeft: '25px', marginRight: '25px'}}>
              <FormGroup>
                <ControlLabel>Option Set Name</ControlLabel>
                <FormControl type='text' value={optionSet.optionSetName}
                             onChange={text => updateOptionSetName(optionSet.optionSetId, text.target.value)}/>
              </FormGroup>
              {optionSet.data.map(option => (
                <div style={{marginLeft: '20px', marginRight: '20px'}} key={option.optionId}>
                  <Grid style={{width: '100%'}}>
                    <Row>
                      <Col sm={6}>
                        <FormGroup style={{display: 'inlineBlock'}}>
                          <ControlLabel>Option Name</ControlLabel>
                          <FormControl type='text' value={option.optionName}
                                       onChange={text => updateOption(optionSet.optionSetId, option.optionId, text.target.value, option.price)}/>
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup style={{display: 'inlineBlock'}}>
                          <ControlLabel>Option Price</ControlLabel>
                          <FormControl type='text' value={option.price ? centsIntToString(option.price) : '0'}
                                       onChange={text => updateOption(optionSet.optionSetId, option.optionId, option.optionName, stringToCentsInt(text.target.value))}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Grid>
                </div>
              ))}
              <div style={styles.buttonContainer}>
                <Button style={styles.button} onClick={() => addOption(optionSet.optionSetId)}>Add Option</Button>
              </div>
            </form>
          </div>
        ))}
        <div style={styles.buttonContainer}>
          <Button style={styles.button} onClick={() => updateItem(activeItem.itemId, activeItem.name, activeItem.description, activeItem.price, activeItem.category, activeItem.tags, activeItem.optionSets, activeItem.venueId)}>Done</Button>
          <Button style={styles.button} onClick={() => cancelEditing()}>Cancel</Button>
          <Button style={styles.button} onClick={() => addOptionSet()}>Add Option Set</Button>
        </div>
      </div>
    </Collapse>
  </div>
);

export default ActiveItemForm