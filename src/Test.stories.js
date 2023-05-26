import React from 'react'
import {userEvent, screen, fireEvent} from "@storybook/testing-library"

const Test = () => {
  return <div>
    <input type="radio" name="test" id="test1"/>
    <label htmlFor="test1">test1</label>
    <input type="radio" name="test" id="test2"/>
    <label htmlFor="test2">test2</label>
  </div>
}

const meta = {component: Test}

export const Default = {}

export const WithFireEvent = {
  play: async () => {
    await fireEvent.click(screen.getByLabelText('test2'))
  }
}

export const WithUserEvent = {
  play: async () => {
    await userEvent.click(screen.getByLabelText('test2'))
  }
}

export default meta
