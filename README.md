# project

> testing project, nothing to see here

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Clone this repo, cd into it and run the start script with (may need `sudo` depending on your set up)

```./doCoolStuff```

## What to do 
On start up, all data is cleared and some initial accounts are created (with ids 1, 2 and 3). You can then test by creating a transfer from one account ot the other to move money around and create some logs. Then you can query for some service-logs.

## Testing

Simply run `npm test`

## Documentation 

This app opens up 5 Resource Endpoints in order to make deposits, withdrawals and transfers with bank accounts (also has a logging endpoint)

/accounts

represents a bank account
eg: get all bank accounts:

```GET  localhost:3030/accounts```

/deposits

represents a deposit to a bank account. Created as such

``` POST localhost:3030/deposits```
``` 
{
  account: 'xxxxxx', // the account we are depositing to
  amount: 100, // the amount we are depositing
  currency: 'eur' // currency of the amount we are depositing
}
```

/withdrawals

represents a withdrawal from a bank account. Created as such

``` POST localhost:3030/withdrawals```
``` 
{
  account: 'xxxxxx', // the account we are withdrawing from
  amount: 100, // the amount we are withdrawing
  currency: 'eur' // currency of the amount we are withdrawing
}
```

/transfers

represents a transfer from one account to another

``` POST localhost:3030/transfers```
``` 
{
  originAccountId: 'xxxxxx', // the account we are transfering out of
  destinationAccountId: 'xxxxx' // the account we are transfering to
  amount: 100, // the amount we are transfering
  currency: 'eur' // currency of the amount we are transfering
}
```

/service-logs

whenever a deposit/withdrawal/transfer is created, a corresponding log is created.
You can search the logs via their createdAt date by using $gte and $lte as such

``` 
GET localhost:3030/service-logs?createdAt[$gte]=2018-01-01&createdAt[$lte]=2018-08-12 
```

You can also order these by setting sort to 1 or -1

``` 
GET localhost:3030/service-logs?$sort[createdAt]=1  
```
