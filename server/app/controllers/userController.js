var express = require('express')

exports.index = function () {
  res.send([{
      name: 'sith',
      email: 'gthell@google.com'
    },
    {
      name: 'raa',
      email: 'noob@google.com'
    },
    {
      name: 'wt',
      email: 'wt@google.com'
    }
  ])
}