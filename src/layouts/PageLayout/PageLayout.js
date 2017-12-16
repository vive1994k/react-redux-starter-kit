import React from 'react'
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import './PageLayout.scss';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Select from 'react-select';

class PageLayout extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
      <div className='mockupContainer'>
        <div className='page-layout__topBar'>
          <div className='u-d-inline heading-text'>SyncUp</div>
          <div className='u-d-inline select-container'>
            <Select
              name="form-field-name"
              value={this.state.selectedOption.value}
              onChange={this.handleChange.bind(this)}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
          </div>
        </div>
        <div className='tabs-container'>
          <Tabs>
            <TabLink to="tab1">Total Interaction</TabLink>
            <TabLink to="tab2">New Interaction</TabLink>
            <TabLink to="tab3">Positive</TabLink>
            <TabLink to="tab4">Negative</TabLink>

            <TabContent for="tab1">/* content for tab #1 */</TabContent>
            <TabContent for="tab2">/* content for tab #2 */</TabContent>
            <TabContent for="tab3">/* content for tab #3 */</TabContent>
            <TabContent for="tab4">/* content for tab #4 */</TabContent>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default PageLayout;
