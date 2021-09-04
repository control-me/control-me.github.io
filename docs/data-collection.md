---
title: "Data collection: Docs - ControlMe"
---

# Data collection
Data collection and analytics is a form of measuring and recording user input and user actions. Analytics is also known as Statistics in the field of Mathematics. Applied to our use case, we will be measuring not only the data being entered to the form, but other metadata including:
- IP address, which can be used to determine approximate user location using free and public APIs
- User agent string
- User geolocation: requires grant of explicit permission
- Navigator language, user language preference set in the browser
- Unique device identifier obtained through browser fingerprinting. Some browsers may prevent this with built-in security features, so it may not be possible unless the submitter is not an anonymous user, in which case it's easy to tell the user's devices apart using the User Agent string or other fingerprinting methods combined with the unique user identifier.
- Preferred theme, dark or light, set at the operating system level.
- Other (TBD)
- TBD: audio and video streams, requires grant of explicit permission

## Explicit permission
It means that the browser will present a dialog box to the user, which they have to confirm to grant the permission. This is built in to the browser and uses the native dialog pop-up control of the operating system. It cannot be disabled or customized, as a security measure superimposed by the browser.
In a broader context, explicit permission just means that the user has explicitly stated that they agree with a certain piece of data being shared. The scope cannot be broad, and the confirmation dialog needs to be presented to the User in the context that piece of data is being used in. For example, a Weather App may use the User's geolocation to determine the weather where the User is currently located. When they choose the "Show weather" action in the interface, the permission dialog is presented to grant explicit permission to the geolocation. The reason is explicitly stated to the User, to be able to retrieve the weather data for the current location. User may also enter is manually, so techically clicking the "Confirm" button is more convenient in this case. If the explicit permission is requested without any context, most users will deny the permission and the data will not be present.

## Implicit premission
This means that by accepting the Privacy Policy document, the user gives implicit permission to us to collect their data. This includes the form data, all metrics and events, listed on this page that do not require explicit permission.
The reasons for collecting this data need to be stated clearly in the Privacy Policy document, as per GDPR compliance.
- The data is being used to improve our product
- The data is shared with the Company tied to the campaign, so they may make data-driven business decisions
- The data collection is anonymous (e.g. names, emails and phone numbers are not tied to the reponse), unless explicit permission has been granted by the user as per GDPR compliance

## Privacy first approach

The Privacy Policy document needs to be updated according to the contents of this page. Generally speaking, the User's privacy needs to be respected at all times and the User needs to be informed about all of the data being collected. Most users will not care and just disregard the link to the Privacy Policy document altogether, however it is a legal requirement to comply with GDPR in the European Economic Area.
In the name of sustainability, I propose a a privacy-first approach: strong focus on data privacy since the trend is clear. People want online privacy. New laws are being made to protect User's data rights. Decentralized networks are gaining traction where the User is the Sole Owner of their data. In most cases, this system is achieved using a public and private key pair. Users may decrypt and read the data they are the Sole Owners of, with their private key. The authenticity can be verified using the public key without accessing their private data.
Having said this, the Explicit Permission mechanism described above should be used instead of the Implicit Permission. That way user's are more aware of the data being shared, and the reasons for it, and the context it's being used in. Of course too many permission dialogs will be bad for UX, so there will have to be a good solution for that. Perhaps a "Privacy settings" section in the profile, to give Users a sense of control. Privacy-first approach also means that we develop our product as if we were very privacy conscious users.
Taking examples of big companies, you may download all of the data tied to Your Profile from the Profile page. Much like Google Takout. This will start an export job on our backend infrastructure and the user will get notified once their download is ready.

## Business aspects
As stated before, Users need to have reasons why to share their data. In our use case, they are willing to share the data with our company, and the company tied to campaign in exchange for a reward. To most users, from the User's perspective their data will be worth less then the actual reward, which will justify their "cost" of sharing it. This needs to be looked as a literal transaction of monetary value. That means both the data and the reward is expressable as currency. For example, to the User, the reward is worth $5, and the data is worth $1. That means users will get 5x return on their "investment", which is good incentive for them to share the data with the company. Of course this is entirely subjective and up to personal judgement.
Once a lot of data is accumulated however, it will be worth a lot more since it can be analyzed to make informed, data-driven business decisions. One piece of data without context is worth less than a massive database of similar records that can be analyzed mathematically and business decisions can be derived from it. Let's suppose, for example, by the time 10,000 records has accumulated, the Company is able to make a business decision that will make them $100,000 of revenue. That makes each individual piece of data (database record) worth $10 to the Company, which justifies the cost of the $5 Reward they have handed out to the Customers plus a $5 profit, bringing the total net profit to $50,000.

## Authorization and Authentication

In order to collect the reward, the user needs to sign in to their account. This is done after the response has already been submitted.