# happo-storybook-userevent
This is a demo to show a problem with the happo-plugin-storybook in combination with interactions.

fireEvent interactions work correctly, Happo snapshots and Storybook output look the same.
userEvent interactions are not executed when Happo snapshots are taken, but in Storybook output they are.

# reproduce
`yarn`

`yarn storybook`

"With Fire Event" and "With User Event" both select the radio button (as expected)

`HAPPO_API_KEY=xxx HAPPO_API_SECRET=yyy yarn happo run`

"With Fire Event" snapshot has the radio button selected (as expected), "With User Event" has not (I'd expect selection here, too)
