# API for Sending Emails

## Description

Who has never sent an email?, nowadays if you ask this question to a hundred people I find it difficult for anyone to respond with a no, perhaps people who have not had access to technology, or your grandfather, grandmother, perhaps even your parents, for age account, but even so, I find it difficult that they haven't accessed their gmail or outlook to see if they received any email about their retirement or from the bank itself.

Having an Email is essential for anyone who wants to have a digital life, it is your mailbox in your digital home, and today we can do this magical sending through a package called nodemailer through our APIs, and that is the focus of this API , have this delivery in a more complete way.

## Usage Guide

### Requirements

1. Node.js v20.12.2

### Installation

1. Clone the repository

```Shell
git clone https://github.com/${Your_User}/API-for-Sending-Emails.git
cd API-for-Sending-Emails
```

2. Install the packages

```Shell
npm install
```

Or

```Shell
yarn install
```

3. Run the Service

```Shell
npm run start:dev
```

Or

```Shell
yarn start:dev
```

### How it works

So far we only have two routes, one to register an email host and the other to send your email, I will explain each one but first, like most of the public repositories that I create, I decided to use SQLite so that you, as a developer or enthusiast, If you are just looking for an API to integrate into your system, you only need to install and run it, so from the moment you install and run it, the database file will be created automatically.

### EndPoint email/host/create

Your first EndPoint, you need to enter the host data of your email service first in this endpoint, it is like the configuration of your email sending API, this makes the use of the API more flexible, so you can use more than one service of e-mail.

The request Curl will be available below, when you register your data, analyze the database.db file, your host will be stored there.

```Shell
curl --request POST \
  --url http://localhost:3001/email/host/create \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.1.1' \
  --data '{
	"host":"Your_Host",
	"port": 465,
	"secure": true,
	"auth_user": "YourUser",
	"auth_pass": "YourPass"
}'
```

Save the return of your request or analyze the database to get your host's ID, it will be used in the email sending request.

### EndPoint email/send

This Endpoint will ultimately be used to send your email, I have included the possibility of storing the email that was sent in the database, perhaps I will think of a form of history in the future, or sending recovery, perhaps adding a status field received during sending the email, but at the moment I focused only on the successful sending of the email.

With your host ID in hand, enter the information in the curl below and paste it into your requests tool, insominia or Postman, it's up to you.

```Shell
curl --request POST \
  --url http://localhost:3001/email/send \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.1.1' \
  --data '{
	"host_id": 1,
	"from": "email_sender@email.com",
	"to":"destiny_email@email.com",
	"subject":"Email de Teste",
	"type_message": "html",
	"message": "<h1>TESTESTESTE</h1>"
}'
```

You must be wondering why there is a field called type_message, the answer is simple if you want to send a simple email without style you can simply check "type_message":"text" and send just one message in "message": "Hello World" , at the moment html offers you the possibility of using html tags offering style to your emails.

If you have any questions, I will leave my email address below, I will be happy to help, and if you want to help with a coffee, follow my paypal link.

[![Donate with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=EAM7ZX44FPGUC)

My contacts

email: lincongallo@icloud.com
