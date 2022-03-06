# Papa xSanc Coffe & Resto

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /menus`
- `GET /orders`
- `POST /menus`
- `GET /menus/:menusId`

Routes below need authentication & authorization:

- `PUT /menus/:menusId`
- `DELETE /menus/:menusId`
- `PATCH /menus/:menusId`
- `PATCH /orders/:id`


Routes for Public / customer not need authentication

- `POST /pub/login`
- `POST /pub/register`
- `GET /pub/menus`
- `GET /pub/menus/:menusId`

Routes for Public / Customer need authentication

- `POST /pub/orders/:id`
- `GET /pub/orders`

&nbsp;

## ADMIN PAGE
&nbsp;

## GET /register

>user register

Request : 

- body: 
```json
{
	"email": "String",
	"password": "String",
	"phoneNumber": "String",
	"address": "String",
}
```
Response : 

_Response (201 - Create)_
```json
{
	"id": 2,
	"email": "admin@mail.com"
}
```

_Response (500 - Server Disable)_
```json
{
"message": "server disable"
}
```
&nbsp;

## GET /login
>user login to get access Token

Request :

- body: 
```json
{
	"email": "String",
	"password": "String",
}
```
Response :


_Response (200 - OKE)_
```json
{
	"accessToken": "token access"
}
```
_Response (401 - unauthorized)_
```json
{
	"message": "invalid email or password"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## GET /menus
>Get all menus

Request: 
- access_token: 
```json
{
	"token": "String"
}
```
Response: 

_Response (200 - oke)_
```json
{
	"data": [
		{
			"id": 10,
			"name": "Wine America",
			"description": "dibuat bagus di sana",
			"price": "170000",
			"imageUrl": "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_960_720.jpg",
			"status": "sold",
			"UserId": 1,
			"CategoryId": 6,
			"createdAt": "2022-03-06T18:09:15.418Z",
			"updatedAt": "2022-03-06T18:15:06.633Z",
			"User": {
				"id": 1,
				"email": "test@mail.com",
				"role": "admin",
				"phoneNumber": "5675672",
				"address": "Taliwang"
			},
			"Category": {
				"id": 6,
				"name": "Wine",
				"createdAt": "2022-03-06T15:01:30.174Z",
				"updatedAt": "2022-03-06T15:01:30.174Z"
			}
		},
		{
			"id": 9,
			"name": "Kopi Rarak",
			"description": "enak banget loh dari jaman dahulu",
			"price": "15000",
			"imageUrl": "https://cdn.pixabay.com/photo/2019/11/25/16/20/african-4652424_960_720.jpg",
			"status": "available",
			"UserId": 1,
			"CategoryId": 2,
			"createdAt": "2022-03-06T18:08:11.927Z",
			"updatedAt": "2022-03-06T18:08:11.927Z",
			"User": {
				"id": 1,
				"email": "test@mail.com",
				"role": "admin",
				"phoneNumber": "5675672",
				"address": "Taliwang"
			},
			"Category": {
				"id": 2,
				"name": "Juice",
				"createdAt": "2022-03-06T15:01:30.174Z",
				"updatedAt": "2022-03-06T15:01:30.174Z"
			}
		}
	],
	"user": {
		"id": 1,
		"email": "test@mail.com",
		"role": "admin"
	}
}
```

_Response (500 - Server Disable)_
```json
{
"message": "server disable"
}
```
&nbsp;

## GET /orders
>Get all orders

Request: 
- access_token: 
```json
{
	"token": "String"
}
```
Response: 

_Response (200 - oke)_
```json
[
	{
		"id": 2,
		"MenusId": 6,
		"TableId": 4,
		"UserId": 4,
		"statusOrder": "complate",
		"createdAt": "2022-03-06T15:58:19.744Z",
		"updatedAt": "2022-03-06T17:25:37.189Z",
		"Menu": {
			"id": 6,
			"name": "Burger Lovano Loveto",
			"description": "menggunakan daging wagyu dan di import langsung dari jepun",
			"price": "10000",
			"imageUrl": "https://media.istockphoto.com/photos/-picture-id1282700695?s=612x612",
			"status": "available",
			"UserId": 1,
			"CategoryId": 3
		},
		"Table": {
			"id": 4,
			"name": "table 4"
		},
		"User": {
			"id": 4,
			"email": "yudi@mail.com",
			"role": "customer",
			"phoneNumber": "08181818181",
			"address": "Mataram"
		}
	}
]
```

_Response (500 - Server Disable)_
```json
{
"message": "server disable"
}
```
&nbsp;


## POST /menus
> Create new menus

Request :
- Headers : 
```json
{
	"token": "String"
}
```
_Response (201 - Created)_

```json
{
	"id": 10,
	"name": "Wine America",
	"description": "dibuat bagus di sana",
	"price": "170000",
	"imageUrl": "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_960_720.jpg",
	"UserId": 1,
	"CategoryId": 6,
	"updatedAt": "2022-03-06T18:09:15.418Z",
	"createdAt": "2022-03-06T18:09:15.418Z",
	"status": "available"
}
```

_Response (400 - Bad Request)_
```json
{
	"message": [
		"Name tidak boleh kosong",
		"Price Minimal 10000"
	]
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## GET /menus/:menusId
> Find menus by Id

Request :
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"id": 2,
	"name": "Burger Lovano Loveto",
	"description": "menggunakan daging wagyu dan di import langsung dari jepun",
	"price": "10000",
	"imageUrl": "https://media.istockphoto.com/photos/-picture-id1282700695?s=612x612",
	"status": "available",
	"UserId": 1,
	"CategoryId": 3,
	"createdAt": "2022-03-06T15:02:47.964Z",
	"updatedAt": "2022-03-06T15:02:47.964Z",
	"User": {
		"email": "test@mail.com",
		"role": "admin",
		"address": "Taliwang",
		"phoneNumber": "5675672"
	},
	"Category": {
		"id": 3,
		"name": "Snacks",
		"createdAt": "2022-03-06T15:01:30.174Z",
		"updatedAt": "2022-03-06T15:01:30.174Z"
	}
}
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## PUT /menus/:menusId
> Update menus by Id

Request : 

- Headers : 
```json
{
	"email": "String",
	"password": "String",
	"phoneNumber": "String",
	"address": "String",
}
```
_Response (200 - OK)_
```json
[
	{
		"id": 7,
		"name": "Burger King pink",
		"description": "menggunakan daging wagyu dan di import langsung dari jepun",
		"price": "30000",
		"imageUrl": "menggunakan daging wagyu dan di import langsung dari jepun",
		"status": "available",
		"UserId": 1,
		"CategoryId": 1,
		"createdAt": "2022-03-05T21:02:44.316Z",
		"updatedAt": "2022-03-06T06:30:58.415Z"
	}
]
```

_Response (400 - Bad Request)_
```json
{
	"message": [
		"Name tidak boleh kosong",
		"descripsi tidak boleh kosong",
		"Price Minimal 10000"
	]
}
```
_Response (403 - Forbidden)_
```json
{
	"message": "forbidden"
}
```
_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```

## DELETE /menus/:menusId
> Delete menus by Id

Request :
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"message": "{menus.name} success to delete"
}
```
_Response (403 - Forbidden)_
```json
{
	"message": "forbidden"
}
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## PATCH /menus/:menusId
> Update Status menus by Id

Request: 
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"menus": [
		{
			"id": 7,
			"name": "Burger King pink",
			"description": "menggunakan daging wagyu dan di import langsung dari jepun",
			"price": "30000",
			"imageUrl": "menggunakan daging wagyu dan di import langsung dari jepun",
			"status": "available",
			"UserId": 1,
			"CategoryId": 1,
			"createdAt": "2022-03-05T21:02:44.316Z",
			"updatedAt": "2022-03-06T13:19:36.006Z"
		}
	]
}
```
_Response (403 - Forbidden)_
```json
{
	"message": "forbidden"
}
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;

## PATCH /orders/:id
> Update Status order by Id

Request: 
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"order": [
		{
			"id": 2,
			"MenusId": 6,
			"TableId": 4,
			"UserId": 4,
			"statusOrder": "complate",
			"createdAt": "2022-03-06T15:58:19.744Z",
			"updatedAt": "2022-03-06T17:25:37.189Z"
		}
	]
}
```
_Response (403 - Forbidden)_
```json
{
	"message": "forbidden"
}
```

_Response (404 - Not Found)_
```json
{
	"message": "Not Found"
}
```

_Response (500 - Server Disable)_
```json
{
	"message": "server disable"
}
```
&nbsp;



## Customer/Public Page 

## PUB /pub/register
>register for customer and automaticly role customer

Request :

- body: 
```json
{
	"email": "String",
	"password": "String",
	"phoneNumber": "String",
	"address": "String",
}
```

_Response 201 (created)_
```json
{
	"id": 1,
	"email": "d@mail.com"
}
```
_Response 400 (bad request)_
```json
{
	"message": [
		"Validation isEmail on email failed"
	]
}
```
_Response 400 (bad request)_
```json
{
	"message": [
		"password minimal 5 character"
	]
}
```
&nbsp;

## PUB /pub/login
>rlogin for customer

Request :

- body: 
```json
{
	"email": "String",
	"password": "String"
}
```
_Response 401 (unauthorized)_
```json
{
	"message": "invalid email or password"
}
```
&nbsp;


## GET /pub/order
> get all bookmarks with authorize login

Request : 
- Headers : 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
- body: 
```json
[
	{
		"id": 4,
		"MenusId": 10,
		"TableId": 4,
		"UserId": 5,
		"statusOrder": "waiting",
		"createdAt": "2022-03-06T18:59:33.462Z",
		"updatedAt": "2022-03-06T18:59:33.462Z",
		"Menu": {
			"id": 10,
			"name": "Wine America",
			"description": "dibuat bagus di sana",
			"price": "170000",
			"imageUrl": "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_960_720.jpg",
			"status": "sold",
			"UserId": 1,
			"CategoryId": 6
		},
		"Table": {
			"id": 4,
			"name": "table 4"
		}
	}
]
```
&nbsp;

## POST /pub/order/:id
> POST order by id

Request :

- Headers: 
```json
{
	"token": "String"
}
```

_Response (200 - OK)_
```json
{
	"id": 4,
	"MenusId": 10,
	"UserId": 5,
	"TableId": 4,
	"updatedAt": "2022-03-06T18:59:33.462Z",
	"createdAt": "2022-03-06T18:59:33.462Z",
	"statusOrder": "waiting"
}role": "customer"
}
```
&nbsp;

## get /pub/menus/:id
> POST menus by id

_Response (200 - OK)_
```json
{
	"id": 4,
	"name": "Burger Lovano Loveto",
	"description": "menggunakan daging wagyu dan di import langsung dari jepun",
	"price": "10000",
	"imageUrl": "https://media.istockphoto.com/photos/-picture-id1282700695?s=612x612",
	"status": "available",
	"UserId": 1,
	"CategoryId": 3,
	"createdAt": "2022-03-05T19:28:15.181Z",
	"updatedAt": "2022-03-05T19:28:15.181Z",
	"User": {
		"id": 1,
		"email": "test@mail.com",
		"role": "admin",
		"phoneNumber": "5675672",
		"address": "Taliwang"
	},
	"Category": {
		"id": 3,
		"name": "Snacks"
	}
}
```
&nbsp;

## get /pub/menus
> GET menus by id

_Response (200 - OK)_
```json
[
	{
		"id": 9,
		"name": "Kopi Rarak",
		"description": "enak banget loh dari jaman dahulu",
		"price": "15000",
		"imageUrl": "https://cdn.pixabay.com/photo/2019/11/25/16/20/african-4652424_960_720.jpg",
		"status": "available",
		"UserId": 1,
		"CategoryId": 2,
		"createdAt": "2022-03-06T18:08:11.927Z",
		"updatedAt": "2022-03-06T18:08:11.927Z",
		"User": {
			"id": 1,
			"email": "test@mail.com",
			"role": "admin",
			"phoneNumber": "5675672",
			"address": "Taliwang"
		},
		"Category": {
			"id": 2,
			"name": "Juice",
			"createdAt": "2022-03-06T15:01:30.174Z",
			"updatedAt": "2022-03-06T15:01:30.174Z"
		}
	},
	{
		"id": 11,
		"name": "",
		"description": "dibuat bagus di sana",
		"price": "170000",
		"imageUrl": "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_960_720.jpg",
		"status": "available",
		"UserId": 1,
		"CategoryId": 6,
		"createdAt": "2022-03-06T18:54:43.605Z",
		"updatedAt": "2022-03-06T18:54:43.605Z",
		"User": {
			"id": 1,
			"email": "test@mail.com",
			"role": "admin",
			"phoneNumber": "5675672",
			"address": "Taliwang"
		},
		"Category": {
			"id": 6,
			"name": "Wine",
			"createdAt": "2022-03-06T15:01:30.174Z",
			"updatedAt": "2022-03-06T15:01:30.174Z"
		}
	}
]
```
&nbsp;












