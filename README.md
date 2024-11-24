# TU Online Request Backend
## This is a backend development branch that is managing all the database and website data transfers
## Please Note that this is a raw Spring Boot App project so if you want to run on tomcat you need to build your own .war files

---

## Section 1 : DBO Columns Explanation

### Column 1 : Request Table

| Columns Name | Explaination | Comments | Example
|---|---|---|---|
| Id | ID of the dataset that is auto-generated by Spring Boot Apps || 2
| status | Status of the current request | Please Look Section 3 for more info | 200 |
| request type | type of the request | Please Look Section 2 for more info | 4 |
| Username | 10 Digit of TU Student ID || 6609681231 |
| date & time | Date and time of the request at the time that user pressed submit / saved button (System is not save the time when draft code is send) | Seperate by ¶|16¶11¶2022¶15¶36¶49|
| Advisor Name | Name of the Student Advisor || ลัมพาพรรณ พันชูจิตร
| additional request data | Request Data that is coressponding to each type of request | Please Look Section 2 For more info | true¶50000¶เนื่องจากต้องการย้ายสถานศึกษา
| adress | adress of the requestor | this is a combined adress that is seperated in the input field with seperated by ¶ | 4/3 ถนนศรีสุทัศน์¶ตำบลตลาดใหญ่¶อำเภอเมือง¶จังหวัดภูเก็ต|
| base64_file1 | Base64 of the document files | Maximun String Length is 2 Million Character
| base64_file2 | Base64 of the document files | Maximun String Length is 2 Million Character
| base64_file3 | Base64 of the document files | Maximun String Length is 2 Million Character
| base64_file4 | Base64 of the document files | Maximun String Length is 2 Million Character

* Note : base64_file1-4 is not sent raw data when called list of request to avoid unnessary data transfer and filling the ram of the cilent machine. To retrived data please look at the section 5 for more info

### Column 2 : Employee Table
| Columns Name | Explaination | Comments | Example
|---|---|---|---|
| FullName_TH | Fullname of employee in Thai Language | This column is use exclusively to compare name | ลัมพาพรรณ พันชูจิต
| FullName_EN | Fullname of employee in English Language || Lamphaphan Phanchuchit
| Phone Number | 9 - 10 digits Phone number | Phone Number must be number only (No - in any digits)|012345698
| Faculty | Thai Faculty Name | Faculty can be anything like PSM, TULiB| คณะวิทยาศาสตร์และเทคโนโลยี
| Department | Thai sub-faculty name || สาขาวิทยาการคอมพิวเตอร์
| Adress | Adress of that employee seperate by ¶ | Please Look at section ... for more info| 99 หมู่ 18 ถ.พหลโยธิน¶คลองหนึ่ง¶คลองหลวง¶ปทุมธานี
| Position ID |-| Deprecated||
| Employee Type | Type of the Employee | Please look at section 4 for more info | 10 |




---
## Section 2 : Request Type Explanation
The system can be store every request type data but each request type have their own requirement data. Here is a lookup table of each position of data that store in 1 long text that is seperated by ¶

### Request type in current system
1. จดทะเบียนรายวิชาล่าช่า
2. ถอนรายวิชาล่าช้า
3. จดทะเบียนรายวิชานอกหลักสูตร
4. ลาออก
99. คำร้องอื่น ๆ

### Request Body Form
Example : ทดสอบ1¶ทดสอบ2¶ทดสอบ3 ; ¶ is a seperator chunk of data

| ID | Request | Chunk0 | Chunk1 | Chunk2 | Chunk3 | Chunk4 | Chunk5 | Chunk6 | Chunk7 | Chunk8 | Chunk9 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | ไม่มีคำร้อง |
| 1 | จดทะเบียนรายวิชาล่าช้า |จำนวนวิชาทั้งหมด|Array of รหัสวิชา|Array of ชื่อวิชา | Array of รหัส Section | Array of ปีหลักสูตร | เหตุผลที่ขอจดรายวิชาล่าช้า |
| 2 | ถอนรายวิชาล่าช้า |จำนวนวิชาทั้งหมด|Array of รหัสวิชา|Array of ชื่อวิชา | Array of รหัส Section| Array of ปีหลักสูตร  | เหตุผลที่ขอถอนรายวิชาล่าช้า |
| 3 | จดทะเบียนรายวิชานอกหลักสูตร |จำนวนวิชาทั้งหมด|Array of รหัสวิชา|Array of ชื่อวิชา | Array of รหัส Section | Array of ปีหลักสูตร | เหตุผลที่ขอจดทะเบียนรายวิชานอกหลักสูตร |
| 4 | ลาออก | Boolene of มีภาระคงค้างหรือไม่ | จำนวนเงินที่คงค้าง (Ignore if Chunck 0 False) | เหตุผลที่ขอลาออก |
| 99 | คำร้องอื่น ๆ | ชื่อคำร้อง | สิ่งที่จำนงค์ | ระดับความสำคัญ | Array of ชื่อผู้รองรับ |

---
##Section 3 : Request Status Explanation

| ID | Status | Explain | Comment |
| --- | --- | --- | --- |
| 0 | Null Request | Do nothing | |
|-|
| 100 | Request Draft | The requested that is saved from user when user pressed the draft button
|-|
| 200 | Request Save to System Successfully | Request is Saved to system and ready to increment to next code | Next Code : 210
| 201 | Request Save Error | Request Cannot be saved because of the problem |
| 210 | Request Send to Advisor Successfully via Email | | Next Code : 220 If approved, 221 If not approved
| 211 | Request cannot Send to Advisor Email | |
| 220 | Request Approved to Advisor | | Next Code : 230
| 221 | Request Declined by Advisor because not clear request | |
| 230 | Request Send to Faculty Successfully | | Next Code : 240 If approved, 241 if declined
| 240 | Request Approved by Faculty | |
| 241 | Request Decline by Faculty | |
| 250 | Request Send to คณะบดี Successfully |
| 260 | Request Approved by คณะบดี | |Next Code : 270
| 261 | Request Decline by คณะบดี | |
| 270 | Request Send to ฝ่ายที่เกี่ยวข้อง |
| 280 | Request Approved by ฝ่าย | | Next Code : 290
| 290 | Request Done Successfully | |Next Code : 300
| 300 | Request Closed || Next Code : None (Not Increment anymore if require will increment to 400)
| 400 | Request Archive |Archive the old request|

---
## Section 4 : Employee Type
| ID | Type | Explain | Comment |
| --- | --- | --- | --- |
| 10 | อาจารย์ผู้สอน สภาวะปกติ | | เป็นสภาวะปกติของอาจารย์ผู้สอน
| 11 | อาจารย์ผู้สอน ลาออก
| 12 | อาจารย์ผู้สอน ผู้ช่วยพิเศษ
| 30 | เจ้าหน้าที่ ฝ่ายช่างอาคาร
| 31 | เจ้าหน้าที่ ฝ่าย IT
| 32 | เจ้าหน้าที่ ฝ่ายความปลอดภัย
| 33 | เจ้าหน้าที่ฝ่ายเทคนิค
| 50 | โดเมนคณะ
| 90 | ฝ่ายอธิการบดี || ฝ่ายอธิการบดีไม่ได้กำหนดว่าใครเป็นคนอนุมัติ


---
## Section 5 : API Calling
Note :
1. Please set Contype-Type in the http header as application/json
2. There are 2 main methods GET and POST method which is used depending on the type of the sender
3. Every Http Request, there will be every JSON return coressponding to the data that we sending, if the request failed to send, the status return will be 4XX - 5XX


### 5.1 Request Type

1. Store Value to Database

URL : <i>Domain Name</i>/api/group3/request

Method : POST

Body :
```
{
  "requestStatus" : $long value Non-Null$,
  "requestType" : $long value Non-Null$,
  "username" : $String Non-Null$,
  "datetimeRequest" : $String Non-Null$,
  "advisorNameTH" : $String Non-Null$,
  "requestData" : $2147483647 MAX long String Nullable$,
  "homeAdress" : $2147483647 MAX long String Nullable$,
  "storefile1" : $2147483647 MaX long String Nullable$,
  "storefile2" : $2147483647 MAX long String Nullable$,
  "storefile3" : $2147483647 MAX long String Nullable$,
  "storefile4" : $2147483647 MAX long String Nullable$
}
```
Return Value :
```
{
  "id" : $Hibernate Generated ID$,
  "requestStatus" : $long value Non-Null$,
  "requestType" : $long value Non-Null$,
  "username" : $String Non-Null$,
  "datetimeRequest" : $String Non-Null$,
  "advisorNameTH" : $String Non-Null$,
  "requestData" : $2147483647 MAX long String Nullable$,
  "homeAdress" : $2147483647 MAX long String Nullable$,
  "storefile1" : $2147483647 MAX long String Nullable$,
  "storefile2" : $2147483647 MAX long String Nullable$,
  "storefile3" : $2147483647 MAX long String Nullable$,
  "storefile4" : $2147483647 MAX long String Nullable$
}
```

2. Read All Value that store in database

URL : <i>Domain Name</i>/api/group3/request

Method : GET

Body : <i>None</i>

Return Value : (Array of JSON)
```
[
  {
    $JSON Return 1$
  },
  {
    $JSON Return 2$
  },
  ....
  {
    $JSON Return n$
  }

]

```
Note : JSON Return n is the same as return from 5.1 request type 1 except each JSON return represnts the all data rows that in the database

3. Read Only Value with matching RequestType ID

URL : <i>Domain Name</i>/api/group3/request/type=<i>long value indicating ID from Section 2</i>

Method : GET

Body : <i>None</i>

Return Value : (Array of JSON)
```
[
  {
    $JSON Return 1$
  },
  {
    $JSON Return 2$
  },
  ....
  {
    $JSON Return n$
  }

]

```
* Note : JSON Return n is the same as return from 5.1 request type 1 except each JSON return represnts the all data rows that match the type in the database

4. Read Only Value with matching RequestStatus ID

URL : <i>Domain Name</i>/api/group3/request/status=<i>long value indicating ID from Section 3</i>

Method : GET

Body : <i>None</i>

Return Value : (Array of JSON)
```
[
  {
    $JSON Return 1$
  },
  {
    $JSON Return 2$
  },
  ....
  {
    $JSON Return n$
  }

]

```
* Note : JSON Return n is the same as return from 5.1 request type 1 except each JSON return represnts the all data rows that match the status in the database


## 5.2 Employee
1. Store Value to Database

URL : <i>Domain Name</i>/api/group3/employee

Method : POST

Body :
```
{
  "nameTH" : $String Non-Null$,
  "nameEN" : $String Non-Null$,
  "phoneNumber" : $Long value Non-Null$,
  "adress" : $String Non-Null$,
  "positionID" : $Long value Non-Null$,
  "faculty" : $String Non-Null$,
  "employeeType" : $Long value Non-Null$
}
```
Return Value :
```
{
  "id" : $Hibernate Generated ID$,
  "nameTH" : $String Non-Null$,
  "nameEN" : $String Non-Null$,
  "phoneNumber" : $Long value Non-Null$,
  "adress" : $String Non-Null$,
  "positionID" : $Long value Non-Null$,
  "faculty" : $String Non-Null$,
  "employeeType" : $Long value Non-Null$
}
```

2. Read All Employee Rows that store in database

URL : <i>Domain Name</i>/api/group3/employee

Method : GET

Body : <i>None</i>

Return Value : (Array of JSON)
```
[
  {
    $JSON Return 1$
  },
  {
    $JSON Return 2$
  },
  ....
  {
    $JSON Return n$
  }

]

```
Note : JSON Return n is the same as return from 5.2 request type 1 except each JSON return represnts the all data rows that in the database

---

###  Protocol Version 1.2
### Document Version 1.4.5
