# mobilab-project

> test project for mobilab

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

run the start script with 

```./doCoolStuff```


## Testing

Simply run `npm test`

## Documentation 

This app opens up 4 Resource Endpoints in order to make deposits, withdrawals and transfers with bank accounts

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
