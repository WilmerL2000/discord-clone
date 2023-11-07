<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">Discord Clone</h1>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306004/GitHub/discord-clone/home_akmwsy.webp" width="100%" >
  <p align="center">
    <a href="https://chat-app-orpin-one.vercel.app/" target="_blank">Web Page</a>
  </p>
</div>

## Test User

- Email:
  ```
   test@gmail.com
  ```
- Password:
  ```
   Test123
  ```
  <br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>
    <strong>
        Table of Contents
    </strong>
  </summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#desktop">Desktop</a></li>
        <li><a href="#mobile">Mobile</a></li>
      </ul>
    </li>
    <li>
      <a href="#api">API</a>
      <ul>
        <li><a href="#routes-list">Routes List</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a Full Stack Discord Clone developed with Next.js 13, React, Tailwind, Prisma, PostgreSQL, Shadcn UI and Socket.io. Which has some of the features and functionalities of the original application.

### Features

- Real-time messaging using Socket.io.
- Send attachments as messages using UploadThing.
- Delete & Edit messages in real time for all users.
- Create Text, Audio and Video call Channels.
- 1:1 conversation between members.
- 1:1 video calls between members.
- Member management (Kick, Role change Guest / Moderator).
- Unique invite link generation & full working invite system.
- Infinite loading for messages in batches of 10 (@tanstack/query).
- Server creation and customization.
- Beautiful UI using TailwindCSS and ShadcnUI.
- Full responsivity and mobile UI.
- Light / Dark mode.
- Websocket fallback: Polling with alerts .
- Authentication with Clerk.

### Tech Stack

<table>
    <tr>
      <td align="center" width="96">          
        <br><strong>Tech</strong>
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/image_20211214122557_0_h9qr5m.png" width="48" height="48" alt="Next.js" />
        <br><strong>Next.js</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487163/GitHub/assets/react_original_logo_icon_146374_whazfv.png" width="48" height="48" alt="React" />
        <br><strong>React</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1691279171/GitHub/assets/FxoIFVgagAE-gqB_cmvwxg.png" width="48" height="48" alt="Shadcn" />
        <br><strong>Shadcn</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_typescript_official_icon_130107_svjybp.png" width="48" height="48" alt="TypeScript" />
        <br><strong>TypeScript</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487162/GitHub/assets/file_type_tailwind_icon_130128_mwu7ie.png" width="48" height="48" alt="Tailwind CSS" />
        <br><strong>Tailwind CSS</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1692338137/GitHub/assets/clerk_komgg5.png" width="48" height="48" alt="Clerk" />
        <br><strong>Clerk</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682537001/GitHub/assets/axios_hhohil.png" width="48" height="48" alt="Axios" />
        <br><strong>Axios</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682489027/GitHub/assets/zustand_dyq4zd.png" width="64" height="48" alt="Zustand" />
        <br><strong>Zustand</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1686199264/GitHub/assets/prisma_she1mb.png" width="64" height="48" alt="Prisma" />
        <br><strong>Prisma</strong>        
      </td>      
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1686199544/GitHub/assets/reacthookform_kekzdz.png" width="64" height="48" alt="React Hook Form" />
        <br><strong>React Hook Form</strong>        
      </td>     
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1698952641/GitHub/assets/Socket-io.svg_frtsfg.png" width="64" height="48" alt="Socket.io" />
        <br><strong>Socket.io</strong>        
      </td>     
      <td align="center" width="96">
          <img src="https://res.cloudinary.com/wils09/image/upload/v1682487163/GitHub/assets/postgresql_plain_logo_icon_146389_xfwnsd.png" width="64" height="48" alt="PostgreSQL" />
        <br><strong>PostgreSQL</strong>        
      </td>      
    </tr>
     <tr>
      <td align="center" width="96">          
        <br><strong>Version</strong>
      </td>      
      <td align="center" width="96">
        <br>13.5.4
      </td>      
      <td align="center" width="96">
        <br>18.2.0
      </td>      
      <td align="center" width="96">
      </td>      
      <td align="center" width="96">
        <br>5.0.0
      </td>      
      <td align="center" width="96">
        <br>3.0.0
      </td>      
      <td align="center" width="96">
        <br>4.25.2
      </td>      
      <td align="center" width="96">
        <br>1.5.1
      </td>      
      <td align="center" width="96">
        <br>4.4.3
      </td>      
      <td align="center" width="96">
        <br>5.4.1
      </td>      
      <td align="center" width="96">
        <br>7.47.0
      </td>     
      <td align="center" width="96">
        <br>4.7.2
      </td>     
      <td align="center" width="96">
      </td>     
    </tr>
  </table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Desktop

<div align="center">
  <div>
    <h3> Create Server Modal</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306048/GitHub/discord-clone/create_server_b0jguw.webp" width="100%" >
  </div>
  <div>
    <h3>Create Channel Modal</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306847/GitHub/discord-clone/create_channel_ebtjgc.webp" width="100%" >
  </div>
  <div>
    <h3>Search Command Dialog</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306049/GitHub/discord-clone/search_typquy.webp" width="100%" >
  </div>
  <div>
    <h3> Manage Members Modal</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306049/GitHub/discord-clone/members_rucyns.webp" width="100%" >
  </div>
  <div>
    <h3>Audio, Video Room</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306050/GitHub/discord-clone/room_qymmy0.webp" width="100%" >
  </div>
  <div>
    <h3>1 to 1 Text Chat</h3>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699306051/GitHub/discord-clone/One_to_One_cba79w.webp" width="100%" >
  </div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Mobile

<div align="center">
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699307605/GitHub/discord-clone/mobile1_or0rvd.webp" width="100%" >
  </div>
  <div>
    <img src="https://res.cloudinary.com/wils09/image/upload/v1699307605/GitHub/discord-clone/mobile2_xznna2.webp" width="100%" >
  </div>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

_Follow the instructions below_

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WilmerL2000/discord-clone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setup `.env` file

   ```js
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=

    DATABASE_URL=

    LIVEKIT_API_KEY=
    LIVEKIT_API_SECRET=
    NEXT_PUBLIC_LIVEKIT_URL=
   ```

4. Connect to DB and Push Prisma

   ```shell
    npx prisma generate
    npx prisma db push
   ```

5. Start the app
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REST API -->

# API

## API URL

`http://localhost:3000`

## API Routes List:

### Servers

#### 1. Create Server

> Route

```
 POST /api/servers
```

> Body

```javascript
{
    name: String,
    imageUrl: String
}
```

#### 2. Update Server

> Route

```
 PATCH /api/servers/{serverId}
```

> Paremeter

```javascript
serverId: String;
```

> Body

```javascript
{
    name: String,
    imageUrl: String
}
```

#### 3. Delete Server

> Route

```
 DELETE /api/servers/{serverId}
```

> Paremeter

```javascript
serverId: String;
```

#### 4. Leave Server

> Route

```
 PATCH /api/servers/{serverId}/leave
```

> Paremeter

```javascript
serverId: String;
```

#### 5. Generate Server Invite Code

> Route

```
 PATCH /api/servers/{serverId}/invite-code
```

> Paremeter

```javascript
serverId: String;
```

### Channels

#### 1. Create Channel

> Route

```
 POST /api/channels
```

> Query Paremeter

```javascript
serverId: String;
```

> Body

```javascript
{
    name: String,
    type: Enum
}
```

#### 2. Delete Channel

> Route

```
 DELETE /api/channels/{channelId}
```

> Paremeter

```javascript
channelId: String;
```

> Query Paremeter

```javascript
serverId: String;
```

#### 3. Update Channel

> Route

```
 PATCH /api/channels/{channelId}
```

> Paremeters

```javascript
channelId: String;
```

> Query Paremeter

```javascript
serverId: String;
```

> Body

```javascript
{
    name: String,
    type: Enum
}
```

### Members

#### 1. Delete Member

> Route

```
 DELETE /api/members/{memberId}
```

> Paremeter

```javascript
memberId: String;
```

> Query Paremeter

```javascript
serverId: String;
```

#### 2. Update Member

> Route

```
 PATCH /api/members/{memberId}
```

> Paremeters

```javascript
memberId: String;
```

> Query Paremeter

```javascript
serverId: String;
```

> Body

```javascript
{
  role: Enum;
}
```

### Direct Messages

#### 1. Get Direct Messages

> Route

```
 GET /api/direct-messages
```

> Query Paremeters

```javascript
cursor: String;
conversationId: String;
```

#### 2. Create Direct Message

> Route

```
 POST /api/socket/direct-messages
```

> Query Paremeter

```javascript
conversationId: String;
```

> Body

```javascript
{
    content: String,
    fileUrl: String | Null
}
```

#### 3. Update Direct Message

> Route

```
 PATCH /api/socket/direct-messages/{directMessageId}
```

> Query Paremeter

```javascript
conversationId: String;
```

> Parameter

```javascript
directMessageId: String;
```

> Body

```javascript
{
    content: String,
}
```

#### 4. Delete Direct Message

> Route

```
 DELETE /api/socket/direct-messages/{directMessageId}
```

> Query Paremeter

```javascript
conversationId: String;
```

> Parameter

```javascript
directMessageId: String;
```

### Messages

#### 1. Get Messages

> Route

```
 GET /api/messages
```

> Query Paremeters

```javascript
cursor: String;
channelId: String;
```

#### 2. Create Message

> Route

```
 POST /api/socket/messages
```

> Query Paremeter

```javascript
channelId: String;
serverId: String;
```

> Body

```javascript
{
    content: String,
    fileUrl: String | Null
}
```

#### 3. Update Message

> Route

```
 PATCH /api/socket/messages/{messageId}
```

> Query Paremeter

```javascript
channelId: String;
serverId: String;
```

> Parameter

```javascript
messageId: String;
```

> Body

```javascript
{
    content: String,
}
```

#### 4. Delete Message

> Route

```
 DELETE /api/socket/messages/{messageId}
```

> Query Paremeter

```javascript
channelId: String;
serverId: String;
```

> Parameter

```javascript
messageId: String;
```

### Livekit

#### 1. Get Room

> Route

```
 GET /api/livekit
```

> Query Paremeter

```javascript
room: String;
username: String;
```

<!-- CONTACT -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

`Wilmer Lopez Cespedes`

- Correo: wilmerlopezcespedes@gmail.com
- <a href="https://www.linkedin.com/in/wilmer-lopez-cespedes/" target="_blank">LinkedIn</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
