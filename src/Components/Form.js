import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' name="name" />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' name="address"/>
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input placeholder='Price' name="price" />
    </Form.Field>
    <Form.Field>
      <label>Latitude</label>
      <input placeholder='Latitude' name="latitude" />
    </Form.Field>
    <Form.Field>
      <label>Longitude</label>
      <input placeholder='Longitude' name="longitude" />
    </Form.Field>
    <Button type='submit'>Create New Listing</Button>
  </Form>
)

export default FormExampleForm