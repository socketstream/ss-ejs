SS-EJS
===

EJS (HTML) code wrapper for SocketStream 0.3



Install
---

    npm install ss-ejs

Usage
---

Add this line of code to your app.js file:

    ss.client.formatters.add(require('ss-ejs'));

Passing variables to your ejs view files
---

In the app.js file, pass locals to your view template like this:


    ss.client.formatters.add(require('ss-ejs'), {locals: {user: 'Paul'}});

Then, in your views/app.ejs file, load the SocketStream headers like this:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <%- SocketStream %>
        <title>Welcome</title>
      </head>

And use the local variables in your ejs template like this:

    <h3>Quick Chat Demo for <%= locals.user %></h3>


TODO
---

I've noticed that how we pass local variables to our ejs template isn't flexible in terms of having multiple ejs view templates with different local variables. I will look to resolve this issue in the near future.