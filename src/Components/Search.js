import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'
import '../Pages/home.css' 

class SearchBox extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
      <Grid>
        <Grid.Column width={6}>
          <Search
            className="search"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

export default SearchBox;
