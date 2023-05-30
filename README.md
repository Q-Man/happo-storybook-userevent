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

# update

The issue was fixed here:
https://github.com/happo/happo-plugin-storybook/issues/95

I added another commit to demonstrate a problem with snapshots for slow typing. Snapshots don't wait for `userEvent.type` with a delay to complete when called in a `play` function (but it works with `beforeSnapshot`). 
