import React from 'react'
import {
  Collapse,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Grid,
  Row,
  Col,
  Button,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap'
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
  },
  buttonToolBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex'
  }
};

const ActiveItemForm = ({viewState, activeItem, editItem, updateOptionSetName, updateOption, addOption, updateItem, cancelEditing, addOptionSet, venueTimeRanges, updateTimeRanges}) => (
  <div style={styles.collapseContainer}>
    <Collapse in={viewState === 'editingMenuItem'}>
      <div>
        <form style={{width: '500px'}}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' value={activeItem.itemName}
                         onChange={text => editItem({...activeItem, itemName: text.target.value})}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl type='text' value={activeItem.itemDescription}
                         onChange={text => editItem({...activeItem, itemDescription: text.target.value})}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Expanded Description</ControlLabel>
            <FormControl componentClass='textarea' value={activeItem.extendedDescription}
                         onChange={text => editItem({...activeItem, extendedDescription: text.target.value})}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <FormControl type='text' value={activeItem.price ? centsIntToString(activeItem.price) : '0'}
                         onChange={text => editItem({...activeItem, price: stringToCentsInt(text.target.value)})}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Category</ControlLabel>
            <FormControl type='text' value={activeItem.category}
                         onChange={text => editItem({...activeItem, category: text.target.value})}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Tags</ControlLabel>
            <FormControl type='text' value={activeItem.tags.reduce((accum, str) => accum + ' ' + str, '').slice(1)}
                         onChange={text => editItem({...activeItem, tags: tagProcessor(text.target.value)})}/>
            <HelpBlock>Enter tags separated by spaces.</HelpBlock>
          </FormGroup>
        </form>
        <div style={styles.buttonToolBarContainer}>
          <ButtonToolbar style={{marginRight: '10px'}}>
            <ToggleButtonGroup type='checkbox' value={activeItem.timeRanges}
                               onChange={values => updateTimeRanges(values)}>
              {venueTimeRanges.map(timeRange => (
                <ToggleButton key={timeRange.id} value={timeRange.id}>{timeRange.name}</ToggleButton>))}
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>
        {activeItem.itemOptions.map(optionSet => (
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
          <Button style={styles.button}
                  onClick={() => updateItem({...activeItem})}>Done</Button>
          <Button style={styles.button} onClick={() => cancelEditing()}>Cancel</Button>
          <Button style={styles.button} onClick={() => addOptionSet()}>Add Option Set</Button>
        </div>
      </div>
    </Collapse>
  </div>
);

export default ActiveItemForm