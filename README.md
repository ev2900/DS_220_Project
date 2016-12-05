# rest (Parking Bee Website)
Repositry for the Parking Bee Website. The site is live at 52.37.179.213:8080.
Also a  few notes about the site strcuture

- MEAN stack (minus the angular jquery instead)
- Restful API's
  - Spot (api.js)
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GET/POST/PUT/DELTE
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; http://www.parkingbee.co/api/spots <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Head Content-Type application/json
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Body <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  { <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "firstName": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "lastName": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "email": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "phoneNumber": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "title": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "type": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "adress": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "description": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "start": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "end": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "rate": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "additionalInfro": "string" <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  } <br>
  
  - Payment (payment.js)
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GET/POST/PUT/DELTE
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; http://www.parkingbee.co/payment/payment <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Head Content-Type application/json
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Body <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  { <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "id": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "number": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "security_code": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "email": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "month": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "year": "string", <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  } <br>
  
  - Email (within server.js)
      - Submit Conformation to Spot Lister <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Call url: http://www.parkingbee.co/email_conformation/:email/:id <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Variables: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email - email adress to send the email to <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; id - uniqe id for the spot which was just listed <br>

      - Submit approve/deny to Holden <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Call url: http://www.parkingbee.co/email_approval/:email/:id <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Variables: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email - email adress to send the email to <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; id - uniqe id for the spot which will be approved or denied <br>
          
      - Spot has been Approved and Listed <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Call url: http://www.parkingbee.co/email_listed/:email/:id <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Variables: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email - email adress to send the email to <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; id - uniqe id for the spot which was just approved or listed <br>

- parking_bee Data Base Collections
  - pays
  - spot_pendings
  - spot

- Server details <br><br>
  We currently have two servers running on the parking bee aws acount. The servers were set up using the following instructions: https://goo.gl/hymEv4 . One the production server which is linked to the website and the other is a test/dev server which is just for our development purposes. To provide details on the two servers. 
  - Production
      IP: 52.39.132.247 <br>
      Key pair: t2-small.pem/t2-small.ppk <br>
      Instance Type: t2-small <br>
      Code: rest/master-branch <br>

  - Development/Test  
      IP: 52.33.20.93 <br>
      Key pair: t2-micro.pem/t2-micro.ppk <br>
      Instance Type: t2-micro <br> 
      Code: rest/development <br>
