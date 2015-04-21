# simple firebase watcher
this thing is dead simple. it watches a single firebase for changes. on every change, the page is erased and redrawn with the values in the firebase.

## getting new info
post messages to your firebase and they'll update.

the script (only) works well with firebase references of the following type:

    {
      name: "user name",
      phone: "user phone number",
      status: "user status"
    }

when any of those values are updated, the html will be adjusted.

have fun. 
