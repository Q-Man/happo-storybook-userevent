import React from 'react'
import {userEvent, screen} from "@storybook/testing-library"

const Test = () => {
  return <div>
    <input type="radio" name="test" id="test1"/>
    <label htmlFor="test1">test1</label>
    <input type="radio" name="test" id="test2"/>
    <label htmlFor="test2">test2</label>
    <input type="text" id="test3" data-testid="test3" style={{width: '250px'}}/>
  </div>
}

const meta = {component: Test}

export const Default = {}

const play = async () => {
  await userEvent.click(screen.getByLabelText('test2'))
  await userEvent.type(screen.getByTestId('test3'), 'hello world I am a bit a longer text', {delay: 100})
}

export const WithBeforeScreenshot = {
  parameters: {
    happo: {
      // complete snapshot, works as expected
      beforeScreenshot: play,
    }
  }
}

export const WithUserEvent = {
  // incomplete snapshot, doesn't wait for complete typing
  play
}

export default meta
